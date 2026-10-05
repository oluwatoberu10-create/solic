import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost-light";
  arrow?: boolean;
  className?: string;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-navy text-white hover:bg-navy-soft shadow-[0_10px_30px_-12px_rgb(14_26_43/0.6)]",
  secondary: "border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
  light: "bg-gold-soft text-navy-deep hover:bg-white",
  "ghost-light": "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
};

export function Button({ href, children, variant = "primary", arrow, className = "" }: ButtonProps) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[14.5px] font-semibold tracking-[-0.005em] transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
      )}
    </Link>
  );
}

export function Eyebrow({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "light" }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${tone === "gold" ? "text-gold" : "text-gold-soft"}`}>
      <span className="h-px w-8 bg-current opacity-70" aria-hidden />
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center [&>p.eyebrow]:justify-center" : ""}`}>
      {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "gold"}>{eyebrow}</Eyebrow>}
      <Tag
        id={id}
        className={`display mt-5 text-[2.6rem] sm:text-5xl lg:text-[3.6rem] ${tone === "light" ? "text-white" : "text-ink"}`}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={`mt-6 text-[17px] leading-relaxed ${center ? "mx-auto" : ""} max-w-2xl ${
            tone === "light" ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/**
 * Renders a confirmed value, or a clearly marked editable placeholder when the
 * value hasn't been supplied yet (see lib/site.ts).
 */
export function Editable({ value, label, tone = "dark" }: { value: string | null; label: string; tone?: "dark" | "light" }) {
  if (value) return <>{value}</>;
  return (
    <span
      className={`inline-block rounded-md border border-dashed px-2 py-0.5 text-[0.92em] font-medium ${
        tone === "light" ? "border-white/25 text-white/55" : "border-gold/50 bg-gold/[0.06] text-gold"
      }`}
      title="Placeholder — edit in lib/site.ts"
    >
      [{label}]
    </span>
  );
}
