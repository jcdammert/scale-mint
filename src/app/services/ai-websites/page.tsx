"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DualCTA from "@/components/DualCTA";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  ArrowLeft,
  Search,
  Smartphone,
  MessageSquare,
  ClipboardList,
  Gauge,
  Paintbrush,
  Zap,
  Eye,
  MousePointerClick,
  CalendarCheck,
  Briefcase,
  Camera,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Search,
    title: "Built to Rank",
    description:
      "On-page SEO, schema markup, and local keywords baked in from the start. Built so a homeowner searching your service in your city actually finds you.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description:
      "Over 60% of homeowners are searching from their phone. The site looks sharp and converts on a small screen — not just a designer's monitor.",
  },
  {
    icon: MessageSquare,
    title: "AI Chat Widget",
    description:
      "A chatbot on the site that answers basic questions, qualifies the lead, and books a call. Drops the lead straight into your CRM.",
  },
  {
    icon: ClipboardList,
    title: "Lead Capture Forms",
    description:
      "Forms that go where they get worked — your CRM. Every submission triggers your follow-up sequence so the lead doesn't sit in an inbox over the weekend.",
  },
  {
    icon: Gauge,
    title: "Sub-Second Load Times",
    description:
      "Built on Next.js so the site loads before a visitor decides to bounce. Faster sites rank higher and keep more leads on the page.",
  },
  {
    icon: Paintbrush,
    title: "Custom Design",
    description:
      "No templates, no cookie-cutter layouts. Designed for your brand and the homeowners you actually want to book.",
  },
];

const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn the business, the services you want to lead with, and what kind of homeowner you want walking in. We tell you the strategy before we touch design.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Custom layout, visual direction, page structure. You sign off before we build a thing.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Clean code on Next.js. SEO and conversion structure baked in. Forms wired into your CRM. Analytics set up.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Site goes live and we monitor it. You get support every month — content updates, page tweaks, new sections as the business changes.",
  },
];

const useCases = [
  {
    icon: Briefcase,
    title: "Service Business Sites",
    description:
      "Plumbers, electricians, roofers, pressure washing, HVAC — pages built around the services you want to push, ranked for the searches that book jobs.",
  },
  {
    icon: CalendarCheck,
    title: "Booking-Integrated Sites",
    description:
      "Sites with scheduling baked in. Homeowners pick a time off your live calendar. The job lands in your CRM with the booking already confirmed.",
  },
  {
    icon: Camera,
    title: "Portfolio + Lead Capture",
    description:
      "Showcase your past work — before/afters, photos, testimonials — and capture the lead in the same scroll. Built for trades where the work sells the work.",
  },
];

function BrowserMockup() {
  return (
    <div className="relative">
      {/* Glow behind mockup */}
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-primary/5 blur-[40px]" />

      <div className="card-glass relative rounded-2xl overflow-hidden border border-white/10">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 mx-3 bg-white/5 rounded-full px-4 py-1 text-[11px] text-muted-foreground/40 border border-white/5 text-center">
            johnsonsplumbing.com
          </div>
        </div>

        {/* Fake website content */}
        <div className="p-6 space-y-4">
          {/* Nav */}
          <div className="flex items-center justify-between mb-2">
            <div className="h-4 w-24 rounded bg-primary/20" />
            <div className="flex gap-3">
              <div className="h-3 w-12 rounded bg-white/10" />
              <div className="h-3 w-12 rounded bg-white/10" />
              <div className="h-6 w-16 rounded-full bg-primary/30" />
            </div>
          </div>

          {/* Hero area */}
          <div className="rounded-xl bg-white/[0.02] border border-white/5 p-5">
            <div className="h-3 w-28 rounded bg-primary/20 mb-3" />
            <div className="h-6 w-4/5 rounded bg-white/10 mb-2" />
            <div className="h-6 w-3/5 rounded bg-white/10 mb-4" />
            <div className="h-3 w-full rounded bg-white/5 mb-1.5" />
            <div className="h-3 w-5/6 rounded bg-white/5 mb-5" />
            <div className="flex gap-3">
              <div className="h-9 w-32 rounded-lg bg-primary/40 flex items-center justify-center">
                <span className="text-[10px] font-semibold text-primary">Book Now →</span>
              </div>
              <div className="h-9 w-28 rounded-lg border border-white/10 bg-white/[0.02]" />
            </div>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-2 pt-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-[11px] text-muted-foreground/50">4.9 · 127 Google reviews</span>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -bottom-4 -right-4 card-glass flex items-center gap-2 rounded-xl px-3 py-2 border border-primary/20 shadow-[0_0_20px_rgba(74,222,128,0.1)]"
      >
        <Zap size={12} className="text-primary" />
        <span className="text-xs font-medium text-primary">98 PageSpeed</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -top-4 -left-4 card-glass flex items-center gap-2 rounded-xl px-3 py-2 border border-primary/20 shadow-[0_0_20px_rgba(74,222,128,0.1)]"
      >
        <Search size={12} className="text-primary" />
        <span className="text-xs font-medium text-primary">#1 on Google</span>
      </motion.div>
    </div>
  );
}

