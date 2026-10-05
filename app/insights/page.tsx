import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Insights } from "@/components/Insights";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Legal Insights",
  description:
    "Plain-English legal insights from Toby Wilson, a UK solicitor in Southampton. General information only — not legal advice.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Thoughtful Guidance, <span className="italic text-gold-soft">Plainly Explained</span>
          </>
        }
        description="Articles to help you think through a legal question and prepare for a conversation with a solicitor."
        crumbs={[{ label: "Insights" }]}
        image="/images/documents.jpg"
      />
      <Insights />
      <CTASection />
    </>
  );
}
