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
    q: "What exactly does Scale Mint do for me?",
    a: "We build and run your full marketing and sales follow-up operation: pipeline, missed-call text-back, two-way SMS, follow-up sequences, automated review requests, and your online presence across Google, Facebook, and Instagram. We configure everything for how your crew runs, train you on it, and keep it running every month. The marketing and the team behind it.",
  },
  {
    q: "Are you a marketing agency or a piece of software?",
    a: "Neither exactly, and that's the point. Agencies run ads and send a report. Software gives you a login and a help center. We do both sides: we run the marketing — ads, SEO, and website — and we own the sales process that turns those leads into booked jobs. Automated follow-up, missed call text-back, and either a trained AI setter, a plugged-in sales rep, or your own team trained to close. Marketing without a sales process behind it is just expensive noise. That combination is the actual offer.",
  },
  {
    q: "How is this different from hiring a marketing agency?",
    a: "Agencies run ads and send a monthly report. The day you stop paying, the leads stop and you have nothing left. With Scale Mint, you own the pipeline, the follow-up sequences, and the contacts. When you're ready to add ads, they feed straight into the sales process we already built.",
  },
  {
    q: "How fast can I get up and running?",
    a: "3–5 days for most clients. We move fast because we've built this for multiple service businesses and know what to configure first.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "No. We set everything up, record a training call walking you through it, and you can text or call when you have a question. If you can send a text, you can use this.",
  },
  {
    q: "What does the monthly fee cover?",
    a: "Everything we built for you — CRM, automations, follow-up sequences, review engine, and online presence — plus ongoing support and our team adjusting things as your business changes. A fraction of what a part-time ops hire would cost, and it runs 24/7.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Month-to-month, no long-term contract. We keep clients because the results are there, not because of fine print.",
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
          <span className="text-gradient">FAQs.</span>
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
