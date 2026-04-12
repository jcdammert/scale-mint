"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const DemoSection = () => {
  const isMobile = useIsMobile();
  return (
    <section className="section-padding section-glow">
      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glass mx-auto max-w-3xl p-8 md:p-12 text-center border-primary/20"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
            <Play size={24} className="text-primary ml-0.5" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            See It <span className="text-gradient">In Action.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Watch how our AI qualifies your leads and texts you when
            they&apos;re ready &mdash; all on autopilot.
          </p>
          <div className="mt-8">
            <a
              href="/live-demo"
              className="block w-full sm:w-auto sm:inline-block"
            >
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base"
              >
                View Live Demo
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
