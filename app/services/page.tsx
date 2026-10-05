import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { ClientTypes } from "@/components/ClientTypes";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Legal Services",
  description:
    "Legal services from Toby Wilson, a solicitor in Southampton — professional legal support tailored to your circumstances.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Legal Support, <span className="italic text-gold-soft">Tailored to You</span>
          </>
        }
        description="Explore the areas Toby can help with. Every legal matter is different, so the best first step is a conversation about your circumstances."
        crumbs={[{ label: "Services" }]}
      />
      <Services />
      <ClientTypes />
      <CTASection />
    </>
  );
}
