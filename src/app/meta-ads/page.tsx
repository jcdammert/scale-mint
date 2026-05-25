"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Megaphone, Video, Settings, BarChart3, Phone, Users, TrendingUp, DollarSign, Clock } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

const steps = [
  {
    icon: Video,
    step: "01",
    title: "You film a short video on your phone.",
    desc: "We give you the exact script and shot list. Takes 10 minutes. You don't need equipment, lighting, or editing skills.",
  },
  {
    icon: Settings,
    step: "02",
    title: "We build and launch the campaign.",
    desc: "We write the copy, set the targeting, create the ads, build the lead forms, and fire it live. You don't touch a single setting.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "We optimize every week.",
    desc: "We monitor performance, kill what isn't working, and scale what is. Every week the campaign gets sharper.",
  },
  {
    icon: Phone,
    step: "04",
    title: "You answer the phone and close the jobs.",
    desc: "Leads come in. Your follow-up system picks them up automatically. You show up and close.",
  },
];

const stats = [
  {
    icon: Users,
    value: "3.07B",
    label: "monthly active users across Meta platforms",
    source: "Meta, Q1 2024",
  },
  {
    icon: Clock,
    value: "77%",
    label: "of U.S. adults use Facebook or Instagram every day",
    source: "Pew Research, 2024",
  },
  {
    icon: DollarSign,
    value: "5×",
    label: "average ROAS for home service Meta campaigns",
    source: "WordStream benchmarks, 2024",
  },
  {
    icon: TrendingUp,
    value: "70%",
    label: "of homeowners check social before hiring a contractor",
    source: "HomeAdvisor consumer report, 2023",
  },
];

const cplByIndustry = [
  { industry: "Remodeling", cpl: 105, max: 120 },
  { industry: "Roofing", cpl: 85, max: 120 },
  { industry: "HVAC", cpl: 68, max: 120 },
  { industry: "Epoxy Floors", cpl: 48, max: 120 },
  { industry: "Pressure Washing", cpl: 32, max: 120 },
  { industry: "Junk Removal", cpl: 28, max: 120 },
];

const included = [
  "Targeted campaign setup with precise audience segmentation",
  "Retargeting campaigns to recapture warm leads",
  "Lookalike audience creation for new customer acquisition",
  "Ad creative direction — script, shot list, and copy (you film, we do everything else)",
  "A/B testing of ads, audiences, and placements",
  "Conversion tracking and pixel setup",
  "Lead generation forms within Facebook and Instagram",
  "Weekly optimization — kill losers, scale winners",
  "Monthly performance reporting",
];

export default function MetaAdsPage() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pt-28">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Pricing
        </Link>
      </div>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-8 pb-10 md:pb-16">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5"
          >
            <Megaphone size={12} className="text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Meta Ads Management
            </span>
          </motion.div>

          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            Stop Losing Jobs to Competitors{" "}
            <span className="text-gradient">Who Spend More on Ads.</span>
          </motion.h1>

          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            We run your Facebook and Instagram campaigns so your phone keeps ringing — without you touching a single thing.
          </motion.p>

          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <a href="/book">
              <Button variant="cta" size="lg" className="px-8 py-6 text-base animate-glow-pulse">
                Book a Strategy Call
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── BY THE NUMBERS ─── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              By the Numbers
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Where Your Customers <span className="text-gradient">Actually Are.</span>
            </h2>
          </motion.div>

          {/* Stat cards */}
          <div className="mx-auto max-w-6xl grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10 md:mb-14">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass p-6 relative overflow-hidden"
              >
                <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                <div className="relative">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    {s.value}
                  </div>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">
                    {s.label}
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-wider text-muted-foreground/60">
                    {s.source}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CPL Chart */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl card-glass p-7 md:p-10 relative overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary mb-2">
                    Live Industry Data
                  </p>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                    Avg. Cost Per Lead on Meta — by Industry
                  </h3>
                </div>
                <span className="text-[11px] text-muted-foreground/70">
                  Source: WordStream + AdEspresso benchmarks
                </span>
              </div>

              <div className="space-y-4 md:space-y-5">
                {cplByIndustry.map((row, i) => {
                  const pct = (row.cpl / row.max) * 100;
                  return (
                    <div key={row.industry}>
                      <div className="flex items-baseline justify-between mb-1.5">
                        <span className="text-sm font-medium text-foreground">
                          {row.industry}
                        </span>
                        <span className="font-heading text-sm font-bold text-primary">
                          ${row.cpl}
                        </span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.04] border border-border/30">
                        <motion.div
                          initial={isMobile ? { width: `${pct}%` } : { width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary shadow-[0_0_20px_rgba(74,222,128,0.4)]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-7 text-xs leading-relaxed text-muted-foreground/80">
                Home service contractors on Meta consistently see lower cost-per-lead than direct mail ($125+) or local TV ($200+). Lower-ticket services see CPLs under $40, while higher-ticket trades like remodeling and roofing run higher.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              The Process
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              How It <span className="text-gradient">Works.</span>
            </h2>
          </motion.div>

          <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass flex gap-5 p-6"
              >
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                  <s.icon size={18} className="text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-primary/60 uppercase">Step {s.step}</span>
                  <h3 className="font-heading text-base font-semibold text-foreground mt-1 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              What You Get
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Everything <span className="text-gradient">Included.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl card-glass p-8 md:p-10"
          >
            <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Who It&apos;s For
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Built for Operators <span className="text-gradient">Ready to Pour Fuel.</span>
            </h2>
            <div className="card-glass p-8 md:p-10">
              <p className="text-base leading-relaxed text-muted-foreground">
                Scale plan clients who are already getting some leads and want to pour fuel on the fire. <span className="text-foreground font-medium">Minimum $1,000/mo ad spend recommended.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Fill <span className="text-gradient">Your Pipeline?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              20-minute call. We map out the campaign, show you what it would look like for your market, and tell you straight if it&apos;s a fit.
            </p>
            <a href="/book">
              <Button variant="cta" size="lg" className="px-8 py-6 text-base animate-glow-pulse">
                Book a Strategy Call
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
