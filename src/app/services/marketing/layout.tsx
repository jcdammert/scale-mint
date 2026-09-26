import type { Metadata } from "next";
import { jsonLd, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Marketing for Local Service Businesses",
  description:
    "Google Organic, Meta Ads, and Google Ads — built and managed for local service businesses. Real lead flow, tracked end-to-end, with follow-up wired in from day one.",
  alternates: { canonical: "/services/marketing" },
  openGraph: {
    title: "Marketing for Local Service Businesses | Scale Mint",
    description:
      "Google Organic, Meta Ads, and Google Ads — built and managed for local service businesses.",
    url: "/services/marketing",
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
              name: "Marketing for Local Service Businesses",
              description:
                "Google Organic, Meta Ads, and Google Ads built and managed for local service businesses.",
              url: "/services/marketing",
              serviceType: "Digital Marketing",
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
              { name: "Marketing", url: "/services/marketing" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
