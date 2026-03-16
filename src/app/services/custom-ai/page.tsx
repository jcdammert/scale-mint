"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowLeft,
  Brain,
  BarChart3,
  TrendingUp,
  FileText,
  ImageIcon,
  Plug,
  ArrowRight,
  Lightbulb,
  Rocket,
  Shield,
  Package,
  PenTool,
  HeartHandshake,
  Search,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Brain,
    title: "Custom Model Training",
    description:
      "We train AI models on your specific data to create solutions that understand your business deeply — from industry jargon to customer behavior patterns.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis Automation",
    description:
      "Turn raw data into actionable insights automatically. From spreadsheets to databases, AI analyzes your numbers and surfaces what matters.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Forecast demand, predict customer churn, estimate project timelines — AI looks at your historical data and tells you what&apos;s coming next.",
  },
  {
    icon: FileText,
    title: "Document Processing",
    description:
      "Automatically extract, classify, and organize information from contracts, invoices, applications, and any document type your business handles.",
  },
  {
    icon: ImageIcon,
    title: "Image & Video Analysis",
    description:
      "AI that can inspect products, read license plates, analyze security footage, classify images, or process visual data at scale.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    description:
      "Connect your custom AI solution to any platform via API. We build the bridges between your AI and the rest of your tech stack.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share Your Vision",
    description:
      "Tell us about your challenge or idea. No matter how wild or niche, we&apos;ll assess feasibility and map out a solution.",
  },
  {
    step: "02",
    title: "Solution Design",
    description:
      "We design a custom AI architecture tailored to your specific use case, data, and business requirements.",
  },
  {
    step: "03",
    title: "Build & Train",
    description:
      "We develop the solution, train models on your data, and iterate until the accuracy and performance meet your standards.",
  },
  {
    step: "04",
    title: "Deploy & Scale",
    description:
      "Launch your custom AI solution, integrate it into your workflows, and scale it as your business grows.",
  },
];

const useCases = [
  {
    icon: Package,
    title: "Inventory Prediction",
    description:
      "AI analyzes sales trends, seasonality, and external factors to predict exactly how much stock you need — reducing waste and preventing stockouts.",
  },
  {
    icon: PenTool,
    title: "Content Generation",
    description:
      "Custom-trained AI that writes in your brand voice — product descriptions, social posts, email campaigns, blog articles, and more.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Sentiment Analysis",
    description:
      "Automatically analyze reviews, support tickets, and social mentions to understand how customers feel about your brand in real-time.",
  },
  {
    icon: Search,
    title: "Compliance Monitoring",
    description:
      "AI that continuously scans documents, communications, and processes to flag compliance issues before they become problems.",
  },
];

export default function CustomAIPage() {
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
      <section className="relative overflow-hidden pt-8 pb-20 md:pb-32">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10"
          >
            <Sparkles size={40} className="text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            If You Can Think It,{" "}
            <span className="text-gradient">We Can Build It</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Have a wild idea? A unique problem that off-the-shelf software
            can&apos;t solve? Tell us about it — we design and build custom AI
            solutions from scratch.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <a href="/#final-cta">
              <Button variant="hero" size="lg" className="px-8 py-6 text-base">
                Tell Us Your Idea
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-14 flex flex-wrap justify-center gap-8"
          >
            {[
              { icon: Lightbulb, text: "Any Idea, Any Industry" },
              { icon: Rocket, text: "Rapid Prototyping" },
              { icon: Shield, text: "Enterprise-Grade Security" },
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              What We Can{" "}
              <span className="text-gradient">Build</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From data analysis to computer vision, we build AI solutions that
              solve problems no off-the-shelf tool can touch.
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
              From Idea to{" "}
              <span className="text-gradient">Reality</span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
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
              What Others Have{" "}
              <span className="text-gradient">Built</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Examples of custom AI solutions we&apos;ve brought to life for
              businesses.
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
              Got a <span className="text-gradient">Wild Idea</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              No idea is too ambitious. Tell us what you&apos;re imagining and
              we&apos;ll tell you how we can make it real. Book a free strategy
              call to brainstorm.
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
