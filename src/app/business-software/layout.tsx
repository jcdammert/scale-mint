import type { Metadata } from "next";
import { jsonLd, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Business Software for Home Service Contractors",
  description:
    "Replace the patchwork of CRMs, calendars, and inboxes with one platform built for home service crews. Pipeline, follow-up, calendar, SMS, email, invoicing, and reporting in one login.",
  alternates: { canonical: "/business-software" },
  openGraph: {
    title: "Business Software for Home Service Contractors | Scale Mint",
    description:
      "One platform for pipeline, follow-up, calendar, SMS, email, invoicing, and reporting — built for home service crews.",
    url: "/business-software",
  },
};

const FAQS = [
  {
    question: "Does this replace my current CRM?",
    answer:
      "Yes. The Scale Mint Business OS replaces standalone CRMs, calendar tools, SMS apps, email blasters, and pipeline trackers — everything is in one place with the data wired together.",
  },
  {
    question: "Will I lose my data when we migrate?",
    answer:
      "No. We import contacts, history, calendar entries, and pipeline stages from your existing tools. Nothing is left behind, and we run both systems in parallel until you're confident.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most operators are live within 7–14 days. We do the build, the integrations, and the training. You don't touch the technical part.",
  },
];

export default function BusinessSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Business Software for Home Service Contractors",
              description:
                "All-in-one CRM, pipeline, follow-up, calendar, SMS, email, and reporting platform built for home service businesses.",
              url: "/business-software",
              serviceType: "Business Software",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Business Software", url: "/business-software" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(FAQS)) }}
      />
      {children}
    </>
  );
}
