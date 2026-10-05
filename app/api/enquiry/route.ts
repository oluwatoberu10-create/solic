import { NextResponse } from "next/server";

/**
 * Enquiry form handler.
 *
 * Delivery: set ENQUIRY_WEBHOOK_URL to any endpoint that accepts a JSON POST —
 * e.g. a Make / Zapier / n8n webhook that emails Toby or writes to a CRM.
 * Without it, enquiries are only logged in development, and production returns
 * a clear error so no enquiry is silently lost.
 */

type Enquiry = {
  name: string;
  email: string;
  service: string;
  message: string;
  package: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max = 200) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: quietly accept and drop bot submissions.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const enquiry: Enquiry = {
    name: clean(body.name),
    email: clean(body.email),
    service: clean(body.service),
    message: clean(body.message, 2000),
    package: clean(body.package),
  };

  if (!enquiry.name || !EMAIL_RE.test(enquiry.email) || !enquiry.service || !enquiry.message) {
    return NextResponse.json({ error: "Please complete all required fields with a valid email address." }, { status: 422 });
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...enquiry, receivedAt: new Date().toISOString(), source: "tobywilson-website" }),
    }).catch(() => null);
    if (!res?.ok) {
      return NextResponse.json({ error: "Your enquiry couldn't be sent just now. Please try again shortly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("[enquiry] (no ENQUIRY_WEBHOOK_URL set — logged only)", enquiry);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { error: "The enquiry form isn't connected yet. Please try again later." },
    { status: 503 },
  );
}
