"use client";

import { motion } from "framer-motion";
import { Check, Megaphone, Globe, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";

const businessOSFeatures = [
  "CRM & pipeline management",
  "Invoicing & estimates",
  "Appointment scheduling",
  "Workflow automations",
  "Contracts & e-signatures",
  "Missed call text-back",
  "SMS & email campaigns",
  "Review management & automation",
  "Google Business Profile optimization",
  "Weekly social media posting (FB, IG, GMB)",
  "AI chatbot for lead capture",
  "Training included",
];

const addOns = [
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Meta Ads, Google PPC, SEO — drive leads directly into your system.",
    note: "Custom quoted.",
  },
  {
    icon: Globe,
    title: "Custom Website",
    description:
      "Fast, SEO-optimized Next.js sites that feed leads straight into your CRM.",
    note: "Custom quoted.",
  },
  {
    icon: Sparkles,
    title: "AI Employee",
    description:
      "AI voice receptionist, smart assistants, and chatbots that answer calls, qualify leads, and book appointments 24/7.",
    note: "Custom quoted.",
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
            Your Entire Business.{" "}
            <span className="text-gradient">One Platform.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to run your operation — leads, scheduling,
            invoicing, follow-ups, reviews, and more — built into one system and
            set up specifically for your business.
          </p>
        </motion.div>

        {/* Business OS Card */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-14 card-glass overflow-hidden p-8 md:p-10 max-w-4xl mx-auto transition-all duration-300 hover:border-primary/30 border-primary/20"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl mb-2">
            Business OS
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            The foundation every client starts with — full software platform +
            done-for-you setup + ongoing support.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {businessOSFeatures.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                {f}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-xs text-muted-foreground italic">
              Replaces: Jobber, Housecall Pro, ServiceTitan, Calendly, DocuSign,
              Mailchimp, and more.
            </p>
            <a href="/pricing" className="block w-full sm:w-auto sm:ml-auto">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto px-6 py-5 text-sm sm:px-8 sm:py-6 sm:text-base"
              >
                See Plans & Pricing
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Add-ons */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 mx-auto max-w-2xl text-center"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Ready to Pour Gas on It?{" "}
            <span className="text-gradient">Add These to Your System.</span>
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Once your Business OS is live, these plug right in — because the
            infrastructure is already there.
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
