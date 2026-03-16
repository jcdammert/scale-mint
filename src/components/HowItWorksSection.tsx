"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description: "You tell us what's slowing you down. We map out exactly how to fix it.",
  },
  {
    num: "02",
    title: "We Build It Fast",
    description: "Your custom AI system is designed, built, and tested in under 7 days.",
  },
  {
    num: "03",
    title: "You Focus on Growth",
    description: "The busywork runs itself while you focus on scaling, selling, and serving customers.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          From Idea to Live System{" "}
          <span className="text-gradient">in Days.</span>
        </motion.h2>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute top-10 left-[16.66%] right-[16.66%] hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-card">
                <span className="font-heading text-2xl font-bold text-primary">{step.num}</span>
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
