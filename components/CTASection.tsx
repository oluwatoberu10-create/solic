import Image from "next/image";
import { bookingHref } from "@/lib/site";
import { Button, Container, Eyebrow } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "Have a Legal Matter You Need to Discuss?",
  text = "Speak directly with Toby Wilson and discuss your situation in a professional and confidential setting.",
}: CTASectionProps) {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-navy-deep">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/southampton-town-quay.jpg"
          alt="Southampton's Town Quay and waterfront"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 to-transparent" />
      </div>
      <Container className="py-28 sm:py-40">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="light">Speak With Toby</Eyebrow>
          <h2 id="cta-title" className="display mt-6 text-[2.8rem] text-white sm:text-6xl lg:text-[4.4rem]">
            {title}
          </h2>
          <p className="mt-7 max-w-xl text-[17.5px] leading-relaxed text-white/75">{text}</p>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <Button href={bookingHref()} variant="light" arrow>
              Book a Consultation
            </Button>
            <Button href="/contact#enquiry" variant="ghost-light">
              Make an Enquiry
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
