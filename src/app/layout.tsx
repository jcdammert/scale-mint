import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scale Mint — Custom AI Systems for Local Businesses",
  description:
    "Scale Mint builds custom AI automations for local service businesses. Workflow automation, AI chatbots, voice receptionists, and more — launched in days, not months.",
  openGraph: {
    title: "Scale Mint — Custom AI Systems for Local Businesses",
    description:
      "Scale Mint builds custom AI automations for local service businesses. Workflow automation, AI chatbots, voice receptionists, and more — launched in days, not months.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale Mint — Custom AI Systems for Local Businesses",
    description:
      "Scale Mint builds custom AI automations for local service businesses. Workflow automation, AI chatbots, voice receptionists, and more — launched in days, not months.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><div className="relative z-10">{children}</div></body>
    </html>
  );
}
