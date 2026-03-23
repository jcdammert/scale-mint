"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  Workflow,
  ArrowLeft,
  Calendar,
  Mail,
  Database,
  ArrowRight,
  Clock,
  Shield,
  TrendingUp,
  Users,
  MessageSquare,
  DollarSign,
  Target,
  Bell,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Users,
    title: "CRM & Pipeline Management",
    description:
      "Every lead from every source — website, ads, calls, referrals — automatically lands in your CRM, tagged, organized, and ready for follow-up.",
  },
  {
    icon: Calendar,
    title: "Job & Crew Scheduling",
    description:
      "Automatically schedule jobs, assign crews, send confirmations, and handle reschedules. Your calendar runs itself.",
  },
  {
    icon: Target,
    title: "Lead Tracking & Nurturing",
    description:
      "Know where every lead is in your pipeline. Automated follow-up sequences ensure no lead goes cold — ever.",
  },
  {
    icon: DollarSign,
    title: "Invoicing & Payment Automation",
    description:
      "Job complete? Invoice is generated, sent to the client, and logged in your books — automatically. Get paid faster with zero manual work.",
  },
  {
    icon: MessageSquare,
    title: "SMS/Text Blasts & Email Sequences",
    description:
      "Send appointment reminders, promotional blasts, review requests, and follow-up sequences on autopilot.",
  },
  {
    icon: Database,
    title: "Tool Sync & Integrations",
    description:
      "Connect your CRM, calendar, accounting, scheduling, and communication tools so everything stays perfectly in sync.",
  },
  {
    icon: Bell,
    title: "Automated Follow-Ups & Reminders",
    description:
      "Never forget a callback, a quote follow-up, or a review request. Automated reminders keep your pipeline moving.",
  },
  {
    icon: Mail,
    title: "Email & Communication Automation",
    description:
      "Welcome emails, onboarding sequences, project updates, and review requests — all automated and personalized.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Track conversion rates, revenue per lead source, response times, and team performance. Know exactly what's working.",
  },
];

const steps = [
  {
    step: "01",
    title: "Map Your Operations",
    description:
      "We audit every workflow, tool, and process in your business. We find the bottlenecks, the time-wasters, and the gaps where leads and revenue are leaking.",
  },
  {
    step: "02",
    title: "Design Your System",
    description:
      "We architect a custom automation and CRM system built around how your business actually works — your pipeline stages, your tools, your team.",
  },
  {
    step: "03",
    title: "Build & Connect Everything",
    description:
      "We build your automations, set up your CRM, connect all your lead sources, and wire everything together into one smooth-running machine.",
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description:
      "We test everything, train your team, and go live. Then we monitor, tweak, and optimize so it keeps getting better.",
  },
];

const benefits = [
  { icon: Clock, text: "Save 15–25+ hours per week" },
  { icon: Shield, text: "No leads fall through the cracks" },
  { icon: TrendingUp, text: "Scale without hiring office staff" },
];

export default function WorkflowAutomationPage() {
  const isMobile = useIsMobile();
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

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-10 md:pb-20">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={isMobile ? undefined : { opacity: 0, y: 20 }}
            animate={isMobile ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10"
          >
            <Workflow size={40} className="text-primary" />
          </motion.div>
          <motion.h1
            initial={isMobile ? undefined : { opacity: 0, y: 30 }}
            animate={isMobile ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            The Backend Brain of{" "}
            <span className="text-gradient">Your Business</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? undefined : { opacity: 0, y: 20 }}
            animate={isMobile ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            CRM, scheduling, invoicing, follow-ups, SMS blasts, pipeline management — we automate the entire operation so your business runs like a machine. You focus on the work. We handle the rest.
          </motion.p>
          <motion.div
            initial={isMobile ? undefined : { opacity: 0, y: 20 }}
            animate={isMobile ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a href="/book" className="block w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto px-8 py-6 text-base">
                Automate Your Operations
              </Button>
            </a>
          </motion.div>

          {/* Benefits Bar */}
          <motion.div
            initial={isMobile ? undefined : { opacity: 0, y: 20 }}
            animate={isMobile ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 md:mt-14 flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {benefits.map((b) => (
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

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? undefined : { opacity: 0, y: 20 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Everything We <span className="text-gradient">Automate</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From lead capture to invoicing, we wire together every piece of your operation into one smooth, automated system.
            </p>
          </motion.div>

          <div className="mt-8 md:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={isMobile ? undefined : { opacity: 0, y: 30 }}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
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
            initial={isMobile ? undefined : { opacity: 0, y: 20 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From discovery to deployment, we handle everything so you don&apos;t
              have to.
            </p>
          </motion.div>

          <div className="mt-8 md:mt-14 grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={isMobile ? undefined : { opacity: 0, y: 30 }}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? undefined : { opacity: 0, y: 30 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Ready to Run on <span className="text-gradient">Autopilot</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book a free strategy call and we&apos;ll map out exactly how to automate your operations — from lead capture to invoicing and everything in between.
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
