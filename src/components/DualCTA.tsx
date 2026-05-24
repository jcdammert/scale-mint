"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Tag, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

type CardConfig = {
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
};

type DualCTAProps = {
  heading?: React.ReactNode;
  primary?: Partial<CardConfig>;
  secondary?: Partial<CardConfig>;
  /** Hide the second card if not relevant on this page */
  singleCard?: boolean;
};

const DEFAULT_PRIMARY: CardConfig = {
  icon: PhoneCall,
  eyebrow: "Talk to us",
  title: "See how it works for your business.",
  description:
    "20-minute call. We walk through your sales process, show you how the system runs, and tell you straight if it fits.",
  cta: "Book a Strategy Call",
  href: "/book",
};

const DEFAULT_SECONDARY: CardConfig = {
  icon: Tag,
  eyebrow: "Just looking",
  title: "See what it costs.",
  description:
    "Plans, what's included, and what setup runs. No hidden fees.",
  cta: "See Pricing",
  href: "/pricing",
};

export default function DualCTA({
  heading,
  primary,
  secondary,
  singleCard = false,
}: DualCTAProps) {
  const isMobile = useIsMobile();
  const primaryConfig = { ...DEFAULT_PRIMARY, ...primary };
  const secondaryConfig = { ...DEFAULT_SECONDARY, ...secondary };

  return (
    <section className="px-4 pt-4 pb-12 md:pt-10 md:pb-24">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {heading ?? (
              <>
                Pick Your <span className="text-gradient">Next Move</span>
              </>
            )}
          </h2>
        </motion.div>

        <div
          className={`grid gap-5 ${
            singleCard ? "max-w-xl mx-auto" : "md:grid-cols-2"
          }`}
        >
          <SpotlightCard
            isMobile={isMobile}
            config={primaryConfig}
            variant="primary"
            accent="rgba(74, 222, 128, 0.18)"
          />
          {!singleCard && (
            <SpotlightCard
              isMobile={isMobile}
              config={secondaryConfig}
              variant="secondary"
              accent="rgba(74, 222, 128, 0.10)"
              delay={0.1}
            />
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Interactive card with mouse-following spotlight + 3D tilt ─── */
function SpotlightCard({
  isMobile,
  config,
  variant,
  accent,
  delay = 0,
}: {
  isMobile: boolean;
  config: CardConfig;
  variant: "primary" | "secondary";
  accent: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { icon: Icon, eyebrow, title, description, cta, href } = config;

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
      transition={{ delay }}
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
        <div className="relative p-6 sm:p-7 md:p-8 flex flex-col h-full">
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
