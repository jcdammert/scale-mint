import type { Metadata } from "next";
import "./globals.css";
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
      "Scale Mint — Marketing & Sales Process for Local Service Businesses",
    template: "%s | Scale Mint",
  },
  description:
    "Scale Mint runs the marketing and sales process for local service businesses — ads, SEO, follow-up, and a pipeline that works every lead until it books.",
  keywords: [
    "local service business marketing",
    "service business CRM",
    "missed call text back",
    "AI Employee for local businesses",
    "lead follow-up automation",
    "Google Ads for local businesses",
    "Meta Ads for local services",
    "local business SEO",
    "follow-up automation",
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
      "Scale Mint — Marketing & Sales Process for Local Service Businesses",
    description:
      "We run the marketing. We own the follow-up. Built for local service businesses.",
    locale: "en_US",
    images: [{ url: "/logo.png", width: 1525, height: 481, alt: "Scale Mint" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Scale Mint — Marketing & Sales Process for Local Service Businesses",
    description:
      "We run the marketing. We own the follow-up. Built for local service businesses.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  category: "Marketing Agency",
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
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
