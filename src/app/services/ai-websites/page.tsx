"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  Globe,
  ArrowLeft,
  Search,
  Smartphone,
  MessageSquare,
  ClipboardList,
  Gauge,
  BarChart3,
  Paintbrush,
  ArrowRight,
  Zap,
  Eye,
  MousePointerClick,
  CalendarCheck,
  Briefcase,
  Camera,
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
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Know exactly where your visitors come from, what they do on your site, and which pages convert best. Data-driven decisions made easy.",
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

      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-10 md:pb-20">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10"
          >
            <Globe size={40} className="text-primary" />
          </motion.div>
          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            Websites That Actually{" "}
            <span className="text-gradient">Convert</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Fast, mobile-first, AI-powered websites designed to turn visitors
            into paying customers. Not just a pretty site — a revenue-generating
            machine.
          </motion.p>
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <a href="/book" className="block w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto px-8 py-6 text-base">
                Get Your AI-Powered Website
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 md:mt-14 flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {[
              { icon: Zap, text: "Built in Days, Not Months" },
              { icon: Eye, text: "Designed to Convert" },
              { icon: MousePointerClick, text: "AI-Enhanced Engagement" },
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

      {/* Features */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
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

          <div className="mt-8 md:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass p-8 transition-all duration-300 hover:border-primary/30"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
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

      {/* How It Works */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From concept to launch, we handle everything so you can focus on
              running your business.
            </p>
          </motion.div>

          <div className="mt-8 md:mt-14 grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl font-bold text-primary/40 font-heading">
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

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Built For <span className="text-gradient">Your Industry</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;ve built high-converting websites for businesses across
              every industry.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-8 transition-all duration-300 hover:border-primary/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <uc.icon size={20} className="text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {uc.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {uc.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Ready for a Website That{" "}
              <span className="text-gradient">Works</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Let&apos;s build you a site that doesn&apos;t just look good — it
              brings in customers. Book a free strategy call today.
            </p>
            <div className="mt-8">
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
