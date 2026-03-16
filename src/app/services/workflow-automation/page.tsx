"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Workflow,
  ArrowLeft,
  Zap,
  RefreshCw,
  Calendar,
  FileText,
  Mail,
  Database,
  ArrowRight,
  Clock,
  Shield,
  TrendingUp,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Zap,
    title: "Task Automation",
    description:
      "Identify and eliminate repetitive manual tasks that eat up hours of your day. From data entry to file management, we automate it all.",
  },
  {
    icon: RefreshCw,
    title: "App Integrations",
    description:
      "Connect your favorite tools — Zapier, Make, or fully custom integrations. Your apps finally talk to each other seamlessly.",
  },
  {
    icon: Calendar,
    title: "Scheduling Automation",
    description:
      "Automatically schedule appointments, send reminders, and manage your calendar without lifting a finger.",
  },
  {
    icon: FileText,
    title: "Document Generation",
    description:
      "Auto-generate invoices, proposals, contracts, and reports from templates. Personalized and ready to send in seconds.",
  },
  {
    icon: Mail,
    title: "Email Sequences",
    description:
      "Set up automated email workflows that nurture leads, onboard customers, and follow up — on autopilot.",
  },
  {
    icon: Database,
    title: "Data Sync Between Platforms",
    description:
      "Keep your CRM, spreadsheets, accounting software, and other tools perfectly in sync. No more copy-pasting between apps.",
  },
];

const steps = [
  {
    step: "01",
    title: "Audit Your Workflows",
    description:
      "We map out every repetitive task and manual process in your business to find the biggest time-wasters.",
  },
  {
    step: "02",
    title: "Design the Automation",
    description:
      "We architect a custom automation system tailored to your exact tools, processes, and goals.",
  },
  {
    step: "03",
    title: "Build & Integrate",
    description:
      "We build and connect everything — from simple Zapier flows to complex multi-step workflows with error handling.",
  },
  {
    step: "04",
    title: "Test & Launch",
    description:
      "Rigorous testing ensures everything works flawlessly before going live. Then we hand you the keys.",
  },
];

const useCases = [
  {
    icon: FileText,
    title: "Auto-Sending Invoices",
    description:
      "When a job is marked complete, the invoice is generated, sent to the client, and logged in your accounting software — automatically.",
  },
  {
    icon: RefreshCw,
    title: "CRM + Calendar Sync",
    description:
      "New leads from your website automatically appear in your CRM, get assigned to a rep, and a follow-up call is scheduled on their calendar.",
  },
  {
    icon: Users,
    title: "Automated Onboarding",
    description:
      "New client signs up? Welcome email, intake form, account setup, and team notification all fire instantly.",
  },
  {
    icon: ShoppingCart,
    title: "Inventory Alerts",
    description:
      "When stock drops below threshold, get notified, auto-reorder from suppliers, and update your storefront — zero manual checks.",
  },
];

const benefits = [
  { icon: Clock, text: "Save 10–20+ hours per week" },
  { icon: Shield, text: "Eliminate human error" },
  { icon: TrendingUp, text: "Scale without hiring" },
];

export default function WorkflowAutomationPage() {
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
      <section className="relative overflow-hidden pt-8 pb-20 md:pb-32">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10"
          >
            <Workflow size={40} className="text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            Put Your Business on{" "}
            <span className="text-gradient">Autopilot</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Stop wasting hours on repetitive tasks. We build custom workflow
            automations that connect your tools, eliminate busywork, and let you
            focus on what actually grows your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a href="/#final-cta">
              <Button variant="hero" size="lg" className="px-8 py-6 text-base">
                Automate Your Business
              </Button>
            </a>
          </motion.div>

          {/* Benefits Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-14 flex flex-wrap justify-center gap-8"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Everything We <span className="text-gradient">Automate</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From simple task triggers to complex multi-step workflows, we build
              automations that save you time and money.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
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
      <section className="section-padding bg-primary/[0.02]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
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

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Real-World <span className="text-gradient">Use Cases</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Here&apos;s how businesses like yours are using workflow automation
              to save time and grow faster.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 30 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-12 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Ready to <span className="text-gradient">Automate</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book a free strategy call and we&apos;ll show you exactly which
              workflows we can automate to save you the most time and money.
            </p>
            <div className="mt-8">
              <a href="/#final-cta">
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
