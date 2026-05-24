import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omnipresence SEO for Home Service Contractors",
  description:
    "We put you everywhere — Google, Maps, AI search engines, and every local directory — so you're the obvious choice before homeowners even pick up the phone.",
  alternates: { canonical: "/seo" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
