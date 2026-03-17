"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

// TODO: Replace with actual GHL webhook URL
const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/REPLACE_WITH_YOUR_WEBHOOK_ID";

export default function BookPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    business_name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const isMobile = useIsMobile();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 pt-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      <section className="relative overflow-hidden pt-8 pb-10 md:pb-32">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Let&apos;s Talk About{" "}
              <span className="text-gradient">Your Business.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Tell us a little about your business and what&apos;s slowing you
              down. We&apos;ll come to the call with ideas ready.
            </p>
          </motion.div>

          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-12 max-w-xl"
          >
            {status === "success" ? (
              <div className="card-glass p-10 text-center">
                <CheckCircle size={48} className="mx-auto text-primary" />
                <h2 className="mt-6 font-heading text-2xl font-bold text-foreground">
                  You&apos;re in!
                </h2>
                <p className="mt-3 text-muted-foreground">
                  We&apos;ll reach out within 24 hours to schedule your call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glass space-y-5 p-8">
                <div>
                  <label
                    htmlFor="full_name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="h-11 w-full rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business_name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Business Name
                  </label>
                  <input
                    id="business_name"
                    name="business_name"
                    type="text"
                    required
                    value={formData.business_name}
                    onChange={handleChange}
                    placeholder="Smith's Plumbing LLC"
                    className="h-11 w-full rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="h-11 w-full rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@smithplumbing.com"
                    className="h-11 w-full rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    What do you need the most help with?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's eating up your time or where you want to grow..."
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Something went wrong — try again or email us at{" "}
                    <a
                      href="mailto:scalemintsolutions@gmail.com"
                      className="underline"
                    >
                      scalemintsolutions@gmail.com
                    </a>
                    .
                  </p>
                )}

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full py-6 text-base"
                  disabled={status === "submitting"}
                >
                  {status === "submitting"
                    ? "Sending..."
                    : "Book My Free Strategy Call"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  100% free — we just want to see if we&apos;re a good fit.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
