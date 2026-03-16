"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap, Clock, UserCheck } from "lucide-react";

const stats = [
  { icon: Clock, text: "Launched in Days, Not Months" },
  { icon: UserCheck, text: "Zero Tech Skills Needed" },
  { icon: Zap, text: "Built Around Your Business" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
        >
          If You Can Think It,{" "}
          <span className="text-gradient">We Can Build It.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          We build custom AI systems and automations for local businesses — so you can stop drowning in busywork and focus on what actually grows your business. No tech skills required. Up and running in days, not months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a href="#final-cta">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Book a Free Strategy Call
            </Button>
          </a>
          <a href="#services">
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              See What We Build
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10"
        >
          {stats.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon size={18} className="text-primary" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
