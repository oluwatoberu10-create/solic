import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { getInsights } from "@/lib/insights";
import { legalPages } from "@/lib/legal";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = site.url.replace(/\/$/, "");
  const insights = await getInsights();
  const pages = ["", "/about", "/services", "/pricing", "/insights", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...insights.map((i) => ({ url: `${base}/insights/${i.slug}`, lastModified: i.published, priority: 0.6 })),
    ...legalPages.filter((p) => !p.draft).map((p) => ({ url: `${base}/${p.slug}`, priority: 0.3 })),
  ];
}
