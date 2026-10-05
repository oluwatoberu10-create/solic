import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { BookingSection } from "@/components/BookingSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pricing & Consultations",
  description:
    "Consultation and legal support options with Toby Wilson, a UK solicitor in Southampton. Fees depend on the nature and complexity of each matter.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Clear Options, <span className="italic text-gold-soft">Transparent Conversations</span>
          </>
        }
        description="Start with the level of legal support that best fits your situation. If you're unsure, contact Toby to discuss your requirements."
        crumbs={[{ label: "Pricing" }]}
        image="/images/office-interior.jpg"
      />
      <Pricing />
      <Process />
      <BookingSection />
      <CTASection />
    </>
  );
}
