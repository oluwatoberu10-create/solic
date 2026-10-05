import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getInsight, getInsights, insightsDisclaimer } from "@/lib/insights";
import { PageHero } from "@/components/PageHero";
import { InsightCard, formatDate } from "@/components/Insights";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { Button, Container } from "@/components/ui/primitives";
import { CTASection } from "@/components/CTASection";

export async function generateStaticParams() {
  return (await getInsights()).map((i) => ({ slug: i.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.summary,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: { type: "article", title: insight.title, description: insight.summary, publishedTime: insight.published },
  };
}

export default async function InsightPage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) notFound();
  const more = (await getInsights()).filter((i) => i.slug !== insight.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={insight.category}
        title={insight.title}
        crumbs={[{ label: "Insights", href: "/insights" }, { label: insight.category }]}
        image={insight.image}
      >
        <p className="mt-8 text-sm text-white/55">
          By Toby Wilson · <time dateTime={insight.published}>{formatDate(insight.published)}</time> · {insight.readingTime}
        </p>
      </PageHero>

      <article className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
              <Image src={insight.image} alt={insight.imageAlt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
            </div>

            <p className="mt-12 font-display text-[1.7rem] leading-snug text-ink sm:text-[1.9rem]">{insight.summary}</p>
            <div className="mt-10 space-y-6 text-[17px] leading-[1.8] text-ink/80">
              {insight.body.map((block) =>
                block.startsWith("## ") ? (
                  <h2 key={block} className="!mt-12 font-display text-[1.9rem] leading-tight text-ink">
                    {block.slice(3)}
                  </h2>
                ) : (
                  <p key={block}>{block}</p>
                ),
              )}
            </div>

            <div className="mt-14 rounded-3xl border border-stone bg-ivory p-7 sm:p-9">
              <LegalDisclaimer>{insightsDisclaimer}</LegalDisclaimer>
              <p className="mt-5 text-[15.5px] leading-relaxed text-ink/80">
                If you have a question about your own circumstances, you can speak directly with Toby.
              </p>
              <div className="mt-6">
                <Button href="/contact#enquiry" arrow>
                  Speak With Toby
                </Button>
              </div>
            </div>

            <Link href="/insights" className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-navy">
              <ArrowLeft className="size-4" aria-hidden /> All insights
            </Link>
          </div>

          {more.length > 0 && (
            <section aria-labelledby="more-insights" className="mx-auto mt-24 max-w-5xl">
              <h2 id="more-insights" className="display text-4xl text-ink">
                More insights
              </h2>
              <ul className="mt-10 grid gap-5 sm:grid-cols-2">
                {more.map((i) => (
                  <li key={i.slug}>
                    <InsightCard insight={i} />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </Container>
      </article>

      <CTASection />
    </>
  );
}
