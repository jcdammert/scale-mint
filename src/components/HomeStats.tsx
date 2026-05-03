"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Clock } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const stats = [
  {
    icon: Zap,
    value: "78%",
    label: "Buy from whoever responds first",
    sub: "Most inbound leads go with the business that answers first. Slow follow-up loses jobs you already paid to get. (Source: Lead Connect)",
  },
  {
    icon: TrendingUp,
    value: "100x",
    label: "Higher qualify rate at 5 minutes",
    sub: "Calling a new lead within 5 minutes is 100x more likely to qualify than calling at 30. (Source: Harvard Business Review)",
  },
  {
    icon: Clock,
    value: "47 hrs",
    label: "Industry-average response time",
    sub: "Most home service businesses take 1–2 days to follow up. Scale Mint clients reply in under a minute, every time.",
  },
];

const HomeStats = () => {
  const isMobile = useIsMobile();
  return (
    <section className="px-4 py-10 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            Industry Data
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Speed Decides Who{" "}
            <span className="text-gradient">Books the Job.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass p-6 md:p-7 transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <s.icon size={20} className="text-primary" />
              </div>
              <div className="font-heading text-5xl md:text-6xl font-bold leading-none">
                <span className="text-gradient">{s.value}</span>
              </div>
              <div className="mt-3 font-heading text-base font-semibold text-foreground">
                {s.label}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
