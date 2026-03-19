"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap, Clock, UserCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const stats = [
  { icon: Clock, text: "Up and Running in Days" },
  { icon: UserCheck, text: "Zero Tech Skills Needed" },
  { icon: Zap, text: "Marketing + Automations" },
];

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <section className="relative overflow-hidden pt-28 pb-8 md:pt-36 md:pb-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative mx-auto px-4 text-center">
        <motion.h1
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
        >
          We Build the System That Gets You More Jobs and Runs Your Business on{" "}
          <span className="text-gradient">Autopilot.</span>
        </motion.h1>

        <motion.p
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Websites, marketing, and automations — built by business owners who actually use this stuff. We build it, hand it over, and you run it. No tech skills needed.
        </motion.p>

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a href="/book" className="block w-full sm:w-auto">
            <Button variant="hero" size="lg" className="text-base px-8 py-6 w-full sm:w-auto">
              Book a Free Strategy Call
            </Button>
          </a>
          <a href="#services" className="block w-full sm:w-auto">
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 w-full sm:w-auto">
              See What We Build
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
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
