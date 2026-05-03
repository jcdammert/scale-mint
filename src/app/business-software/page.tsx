"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  FileText,
  CalendarCheck,
  Zap,
  PenTool,
  Bot,
  PhoneOff,
  Mail,
  Star,
  MapPin,
  Share2,
  MessageSquarePlus,
  PhoneCall,
  Tag,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
import HomeStats from "@/components/HomeStats";
import ScaleMintDashboard from "@/components/ui/ScaleMintDashboard";

const features = [
  {
    icon: Users,
    title: "CRM & Pipeline Management",
    description:
      "See every lead, every job, every follow-up in one place. Nothing falls through the cracks.",
  },
  {
    icon: FileText,
    title: "Invoicing & Estimates",
    description:
      "Send professional invoices and estimates in seconds. Get paid faster.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Scheduling",
    description:
      "Customers book directly on your calendar. No back-and-forth texting.",
  },
  {
    icon: Zap,
    title: "Workflow Automations",
    description:
      "Follow-ups, reminders, review requests \u2014 all happen automatically without you lifting a finger.",
  },
  {
    icon: PenTool,
    title: "Contracts & E-Signatures",
    description:
      "Send contracts and get them signed digitally. No printing, no scanning.",
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    description:
      "A smart chatbot on your website that answers questions and captures leads 24/7.",
  },
  {
    icon: PhoneOff,
    title: "Missed Call Text-Back",
    description:
      "When you can\u2019t answer, an automatic text goes out so you never lose that lead.",
  },
  {
    icon: Mail,
    title: "SMS & Email Campaigns",
    description:
      "Send promotions, updates, and follow-ups to your entire customer list in one click.",
  },
  {
    icon: Star,
    title: "Review Management",
    description:
      "See all your Google reviews in one place. Respond easily. Build your reputation.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description:
      "We optimize your GBP so you rank higher on Google Maps.",
  },
  {
    icon: Share2,
    title: "Weekly Social Media Posting",
    description:
      "We post for you on Facebook, Instagram, and Google Business every week.",
  },
  {
    icon: MessageSquarePlus,
    title: "Review Request Automation",
    description:
      "After every job, an automatic review request goes out. Your reviews stack up without you asking.",
  },
];

const steps = [
  {
    num: "01",
    title: "We learn how your business runs",
    description:
      "Free strategy call to understand your workflow, services, and what you need.",
  },
  {
    num: "02",
    title: "We build your entire system",
    description:
      "CRM, automations, templates, everything \u2014 configured for your specific business. Live in 5\u201310 days.",
  },
  {
    num: "03",
    title: "We train you and hand it over",
    description:
      "Recorded walkthrough call so you know exactly how everything works. You\u2019re in control.",
  },
];

export default function BusinessSoftwarePage() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Back Link */}
      <div className="container mx-auto px-4 pt-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-8 pb-6 md:pb-10">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            Your All-in-One Business{" "}
            <span className="text-gradient">Operating System.</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Stop running your business out of your head. We build your entire
            business backend on one platform &mdash; CRM, invoicing, scheduling,
            automations, contracts, and more. All connected. All done for you.
          </motion.p>
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <a href="/book" className="block w-full sm:w-auto sm:inline-block">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base"
              >
                Book a Free Strategy Call
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── CLIENT RESULTS ─── */}
      <HomeStats />

      {/* ─── DASHBOARD PREVIEW ─── */}
      <section className="px-4 pt-6 md:pt-10 pb-12 md:pb-20">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-8 md:mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Your Sales Pipeline
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Track Every Customer.{" "}
              <span className="text-gradient">No Lead Slips Through.</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Every lead in one place — see exactly where each customer is in
              your sales process, from first call to job booked.
            </p>
          </motion.div>
          <ScaleMintDashboard />
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Everything You Need to Run Your Business.{" "}
              <span className="text-gradient">One Platform.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every feature is set up for you and connected to everything else.
              No patchwork. No manual work.
            </p>
          </motion.div>

          <div className="mt-8 md:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-glass p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h4 className="mb-2 font-heading text-base font-semibold text-foreground">
                  {f.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE SET IT UP ─── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.h2
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
          >
            We Build It.{" "}
            <span className="text-gradient">You Use It.</span>
          </motion.h2>

          <div className="relative mt-14 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-10 left-[16.66%] right-[16.66%] hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 md:block" />

            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-card">
                  <span className="font-heading text-2xl font-bold text-primary">
                    {s.num}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE DUAL CTA ─── */}
      <section className="px-4 pt-6 pb-16 md:pt-10 md:pb-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Two Ways to Start
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Pick Your <span className="text-gradient">Next Move</span>
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Card 1 — Strategy Call (primary) */}
            <InteractiveCTACard
              isMobile={isMobile}
              icon={PhoneCall}
              eyebrow="Talk to us"
              title="See how it works for your business."
              description="Free 20-minute strategy call. We'll walk through your sales process live and show you exactly how Scale Mint fits."
              cta="Book a Free Strategy Call"
              href="/book"
              variant="primary"
              accent="rgba(74, 222, 128, 0.18)"
            />

            {/* Card 2 — Pricing */}
            <InteractiveCTACard
              isMobile={isMobile}
              icon={Tag}
              eyebrow="Just looking?"
              title="See what it costs."
              description="Transparent pricing for the platform plus done-for-you setup. No hidden fees, no surprises."
              cta="See Pricing"
              href="/pricing"
              variant="secondary"
              accent="rgba(74, 222, 128, 0.10)"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── Interactive CTA card with mouse-following spotlight + 3D tilt ─── */
