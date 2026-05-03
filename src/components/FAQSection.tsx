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
    a: "Your full sales and follow-up system on one platform: pipeline, missed-call text-back, two-way SMS, follow-up sequences, automated review requests, weekly Google/Facebook/Instagram posts, and your Google Business Profile. We configure all of it for how your crew runs, train you on it, and keep it running every month. The platform plus the team behind it.",
  },
  {
    q: "How is this different from Jobber or Housecall Pro?",
    a: "Those are job-management tools. They give you a login and a help center. You're on your own to set it up and actually use the features. We build the whole sales engine for you — pipeline stages, automations, follow-up sequences, online presence — and we keep it running. Job scheduling and invoicing are part of the platform, not the whole thing.",
  },
  {
    q: "How is this different from hiring a marketing agency?",
    a: "Agencies run ads and send a monthly report. The day you stop paying, the leads stop and you have nothing left. With Scale Mint, you own the system. Every lead, every follow-up, every pipeline stage stays in your account. When you're ready to add ads, they feed straight into the system we already built.",
  },
  {
    q: "How fast can I get up and running?",
    a: "5–10 business days for most clients. We move fast because we've built this for multiple service businesses and know what to configure first.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "No. We set everything up, record a training call walking you through it, and you can text or call when you have a question. If you can send a text, you can use this.",
  },
  {
    q: "What does the monthly fee cover?",
    a: "Platform access, hosting, weekly social posts, ongoing support, and our team configuring and adjusting things as your business changes. A fraction of what a part-time ops hire would cost — and the system runs 24/7.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Month-to-month, no long-term contract. We keep clients because the system works, not because of fine print.",
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
          The Questions Operators{" "}
          <span className="text-gradient">Actually Ask.</span>
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
