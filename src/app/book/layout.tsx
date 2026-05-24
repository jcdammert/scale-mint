import type { Metadata } from "next";
import { jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "20-minute call. We walk through your sales process, show you how the system runs, and tell you straight if it's a fit. No pitch, no pressure.",
  alternates: { canonical: "/book" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Book a Strategy Call | Scale Mint",
    description:
      "20-minute call to map out your follow-up system and what it would cost.",
    url: "/book",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Book a Strategy Call",
  url: "https://scalemintsolutions.com/book",
  about: { "@id": "https://scalemintsolutions.com/#organization" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Book", url: "/book" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
