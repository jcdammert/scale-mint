"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";

const PromoBanner = () => {
  const isMobile = useIsMobile();
  return (
    <section className="px-4 py-6 md:py-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="shimmer-effect rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-6 py-6 md:px-10 md:py-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <Rocket size={28} className="text-primary shrink-0" />
          <p className="font-heading text-base md:text-lg font-semibold text-foreground text-center sm:text-left">
            Sign up for the Growth Plan and we&apos;ll build you a custom website. No extra charge.
          </p>
          <a href="/book" className="block w-full sm:w-auto sm:ml-auto shrink-0">
            <Button variant="hero" size="sm" className="w-full sm:w-auto">
              Request My Demo
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;
