import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScaleMintBubbleStats from "@/components/ui/ScaleMintBubbleStats";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import PromoBanner from "@/components/PromoBanner";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import DemoSection from "@/components/DemoSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Scale Mint — The Growth Platform for Local Service Businesses",
  description:
    "Scale Mint builds your entire sales process, online presence, and follow-up system — all on one platform, all done for you. Stop losing leads. Start closing more jobs.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <section className="section-padding">
        <div className="container mx-auto">
          <ScaleMintBubbleStats />
        </div>
      </section>
      <ServicesSection />
      <PromoBanner />
      <ProblemSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <DemoSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
