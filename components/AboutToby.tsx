import { MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { Button, Container, Eyebrow } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { Portrait } from "./Portrait";

type AboutTobyProps = {
  /** On the dedicated About page the CTA points to the enquiry form instead. */
  variant?: "teaser" | "page";
};

export function AboutToby({ variant = "teaser" }: AboutTobyProps) {
  return (
    <section aria-labelledby="about-title" className="paper-texture py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <Portrait className="aspect-[4/5] rounded-[1.75rem]" />
          <div className="absolute -right-3 top-10 hidden h-[70%] w-px bg-gold/40 lg:block" aria-hidden />
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>About Toby</Eyebrow>
          <h2 id="about-title" className="display mt-5 text-[2.6rem] text-ink sm:text-5xl lg:text-[3.6rem]">
            Meet Toby Wilson
          </h2>
          <p className="mt-8 text-[18px] leading-relaxed text-ink/85">
            Toby Wilson is a UK solicitor based in Southampton, providing professional legal support to clients dealing
            with a range of legal matters.
          </p>
          <p className="mt-5 text-[16.5px] leading-relaxed text-muted">
            His approach is centred around clear communication, practical guidance, and understanding the individual
            circumstances behind every legal matter.
          </p>

          <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-2xl italic leading-snug text-ink/90">
            &ldquo;Speak directly with Toby. Get clear guidance on your legal matter.&rdquo;
          </blockquote>

          <p className="mt-8 flex items-center gap-2 text-sm font-medium text-muted">
            <MapPin className="size-4 text-gold" aria-hidden /> Based in {site.location}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {variant === "teaser" ? (
              <Button href="/about" arrow>
                Learn More About Toby
              </Button>
            ) : (
              <Button href="/contact#enquiry" arrow>
                Speak With Toby
              </Button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
