import type { Metadata } from "next";
import { jsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Why Scale Mint",
  description:
    "We don't sell software. We install and run the sales follow-up system that turns missed calls into booked jobs for home service crews. See what makes us different.",
  alternates: { canonical: "/why-us" },
  openGraph: {
    title: "Why Scale Mint",
    description:
      "Why home service operators pick Scale Mint over generic CRMs and one-off agencies.",
    url: "/why-us",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Why Scale Mint",
  description:
    "Why home service operators pick Scale Mint over generic CRMs and one-off agencies.",
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
