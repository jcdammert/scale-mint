"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  Handshake,
  Hammer,
  MonitorPlay,
  HeartHandshake,
  Dumbbell,
} from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "We Get on a Call",
    description:
      "Free strategy call. No pitch, no pressure. We learn how your business operates — how leads come in, how you schedule jobs, how you invoice, where things fall apart. We ask the right questions so nothing gets missed.",
  },
  {
    step: "02",
    icon: Handshake,
    title: "We Make Sure It's a Fit",
    description:
      "We're honest about this — we only work with business owners who are serious about growing. If you're not ready to invest in your operation or you're looking for a magic fix, we're probably not the right fit. But if you're ready to build something real, we want to work with you.",
  },
  {
    step: "03",
    icon: Hammer,
    title: "We Build Your Entire System",
    description:
      "This is where the magic happens. We set up your Business OS inside the platform — your CRM, your pipeline stages, your automations, your invoice and estimate templates, your follow-up sequences, your review requests, your scheduling calendar — everything configured specifically for how your business runs. No templates. No shortcuts. This is YOUR system, built for YOU. Typical build time: 5–10 business days.",
  },
  {
    step: "04",
    icon: MonitorPlay,
    title: "We Walk You Through Your Dashboard",
    description:
      "When it's done, we hop on a recorded training call and walk you through every single piece of your system. You'll see your dashboard, your pipeline, your calendar, your automations — and you'll know exactly how to use all of it. You're in full control.",
  },
  {
    step: "05",
    icon: HeartHandshake,
    title: "We Stay in Your Corner",
    description:
      "The monthly fee isn't just for the software — it's for the team behind it. Think of it like having a part-time operations person on your team, except at a fraction of the cost. Something breaks? We fix it. Need a new automation? We build it. Want to add marketing or a website down the road? It plugs right into the system we already built. We're here for the long haul.",
  },
];

export default function HowItWorksPage() {
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
      <section className="relative overflow-hidden pt-8 pb-6 md:pb-10">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            {"Here's Exactly How It "}
            <span className="text-gradient">Works</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {"We don't hand you a login and wish you luck. We build your entire system, train you on it, and stay in your corner every month."}
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-8 md:p-10 transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <s.icon size={28} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
                      Step {s.step}
                    </div>
                    <h2 className="mb-3 font-heading text-xl font-bold text-foreground md:text-2xl">
                      {s.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {s.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Analogy */}
      <section className="px-4 pb-6 md:pb-10">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Dumbbell size={24} className="text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Software Without Support is Like a Gym Without a{" "}
                <span className="text-gradient">Trainer.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base mb-4">
              Most business software gives you the tools and says &ldquo;good luck.&rdquo; That&apos;s like getting a gym membership with no plan, no coach, and no accountability. You&apos;ll use it for a week, get overwhelmed, and go back to doing things the old way.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Scale Mint is different. You get the gym — the full platform with every tool you need. But you also get the personal trainer — we build your workout plan, show you exactly what to do, and check in every month to make sure you&apos;re progressing. That&apos;s why our clients actually use their system, and why it actually makes them money.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-10 md:pb-16">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Ready to See What Your System Would{" "}
              <span className="text-gradient">Look Like?</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book a free strategy call — no pressure, no pitch. Just a real conversation about your business.
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
