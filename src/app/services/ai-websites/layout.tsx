import type { Metadata } from "next";
import { jsonLd, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom Websites Built to Convert",
  description:
    "Fast, mobile-first websites built for local service businesses — engineered to rank, load fast, and turn clicks into booked jobs.",
  alternates: { canonical: "/services/ai-websites" },
  openGraph: {
    title: "Custom Websites Built to Convert | Scale Mint",
    description:
      "Fast, conversion-focused websites for local service businesses.",
    url: "/services/ai-websites",
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
              name: "Custom Websites for Local Service Businesses",
              description:
                "Fast, mobile-first websites for local service businesses — built to rank and convert.",
              url: "/services/ai-websites",
              serviceType: "Website Design",
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
              { name: "Custom Websites", url: "/services/ai-websites" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
