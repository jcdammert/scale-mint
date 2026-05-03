"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  MapPin,
  Search,
  BarChart3,
  Target,
  Users,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  Zap,
  Clock,
  Share2,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const whyChooseUs = [
  {
    icon: Target,
    title: "Data-Driven Strategy",
    description:
      "Every campaign we run is backed by data. We don't guess — we analyze, test, and optimize based on real performance metrics.",
  },
  {
    icon: DollarSign,
    title: "Transparent ROI Tracking",
    description:
      "Know exactly where every dollar goes and what it brings back. Full visibility into your marketing spend and returns.",
  },
  {
    icon: Zap,
    title: "AI-Enhanced Campaigns",
    description:
      "We leverage AI tools for audience targeting, ad optimization, and performance prediction — giving you an edge competitors don't have.",
  },
  {
    icon: Users,
    title: "Dedicated Account Management",
    description:
      "A real person who knows your business inside and out. Weekly reports, strategy calls, and proactive optimization.",
  },
  {
    icon: Clock,
    title: "Fast Results",
    description:
      "We don't believe in 6-month ramp-up periods. Our campaigns are structured to deliver leads from week one.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization",
    description:
      "We never set and forget. Every week we analyze performance and make adjustments to improve your results.",
  },
];

const lsaFeatures = [
  "Google Guaranteed badge for trust and credibility",
  "Pay-per-lead model — only pay for real leads",
  "Top of Google search results placement",
  "Account setup and verification management",
  "Ongoing bid and budget optimization",
  "Review management and generation strategy",
  "Dispute handling for unqualified leads",
  "Weekly performance reporting",
];

const lsaIdealFor = [
  "Plumbers",
  "Electricians",
  "HVAC Technicians",
  "Lawyers",
  "Locksmiths",
  "Roofers",
  "Cleaners",
  "Garage Door Repair",
];

const gmbFeatures = [
  "Complete profile optimization and setup",
  "Weekly post scheduling with engaging content",
  "Review response automation and management",
  "Photo optimization and regular uploads",
  "Q&A management and monitoring",
  "Google Insights tracking and reporting",
  "Local SEO boost through citation building",
  "Map pack ranking optimization",
];

const gmbIdealFor = [
  "Restaurants",
  "Retail Stores",
  "Medical Practices",
  "Auto Shops",
  "Salons & Spas",
  "Dental Offices",
  "Fitness Studios",
  "Any Local Business",
];

const metaFeatures = [
  "Targeted campaign setup with precise audience segmentation",
  "Retargeting campaigns to recapture warm leads",
  "Lookalike audience creation for new customer acquisition",
  "Professional ad creative design (images & video)",
  "A/B testing of ads, audiences, and placements",
  "Conversion tracking and pixel setup",
  "Lead generation forms within Facebook and Instagram",
  "Messenger campaigns and local awareness ads",
];

const metaIdealFor = [
  "E-commerce Stores",
  "Real Estate Agents",
  "Restaurants & Bars",
  "Fitness & Wellness",
  "Home Services",
  "Event Venues",
  "Beauty & Fashion",
  "Professional Services",
];

const googleAdsFeatures = [
  "In-depth keyword research and competitor analysis",
  "Search campaign creation and management",
  "Display campaign design and targeting",
  "Landing page optimization for conversions",
  "Conversion tracking and goal setup",
  "Remarketing campaigns to recapture visitors",
  "Budget optimization and bid management",
  "Quality Score improvement and ad rank optimization",
];

const googleAdsIdealFor = [
  "B2B Service Companies",
  "SaaS Companies",
  "Law Firms",
  "Medical Practices",
  "Home Improvement",
  "Financial Services",
  "Education & Training",
  "E-commerce",
];

