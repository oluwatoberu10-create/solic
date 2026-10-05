/**
 * Compliance pages (/privacy-policy, /cookie-policy, /terms,
 * /complaints-procedure, /accessibility).
 *
 * Each page is an editable OUTLINE. Replace `body` text with the final,
 * professionally reviewed wording and set `draft: false` to remove the
 * "to be completed" banner.
 */

export type LegalSection = { heading: string; body: string };

export type LegalPage = {
  slug: string;
  title: string;
  description: string;
  draft: boolean;
  sections: LegalSection[];
};

const todo = (what: string) => `[Add ${what}]`;

export const legalPages: LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "How Toby Wilson collects, uses and protects personal information.",
    draft: true,
    sections: [
      { heading: "Who we are", body: `Toby Wilson, UK Solicitor, Southampton. ${todo("data controller details and ICO registration number, if applicable")}` },
      { heading: "Information we collect", body: todo("the categories of personal data collected, e.g. via the enquiry form") },
      { heading: "How we use your information", body: todo("purposes and lawful bases for processing") },
      { heading: "How long we keep information", body: todo("retention periods") },
      { heading: "Sharing your information", body: todo("any third parties or processors, e.g. hosting and email providers") },
      { heading: "Your rights", body: todo("data subject rights and how to exercise them, including the right to complain to the ICO") },
      { heading: "Contact", body: todo("privacy contact details") },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description: "How this website uses cookies and similar technologies.",
    draft: true,
    sections: [
      {
        heading: "Current use of cookies",
        body: "At the time of writing this website does not set analytics or advertising cookies. If that changes, this policy will be updated and consent will be requested where required.",
      },
      { heading: "Strictly necessary cookies", body: todo("any strictly necessary cookies used by the hosting platform") },
      { heading: "Managing cookies", body: todo("how visitors can manage or withdraw consent") },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Business",
    description: "Terms of business and website terms of use.",
    draft: true,
    sections: [
      { heading: "About these terms", body: todo("scope of the terms of business") },
      { heading: "Fees and payment", body: todo("how fees are calculated, estimates, and payment terms") },
      { heading: "Your instructions", body: todo("how a solicitor-client relationship is formed (e.g. client care letter)") },
      { heading: "Website information", body: "Information on this website is for general information only and should not be treated as legal advice." },
      { heading: "Governing law", body: todo("governing law and jurisdiction") },
    ],
  },
  {
    slug: "complaints-procedure",
    title: "Complaints Procedure",
    description: "How to raise a concern or complaint about the service you have received.",
    draft: true,
    sections: [
      { heading: "Our commitment", body: todo("statement of commitment to resolving concerns") },
      { heading: "How to make a complaint", body: todo("who to contact and how (post, email)") },
      { heading: "What happens next", body: todo("acknowledgement and response timescales") },
      { heading: "If you remain dissatisfied", body: todo("Legal Ombudsman details, time limits and SRA reporting information, as required by current regulations") },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility Statement",
    description: "Our approach to making this website accessible to everyone.",
    draft: true,
    sections: [
      {
        heading: "Our approach",
        body: "This website has been built with accessibility in mind, using semantic HTML, keyboard-accessible navigation, descriptive image text, sufficient colour contrast and support for reduced-motion preferences.",
      },
      { heading: "Reasonable adjustments", body: todo("how clients can request reasonable adjustments, e.g. alternative formats or communication methods") },
      { heading: "Feedback", body: todo("contact details for accessibility feedback") },
    ],
  },
];

export function getLegalPage(slug: string) {
  return legalPages.find((p) => p.slug === slug);
}
