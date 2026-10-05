import { Check, Info } from "lucide-react";
import { packages, pricingDisclaimer, type Package } from "@/lib/packages";
import { bookingHref, site } from "@/lib/site";
import { Button, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

export function PackagePrice({ pkg, tone }: { pkg: Package; tone: "light" | "dark" }) {
  const light = tone === "light";
  if (pkg.price) {
    return (
      <p className="flex items-baseline gap-2">
        {pkg.priceNote === "from" && <span className={`text-sm ${light ? "text-white/60" : "text-muted"}`}>from</span>}
        <span className={`font-display text-[3.4rem] font-medium leading-none ${light ? "text-white" : "text-ink"}`}>{pkg.price}</span>
        {pkg.priceNote && pkg.priceNote !== "from" && (
          <span className={`text-sm ${light ? "text-white/60" : "text-muted"}`}>{pkg.priceNote}</span>
        )}
      </p>
    );
  }
  return (
    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className={`font-display text-[3.4rem] font-medium leading-none ${light ? "text-white" : "text-ink"}`}>
        £<span className={`${light ? "text-gold-soft/80" : "text-gold"}`}>[Price]</span>
      </span>
      <span className={`text-xs font-medium uppercase tracking-[0.14em] ${light ? "text-white/45" : "text-muted"}`}>
        To be confirmed
      </span>
    </p>
  );
}

export function PricingCard({ pkg }: { pkg: Package }) {
  const featured = !!pkg.featured;
  return (
    <article
      aria-labelledby={`pkg-${pkg.id}`}
      className={`relative flex h-full flex-col rounded-[1.75rem] p-8 sm:p-9 ${
        featured ? "featured-package text-white lg:-my-4 lg:py-12" : "border border-stone bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className={`font-display text-lg ${featured ? "text-gold-soft" : "text-gold"}`}>{pkg.number}</span>
        <span
          className={`rounded-full px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] ${
            featured ? "border border-gold-soft/40 bg-gold-soft/10 text-gold-soft" : "border border-stone bg-ivory text-muted"
          }`}
        >
          {pkg.label}
        </span>
      </div>

      <h3 id={`pkg-${pkg.id}`} className={`mt-7 font-display text-[2rem] leading-tight ${featured ? "text-white" : "text-ink"}`}>
        {pkg.name}
      </h3>
      <div className="mt-5">
        <PackagePrice pkg={pkg} tone={featured ? "light" : "dark"} />
      </div>
      <p className={`mt-5 min-h-[3rem] text-[15px] leading-relaxed ${featured ? "text-white/70" : "text-muted"}`}>{pkg.pitch}</p>

      <Button href={bookingHref(pkg.id)} variant={featured ? "light" : "primary"} arrow className="mt-8 w-full">
        {pkg.cta}
      </Button>

      <p className={`eyebrow mt-9 border-t pt-8 ${featured ? "border-white/10 text-white/45" : "border-stone text-muted"}`}>Includes</p>
      <ul className="mt-5 space-y-3.5">
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-3 text-[15px]">
            <Check className={`mt-0.5 size-4 shrink-0 ${featured ? "text-gold-soft" : "text-gold"}`} aria-hidden />
            <span className={featured ? "text-white/85" : "text-ink/80"}>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function PricingDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`mx-auto flex max-w-3xl items-start justify-center gap-2.5 text-center text-sm leading-relaxed text-muted ${className}`}>
      <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
      <span>
        {pricingDisclaimer}
        {!site.pricesConfirmed && " The packages shown are examples; fees will be confirmed before any work begins."}
      </span>
    </p>
  );
}

export function Pricing({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="paper-texture py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            as={headingLevel}
            id="pricing-title"
            eyebrow="Pricing"
            align="center"
            title="Choose the Right Level of Support"
            description="Start with the level of legal support that best fits your situation. If you're unsure, contact Toby to discuss your requirements."
          />
        </Reveal>

        <ul className="mt-16 grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {packages.map((p, i) => (
            <li key={p.id} className="h-full">
              <Reveal delay={i * 90} className="h-full">
                <PricingCard pkg={p} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <PricingDisclaimer className="mt-14" />
        </Reveal>
      </Container>
    </section>
  );
}
