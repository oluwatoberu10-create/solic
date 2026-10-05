import Image from "next/image";
import { MapPin, ShieldCheck, MessageSquareText } from "lucide-react";
import { bookingHref, site } from "@/lib/site";
import { Button, Container } from "./ui/primitives";
import { Portrait } from "./Portrait";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy-deep">
      {/* Backdrop: Southampton's Bargate at dusk */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/southampton-bargate-dusk.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="slow-zoom object-cover object-[50%_40%] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/60" />
      </div>

      <Container className="grid min-h-[100svh] items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24 lg:pt-36">
        <div>
          <p className="rise eyebrow inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-white/80 backdrop-blur">
            <MapPin className="size-3.5 text-gold-soft" aria-hidden />
            {site.location}
          </p>

          <h1
            id="hero-title"
            className="rise display mt-8 text-[2.9rem] text-white sm:text-[4rem] lg:text-[4.5rem] xl:text-[4.9rem]"
            style={{ animationDelay: "80ms" }}
          >
            Clear Legal Guidance.{" "}
            <span className="block italic text-gold-soft">Directly From Toby Wilson.</span>
          </h1>

          <span className="rule-grow mt-9 block h-px w-24 bg-gold-soft/70" aria-hidden />

          <p className="rise mt-8 max-w-xl text-[17.5px] leading-relaxed text-white/75" style={{ animationDelay: "180ms" }}>
            A Southampton-based UK solicitor providing professional, practical, and confidential legal support for
            individuals and businesses.
          </p>

          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "260ms" }}>
            <Button href={bookingHref()} variant="light" arrow>
              Book a Consultation
            </Button>
            <Button href="/services" variant="ghost-light">
              Explore Services
            </Button>
          </div>

          <ul className="rise mt-12 flex flex-col gap-4 text-sm text-white/65 sm:flex-row sm:gap-8" style={{ animationDelay: "340ms" }}>
            <li className="flex items-center gap-2.5">
              <MessageSquareText className="size-4 text-gold-soft" aria-hidden />
              Speak directly with Toby
            </li>
            <li className="flex items-center gap-2.5">
              <ShieldCheck className="size-4 text-gold-soft" aria-hidden />
              Discuss your situation confidentially
            </li>
          </ul>
        </div>

        <div className="rise relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: "200ms" }}>
          <div className="absolute -inset-3 rounded-[2rem] border border-white/10" aria-hidden />
          <Portrait priority className="aspect-[4/5] rounded-[1.6rem] shadow-[0_60px_120px_-40px_rgb(0_0_0/0.8)]" />
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-navy/85 p-5 backdrop-blur-xl sm:left-auto sm:right-[-1.5rem] sm:w-72">
            <p className="eyebrow text-gold-soft">Speak with Toby</p>
            <p className="mt-2 text-[15px] leading-snug text-white/85">Get clear guidance on your legal matter.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
