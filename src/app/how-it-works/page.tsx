"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  Hammer,
  MonitorPlay,
  Zap,
  HeartHandshake,
  Globe,
  MessageSquare,
  CalendarCheck,
  Star,
  Megaphone,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

const pillars = [
  {
    num: "01",
    icon: Globe,
    title: "Your Online Presence",
    description:
      "Professional website, Google Business Profile, on-page SEO. When someone searches for your service or Googles you after a referral — they find a real business.",
  },
  {
    num: "02",
    icon: MessageSquare,
    title: "Every Lead Captured",
    description:
      "Missed call text-back fires in seconds. Speed-to-lead response goes out instantly. 2-way SMS and email keeps the conversation alive automatically.",
  },
  {
    num: "03",
    icon: CalendarCheck,
    title: "Close and Book",
    description:
      "CRM pipeline tracks every lead. Estimates, invoices, contracts, and scheduling all in one place. Nothing falls through the cracks.",
  },
  {
    num: "04",
    icon: Star,
    title: "Reputation on Autopilot",
    description:
      "Review requests fire automatically after every job. Your Google rating climbs without you asking a single customer manually.",
  },
];

const steps = [
  {
    num: "01",
    icon: PhoneCall,
    title: "We Get on a Call",
    timing: "15 min",
    description:
      "You tell us how your business runs — where leads come in, where they fall through, what's eating your time. We figure out which build is right for you.",
  },
  {
    num: "02",
    icon: Hammer,
    title: "We Build Your System",
    timing: "5–10 days",
    description:
      "We build your website, configure your CRM, set up every automation, and customize the system around how your business actually operates.",
  },
  {
    num: "03",
    icon: MonitorPlay,
    title: "We Walk You Through It",
    timing: "1 hour",
    description:
      "Full onboarding call. We show you exactly how everything works, where to find things, and what the system is doing for you automatically.",
  },
  {
    num: "04",
    icon: Zap,
    title: "You Go Live",
    timing: "Day one",
    description:
      "Your system is live. Leads start getting captured and followed up automatically. You focus on the work.",
  },
  {
    num: "05",
    icon: HeartHandshake,
    title: "We Keep It Running",
    timing: "Every month",
    description:
      "Every month we make sure everything is working. If something needs adjusting, we handle it. You're never on your own.",
  },
];

const addOns = [
  {
    icon: Megaphone,
    title: "Meta Ads",
    desc: "Facebook and Instagram campaigns built, managed, and optimized. Creative, lead forms, retargeting — all handled.",
    href: "/meta-ads",
  },
  {
    icon: TrendingUp,
    title: "Omnipresence SEO",
    desc: "Show up everywhere — Google, Maps, AI search engines, and every local directory in your service area.",
    href: "/seo",
  },
  {
    icon: Sparkles,
    title: "AI Employee",
    desc: "A 24/7 AI receptionist that answers calls, qualifies leads, books appointments, and follows up around the clock.",
    href: "/ai-employee",
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

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-8 pb-6 md:pb-10">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            {"From First Call to "}
            <span className="text-gradient">Live System.</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {"We don't hand you a login and say good luck. We build the entire system for your business, train you on it, and keep it running every month."}
          </motion.p>
        </div>
      </section>

      {/* ─── SECTION 1: WHAT YOU'RE GETTING ─── */}
      <section className="px-4 pt-10 md:pt-14 pb-6 md:pb-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              What You&apos;re Getting
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              The System,{" "}
              <span className="text-gradient">Plus What&apos;s On Top.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            {/* THE SYSTEM */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-glass flex flex-col p-8 transition-all duration-300 hover:border-primary/30"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                The System
              </p>
              <h3 className="font-heading text-3xl font-bold text-foreground">
                $347<span className="text-base font-normal text-muted-foreground">/mo</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">
                Everything your business needs to look professional, capture every lead, and follow up automatically. Pick your build based on how deep you want to go.
              </p>
              <Link
                href="/pricing"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary/15 hover:border-primary/50"
              >
                See Pricing
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* ADD-ONS */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-glass flex flex-col p-8 transition-all duration-300 hover:border-primary/30"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                Add-Ons
              </p>
              <h3 className="font-heading text-3xl font-bold text-foreground">
                Custom Quoted
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">
                When you&apos;re ready to grow faster — Meta Ads, SEO, or an AI Employee on top of your system. Run them yourself or have us manage everything. Your choice.
              </p>
              <Link
                href="/pricing"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary/15 hover:border-primary/50"
              >
                Learn More
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="container mx-auto px-4 max-w-5xl pt-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* ─── SECTION 2: HOW THE SYSTEM WORKS ─── */}
      <section className="px-4 pt-12 md:pt-16 pb-6 md:pb-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              How the System Works
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Four Pillars.{" "}
              <span className="text-gradient">One Connected Operation.</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Every part of the system feeds into the next.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.num}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass p-7 transition-all duration-300 hover:border-primary/30 group"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-transform duration-300 group-hover:scale-110">
                    <p.icon size={20} className="text-primary" />
                  </div>
                  <span className="font-heading text-xs font-bold text-primary/50 tracking-widest">
                    {p.num}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="container mx-auto px-4 max-w-5xl pt-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* ─── SECTION 3: HOW WE BUILD IT FOR YOU ─── */}
      <section className="px-4 pt-12 md:pt-16 pb-6 md:pb-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Our 5-Step Process
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              From First Call to{" "}
              <span className="text-gradient">Live System.</span>
            </h2>
          </motion.div>

          <div className="relative space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass p-6 md:p-7 transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-start gap-5 md:gap-6">
                  {/* Number circle */}
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-card">
                      <span className="font-heading text-lg md:text-xl font-bold text-primary">
                        {s.num}
                      </span>
                    </div>
                    <s.icon size={16} className="text-primary/60" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                        {s.title}
                      </h3>
                      <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                        {s.timing}
                      </span>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="container mx-auto px-4 max-w-5xl pt-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* ─── SECTION 4: ADD MORE FIREPOWER ─── */}
      <section className="px-4 pt-12 md:pt-16 pb-6 md:pb-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Optional Add-Ons
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Stack More on Top{" "}
              <span className="text-gradient">When You&apos;re Ready.</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Available exclusively for active plan clients. Custom quoted.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a, i) => (
              <motion.a
                key={a.title}
                href={a.href}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass flex flex-col p-7 transition-all duration-300 hover:border-primary/30 group"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-transform duration-300 group-hover:scale-110">
                    <a.icon size={20} className="text-primary" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    {a.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-5">
                  {a.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight size={13} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="px-4 pt-12 md:pt-16 pb-16 md:pb-24">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass card-glow-green p-8 md:p-12 text-center border-primary/40"
          >
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Ready to get your{" "}
              <span className="text-gradient">system built?</span>
            </h2>
            <Link href="/pricing" className="mt-8 inline-block">
              <Button variant="cta" size="lg" className="px-8 animate-glow-pulse">
                See Pricing
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
