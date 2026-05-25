import type { Metadata } from "next";
import { jsonLd, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Employee for Contractors",
  description:
    "Stop losing jobs to missed calls. Our AI Employee answers 24/7, qualifies the lead, books the estimate, and sends every detail to your CRM in real time.",
  alternates: { canonical: "/ai-employee" },
  openGraph: {
    title: "AI Employee for Contractors | Scale Mint",
    description:
      "An AI Employee that answers, qualifies, and books — 24/7, in your business voice.",
    url: "/ai-employee",
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
              name: "AI Employee for Contractors",
              description:
                "AI Employee answering and booking system for home service businesses — 24/7 lead capture and qualification.",
              url: "/ai-employee",
              serviceType: "AI Employee",
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
              { name: "AI Employee", url: "/ai-employee" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
