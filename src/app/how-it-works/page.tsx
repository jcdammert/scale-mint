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
  Check,
  Play,
  Zap,
  Cpu,
  Workflow,
  Star,
  Calendar,
  MessageSquare,
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

// ─────────────────────────────────────────────────────────────────────────────
// Visual elements for each step — unique mini-illustrations
// ─────────────────────────────────────────────────────────────────────────────
function StepVisual({ stepNum }: { stepNum: number }) {
  if (stepNum === 0) {
    // Step 1: Phone call with pulsing rings + SMS preview
    return (
      <div className="relative h-64 w-full max-w-sm">
        {/* Pulsing rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -inset-16 rounded-full border border-primary/20 animate-ping [animation-duration:3s]" />
          <div className="absolute -inset-10 rounded-full border border-primary/30 animate-ping [animation-duration:2.5s] [animation-delay:0.5s]" />
          <div className="absolute -inset-4 rounded-full border border-primary/40" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-[0_0_40px_rgba(74,222,128,0.4)]">
            <PhoneCall size={32} className="text-primary-foreground" />
          </div>
        </div>
        {/* Floating SMS preview */}
        <div className="absolute bottom-2 right-0 card-glass px-4 py-2 text-xs text-foreground shadow-xl rotate-3">
          <div className="flex items-center gap-2">
            <MessageSquare size={12} className="text-primary" />
            <span className="text-muted-foreground">Free strategy call</span>
          </div>
        </div>
        <div className="absolute top-2 left-0 card-glass px-4 py-2 text-xs text-foreground shadow-xl -rotate-3">
          <div className="flex items-center gap-2">
            <Calendar size={12} className="text-primary" />
            <span className="text-muted-foreground">15 minutes</span>
          </div>
        </div>
      </div>
    );
  }

  if (stepNum === 1) {
    // Step 2: Mock dashboard with platform tour items
    return (
      <div className="relative w-full max-w-sm">
        <div className="card-glass p-5 shadow-2xl">
          <div className="mb-4 flex items-center gap-2 border-b border-border/40 pb-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="ml-2 text-[10px] font-mono text-muted-foreground">Platform Tour</span>
          </div>
          <div className="space-y-2.5">
            {[
              "Sales pipeline",
              "Follow-up automations",
              "Online presence",
              "Review system",
              "Reporting dashboard",
            ].map((label, idx) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-md border border-primary/15 bg-primary/5 px-3 py-2"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                  <Check size={12} className="text-primary" />
                </div>
                <span className="text-xs text-foreground">{label}</span>
                <span className="ml-auto text-[10px] font-mono text-primary/60">0{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Decorative glow */}
        <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/5 blur-2xl" />
      </div>
    );
  }

  if (stepNum === 2) {
    // Step 3: Connected nodes — system being built
    const nodes = [
      { icon: Workflow, label: "CRM", x: "10%", y: "20%" },
      { icon: Zap, label: "Auto", x: "70%", y: "10%" },
      { icon: Star, label: "Reviews", x: "5%", y: "65%" },
      { icon: Calendar, label: "Booking", x: "65%", y: "60%" },
      { icon: MessageSquare, label: "SMS", x: "35%", y: "85%" },
    ];
    return (
      <div className="relative h-72 w-full max-w-sm">
        {/* Center hub */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/50 shadow-[0_0_50px_rgba(74,222,128,0.4)]">
            <Cpu size={32} className="text-primary-foreground" />
            <div className="absolute -inset-2 rounded-2xl border border-primary/30 animate-pulse" />
          </div>
        </div>
        {/* Connecting lines (SVG) */}
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {nodes.map((n, i) => (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={n.x}
              y2={n.y}
              stroke="rgba(74,222,128,0.25)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          ))}
        </svg>
        {/* Surrounding nodes */}
        {nodes.map((n, i) => (
          <div
            key={n.label}
            className="absolute card-glass flex flex-col items-center gap-1 rounded-lg p-2.5 shadow-lg"
            style={{ left: n.x, top: n.y, animationDelay: `${i * 0.2}s` }}
          >
            <n.icon size={16} className="text-primary" />
            <span className="text-[10px] font-medium text-muted-foreground">{n.label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (stepNum === 3) {
    // Step 4: Video training mockup
    return (
      <div className="relative w-full max-w-sm">
        <div className="card-glass overflow-hidden shadow-2xl">
          {/* Video frame */}
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-[0_0_30px_rgba(74,222,128,0.5)]">
                <Play size={26} className="text-primary-foreground translate-x-0.5" fill="currentColor" />
                <div className="absolute -inset-2 rounded-full border-2 border-primary/30 animate-ping [animation-duration:2s]" />
              </div>
            </div>
            {/* Recording badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-red-500/20 border border-red-500/40 px-2 py-0.5">
              <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">REC</span>
            </div>
            {/* Duration */}
            <div className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-0.5 text-[10px] font-mono text-white">
              42:18
            </div>
          </div>
          {/* Below the video */}
          <div className="p-4">
            <div className="mb-1 text-xs font-semibold text-foreground">
              Your System Walkthrough
            </div>
            <div className="text-[10px] text-muted-foreground">
              Recorded • Watch anytime
            </div>
          </div>
        </div>
        <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/5 blur-2xl" />
      </div>
    );
  }

  // Step 5: Live support indicator
  return (
    <div className="relative w-full max-w-sm space-y-3">
      {/* Live status card */}
      <div className="card-glass p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <HeartHandshake size={20} className="text-primary" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-primary border-2 border-background animate-pulse" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">Scale Mint Team</div>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] text-primary">Online now</span>
            </div>
          </div>
        </div>
      </div>
      {/* Activity items */}
      {[
        { icon: Star, label: "Posted to your Google profile", time: "2h ago" },
        { icon: Zap, label: "Automation deployed", time: "Yesterday" },
        { icon: MessageSquare, label: "Replied to your support ticket", time: "Mon" },
      ].map((item, i) => (
        <div
          key={i}
          className="card-glass flex items-center gap-3 p-3 shadow-md"
          style={{ marginLeft: `${(i + 1) * 8}px` }}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <item.icon size={14} className="text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="truncate text-xs text-foreground">{item.label}</div>
            <div className="text-[10px] text-muted-foreground">{item.time}</div>
          </div>
          <Check size={12} className="text-primary shrink-0" />
        </div>
      ))}
      <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/5 blur-2xl" />
    </div>
  );
}

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
      <section className="px-4 pt-2 pb-10 md:pb-16">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              The Scale Mint Growth Engine
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Four Layers.{" "}
              <span className="text-gradient">One Connected System.</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Every layer feeds into the next — and we build all of it for you.
            </p>
          </motion.div>
          <ScaleMintSystemStack />
        </div>
      </section>

      {/* Section divider */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Steps intro */}
      <section className="px-4 pt-10 md:pt-14 pb-2 text-center">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Our 5-Step Process
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              From First Call to{" "}
              <span className="text-gradient">Live System.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Steps — alternating zigzag with unique visuals */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto max-w-6xl">
          <div className="relative space-y-12 md:space-y-20">
            {/* Vertical connecting line on desktop */}
            <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent md:block" />

            {steps.map((s, i) => {
              const isReversed = i % 2 === 1;
              return (
                <motion.div
                  key={s.step}
                  initial={isMobile ? false : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid items-center gap-8 md:gap-12 md:grid-cols-2 ${
                    isReversed ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Content side */}
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 mb-4">
                      <s.icon size={14} className="text-primary" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        Step {s.step}
                      </span>
                    </div>
                    <h3 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                      {s.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>

                  {/* Visual side — unique per step */}
                  <div className="relative flex items-center justify-center">
                    <StepVisual stepNum={i} />
                  </div>
                </motion.div>
              );
            })}
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
