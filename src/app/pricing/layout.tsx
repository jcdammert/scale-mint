import type { Metadata } from "next";
import { jsonLd, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Plans, what's included, and what setup runs. Flat monthly with a one-time setup — no hidden fees, no per-user games.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Scale Mint",
    description:
      "Plans, what's included, and what setup runs. Flat monthly with a one-time setup.",
    url: "/pricing",
  },
};

const FAQS = [
  {
    question: "Are there contracts?",
    answer:
      "Month-to-month after the initial setup. Cancel any time once you're past the build period.",
  },
  {
    question: "What's included in setup?",
    answer:
      "Full system build, integrations, data migration from your existing tools, sequence copy, and team training. You don't touch the technical work.",
  },
  {
    question: "Are there usage fees?",
    answer:
      "SMS and AI Employee usage are billed at cost. Everything else is included in the flat monthly.",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Pricing", url: "/pricing" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
