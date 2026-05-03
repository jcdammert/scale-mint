"use client";

import { motion } from "framer-motion";
import { PhoneOff, Search, TrendingDown } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const problems = [
  {
    icon: PhoneOff,
    title: "Leads are going cold while you're on the job.",
    description:
      "Someone calls while you're on a roof or under a sink. You forget to call back. By the time you do, they hired the next guy who answered. You don't have a sales problem — you have a follow-up problem.",
  },
  {
    icon: Search,
    title: "Homeowners Google you and aren't impressed.",
    description:
      "No recent reviews. No posts. An old website or no site at all. Even your word-of-mouth referrals look you up and bounce to a competitor who looks more legit.",
  },
  {
    icon: TrendingDown,
    title: "You ran ads and the leads went nowhere.",
    description:
      "You spent on Meta or Google ads and got the leads. But no one followed up fast enough, nothing got tracked, and most of them ghosted. The ads weren't broken. The backend was.",
  },
];

const ProblemSection = () => {
  const isMobile = useIsMobile();
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <motion.h2
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          Where the Money <span className="text-gradient">Quietly Leaks Out.</span>
        </motion.h2>

        <div className="mt-8 md:mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <p.icon size={24} className="text-primary" />
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
