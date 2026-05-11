"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DualCTA from "@/components/DualCTA";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Check,
  ArrowLeft,
  Megaphone,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

const starterFeatures = [
  "Custom website (5–7 pages)",
  "CRM & sales pipeline",
  "2-way text & email",
  "Missed call text-back",
  "Review request automation",
  "Appointment scheduling",
  "Invoicing & estimates",
  "Contracts & e-signatures",
  "Training & onboarding call",
];

const growthFeatures = [
  "Everything in Starter",
  "Full website (10–20 pages)",
  "Custom sales & follow-up automations",
  "Lead nurturing sequences",
  "Speed-to-lead workflows",
  "Advanced pipeline automations",
  "AI conversation bot (text + web chat)",
  "Monthly content updates",
  "Priority support",
];

const dominateFeatures = [
  "Everything in Growth",
  "Advanced on-site SEO (full keyword strategy, monthly optimization)",
  "Google Business Profile full management + posting",
  "Local citation building (Yelp, Angi, BBB, etc.)",
  "Backlink campaign",
  "Quarterly SEO performance reports",
  "Dedicated account manager",
];

const addOns = [
  {
    icon: Megaphone,
    title: "Meta Ads Management",
    desc: "We build, manage, and optimize your Facebook and Instagram ad campaigns. Before/after creative, lead forms, retargeting — all done for you.",
  },
  {
    icon: Search,
    title: "Google Ads Management",
    desc: "We run your Google search and Local Services Ads so you show up when homeowners are actively searching for your service.",
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
            Three plans depending on where the business is right now. We set everything up, train you, and keep it running every month.
          </motion.p>
        </div>
      </section>

      {/* ─── PRICING CARDS ─── */}
      <section className="px-4 pt-6 md:pt-10 pb-6 md:pb-10">
        <div className="container mx-auto max-w-6xl">
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

          <div className="grid gap-6 md:grid-cols-3 items-stretch">
            {/* ─── STARTER ─── */}
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
                Your system, your hands.
              </p>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-bold text-foreground">
                  $97
                </span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                + one-time setup fee
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We build it out completely — you run it yourself. Same powerful platform, no management fees. Perfect if you want full control without the agency price tag.
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {starterFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
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
                Best for solo operators who want a professional system built for them and are comfortable running it themselves.
              </p>
            </motion.div>

            {/* ─── GROWTH (Recommended) ─── */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-glass card-glow-green relative flex flex-col p-8 transition-all duration-300 border-primary/40 md:scale-[1.02]"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground whitespace-nowrap">
                Recommended
              </span>

              <h3 className="font-heading text-xl font-semibold text-foreground">
                Growth
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Your system, our hands.
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
                Everything in Starter, plus we manage it for you. We handle the automations, follow-ups, and optimizations so you can stay on the truck.
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {growthFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
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
                Best for established operators getting leads but losing them to slow follow-up. We run the system so nothing falls through the cracks.
              </p>
            </motion.div>

            {/* ─── DOMINATE ─── */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-glass relative flex flex-col p-8 transition-all duration-300 hover:border-primary/20"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Dominate
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Your system, our hands, plus you own your market.
              </p>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-bold text-foreground">
                  $597
                </span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                + one-time setup fee
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Everything in Growth, plus we make you the #1 contractor in your area through SEO, Google Business Profile management, and local authority building.
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {dominateFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
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
                Best for serious operators who want to dominate local search and become the go-to contractor in their market long term.
              </p>
            </motion.div>
          </div>
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
              Supercharge{" "}
              <span className="text-gradient">Your Plan.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Stack paid traffic on top of your system for maximum lead flow.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {addOns.map((a, i) => (
              <motion.div
                key={a.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass flex flex-col p-7 transition-all duration-300 hover:border-primary/30 group"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <a.icon size={20} className="text-primary" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    {a.title}
                  </h4>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={isMobile ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground"
          >
            Add-ons work with any plan but are recommended on Growth and Dominate for maximum results — those plans have the full automation system to capture and convert every lead.
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
            "Free 20-minute call. We look at your business, recommend the right plan, and answer every question. No pressure, no pitch.",
        }}
      />

      <Footer />
    </div>
  );
}
