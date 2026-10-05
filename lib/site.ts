/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE SETTINGS — the single place to edit Toby's details.
 *
 *  Anything left as `null` renders on the site as a clearly marked
 *  "[Add …]" placeholder. Replace `null` with the confirmed value and the
 *  placeholder disappears everywhere it is used.
 *
 *  Do not enter anything here that has not been confirmed by Toby.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Toby Wilson",
  role: "UK Solicitor",
  location: "Southampton, United Kingdom",
  city: "Southampton",

  /** Production URL — used for canonical links, sitemap and social cards. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tobywilson.co.uk",

  /** Shown in the hero and About sections. Set to null to show the placeholder instead. */
  portrait: "/images/toby-wilson.jpg" as string | null,

  contact: {
    email: "oluwatoberu10@gmail.com" as string | null,
  },

  /**
   * Scheduling link (Calendly, Microsoft Bookings, Google Calendar appointment
   * page, etc.). While `null`, booking buttons route to the enquiry form with
   * the chosen package pre-selected.
   */
  bookingUrl: null as string | null,

  credentials: {
    qualification: null as string | null,
    regulation: null as string | null,
    practiceAreas: null as string | null,
  },

  regulatory: {
    sraNumber: null as string | null,
    information: null as string | null,
    indemnity: null as string | null,
  },

  /**
   * Set to `true` once Toby has confirmed which practice areas he offers
   * (and edit `lib/services.ts` to match). While `false`, the site states that
   * practice areas are to be confirmed so visitors aren't misled.
   */
  practiceAreasConfirmed: false,

  /** Set to `true` once real fees are entered in `lib/packages.ts`. */
  pricesConfirmed: true,
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Toby", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms of Business", href: "/terms" },
  { label: "Complaints Procedure", href: "/complaints-procedure" },
  { label: "Accessibility Statement", href: "/accessibility" },
] as const;

/** Where a "Book" button should go for a given package. */
export function bookingHref(packageId?: string) {
  if (site.bookingUrl) return site.bookingUrl;
  return packageId ? `/contact?package=${packageId}#enquiry` : "/contact#enquiry";
}
