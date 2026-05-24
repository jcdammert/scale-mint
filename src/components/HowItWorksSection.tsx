"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const steps = [
  {
    num: "01",
    title: "We Talk",
    description:
      "20-minute call. You tell us how the business runs day to day — where leads come in, where they fall through, what eats your time. We tell you straight if it's a fit.",
  },
  {
    num: "02",
    title: "We Build the System",
    description:
      "We configure the whole platform around how your crew actually operates — pipeline, follow-up sequences, website, GBP, social posting. You don't touch a setting. Live in 5–10 business days.",
  },
  {
    num: "03",
    title: "You Run the Jobs",
    description:
      "Leads get caught. Follow-ups go out. Reviews come in. You show up and do the work. When you're ready to add ads or scale crews, the system absorbs the volume.",
  },
];

const HowItWorksSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="how-it-works" className="section-padding section-alt">
      <div className="container mx-auto">
        <motion.h2
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          From First Call to Live System{" "}
          <span className="text-gradient">in 5–10 Days.</span>
        </motion.h2>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="absolute top-10 left-[16.66%] right-[16.66%] hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-card">
                <span className="font-heading text-2xl font-bold text-primary">
                  {step.num}
                </span>
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
