import type { Metadata } from "next";
import { jsonLd, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Voice Receptionist for Contractors",
  description:
    "Stop losing jobs to missed calls. Our AI voice answers 24/7, qualifies the lead, books the estimate, and sends every detail to your CRM in real time.",
  alternates: { canonical: "/services/ai-voice" },
  openGraph: {
    title: "AI Voice Receptionist for Contractors | Scale Mint",
    description:
      "AI voice that answers, qualifies, and books — 24/7, in your business voice.",
    url: "/services/ai-voice",
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
              name: "AI Voice Receptionist for Contractors",
              description:
                "AI voice answering and booking system for home service businesses — 24/7 lead capture and qualification.",
              url: "/services/ai-voice",
              serviceType: "AI Voice",
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
              { name: "AI Voice", url: "/services/ai-voice" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
