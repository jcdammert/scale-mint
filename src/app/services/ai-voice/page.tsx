"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DualCTA from "@/components/DualCTA";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
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
  Shield,
  TrendingUp,
  PhoneCall,
  PhoneForwarded,
  Sparkles,
  MessageSquare,
  Zap,
  RefreshCw,
  Star,
  CheckCircle2,
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

const conversationFeatures = [
  {
    icon: Zap,
    title: "Instant Missed Call Text-Back",
    description:
      "The moment someone calls and you miss it, they get an automatic text. Most leads book with whoever responds first — now that's always you.",
  },
  {
    icon: MessageSquare,
    title: "2-Way AI SMS Conversations",
    description:
      "The AI holds real conversations over text — answers questions, qualifies the lead, and books appointments without you lifting a finger.",
  },
  {
    icon: RefreshCw,
    title: "Automated Follow-Up Sequences",
    description:
      "If a lead goes cold, a multi-day text sequence fires automatically. Day 1, Day 3, Day 7 — keeping you top of mind until they're ready.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Reminders",
    description:
      "Automated reminder texts go out before every job. Fewer no-shows, fewer last-minute cancellations, more revenue on the books.",
  },
  {
    icon: Star,
    title: "Post-Job Review Requests",
    description:
      "After every completed job, a review request fires automatically. Your Google rating climbs without you ever asking manually.",
  },
  {
    icon: TrendingUp,
    title: "Lead Nurture Campaigns",
    description:
      "Not every lead is ready today. Automated sequences keep your business in front of them so when they're ready to buy, they call you.",
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

const waveHeights = [6, 14, 22, 16, 10, 20, 26, 18, 12, 24, 16, 8];

const smsThread = [
  { from: "ai", text: "Hi Mike! Sorry we missed your call — this is Johnson's HVAC. Are you still looking for service today?", time: "2:14 PM" },
  { from: "user", text: "Yeah, AC went out. Need someone ASAP", time: "2:15 PM" },
  { from: "ai", text: "Got it! I can get a tech out between 2–4pm today. Want me to lock that in for you?", time: "2:15 PM" },
  { from: "user", text: "Yes please", time: "2:16 PM" },
  { from: "ai", text: "Booked! You'll get a confirmation text shortly. See you at 2pm 👍", time: "2:16 PM" },
];

function CallSimulation() {
  return (
    <div className="relative flex items-center justify-center lg:justify-end">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-primary/5 blur-[60px]" />
      <div className="card-glass relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 p-6">
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/5">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-primary/60">
            Incoming Call
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] text-primary font-medium">Live</span>
          </div>
        </div>
        <div className="text-center mb-5">
          <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Phone size={20} className="text-primary" />
          </div>
          <div className="font-semibold text-foreground text-base">(555) 234-8901</div>
          <div className="text-xs text-muted-foreground mt-0.5">Mike T. — HVAC Emergency</div>
        </div>
        <div className="flex items-center justify-center gap-[3px] h-10 my-4 px-4">
          {waveHeights.map((h, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full bg-primary/60"
              animate={{ height: [h * 0.5, h, h * 0.6, h * 0.8, h * 0.5] }}
              transition={{ duration: 1.4, delay: i * 0.09, repeat: Infinity, ease: "easeInOut" }}
              style={{ height: h }}
            />
          ))}
        </div>
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
        <div className="mt-4 flex items-center justify-center gap-2">
          <UserCheck size={13} className="text-primary" />
          <span className="text-[11px] text-primary font-medium">Lead captured · Appointment booked</span>
        </div>
      </div>
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

function SMSMockup() {
  return (
    <div className="relative flex items-center justify-center lg:justify-start">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-primary/5 blur-[60px]" />
      <div className="card-glass relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/10">
        {/* Phone header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">JH</span>
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">Johnson&apos;s HVAC</div>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] text-primary">AI Conversation Active</span>
            </div>
          </div>
        </div>

        {/* Missed call notice */}
        <div className="mx-4 mt-4 mb-3 flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2">
          <PhoneCall size={12} className="text-muted-foreground/50" />
          <span className="text-[11px] text-muted-foreground/50">Missed call from Mike T. · 2:13 PM</span>
        </div>

        {/* Messages */}
        <div className="px-4 pb-4 space-y-3">
          {smsThread.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={cn("flex", msg.from === "user" ? "justify-end" : "justify-start")}
            >
              <div className={cn(
                "max-w-[80%] rounded-2xl px-3.5 py-2.5",
                msg.from === "ai"
                  ? "bg-primary/10 border border-primary/15 rounded-tl-sm"
                  : "bg-white/[0.07] border border-white/8 rounded-tr-sm"
              )}>
                <p className="text-xs text-foreground/85 leading-relaxed">{msg.text}</p>
                <div className="mt-1 flex items-center justify-end gap-1">
                  <span className="text-[9px] text-muted-foreground/40">{msg.time}</span>
                  {msg.from === "user" && <CheckCircle2 size={9} className="text-primary/50" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booked badge */}
        <div className="mx-4 mb-4 flex items-center justify-center gap-2 rounded-lg bg-primary/5 border border-primary/15 py-2">
          <CalendarCheck size={13} className="text-primary" />
          <span className="text-[11px] text-primary font-medium">Appointment booked · No human needed</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -top-4 right-4 card-glass flex items-center gap-2 rounded-xl px-3 py-2 border border-primary/20 shadow-[0_0_20px_rgba(74,222,128,0.1)]"
      >
        <Zap size={12} className="text-primary" />
        <span className="text-xs font-medium text-primary">Auto-replied in &lt;60s</span>
      </motion.div>
    </div>
  );
}

type FeatureItem = { icon: React.ElementType; title: string; description: string };

const shortLabels = [
  "24/7 Answering",
  "Call Routing",
  "Voicemail",
  "Scheduling",
  "Lead Qual",
  "Custom Voice",
  "Analytics",
];

function VoiceFeatureSelector({ features, isMobile }: { features: FeatureItem[]; isMobile: boolean }) {
  const [active, setActive] = useState(0);
  const f = features[active];
  return (
    <motion.div
      initial={isMobile ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-4xl"
    >
      {/* Horizontal pill tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {features.map((item, i) => (
          <button
            key={item.title}
            onClick={() => setActive(i)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-200",
              active === i
                ? "border-primary/30 bg-primary/10 text-primary shadow-[0_0_16px_rgba(74,222,128,0.1)]"
                : "border-white/8 bg-white/[0.02] text-muted-foreground hover:text-foreground hover:border-white/15"
            )}
          >
            <item.icon size={13} className={active === i ? "text-primary" : ""} />
            <span>{shortLabels[i] ?? item.title}</span>
          </button>
        ))}
      </div>

      {/* Compact inline detail row */}
      <div className="card-glass rounded-2xl p-5 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-4 sm:gap-5"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <f.icon size={22} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">
                  {f.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                  Active
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
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

      {/* ═══ PART 1: AI VOICE ═══ */}

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

      {/* Voice Features — Interactive selector */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-8 md:mb-12"
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

          <VoiceFeatureSelector features={features} isMobile={isMobile} />
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
                    <div className="flex-shrink-0 h-12 w-12 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center font-heading text-sm font-bold text-primary z-10">
                      {s.step}
                    </div>
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

      {/* ═══════════════════════════════════════════════
          DIVIDER
      ═══════════════════════════════════════════════ */}
      <div className="container mx-auto px-4">
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/40">
              Also included
            </span>
          </div>
        </div>
      </div>

      {/* ═══ PART 2: AI CONVERSATION (SMS) ═══ */}

      {/* Conversation Hero — 2-col split */}
      <section className="relative overflow-hidden pt-10 pb-10 md:pb-20">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-primary/4 blur-[120px]" />
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left: SMS mockup */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 lg:pr-4"
            >
              <SMSMockup />
            </motion.div>

            {/* Right: text */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={isMobile ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 backdrop-blur-md"
              >
                <MessageSquare size={12} className="text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  AI Conversation
                </span>
              </motion.div>

              <motion.h2
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl"
              >
                Text Every Lead.{" "}
                <span className="text-gradient">Automatically.</span>
              </motion.h2>

              <motion.p
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                While your AI voice agent handles inbound calls, your AI conversation
                system follows up with every lead over SMS — instantly, automatically,
                and at scale. No manual texting. No leads falling through the cracks.
              </motion.p>

              <motion.div
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a href="/live-demo" className="block w-full sm:w-auto">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto px-8 py-6 text-base">
                    See It In Action
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation Features Grid */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-8 md:mb-14"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Your AI Conversation{" "}
              <span className="text-gradient">Engine</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every lead gets a response. Every job gets a follow-up. All on autopilot.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conversationFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass p-8 transition-all duration-300 hover:border-primary/30 group"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/15">
                  <f.icon size={22} className="text-primary" />
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

      <DualCTA />

      <Footer />
    </div>
  );
}
