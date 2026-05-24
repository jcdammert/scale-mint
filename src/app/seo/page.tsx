"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Check, TrendingUp, Globe, MapPin, Cpu, DollarSign } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

const whatIsItems = [
  {
    icon: Globe,
    title: "Google Search + Maps",
    desc: "Rank at the top of search results and the map pack when homeowners search for your service in your area.",
  },
  {
    icon: Cpu,
    title: "AI Search Engines",
    desc: "ChatGPT, Perplexity, and Google AI now answer questions with real business recommendations. We make sure you're one of them.",
  },
  {
    icon: MapPin,
    title: "Every Local Directory",
    desc: "Yelp, Angi, BBB, HomeAdvisor, and 50+ more — consistent, optimized listings everywhere homeowners look.",
  },
  {
    icon: DollarSign,
    title: "Leads That Compound",
    desc: "Unlike paid ads, rankings don't stop when the budget does. Once you're there, every search is a free lead.",
  },
];

const included = [
  "Google Business Profile optimization and management",
  "Local citation building across 50+ directories",
  "Map pack ranking optimization",
  "Advanced on-page SEO and content optimization",
  "Schema markup and technical SEO",
  "Backlink and authority building",
  "AI search engine optimization (ChatGPT, Perplexity, Google AI)",
  "Review generation strategy",
  "Monthly ranking and traffic reporting",
];

export default function SeoPage() {
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
            <TrendingUp size={12} className="text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Omnipresence SEO
            </span>
          </motion.div>

          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            Become the Only Contractor Homeowners{" "}
            <span className="text-gradient">in Your Area See.</span>
          </motion.h1>

          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            We put you everywhere — Google, Maps, AI search engines, and every local directory — so you&apos;re the obvious choice before they even pick up the phone.
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

      {/* ─── WHAT IS OMNIPRESENCE SEO ─── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Not Just Google
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Is <span className="text-gradient">Omnipresence SEO?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Most SEO agencies focus on one thing — Google search rankings. We cover every surface where homeowners now look for contractors. Organic rankings compound over time. Unlike paid ads, once you&apos;re ranking, every search becomes a free lead.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
            {whatIsItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass flex gap-5 p-6"
              >
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
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
            className="mx-auto max-w-2xl card-glass p-8 md:p-10"
          >
            <ul className="space-y-4">
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
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Who It&apos;s For
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Built for Operators <span className="text-gradient">Thinking Long Term.</span>
            </h2>
            <div className="card-glass p-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                Scale plan clients thinking long term. SEO takes 3–6 months to show real results, but once it kicks in it&apos;s the most consistent and lowest cost lead source you&apos;ll ever have.
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
              Ready to Own <span className="text-gradient">Your Market?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              20-minute call. We look at your market, show you where the ranking opportunities are, and map out exactly what it would take.
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
