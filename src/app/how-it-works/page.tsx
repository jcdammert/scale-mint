"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ScaleMintSystemStack from "@/components/ui/ScaleMintSystemStack";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  Handshake,
  Hammer,
  MonitorPlay,
  HeartHandshake,
  Flame,
} from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "We Get on a Call",
    description:
      "Quick, easy call. You tell us a little about your business, any questions you have, any problems you want fixed, and anything that's eating up too much of your time. That's it — we listen, and figure out how we can help.",
  },
  {
    step: "02",
    icon: Handshake,
    title: "We Show You How It Works",
    description:
      "We walk you through the platform, show you exactly how it fits your business, and you tell us if it makes sense. If there are gaps in your process — missed leads, no follow-up, weak online presence — we show you how we fix them. No pressure, just clarity.",
  },
  {
    step: "03",
    icon: Hammer,
    title: "We Build Your Entire System",
    description:
      "This is where it gets good. We set up your full platform — your sales pipeline, your follow-up automations, your review system, your social posting, your online presence — all configured specifically for how your business runs. No templates. No generic setup. This is YOUR system, built for YOUR business. Typical build time: 5–10 business days.",
  },
  {
    step: "04",
    icon: MonitorPlay,
    title: "We Walk You Through Everything",
    description:
      "When it's done, we hop on a recorded training call and walk you through every piece of your system. You'll see your dashboard, your pipeline, your automations, your calendar — and you'll know exactly how to use all of it. You're in full control.",
  },
  {
    step: "05",
    icon: HeartHandshake,
    title: "We Stay in Your Corner",
    description:
      "The monthly fee isn't just for the platform — it's for the team behind it. We post for you weekly, your automations keep running, and we're always available when you need something changed, added, or fixed. Want to add marketing or a website later? It plugs right into the system we already built. We're here for the long haul.",
  },
];

export default function HowItWorksPage() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
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
      <section className="relative overflow-hidden pt-8 pb-6 md:pb-10">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            {"Here's Exactly How It "}
            <span className="text-gradient">Works</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {"We don't hand you a login and say good luck. We build your entire system, train you on it, and stay in your corner every month."}
          </motion.p>
        </div>
      </section>

      {/* System Stack visualizer */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto max-w-4xl">
          <ScaleMintSystemStack />
        </div>
      </section>

      {/* Steps */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
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

      {/* Why Most Marketing Doesn't Work Callout */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Flame size={24} className="text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Why Most Marketing Doesn&apos;t Work for{" "}
                <span className="text-gradient">Service Businesses.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Here&apos;s the truth: running ads when your backend isn&apos;t ready is like pouring gas on the floor. Leads come in, nobody follows up fast enough, there&apos;s no pipeline, no system — and the money is wasted. That&apos;s why we build the system FIRST. When your sales process is dialed, your online presence is strong, and your follow-up is automatic — THEN marketing works. Because the system catches every lead, nurtures them, and helps you close. That&apos;s the difference between spending money on ads and making money from ads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-10 md:pb-16">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Ready to See What Your System Would{" "}
              <span className="text-gradient">Look Like?</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book a free strategy call — no pressure, no pitch. Just a real conversation about your business.
            </p>
            <div className="mt-8">
              <a href="/book" className="block w-full sm:w-auto">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 text-base"
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
