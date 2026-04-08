import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Scale Mint — Here's What We Do and How It Works",
  description:
    "A walkthrough of every service — what it is, how it works, and what it looks like for your business.",
  openGraph: {
    title: "Scale Mint — Here's What We Do and How It Works",
    description:
      "A walkthrough of every service — what it is, how it works, and what it looks like for your business.",
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0A0A0F] text-white">{children}</body>
    </html>
  );
}
