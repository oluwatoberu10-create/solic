import Link from "next/link";
import { MapPin } from "lucide-react";
import { bookingHref, legalLinks, nav, site } from "@/lib/site";
import { Container, Editable } from "./ui/primitives";
import { Logo } from "./Logo";

export function Footer() {
  const { sraNumber, information, indemnity } = site.regulatory;

  return (
    <footer className="bg-navy-deep text-white">
      <Container className="pt-20 sm:pt-24">
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div>
            <Logo tone="light" subtitle="UK Solicitor" />
            <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-white/60">
              Professional legal support in Southampton, United Kingdom.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-white/50">
              <MapPin className="size-4 text-gold-soft" aria-hidden />
              {site.location}
            </p>
            <Link
              href={bookingHref()}
              className="mt-8 inline-flex min-h-11 items-center rounded-full bg-gold-soft px-5 text-sm font-semibold text-navy-deep transition-colors hover:bg-white"
            >
              Book a Consultation
            </Link>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-white/40">Navigate</p>
            <ul className="mt-6 space-y-3.5 text-[15px]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-white/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="eyebrow text-white/40">Legal</p>
            <ul className="mt-6 space-y-3.5 text-[15px]">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-white/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Regulatory information — edit in lib/site.ts */}
        <section aria-labelledby="regulatory-title" className="border-b border-white/10 py-10">
          <h2 id="regulatory-title" className="eyebrow text-white/40">
            Regulatory Information
          </h2>
          <dl className="mt-6 grid gap-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-white/80">SRA Number</dt>
              <dd className="mt-1.5 text-white/55">
                <Editable value={sraNumber} label="Add SRA Number" tone="light" />
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white/80">Regulatory Information</dt>
              <dd className="mt-1.5 text-white/55">
                <Editable value={information} label="Add Regulatory Information" tone="light" />
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white/80">Professional Indemnity Information</dt>
              <dd className="mt-1.5 text-white/55">
                <Editable value={indemnity} label="Add if applicable" tone="light" />
              </dd>
            </div>
          </dl>
        </section>

        <div className="flex flex-col gap-4 py-8 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Toby Wilson. All rights reserved.</p>
          <p>
            Information on this website is general and does not constitute legal advice.{" "}
            <Link href="/credits" className="underline underline-offset-2 hover:text-white/70">
              Image credits
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