const services = [
  {
    label: "LSA",
    fullLabel: "Local Service Ads",
    icon: BadgeCheck,
    title: "Google Local Service Ads",
    titleGradient: "(LSA)",
    description: [
      "Get the coveted Google Guaranteed badge and appear at the very top of Google search results — above traditional ads and organic listings. With LSA, you only pay when a real customer contacts you. It's the most cost-effective way for local service businesses to get high-quality leads from people who are actively searching for their services right now.",
      "We handle the entire setup process including background checks, license verification, and insurance documentation. Once live, we continuously optimize your bids, manage your reviews, and dispute any unqualified leads to maximize your return.",
    ],
    features: lsaFeatures,
    idealFor: lsaIdealFor,
  },
  {
    label: "GMB",
    fullLabel: "Google My Business",
    icon: MapPin,
    title: "Google My Business",
    titleGradient: "(GMB)",
    description: [
      "Your Google Business Profile is often the first thing potential customers see. A fully optimized GMB listing dramatically increases your chances of appearing in the local map pack — the 3 businesses Google shows at the top of local searches.",
      "We don't just set it up and forget it. We actively manage your profile with regular posts, photo uploads, review responses, and Q&A monitoring. Combined with local citation building and SEO optimization, your business becomes the top choice in your area.",
    ],
    features: gmbFeatures,
    idealFor: gmbIdealFor,
  },
  {
    label: "Meta",
    fullLabel: "Meta Ads",
    icon: Share2,
    title: "Meta Ads",
    titleGradient: "(Facebook & Instagram)",
    description: [
      "Facebook and Instagram are where your customers spend hours every day. Meta Ads let you put your business in front of exactly the right people — based on demographics, interests, behaviors, and even past interactions with your business.",
      "We create scroll-stopping ad creatives, build precise audience segments, and set up retargeting campaigns that bring back visitors who didn't convert the first time. From lead generation forms to messenger campaigns, we use every tool in Meta's arsenal to drive results.",
    ],
    features: metaFeatures,
    idealFor: metaIdealFor,
  },
  {
    label: "Google Ads",
    fullLabel: "Google Ads",
    icon: Search,
    title: "Google Ads",
    titleGradient: "(Search & Display)",
    description: [
      "Google Ads puts your business in front of people who are actively searching for what you offer. Unlike social media ads where you interrupt people, Google Ads captures high-intent traffic — people who already want what you sell.",
      "We go beyond basic campaign setup. Our team conducts thorough keyword research, analyzes your competitors, builds optimized landing pages, and implements advanced bidding strategies. We also set up remarketing campaigns to re-engage visitors who didn't convert, turning window shoppers into paying customers.",
      "Display campaigns expand your reach across millions of websites, keeping your brand top-of-mind with visually engaging banner ads targeted to your ideal audience.",
    ],
    features: googleAdsFeatures,
    idealFor: googleAdsIdealFor,
  },
];

