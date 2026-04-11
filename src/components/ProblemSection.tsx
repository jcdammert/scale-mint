"use client";

import { motion } from "framer-motion";
import { CreditCard, UserX, Wrench } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const problems = [
  {
    icon: CreditCard,
    title: "You're paying for tools you barely use",
    description:
      "Jobber, Housecall Pro, Calendly, Mailchimp, DocuSign — five different logins, five different bills, and none of them talk to each other. You need one system that does it all.",
  },
  {
    icon: UserX,
    title: "Leads are falling through the cracks",
    description:
      "Someone calls while you're on a job. You forget to follow up. By the time you text back, they already hired someone else. You don't have a system catching those leads for you.",
  },
  {
    icon: Wrench,
    title: "You know you need to modernize but don't have time to figure it out",
    description:
      "You've looked at CRMs. You've Googled \"best software for contractors.\" But you don't have 40 hours to learn a new platform. You need someone to just set it up and show you how it works.",
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
          You Didn&apos;t Start a Business to{" "}
          <span className="text-gradient">Fight With Software.</span>
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
