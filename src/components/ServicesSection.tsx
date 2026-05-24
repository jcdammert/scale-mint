"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Globe,
  Sparkles,
  ArrowRight,
  Zap,
  Star,
  Search,
  TrendingUp,
  Phone,
  MapPin,
  Rocket,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";

const pillars = [
  {
    num: "01",
    icon: Zap,
    title: "Every Lead Answered. Every Lead Followed Up.",
    description:
      "Inbound leads get a reply within a minute — text, email, or both. Missed calls fire an instant text-back. Every lead lands in a pipeline you can actually see, and a sequence keeps following up until they book or tell you no. You close more of the leads you already pay to get.",
  },
  {
    num: "02",
    icon: Search,
    title: "An Online Presence That Looks Like a Real Business.",
    description:
      "When a homeowner Googles you after a referral, they find a professional website, real reviews, and a business that looks established. The system handles your online presence automatically — so you look like the obvious choice without lifting a finger.",
  },
  {
    num: "03",
    icon: Star,
    title: "Reviews That Stack Up After Every Job.",
    description:
      "When a job is marked complete, a review request goes out by text. Most clients pick up 5–10 new Google reviews in the first 60 days. Higher review count means higher local rankings — and homeowners pick the company with more 5-stars before they ever call.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Add Ads When You're Ready. Not Before.",
    description:
      "Once the pipeline catches every lead and the follow-up runs without you, ads actually pay off. Plug in Meta, Google, or local SEO and the system absorbs the volume. We don't sell ads to businesses whose backend isn't ready — that's how operators waste money on traffic that never converts.",
  },
];

