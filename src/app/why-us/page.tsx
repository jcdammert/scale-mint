"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DualCTA from "@/components/DualCTA";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Wrench,
  Target,
  UserCheck,
  Handshake,
  Check,
  X,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

const differentiators = [
  {
    icon: Wrench,
    title: "We run service businesses ourselves.",
    description:
      "We built this with our own money for our own crews before we offered it to anyone else. We know what missing a call costs because we've missed them.",
  },
  {
    icon: Target,
    title: "We build the system, not a feature list.",
    description:
      "We don't sell you a CRM and walk away. Pipeline, follow-up, online presence, reviews — built around how your business actually runs and connected on one platform.",
  },
  {
    icon: UserCheck,
    title: "You own the system. You see everything.",
    description:
      "We build it, configure it, and hand you the keys. Every lead, every follow-up, every pipeline stage stays in your account. The day you leave, you keep it all.",
  },
  {
    icon: Handshake,
    title: "Month-to-month. No long contracts.",
    description:
      "Cancel anytime. We keep clients because the system works — not because of fine print.",
  },
];

// Helper for section labels
function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-heading text-sm font-bold text-primary/60 tracking-widest">
        {num}
      </span>
      <span className="h-px flex-1 max-w-[60px] bg-primary/30" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
        {label}
      </span>
    </div>
  );
}

export default function WhyUsPage() {
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
      <section className="relative overflow-hidden pt-8 pb-12 md:pb-20">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 backdrop-blur-md"
          >
            <Sparkles size={12} className="text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              From One Operator To Another
            </span>
          </motion.div>

          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            {"Built by Operators, "}
            <span className="text-gradient">For Operators.</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {"We're not an agency reading from a script and we're not a SaaS pointing you at a help desk. We run service businesses, and we built this for our own crews first."}
          </motion.p>
        </div>
      </section>

      {/* ─── 01 / OUR STORY — asymmetric editorial ─── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left: founder card (sticky on desktop) */}
            <motion.aside
              initial={isMobile ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
            >
              <SectionLabel num="01" label="Our Story" />

              {/* Founder card */}
              <div className="card-glass p-6 relative overflow-hidden">
                <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                <div className="relative">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <span className="font-heading text-xl font-bold text-primary">JD</span>
                  </div>
                  <div className="font-heading text-xl font-bold text-foreground leading-tight">
                    Johann Dammert
                  </div>
                  <div className="text-xs font-medium text-primary/80 mt-1 uppercase tracking-wider">
                    Founder & Operator
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Right: story prose */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 relative"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-[1.1] mb-8 relative">
                Our <span className="text-gradient">Story</span>
              </h2>

              <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg relative">
                <p>
                  {"My name is Johann Dammert. I started my first business at 15 and never stopped. I ran multiple local service companies. I tried the CRMs. No time to actually set them up. I hired agencies. They took the money and sent reports. So I built the system myself — the platform, the automations, the sales systems. Then I helped friends do the same. What every service operator actually needs is the system AND someone who'll set it up and run it right."}
                </p>
                <p className="text-foreground/90 font-medium">
                  {"That's why Scale Mint exists."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 02 / VS COMPARISON ─── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="font-heading text-sm font-bold text-primary/60 tracking-widest">02</span>
              <span className="h-px w-12 bg-primary/30" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                The Difference
              </span>
              <span className="h-px w-12 bg-primary/30" />
            </div>

            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-[1.1]">
              {"We're Not Just a Platform. We're Not Just an "}
              <span className="text-gradient">Agency.</span>
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
            {/* SaaS */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-glass p-7 relative opacity-80"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20">
                  <X size={16} className="text-red-400" />
                </div>
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Just a SaaS
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"You get a login, a knowledge base, and a support ticket. You're on your own to set it up and actually use it. Most owners never do."}
              </p>
            </motion.div>

            {/* Agency */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="card-glass p-7 relative opacity-80"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20">
                  <X size={16} className="text-red-400" />
                </div>
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Just an Agency
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"They run things for you, but you don't see what's happening, you don't own anything, and the day you stop paying, the leads stop too."}
              </p>
            </motion.div>

            {/* Scale Mint - highlighted */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="relative p-px rounded-2xl bg-gradient-to-br from-primary/40 via-primary/15 to-transparent shadow-[0_0_40px_rgba(74,222,128,0.12)]"
            >
              <div className="rounded-[15px] bg-[hsl(230_12%_8%)] p-7 h-full relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 bg-primary/5 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 border border-primary/30">
                      <Check size={16} className="text-primary" />
                    </div>
                    <span className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
                      Scale Mint
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {"Both. The full platform on your account, plus the team that builds it, configures it, and adjusts it as your business changes. You see every lead and every follow-up. The system stays yours."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 03 / WHAT MAKES US DIFFERENT — Numbered manifesto ─── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="font-heading text-sm font-bold text-primary/60 tracking-widest">03</span>
              <span className="h-px w-12 bg-primary/30" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                The Manifesto
              </span>
              <span className="h-px w-12 bg-primary/30" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-[1.1]">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={isMobile ? false : { opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative card-glass p-6 md:p-8 transition-all duration-300 hover:border-primary/30 overflow-hidden"
              >

                <div className="relative flex items-start gap-5 md:gap-6">
                  {/* Icon column */}
                  <div className="shrink-0 flex flex-col items-center gap-3">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary/30">
                      <d.icon size={22} className="text-primary" />
                    </div>
                    <span className="font-heading text-xs font-bold text-primary/40 tracking-widest">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <h3 className="font-heading text-xl font-bold text-foreground md:text-2xl leading-tight">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl">
                      {d.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 04 / CARE ABOUT GROWTH — Pull quote ─── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-3xl text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="font-heading text-sm font-bold text-primary/60 tracking-widest">04</span>
              <span className="h-px w-12 bg-primary/30" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                The Promise
              </span>
              <span className="h-px w-12 bg-primary/30" />
            </div>

            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-[1.1] mb-10">
              We&apos;re in This{" "}
              <span className="text-gradient">For the Long Run.</span>
            </h2>

            <div className="relative px-4 md:px-12">
              <p className="relative text-lg md:text-xl leading-relaxed text-foreground/90 italic font-light">
                {"The goal isn't to be a vendor. It's to become someone you call before you make a big decision. That means we say no to clients who aren't a fit, we tell you what isn't working, and we stay close enough to actually know your business."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 05 / SELECTIVE ON PURPOSE — Two-col compare ─── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="font-heading text-sm font-bold text-primary/60 tracking-widest">05</span>
              <span className="h-px w-12 bg-primary/30" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Who We Work With
              </span>
              <span className="h-px w-12 bg-primary/30" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-[1.1]">
              {"We're Selective "}
              <span className="text-gradient">On Purpose</span>
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Right fit */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-px rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent"
            >
              <div className="rounded-[15px] bg-[hsl(230_12%_8%)] p-7 md:p-8 h-full">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 border border-primary/30">
                    <Check size={18} className="text-primary" />
                  </div>
                  <span className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
                    Right Fit
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/85 md:text-base">
                  {"Owners who are serious about growth, willing to actually use the system, and ready to invest in building something that lasts. If that's you, we want to work together."}
                </p>
              </div>
            </motion.div>

            {/* Not for you */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-glass p-7 md:p-8"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20">
                  <X size={18} className="text-red-400" />
                </div>
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Not For You If…
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {"You want a magic fix in 30 days. The system works, but it's a real build — not a switch you flip. We'd rather tell you that up front than waste your money."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <DualCTA />

      <Footer />
    </div>
  );
}
