"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  Handshake,
  Hammer,
  MonitorPlay,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "We Get on a Call",
    description:
      "First we hop on a free strategy call. No pitch, no pressure. We want to understand exactly what's slowing you down, where you're losing leads, and what your business actually needs. We ask the right questions so nothing gets missed.",
  },
  {
    step: "02",
    icon: Handshake,
    title: "We See If It's a Good Fit",
    description:
      "We're honest about this — we only work with business owners who are serious about growing. If you're not ready to invest in your business or you're looking for a magic fix overnight, we're probably not the right fit. But if you're committed to building something real, we want to work with you.",
  },
  {
    step: "03",
    icon: Hammer,
    title: "We Build Everything For You",
    description:
      "Once we're aligned, we get to work. Website, marketing, automations, CRM — whatever your business needs, we build it from the ground up and tailor it specifically to how you operate. No templates, no shortcuts.",
  },
  {
    step: "04",
    icon: MonitorPlay,
    title: "We Hand It Over and Show You Everything",
    description:
      "When it's done, we walk you through the whole system on a recorded call so you know exactly how everything works. You're in control. We're not trying to keep you dependent on us — we want you to feel confident running it yourself.",
  },
  {
    step: "05",
    icon: HeartHandshake,
    title: "We Stay in Your Corner",
    description:
      "Think of the monthly fee like paying an office staff member — except a fraction of the cost because we use AI and have systems that make everything run lean. It covers your hosting, keeps everything running smoothly, and means we're always available when you need a change or something comes up.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back Link */}
      <div className="container mx-auto px-4 pt-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-14 md:pb-20">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            {"Here's How We "}
            <span className="text-gradient">Work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {"We don't do cookie-cutter packages. Everything we build is tailored to your business — the way it should be."}
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-8 md:p-10 transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <s.icon size={28} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
                      Step {s.step}
                    </div>
                    <h2 className="mb-3 font-heading text-xl font-bold text-foreground md:text-2xl">
                      {s.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {s.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-12 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              {"Ready to See If We're a "}
              <span className="text-gradient">Good Fit?</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              {"Book a free strategy call — no pressure, no pitch. Just a real conversation about your business and how we can help."}
            </p>
            <div className="mt-8">
              <a href="/book">
                <Button
                  variant="cta"
                  size="lg"
                  className="px-8 py-6 text-base"
                >
                  Book a Free Strategy Call
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
