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
    title: "SEO-Optimized",
    description:
      "Built from the ground up with search engine optimization in mind. Rank higher on Google and get found by the customers who are actively looking for your services.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "Over 60% of web traffic is mobile. Your site will look stunning and function perfectly on every device, from phones to desktops.",
  },
  {
    icon: MessageSquare,
    title: "AI Chat Widget",
    description:
      "An intelligent chatbot embedded on your site that answers visitor questions, captures leads, and books appointments — even while you sleep.",
  },
  {
    icon: ClipboardList,
    title: "Lead Capture Forms",
    description:
      "Strategically placed forms that convert visitors into leads. Connected directly to your CRM or email so you never miss an opportunity.",
  },
  {
    icon: Gauge,
    title: "Lightning-Fast Load Times",
    description:
      "Built with modern frameworks for sub-second load times. Fast sites rank better on Google and keep visitors from bouncing.",
  },
  {
    icon: Paintbrush,
    title: "Custom Design",
    description:
      "No templates. No cookie-cutter layouts. Every site is designed from scratch to match your brand and stand out from competitors.",
  },
];

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We learn about your business, your customers, and your goals. Then we create a site strategy designed to convert.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "We design a custom layout and visual direction. You see it before we build it and provide feedback.",
  },
  {
    step: "03",
    title: "Build & Optimize",
    description:
      "We build your site with clean code, blazing speed, and SEO baked in. Every element is optimized for conversions.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We launch your site, set up analytics, and provide ongoing support to ensure everything runs smoothly.",
  },
];

const useCases = [
  {
    icon: Briefcase,
    title: "Service Business Landing Pages",
    description:
      "Plumbers, electricians, cleaners, consultants — a high-converting page that turns Google searches into booked jobs.",
  },
  {
    icon: CalendarCheck,
    title: "Booking-Integrated Sites",
    description:
      "Salons, clinics, coaches — sites with built-in scheduling so visitors can book an appointment in seconds.",
  },
  {
    icon: Camera,
    title: "Portfolio Sites with Smart CTAs",
    description:
      "Photographers, designers, agencies — showcase your work beautifully while AI-driven CTAs guide visitors to inquire.",
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
                  AI-Powered Websites
                </span>
              </motion.div>

              <motion.h1
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
              >
                Websites That Actually{" "}
                <span className="text-gradient">Convert</span>
              </motion.h1>

              <motion.p
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                Fast, mobile-first, AI-powered websites designed to turn visitors
                into paying customers. Not just a pretty site — a revenue-generating
                machine.
              </motion.p>

              <motion.div
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a href="/book" className="block w-full sm:w-auto">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto px-8 py-6 text-base">
                    Get Your AI-Powered Website
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
                    { icon: Eye, text: "Designed to Convert" },
                    { icon: MousePointerClick, text: "AI-Enhanced Engagement" },
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
              What Makes Our Sites{" "}
              <span className="text-gradient">Different</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every website we build is engineered for speed, search rankings,
              and conversions — not just aesthetics.
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
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From concept to launch, we handle everything so you can focus on
              running your business.
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
              Built For <span className="text-gradient">Your Industry</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;ve built high-converting websites for businesses across
              every industry.
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
