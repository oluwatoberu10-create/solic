/**
 * Consultation / support packages.
 *
 * Prices confirmed by Toby. `price: null` renders as "£[Price]" with an
 * "indicative" note. Enter confirmed fees (e.g. "£150") and set
 * `site.pricesConfirmed` to true in `lib/site.ts`.
 */

export type Package = {
  id: string;
  number: string;
  name: string;
  price: string | null;
  priceNote?: string;
  label: string;
  pitch: string;
  includes: string[];
  cta: string;
  featured?: boolean;
};

export const packages: Package[] = [
  {
    id: "initial-consultation",
    number: "01",
    name: "Initial Consultation",
    price: "£500",
    label: "Best for Initial Advice",
    pitch: "For clients who need an initial conversation about their legal matter.",
    includes: [
      "Initial consultation",
      "Discussion of your situation",
      "General explanation of available options",
      "Initial next-step guidance",
    ],
    cta: "Book Consultation",
  },
  {
    id: "legal-guidance",
    number: "02",
    name: "Legal Guidance",
    price: "£1,000",
    label: "Popular",
    pitch: "For clients who require more detailed support following an initial consultation.",
    includes: [
      "Consultation",
      "Review of relevant information",
      "Detailed discussion",
      "Written guidance where appropriate",
      "Next-step recommendations",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    id: "ongoing-support",
    number: "03",
    name: "Ongoing Legal Support",
    price: "£2,000",
    label: "For Ongoing Matters",
    pitch: "For clients who require continuing professional support with an ongoing matter.",
    includes: [
      "Initial consultation",
      "Matter assessment",
      "Ongoing communication",
      "Continued legal support",
      "Matter-specific guidance",
    ],
    cta: "Discuss Your Matter",
  },
];

export const pricingDisclaimer =
  "Fees vary depending on the nature and complexity of each matter. Pricing shown on this website should be treated as indicative unless confirmed directly by Toby Wilson.";
