"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const FinalCTASection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="final-cta" className="section-padding section-glow">
      <div className="container relative z-10 mx-auto">
        <div className="grid gap-5 lg:grid-cols-5 lg:items-stretch">
          {/* Left — See It In Action (smaller) */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass relative overflow-hidden p-6 sm:p-8 md:p-10 lg:col-span-2 flex flex-col justify-center text-center lg:text-left"
          >
            <div className="mx-auto lg:mx-0 mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
              <Play size={20} className="text-primary ml-0.5" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              See It <span className="text-gradient">Run Live.</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
              Walk through a real lead flow — missed call to text-back to booked job. No sign-up.
            </p>
            <div className="mt-6">
              <a href="/live-demo" className="block w-full sm:w-auto sm:inline-block">
                <Button
                  variant="hero-outline"
                  size="lg"
                  className="w-full sm:w-auto px-6 py-5 text-sm"
                >
                  View Live Demo
                  <ArrowRight size={16} />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right — Final CTA (larger, primary) */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:col-span-3 flex flex-col justify-center text-center"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

            <h2 className="relative font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-[2.6rem] leading-[1.1]">
              Stop Losing Jobs to{" "}
              <span className="text-gradient">Slow Follow-Up.</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-sm md:text-base text-muted-foreground">
              20-minute call. We map out what your system would look like, what it would cost, and whether it&apos;s a fit. No pitch.
            </p>
            <div className="relative mt-7">
              <a href="/book" className="block w-full sm:w-auto sm:inline-block">
                <Button
                  variant="cta"
                  size="lg"
                  className="px-8 py-6 text-base animate-glow-pulse w-full sm:w-auto"
                >
                  Request My Demo
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
