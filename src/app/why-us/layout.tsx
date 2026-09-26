import type { Metadata } from "next";
import { jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Why Scale Mint",
  description:
    "We don't sell software. We run the marketing and own the sales process that turns leads into booked jobs for local service businesses.",
  alternates: { canonical: "/why-us" },
  openGraph: {
    title: "Why Scale Mint",
    description:
      "Why local service businesses pick Scale Mint over generic CRMs and one-off agencies.",
    url: "/why-us",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Why Scale Mint",
  description:
    "Why local service businesses pick Scale Mint over generic CRMs and one-off agencies.",
  url: "https://scalemintsolutions.com/why-us",
  about: { "@id": "https://scalemintsolutions.com/#organization" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Why Us", url: "/why-us" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
