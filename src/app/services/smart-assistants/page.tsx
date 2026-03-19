"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  MessageSquare,
  ArrowLeft,
  Brain,
  UserCheck,
  CalendarCheck,
  HelpCircle,
  Share2,
  Database,
  ArrowRight,
  Clock,
  TrendingUp,
  Headphones,
  Moon,
  ShoppingBag,
  Globe,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Brain,
    title: "Natural Language Understanding",
    description:
      "Your chatbot understands context, intent, and nuance — not just keywords. Conversations feel natural and human-like.",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description:
      "Automatically ask the right questions to qualify leads before they ever reach your team. Only hot prospects get through.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description:
      "Integrated directly with your calendar. Visitors book appointments through natural conversation, no forms needed.",
  },
  {
    icon: HelpCircle,
    title: "FAQ Handling",
    description:
      "Train your assistant on your business knowledge. It answers common questions instantly, reducing support tickets by up to 80%.",
  },
  {
    icon: Share2,
    title: "Multi-Platform Deployment",
    description:
      "Deploy on your website, Facebook Messenger, Instagram DMs, SMS, WhatsApp — wherever your customers are.",
  },
  {
    icon: Database,
    title: "Custom Training on Your Data",
    description:
      "We train the AI on your specific products, services, pricing, and policies so it answers like a knowledgeable team member.",
  },
];

const steps = [
  {
    step: "01",
    title: "Understand Your Needs",
    description:
      "We learn about your business, customers, and the types of questions and interactions you want automated.",
  },
  {
    step: "02",
    title: "Train the AI",
    description:
      "We feed your business data, FAQs, product info, and brand voice into the AI to create a knowledgeable assistant.",
  },
  {
    step: "03",
    title: "Build Conversation Flows",
    description:
      "We design intelligent conversation paths for lead capture, support, booking, and more — with fallback to human agents.",
  },
  {
    step: "04",
    title: "Deploy & Optimize",
    description:
      "Launch across your channels, monitor performance, and continuously improve based on real conversations.",
  },
];

const useCases = [
  {
    icon: Moon,
    title: "After-Hours Customer Support",
    description:
      "Your AI assistant handles inquiries 24/7 — answering questions, capturing info, and setting expectations for follow-up during business hours.",
  },
  {
    icon: Globe,
    title: "Lead Capture on Website",
    description:
      "Instead of a static form, visitors have a conversation. The chatbot qualifies them, captures their details, and routes hot leads to your team instantly.",
  },
  {
    icon: CalendarCheck,
    title: "Automated Appointment Scheduling",
    description:
      "Visitors tell the bot when they're available, it checks your calendar, and books the appointment — all in a natural chat flow.",
  },
  {
    icon: ShoppingBag,
    title: "Product Recommendations",
    description:
      "For e-commerce or service businesses, the AI recommends the right product or service based on the visitor's needs and preferences.",
  },
];

export default function SmartAssistantsPage() {
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

      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-10 md:pb-32">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10"
          >
            <MessageSquare size={40} className="text-primary" />
          </motion.div>
          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            Your Smartest Employee{" "}
            <span className="text-gradient">Never Sleeps</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            AI-powered chatbots and assistants that answer questions, capture
            leads, and handle customer inquiries 24/7 — across every channel
            your customers use.
          </motion.p>
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <a href="/book" className="block w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto px-8 py-6 text-base">
                Get Your AI Assistant
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
              { icon: Clock, text: "24/7 Availability" },
              { icon: TrendingUp, text: "3x More Lead Captures" },
              { icon: Headphones, text: "Instant Customer Support" },
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
              Intelligent <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              More than a chatbot — a fully trained AI assistant that represents
              your brand.
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
              How We Build Your{" "}
              <span className="text-gradient">AI Assistant</span>
            </h2>
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
              Real-World <span className="text-gradient">Use Cases</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              See how AI assistants are transforming customer interactions for
              businesses like yours.
            </p>
          </motion.div>

          <div className="mt-8 md:mt-14 grid gap-6 sm:grid-cols-2">
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
              Let AI Handle the{" "}
              <span className="text-gradient">Conversations</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Stop losing leads after hours. Get an AI assistant that works for
              you around the clock. Book a free strategy call to get started.
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
