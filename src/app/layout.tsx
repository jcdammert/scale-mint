import type { Metadata } from "next";
import "./globals.css";
import FlyingRocket from "@/components/FlyingRocket";
import {
  SITE_URL,
  organizationSchema,
  websiteSchema,
  jsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Scale Mint — Sales & Follow-Up Systems for Home Service Businesses",
    template: "%s | Scale Mint",
  },
  description:
    "Scale Mint installs the platform, follow-up, marketing, and AI voice systems that turn missed calls into booked jobs for roofing, HVAC, pressure washing, epoxy, remodeling, and other home service crews.",
  keywords: [
    "home service marketing",
    "contractor CRM",
    "missed call text back",
    "AI voice for contractors",
    "lead follow-up automation",
    "Google Ads for contractors",
    "Meta Ads for home services",
    "roofing CRM",
    "HVAC software",
    "pressure washing leads",
    "Scale Mint",
  ],
  authors: [{ name: "Scale Mint" }],
  creator: "Scale Mint",
  publisher: "Scale Mint",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Scale Mint",
    title:
      "Scale Mint — Sales & Follow-Up Systems for Home Service Businesses",
    description:
      "Install the platform that turns missed calls into booked jobs. Built and managed for home service crews.",
    locale: "en_US",
    images: [{ url: "/logo.png", width: 1525, height: 481, alt: "Scale Mint" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Scale Mint — Sales & Follow-Up Systems for Home Service Businesses",
    description:
      "Install the platform that turns missed calls into booked jobs. Built and managed for home service crews.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  category: "Business Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <FlyingRocket />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
