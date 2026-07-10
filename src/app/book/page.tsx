"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function BookPage() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pt-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      <section className="relative overflow-hidden pt-8 pb-10 md:pb-20">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Tell Us How the{" "}
              <span className="text-gradient">Business Runs.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              A few details about what you do and where the bottlenecks are. We come to the call ready with answers, not a pitch.
            </p>
          </motion.div>

          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <iframe
              src="https://links.scalemintsolutions.com/widget/booking/ZGnUiOO77z156k5CjxTQ"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="ZGnUiOO77z156k5CjxTQ_1783706155345"
            />
            <Script
              src="https://links.scalemintsolutions.com/js/form_embed.js"
              strategy="lazyOnload"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
