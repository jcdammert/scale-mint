"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

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

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          Simple, Transparent <span className="text-gradient">Pricing.</span>
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
  );
};

export default PricingSection;
