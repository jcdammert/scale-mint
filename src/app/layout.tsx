import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scale Mint — Sales & Follow-Up Systems for Home Service Businesses",
  description:
    "We install the platform and follow-up systems that turn missed calls into booked jobs. Built and managed for roofing, HVAC, pressure washing, remodeling, and other home service crews.",
  openGraph: {
    title: "Scale Mint — Sales & Follow-Up Systems for Home Service Businesses",
    description:
      "We install the platform and follow-up systems that turn missed calls into booked jobs. Built and managed for roofing, HVAC, pressure washing, remodeling, and other home service crews.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale Mint — Sales & Follow-Up Systems for Home Service Businesses",
    description:
      "We install the platform and follow-up systems that turn missed calls into booked jobs. Built and managed for roofing, HVAC, pressure washing, remodeling, and other home service crews.",
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
