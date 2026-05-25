"use client";

import { useEffect } from "react";

// --- Animation Setup --------------------------------------------------------
// On mount, observe all .fade-section elements and add visible classes on entry.

// --- Reusable Components ----------------------------------------------------

type CategoryType = "marketing" | "systems" | "automation" | "ai";

function CategoryBadge({ type }: { type: CategoryType }) {
  const styles: Record<CategoryType, { className: string; label: string }> = {
    marketing: {
      className:
        "bg-blue-500/20 text-blue-400 border border-blue-500/30",
      label: "Marketing",
    },
    systems: {
      className:
        "bg-orange-500/20 text-orange-400 border border-orange-500/30",
      label: "Systems",
    },
    automation: {
      className:
        "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
      label: "Automation",
    },
    ai: {
      className:
        "bg-purple-500/20 text-purple-400 border border-purple-500/30",
      label: "AI & Automation",
    },
  };
  const { className, label } = styles[type];
  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${className}`}
    >
      {label}
    </span>
  );
}

interface FeatureCardProps {
  title: string;
  desc: string;
  accent: string;
}

function FeatureCard({ title, desc, accent }: FeatureCardProps) {
  return (
    <div className="rounded-lg bg-[#1A1D23] border border-white/5 p-5 flex gap-4">
      <div className={`w-1 rounded-full shrink-0 ${accent}`} />
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

interface NumberedStepProps {
  num: number;
  title: string;
  desc: string;
  isLast?: boolean;
  accentColor?: string;
}

function NumberedStep({
  num,
  title,
  desc,
  isLast = false,
  accentColor = "bg-primary/20 border-primary/40 text-primary",
}: NumberedStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-sm shrink-0 ${accentColor}`}
        >
          {num}
        </div>
        {!isLast && <div className="w-px flex-1 bg-white/10 mt-2" />}
      </div>
      <div className="pb-8">
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="fade-section px-5 py-12 max-w-2xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
      {children}
    </section>
  );
}

// --- Page --------------------------------------------------------------------

