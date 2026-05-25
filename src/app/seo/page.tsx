"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Check, TrendingUp, Globe, MapPin, Cpu, DollarSign, Search, MousePointerClick, Smartphone, Clock } from "lucide-react";
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

const seoStats = [
  {
    icon: Search,
    value: "46%",
    label: "of all Google searches have local intent",
    source: "GoogleAds, 2024",
  },
  {
    icon: Smartphone,
    value: "88%",
    label: "of mobile local searches result in a call or visit within 24 hours",
    source: "Nectafy local search study",
  },
  {
    icon: MousePointerClick,
    value: "92%",
    label: "of all Google clicks happen on page one of results",
    source: "Backlinko CTR study, 2023",
  },
  {
    icon: Clock,
    value: "28%",
    label: "of \"near me\" searches end in a same-day purchase",
    source: "Google Consumer Insights",
  },
];

// CTR by Google organic position (Backlinko, Sistrix avg)
const ctrByPosition = [
  { pos: "#1", ctr: 27.6 },
  { pos: "#2", ctr: 15.8 },
  { pos: "#3", ctr: 11.0 },
  { pos: "#4", ctr: 8.4 },
  { pos: "#5", ctr: 6.3 },
  { pos: "#6", ctr: 4.9 },
  { pos: "#7", ctr: 3.9 },
  { pos: "#8", ctr: 3.3 },
  { pos: "#9", ctr: 2.7 },
  { pos: "#10", ctr: 2.4 },
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
              Why Search Is the{" "}
              <span className="text-gradient">Goldmine.</span>
            </h2>
          </motion.div>

          {/* Stat cards */}
          <div className="mx-auto max-w-6xl grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10 md:mb-14">
            {seoStats.map((s, i) => (
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

          {/* CTR by Position Chart */}
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
                    Why Ranking Matters
                  </p>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                    Click-Through Rate by Google Position
                  </h3>
                </div>
                <span className="text-[11px] text-muted-foreground/70">
                  Source: Backlinko + Sistrix
                </span>
              </div>

              {/* Vertical bar chart */}
              <div className="relative">
                <div className="flex items-end justify-between gap-2 md:gap-3 h-48 md:h-64 border-b border-border/30 pb-2 mb-3">
                  {ctrByPosition.map((row, i) => {
                    const pct = (row.ctr / 28) * 100;
                    return (
                      <div
                        key={row.pos}
                        className="group relative flex-1 flex flex-col items-center justify-end h-full"
                      >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-[10px] font-semibold text-primary whitespace-nowrap">
                            {row.ctr}%
                          </span>
                        </div>
                        <motion.div
                          initial={isMobile ? { height: `${pct}%` } : { height: 0 }}
                          whileInView={{ height: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 + i * 0.06, ease: "easeOut" }}
                          className={`w-full rounded-t-md border-t border-l border-r ${
                            i === 0
                              ? "bg-gradient-to-t from-primary/30 to-primary border-primary/60 shadow-[0_0_24px_rgba(74,222,128,0.4)]"
                              : i < 3
                              ? "bg-gradient-to-t from-primary/15 to-primary/70 border-primary/30"
                              : "bg-gradient-to-t from-white/[0.02] to-white/[0.08] border-border/40"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-start justify-between gap-2 md:gap-3">
                  {ctrByPosition.map((row) => (
                    <div key={row.pos} className="flex-1 text-center">
                      <span className="text-[10px] md:text-xs font-mono text-muted-foreground">
                        {row.pos}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-7 text-xs leading-relaxed text-muted-foreground/80">
                The #1 organic result gets <span className="text-foreground font-medium">10× more clicks</span> than #10. By the time you&apos;re on page two, you&apos;re invisible. This is why ranking in the top three is the goal — anything below the fold is a rounding error.
              </p>
            </div>
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

          <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2">
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
              Built for Operators <span className="text-gradient">Thinking Long Term.</span>
            </h2>
            <div className="card-glass p-8 md:p-10">
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
