/* Centralized SEO config + JSON-LD schema builders for scalemintsolutions.com */

export const SITE_URL = "https://scalemintsolutions.com";
export const SITE_NAME = "Scale Mint";
export const BUSINESS_PHONE = "+1-954-000-0000"; // update if real number differs
export const BUSINESS_EMAIL = "scalemintsolutions@gmail.com";
export const BUSINESS_LOCATION = {
  city: "Miramar",
  region: "FL",
  country: "US",
};

/* ── Organization + LocalBusiness (used in root layout) ─────────────── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "Scale Mint Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  description:
    "Scale Mint installs sales follow-up, AI voice, marketing, and business software systems for home service contractors — roofing, HVAC, pressure washing, epoxy, junk removal, remodeling, and more.",
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_LOCATION.city,
    addressRegion: BUSINESS_LOCATION.region,
    addressCountry: BUSINESS_LOCATION.country,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  sameAs: [],
  knowsAbout: [
    "Lead follow-up automation",
    "Missed-call text-back",
    "AI voice receptionist",
    "Local service marketing",
    "Google Ads for contractors",
    "Meta Ads for contractors",
    "CRM for home services",
    "Sales pipeline software",
  ],
  serviceType: [
    "Business Software",
    "Marketing",
    "AI Voice",
    "Custom AI",
    "Workflow Automation",
    "Custom Websites",
  ],
};

/* ── WebSite (sitelinks search box) ─────────────────────────────────── */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

/* ── Builder: Service schema for /services/* and /business-software ── */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    serviceType: opts.serviceType ?? opts.name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Home service contractors",
    },
  };
}

/* ── Builder: FAQPage schema ────────────────────────────────────────── */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/* ── Builder: BreadcrumbList ────────────────────────────────────────── */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.url}`,
    })),
  };
}

/* ── Helper: serialize JSON-LD safely for inline <script> ──────────── */
export function jsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/* ── All public routes (used by sitemap.ts) ─────────────────────────── */
export const ALL_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/business-software", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/meta-ads", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/seo", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/ai-voice", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/ai-websites", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/custom-ai", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/smart-assistants", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/workflow-automation", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/why-us", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/live-demo", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/book", priority: 0.95, changeFrequency: "monthly" as const },
];
