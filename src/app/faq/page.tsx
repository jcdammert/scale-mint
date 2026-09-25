import type { Metadata } from "next";
import { faqSchema, jsonLd } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import DualCTA from "@/components/DualCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "The questions operators actually ask about Scale Mint — what we do, how fast it works, what it costs, and whether you can cancel anytime.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    question: "What exactly does Scale Mint do for me?",
    answer:
      "We build and run your full marketing and sales follow-up operation: pipeline, missed-call text-back, two-way SMS, follow-up sequences, automated review requests, and your online presence across Google, Facebook, and Instagram. We configure everything for how your crew runs, train you on it, and keep it running every month. The marketing and the team behind it.",
  },
  {
    question: "Are you a marketing agency or a piece of software?",
    answer:
      "Neither exactly, and that's the point. Agencies run ads and send a report. Software gives you a login and a help center. We do both sides: we run the marketing — ads, SEO, and website — and we own the sales process that turns those leads into booked jobs. Automated follow-up, missed call text-back, and either a trained AI setter, a plugged-in sales rep, or your own team trained to close. Marketing without a sales process behind it is just expensive noise. That combination is the actual offer.",
  },
  {
    question: "How is this different from hiring a marketing agency?",
    answer:
      "Agencies run ads and send a monthly report. The day you stop paying, the leads stop and you have nothing left. With Scale Mint, you own the pipeline, the follow-up sequences, and the contacts. When you're ready to add ads, they feed straight into the sales process we already built.",
  },
  {
    question: "How fast can I get up and running?",
    answer:
      "5 to 10 business days for most clients. We move fast because we've built this for multiple service businesses and know what to configure first.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "No. We set everything up, record a training call walking you through it, and you can text or call when you have a question. If you can send a text, you can use this.",
  },
  {
    question: "What does the monthly fee cover?",
    answer:
      "Everything we built for you — CRM, automations, follow-up sequences, review engine, and online presence — plus ongoing support and our team adjusting things as your business changes. A fraction of what a part-time ops hire would cost, and it runs 24/7.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Month-to-month, no long-term contract. We keep clients because the results are there, not because of fine print.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(FAQS)) }}
      />
      <Navbar />
      <div className="pt-24" />
      <FAQSection />
      <DualCTA />
      <Footer />
    </div>
  );
}
