"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$497",
    features: [
      "One core automation or AI tool",
      "Basic website",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$997",
    popular: true,
    features: [
      "Up to 3 automations",
      "AI assistant or chatbot",
      "CRM setup",
      "Priority support",
    ],
  },
  {
    name: "Partner",
    price: "$1,497",
    features: [
      "Unlimited builds & automations",
      "AI receptionist",
      "Custom integrations",
      "Dedicated strategy calls",
      "Everything included",
    ],
  },
];

export default function PricingPage() {
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            Simple, Transparent <span className="text-gradient">Pricing.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Pick the plan that fits your business. Marketing, automations, or both — every plan is tailored to help home service businesses grow.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`card-glass relative flex flex-col p-8 transition-all duration-300 ${
                  tier.popular
                    ? "border-primary/40 shadow-lg shadow-primary/10"
                    : "hover:border-primary/20"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold text-foreground">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
                <ul className="mt-8 flex-1 space-y-4">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/book" className="mt-8 block">
                  <Button
                    variant={tier.popular ? "hero" : "hero-outline"}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center text-sm text-muted-foreground"
          >
            Not sure what you need? Book a free call and we&apos;ll recommend the right plan.
            <br />
            No contracts. 14-day money-back guarantee.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mx-auto max-w-3xl p-12 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Let&apos;s Find the Right <span className="text-gradient">Fit</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every home service business is different. Book a free strategy call and we&apos;ll build a plan around your goals — whether that&apos;s more leads, smoother operations, or both.
            </p>
            <div className="mt-8">
              <a href="/book">
                <Button variant="cta" size="lg" className="px-8 py-6 text-base">
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
