import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Scale Mint — Marketing and Sales Process for Local Service Businesses",
  description:
    "We run the marketing that brings work in and own the sales process that turns leads into booked jobs. Ads, SEO, website, and automated follow-up — built and managed for local service businesses.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProblemSection />
      <HowItWorksSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
