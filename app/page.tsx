import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustIntro } from "@/components/TrustIntro";
import { AboutToby } from "@/components/AboutToby";
import { Credentials } from "@/components/Credentials";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { WhyToby } from "@/components/WhyToby";
import { ClientTypes } from "@/components/ClientTypes";
import { Insights } from "@/components/Insights";
import { CTASection } from "@/components/CTASection";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIntro />
      <AboutToby />
      <Credentials />
      <Services limit={6} />
      <Pricing />
      <Process />
      <WhyToby />
      <ClientTypes />
      <Insights limit={3} />
      <CTASection />
      <BookingSection />
      <ContactSection />
    </>
  );
}
