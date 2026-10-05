import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { services, type Service } from "@/lib/services";
import { site } from "@/lib/site";
import { Button, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col rounded-3xl border border-stone bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_60px_-35px_rgb(14_26_43/0.35)] sm:p-9"
    >
      <div className="flex items-start justify-between">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-ivory text-navy transition-colors duration-500 group-hover:bg-navy group-hover:text-gold-soft">
          <ServiceIcon name={service.icon} />
        </span>
        <span className="font-display text-lg text-stone-dark">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-10 font-display text-[1.9rem] leading-tight text-ink">{service.title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{service.summary}</p>
      <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
        <span className="link-underline">Learn more</span>
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}

export function PracticeAreasNotice() {
  if (site.practiceAreasConfirmed) return null;
  return (
    <p className="flex items-start gap-2.5 rounded-2xl border border-stone bg-ivory/70 px-5 py-4 text-sm leading-relaxed text-muted">
      <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
      Practice areas shown are being finalised. Please contact Toby to confirm whether he can assist with your
      particular matter.
    </p>
  );
}

export function Services({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <section aria-labelledby="services-title" className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              as={headingLevel}
              id="services-title"
              eyebrow="Services"
              title="Legal Services"
              description="Professional legal support tailored to your circumstances."
            />
          </Reveal>
          <Reveal delay={100} className="shrink-0">
            <Button href="/contact#enquiry" variant="secondary" arrow>
              Discuss Your Matter
            </Button>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <ServiceCard service={s} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-8">
          <PracticeAreasNotice />
        </Reveal>
      </Container>
    </section>
  );
}
