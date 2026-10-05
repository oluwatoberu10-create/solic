import { Info } from "lucide-react";
import type { ReactNode } from "react";

/** Subtle, consistent styling for legal notices across the site. */
export function LegalDisclaimer({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={`flex items-start gap-2.5 text-[13.5px] leading-relaxed ${
        tone === "light" ? "text-white/55" : "text-muted"
      } ${className}`}
    >
      <Info className={`mt-0.5 size-4 shrink-0 ${tone === "light" ? "text-gold-soft" : "text-gold"}`} aria-hidden />
      <span>{children}</span>
    </p>
  );
}
