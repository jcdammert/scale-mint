"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const testimonials = [
  {
    quote: "We were losing jobs just from slow follow-up. Scale Mint set up the automations and now leads get a response right away without us doing anything. They also ran our Meta ads and we started getting consistent jobs coming in every week. It's made things a lot smoother.",
    name: "Randy",
    business: "Owner, Finesse Cleaning",
    rating: 5,
  },
  {
    quote: "Scale Mint set up our CRM and follow-up system and it just runs. On top of that they handled our Google and Meta ads — we went from slow weeks to having steady work booked out. We don't miss leads anymore.",
    name: "Juan Pablo G.",
    business: "Owner, JS Sealers",
    rating: 5,
  },
  {
    quote: "Scale Mint set up an AI receptionist that texts leads back the second they call. I used to miss jobs because I couldn't answer while I was on a job site. Now the AI handles it, qualifies them, and I just show up to do the work. Saves me hours every week.",
    name: "Patrick D.",
    business: "Owner, Pressure Cleaning Champion",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
          Business Owners Who Got Their{" "}
          <span className="text-gradient">Time Back.</span>
        </motion.h2>

        <div className="mt-8 md:mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
