"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DualCTA from "@/components/DualCTA";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Check,
  ArrowLeft,
  ArrowRight,
  Megaphone,
  Globe,
  Sparkles,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

const starterFeatures = [
  "CRM & sales pipeline",
  "2-way text & email",
  "Missed call text-back",
  "Review request automation",
  "Invoicing & estimates",
  "Appointment scheduling",
  "Contracts & e-signatures",
  "Weekly social posts (FB, IG, Google)",
  "Google Business Profile optimization (setup)",
  "Training & onboarding call",
  "Ongoing support",
];

const growthFeatures = [
  "Everything in Starter",
  "Custom sales & follow-up automations",
  "Lead nurturing sequences",
  "Speed-to-lead workflows",
  "Advanced pipeline automations",
  "Priority support",
  "Unlock AI Employee add-on eligibility",
];

const addOns = [
  {
    icon: Megaphone,
    title: "Marketing",
    desc: "Meta Ads, Google PPC, and SEO — built and managed to drive leads straight into your pipeline. No leaky funnels. Every lead lands in your system and gets followed up with automatically.",
    note: "",
    highlight: false,
    href: "/services/marketing",
  },
  {
    icon: Globe,
    title: "Custom Website",
    desc: "SEO-optimized, fast, built to convert visitors into leads — and every form submission goes directly into your CRM and triggers your follow-up automations. Not a template. Built on Next.js for speed and rankings.",
    note: "",
    highlight: false,
    href: "/services/ai-websites",
  },
  {
    icon: Sparkles,
    title: "AI Employee",
    desc: "AI voice receptionist, smart chatbot, and 24/7 lead qualification. Answers calls, texts leads back, qualifies them, and books appointments — all while you're on a job site.",
    note: "",
    highlight: false,
    href: "/services/ai-voice",
  },
];

export default function PricingPage() {
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
            Plain Pricing.{" "}
            <span className="text-gradient">No Mystery.</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Two plans depending on where the business is right now. Either way, we set everything up, train you, and keep it running every month.
          </motion.p>
        </div>
      </section>

      {/* ─── PRICING CARDS ─── */}
      <section className="px-4 pt-6 md:pt-10 pb-6 md:pb-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Choose Your Plan
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Pick Where You Are{" "}
              <span className="text-gradient">Right Now.</span>
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Starter */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-glass relative flex flex-col p-8 transition-all duration-300 hover:border-primary/20"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Starter
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Get the system in place. Stop losing leads.
              </p>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-bold text-foreground">
                  $197
                </span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                + one-time setup fee
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The platform you need to run day-to-day operations and catch every lead. We build it. You run it.
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {starterFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="/book" className="mt-8 block">
                <Button variant="hero-outline" className="w-full">
                  Book a Strategy Call
                </Button>
              </a>

              <p className="mt-3 text-xs text-muted-foreground text-center">
                Best for crews under $7K/month or owners getting their systems in place for the first time.
              </p>
            </motion.div>

            {/* Growth */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-glass card-glow-green relative flex flex-col p-8 transition-all duration-300 border-primary/40 md:scale-[1.02]"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                Recommended
              </span>

              <h3 className="font-heading text-xl font-semibold text-foreground">
                Growth
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                The full engine. Closes more, handles more volume.
              </p>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-bold text-foreground">
                  $347
                </span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                + one-time setup fee
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Everything in Starter, plus custom automations, lead nurture sequences, advanced pipeline workflows, and priority support. The plan for owners ready to push volume.
              </p>

              {/* Promo badge */}
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5">
                <Rocket size={16} className="text-primary shrink-0" />
                <span className="text-xs font-semibold text-primary">
                  FREE Custom Website Included — Limited Time
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {growthFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="/book" className="mt-8 block">
                <Button variant="hero" className="w-full">
                  Book a Strategy Call
                </Button>
              </a>

              <p className="mt-3 text-xs text-muted-foreground text-center">
                Best for crews pushing for more volume and owners who want the system doing the closing work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SETUP FEE NOTE ─── */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto max-w-3xl">
          <motion.p
            initial={isMobile ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center"
          >
            Setup fees are quoted on the call based on what your business actually needs. Starter builds run 5–7 days. Growth builds run 7–10 days. You&apos;ll know the exact cost before you commit.
          </motion.p>
        </div>
      </section>

      {/* Section divider */}
      <div className="container mx-auto px-4 max-w-4xl pt-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* ─── ADD-ONS ─── */}
      <section className="px-4 pt-12 md:pt-16 pb-6 md:pb-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Optional Add-Ons
            </p>
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Plug Into{" "}
              <span className="text-gradient">the System.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              We build the platform first, then plug ads, websites, and AI into it — so every lead gets captured, followed up with, and closed. We don&apos;t overcharge on marketing. As much of your budget as possible goes into the ads themselves, because the more jobs you close, the longer we work together. Pricing is custom-quoted because every business is different.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {addOns.map((a, i) => (
              <motion.div
                key={a.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass flex flex-col p-6 text-center transition-all duration-300 hover:border-primary/30 group"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <a.icon size={20} className="text-primary" />
                </div>
                <h4 className="font-heading text-base font-semibold text-foreground mb-2">
                  {a.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground flex-1">
                  {a.desc}
                </p>
                <Link
                  href={a.href}
                  className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-lg border border-primary/25 bg-primary/5 px-4 py-2.5 text-xs font-semibold text-primary transition-all duration-200 hover:bg-primary/10 hover:border-primary/40"
                >
                  Learn more
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DualCTA
        singleCard
        heading={
          <>
            Not Sure Which <span className="text-gradient">Plan Fits?</span>
          </>
        }
        primary={{
          title: "We'll walk you through it.",
          description:
            "Free 20-minute call. We look at your business, recommend the right plan, and answer every question. No pressure, no pitch.",
        }}
      />

      <Footer />
    </div>
  );
}
