"use client";

import { motion } from "framer-motion";
import { Workflow, Globe, MessageSquare, Phone, Sparkles, Megaphone } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Google LSA, Google My Business, Meta Ads, and Google Ads — full-service digital marketing to drive leads and grow revenue.",
    href: "/services/marketing",
    highlight: true,
  },
  {
    icon: Workflow,
    title: "Workflow & Operations Automation",
    description: "The backend brain of your business — CRM, scheduling, invoicing, follow-ups, SMS blasts, and pipeline management all running on autopilot.",
    href: "/services/workflow-automation",
  },
  {
    icon: Globe,
    title: "AI-Powered Websites",
    description: "Fast, mobile-first sites that actually convert visitors into paying customers.",
    href: "/services/ai-websites",
  },
  {
    icon: MessageSquare,
    title: "Smart Assistants & Chatbots",
    description: "AI that answers questions, captures leads, and handles customer inquiries 24/7.",
    href: "/services/smart-assistants",
  },
  {
    icon: Phone,
    title: "AI Voice & Receptionist",
    description: "Never miss a call again. AI picks up, qualifies leads, and books appointments.",
    href: "/services/ai-voice",
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    description: "Have a wild idea? A unique problem? Tell us about it and we'll build it.",
    href: "/services/custom-ai",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Your Business, <span className="text-gradient">Fully Dialed In.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Need more leads? We run your marketing. Need smoother operations? We automate your backend. Need both? That&apos;s where the magic happens.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <a key={s.title} href={s.href} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`card-glass relative h-full p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                  s.highlight ? "border-primary/30 bg-primary/5" : ""
                }`}
              >
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-primary">
                  Learn more →
                </span>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
