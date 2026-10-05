import { MessageCircle, Compass, Briefcase, Lock } from "lucide-react";
import { Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

const features = [
  { icon: MessageCircle, title: "Direct Communication", text: "Speak directly with Toby about your legal requirements." },
  { icon: Compass, title: "Clear Guidance", text: "Understand your legal position and available options." },
  { icon: Briefcase, title: "Professional Service", text: "A professional and structured approach to your legal matter." },
  { icon: Lock, title: "Confidential Support", text: "Sensitive legal matters are handled with discretion." },
];

export function TrustIntro() {
  return (
    <section aria-labelledby="approach-title" className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <SectionHeading id="approach-title" eyebrow="A Personal Approach" title="Legal Support With a Personal Approach" />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-[17px] leading-relaxed text-muted lg:pb-2">
              Legal matters can be complicated. Toby&apos;s approach is to make the process easier to understand by
              providing clear guidance, explaining your options, and helping you understand the appropriate next steps.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="bg-paper">
              <Reveal delay={i * 80} className="group h-full p-8 transition-colors duration-500 hover:bg-ivory sm:p-9">
                <span className="flex size-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-500 group-hover:bg-navy group-hover:text-gold-soft">
                  <Icon className="size-5" aria-hidden strokeWidth={1.6} />
                </span>
                <h3 className="mt-7 text-lg font-semibold tracking-[-0.01em] text-ink">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
