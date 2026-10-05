import { Suspense } from "react";
import { Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { Container, Editable, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { ContactForm } from "./ContactForm";

export function ContactCard() {
  const { email } = site.contact;
  const rows = [
    {
      icon: Mail,
      label: "Email",
      node: email ? (
        <a href={`mailto:${email}`} className="link-underline break-all">
          {email}
        </a>
      ) : (
        <Editable value={null} label="Add Email Address" tone="light" />
      ),
    },
  ];

  return (
    <aside aria-label="Contact details" className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10">
      <div className="hairline-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(80%_60%_at_100%_0%,#000,transparent)]" aria-hidden />
      <div className="relative">
        <p className="font-display text-[2rem] leading-none">Toby Wilson</p>
        <p className="eyebrow mt-3 text-gold-soft">UK Solicitor</p>
        <p className="mt-5 flex items-center gap-2 text-[15px] text-white/70">
          <MapPin className="size-4 text-gold-soft" aria-hidden />
          {site.location}
        </p>

        <dl className="mt-10 space-y-6 border-t border-white/10 pt-8">
          {rows.map(({ icon: Icon, label, node }) => (
            <div key={label} className="flex gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15">
                <Icon className="size-4 text-gold-soft" aria-hidden />
              </span>
              <div className="min-w-0">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">{label}</dt>
                <dd className="mt-1.5 text-[15.5px] text-white">{node}</dd>
              </div>
            </div>
          ))}
        </dl>

        <p className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-relaxed text-white/65">
          Prefer to talk it through? Email Toby directly, or use the form to tell him a little about your matter and
          he will reply by email to arrange a conversation.
        </p>
      </div>
    </aside>
  );
}

export function ContactSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <section id="enquiry" aria-labelledby="contact-title" className="paper-texture py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            as={headingLevel}
            id="contact-title"
            eyebrow="Contact"
            title="Speak With Toby"
            description="Tell Toby briefly about your legal matter and we'll make it easy to take the next step."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:gap-8">
          <Reveal>
            <Suspense fallback={<div className="h-[640px] rounded-3xl border border-stone bg-white" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
          <Reveal delay={120}>
            <ContactCard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
