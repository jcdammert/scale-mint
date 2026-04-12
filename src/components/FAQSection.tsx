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
    q: "What exactly does Scale Mint build for me?",
    a: "We build your complete growth system on one platform. That includes your sales pipeline, automated follow-up sequences, missed call text-back, review automation, weekly social media posts, and more. We set everything up for your specific business, train you on it, and support you every month. It's the platform AND the team behind it.",
  },
  {
    q: "How is this different from Jobber or Housecall Pro?",
    a: "Those tools give you a login and a help center. You're on your own to figure it out, set it up, and actually use it. We build the whole thing for you — your pipeline, your automations, your follow-up system — and we keep it running. Plus, our platform does way more than scheduling and invoicing. It's your entire sales engine and online presence in one place.",
  },
  {
    q: "How is this different from hiring a marketing agency?",
    a: "Agencies run ads and send you a report. When you stop paying, everything disappears. With Scale Mint, you own the system. You see every lead, every follow-up, every pipeline stage. And when you're ready to add marketing, it feeds directly into the platform we already built — so nothing leaks.",
  },
  {
    q: "How fast can I get up and running?",
    a: "Most clients are fully live in 5–10 business days. We move fast because we've built this for multiple service businesses and know exactly what to set up.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None. We build everything, walk you through it on a recorded training call, and you can reach out anytime. If you can send a text, you can use this.",
  },
  {
    q: "What does the monthly fee cover?",
    a: "Your platform, hosting, weekly social posts, ongoing support, and access to our team. Think of it like a part-time operations person — except at a fraction of the cost and the system works 24/7.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts. We keep clients because the system works, not because of fine print.",
  },
];

const FAQSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="faq" className="section-padding section-alt">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          Frequently Asked <span className="text-gradient">Questions.</span>
        </motion.h2>

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
