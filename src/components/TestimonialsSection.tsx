"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We were spending 3 hours a day on scheduling alone. Scale Mint automated the whole thing — now customers book themselves, get reminders, and we just show up and do the work.",
    name: "Marcus R.",
    business: "Owner, Premier Plumbing Co.",
    rating: 5,
  },
  {
    quote: "Our follow-up rate went from 30% to 95% overnight. The AI handles every lead, sends quotes, and follows up until they book. We doubled our monthly revenue in 60 days.",
    name: "Sarah L.",
    business: "Founder, Sparkle Clean Services",
    rating: 5,
  },
  {
    quote: "Patient intake used to be a nightmare — stacks of forms, manual data entry. Now it's all automated. Patients fill everything out before they walk in. My front desk team finally has time to breathe.",
    name: "Dr. James K.",
    business: "Bright Smile Dental",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          Business Owners Who Got Their{" "}
          <span className="text-gradient">Time Back.</span>
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
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
