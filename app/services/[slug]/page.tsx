import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getService, serviceDisclaimer, services } from "@/lib/services";
import { bookingHref } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PracticeAreasNotice, ServiceCard } from "@/components/Services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { Button, Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/CTASection";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in Southampton`,
    description: `${service.summary} Speak with Toby Wilson, a UK solicitor based in Southampton.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-stone bg-white p-8 sm:p-9">
      <h2 className="font-display text-[1.8rem] text-ink">{title}</h2>
      <ul className="mt-6 space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15.5px] leading-relaxed text-ink/80">
            <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const enquiryHref = `/contact?service=${service.slug}#enquiry`;

  return (
    <>
      <PageHero
        eyebrow="Legal Services"
        title={service.title}
        description={service.summary}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={enquiryHref} variant="light" arrow>
            Discuss This With Toby
          </Button>
          <Button href={bookingHref()} variant="ghost-light">
            Book a Consultation
          </Button>
        </div>
      </PageHero>

      <section aria-label={`${service.title} overview`} className="paper-texture py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <Reveal>
              <span className="flex size-14 items-center justify-center rounded-2xl bg-navy text-gold-soft">
                <ServiceIcon name={service.icon} className="size-6" />
              </span>
              <div className="mt-8">
                <Eyebrow>
                  <span className="sr-only">Introduction to </span>
                  {service.title}
                </Eyebrow>
              </div>
              <p className="mt-6 font-display text-[1.9rem] leading-snug text-ink sm:text-[2.2rem]">{service.intro}</p>
              <div className="mt-10">
                <PracticeAreasNotice />
              </div>
            </Reveal>

            <div className="grid gap-5">
              <Reveal>
                <DetailList title="Who this service may help" items={service.whoItHelps} />
              </Reveal>
              <Reveal>
                <DetailList title="Typical issues" items={service.typicalIssues} />
              </Reveal>
              <Reveal>
                <DetailList title="How Toby can assist" items={service.howTobyAssists} />
              </Reveal>
              <Reveal>
                <div className="rounded-3xl bg-navy p-8 text-white sm:p-10">
                  <h2 className="font-display text-[2rem] leading-tight">Talk it through with Toby</h2>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-white/70">{serviceDisclaimer}</p>
                  <div className="mt-8">
                    <Button href={enquiryHref} variant="light" arrow>
                      Discuss This With Toby
                    </Button>
                  </div>
                </div>
              </Reveal>
              <LegalDisclaimer className="px-1">
                This page provides general information only and is not legal advice.
              </LegalDisclaimer>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="other-services" className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="other-services" className="display text-4xl text-ink sm:text-5xl">
              Other services
            </h2>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
              <ArrowLeft className="size-4" aria-hidden /> All services
            </Link>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <ServiceCard service={s} index={services.indexOf(s)} />
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
              View consultation options <ArrowRight className="size-4" aria-hidden />
            </Link>
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
