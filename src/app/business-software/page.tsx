"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
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
import DualCTA from "@/components/DualCTA";

const features = [
  {
    icon: Users,
    title: "CRM & Pipeline",
    description:
      "Every lead, every job, every follow-up in one view. You see exactly where each customer is in your sales process.",
  },
  {
    icon: FileText,
    title: "Invoicing & Estimates",
    description:
      "Send estimates and invoices straight from the customer record. Track what's paid, what's pending, what's overdue.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Scheduling",
    description:
      "Customers book on your calendar by themselves. No phone tag, no double-bookings.",
  },
  {
    icon: Zap,
    title: "Workflow Automations",
    description:
      "Follow-ups, reminders, review requests, status updates \u2014 fire automatically based on what happens with the lead or job.",
  },
  {
    icon: PenTool,
    title: "Contracts & E-Signatures",
    description:
      "Send contracts and get them signed from a phone. No printing, no scanning, no chasing paper.",
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    description:
      "Sits on your website and qualifies leads 24/7 \u2014 answers basic questions, books calls, and drops the lead into your CRM.",
  },
  {
    icon: PhoneOff,
    title: "Missed Call Text-Back",
    description:
      "When you can't pick up, an instant text goes out. The lead replies and lands in your inbox before they call the next guy.",
  },
  {
    icon: Mail,
    title: "SMS & Email Campaigns",
    description:
      "Send promos, seasonal blasts, or follow-up sequences to your customer list. Track opens and replies.",
  },
  {
    icon: Star,
    title: "Review Management",
    description:
      "All your Google reviews in one place. Respond from the platform. See what's coming in week to week.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description:
      "We build out your GBP so you rank in the local map pack \u2014 photos, services, posts, and citations included.",
  },
  {
    icon: Share2,
    title: "Weekly Social Posting",
    description:
      "A full posting schedule built out for Facebook, Instagram, and your Google Business Profile. Content planned, written, and ready to go — you just hit publish.",
  },
  {
    icon: MessageSquarePlus,
    title: "Review Request Automation",
    description:
      "When a job is marked complete, a review request goes out by text. Reviews stack up without you asking.",
  },
];

const steps = [
  {
    num: "01",
    title: "We learn how your business runs",
    description:
      "20-minute call. Your services, your workflow, where leads come in, where they fall through.",
  },
  {
    num: "02",
    title: "We build the system",
    description:
      "Pipeline, automations, templates, GBP \u2014 all configured around your business. Live in 5\u201310 business days.",
  },
  {
    num: "03",
    title: "We train you and hand it over",
    description:
      "Recorded walkthrough so you know how every piece works. The account is yours from day one.",
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
            Run Your Business{" "}
            <span className="text-gradient">Off One Account.</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Stop running the business off your phone and a stack of texts. CRM, invoicing, scheduling, automations, contracts — built on one platform, configured for your crew, and managed for you.
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
                Request My Demo
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
              Your Sales Pipeline
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Every Customer, Every Stage,{" "}
              <span className="text-gradient">In One View.</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Drag leads through stages. See exactly who needs a follow-up today and who&apos;s about to book. Nothing lives in your head.
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
              Every Tool You Need.{" "}
              <span className="text-gradient">Wired Together.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Set up by us, connected to every other piece. No patchwork of apps that don&apos;t talk to each other.
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

      <DualCTA />

      <Footer />
    </div>
  );
}
