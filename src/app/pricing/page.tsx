"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    desc: "Meta Ads · Google PPC · SEO",
    note: "Custom quoted",
  },
  {
    icon: Globe,
    title: "Custom Website",
    desc: "SEO-optimized, built to convert",
    note: "Custom quoted",
  },
  {
    icon: Sparkles,
    title: "AI Employee",
    desc: "AI voice receptionist, chatbot, 24/7 lead qualification",
    note: "Growth plan required. Custom quoted.",
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
            Two Plans. One Platform.{" "}
            <span className="text-gradient">Built For You.</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Pick where you are right now. Whether you just need to get organized
            or you&apos;re ready to build a full growth engine — we set everything
            up, train you, and stay in your corner.
          </motion.p>
        </div>
      </section>

      {/* ─── PRICING CARDS ─── */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto max-w-5xl">
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
                Get organized. Stop losing leads.
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
                Everything you need to run your day-to-day and stop letting
                opportunities slip through the cracks. We build it, you use it.
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
                Best for businesses doing under $7K/month or just getting their
                systems in place.
              </p>
            </motion.div>

            {/* Growth */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-glass relative flex flex-col p-8 transition-all duration-300 border-primary/40 shadow-lg shadow-primary/10"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                Recommended
              </span>

              <h3 className="font-heading text-xl font-semibold text-foreground">
                Growth
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Build the full engine. Close more. Scale faster.
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
                Everything in Starter, plus we dial in your entire sales process
                with custom automations, lead nurturing, and a system built to
                handle volume. This is the plan for business owners ready to grow
                aggressively.
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
                Best for businesses ready to scale and want a system that closes
                for them.
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
            Setup fees are quoted on your strategy call based on what your
            business needs. Starter builds take 5–7 days. Growth builds take
            7–10 days. No surprises — you&apos;ll know exactly what it costs
            before you commit.
          </motion.p>
        </div>
      </section>

      {/* ─── ADD-ONS ─── */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Plug In More{" "}
              <span className="text-gradient">When You&apos;re Ready.</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Already on the platform? These connect directly to the system we
              built.
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
                className="card-glass p-6 text-center transition-all duration-300 hover:border-primary/20"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <a.icon size={20} className="text-primary" />
                </div>
                <h4 className="font-heading text-base font-semibold text-foreground mb-1">
                  {a.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-3">{a.desc}</p>
                <p className="text-xs font-medium text-primary mb-4">
                  {a.note}
                </p>
                <a href="/book">
                  <Button variant="hero-outline" size="sm" className="w-full">
                    Book a Call
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REPLACES NOTE ─── */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto max-w-3xl">
          <motion.p
            initial={isMobile ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center italic"
          >
            Scale Mint replaces: Jobber, Housecall Pro, ServiceTitan, Calendly,
            DocuSign, Mailchimp, Podium, Broadly, and more — all in one
            platform, all set up for you.
          </motion.p>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="px-4 pb-10 md:pb-16">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-8 md:p-12 text-center"
          >
            <p className="text-muted-foreground">
              Not sure which plan fits? Book a free call — we&apos;ll walk you
              through it. No pressure.
            </p>
            <div className="mt-6">
              <a href="/book" className="block w-full sm:w-auto sm:inline-block">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full sm:w-auto px-6 py-5 text-sm sm:px-8 sm:py-6 sm:text-base"
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
