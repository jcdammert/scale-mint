"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Check,
  ArrowLeft,
  ArrowRight,
  Globe,
  Megaphone,
  Settings,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

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
            What We <span className="text-gradient">Offer.</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Three core products. Pick what you need, or bundle them together for
            the best value. Every engagement starts with a free strategy call.
          </motion.p>
        </div>
      </section>

      {/* ─── PRODUCT 1: WEBSITE DESIGN & BUILD ─── */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass overflow-hidden p-8 md:p-10 transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Globe size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Website Design & Build
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Your digital storefront — built to convert
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Not a template. Not a DIY drag-and-drop site. We build custom,
              SEO-optimized websites on modern infrastructure designed to make
              your business look legit and turn visitors into leads. Fully
              responsive, lightning fast, and built to rank.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Custom SEO-optimized design — not a template",
                "Built on modern infrastructure (Next.js/Vercel)",
                "Fully responsive on every device",
                "Lead capture built in from day one",
                "Hosting included",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                  Investment
                </p>
                <p className="font-heading text-xl font-bold text-foreground">
                  Custom quote per project
                </p>
              </div>
              <a href="/book" className="block w-full sm:w-auto sm:ml-auto">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto px-6 py-5 text-sm sm:px-8 sm:py-6 sm:text-base"
                >
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PRODUCT 2: MARKETING ─── */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass overflow-hidden p-8 md:p-10 transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Megaphone size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Marketing
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Get found online and drive consistent inbound leads
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3 mb-8">
              {[
                {
                  name: "Meta Ads",
                  desc: "Facebook & Instagram ad campaigns built and managed to bring in leads every week.",
                },
                {
                  name: "Google Ads",
                  desc: "Show up at the top of Google when people search for your service in your area.",
                },
                {
                  name: "Google SEO & Citations",
                  desc: "Rank organically on Google Maps and search through profile optimization and citation building.",
                },
              ].map((s) => (
                <div key={s.name} className="rounded-lg bg-primary/5 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Check size={15} className="shrink-0 text-primary" />
                    <h3 className="font-heading font-semibold text-foreground text-sm">
                      {s.name}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <a href="/book" className="block w-full sm:w-auto">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto px-6 py-5 text-sm sm:px-8 sm:py-6 sm:text-base"
                >
                  Book a Free Consultation
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PRODUCT 3: BUSINESS SOFTWARE ─── */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass overflow-hidden p-8 md:p-10 transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Settings size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Business Software
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Your all-in-one business operating system
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Stop paying for 5–10 separate tools. We build your entire business
              backend on one platform — CRM, invoicing, scheduling, automations,
              contracts, e-signatures, chatbot, missed call text-back, and more.
              Training included so your team actually uses it.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 mb-8">
              {[
                "CRM & pipeline management",
                "Invoicing & estimates",
                "Appointment scheduling",
                "Workflow automations",
                "Contracts & e-signatures",
                "AI chatbot",
                "Missed call text-back",
                "SMS & email campaigns",
                "Review management",
                "Google Business Profile optimization",
                "Weekly social media posting (FB, IG, GMB)",
                "Review request automation",
                "LSA setup",
                "Training included",
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  {f}
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mb-6 italic">
              Replaces: Jobber, Housecall Pro, ServiceTitan, Calendly,
              DocuSign, Mailchimp, and more.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground">
                    Starting at
                  </span>
                  <span className="font-heading text-4xl font-bold text-foreground">
                    $350
                  </span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  + one-time setup fee
                </p>
              </div>
              <a href="/book" className="block w-full sm:w-auto sm:ml-auto">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto px-6 py-5 text-sm sm:px-8 sm:py-6 sm:text-base"
                >
                  Book a Free Consultation
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── BUNDLE & SAVE ─── */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass p-8 md:p-10 text-center border-primary/20"
          >
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Sparkles size={28} className="text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Bundle & <span className="text-gradient">Save</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Need a website, marketing, and business software? Clients who
              combine multiple services save on their setup investment. The more
              you bundle, the more you save.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Book a free call and we&apos;ll put together a custom package with
              bundled pricing for your business.
            </p>
            <div className="mt-6">
              <a href="/book" className="block w-full sm:w-auto sm:inline-block">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full sm:w-auto px-6 py-5 text-sm sm:px-8 sm:py-6 sm:text-base"
                >
                  Get a Custom Bundle Quote
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── BOTTOM NOTE + CTA ─── */}
      <section className="px-4 pb-10 md:pb-16">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.p
            initial={isMobile ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            All pricing is scoped to your business. Setup fees are quoted per
            project based on complexity. Book a free strategy call to get a
            custom quote — no pressure, no commitment.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
