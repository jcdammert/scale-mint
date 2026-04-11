"use client";

import { motion } from "framer-motion";
import { Megaphone, Globe, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";

const pillars = [
  {
    num: "01",
    title: "Your Sales Process, Fixed",
    description:
      "Leads come in. They get responded to instantly. They get followed up with automatically. You see every opportunity in your pipeline and nothing falls through the cracks. You close more of the leads you're already getting.",
  },
  {
    num: "02",
    title: "Your Online Presence, Built",
    description:
      "We post for you weekly on Google, Facebook, and Instagram. Your Google Business Profile is optimized. You have a real website that converts visitors into leads. When someone Googles your business, they see a company that looks legit and established.",
  },
  {
    num: "03",
    title: "Your Reputation, On Autopilot",
    description:
      "Review requests go out automatically after every job. Your reviews stack up on Google without you lifting a finger. More reviews = more trust = more calls.",
  },
  {
    num: "04",
    title: "Ready to Scale Whenever You Want",
    description:
      "When everything is dialed in — your sales process catches every lead, your presence is strong, your follow-up is automatic — that's when marketing actually works. Run Meta ads, Google ads, or SEO and watch the system handle the volume. Pour gas on the fire, not on the floor.",
  },
];

const addOns = [
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Meta Ads, Google PPC, SEO — leads flow straight into your pipeline.",
    note: "Custom quoted.",
  },
  {
    icon: Globe,
    title: "Custom Website",
    description:
      "Fast, SEO-optimized, built to convert — feeds leads directly into your system.",
    note: "Custom quoted.",
  },
  {
    icon: Sparkles,
    title: "AI Employee",
    description:
      "AI voice receptionist, smart chatbot, 24/7 lead qualification and booking.",
    note: "Available with Growth plan. Custom quoted.",
  },
];

const ServicesSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="services" className="px-4 py-6 md:py-12">
      <div className="container mx-auto">
        {/* Section heading */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            A Complete Growth System.{" "}
            <span className="text-gradient">Not Just Another Tool.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We don&apos;t hand you a login and wish you luck. We build the entire engine — your sales process, your online presence, your follow-up system — all connected, all done for you, all on one platform.
          </p>
        </motion.div>

        {/* 4 Pillars */}
        <div className="mt-8 md:mt-14 grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-glass p-8 transition-all duration-300 hover:border-primary/30 relative overflow-hidden"
            >
              <span className="absolute top-4 right-5 font-heading text-5xl font-bold text-primary/10">
                {p.num}
              </span>
              <h3 className="mb-3 font-heading text-lg font-semibold text-foreground relative">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground relative">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* See Plans CTA */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a href="/pricing">
            <Button
              variant="hero"
              size="lg"
              className="px-6 py-5 text-sm sm:px-8 sm:py-6 sm:text-base"
            >
              See Plans & Pricing
              <ArrowRight size={18} />
            </Button>
          </a>
        </motion.div>

        {/* Add-ons */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 mx-auto max-w-2xl text-center"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            When You&apos;re Ready for More,{" "}
            <span className="text-gradient">It Plugs Right In.</span>
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Your platform is the foundation. These add-ons connect directly to
            the system we already built.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {addOns.map((a, i) => (
            <motion.div
              key={a.title}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-glass p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <a.icon size={20} className="text-primary" />
              </div>
              <h4 className="mb-2 font-heading text-base font-semibold text-foreground">
                {a.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                {a.description}
              </p>
              <p className="text-xs font-medium text-primary">{a.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
