import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Management for Local Service Businesses",
  description:
    "We run your Facebook and Instagram campaigns so your phone keeps ringing — without you touching a single thing. Built and managed for local service businesses.",
  alternates: { canonical: "/meta-ads" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
