"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Globe, Megaphone, Settings, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const products = [
  {
    icon: Globe,
    name: "Website Design & Build",
    price: "Custom Quote",
    priceNote: "One-time project fee",
    description:
      "Custom SEO-optimized website built on modern infrastructure. Not a template — built to convert.",
  },
  {
    icon: Megaphone,
    name: "Marketing",
    price: "From $250",
    priceNote: "/mo + setup fee",
    description:
      "Organic visibility or organic + paid ads. Get found on Google and generate consistent leads.",
  },
  {
    icon: Settings,
    name: "Business Software",
    price: "From $150",
    priceNote: "/mo + setup fee",
    description:
      "All-in-one business OS — CRM, invoicing, scheduling, automations, and more. Replaces 5–10 tools.",
  },
];

const PricingSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three core products. Pick what you need, or bundle them together for
            the best value.
          </p>
        </motion.div>

        <div className="mt-8 md:mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass relative flex flex-col p-8 transition-all duration-300 hover:border-primary/20"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <product.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {product.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-bold text-foreground">
                  {product.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {product.priceNote}
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <a href="/book" className="mt-6 block">
                <Button variant="hero-outline" className="w-full">
                  Learn More
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Bundle multiple services and save on your setup investment.
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View full pricing details
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