const addOns = [
  {
    icon: Share2,
    title: "Meta Ads",
    description:
      "Facebook and Instagram campaigns built on top of your system. Every lead lands directly in your pipeline and triggers automatic follow-up.",
    note: "Custom quoted.",
    href: "/meta-ads",
  },
  {
    icon: TrendingUp,
    title: "Omnipresence SEO",
    description:
      "Show up on Google, Maps, AI search engines, and every local directory in your area. Built on top of your system so every inbound lead is captured automatically.",
    note: "Custom quoted.",
    href: "/seo",
  },
  {
    icon: Globe,
    title: "Custom Website",
    description:
      "Built to rank and built to convert. Every form submission drops straight into your CRM and triggers follow-up.",
    note: "Custom quoted.",
    href: "/services/ai-websites",
  },
  {
    icon: Sparkles,
    title: "AI Employee",
    description:
      "Answers your phone, replies to texts, qualifies the lead, and books the job — even when you're on a roof at 7pm.",
    note: "Custom quoted.",
    href: "/services/ai-voice",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Custom illustrated visual per pillar
// ─────────────────────────────────────────────────────────────────────────────
function PillarVisual({ idx }: { idx: number }) {
  if (idx === 0) {
    // Pillar 1: Sales Process — instant reply chat + speed badge
    return (
      <div className="relative w-full max-w-sm">
        <div className="card-glass p-5 shadow-2xl">
          <div className="mb-3 flex items-center gap-2 border-b border-border/40 pb-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
              <Phone size={14} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-foreground">New Lead</div>
              <div className="text-[10px] text-muted-foreground">Just now</div>
            </div>
            <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
              Auto
            </span>
          </div>
          <div className="space-y-2">
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-xs text-primary-foreground">
              Hey Mike! Got your request — what&apos;s the best time to chat?
            </div>
            <div className="text-[10px] text-muted-foreground text-right">Sent in 12s</div>
            <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-secondary/40 px-3 py-2 text-xs text-foreground">
              Tomorrow at 10am works
            </div>
          </div>
        </div>
        {/* Speed badge */}
        <div className="absolute -top-3 -right-3 flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 backdrop-blur-md shadow-[0_0_25px_rgba(74,222,128,0.25)]">
          <Zap size={12} className="text-primary" />
          <span className="text-[10px] font-bold text-primary">&lt; 60s response</span>
        </div>
        <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/5 blur-2xl" />
      </div>
    );
  }

  if (idx === 1) {
    // Pillar 2: Online Presence — Google search result mockup
    return (
      <div className="relative w-full max-w-sm">
        <div className="card-glass p-5 shadow-2xl">
          {/* Search bar */}
          <div className="mb-4 flex items-center gap-2 rounded-full border border-border/60 bg-secondary/30 px-3 py-2">
            <Search size={12} className="text-muted-foreground" />
            <span className="text-[11px] text-muted-foreground">pressure washing near me</span>
          </div>
          {/* GBP card */}
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-3.5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60">
                <MapPin size={18} className="text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-foreground">Premier Pressure Washing</div>
                <div className="mt-1 flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted-foreground">5.0 · 142 reviews</span>
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground">Open · Closes 6 PM</div>
              </div>
            </div>
            {/* Latest post indicator */}
            <div className="mt-3 flex items-center gap-2 rounded-md bg-secondary/40 px-2 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] text-foreground">Posted today: &quot;New driveway special&quot;</span>
            </div>
          </div>
        </div>
        <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/5 blur-2xl" />
      </div>
    );
  }

  if (idx === 2) {
    // Pillar 3: Reputation — stacking 5-star reviews
    return (
      <div className="relative w-full max-w-sm space-y-3">
        {/* Top notification */}
        <div className="card-glass relative overflow-hidden p-3.5 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20">
              <Star size={16} className="fill-primary text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-foreground">New 5-star review</div>
              <div className="text-[10px] text-muted-foreground">Sarah K. · 2 minutes ago</div>
            </div>
            <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold text-primary">
              +1
            </span>
          </div>
          {/* Glow line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        {/* Stacked review cards */}
        {[
          { name: "Mike J.", text: "Best service in town. Booked again next month.", days: "yesterday" },
          { name: "Lisa T.", text: "Crew was professional and on time. 10/10.", days: "2 days ago" },
          { name: "Carlos R.", text: "Fair pricing, great work. Highly recommend.", days: "5 days ago" },
        ].map((r, i) => (
          <div
            key={r.name}
            className="card-glass p-3.5 shadow-md"
            style={{ marginLeft: `${(i + 1) * 12}px`, opacity: 1 - i * 0.15 }}
          >
            <div className="mb-1 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={9} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-[10px] font-semibold text-foreground">{r.name}</span>
              <span className="ml-auto text-[9px] text-muted-foreground">{r.days}</span>
            </div>
            <p className="text-[11px] text-muted-foreground line-clamp-1">{r.text}</p>
          </div>
        ))}
        <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/5 blur-2xl" />
      </div>
    );
  }

  // Pillar 4: Ready to Scale — growth chart + ads toggle
  return <Pillar4Visual />;
}

function Pillar4Visual() {
  const [adsOn, setAdsOn] = useState(true);
  // Bars dim when ads off
  const baseBars = [20, 28, 24, 38, 35, 52, 48, 70, 85, 95];
  const dimBars = [20, 22, 19, 26, 24, 28, 25, 32, 30, 34];
  const bars = adsOn ? baseBars : dimBars;

  return (
    <div className="relative w-full max-w-sm space-y-3">
      <div className="card-glass p-5 shadow-2xl">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              This month
            </div>
            <div className="font-heading text-2xl font-bold text-foreground transition-all">
              {adsOn ? "$84,200" : "$31,400"}
            </div>
          </div>
          <div
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-all ${
              adsOn
                ? "bg-primary/15 text-primary"
                : "bg-muted/40 text-muted-foreground"
            }`}
          >
            <TrendingUp size={11} />
            <span className="text-[10px] font-bold">
              {adsOn ? "+218%" : "+12%"}
            </span>
          </div>
        </div>
        {/* Mini bar chart */}
        <div className="flex items-end gap-1.5 h-16">
          {bars.map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t transition-all duration-500 ${
                adsOn
                  ? "bg-gradient-to-t from-primary/30 to-primary"
                  : "bg-gradient-to-t from-muted/40 to-muted-foreground/40"
              }`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[9px] text-muted-foreground">
          <span>Wk 1</span>
          <span>Wk 5</span>
          <span>Wk 10</span>
        </div>
      </div>
      {/* Ads toggle card — clickable */}
      <button
        type="button"
        onClick={() => setAdsOn((v) => !v)}
        aria-pressed={adsOn}
        className="card-glass flex w-full items-center justify-between p-4 shadow-md transition-all hover:border-primary/30 cursor-pointer text-left"
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
              adsOn ? "bg-primary/15" : "bg-muted/30"
            }`}
          >
            <Megaphone
              size={16}
              className={adsOn ? "text-primary" : "text-muted-foreground"}
            />
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground">
              Ad campaigns
            </div>
            <div
              className={`text-[10px] transition-colors ${
                adsOn ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {adsOn ? "Running · $2.4k/wk" : "Paused · tap to turn on"}
            </div>
          </div>
        </div>
        <div
          className={`relative h-6 w-11 rounded-full transition-all duration-300 ${
            adsOn
              ? "bg-primary shadow-[0_0_15px_rgba(74,222,128,0.4)]"
              : "bg-muted/50"
          }`}
        >
          <div
            className={`absolute top-0.5 h-5 w-5 rounded-full transition-all duration-300 ${
              adsOn
                ? "right-0.5 bg-primary-foreground"
                : "left-0.5 bg-muted-foreground"
            }`}
          />
        </div>
      </button>
      <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/5 blur-2xl" />
    </div>
  );
}

const ServicesSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="services" className="px-4 pt-4 pb-10 md:pt-8 md:pb-20">
      <div className="container mx-auto">
        {/* 4 Pillars — alternating zigzag */}
        <div className="relative max-w-6xl mx-auto space-y-14 md:space-y-24">
          {/* Vertical line on desktop */}
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/15 to-transparent md:block" />

          {pillars.map((p, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={p.num}
                initial={isMobile ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid items-center gap-8 md:gap-12 md:grid-cols-2 ${
                  isReversed ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Content side */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 mb-4">
                    <p.icon size={14} className="text-primary" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {p.num} · Pillar
                    </span>
                  </div>
                  <h3 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                    {p.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>

                {/* Visual side */}
                <div className="flex items-center justify-center">
                  <PillarVisual idx={i} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* See Plans CTA */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="/pricing">
            <Button
              variant="hero"
              size="lg"
              className="px-6 py-5 text-sm sm:px-8 sm:py-6 sm:text-base"
            >
              See Plans & Pricing
              <ArrowRight size={18} />
            </Button>
          </a>
        </motion.div>

        {/* Add-ons */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mx-auto max-w-2xl text-center"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Add-Ons That Plug Into{" "}
            <span className="text-gradient">the System.</span>
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            The platform is the foundation. When you&apos;re ready for more, these connect into the same system instead of running on the side.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {addOns.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.href}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-glass p-6 flex flex-col transition-all duration-300 hover:border-primary/30 group cursor-pointer"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                <a.icon size={20} className="text-primary" />
              </div>
              <h4 className="mb-2 font-heading text-base font-semibold text-foreground">
                {a.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3 flex-1">
                {a.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <p className="text-xs font-medium text-primary">{a.note}</p>
                <ArrowRight size={14} className="text-primary/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
