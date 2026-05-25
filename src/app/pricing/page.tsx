"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DualCTA from "@/components/DualCTA";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowLeft, Megaphone, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

const coreFeatures = [
  "Custom website (10–20 pages) + on-page SEO",
  "CRM & sales pipeline",
  "2-way text & email",
  "Missed call text-back",
  "Speed-to-lead response",
  "Review request automation",
  "Invoicing & estimates",
  "Contracts & e-signatures",
  "Appointment scheduling",
  "Onboarding & training call",
];

const fullBuildFeatures = [
  "Everything in Core Build",
  "Custom automations tailored to your business",
  "Multi-touch follow-up sequences",
  "Database reactivation campaigns",
  "Cold quote follow-up automation",
  "Lead nurturing sequences",
  "Advanced pipeline automations",
  "Repeat customer reminders",
  "Full sales backend configured and optimized",
];

const addOns = [
  {
    icon: Megaphone,
    title: "Meta Ads Management",
    desc: "We build, manage, and optimize your Facebook and Instagram ad campaigns. Before/after creative, lead forms, retargeting — all done for you.",
    learnHref: "/meta-ads",
  },
  {
    icon: TrendingUp,
    title: "Omnipresence SEO",
    desc: "We put you everywhere — Google, Maps, AI search engines, and every local directory — so you're the obvious choice before they even pick up the phone.",
    learnHref: "/seo",
  },
  {
    icon: Sparkles,
    title: "AI Employee",
    desc: "A 24/7 AI receptionist that answers calls, qualifies leads, books appointments, and follows up — so nothing slips while you're on the job.",
    learnHref: "/ai-employee",
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
            Two plans depending on where the business is right now. We set everything up, train you, and keep it running every month.
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

          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            {/* ─── CORE ─── */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-glass relative flex flex-col p-8 transition-all duration-300 hover:border-primary/20"
            >
              <h3 className="font-heading text-2xl font-bold"
                style={{ background: "linear-gradient(135deg, #FAFAFA 0%, #C8C8C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Core Build
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                The complete system built and ready to run.
              </p>

              <div className="mt-5 rounded-xl border border-border/40 bg-white/[0.02] p-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                    $347
                  </span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <div className="mt-3 pt-3 border-t border-border/40 flex items-baseline gap-2">
                  <span className="font-heading text-2xl font-bold text-foreground/90">
                    + $500
                  </span>
                  <span className="text-sm text-muted-foreground">one-time build-out fee</span>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {coreFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/4gMbJ18ns3mB8zmdOF2Nq04"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block"
              >
                <Button variant="cta" className="w-full">
                  Get Started
                </Button>
              </a>

              <p className="mt-3 text-xs text-muted-foreground text-center">
                Best for operators who want the full system built and ready to run from day one.
              </p>
            </motion.div>

            {/* ─── FULL BUILD ─── */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-glass card-glow-green relative flex flex-col p-8 transition-all duration-300 border-primary/40 md:scale-[1.02]"
            >
              <h3 className="font-heading text-2xl font-bold"
                style={{ background: "linear-gradient(135deg, #FAFAFA 0%, #C8C8C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Full Build
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                Everything in Core, plus your sales system built on steroids.
              </p>

              <div className="mt-5 rounded-xl border border-primary/20 bg-primary/[0.04] p-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                    $347
                  </span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <div className="mt-3 pt-3 border-t border-primary/15 flex items-baseline gap-2">
                  <span className="font-heading text-2xl font-bold text-foreground/90">
                    + $1,200
                  </span>
                  <span className="text-sm text-muted-foreground">one-time build-out fee</span>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {fullBuildFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/book" className="mt-8 block">
                <Button variant="cta" className="w-full animate-glow-pulse">
                  Get Started
                </Button>
              </Link>

              <p className="mt-3 text-xs text-muted-foreground text-center">
                Best for operators who want the whole backend handled — every lead worked, every opportunity followed up, nothing left on the table.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="container mx-auto px-4 max-w-5xl pt-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* ─── ADD-ONS ─── */}
      <section className="px-4 pt-12 md:pt-16 pb-6 md:pb-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Optional Add-Ons
            </p>
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Supercharge{" "}
              <span className="text-gradient">Your Plan.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Stack more firepower on top of your system. Custom quoted based on your market and goals.
            </p>
          </motion.div>

          <motion.p
            initial={isMobile ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-primary/70 mb-8"
          >
            Add-ons are available exclusively for active plan clients.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a, i) => (
              <motion.div
                key={a.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass flex flex-col p-7 transition-all duration-300 hover:border-primary/30 group"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <a.icon size={20} className="text-primary" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    {a.title}
                  </h4>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-6">
                  {a.desc}
                </p>

                <Link
                  href={a.learnHref}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-primary/25 bg-primary/5 px-4 py-2.5 text-xs font-semibold text-primary transition-all duration-200 hover:bg-primary/10 hover:border-primary/40"
                >
                  Learn More
                  <ArrowRight size={13} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LARGER BUSINESS NOTE ─── */}
      <section className="px-4 pt-8 md:pt-10 pb-2">
        <div className="container mx-auto max-w-3xl">
          <motion.p
            initial={isMobile ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground"
          >
            Running a larger business?{" "}
            <Link
              href="/book"
              className="font-semibold text-primary hover:underline underline-offset-4"
            >
              Book a call
            </Link>{" "}
            and we&apos;ll build something custom for you.
          </motion.p>
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
            "20-minute call. We look at your business, recommend the right plan, and answer every question. No pressure, no pitch.",
        }}
      />

      <Footer />
    </div>
  );
}
