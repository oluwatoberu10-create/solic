import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FilePenLine } from "lucide-react";
import { getLegalPage, legalPages } from "@/lib/legal";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/primitives";

export function generateStaticParams() {
  return legalPages.map((p) => ({ legal: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/[legal]">): Promise<Metadata> {
  const { legal } = await params;
  const page = getLegalPage(legal);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    // Keep draft compliance pages out of search results until finalised.
    robots: page.draft ? { index: false, follow: true } : undefined,
  };
}

export default async function LegalPage({ params }: PageProps<"/[legal]">) {
  const { legal } = await params;
  const page = getLegalPage(legal);
  if (!page) notFound();

  return (
    <>
      <PageHero eyebrow="Legal" title={page.title} description={page.description} crumbs={[{ label: page.title }]} />
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {page.draft && (
              <p className="flex items-start gap-3 rounded-2xl border border-dashed border-gold/50 bg-gold/[0.05] p-5 text-sm leading-relaxed text-ink/80">
                <FilePenLine className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <span>
                  <strong className="font-semibold">To be completed.</strong> This page is an outline awaiting final,
                  reviewed wording. Items in square brackets need to be added before publication.
                </span>
              </p>
            )}
            <div className="mt-12 space-y-10">
              {page.sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="font-display text-[1.9rem] leading-tight text-ink">{s.heading}</h2>
                  <p className={`mt-3 text-[16.5px] leading-relaxed ${s.body.startsWith("[") ? "text-gold" : "text-ink/80"}`}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