export default function MarketingPage() {
  const isMobile = useIsMobile();
  const [activeService, setActiveService] = useState(0);
  const active = services[activeService];

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
      <section className="relative overflow-hidden pt-8 pb-10 md:pb-20">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">

          {/* Eyebrow pill */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 backdrop-blur-md"
          >
            <Sparkles size={12} className="text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Full-Service Digital Marketing
            </span>
          </motion.div>

          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl"
          >
            Marketing That Drives{" "}
            <span className="text-gradient">Real Revenue</span>
          </motion.h1>

          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Full-service digital marketing powered by data, AI, and relentless
            optimization. We don&apos;t just run ads — we build lead generation
            machines that grow your revenue month over month.
          </motion.p>

          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
          >
            <a href="/book" className="block w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto px-8 py-6 text-base">
                Start Getting More Leads
              </Button>
            </a>
            <a href="#services" className="block w-full sm:w-auto">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-base">
                Explore Our Services
              </Button>
            </a>
          </motion.div>

          {/* Glass trust strip */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 md:mt-16"
          >
            <div className="card-glass mx-auto inline-flex max-w-full flex-col items-center justify-center gap-3 px-5 py-4 sm:flex-row sm:gap-0 sm:px-2 sm:py-2">
              {[
                { icon: DollarSign, text: "Transparent Pricing" },
                { icon: TrendingUp, text: "Proven ROI" },
                { icon: Shield, text: "No Long-Term Contracts" },
                { icon: BarChart3, text: "Weekly Reporting" },
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
      </section>

      {/* Why Choose Us — Bento Grid */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-8 md:mb-14"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Why Choose Us for{" "}
              <span className="text-gradient">Marketing</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;re not a generic agency. We combine AI technology with
              hands-on expertise to deliver results that actually move the needle.
            </p>
          </motion.div>

          {/* Bento: first 2 items span 2 cols on lg (4-col grid) */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={cn(
                  "card-glass p-8 transition-all duration-300 hover:border-primary/30",
                  (i === 0 || i === 1) && "lg:col-span-2"
                )}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tab Switcher */}
      <section id="services" className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-10"
          >
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Our Services
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Four Channels.{" "}
              <span className="text-gradient">One Strategy.</span>
            </h2>
          </motion.div>

          {/* Tab bar */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex gap-1.5 overflow-x-auto rounded-2xl bg-white/[0.02] p-1.5 border border-white/5"
            style={{ scrollbarWidth: "none" }}
          >
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={cn(
                  "flex flex-1 min-w-max items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all whitespace-nowrap",
                  activeService === i
                    ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_16px_rgba(74,222,128,0.08)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
                )}
              >
                <s.icon size={15} />
                <span className="hidden sm:inline">{s.fullLabel}</span>
                <span className="sm:hidden">{s.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="grid gap-10 lg:grid-cols-2 lg:items-start"
            >
              {/* Left: description */}
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <active.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  {active.title}{" "}
                  <span className="text-gradient">{active.titleGradient}</span>
                </h3>
                {active.description.map((para, idx) => (
                  <p key={idx} className="mt-4 text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Right: features card */}
              <div className="card-glass p-8">
                <h4 className="mb-6 font-heading text-lg font-semibold text-foreground">
                  What&apos;s Included
                </h4>
                <ul className="space-y-3">
                  {active.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-primary/10 pt-6">
                  <h4 className="mb-3 text-sm font-semibold text-foreground">
                    Ideal For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {active.idealFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* How It All Works Together — Timeline */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-10 md:mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              How It All{" "}
              <span className="text-gradient">Works Together</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each marketing channel amplifies the others. Here&apos;s how we
              build your complete lead generation machine.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Strategy & Audit",
                  description:
                    "We analyze your market, competitors, and current marketing to build a custom strategy that maximizes your budget.",
                },
                {
                  step: "02",
                  title: "Launch Campaigns",
                  description:
                    "We set up and launch campaigns across the channels that make sense for your business — Google, Meta, or both.",
                },
                {
                  step: "03",
                  title: "Optimize & Scale",
                  description:
                    "We analyze performance weekly, kill what doesn't work, double down on what does, and continuously improve results.",
                },
                {
                  step: "04",
                  title: "Report & Grow",
                  description:
                    "Transparent weekly reports show exactly what's working. As results compound, we scale your winning campaigns.",
                },
              ].map((s, i) => (
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

      {/* Results Stat Cards */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-10 md:mb-14"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Results That{" "}
              <span className="text-gradient">Speak for Themselves</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "3-5x", label: "Average Return on Ad Spend" },
              { value: "60%", label: "Reduction in Cost Per Lead" },
              { value: "2x", label: "Increase in Qualified Leads" },
              { value: "< 7", label: "Days to First Leads" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-8 text-center"
              >
                <div className="font-heading text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden card-glass mx-auto max-w-4xl p-10 md:p-16 text-center"
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-primary/5 blur-[80px]" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Ready to <span className="text-gradient">Grow</span>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Stop wasting money on marketing that doesn&apos;t work. Let us
                build you a lead generation machine that delivers real customers,
                real revenue, and real growth. Book a free strategy call — we&apos;ll
                audit your current marketing and show you exactly where the
                opportunities are.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
              <p className="mt-6 text-xs text-muted-foreground">
                No long-term contracts. No hidden fees. Just results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
