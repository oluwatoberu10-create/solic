import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getInsights, insightsDisclaimer, type Insight } from "@/lib/insights";
import { Button, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { LegalDisclaimer } from "./LegalDisclaimer";

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone bg-white transition-shadow duration-500 hover:shadow-[0_30px_60px_-35px_rgb(14_26_43/0.35)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-ivory">
        <Image
          src={insight.image}
          alt={insight.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="eyebrow text-gold">{insight.category}</p>
        <h3 className="mt-4 font-display text-[1.65rem] leading-tight text-ink">
          <Link href={`/insights/${insight.slug}`} className="after:absolute after:inset-0">
            {insight.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{insight.summary}</p>
        <div className="mt-7 flex items-center justify-between border-t border-stone pt-5 text-sm">
          <span className="text-muted">{insight.readingTime}</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-navy">
            Read Article
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </div>
    </article>
  );
}

export async function Insights({ headingLevel = "h2", limit }: { headingLevel?: "h1" | "h2"; limit?: number }) {
  const all = await getInsights();
  const items = limit ? all.slice(0, limit) : all;

  return (
    <section aria-labelledby="insights-title" className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              as={headingLevel}
              id="insights-title"
              eyebrow="Insights"
              title="Legal Insights"
              description="Short, plain-English articles to help you think through a legal question before you speak with a solicitor."
            />
          </Reveal>
          {limit && (
            <Reveal delay={100} className="shrink-0">
              <Button href="/insights" variant="secondary" arrow>
                All Insights
              </Button>
            </Reveal>
          )}
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((insight, i) => (
            <li key={insight.slug}>
              <Reveal delay={i * 90} className="h-full">
                <InsightCard insight={insight} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10">
          <LegalDisclaimer>{insightsDisclaimer}</LegalDisclaimer>
        </Reveal>
      </Container>
    </section>
  );
}
