/**
 * Practice areas.
 *
 * These are EDITABLE EXAMPLES — Toby's confirmed practice areas have not yet
 * been provided. To add, remove or reorder a service, edit this array; the
 * services grid, detail pages (/services/[slug]), sitemap and enquiry-form
 * dropdown all update automatically.
 *
 * Keep descriptions general. Nothing here should read as legal advice or
 * promise an outcome.
 */

export type ServiceIcon = "family" | "property" | "immigration" | "employment" | "business" | "wills";

export type Service = {
  slug: string;
  title: string;
  /** Short label used in the enquiry dropdown. */
  formLabel: string;
  icon: ServiceIcon;
  summary: string;
  intro: string;
  whoItHelps: string[];
  typicalIssues: string[];
  howTobyAssists: string[];
};

export const services: Service[] = [
  {
    slug: "family-law",
    title: "Family Law",
    formLabel: "Family Law",
    icon: "family",
    summary: "Professional support for family and relationship-related legal matters.",
    intro:
      "Family matters are often personal and emotionally demanding. The aim is to help you understand where you stand, what options may be open to you, and what the process could involve — explained calmly and clearly.",
    whoItHelps: [
      "Individuals going through separation or divorce",
      "Parents considering arrangements for children",
      "Couples thinking about formal agreements before or during a relationship",
      "Family members who need to understand their position",
    ],
    typicalIssues: [
      "Separation and divorce",
      "Arrangements for children",
      "Financial matters following separation",
      "Pre-nuptial and cohabitation agreements",
    ],
    howTobyAssists: [
      "Listening to your circumstances in a confidential setting",
      "Explaining the relevant considerations in plain language",
      "Outlining possible routes forward and what each may involve",
      "Helping you decide on appropriate next steps",
    ],
  },
  {
    slug: "property-law",
    title: "Property Law",
    formLabel: "Property Law",
    icon: "property",
    summary: "Support relating to residential and commercial property matters.",
    intro:
      "Property transactions and disputes can carry significant financial and personal weight. Clear guidance early on can help you understand the process and the points that need attention.",
    whoItHelps: [
      "Home buyers and sellers",
      "Landlords and tenants",
      "Businesses taking or granting a lease",
      "Property owners with a dispute or question",
    ],
    typicalIssues: [
      "Buying, selling or remortgaging",
      "Residential and commercial leases",
      "Boundary or ownership questions",
      "Landlord and tenant matters",
    ],
    howTobyAssists: [
      "Reviewing the information and documents relevant to your matter",
      "Explaining key terms, risks and responsibilities",
      "Setting out the likely stages and timescales",
      "Discussing appropriate next steps",
    ],
  },
  {
    slug: "immigration-law",
    title: "Immigration Law",
    formLabel: "Immigration",
    icon: "immigration",
    summary: "Guidance for individuals and families dealing with UK immigration matters.",
    intro:
      "UK immigration rules can be detailed and change over time. Understanding the requirements that may apply to your situation is an important first step.",
    whoItHelps: [
      "Individuals considering a move to the UK",
      "Families looking to join relatives",
      "People wishing to extend or change their status",
      "Employers with questions about sponsoring staff",
    ],
    typicalIssues: [
      "Visa routes and eligibility questions",
      "Family and partner applications",
      "Extensions and changes of status",
      "Settlement and citizenship questions",
    ],
    howTobyAssists: [
      "Discussing your circumstances and objectives",
      "Explaining the general requirements that may be relevant",
      "Identifying information and documents that may be needed",
      "Helping you understand potential next steps",
    ],
  },
  {
    slug: "employment-law",
    title: "Employment Law",
    formLabel: "Employment",
    icon: "employment",
    summary: "Legal support for workplace and employment matters.",
    intro:
      "Workplace issues can affect livelihoods and businesses alike. Whether you are an employee or an employer, it helps to understand your position before deciding how to act.",
    whoItHelps: [
      "Employees with a concern about their employment",
      "Employers managing workplace issues",
      "Individuals offered a settlement agreement",
      "Businesses reviewing contracts or policies",
    ],
    typicalIssues: [
      "Contracts of employment",
      "Settlement agreements",
      "Disciplinary and grievance processes",
      "Dismissal and redundancy questions",
    ],
    howTobyAssists: [
      "Talking through what has happened and what you would like to achieve",
      "Explaining the relevant considerations clearly",
      "Reviewing documents where appropriate",
      "Outlining possible next steps and timescales",
    ],
  },
  {
    slug: "business-commercial-law",
    title: "Business & Commercial Law",
    formLabel: "Business & Commercial",
    icon: "business",
    summary: "Support for businesses dealing with contracts, agreements, and commercial matters.",
    intro:
      "Well-considered agreements and timely guidance can help a business operate with more certainty. The focus is on practical, commercially aware support.",
    whoItHelps: [
      "Business owners and directors",
      "Start-ups and growing companies",
      "Sole traders and partnerships",
      "Businesses entering new commercial relationships",
    ],
    typicalIssues: [
      "Commercial contracts and terms",
      "Supplier and customer agreements",
      "Shareholder and partnership arrangements",
      "General commercial questions",
    ],
    howTobyAssists: [
      "Understanding your business and its objectives",
      "Reviewing or discussing relevant agreements",
      "Highlighting points that may need attention",
      "Recommending sensible next steps",
    ],
  },
  {
    slug: "wills-probate",
    title: "Wills & Probate",
    formLabel: "Wills & Probate",
    icon: "wills",
    summary: "Support with wills, estate planning, and probate matters.",
    intro:
      "Planning ahead, or dealing with an estate after a bereavement, can feel daunting. The aim is to make the process clearer and to approach every matter with care and sensitivity.",
    whoItHelps: [
      "Individuals wishing to make or update a will",
      "Families planning for the future",
      "Executors administering an estate",
      "Relatives with questions following a bereavement",
    ],
    typicalIssues: [
      "Making or updating a will",
      "Lasting powers of attorney",
      "Applying for probate",
      "Estate administration questions",
    ],
    howTobyAssists: [
      "Discussing your wishes or the estate in a confidential setting",
      "Explaining the process and what it may involve",
      "Clarifying the information that will be needed",
      "Helping you decide how to proceed",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceDisclaimer =
  "Every legal matter is different. Contact Toby to discuss your circumstances and understand whether this service is appropriate for your situation.";
