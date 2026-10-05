/**
 * Practice areas.
 *
 * Toby's confirmed practice areas. To add, remove or reorder a service, edit
 * this array; the services grid, detail pages (/services/[slug]), sitemap and
 * enquiry-form dropdown all update automatically.
 *
 * Keep descriptions general. Nothing here should read as legal advice or
 * promise an outcome.
 */

export type ServiceIcon =
  | "corporate"
  | "contracts"
  | "disputes"
  | "property"
  | "wills"
  | "criminal"
  | "employment"
  | "family"
  | "immigration"
  | "public"
  | "injury"
  | "regulatory";

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
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    formLabel: "Corporate & Commercial",
    icon: "corporate",
    summary: "Support for businesses on corporate structures, transactions and day-to-day commercial matters.",
    intro:
      "Clear, commercially aware guidance can help a business make decisions with more confidence. The focus is on understanding your business and what you want to achieve, then explaining the legal considerations plainly.",
    whoItHelps: [
      "Business owners and directors",
      "Start-ups and growing companies",
      "Shareholders and partners",
      "Sole traders considering incorporation",
    ],
    typicalIssues: [
      "Setting up and structuring a business",
      "Shareholder and partnership arrangements",
      "Buying or selling a business",
      "Directors' duties and governance questions",
    ],
    howTobyAssists: [
      "Understanding your business and its objectives",
      "Explaining the relevant legal considerations",
      "Reviewing key documents where appropriate",
      "Recommending sensible next steps",
    ],
  },
  {
    slug: "commercial-contracts",
    title: "Commercial Contracts",
    formLabel: "Commercial Contracts",
    icon: "contracts",
    summary: "Drafting, reviewing and negotiating the agreements your business relies on.",
    intro:
      "Well-drafted contracts set clear expectations and can reduce the risk of disagreements later. Whether you are entering a new agreement or reviewing an existing one, it helps to understand exactly what you are committing to.",
    whoItHelps: [
      "Businesses entering supplier or customer agreements",
      "Companies updating their terms and conditions",
      "Service providers and consultants",
      "Businesses with questions about an existing contract",
    ],
    typicalIssues: [
      "Terms and conditions of business",
      "Supply, service and distribution agreements",
      "Confidentiality agreements",
      "Understanding obligations under an existing contract",
    ],
    howTobyAssists: [
      "Reviewing the agreement and its key terms",
      "Highlighting points that may need attention",
      "Explaining your obligations in plain language",
      "Discussing options for negotiation or amendment",
    ],
  },
  {
    slug: "dispute-resolution-civil-litigation",
    title: "Dispute Resolution & Civil Litigation",
    formLabel: "Dispute Resolution & Litigation",
    icon: "disputes",
    summary: "Guidance on resolving disagreements — through negotiation, alternative routes or the courts.",
    intro:
      "Disputes can be stressful and costly. Understanding your position early, and the different ways a dispute might be resolved, can help you decide on a proportionate way forward.",
    whoItHelps: [
      "Individuals in a dispute with another party",
      "Businesses with a contractual or commercial disagreement",
      "People who have received a letter of claim",
      "Anyone considering whether to bring a claim",
    ],
    typicalIssues: [
      "Contract and commercial disputes",
      "Debt recovery",
      "Responding to a letter of claim",
      "Negotiation, mediation and court proceedings",
    ],
    howTobyAssists: [
      "Reviewing the background and relevant documents",
      "Explaining the options for resolving the dispute",
      "Outlining the likely stages, timescales and costs",
      "Helping you decide on an appropriate next step",
    ],
  },
  {
    slug: "property-real-estate-law",
    title: "Property & Real Estate Law",
    formLabel: "Property & Real Estate",
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
    slug: "wills-probate-private-client",
    title: "Wills, Probate & Private Client",
    formLabel: "Wills, Probate & Private Client",
    icon: "wills",
    summary: "Support with wills, estate planning, powers of attorney and probate.",
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
  {
    slug: "criminal-law",
    title: "Criminal Law",
    formLabel: "Criminal Law",
    icon: "criminal",
    summary: "Guidance for individuals facing a criminal investigation or proceedings.",
    intro:
      "Being involved in a criminal matter can be worrying. Understanding the process, your rights and what may happen next is an important first step — and it is often sensible to seek guidance as early as possible.",
    whoItHelps: [
      "Individuals contacted by the police",
      "People invited to a voluntary interview",
      "Those who have been charged or summonsed",
      "Family members seeking to understand the process",
    ],
    typicalIssues: [
      "Police investigations and interviews",
      "Charges and court appearances",
      "Understanding the criminal process",
      "Motoring offences",
    ],
    howTobyAssists: [
      "Listening to your circumstances in confidence",
      "Explaining the process and what to expect",
      "Outlining the options that may be available",
      "Helping you prepare for the next stage",
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
    slug: "public-administrative-law",
    title: "Public & Administrative Law",
    formLabel: "Public & Administrative",
    icon: "public",
    summary: "Guidance on decisions and actions of public bodies and how they can be challenged.",
    intro:
      "Decisions made by councils, government departments and other public bodies can have a real impact. Public law sets out how those bodies must act — and the routes that may be available if a decision appears to be wrong.",
    whoItHelps: [
      "Individuals affected by a public body's decision",
      "Families dealing with a local authority",
      "Businesses affected by a regulatory or licensing decision",
      "Organisations considering a challenge",
    ],
    typicalIssues: [
      "Challenging decisions of public bodies",
      "Complaints and internal reviews",
      "Judicial review questions",
      "Licensing and local authority matters",
    ],
    howTobyAssists: [
      "Reviewing the decision and the background",
      "Explaining the routes that may be available",
      "Highlighting any time limits that may apply",
      "Discussing appropriate next steps",
    ],
  },
  {
    slug: "personal-injury-clinical-negligence",
    title: "Personal Injury & Clinical Negligence",
    formLabel: "Personal Injury & Clinical Negligence",
    icon: "injury",
    summary: "Support for people who have been injured, including through medical treatment.",
    intro:
      "An injury can affect your health, work and family life. Understanding whether you may have a claim, and what the process involves, can help you decide how to move forward.",
    whoItHelps: [
      "People injured in an accident",
      "Those concerned about medical or dental treatment they received",
      "Families acting on behalf of an injured relative",
      "Anyone unsure whether they have a claim",
    ],
    typicalIssues: [
      "Road traffic and workplace accidents",
      "Accidents in public places",
      "Concerns about medical treatment",
      "Understanding time limits for claims",
    ],
    howTobyAssists: [
      "Listening to what happened and how it has affected you",
      "Explaining the general considerations in plain language",
      "Outlining the process and any time limits that may apply",
      "Helping you decide whether and how to proceed",
    ],
  },
  {
    slug: "regulatory-compliance-law",
    title: "Regulatory & Compliance Law",
    formLabel: "Regulatory & Compliance",
    icon: "regulatory",
    summary: "Helping businesses and professionals understand and meet their regulatory obligations.",
    intro:
      "Regulatory requirements can be complex and vary by sector. Understanding your obligations — and responding carefully if a regulator gets in touch — can help protect your business and reputation.",
    whoItHelps: [
      "Businesses in regulated sectors",
      "Directors and compliance managers",
      "Professionals subject to a regulator",
      "Organisations contacted by a regulator",
    ],
    typicalIssues: [
      "Understanding regulatory obligations",
      "Policies and compliance processes",
      "Regulatory investigations and enquiries",
      "Data protection questions",
    ],
    howTobyAssists: [
      "Understanding your organisation and sector",
      "Explaining the obligations that may apply",
      "Reviewing policies or correspondence where appropriate",
      "Recommending practical next steps",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceDisclaimer =
  "Every legal matter is different. Contact Toby to discuss your circumstances and understand whether this service is appropriate for your situation.";
