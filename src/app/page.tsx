import { Metadata } from "next";
import { faqSchema, jsonLd } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Scale Mint — Sales & Follow-Up Systems for Home Service Businesses",
  description:
    "Install the platform, follow-up automations, and AI Employee that turn missed calls into booked jobs. Built and managed for roofing, HVAC, pressure washing, epoxy, and remodeling crews.",
  alternates: { canonical: "/" },
};

const HOME_FAQS = [
  {
    question: "What does Scale Mint actually do?",
    answer:
      "We install and run the sales follow-up system for home service businesses — CRM, pipeline, missed-call text-back, AI Employee, marketing, and automations. You stop losing leads to slow follow-up, and you stop juggling tools.",
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
      "We give you one platform that replaces the patchwork — CRM, calendar, SMS, email, pipeline, and automations all in one place. Most clients are off three or four other tools by week one.",
  },
  {
    question: "How much does it cost?",
    answer:
      "There's a one-time setup and a flat monthly. Exact numbers depend on volume and what's included. See the pricing page or book a 20-minute call and we'll lay it out.",
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
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
