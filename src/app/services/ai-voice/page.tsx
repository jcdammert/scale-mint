"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
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
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

const waveHeights = [6, 14, 22, 16, 10, 20, 26, 18, 12, 24, 16, 8];

function CallSimulation() {
  return (
    <div className="relative flex items-center justify-center lg:justify-end">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-primary/5 blur-[60px]" />

      <div className="card-glass relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 p-6">
        {/* Status bar */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/5">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-primary/60">
            Incoming Call
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] text-primary font-medium">Live</span>
          </div>
        </div>

        {/* Caller info */}
        <div className="text-center mb-5">
          <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Phone size={20} className="text-primary" />
          </div>
          <div className="font-semibold text-foreground text-base">(555) 234-8901</div>
          <div className="text-xs text-muted-foreground mt-0.5">Mike T. — HVAC Emergency</div>
        </div>

        {/* Waveform */}
        <div className="flex items-center justify-center gap-[3px] h-10 my-4 px-4">
          {waveHeights.map((h, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full bg-primary/60"
              animate={{ height: [h * 0.5, h, h * 0.6, h * 0.8, h * 0.5] }}
              transition={{
                duration: 1.4,
                delay: i * 0.09,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ height: h }}
            />
          ))}
        </div>

        {/* AI transcript bubble */}
        <div className="rounded-xl bg-primary/5 border border-primary/15 p-3.5 mt-3">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
              AI Receptionist
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            &ldquo;Hi, thanks for calling Johnson&apos;s HVAC! I see you need emergency service — I can schedule a tech within 2 hours. Can I get your address?&rdquo;
          </p>
        </div>

        {/* Lead captured badge */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <UserCheck size={13} className="text-primary" />
          <span className="text-[11px] text-primary font-medium">Lead captured · Appointment booked</span>
        </div>
      </div>

      {/* Floating stat */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute -bottom-4 left-4 card-glass flex items-center gap-2 rounded-xl px-3 py-2 border border-primary/20 shadow-[0_0_20px_rgba(74,222,128,0.1)]"
      >
        <Clock size={12} className="text-primary" />
        <span className="text-xs font-medium text-primary">Answered in &lt;2s</span>
      </motion.div>
    </div>
  );
}

export default function AIVoicePage() {
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

      {/* Hero — 2-col split with call simulation */}
      <section className="relative overflow-hidden pt-8 pb-10 md:pb-20">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left: text */}
            <div>
              <motion.div
                initial={isMobile ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 backdrop-blur-md"
              >
                <Sparkles size={12} className="text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  AI Voice Agents
                </span>
              </motion.div>

              <motion.h1
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
              >
                Never Miss a Call{" "}
                <span className="text-gradient">Again</span>
              </motion.h1>

              <motion.p
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                AI-powered voice agents and virtual receptionists that pick up every
                call, qualify leads, book appointments, and route callers — 24 hours
                a day, 7 days a week.
              </motion.p>

              <motion.div
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a href="/book" className="block w-full sm:w-auto">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto px-8 py-6 text-base">
                    Get Your AI Receptionist
                  </Button>
                </a>
              </motion.div>

              {/* Trust pills */}
              <motion.div
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-8"
              >
                <div className="card-glass inline-flex flex-col items-start gap-3 px-5 py-4 sm:flex-row sm:items-center sm:gap-0 sm:px-2 sm:py-2">
                  {[
                    { icon: PhoneCall, text: "Every Call Answered" },
                    { icon: Shield, text: "Professional & Consistent" },
                    { icon: TrendingUp, text: "More Booked Appointments" },
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

            {/* Right: call simulation */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:pl-4"
            >
              <CallSimulation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features — Masonry grid with pulsing dots */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-8 md:mb-14"
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

          {/* Masonry-style: first item spans 2 cols on lg */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={cn(
                  "card-glass p-8 transition-all duration-300 hover:border-primary/30 group",
                  i === 0 && "lg:col-span-2"
                )}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/15">
                    <f.icon size={22} className="text-primary" />
                  </div>
                  {/* Pulsing dot badge */}
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-primary/60 animate-pulse" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/60">
                      Active
                    </span>
                  </div>
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className={cn(
                  "text-sm leading-relaxed text-muted-foreground",
                  i === 0 && "max-w-xl"
                )}>
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Vertical timeline */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-10 md:mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Getting Started Is{" "}
              <span className="text-gradient">Simple</span>
            </h2>
          </motion.div>

          <div className="mx-auto max-w-2xl">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />

              <div className="space-y-6">
                {steps.map((s, i) => (
                  <motion.div
                    key={s.step}
                    initial={isMobile ? false : { opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    {/* Number circle */}
                    <div className="flex-shrink-0 h-12 w-12 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center font-heading text-sm font-bold text-primary z-10">
                      {s.step}
                    </div>

                    {/* Content */}
                    <div className="card-glass flex-1 p-6 mt-0.5">
                      <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {s.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases — 2×2 industry grid */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-10 md:mb-14"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Perfect For{" "}
              <span className="text-gradient">Your Industry</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              AI voice agents are transforming phone operations across every
              industry.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-px rounded-xl bg-gradient-to-br from-primary/20 via-primary/8 to-transparent"
              >
                <div className="h-full rounded-[11px] bg-[hsl(230_12%_8%)] p-8 transition-all duration-300 hover:bg-[hsl(230_12%_9%)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <uc.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {uc.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {uc.description}
                  </p>
                </div>
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
            className="relative overflow-hidden card-glass mx-auto max-w-4xl p-10 md:p-16 text-center"
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-primary/5 blur-[80px]" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Stop Losing Calls,{" "}
                <span className="text-gradient">Start Closing Deals</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                Every missed call is a missed customer. Let AI handle your phones
                so you never lose another lead. Book a free strategy call today.
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
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
