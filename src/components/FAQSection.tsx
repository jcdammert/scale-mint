"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What kinds of things can you actually build?",
    a: "Almost anything! From automated scheduling and follow-up systems to AI chatbots, voice receptionists, CRM workflows, custom dashboards, and more. If it can save you time or make you money, we can probably build it.",
  },
  {
    q: "How fast can I get up and running?",
    a: "Most projects go from discovery call to live system in under 7 days. Simple automations can be live within 48 hours.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "Absolutely not. We handle everything — design, build, setup, and training. You just tell us what's slowing you down.",
  },
  {
    q: "What if I already have a website or CRM?",
    a: "No problem. We work with what you already have. We can integrate with your existing tools, enhance them, or replace them entirely — whatever makes the most sense.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts. We also offer a 14-day money-back guarantee so you can try us risk-free.",
  },
  {
    q: "What if I have a custom idea that's not listed?",
    a: "That's our favorite kind of project. Book a free call and tell us about it — if we can build it, we will.",
  },
];

const FAQSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={isMobile ? undefined : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          Frequently Asked <span className="text-gradient">Questions.</span>
        </motion.h2>

        <motion.div
          initial={isMobile ? undefined : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-glass overflow-hidden border px-6"
              >
                <AccordionTrigger className="py-5 text-left font-heading text-sm font-medium text-foreground hover:no-underline md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
