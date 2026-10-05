"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { bookingHref, nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // The menu is tied to the path it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean) => setOpenOn(next ? pathname : null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and allow Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-stone bg-paper/90 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Logo tone={solid ? "dark" : "light"} />

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                  solid ? "text-ink/70 hover:text-ink" : "text-white/75 hover:text-white"
                } ${isActive(item.href) ? (solid ? "!text-ink" : "!text-white") : ""}`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gold" aria-hidden />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={bookingHref()}
            className={`hidden min-h-11 items-center rounded-full px-5 text-[14px] font-semibold transition-all duration-300 sm:inline-flex ${
              solid ? "bg-navy text-white hover:bg-navy-soft" : "bg-white text-navy hover:bg-gold-soft"
            }`}
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`inline-flex size-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
              solid ? "border-ink/15 text-ink" : "border-white/30 text-white"
            }`}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-stone bg-paper lg:hidden"
      >
        <div className="flex min-h-full flex-col px-5 pb-10 pt-6 sm:px-8">
          <ul className="divide-y divide-stone">
            {nav.map((item, i) => (
              <li key={item.href} className="rise" style={{ animationDelay: `${i * 45}ms` }}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpenOn(null)}
                  className="flex items-center justify-between py-4 font-display text-[1.75rem] text-ink"
                >
                  {item.label}
                  {isActive(item.href) && <span className="size-1.5 rounded-full bg-gold" aria-hidden />}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <Link
              href={bookingHref()}
              onClick={() => setOpenOn(null)}
              className="flex min-h-13 w-full items-center justify-center rounded-full bg-navy py-4 text-[15px] font-semibold text-white"
            >
              Book a Consultation
            </Link>
            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-muted">
              <MapPin className="size-4 text-gold" aria-hidden /> {site.location}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
