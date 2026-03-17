"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowLeft,
  Clock,
  FileText,
  CalendarCheck,
  UserCheck,
  Mic,
  BarChart3,
  ArrowRight,
  Shield,
  TrendingUp,
  Stethoscope,
  Scale,
  Wrench,
  UtensilsCrossed,
  PhoneCall,
  PhoneForwarded,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Clock,
    title: "24/7 Call Answering",
    description:
      "Your AI receptionist picks up every call, day or night. No voicemail black holes. No missed opportunities. Every caller gets a professional, helpful response.",
  },
  {
    icon: PhoneForwarded,
    title: "Intelligent Call Routing",
    description:
      "The AI understands the caller's intent and routes them to the right person or department. Urgent calls get escalated immediately.",
  },
  {
    icon: FileText,
    title: "Voicemail Transcription",
    description:
      "Every voicemail is transcribed and sent to you as text — via email, SMS, or Slack. Read your messages instead of listening to them.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Scheduling",
    description:
      "Callers can book appointments directly through the phone call. The AI checks your availability and confirms the booking in real-time.",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description:
      "The AI asks qualifying questions before connecting the caller to your team. Know exactly who's calling and what they need before you pick up.",
  },
  {
    icon: Mic,
    title: "Custom Greeting & Voice",
    description:
      "A branded greeting that sounds professional and matches your business personality. Callers won't know it's AI.",
  },
  {
    icon: BarChart3,
    title: "Call Analytics",
    description:
      "Detailed insights on call volume, peak times, common questions, and conversion rates. Make data-driven decisions about your phone operations.",
  },
];

const steps = [
  {
    step: "01",
    title: "Configure Your AI Voice",
    description:
      "We set up your custom greeting, call routing rules, and business hours. The AI learns your services, pricing, and FAQs.",
  },
  {
    step: "02",
    title: "Connect Your Phone",
    description:
      "We integrate with your existing phone number — no need to change it. Calls forward to the AI seamlessly.",
  },
  {
    step: "03",
    title: "Test & Refine",
    description:
      "We run test calls, refine conversation flows, and optimize the AI's responses until they're perfect.",
  },
  {
    step: "04",
    title: "Go Live",
    description:
      "Flip the switch and never miss a call again. We monitor performance and continuously improve.",
  },
];

const useCases = [
  {
    icon: Stethoscope,
    title: "Medical Offices",
    description:
      "Handle appointment scheduling, prescription refill requests, and insurance questions — without tying up your front desk staff.",
  },
  {
    icon: Scale,
    title: "Law Firms",
    description:
      "Qualify potential clients, schedule consultations, and handle intake questions. The AI captures case details before the attorney ever picks up.",
  },
  {
    icon: Wrench,
    title: "Home Service Businesses",
    description:
      "Plumbers, electricians, HVAC — capture emergency calls after hours, book service appointments, and provide quotes based on the issue described.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "Handle reservations, answer menu questions, provide hours and location info, and take takeout orders — all by phone, all automated.",
  },
];

export default function AIVoicePage() {
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
            <Phone size={40} className="text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            Never Miss a Call{" "}
            <span className="text-gradient">Again</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            AI-powered voice agents and virtual receptionists that pick up every
            call, qualify leads, book appointments, and route callers — 24 hours
            a day, 7 days a week.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <a href="/book">
              <Button variant="hero" size="lg" className="px-8 py-6 text-base">
                Get Your AI Receptionist
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
              { icon: PhoneCall, text: "Every Call Answered" },
              { icon: Shield, text: "Professional & Consistent" },
              { icon: TrendingUp, text: "More Booked Appointments" },
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
              What Your AI Voice Agent{" "}
              <span className="text-gradient">Can Do</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A full-featured virtual receptionist that handles calls like your
              best employee.
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
              Getting Started Is{" "}
              <span className="text-gradient">Simple</span>
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
              Perfect For <span className="text-gradient">Your Industry</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              AI voice agents are transforming phone operations across every
              industry.
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
              Stop Losing Calls,{" "}
              <span className="text-gradient">Start Closing Deals</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every missed call is a missed customer. Let AI handle your phones
              so you never lose another lead. Book a free strategy call today.
            </p>
            <div className="mt-8">
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
