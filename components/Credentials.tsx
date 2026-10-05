import Link from "next/link";
import { ArrowRight, Check, GraduationCap, Landmark, MapPin, Scale, type LucideIcon } from "lucide-react";
import { site } from "@/lib/site";
import { Container, Editable, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

type CredentialCardProps = {
  icon: LucideIcon;
  title: string;
  value: string | null;
  placeholder: string;
  link?: { href: string; label: string };
};

const cardBase =
  "flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-500 hover:border-gold-soft/30 hover:bg-white/[0.05]";

export function CredentialCard({ icon: Icon, title, value, placeholder, link }: CredentialCardProps) {
  return (
    <div className={cardBase}>
      <Icon className="size-6 text-gold-soft" aria-hidden strokeWidth={1.5} />
      <h3 className="eyebrow mt-8 text-white/50">{title}</h3>
      <p className="mt-3 text-[17px] font-medium leading-snug text-white">
        <Editable value={value} label={placeholder} tone="light" />
      </p>
      {link && (
        <Link href={link.href} className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-soft">
          <span className="link-underline">{link.label}</span>
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
        </Link>
      )}
    </div>
  );
}

function QualificationsCard({ items }: { items: string[] }) {
  return (
    <div className={`${cardBase} sm:p-9`}>
      <div className="flex items-center gap-4">
        <GraduationCap className="size-6 text-gold-soft" aria-hidden strokeWidth={1.5} />
        <h3 className="eyebrow text-white/50">Qualifications</h3>
      </div>
      {items.length ? (
        <ul className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-[16px] font-medium leading-snug text-white">
              <Check className="mt-0.5 size-4 shrink-0 text-gold-soft" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 text-[17px] font-medium text-white">
          <Editable value={null} label="Add Legal Qualification" tone="light" />
        </p>
      )}
    </div>
  );
}

export function Credentials() {
  const cards: CredentialCardProps[] = [
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
      link: { href: "/services", label: "View all practice areas" },
    },
  ];

  return (
    <section aria-labelledby="credentials-title" className="relative overflow-hidden bg-navy py-24 sm:py-28">
      <div className="hairline-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_80%_at_80%_0%,#000,transparent)]" aria-hidden />
      <Container className="relative">
        <Reveal>
          <SectionHeading id="credentials-title" eyebrow="Credentials" title="Professional Background" tone="light" />
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li className="sm:col-span-2 lg:col-span-3">
            <Reveal className="h-full">
              <QualificationsCard items={site.credentials.qualifications} />
            </Reveal>
          </li>
          {cards.map((c, i) => (
            <li key={c.title} className={i === cards.length - 1 ? "sm:col-span-2 lg:col-span-1" : undefined}>
              <Reveal delay={(i + 1) * 80} className="h-full">
                <CredentialCard {...c} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