export default function AIWebsitesPage() {
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

      {/* Hero — 2-col split with browser mockup */}
      <section className="relative overflow-hidden pt-8 pb-10 md:pb-20">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left: text */}
            <div>
              <motion.div
                initial={isMobile ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 backdrop-blur-md"
              >
                <Sparkles size={12} className="text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Custom Websites for Home Service
                </span>
              </motion.div>

              <motion.h1
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
              >
                A Website That Actually{" "}
                <span className="text-gradient">Books Jobs.</span>
              </motion.h1>

              <motion.p
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                Fast, built to rank, and wired into your CRM. Every form submission triggers your follow-up. Not a brochure — a piece of the system that actually closes leads.
              </motion.p>

              <motion.div
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a href="/book" className="block w-full sm:w-auto">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto px-8 py-6 text-base">
                    Book a Free Strategy Call
                  </Button>
                </a>
              </motion.div>

              {/* Trust pills */}
              <motion.div
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-8"
              >
                <div className="card-glass inline-flex flex-col items-start gap-3 px-5 py-4 sm:flex-row sm:items-center sm:gap-0 sm:px-2 sm:py-2">
                  {[
                    { icon: Zap, text: "Built in Days, Not Months" },
                    { icon: Eye, text: "Built to Rank & Convert" },
                    { icon: MousePointerClick, text: "Wired Into Your CRM" },
                  ].map(({ icon: Icon, text }, i, arr) => (
                    <div key={text} className="flex items-center gap-2 px-3 py-1 sm:px-5 sm:py-2 relative">
                      <Icon size={15} className="text-primary shrink-0" />
                      <span className="text-xs font-medium text-foreground/80 sm:text-sm whitespace-nowrap">
                        {text}
                      </span>
                      {i < arr.length - 1 && (
                        <span className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-4 w-px bg-border/60" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: browser mockup */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:pl-4"
            >
              <BrowserMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features — 3-col with left-border hover */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-8 md:mb-14"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Engineered for Speed,{" "}
              <span className="text-gradient">Rankings & Bookings.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every site is built around three jobs: load fast, rank in your city, and convert the visitor into a lead in your CRM.
            </p>
          </motion.div>

          <div className="mt-8 md:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass p-8 transition-all duration-300 border-l-2 border-l-transparent hover:border-l-primary/60 hover:border-primary/20 group"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/15">
                  <f.icon size={24} className="text-primary" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Horizontal stepper */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-10 md:mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              How We <span className="text-gradient">Build It.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From first call to launch — same playbook every time. You stay in the loop, not stuck doing the work.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={isMobile ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/5 font-heading text-sm font-bold text-primary">
                    {s.step}
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases — Gradient-border cards */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-10 md:mb-14"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Built For <span className="text-gradient">Your Trade.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We build sites for the trades that show up to homes — different services need different page structures, different keywords, different proof.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-px rounded-xl bg-gradient-to-br from-primary/25 via-primary/10 to-transparent"
              >
                <div className="h-full rounded-[11px] bg-[hsl(230_12%_8%)] p-8 transition-all duration-300 hover:bg-[hsl(230_12%_9%)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <uc.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {uc.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {uc.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DualCTA />

      <Footer />
    </div>
  );
}
