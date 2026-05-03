"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, UserCheck, HeartHandshake, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Particles from "@/components/Particles";

const stats = [
  { icon: Clock, text: "Live in 5–10 Days" },
  { icon: UserCheck, text: "No Tech Skills Needed" },
  { icon: HeartHandshake, text: "Platform + Done-For-You Support" },
];

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-20">
      {/* Animated gradient mesh background */}
      <div className="hero-mesh">
        <div className="mesh-blob-1" />
        <div className="mesh-blob-2" />
        <div className="mesh-blob-3" />
      </div>

      {/* Radial glow behind headline */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-primary/5 blur-[110px]" />

      {/* Floating particles (desktop only) */}
      <Particles />

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Top eyebrow tag */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 backdrop-blur-md"
        >
          <Sparkles size={12} className="text-primary" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            The Growth Platform for Local Service Businesses
          </span>
        </motion.div>

        <motion.h1
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Make Your Business{" "}
          <span className="text-gradient">Impossible to Ignore.</span>
        </motion.h1>

        <motion.p
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Scale Mint builds your entire sales process, online presence, and follow-up system — all on one platform, all done for you. Stop losing leads. Start closing more jobs. When you&apos;re ready for more, just turn on the ads — the system&apos;s already built to handle the volume.
        </motion.p>

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
        >
          <a href="/book" className="block w-full sm:w-auto">
            <Button variant="hero" size="lg" className="text-base px-8 py-6 w-full sm:w-auto">
              Book a Free Strategy Call
            </Button>
          </a>
          <a href="#how-it-works" className="block w-full sm:w-auto">
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 w-full sm:w-auto">
              See How It Works
            </Button>
          </a>
        </motion.div>

        {/* Trust pills — unified glass strip */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 md:mt-16"
        >
          <div className="card-glass mx-auto inline-flex max-w-full flex-col items-center justify-center gap-3 px-5 py-4 sm:flex-row sm:gap-0 sm:px-2 sm:py-2">
            {stats.map(({ icon: Icon, text }, i) => (
              <div key={text} className="flex items-center gap-2 px-3 py-1 sm:px-5 sm:py-2 relative">
                <Icon size={15} className="text-primary shrink-0" />
                <span className="text-xs font-medium text-foreground/80 sm:text-sm whitespace-nowrap">
                  {text}
                </span>
                {i < stats.length - 1 && (
                  <span className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-4 w-px bg-border/60" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