export default function DemoPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("!opacity-100", "!translate-y-0");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white font-body overflow-x-hidden">

      {/* -- 1. Hero ------------------------------------------------------- */}
      <SectionWrapper>
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Scale Mint" className="h-8 w-auto" />

          {/* Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-white">
            Here&apos;s What We Do and How It Works.
          </h1>

          {/* Subtext */}
          <p className="text-zinc-400 text-base leading-relaxed max-w-lg">
            A walkthrough of every service — what it is, how it works, and
            what it looks like for your business.
          </p>

          {/* Loom Placeholder */}
          <div className="w-full aspect-video rounded-2xl bg-[#1A1D23] border border-white/5 flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-zinc-500 text-sm">Overview video coming soon</p>
          </div>

          <p className="text-zinc-500 text-sm">
            Watch the overview above, or scroll to see everything we do.
          </p>
        </div>
      </SectionWrapper>

      {/* Divider */}
      <div className="w-full h-px bg-white/5" />

      {/* -- 2. Website Build ----------------------------------------------- */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <CategoryBadge type="marketing" />
            <h2 className="font-heading text-2xl font-bold text-white">
              Website Build
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              A professionally designed, conversion-focused website built
              specifically for your trade business — not a template, not a
              DIY builder. Built to rank, built to convert.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <FeatureCard
              title="Custom Design"
              accent="bg-blue-500"
              desc="Unique to your brand · Mobile-first layout · Fast load times · Clear calls-to-action on every page"
            />
            <FeatureCard
              title="SEO Foundation"
              accent="bg-blue-500"
              desc="Keyword-optimized pages · Local city targeting · Structured metadata · Google Search Console setup"
            />
            <FeatureCard
              title="Lead Capture"
              accent="bg-blue-500"
              desc="Contact forms connected to your CRM · Click-to-call buttons · Live chat widget option · Conversion tracking"
            />
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 3. Google Business Profile + Weekly Posts ----------------------- */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <CategoryBadge type="marketing" />
            <h2 className="font-heading text-2xl font-bold text-white">
              Google Business Profile + Weekly Posts
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your Google Business Profile is often the first thing customers
              see. We set it up right, keep it active, and make sure you show
              up when it matters.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <FeatureCard
              title="Profile Setup & Optimization"
              accent="bg-blue-500"
              desc="Complete profile build-out · Category and service selection · Photo uploads · Business description optimized for local search"
            />
            <FeatureCard
              title="Weekly Posts"
              accent="bg-blue-500"
              desc="Fresh content posted every week · Seasonal offers and job highlights · Keeps your profile active in Google's algorithm · Branded visuals"
            />
            <FeatureCard
              title="Citation Building"
              accent="bg-blue-500"
              desc="Consistent NAP across 50+ directories · Yelp, Bing, Apple Maps and more · Removes duplicate or incorrect listings · Boosts local pack rankings"
            />
            <FeatureCard
              title="LSA Setup"
              accent="bg-blue-500"
              desc="Google Guaranteed badge setup · License and insurance verification · Profile optimization for LSA · Ongoing bid management support"
            />
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 4. Google Local Service Ads ------------------------------------- */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <CategoryBadge type="marketing" />
            <h2 className="font-heading text-2xl font-bold text-white">
              Google Local Service Ads
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Pay only when a real customer calls or messages you. LSAs put
              you at the very top of Google with the &ldquo;Google
              Guaranteed&rdquo; badge.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <NumberedStep
              num={1}
              title="Account Setup & Verification"
              desc="We handle the full application, license upload, background check coordination, and Google Guaranteed badge activation."
            />
            <NumberedStep
              num={2}
              title="Profile & Budget Configuration"
              desc="Set service areas, job types, budget caps, and business hours so you only get calls you actually want."
            />
            <NumberedStep
              num={3}
              title="Go Live"
              desc="Your ad appears above all Google Ads and organic results. Customers call or message directly from the ad."
            />
            <NumberedStep
              num={4}
              title="Lead Dispute Management"
              desc="Bad leads cost you money. We track and dispute invalid leads on your behalf to protect your budget."
            />
            <NumberedStep
              num={5}
              title="Ongoing Optimization"
              desc="Weekly review of lead quality, bid adjustments, and category tuning to keep your cost-per-lead low."
              isLast
            />
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 5. Meta Ads + Video Creative ------------------------------------ */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <CategoryBadge type="marketing" />
            <h2 className="font-heading text-2xl font-bold text-white">
              Meta Ads + Video Creative
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Facebook and Instagram ads built around scroll-stopping video
              creative — targeting homeowners in your service area before
              they even start searching.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <NumberedStep
              num={1}
              title="Offer & Creative Strategy"
              desc="We build an irresistible offer for your market, then script and structure short-form video ads designed to convert cold audiences."
            />
            <NumberedStep
              num={2}
              title="Audience Targeting Setup"
              desc="Homeowner targeting by zip code, income, home age, and intent signals — dialed in to your service area."
            />
            <NumberedStep
              num={3}
              title="Campaign Launch"
              desc="Ad sets go live across Facebook and Instagram with A/B creative testing from day one."
            />
            <NumberedStep
              num={4}
              title="Lead Capture & CRM Integration"
              desc="Leads from Meta ads land directly in your pipeline — no manual work, instant notification."
            />
            <NumberedStep
              num={5}
              title="Weekly Reporting & Optimization"
              desc="Cost-per-lead tracking, creative swaps, audience expansion, and retargeting as the campaign matures."
              isLast
            />
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 6. Sales Pipeline ----------------------------------------------- */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <CategoryBadge type="systems" />
            <h2 className="font-heading text-2xl font-bold text-white">
              Sales Pipeline
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every lead tracked from first contact to closed job. No more
              losing leads in your texts or email. Your whole team sees
              exactly where every job stands.
            </p>
          </div>

          {/* Kanban Board */}
          <div className="overflow-x-auto -mx-5 px-5">
            <div className="flex gap-3 w-max pb-2">
              {[
                {
                  label: "New Lead",
                  color: "bg-blue-400",
                  leads: ["James T.", "Maria K."],
                  desc: "Fresh inquiries, not yet contacted",
                },
                {
                  label: "Contacted",
                  color: "bg-yellow-400",
                  leads: ["Rick M.", "Sandra P."],
                  desc: "Reached out, waiting on response",
                },
                {
                  label: "Quote Sent",
                  color: "bg-orange-400",
                  leads: ["Derek B.", "Lisa C."],
                  desc: "Estimate delivered, decision pending",
                },
                {
                  label: "Closed",
                  color: "bg-emerald-400",
                  leads: ["Tom A.", "Jen W."],
                  desc: "Job won, scheduled or complete",
                },
                {
                  label: "Follow Up",
                  color: "bg-purple-400",
                  leads: ["Chris N.", "Amy V."],
                  desc: "Nurture until they're ready",
                },
              ].map((col) => (
                <div
                  key={col.label}
                  className="w-52 shrink-0 rounded-xl bg-[#1A1D23] border border-white/5 p-4 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${col.color}`} />
                    <span className="text-xs font-semibold text-white uppercase tracking-wide">
                      {col.label}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {col.leads.map((lead) => (
                      <div
                        key={lead}
                        className="rounded-lg bg-white/5 px-3 py-2 text-sm text-zinc-300"
                      >
                        {lead}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-zinc-500 italic leading-snug">
                    {col.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 7. Subscription / Recurring Service Setup ----------------------- */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <CategoryBadge type="systems" />
            <h2 className="font-heading text-2xl font-bold text-white">
              Subscription &amp; Recurring Service Setup
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Turn one-time customers into recurring revenue. We build the
              system so clients can sign up for ongoing services — and stay
              locked in month after month.
            </p>
          </div>

          {/* Callout */}
          <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 px-5 py-4">
            <p className="text-amber-300 text-sm font-medium leading-relaxed">
              Recurring clients are your most valuable — this system keeps
              them locked in.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <FeatureCard
              title="Membership Plan Builder"
              accent="bg-orange-500"
              desc="Custom service tiers · Seasonal plan options · Annual vs monthly billing · Easy client enrollment flow"
            />
            <FeatureCard
              title="Automated Billing"
              accent="bg-orange-500"
              desc="Stripe or Square integration · Auto-charge on renewal · Failed payment recovery sequences · Invoice delivery"
            />
            <FeatureCard
              title="Service Scheduling Integration"
              accent="bg-orange-500"
              desc="Recurring jobs auto-scheduled in your calendar · Technician assignment · Reminder texts to clients · Job completion tracking"
            />
            <FeatureCard
              title="Retention Automations"
              accent="bg-orange-500"
              desc="Pre-renewal reminders · Win-back sequences for cancellations · Annual plan upgrade prompts · Loyalty rewards messaging"
            />
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 8. Automated Follow-Up Sequences -------------------------------- */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <CategoryBadge type="automation" />
            <h2 className="font-heading text-2xl font-bold text-white">
              Automated Follow-Up Sequences
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Most businesses lose leads because they never follow up fast
              enough — or at all. Our sequences respond instantly and keep
              following up until the job is booked.
            </p>
          </div>

          {/* Timeline */}
          <div className="flex flex-col">
            {[
              {
                time: "0 min",
                title: "Instant Confirmation",
                desc: 'Lead submits a form or calls in — they immediately receive: "Got it! We\'ll be in touch shortly." Stops them from calling a competitor.',
              },
              {
                time: "1 min",
                title: "Personalized Intro Text",
                desc: "First SMS sent with your business name, what they inquired about, and a direct link to book or reply.",
              },
              {
                time: "5 min",
                title: "Follow-Up Call Trigger",
                desc: "Your CRM flags the lead for an immediate call attempt. If no answer, it moves to the next automated step.",
              },
              {
                time: "Day 1",
                title: "Email + SMS Nurture",
                desc: "Second touchpoint with social proof — a review, a before/after photo, or a simple offer reminder.",
              },
              {
                time: "Day 3",
                title: "Final Check-In",
                desc: "\"Still looking for help with [service]? We have availability this week.\" Last automated nudge before manual follow-up.",
              },
            ].map((item, i, arr) => (
              <div key={item.time} className="flex gap-4">
                {/* Left: time + line */}
                <div className="flex flex-col items-center min-w-[56px]">
                  <span className="text-emerald-400 text-xs font-bold whitespace-nowrap py-1">
                    {item.time}
                  </span>
                  {i < arr.length - 1 && (
                    <div className="w-px flex-1 bg-emerald-500/20 mt-1" />
                  )}
                </div>
                {/* Right: content */}
                <div className="pb-8 flex-1">
                  <h4 className="font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 9. Missed Call Text-Back ----------------------------------------- */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <CategoryBadge type="automation" />
            <h2 className="font-heading text-2xl font-bold text-white">
              Missed Call Text-Back
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every missed call is a potential lost job. This automation
              fires the second you miss a call — so you never lose a hot
              lead to a competitor who picked up.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <NumberedStep
              num={1}
              title="Call Missed"
              desc="A customer calls your business line and you don't answer — maybe you're on a job, on another call, or after hours."
              accentColor="bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
            />
            <NumberedStep
              num={2}
              title="Instant Text Sent"
              desc={"\"Hey, it's [Business Name]! Sorry we missed your call — what can we help you with today?\" Sent within 60 seconds."}
              accentColor="bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
            />
            <NumberedStep
              num={3}
              title="Two-Way Conversation Starts"
              desc="The customer replies, your team sees it in the CRM inbox, and can respond directly from the app or desktop."
              accentColor="bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
            />
            <NumberedStep
              num={4}
              title="Booking Link Offered"
              desc="If they're interested, a scheduling link is automatically included in the follow-up — no phone tag needed."
              accentColor="bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
            />
            <NumberedStep
              num={5}
              title="Lead Logged in Pipeline"
              desc="The contact is automatically added to your CRM with the source tagged as 'Missed Call' for tracking and follow-up."
              accentColor="bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
              isLast
            />
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 10. Review Automation -------------------------------------------- */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <CategoryBadge type="automation" />
            <h2 className="font-heading text-2xl font-bold text-white">
              Review Automation
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Reviews are your most powerful sales tool. We automate the
              entire process so every happy customer gets asked at the
              perfect moment.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <NumberedStep
              num={1}
              title="Job Marked Complete"
              desc="Technician closes the job in the CRM or you update the pipeline — this triggers the review sequence automatically."
            />
            <NumberedStep
              num={2}
              title="SMS Review Request Sent"
              desc={"A friendly, personalized text goes out within minutes: \"Thanks for choosing us! If you're happy with the work, we'd love a quick Google review.\""}
            />
            <NumberedStep
              num={3}
              title="Direct Link to Google"
              desc="One tap takes them straight to your Google review page — no searching, no friction, just a fast star rating."
            />
            <NumberedStep
              num={4}
              title="Follow-Up if No Response"
              desc="If they don't leave a review in 48 hours, a polite second request goes out automatically. No manual effort required."
            />
            <NumberedStep
              num={5}
              title="Review Monitoring & Alerts"
              desc="New reviews trigger an alert to your team. Negative reviews surface immediately so you can respond fast and protect your reputation."
              isLast
            />
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 11. AI Text Assistant -------------------------------------------- */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <CategoryBadge type="ai" />
            <h2 className="font-heading text-2xl font-bold text-white">
              AI Text Assistant
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              An AI that handles your inbound text conversations — qualifying
              leads, answering questions, and booking appointments while
              you&apos;re on the job.
            </p>
          </div>

          {/* Callout */}
          <div className="rounded-xl bg-purple-500/10 border border-purple-500/20 px-5 py-4">
            <p className="text-purple-300 text-sm font-medium leading-relaxed">
              Lead comes in, AI responds, you show up to a ready customer.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <FeatureCard
              title="24/7 Lead Response"
              accent="bg-purple-500"
              desc="Responds instantly to every inbound text · No delays, no missed leads · Trained on your services and FAQs · Sounds like your business, not a bot"
            />
            <FeatureCard
              title="Smart Qualification"
              accent="bg-purple-500"
              desc="Asks the right questions upfront · Collects job type, location, and timeline · Filters out time-wasters · Flags hot leads for immediate follow-up"
            />
            <FeatureCard
              title="Appointment Booking"
              accent="bg-purple-500"
              desc="Books directly into your calendar · Sends confirmation to the customer · Adds the job to your pipeline · Handles rescheduling automatically"
            />
            <FeatureCard
              title="Seamless Handoff"
              accent="bg-purple-500"
              desc="When a human is needed, AI alerts your team · Full conversation history in the CRM · No context lost · Easy to jump in and take over"
            />
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 12. AI Employee ------------------------------------------- */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <CategoryBadge type="ai" />
            <h2 className="font-heading text-2xl font-bold text-white">
              AI Employee
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              A real-sounding AI that answers your phones — handles inbound
              calls, qualifies leads, and books appointments without you
              lifting a finger.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <NumberedStep
              num={1}
              title="Call Comes In"
              desc="Customer calls your business number. The AI picks up instantly — no hold music, no voicemail."
              accentColor="bg-purple-500/20 border-purple-500/40 text-purple-400"
            />
            <NumberedStep
              num={2}
              title="Natural Conversation"
              desc="The AI greets them by your business name, asks what they need, and handles common questions naturally without sounding robotic."
              accentColor="bg-purple-500/20 border-purple-500/40 text-purple-400"
            />
            <NumberedStep
              num={3}
              title="Lead Qualification"
              desc="Collects service type, address, preferred timing, and any other info you need before a quote. Filters low-quality or out-of-area calls."
              accentColor="bg-purple-500/20 border-purple-500/40 text-purple-400"
            />
            <NumberedStep
              num={4}
              title="Appointment Booking or Transfer"
              desc="Books directly into your calendar, or transfers hot leads to you live if you're available."
              accentColor="bg-purple-500/20 border-purple-500/40 text-purple-400"
            />
            <NumberedStep
              num={5}
              title="Summary Sent to CRM"
              desc="After every call, a full transcript and lead summary is logged in your pipeline automatically — ready for your team to action."
              accentColor="bg-purple-500/20 border-purple-500/40 text-purple-400"
              isLast
            />
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 13. Pricing — Business OS ---------------------------------------- */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl font-bold text-white">
              Pricing
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Everything your business needs to run efficiently — choose the
              plan that fits where you are right now.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Starter Plan */}
            <div className="rounded-2xl bg-[#1A1D23] border border-white/5 p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Starter
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white font-heading">
                    $197
                  </span>
                  <span className="text-zinc-400 text-sm">/mo</span>
                </div>
              </div>

              {[
                {
                  cat: "LEAD MANAGEMENT",
                  items: [
                    { label: "CRM + Contact Management", included: true },
                    { label: "Sales Pipeline", included: true },
                    { label: "Missed Call Text-Back", included: true },
                    { label: "AI Text Assistant", included: false },
                  ],
                },
                {
                  cat: "OPERATIONS",
                  items: [
                    { label: "Calendar & Scheduling", included: true },
                    { label: "Job Tracking", included: true },
                    { label: "Subscription Plan Builder", included: false },
                    { label: "Team Access (up to 2)", included: true },
                  ],
                },
                {
                  cat: "AI & AUTOMATION",
                  items: [
                    { label: "Automated Follow-Up Sequences", included: true },
                    { label: "Review Automation", included: true },
                    { label: "AI Employee", included: false },
                    { label: "AI Text Assistant", included: false },
                  ],
                },
                {
                  cat: "GROWTH & VISIBILITY",
                  items: [
                    { label: "Google Business Profile Setup", included: true },
                    { label: "Weekly GBP Posts", included: false },
                    { label: "Reporting Dashboard", included: true },
                    { label: "Priority Support", included: false },
                  ],
                },
              ].map((section) => (
                <div key={section.cat} className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    {section.cat}
                  </span>
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span
                        className={
                          item.included ? "text-primary" : "text-zinc-600"
                        }
                      >
                        {item.included ? "✓" : "—"}
                      </span>
                      <span
                        className={
                          item.included ? "text-zinc-300" : "text-zinc-600"
                        }
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Full Plan */}
            <div className="rounded-2xl bg-[#1A1D23] border border-primary/40 p-6 flex flex-col gap-5 relative">
              {/* Recommended Badge */}
              <div className="absolute -top-3 left-6">
                <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                  Recommended
                </span>
              </div>

              <div className="flex flex-col gap-1 pt-2">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Full
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white font-heading">
                    $347
                  </span>
                  <span className="text-zinc-400 text-sm">/mo</span>
                </div>
              </div>

              {[
                {
                  cat: "LEAD MANAGEMENT",
                  items: [
                    { label: "CRM + Contact Management", included: true },
                    { label: "Sales Pipeline", included: true },
                    { label: "Missed Call Text-Back", included: true },
                    { label: "AI Text Assistant", included: true },
                  ],
                },
                {
                  cat: "OPERATIONS",
                  items: [
                    { label: "Calendar & Scheduling", included: true },
                    { label: "Job Tracking", included: true },
                    { label: "Subscription Plan Builder", included: true },
                    { label: "Unlimited Team Access", included: true },
                  ],
                },
                {
                  cat: "AI & AUTOMATION",
                  items: [
                    { label: "Automated Follow-Up Sequences", included: true },
                    { label: "Review Automation", included: true },
                    { label: "AI Employee", included: true },
                    { label: "AI Text Assistant", included: true },
                  ],
                },
                {
                  cat: "GROWTH & VISIBILITY",
                  items: [
                    { label: "Google Business Profile Setup", included: true },
                    { label: "Weekly GBP Posts", included: true },
                    { label: "Reporting Dashboard", included: true },
                    { label: "Priority Support", included: true },
                  ],
                },
              ].map((section) => (
                <div key={section.cat} className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    {section.cat}
                  </span>
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="text-primary">✓</span>
                      <span className="text-zinc-300">{item.label}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 14. Pricing — Marketing ------------------------------------------ */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <CategoryBadge type="marketing" />
            <h2 className="font-heading text-2xl font-bold text-white">
              Marketing Add-Ons
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Add the channels that make sense for your market. All managed
              for you — no agencies to coordinate, no platforms to learn.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                channel: "Meta Ads (Facebook + Instagram)",
                covers:
                  "Campaign strategy, ad creative, audience targeting, A/B testing, lead capture, weekly optimization",
                price: "$497/mo management fee",
                note: "+ your ad spend (min. $500/mo recommended)",
              },
              {
                channel: "Google PPC (Search Ads)",
                covers:
                  "Keyword research, campaign build, ad copy, bid management, conversion tracking, monthly reporting",
                price: "$397/mo management fee",
                note: "+ your ad spend (min. $500/mo recommended)",
              },
              {
                channel: "SEO & Search Visibility",
                covers:
                  "On-page optimization, local citations, content strategy, Google Business Profile, monthly ranking reports",
                price: "From $397/mo",
                note: "Minimum 3-month commitment for meaningful results",
              },
            ].map((row) => (
              <div
                key={row.channel}
                className="rounded-xl bg-[#1A1D23] border border-white/5 p-5 flex flex-col gap-2"
              >
                <h4 className="font-semibold text-white text-sm">
                  {row.channel}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {row.covers}
                </p>
                <div className="flex flex-col gap-0.5 pt-1">
                  <span className="text-primary font-semibold text-sm">
                    {row.price}
                  </span>
                  <span className="text-zinc-500 text-xs">{row.note}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-3">
            <div className="rounded-xl bg-white/3 border border-white/5 px-5 py-4">
              <p className="text-zinc-400 text-sm leading-relaxed">
                <span className="text-white font-medium">Website: </span>
                Custom website builds start from $1,497 one-time. Included
                as part of the Full Business OS onboarding package.
              </p>
            </div>
            <div className="rounded-xl bg-purple-500/10 border border-purple-500/20 px-5 py-4">
              <p className="text-zinc-300 text-sm leading-relaxed">
                <span className="text-purple-300 font-semibold">
                  Add-On — AI Employee:{" "}
                </span>
                Full AI Employee + text assistant stack. Handles inbound calls,
                texts, qualifies leads, and books appointments. From
                $297/mo added to any Business OS plan.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 15. Setup Fee Overview ------------------------------------------ */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl font-bold text-white">
              Setup Fee Overview
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The setup fee covers everything we build for you before your
              first month begins — no ongoing charges until you&apos;re live.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-[#1A1D23] border border-white/5 p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Starter Plan
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white font-heading">
                    From $497
                  </span>
                  <span className="text-zinc-400 text-sm">setup</span>
                </div>
                <div className="flex gap-4 pt-1 text-xs text-zinc-500">
                  <span className="text-zinc-400">$197/mo ongoing</span>
                  <span>·</span>
                  <span>5–7 day build time</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#1A1D23] border border-primary/30 p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Full Plan
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white font-heading">
                    From $997
                  </span>
                  <span className="text-zinc-400 text-sm">setup</span>
                </div>
                <div className="flex gap-4 pt-1 text-xs text-zinc-500">
                  <span className="text-zinc-400">$347/mo ongoing</span>
                  <span>·</span>
                  <span>7–10 day build time</span>
                </div>
              </div>
            </div>
          </div>

          {/* What setup covers */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white text-sm">
              What the setup fee covers:
            </h3>
            {[
              {
                title: "CRM & Pipeline Configuration",
                desc: "Full account setup, custom stages, tags, and fields configured to your business. Team users added and trained.",
              },
              {
                title: "Automation Build & Testing",
                desc: "All follow-up sequences, missed call text-back, review requests, and triggers built, tested, and verified before launch.",
              },
              {
                title: "Integrations & Connections",
                desc: "Your website, phone number, Google Business Profile, email, and payment processor all connected and verified.",
              },
              {
                title: "Onboarding & Walkthrough",
                desc: "A live screen-share session walking you and your team through everything — so you're confident from day one.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-[#1A1D23] border border-white/5 p-4 flex gap-3"
              >
                <div className="w-1 rounded-full shrink-0 bg-primary/60" />
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 16. How Onboarding Works ---------------------------------------- */}
      <SectionWrapper>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl font-bold text-white">
              How Onboarding Works
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              From signed agreement to fully live system — here&apos;s exactly
              what happens and when.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <NumberedStep
              num={1}
              title="Agreement & Payment"
              desc="Sign the agreement, pay the setup fee, and you'll receive your onboarding form within 24 hours."
            />
            <NumberedStep
              num={2}
              title="Onboarding Form"
              desc="A quick form collecting your business details, branding assets, services, service area, and login credentials we'll need to get started."
            />
            <NumberedStep
              num={3}
              title="We Build"
              desc="Our team sets up your CRM, builds all automations, configures your pipeline, and connects your integrations. You don't do anything during this phase."
            />
            <NumberedStep
              num={4}
              title="Review & Approval"
              desc="We walk you through the full setup on a live call. You review everything, request any changes, and approve the build."
            />
            <NumberedStep
              num={5}
              title="You're Live"
              desc="System goes live. First month billing starts. We stay available for questions, tweaks, and ongoing support."
              isLast
            />
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 17. Custom Needs Callout ---------------------------------------- */}
      <SectionWrapper>
        <div className="rounded-2xl bg-[#1A1D23] border-l-4 border-l-emerald-400 border border-white/5 p-6 flex flex-col gap-3">
          <h3 className="font-heading font-bold text-white text-lg">
            Have specific needs or a unique setup?
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Every business is different. If you need custom integrations,
            additional locations, franchise setups, or something not covered
            in the standard packages — reach out. We build custom solutions
            for businesses that need more than the standard stack.
          </p>
          <p className="text-emerald-400 text-sm font-medium">
            Let&apos;s talk through what you actually need.
          </p>
        </div>
      </SectionWrapper>

      <div className="w-full h-px bg-white/5" />

      {/* -- 18. CTA — Next Steps -------------------------------------------- */}
      <SectionWrapper>
        <div className="flex flex-col items-center text-center gap-6 pb-8">
          <h2 className="font-heading text-3xl font-bold text-white">
            Ready to get more jobs?
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed max-w-sm">
            Book a quick call and we&apos;ll map out exactly what your business
            needs — no pressure, no fluff.
          </p>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <a
              href="#"
              className="flex items-center justify-center min-h-12 w-full rounded-xl bg-primary text-black font-bold text-base hover:bg-primary/90 transition-colors"
            >
              Book a Call
            </a>
            <a
              href="sms:+1"
              className="flex items-center justify-center min-h-12 w-full rounded-xl border border-primary/40 text-primary font-semibold text-base hover:bg-primary/10 transition-colors"
            >
              Text Us
            </a>
          </div>

          {/* Footer */}
          <p className="text-zinc-600 text-xs pt-4">
            © Scale Mint Solutions &middot; scalemintsolutions.com
          </p>
        </div>
      </SectionWrapper>

    </main>
  );
}
