import type { Metadata } from "next";
import { jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Request My Demo",
  description:
    "20-minute call. We walk through your business, show you how we run it, and tell you straight if it's a fit. No pitch, no pressure.",
  alternates: { canonical: "/book" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Request My Demo | Scale Mint",
    description:
      "20-minute call to walk through what we'd run for your business and what it costs.",
    url: "/book",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Request My Demo",
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
