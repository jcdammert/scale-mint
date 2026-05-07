import type { Metadata } from "next";
import { jsonLd, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Marketing for Home Service Contractors",
  description:
    "Google Organic, Meta Ads, and Google Ads — built and managed for home service crews. Real lead flow, tracked end-to-end, with follow-up wired in from day one.",
  alternates: { canonical: "/services/marketing" },
  openGraph: {
    title: "Marketing for Home Service Contractors | Scale Mint",
    description:
      "Google Organic, Meta Ads, and Google Ads — built and managed for home service crews.",
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
              name: "Marketing for Home Service Contractors",
              description:
                "Google Organic, Meta Ads, and Google Ads built and managed for home service businesses.",
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
