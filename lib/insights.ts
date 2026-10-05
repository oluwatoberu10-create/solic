/**
 * Legal Insights articles.
 *
 * Stored locally for now. To connect a CMS (Sanity, Contentful, WordPress,
 * Notion, MDX…), replace the bodies of `getInsights` and `getInsight` with
 * fetches that return the same `Insight` shape — no component changes needed.
 */

export type Insight = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  /** ISO date. */
  published: string;
  image: string;
  imageAlt: string;
  /** Paragraphs; a string starting with "## " renders as a sub-heading. */
  body: string[];
};

const insights: Insight[] = [
  {
    slug: "what-to-do-when-you-need-legal-advice",
    category: "Getting Started",
    title: "What Should You Do When You Need Legal Advice?",
    summary:
      "A calm, practical look at the first steps to take when a legal question arises — and how to prepare for an initial conversation with a solicitor.",
    readingTime: "4 min read",
    published: "2026-09-01",
    image: "/images/documents.jpg",
    imageAlt: "A person reviewing and signing a document at a desk",
    body: [
      "Legal questions often arrive unexpectedly — a letter, a change in personal circumstances, a business decision or a dispute. The first reaction is often uncertainty about where to begin.",
      "## Pause before acting",
      "It can be tempting to respond immediately, particularly when a matter feels urgent. Where possible, take a moment to gather your thoughts and avoid committing to anything in writing until you understand your position.",
      "## Gather the key information",
      "Note down the main facts in date order, and collect any letters, emails, contracts or other documents that relate to the matter. You don't need to have everything organised perfectly — a simple summary is a helpful start.",
      "## Note any deadlines",
      "Some legal matters involve time limits. If a document mentions a date by which you need to respond or act, make a note of it and mention it early when you make contact.",
      "## Speak to a solicitor",
      "An initial conversation can help you understand the general considerations, the options that may be available, and what the next steps could be. It is also an opportunity to ask about how the matter might be handled and what it may cost.",
      "Every situation is different, so the right next step depends on your circumstances.",
    ],
  },
  {
    slug: "understanding-your-options-before-a-legal-decision",
    category: "Decision Making",
    title: "Understanding Your Options Before Making a Legal Decision",
    summary:
      "Why it helps to understand the range of possible routes — and their practical implications — before committing to a course of action.",
    readingTime: "4 min read",
    published: "2026-09-15",
    image: "/images/office-desk.jpg",
    imageAlt: "A bright, quiet office workspace with a laptop by a large window",
    body: [
      "Legal decisions are rarely about a single 'right' answer. More often, there are several possible routes, each with its own practical, financial and personal implications.",
      "## Clarify what you want to achieve",
      "Before weighing options, it helps to be clear about your priorities. Is speed most important? Cost? Preserving a relationship? Certainty? Your priorities shape which route may be appropriate.",
      "## Consider the practical implications",
      "Each option may involve different timescales, costs and levels of involvement. Understanding these at the outset can help you make a decision you feel comfortable with.",
      "## Ask questions",
      "A good conversation with a solicitor should leave you with a clearer picture. If anything is unclear, ask — about the process, the likely stages, or what happens if circumstances change.",
      "Information on this page is general in nature. Your own circumstances will determine which options are relevant to you.",
    ],
  },
  {
    slug: "why-getting-legal-advice-early-can-matter",
    category: "Planning Ahead",
    title: "Why Getting Legal Advice Early Can Matter",
    summary:
      "Seeking guidance at an early stage can help you understand your position, keep options open and avoid unnecessary complications.",
    readingTime: "3 min read",
    published: "2026-09-29",
    image: "/images/office-interior.jpg",
    imageAlt: "A calm, modern office meeting room with a long table",
    body: [
      "Many people wait until a matter has escalated before seeking legal guidance. While that is understandable, there can be real value in having a conversation earlier.",
      "## Keeping options open",
      "At an early stage, there may be more routes available. As time passes, some options can narrow — particularly where deadlines or formal processes apply.",
      "## Avoiding unnecessary complications",
      "Understanding your position before you act can help you avoid steps that are difficult to undo, such as signing a document or making a statement you later wish you had considered more carefully.",
      "## Peace of mind",
      "Even where no immediate action is needed, simply understanding where you stand can make a situation feel more manageable.",
      "If you have a legal question, an initial conversation can help you decide whether — and how — to take things further.",
    ],
  },
];

export async function getInsights(): Promise<Insight[]> {
  return [...insights].sort((a, b) => b.published.localeCompare(a.published));
}

export async function getInsight(slug: string): Promise<Insight | undefined> {
  return insights.find((i) => i.slug === slug);
}

export const insightsDisclaimer =
  "Information published on this website is for general information only and should not be treated as legal advice.";
