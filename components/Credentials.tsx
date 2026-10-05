import { GraduationCap, Landmark, MapPin, Scale, type LucideIcon } from "lucide-react";
import { site } from "@/lib/site";
import { Container, Editable, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

type CredentialCardProps = {
  icon: LucideIcon;
  title: string;
  value: string | null;
  placeholder: string;
};

export function CredentialCard({ icon: Icon, title, value, placeholder }: CredentialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-500 hover:border-gold-soft/30 hover:bg-white/[0.05]">
      <Icon className="size-6 text-gold-soft" aria-hidden strokeWidth={1.5} />
      <h3 className="eyebrow mt-8 text-white/50">{title}</h3>
      <p className="mt-3 text-[17px] font-medium leading-snug text-white">
        <Editable value={value} label={placeholder} tone="light" />
      </p>
    </div>
  );
}

export function Credentials() {
  const cards: CredentialCardProps[] = [
    { icon: GraduationCap, title: "Qualification", value: site.credentials.qualification, placeholder: "Add Legal Qualification" },
    {
      icon: Landmark,
      title: "Regulation",
      value: site.credentials.regulation,
      placeholder: "Add SRA Registration / Regulatory Information",
    },
    { icon: MapPin, title: "Location", value: site.location, placeholder: "Add Location" },
    {
      icon: Scale,
      title: "Practice Areas",
      value: site.credentials.practiceAreas,
      placeholder: "Add Confirmed Practice Areas",
    },
  ];

  return (
    <section aria-labelledby="credentials-title" className="relative overflow-hidden bg-navy py-24 sm:py-28">
      <div className="hairline-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_80%_at_80%_0%,#000,transparent)]" aria-hidden />
      <Container className="relative">
        <Reveal>
          <SectionHeading id="credentials-title" eyebrow="Credentials" title="Professional Background" tone="light" />
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={i * 80} className="h-full">
                <CredentialCard {...c} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
