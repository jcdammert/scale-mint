import type { Metadata } from "next";
import { jsonLd, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Smart Assistants for Home Service Crews",
  description:
    "AI-powered assistants that answer the inbox, draft replies, write quotes, and keep your customer follow-up tight — all without adding headcount.",
  alternates: { canonical: "/services/smart-assistants" },
  openGraph: {
    title: "Smart Assistants for Home Service Crews | Scale Mint",
    description:
      "AI assistants that handle inbox, replies, quotes, and customer follow-up.",
    url: "/services/smart-assistants",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Smart Assistants for Home Service Crews",
              description:
                "AI-powered assistants for inbox, replies, quotes, and customer follow-up.",
              url: "/services/smart-assistants",
              serviceType: "Smart Assistants",
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
              { name: "Services", url: "/" },
              { name: "Smart Assistants", url: "/services/smart-assistants" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
