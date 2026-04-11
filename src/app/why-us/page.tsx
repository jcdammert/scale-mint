"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Wrench,
  ShieldCheck,
  UserCheck,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

const differentiators = [
  {
    icon: Wrench,
    title: "We've done it ourselves",
    description:
      "We run local service businesses. We built this system with our own money for our own companies before we ever offered it to anyone else.",
  },
  {
    icon: ShieldCheck,
    title: "You get software AND service",
    description:
      "Not a DIY platform. Not an agency black box. A real system you can see and control, built and managed by a real team.",
  },
  {
    icon: UserCheck,
    title: "You stay in control",
    description:
      "We build everything, train you on it, and hand it over. You're never locked out of your own business.",
  },
  {
    icon: Handshake,
    title: "Built for the long term",
    description:
      "We want to grow with you. Our pricing is fair, our contracts are month-to-month, and our goal is a partnership — not a transaction.",
  },
];

export default function WhyUsPage() {
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
      <section className="relative overflow-hidden pt-8 pb-8 md:pb-12">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            {"We've Been in "}
            <span className="text-gradient">Your Shoes.</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {"We're not a faceless agency or a SaaS company. We're business owners who built these systems for ourselves first."}
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="pb-6 md:pb-10 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-8 md:p-10"
          >
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {"My name is Johann Dammert. I started my first business at 15 and never stopped. I run multiple local service companies — window tinting, asphalt coatings, pressure washing, junk removal — and I know exactly what it feels like to have bills due and work drying up. Inconsistent jobs, slow months, and doing everything manually just to keep the lights on."}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {"I tried the CRMs. I tried hiring agencies. The CRMs were too complicated and I didn't have time to set them up. The agencies took my money and gave me excuses. So I built the solution myself — the software, the automations, the whole system — for my own businesses. Then I helped friends do the same. And I realized this is what every local service business owner needs: the system AND someone to actually set it up and run it right."}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {"That's why Scale Mint exists."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Not Just Software, Not Just an Agency */}
      <section className="pb-6 md:pb-10 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-8 md:p-10"
          >
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
              {"We're Not Just Software. We're Not Just an "}
              <span className="text-gradient">Agency.</span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {"SaaS companies give you a login, a knowledge base, and a support ticket system. You're on your own to figure it out."}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {"Agencies do the work for you but you have no visibility, no control, and no system of your own. When you stop paying, everything disappears."}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {"Scale Mint gives you both: the full software platform AND the team that builds, configures, and manages it for you. You own the system. You see everything. And we're in your corner making sure it actually works."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="pb-6 md:pb-10 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glass p-8 transition-all duration-300 hover:border-primary/30"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <d.icon size={24} className="text-primary" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We Actually Care */}
      <section className="pb-6 md:pb-10 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-8 md:p-10"
          >
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
              We Actually Care About{" "}
              <span className="text-gradient">Your Growth</span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {"Our long-term goal isn't just to be your software provider — it's to become a true partner in the businesses we work with. The only way we get there is by delivering real results for real business owners."}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {"Every client we take on, we treat like a future partner. That means we're selective, we're honest, and we're invested in your success from day one."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Selective On Purpose */}
      <section className="pb-6 md:pb-10 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-8 md:p-10"
          >
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
              {"We're Selective "}
              <span className="text-gradient">On Purpose</span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {"We don't work with everyone. We look for business owners who are serious about growth, willing to follow through, and ready to invest in building something real. If that's you, we want to work together."}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {"If you're looking for a magic fix overnight, we're probably not the right fit — and we'll be upfront about that from the start."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-6 md:pb-10 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Think We Might Be a{" "}
              <span className="text-gradient">Good Fit?</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              {"Book a free call. No pitch, no pressure. We'll be straight with you."}
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
