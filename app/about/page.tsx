import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutToby } from "@/components/AboutToby";
import { Credentials } from "@/components/Credentials";
import { WhyToby } from "@/components/WhyToby";
import { Process } from "@/components/Process";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Toby",
  description:
    "Meet Toby Wilson, a UK solicitor based in Southampton offering clear communication, practical guidance and confidential legal support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Toby"
        title={
          <>
            A Personal Approach to <span className="italic text-gold-soft">Legal Support</span>
          </>
        }
        description="Toby Wilson is a UK solicitor based in Southampton. Speak directly with Toby and get clear guidance on your legal matter."
        crumbs={[{ label: "About Toby" }]}
        image="/images/southampton-bargate-dusk.jpg"
      />
      <AboutToby variant="page" />
      <Credentials />
      <WhyToby />
      <Process />
      <CTASection />
    </>
  );
}
