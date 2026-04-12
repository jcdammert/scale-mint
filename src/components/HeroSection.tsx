"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, UserCheck, HeartHandshake } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Particles from "@/components/Particles";

const stats = [
  { icon: Clock, text: "Live in 5\u201310 Days" },
  { icon: UserCheck, text: "No Tech Skills Needed" },
  { icon: HeartHandshake, text: "Platform + Done-For-You Support" },
];

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <section className="relative overflow-hidden pt-28 pb-8 md:pt-36 md:pb-12">
      {/* Animated gradient mesh background */}
      <div className="hero-mesh">
        <div className="mesh-blob-1" />
        <div className="mesh-blob-2" />
        <div className="mesh-blob-3" />
      </div>

      {/* Radial glow behind headline */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-primary/5 blur-[100px]" />

      {/* Floating particles (desktop only) */}
      <Particles />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
        >
          We Build the Growth Engine That Gets You More Jobs and Makes Your Business{" "}
          <span className="text-gradient">Impossible to Ignore.</span>
        </motion.h1>

        <motion.p
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Scale Mint builds your entire sales process, online presence, and follow-up system — all on one platform, all done for you. Stop losing leads. Start closing more jobs. Be ready to scale whenever you want.
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
          <a href="#how-it-works" className="block w-full sm:w-auto">
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 w-full sm:w-auto">
              See How It Works
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
