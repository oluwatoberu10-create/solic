import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const title = "Toby Wilson | UK Solicitor in Southampton";
const description =
  "Toby Wilson is a UK solicitor based in Southampton providing professional legal support and guidance to individuals and businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Toby Wilson, Solicitor in Southampton" },
  description,
  keywords: [
    "Solicitor Southampton",
    "Southampton solicitor",
    "UK solicitor",
    "Legal advice Southampton",
    "Legal services Southampton",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Toby Wilson — UK Solicitor",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#09121f",
};

/** LocalBusiness / LegalService structured data. Only confirmed facts are included. */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Toby Wilson — UK Solicitor",
    description,
    url: site.url,
    priceRange: "£500–£2,000",
    ...(site.portrait ? { image: `${site.url}${site.portrait}` } : {}),
    areaServed: { "@type": "City", name: "Southampton" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Southampton",
      addressCountry: "GB",
    },
    ...(site.contact.email ? { email: site.contact.email } : {}),
    founder: { "@type": "Person", name: site.name, jobTitle: "Solicitor" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${manrope.variable} ${cormorant.variable} antialiased`}>
      <head>
        <noscript>
          <style>{`.reveal,.rise{opacity:1!important;transform:none!important;animation:none!important}`}</style>
        </noscript>
        <StructuredData />
      </head>
      <body>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
