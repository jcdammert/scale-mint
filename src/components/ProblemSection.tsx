"use client";

import { motion } from "framer-motion";
import { Clock, Unplug, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "You're buried in repetitive tasks",
    description: "Scheduling, follow-ups, reminders, and paperwork eat your entire day.",
  },
  {
    icon: Unplug,
    title: "Your tools don't talk to each other",
    description: "You're copying info between apps, spreadsheets, and notebooks manually.",
  },
  {
    icon: TrendingUp,
    title: "You know you should be scaling",
    description: "But you're too stuck in the day-to-day to work ON the business instead of IN it.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          You Didn&apos;t Start a Business to{" "}
          <span className="text-gradient">Do Admin Work.</span>
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <p.icon size={24} className="text-primary" />
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
