"use client";

import { motion } from "framer-motion";
import { PhoneOff, Search, TrendingDown } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const problems = [
  {
    icon: PhoneOff,
    title: "You're losing jobs you should be closing",
    description:
      "Someone calls while you're on a job site. You forget to follow up. By the time you text back, they hired someone else. It's not that you're bad at sales — you just don't have a system doing it for you.",
  },
  {
    icon: Search,
    title: "People Google you and it doesn't look great",
    description:
      "No reviews, no posts, outdated website or no website at all. You're losing credibility before anyone even calls. Word-of-mouth leads check you out online and bounce to someone who looks more legit.",
  },
  {
    icon: TrendingDown,
    title: "You've tried running ads but it didn't work",
    description:
      "You spent money on Facebook ads or Google ads and got leads, but there was no system to catch them, follow up, or close them. The ads weren't the problem — the backend was.",
  },
];

const ProblemSection = () => {
  const isMobile = useIsMobile();
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          Sound <span className="text-gradient">Familiar?</span>
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
