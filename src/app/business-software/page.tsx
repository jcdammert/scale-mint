"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  FileText,
  CalendarCheck,
  Zap,
  PenTool,
  Bot,
  PhoneOff,
  Mail,
  Star,
  MapPin,
  Share2,
  MessageSquarePlus,
} from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
import HomeStats from "@/components/HomeStats";
import ScaleMintDashboard from "@/components/ui/ScaleMintDashboard";

const features = [
  {
    icon: Users,
    title: "CRM & Pipeline Management",
    description:
      "See every lead, every job, every follow-up in one place. Nothing falls through the cracks.",
  },
  {
    icon: FileText,
    title: "Invoicing & Estimates",
    description:
      "Send professional invoices and estimates in seconds. Get paid faster.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Scheduling",
    description:
      "Customers book directly on your calendar. No back-and-forth texting.",
  },
  {
    icon: Zap,
    title: "Workflow Automations",
    description:
      "Follow-ups, reminders, review requests \u2014 all happen automatically without you lifting a finger.",
  },
  {
    icon: PenTool,
    title: "Contracts & E-Signatures",
    description:
      "Send contracts and get them signed digitally. No printing, no scanning.",
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    description:
      "A smart chatbot on your website that answers questions and captures leads 24/7.",
  },
  {
    icon: PhoneOff,
    title: "Missed Call Text-Back",
    description:
      "When you can\u2019t answer, an automatic text goes out so you never lose that lead.",
  },
  {
    icon: Mail,
    title: "SMS & Email Campaigns",
    description:
      "Send promotions, updates, and follow-ups to your entire customer list in one click.",
  },
  {
    icon: Star,
    title: "Review Management",
    description:
      "See all your Google reviews in one place. Respond easily. Build your reputation.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description:
      "We optimize your GBP so you rank higher on Google Maps.",
  },
  {
    icon: Share2,
    title: "Weekly Social Media Posting",
    description:
      "We post for you on Facebook, Instagram, and Google Business every week.",
  },
  {
    icon: MessageSquarePlus,
    title: "Review Request Automation",
    description:
      "After every job, an automatic review request goes out. Your reviews stack up without you asking.",
  },
];

const steps = [
  {
    num: "01",
    title: "We learn how your business runs",
    description:
      "Free strategy call to understand your workflow, services, and what you need.",
  },
  {
    num: "02",
    title: "We build your entire system",
    description:
      "CRM, automations, templates, everything \u2014 configured for your specific business. Live in 5\u201310 days.",
  },
  {
    num: "03",
    title: "We train you and hand it over",
    description:
      "Recorded walkthrough call so you know exactly how everything works. You\u2019re in control.",
  },
];

export default function BusinessSoftwarePage() {
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

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-8 pb-6 md:pb-10">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            Your All-in-One Business{" "}
            <span className="text-gradient">Operating System.</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Stop running your business out of your head. We build your entire
            business backend on one platform &mdash; CRM, invoicing, scheduling,
            automations, contracts, and more. All connected. All done for you.
          </motion.p>
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <a href="/book" className="block w-full sm:w-auto sm:inline-block">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base"
              >
                Book a Free Strategy Call
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── CLIENT RESULTS ─── */}
      <HomeStats />

      {/* ─── DASHBOARD PREVIEW ─── */}
      <section className="px-4 pt-6 md:pt-10 pb-12 md:pb-20">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-8 md:mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Your Business, Fully Systemized
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Here&apos;s What You&apos;re{" "}
              <span className="text-gradient">Getting Access To.</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              A live look at your future dashboard — every lead, every job,
              every dollar in one place.
            </p>
          </motion.div>
          <ScaleMintDashboard />
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Everything You Need to Run Your Business.{" "}
              <span className="text-gradient">One Platform.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every feature is set up for you and connected to everything else.
              No patchwork. No manual work.
            </p>
          </motion.div>

          <div className="mt-8 md:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-glass p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h4 className="mb-2 font-heading text-base font-semibold text-foreground">
                  {f.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE SET IT UP ─── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.h2
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
          >
            We Build It.{" "}
            <span className="text-gradient">You Use It.</span>
          </motion.h2>

          <div className="relative mt-14 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-10 left-[16.66%] right-[16.66%] hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 md:block" />

            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-card">
                  <span className="font-heading text-2xl font-bold text-primary">
                    {s.num}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 px-8 py-16 text-center md:px-16 md:py-24"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

            <h2 className="relative font-heading text-3xl font-bold text-foreground md:text-5xl">
              Ready to Stop Running Your Business
              <br />
              <span className="text-gradient">Out of Your Head?</span>
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-muted-foreground">
              Book a free strategy call &mdash; we&apos;ll map out your system
              and show you exactly how it works for your business.
            </p>
            <div className="relative mt-10">
              <a
                href="/book"
                className="block w-full sm:w-auto sm:inline-block"
              >
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full sm:w-auto px-6 py-5 text-sm sm:px-10 sm:py-7 sm:text-lg animate-glow-pulse"
                >
                  Book Your Free Strategy Call
                  <ArrowRight size={20} />
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
