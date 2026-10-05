import { User, Users, BadgeCheck, Store, Building } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

const types: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: User, title: "Individuals", text: "Support with personal legal matters." },
  { icon: Users, title: "Families", text: "Professional guidance for family-related legal matters." },
  { icon: BadgeCheck, title: "Professionals", text: "Legal support for personal or professional matters." },
  { icon: Store, title: "Business Owners", text: "Support with business and commercial legal requirements." },
  { icon: Building, title: "Employers", text: "Guidance relating to employment and workplace matters." },
];

export function ClientTypeCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-stone bg-white p-7 transition-all duration-500 hover:border-gold/40 hover:bg-ivory">
      <Icon className="size-6 text-gold" aria-hidden strokeWidth={1.5} />
      <h3 className="mt-10 font-display text-[1.6rem] leading-tight text-ink">{title}</h3>
      <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{text}</p>
    </div>
  );
}

export function ClientTypes() {
  return (
    <section aria-labelledby="clients-title" className="paper-texture py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            id="clients-title"
            eyebrow="Who Toby Helps"
            title="Who Toby Can Help"
            description="Whether a matter is personal or professional, the starting point is the same: a clear conversation about your situation."
          />
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {types.map((t, i) => (
            <li key={t.title}>
              <Reveal delay={i * 70} className="h-full">
                <ClientTypeCard {...t} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
