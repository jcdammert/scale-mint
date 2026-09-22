import { Metadata } from "next";
import { faqSchema, jsonLd } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Scale Mint — Marketing and Sales Systems for Home Service Businesses",
  description:
    "We run the marketing that brings work in and own the sales process that turns leads into booked jobs. Ads, SEO, website, and automated follow-up — built and managed for home service contractors.",
  alternates: { canonical: "/" },
};

const HOME_FAQS = [
  {
    question: "What does Scale Mint actually do?",
    answer:
      "We run your marketing and build the sales follow-up operation behind it — CRM, pipeline, missed-call text-back, automated sequences, and your online presence. You stop losing leads to slow follow-up and stop juggling tools that don't talk to each other.",
  },
  {
    question: "Who is this built for?",
    answer:
      "Home service contractors — roofing, HVAC, pressure washing, epoxy, junk removal, remodeling, tinting, and similar trades that depend on inbound leads and fast response.",
  },
  {
    question: "How fast does it follow up with leads?",
    answer:
      "Within seconds. Missed calls, form submissions, and ad leads get an instant SMS reply, then a structured sequence over the following days until they book or opt out.",
  },
  {
    question: "Do I need to switch CRMs?",
    answer:
      "We build everything into one place — CRM, calendar, SMS, email, pipeline, and automations all connected. Most clients are off three or four other tools by week one.",
  },
  {
    question: "How much does it cost?",
    answer:
      "There's a one-time setup and a flat monthly. Exact numbers depend on what's included. See the pricing page or request a demo and we'll lay it out.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(HOME_FAQS)) }}
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProblemSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
