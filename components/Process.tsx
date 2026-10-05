import { Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

const steps = [
  { n: "01", title: "Make an Enquiry", text: "Tell Toby briefly about your legal matter." },
  { n: "02", title: "Book a Consultation", text: "Arrange a suitable time to discuss your situation." },
  {
    n: "03",
    title: "Understand Your Options",
    text: "Toby explains the relevant considerations and potential next steps.",
  },
  {
    n: "04",
    title: "Decide How to Proceed",
    text: "If appropriate, agree on the next stage of professional legal support.",
  },
];

export function ProcessStep({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="group relative h-full pt-10">
      <div className="absolute left-0 right-0 top-0 h-px bg-stone" aria-hidden />
      <div className="absolute left-0 top-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" aria-hidden />
      <span className="absolute -top-[5px] left-0 size-[10px] rounded-full border-2 border-gold bg-paper" aria-hidden />
      <p className="font-display text-5xl text-gold/80">{n}</p>
      <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-ink">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{text}</p>
    </div>
  );
}

export function Process() {
  return (
    <section aria-labelledby="process-title" className="bg-paper py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            id="process-title"
            eyebrow="How It Works"
            title="Working With Toby"
            description="A straightforward process designed to help you understand your position before deciding anything."
          />
        </Reveal>
        <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 100} className="h-full">
                <ProcessStep {...s} />
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal>
          <p className="mt-14 text-sm text-muted">
            The process can vary depending on the nature of your legal matter. Toby will explain what to expect at each
            stage.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
