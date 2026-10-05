import Link from "next/link";

type LogoProps = {
  tone?: "light" | "dark";
  subtitle?: string;
  className?: string;
};

/** Wordmark: TOBY WILSON over a small spaced subtitle. */
export function Logo({ tone = "dark", subtitle = "Solicitor", className = "" }: LogoProps) {
  return (
    <Link href="/" aria-label="Toby Wilson, Solicitor — home" className={`group inline-flex flex-col leading-none ${className}`}>
      <span
        className={`font-display text-[1.45rem] font-semibold tracking-[0.14em] transition-colors ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        TOBY WILSON
      </span>
      <span className="mt-1.5 flex items-center gap-2 text-[9.5px] font-semibold uppercase tracking-[0.42em] text-gold">
        <span className="h-px w-4 bg-current" aria-hidden />
        {subtitle}
      </span>
    </Link>
  );
}
