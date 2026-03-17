"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

const tiers = [
  {
    name: "Starter",
    tagline: "Get Found",
    price: "$800",
    description:
      "For the guy with no website or a terrible one. Needs to look legit and start getting found on Google.",
    features: [
      "Full SEO website (5\u20137 pages, Next.js/Vercel)",
      "GMB setup & optimization",
      "Weekly posts \u2014 FB, IG, GMB (client sends photos, we write + schedule)",
      "Contact form \u2192 GHL lead capture",
      "Review request automation",
    ],
  },
  {
    name: "Growth",
    tagline: "Get Leads",
    price: "$1,900",
    description:
      "For the guy already getting some work but wants consistent inbound leads from multiple channels.",
    features: [
      "Everything in Starter",
      "GHL CRM + pipeline setup",
      "Lead follow-up automation (text + email sequences)",
      "Missed call text-back",
      "AI chatbot on website",
      "Local SEO city/service pages",
      "Meta Ads setup + first campaign",
      "LSA (Local Services Ads) setup",
      "Citation building (Yelp, Angi, BBB, etc.)",
    ],
  },
  {
    name: "Dominate",
    tagline: "Get Booked",
    price: "$3,500",
    description:
      "For the guy who wants to be the #1 in his area and run a fully automated business operation.",
    features: [
      "Everything in Growth",
      "Google Ads (PPC) setup + management",
      "Contracts & e-signatures",
      "Estimates & invoicing",
      "Appointment booking automation",
      "Worker scheduling & job management",
      "Reactivation campaign (old leads)",
      "Rank tracking + reporting",
    ],
    subHeader: "Full GHL business OS build-out:",
    subHeaderStartIndex: 2,
  },
];

export default function PricingPage() {
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
          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing.</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Pick the package that fits your business. Marketing, automations, or
            both — every package is tailored to help home service businesses
            grow.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding pt-0">
        <div className="container mx-auto">
          {/* Scoping note */}
          <motion.p
            initial={isMobile ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-sm text-muted-foreground"
          >
            All packages are scoped to your business. Book a free call to get a
            custom quote.
          </motion.p>

          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass relative flex flex-col p-8 transition-all duration-300 hover:border-primary/20"
              >
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {tier.name}
                  </h3>
                  <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                    {tier.tagline}
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">
                    Starting at
                  </span>
                  <span className="ml-1 font-heading text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f, fi) => (
                    <li key={f}>
                      {tier.subHeader &&
                        tier.subHeaderStartIndex === fi && (
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary/70">
                            {tier.subHeader}
                          </p>
                        )}
                      <div
                        className={`flex items-start gap-3 text-sm text-muted-foreground ${
                          tier.subHeader &&
                          fi >= (tier.subHeaderStartIndex ?? 0) &&
                          fi < (tier.subHeaderStartIndex ?? 0) + 6
                            ? "pl-3"
                            : ""
                        }`}
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        {f}
                      </div>
                    </li>
                  ))}
                </ul>
                <a href="/book" className="mt-8 block">
                  <Button variant="hero" className="w-full">
                    Get Started
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Monthly retainer note */}
          <motion.p
            initial={isMobile ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground"
          >
            Every package includes a simple monthly retainer to keep your system
            running, your hosting live, and our team in your corner — for a
            fraction of what you&apos;d pay an in-house employee.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center"
          >
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
