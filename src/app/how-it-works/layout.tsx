import type { Metadata } from "next";
import { jsonLd, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From kickoff to booked jobs — the exact process Scale Mint runs: we build the marketing, own the follow-up, and keep it running every month.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Scale Mint",
    description:
      "The exact build process — discovery, build, launch, and ongoing management.",
    url: "/how-it-works",
  },
};

const FAQS = [
  {
    question: "How long until I'm live?",
    answer:
      "Most operators are fully live within 7–14 days from kickoff. The first follow-up sequences are usually running within 48 hours.",
  },
  {
    question: "What do I have to do during setup?",
    answer:
      "Two short calls — kickoff and walkthrough — and we handle the rest. We pull data from your existing tools, handle the build, and train your team.",
  },
  {
    question: "Do you keep optimizing it after launch?",
    answer:
      "Yes. Every plan includes ongoing tuning — updated copy, sequence improvements, new automations as your business evolves.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Scale Mint builds and runs your marketing and sales process",
  description:
    "Five-step process to build and run your marketing and sales operation.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Discovery",
      text: "We map your sales process, lead sources, and where leads currently fall through.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Build",
      text: "We build the website, configure the CRM, set up follow-up sequences, and wire in integrations — fully configured for your business.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Launch",
      text: "We migrate your data, train your team, and go live. First leads start hitting the new flow within 48 hours.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Optimize",
      text: "Ongoing tuning — updated copy, new sequences, and reporting to keep close rates climbing.",
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "How It Works", url: "/how-it-works" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
