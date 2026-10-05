import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { BookingSection } from "@/components/BookingSection";

export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description:
    "Contact Toby Wilson, a UK solicitor in Southampton. Tell Toby briefly about your legal matter and discuss your situation confidentially.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Discuss Your Situation <span className="italic text-gold-soft">Confidentially</span>
          </>
        }
        description="Speak directly with Toby. Share a few details about your legal matter and he will be in touch to arrange the next step."
        crumbs={[{ label: "Contact" }]}
        image="/images/southampton-town-quay.jpg"
      />
      <ContactSection />
      <BookingSection />
    </>
  );
}
