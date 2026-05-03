"use client";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

type Stat = {
  value: string;
  line1: string;
  line2: string;
  size: number;
  styleDesktop: React.CSSProperties;
  styleMobile: React.CSSProperties;
  color: string;
  border: string;
  text: string;
  sub: string;
  delay: number;
  drift: number;
  desc: string;
};

const stats: Stat[] = [
  {
    value: "3x",
    line1: "more leads",
    line2: "contacted",
    size: 152,
    styleDesktop: { top: 36, left: 0 },
    styleMobile: { top: 30, left: 10 },
    color: "#0d2218",
    border: "#1a4d30",
    text: "#4ade80",
    sub: "#86efac",
    delay: 0,
    drift: 3,
    desc: "Clients see 3x more leads responded to within 5 minutes of inquiry — fully automated.",
  },
  {
    value: "47%",
    line1: "more jobs",
    line2: "booked",
    size: 116,
    styleDesktop: { top: 0, right: 0 },
    styleMobile: { top: 0, right: 10 },
    color: "#0a2218",
    border: "#166534",
    text: "#34d399",
    sub: "#6ee7b7",
    delay: 150,
    drift: 3.7,
    desc: "47% more jobs booked from the same lead volume — just faster follow-up and nurture.",
  },
  {
    value: "90d",
    line1: "avg time",
    line2: "to ROI",
    size: 100,
    styleDesktop: { bottom: 0, right: 20 },
    styleMobile: { bottom: 0, right: 30 },
    color: "#0f2a10",
    border: "#14532d",
    text: "#86efac",
    sub: "#bbf7d0",
    delay: 300,
    drift: 4.4,
    desc: "Most clients see measurable ROI within 90 days of going live on Scale Mint's system.",
  },
];

type BubbleProps = {
  stat: Stat;
  idx: number;
  active: number | null;
  setActive: (n: number | null) => void;
  isMobile: boolean;
};

function Bubble({ stat, idx, active, setActive, isMobile }: BubbleProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), stat.delay + 200);
    return () => clearTimeout(t);
  }, [stat.delay]);

  const isActive = active === idx;
  const positionStyle = isMobile ? stat.styleMobile : stat.styleDesktop;

  return (
    <div
      onClick={() => setActive(isActive ? null : idx)}
      style={{
        position: "absolute",
        ...positionStyle,
        width: stat.size,
        height: stat.size,
        borderRadius: "50%",
        background: stat.color,
        border: `1.5px solid ${stat.border}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.5)",
        transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease",
        boxShadow: isActive
          ? `0 0 36px ${stat.border}99, 0 0 0 2px ${stat.border}`
          : "0 4px 24px rgba(0,0,0,0.5)",
        animation: visible ? `drift${idx} ${stat.drift}s ease-in-out 1s infinite` : "none",
        zIndex: isActive ? 10 : 1,
      }}
    >
      <style>{`
        @keyframes drift0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes drift1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes drift2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes sparkSpin { 0%{transform:rotate(0deg) scale(1)} 50%{transform:rotate(180deg) scale(1.3)} 100%{transform:rotate(360deg) scale(1)} }
      `}</style>
      <span
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: stat.size > 130 ? 38 : stat.size > 110 ? 28 : 22,
          fontWeight: 700,
          color: stat.text,
          lineHeight: 1,
        }}
      >
        {stat.value}
      </span>
      <span style={{ fontSize: 11, color: stat.sub, marginTop: 5, lineHeight: 1.3, display: "block" }}>
        {stat.line1}
      </span>
      <span style={{ fontSize: 11, color: stat.sub, lineHeight: 1.3, display: "block" }}>
        {stat.line2}
      </span>
    </div>
  );
}

export default function ScaleMintBubbleStats() {
  const [active, setActive] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#060f0a 0%,#091a0f 55%,#060f0a 100%)",
        borderRadius: 20,
        padding: isMobile ? "28px 20px" : "36px 28px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 24 : 32,
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        minHeight: 280,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Ambient orbs */}
      <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "rgba(74,222,128,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -40, left: 0, width: 160, height: 160, borderRadius: "50%", background: "rgba(52,211,153,0.03)", pointerEvents: "none" }} />

      {/* Left copy */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          width: isMobile ? "100%" : "auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(12px)",
          transition: "all 0.5s ease",
        }}
      >
        <div style={{ fontSize: 10, letterSpacing: "0.14em", color: "#4ade80", fontWeight: 600, marginBottom: 10 }}>
          SCALE MINT CLIENT RESULTS
        </div>
        <p style={{ fontSize: isMobile ? 22 : 24, fontWeight: 700, color: "#f0fff4", lineHeight: 1.25, marginBottom: 14, margin: "0 0 14px" }}>
          More revenue.<br />Less manual work.
        </p>
        <p style={{ fontSize: 13, color: "#6ee7b7", lineHeight: 1.7, margin: 0 }}>
          Home service businesses that run on Scale Mint close more jobs, respond faster, and build better reputations — on autopilot.
        </p>

        {active !== null && (
          <div
            style={{
              marginTop: 16,
              padding: "10px 14px",
              background: "rgba(74,222,128,0.08)",
              border: "0.5px solid rgba(74,222,128,0.2)",
              borderRadius: 10,
              fontSize: 12,
              color: "#86efac",
              lineHeight: 1.6,
              animation: "fadeUp 0.3s ease",
            }}
          >
            <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}`}</style>
            {stats[active].desc}
          </div>
        )}
      </div>

      {/* Bubbles */}
      <div style={{ flexShrink: 0, position: "relative", width: isMobile ? "100%" : 290, height: isMobile ? 260 : 270 }}>
        {stats.map((s, i) => (
          <Bubble key={i} stat={s} idx={i} active={active} setActive={setActive} isMobile={isMobile} />
        ))}
        {/* Sparkle */}
        <svg width="16" height="16" viewBox="0 0 20 20" style={{ position: "absolute", top: 10, left: isMobile ? "50%" : 135, animation: "sparkSpin 4s linear infinite" }}>
          <path d="M10 2L11.5 8.5L18 10L11.5 11.5L10 18L8.5 11.5L2 10L8.5 8.5Z" fill="#4ade80" />
        </svg>
        <svg width="10" height="10" viewBox="0 0 20 20" style={{ position: "absolute", bottom: 56, left: 8, opacity: 0.6 }}>
          <path d="M10 2L11.5 8.5L18 10L11.5 11.5L10 18L8.5 11.5L2 10L8.5 8.5Z" fill="#34d399" />
        </svg>
      </div>
    </div>
  );
}
