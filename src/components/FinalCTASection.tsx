"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const FinalCTASection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="final-cta" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 px-8 py-16 text-center md:px-16 md:py-24"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

          <h2 className="relative font-heading text-3xl font-bold text-foreground md:text-5xl">
            Tell Us What&apos;s Slowing You Down.
            <br />
            <span className="text-gradient">We&apos;ll Build the Fix.</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-muted-foreground">
            Book a free strategy call — we&apos;ll map out exactly how AI and automation can free up your time and help you scale.
          </p>
          <div className="relative mt-10">
            <a href="/book" className="block w-full sm:w-auto">
              <Button variant="cta" size="lg" className="px-6 py-5 text-sm sm:px-10 sm:py-7 sm:text-lg animate-glow-pulse w-full sm:w-auto">
                Book Your Free Strategy Call
                <ArrowRight size={20} />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
