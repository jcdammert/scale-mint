"use client";

import { motion } from "framer-motion";
import { Workflow, Globe, MessageSquare, Phone, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks, auto-sync your tools, and put your operations on autopilot.",
    popular: true,
  },
  {
    icon: Globe,
    title: "AI-Powered Websites",
    description: "Fast, mobile-first sites that actually convert visitors into paying customers.",
  },
  {
    icon: MessageSquare,
    title: "Smart Assistants & Chatbots",
    description: "AI that answers questions, captures leads, and handles customer inquiries 24/7.",
  },
  {
    icon: Phone,
    title: "AI Voice & Receptionist",
    description: "Never miss a call again. AI picks up, qualifies leads, and books appointments.",
  },
  {
    icon: Users,
    title: "CRM & Pipeline Automation",
    description: "Leads automatically tracked, nurtured, and followed up with — nothing falls through the cracks.",
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    description: "Have a wild idea? A unique problem? Tell us about it and we'll build it.",
    highlight: true,
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
            Your Business. <span className="text-gradient">Supercharged.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every business is different. We don&apos;t sell cookie-cutter software — we listen to your problems and build the exact AI-powered solution you need.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`card-glass relative p-8 transition-all duration-300 hover:border-primary/30 ${
                s.highlight ? "border-primary/30 bg-primary/5" : ""
              }`}
            >
              {s.popular && (
                <span className="absolute top-4 right-4 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                  Popular
                </span>
              )}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
