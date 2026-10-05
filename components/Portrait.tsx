import Image from "next/image";
import { Camera } from "lucide-react";
import { site } from "@/lib/site";

type PortraitProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Toby's portrait. Until a real photograph is supplied (site.portrait), this
 * renders an obvious, on-brand placeholder — never a stand-in person.
 */
export function Portrait({ className = "", sizes = "(min-width: 1024px) 40vw, 100vw", priority }: PortraitProps) {
  if (site.portrait) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={site.portrait}
          alt="Portrait of Toby Wilson, solicitor in Southampton"
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-[50%_35%]"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label="Placeholder for a professional portrait of Toby Wilson"
      className={`portrait-placeholder relative flex flex-col items-center justify-center overflow-hidden text-center ${className}`}
    >
      <div className="hairline-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative flex size-28 items-center justify-center rounded-full border border-gold-soft/40 sm:size-32">
        <span className="font-display text-5xl font-medium tracking-[0.06em] text-gold-soft sm:text-6xl">TW</span>
      </div>
      <p className="relative mt-7 font-display text-2xl text-white">Toby Wilson</p>
      <p className="eyebrow relative mt-2 text-white/50">UK Solicitor · Southampton</p>
      <p className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-dashed border-white/25 px-3.5 py-1.5 text-[11.5px] font-medium text-white/55">
        <Camera className="size-3.5" aria-hidden />
        Professional portrait to be added
      </p>
    </div>
  );
}
