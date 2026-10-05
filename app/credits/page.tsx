import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Image Credits",
  alternates: { canonical: "/credits" },
  robots: { index: false, follow: true },
};

const credits = [
  {
    image: "Southampton Bargate at dusk",
    author: "Partonez",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Southampton_Bargate_at_Dusk_(1).jpg",
  },
  {
    image: "Southampton, Town Quay",
    author: "Lewis Clarke",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Southampton_,_Town_Quay_-_geograph.org.uk_-_6693003.jpg",
  },
  {
    image: "Southampton Civic Centre",
    author: "Peter Trimming",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Southampton_Civic_Centre_-_geograph.org.uk_-_3838976.jpg",
  },
  {
    image: "Office, documents and architecture photography",
    author: "Unsplash contributors",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    source: "https://unsplash.com",
  },
];

export default function CreditsPage() {
  return (
    <>
      <PageHero eyebrow="Credits" title="Image Credits" crumbs={[{ label: "Image Credits" }]} />
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <ul className="mx-auto max-w-3xl divide-y divide-stone border-y border-stone">
            {credits.map((c) => (
              <li key={c.image} className="py-6">
                <p className="font-display text-2xl text-ink">{c.image}</p>
                <p className="mt-2 text-[15px] text-muted">
                  {c.author} ·{" "}
                  <a href={c.licenseUrl} className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                    {c.license}
                  </a>{" "}
                  ·{" "}
                  <a href={c.source} className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                    Source
                  </a>
                  {c.license.startsWith("CC") && " · Cropped and colour-graded for this website."}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
