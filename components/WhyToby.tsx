import Image from "next/image";
import { UserRound, MessagesSquare, Route, ShieldCheck } from "lucide-react";
import { Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

const blocks = [
  { icon: UserRound, title: "Personal Service", text: "Work directly with Toby rather than navigating a large team." },
  { icon: MessagesSquare, title: "Clear Communication", text: "Legal matters are explained in straightforward language." },
  {
    icon: Route,
    title: "Practical Approach",
    text: "Focus on understanding your situation and identifying appropriate next steps.",
  },
  {
    icon: ShieldCheck,
    title: "Professional & Discreet",
    text: "Your legal matter is approached with professionalism and confidentiality.",
  },
];

export function WhyToby() {
  return (
    <section aria-labelledby="why-title" className="relative isolate overflow-hidden bg-navy-deep py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/modern-architecture.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/80 to-navy-deep" />
      </div>
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              id="why-title"
              eyebrow="Why Work With Toby"
              title={
                <>
                  Professional Legal Support <span className="italic text-gold-soft">Without the Complexity</span>
                </>
              }
              tone="light"
            />
          </Reveal>
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {blocks.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="bg-navy-deep">
                <Reveal delay={i * 80} className="h-full p-8 sm:p-9">
                  <Icon className="size-6 text-gold-soft" aria-hidden strokeWidth={1.5} />
                  <h3 className="mt-7 font-display text-[1.65rem] text-white">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">{text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