type InteractiveCTACardProps = {
  isMobile: boolean;
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  variant: "primary" | "secondary";
  accent: string;
};

function InteractiveCTACard({
  isMobile,
  icon: Icon,
  eyebrow,
  title,
  description,
  cta,
  href,
  variant,
  accent,
}: InteractiveCTACardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    ref.current.style.setProperty("--mx", `${x * 100}%`);
    ref.current.style.setProperty("--my", `${y * 100}%`);
    ref.current.style.setProperty("--rx", `${(y - 0.5) * -5}deg`);
    ref.current.style.setProperty("--ry", `${(x - 0.5) * 5}deg`);
    ref.current.style.setProperty("--lift", "1");
  }

  function handleLeave() {
    if (!ref.current) return;
    ref.current.style.setProperty("--mx", "50%");
    ref.current.style.setProperty("--my", "50%");
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
    ref.current.style.setProperty("--lift", "0");
  }

  const isPrimary = variant === "primary";

  return (
    <motion.div
      initial={isMobile ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: isPrimary ? 0 : 0.1 }}
      style={{ perspective: 1100 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative h-full overflow-hidden rounded-2xl"
        style={
          {
            "--mx": "50%",
            "--my": "50%",
            "--rx": "0deg",
            "--ry": "0deg",
            "--lift": "0",
            transform:
              "rotateX(var(--rx)) rotateY(var(--ry)) translateY(calc(var(--lift) * -2px))",
            transition: "transform 0.18s ease-out",
            background: `radial-gradient(circle 280px at var(--mx) var(--my), ${accent}, transparent 75%), hsl(230 12% 10% / 0.65)`,
            border: isPrimary
              ? "1px solid rgba(74,222,128,0.25)"
              : "1px solid rgba(255,255,255,0.08)",
            boxShadow: isPrimary
              ? "0 0 40px rgba(74,222,128,0.08)"
              : "0 4px 20px rgba(0,0,0,0.2)",
          } as React.CSSProperties
        }
      >
        {/* Animated border highlight (primary only) */}
        {isPrimary && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle 200px at var(--mx) var(--my), rgba(74,222,128,0.25), transparent 60%)",
              maskImage:
                "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: 1,
            }}
          />
        )}

        <div className="relative p-7 md:p-8 flex flex-col h-full">
          {/* Icon + eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                isPrimary
                  ? "bg-primary/15 border border-primary/30"
                  : "bg-white/[0.04] border border-white/10"
              } transition-transform duration-300 group-hover:scale-110`}
            >
              <Icon
                size={18}
                className={isPrimary ? "text-primary" : "text-muted-foreground"}
              />
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles
                size={11}
                className={isPrimary ? "text-primary" : "text-muted-foreground/60"}
              />
              <span
                className={`text-[10px] font-semibold uppercase tracking-widest ${
                  isPrimary ? "text-primary" : "text-muted-foreground/60"
                }`}
              >
                {eyebrow}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-tight mb-3">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground mb-7 flex-1">
            {description}
          </p>

          {/* CTA */}
          <a href={href} className="block w-full">
            <Button
              variant={isPrimary ? "cta" : "hero-outline"}
              size="lg"
              className={`w-full px-6 py-5 text-sm md:text-base ${
                isPrimary ? "animate-glow-pulse" : ""
              }`}
            >
              {cta}
              <ArrowRight size={16} />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
