import { CalendarClock, CalendarCheck2 } from "lucide-react";
import { packages } from "@/lib/packages";
import { bookingHref, site } from "@/lib/site";
import { Button, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { PackagePrice, PricingDisclaimer } from "./Pricing";

/**
 * Consultation booking area. Set `site.bookingUrl` (Calendly, Microsoft
 * Bookings, Google Calendar appointment schedule, etc.) and every button here
 * links straight to it. Until then, buttons open the enquiry form with the
 * package pre-selected.
 */
export function BookingSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <section id="book" aria-labelledby="book-title" className="bg-ivory py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <SectionHeading
              as={headingLevel}
              id="book-title"
              eyebrow="Consultations"
              title="Book a Consultation With Toby"
              description="Choose a suitable consultation option and take the first step toward understanding your legal matter."
            />
          </Reveal>
          {!site.bookingUrl && (
            <Reveal delay={100}>
              <p className="inline-flex max-w-sm items-start gap-2.5 rounded-2xl border border-dashed border-gold/50 bg-white/60 px-4 py-3 text-[13px] leading-relaxed text-muted">
                <CalendarClock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                <span>
                  <strong className="font-semibold text-ink">Online booking — link to be connected.</strong> For now,
                  booking requests are sent through the enquiry form and Toby will arrange a time with you.
                </span>
              </p>
            </Reveal>
          )}
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {packages.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={i * 90} className="h-full">
                <div
                  className={`flex h-full flex-col rounded-3xl p-7 sm:p-8 ${
                    p.featured ? "bg-navy text-white" : "border border-stone bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <CalendarCheck2 className={`size-6 ${p.featured ? "text-gold-soft" : "text-gold"}`} aria-hidden strokeWidth={1.5} />
                    <span className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${p.featured ? "text-gold-soft" : "text-muted"}`}>
                      {p.label}
                    </span>
                  </div>
                  <h3 className={`mt-8 font-display text-[1.8rem] leading-tight ${p.featured ? "text-white" : "text-ink"}`}>{p.name}</h3>
                  <div className="mt-4 [&_span.font-display]:text-[2.5rem]">
                    <PackagePrice pkg={p} tone={p.featured ? "light" : "dark"} />
                  </div>
                  <p className={`mt-4 flex-1 text-[14.5px] leading-relaxed ${p.featured ? "text-white/70" : "text-muted"}`}>{p.pitch}</p>
                  <Button href={bookingHref(p.id)} variant={p.featured ? "light" : "primary"} arrow className="mt-8 w-full">
                    Book Consultation
                  </Button>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <PricingDisclaimer className="mt-12" />
        </Reveal>
      </Container>
    </section>
  );
}
