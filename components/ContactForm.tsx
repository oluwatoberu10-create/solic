"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CheckCircle2, ChevronDown, Loader2, Send } from "lucide-react";
import { services } from "@/lib/services";
import { packages } from "@/lib/packages";
import { LegalDisclaimer } from "./LegalDisclaimer";

const serviceOptions = [...services.map((s) => s.formLabel), "Other"];

type Status = { state: "idle" } | { state: "sending" } | { state: "sent" } | { state: "error"; message: string };

const fieldBase =
  "mt-2 block w-full rounded-xl border border-stone bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/60 transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10";
const labelBase = "text-[13.5px] font-semibold text-ink";

export function ContactForm() {
  const params = useSearchParams();
  const pkg = packages.find((p) => p.id === params.get("package"));
  const presetService = services.find((s) => s.slug === params.get("service"))?.formLabel ?? "";

  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error ?? "Something went wrong. Please try again.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="flex flex-col items-start rounded-3xl border border-stone bg-white p-8 sm:p-10">
        <CheckCircle2 className="size-10 text-forest" aria-hidden strokeWidth={1.5} />
        <h3 className="mt-6 font-display text-3xl text-ink">Thank you — your enquiry has been sent.</h3>
        <p className="mt-3 text-[15.5px] leading-relaxed text-muted">
          Toby will review your message and reply by email to discuss the next step.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-8 text-sm font-semibold text-navy underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      id="enquiry-form"
      noValidate
      onSubmit={onSubmit}
      aria-describedby="form-disclaimer"
      className="rounded-3xl border border-stone bg-white p-6 sm:p-10"
    >
      {pkg && (
        <p className="mb-7 rounded-2xl bg-ivory px-4 py-3 text-sm text-ink">
          Requesting: <strong className="font-semibold">{pkg.name}</strong>
        </p>
      )}
      <input type="hidden" name="package" value={pkg?.name ?? ""} />
      {/* Honeypot — hidden from people, tempting to bots. */}
      <div className="sr-only" aria-hidden>
        <label>
          Company website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelBase}>
            Full Name <span className="text-burgundy" aria-hidden>*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldBase} />
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>
            Email <span className="text-burgundy" aria-hidden>*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldBase} />
        </div>
        <div>
          <label htmlFor="service" className={labelBase}>
            Legal Service <span className="text-burgundy" aria-hidden>*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              required
              defaultValue={presetService}
              className={`${fieldBase} appearance-none pr-11`}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 mt-1 size-4 -translate-y-1/2 text-muted" aria-hidden />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelBase}>
            Brief Description of Matter <span className="text-burgundy" aria-hidden>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            maxLength={2000}
            placeholder="A short summary is all that's needed at this stage."
            className={`${fieldBase} resize-y`}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          <span className="text-burgundy">*</span> Required fields
        </p>
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-navy px-7 text-[15px] font-semibold text-white transition-colors hover:bg-navy-soft disabled:opacity-60"
        >
          {status.state === "sending" ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            <Send className="size-4" aria-hidden />
          )}
          {status.state === "sending" ? "Sending…" : "Send Enquiry"}
        </button>
      </div>

      <div aria-live="polite">
        {status.state === "error" && (
          <p role="alert" className="mt-5 rounded-xl border border-burgundy/30 bg-burgundy/5 px-4 py-3 text-sm text-burgundy">
            {status.message}
          </p>
        )}
      </div>

      <div id="form-disclaimer" className="mt-8 border-t border-stone pt-6">
        <LegalDisclaimer>
          Please do not include highly sensitive or confidential information in this form. Submitting an enquiry does
          not by itself create a solicitor-client relationship.
        </LegalDisclaimer>
      </div>
    </form>
  );
}
