import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Software — Scale Mint",
  description:
    "Your all-in-one business operating system. CRM, invoicing, scheduling, automations, contracts, and more — all on one platform, all set up for you. Built for local service businesses.",
};

export default function BusinessSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
