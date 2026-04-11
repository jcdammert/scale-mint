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
    q: "What exactly is the Business OS?",
    a: "It's an all-in-one software platform built for local service businesses. It replaces your CRM, scheduling tool, invoicing software, email marketing, contracts, and more — all in one place. We set the whole thing up for your business, train you on it, and provide ongoing support. Think of it as getting the software AND the team to run it.",
  },
  {
    q: "How is this different from Jobber, Housecall Pro, or ServiceTitan?",
    a: "Those platforms give you the software and say \"figure it out.\" We give you the software AND we build it out for your business — your pipeline stages, your follow-up sequences, your invoice templates, your automations. Plus, you get ongoing support every month. It's like the difference between a gym membership and a gym membership with a personal trainer.",
  },
  {
    q: "How fast can I get up and running?",
    a: "Most clients are fully live within 5–10 business days. We move fast because we've done this for multiple service businesses and know exactly what to build.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None. We build everything, walk you through it on a recorded training call, and you can reach out anytime you have a question. If you can send a text message, you can use this system.",
  },
  {
    q: "What does the monthly fee cover?",
    a: "The monthly fee covers your software platform, hosting, ongoing support, and access to our team. Think of it like paying for a part-time office manager — except it costs a fraction of what you'd pay an employee and the system works 24/7.",
  },
  {
    q: "Can I add marketing or a website later?",
    a: "Yes. Once your Business OS is live, adding marketing (Meta Ads, Google PPC, SEO) or a custom website is seamless because everything feeds into the same system. Most clients start with the OS and add marketing once they see how well the system captures and manages leads.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts. We keep clients because the system works, not because of a contract.",
  },
];

const FAQSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="faq" className="section-padding">
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
