"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Megaphone,
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
} from "lucide-react";
import Link from "next/link";

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

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-background">
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
      <section className="relative overflow-hidden pt-8 pb-10 md:pb-32">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10"
          >
            <Megaphone size={40} className="text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            Marketing That Drives{" "}
            <span className="text-gradient">Real Revenue</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Full-service digital marketing powered by data, AI, and relentless
            optimization. We don&apos;t just run ads — we build lead generation
            machines that grow your revenue month over month.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a href="/book">
              <Button variant="hero" size="lg" className="px-8 py-6 text-base">
                Start Getting More Leads
              </Button>
            </a>
            <a href="#lsa-section">
              <Button
                variant="hero-outline"
                size="lg"
                className="px-8 py-6 text-base"
              >
                Explore Our Services
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 md:mt-14 flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {[
              { icon: DollarSign, text: "Transparent Pricing" },
              { icon: TrendingUp, text: "Proven ROI" },
              { icon: Shield, text: "No Long-Term Contracts" },
              { icon: BarChart3, text: "Weekly Reporting" },
            ].map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <b.icon size={18} className="text-primary" />
                <span>{b.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Why Choose Us for{" "}
              <span className="text-gradient">Marketing</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;re not a generic agency. We combine AI technology with
              hands-on expertise to deliver results that actually move the
              needle.
            </p>
          </motion.div>

          <div className="mt-8 md:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass p-8 transition-all duration-300 hover:border-primary/30"
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

      {/* ===== GOOGLE LOCAL SERVICE ADS ===== */}
      <section id="lsa-section" className="section-padding bg-primary/[0.02]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            {/* Left Content */}
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <BadgeCheck size={28} className="text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Google Local Service Ads{" "}
                <span className="text-gradient">(LSA)</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Get the coveted Google Guaranteed badge and appear at the very
                top of Google search results — above traditional ads and organic
                listings. With LSA, you only pay when a real customer contacts
                you. It&apos;s the most cost-effective way for local service
                businesses to get high-quality leads from people who are
                actively searching for their services right now.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We handle the entire setup process including background checks,
                license verification, and insurance documentation. Once live, we
                continuously optimize your bids, manage your reviews, and
                dispute any unqualified leads to maximize your return.
              </p>
            </div>

            {/* Right Features */}
            <div>
              <div className="card-glass p-8">
                <h3 className="mb-6 font-heading text-lg font-semibold text-foreground">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {lsaFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-primary/10 pt-6">
                  <h4 className="mb-3 text-sm font-semibold text-foreground">
                    Ideal For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {lsaIdealFor.map((item) => (
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== GOOGLE MY BUSINESS ===== */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            {/* Left Features (reversed layout for visual variety) */}
            <div className="order-2 lg:order-1">
              <div className="card-glass p-8">
                <h3 className="mb-6 font-heading text-lg font-semibold text-foreground">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {gmbFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-primary/10 pt-6">
                  <h4 className="mb-3 text-sm font-semibold text-foreground">
                    Ideal For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {gmbIdealFor.map((item) => (
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
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <MapPin size={28} className="text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Google My Business{" "}
                <span className="text-gradient">(GMB)</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Your Google Business Profile is often the first thing potential
                customers see. A fully optimized GMB listing dramatically
                increases your chances of appearing in the local map pack —
                the 3 businesses Google shows at the top of local searches.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We don&apos;t just set it up and forget it. We actively manage
                your profile with regular posts, photo uploads, review responses,
                and Q&A monitoring. Combined with local citation building and
                SEO optimization, your business becomes the top choice in your
                area.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== META ADS ===== */}
      <section className="section-padding bg-primary/[0.02]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            {/* Left Content */}
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Share2 size={28} className="text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Meta Ads{" "}
                <span className="text-gradient">
                  (Facebook & Instagram)
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Facebook and Instagram are where your customers spend hours every
                day. Meta Ads let you put your business in front of exactly the
                right people — based on demographics, interests, behaviors, and
                even past interactions with your business.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We create scroll-stopping ad creatives, build precise audience
                segments, and set up retargeting campaigns that bring back
                visitors who didn&apos;t convert the first time. From lead
                generation forms to messenger campaigns, we use every tool in
                Meta&apos;s arsenal to drive results.
              </p>
            </div>

            {/* Right Features */}
            <div>
              <div className="card-glass p-8">
                <h3 className="mb-6 font-heading text-lg font-semibold text-foreground">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {metaFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-primary/10 pt-6">
                  <h4 className="mb-3 text-sm font-semibold text-foreground">
                    Ideal For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {metaIdealFor.map((item) => (
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== GOOGLE ADS ===== */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            {/* Left Features */}
            <div className="order-2 lg:order-1">
              <div className="card-glass p-8">
                <h3 className="mb-6 font-heading text-lg font-semibold text-foreground">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {googleAdsFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-primary/10 pt-6">
                  <h4 className="mb-3 text-sm font-semibold text-foreground">
                    Ideal For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {googleAdsIdealFor.map((item) => (
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
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Search size={28} className="text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Google Ads{" "}
                <span className="text-gradient">(Search & Display)</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Google Ads puts your business in front of people who are
                actively searching for what you offer. Unlike social media ads
                where you interrupt people, Google Ads captures high-intent
                traffic — people who already want what you sell.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We go beyond basic campaign setup. Our team conducts thorough
                keyword research, analyzes your competitors, builds optimized
                landing pages, and implements advanced bidding strategies. We
                also set up remarketing campaigns to re-engage visitors who
                didn&apos;t convert, turning window shoppers into paying
                customers.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Display campaigns expand your reach across millions of websites,
                keeping your brand top-of-mind with visually engaging banner
                ads targeted to your ideal audience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It All Works Together */}
      <section className="section-padding bg-primary/[0.02]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
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

          <div className="mt-8 md:mt-14 grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl font-bold text-primary/10 font-heading">
                  {s.step}
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Social Proof Numbers */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Results That{" "}
              <span className="text-gradient">Speak for Themselves</span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "3-5x", label: "Average Return on Ad Spend" },
              { value: "60%", label: "Reduction in Cost Per Lead" },
              { value: "2x", label: "Increase in Qualified Leads" },
              { value: "< 7", label: "Days to First Leads" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-8 text-center"
              >
                <div className="font-heading text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Ready to <span className="text-gradient">Grow</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stop wasting money on marketing that doesn&apos;t work. Let us
              build you a lead generation machine that delivers real customers,
              real revenue, and real growth. Book a free strategy call — we&apos;ll
              audit your current marketing and show you exactly where the
              opportunities are.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="/book">
                <Button
                  variant="cta"
                  size="lg"
                  className="px-8 py-6 text-base"
                >
                  Book a Free Strategy Call
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              No long-term contracts. No hidden fees. Just results.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
