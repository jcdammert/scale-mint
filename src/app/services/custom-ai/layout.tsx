import type { Metadata } from "next";
import { jsonLd, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom AI Employees for Contractors",
  description:
    "Purpose-built AI agents that handle the repetitive work in your business — quoting, dispatch, scheduling, follow-up. Trained on your process, wired into your stack.",
  alternates: { canonical: "/services/custom-ai" },
  openGraph: {
    title: "Custom AI Employees for Contractors | Scale Mint",
    description:
      "Purpose-built AI agents for home service businesses — quoting, dispatch, scheduling, follow-up.",
    url: "/services/custom-ai",
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
              name: "Custom AI Employees for Contractors",
              description:
                "Custom-built AI agents for home service businesses, trained on your process and integrated with your tools.",
              url: "/services/custom-ai",
              serviceType: "Custom AI",
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
              { name: "Custom AI", url: "/services/custom-ai" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
