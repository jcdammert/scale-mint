import type { Metadata } from "next";
import { jsonLd, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Workflow Automation for Home Service Businesses",
  description:
    "Stop doing repetitive work twice. We automate the handoffs between your CRM, calendar, payments, and field tools so leads, jobs, and invoices flow without anyone touching them.",
  alternates: { canonical: "/services/workflow-automation" },
  openGraph: {
    title: "Workflow Automation for Home Service Businesses | Scale Mint",
    description:
      "Automate the handoffs between your CRM, calendar, payments, and field tools.",
    url: "/services/workflow-automation",
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
              name: "Workflow Automation for Home Service Businesses",
              description:
                "Custom workflow automation between CRM, calendar, payments, and field tools for home service crews.",
              url: "/services/workflow-automation",
              serviceType: "Workflow Automation",
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
              {
                name: "Workflow Automation",
                url: "/services/workflow-automation",
              },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
