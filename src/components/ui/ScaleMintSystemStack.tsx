"use client";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

type Layer = {
  num: string;
  label: string;
  accent: string;
  dimBg: string;
  border: string;
  pills: string[];
  desc: string;
};

const layers: Layer[] = [
  {
    num: "01",
    label: "Leads & ads",
    accent: "#4ade80",
    dimBg: "rgba(74,222,128,0.07)",
    border: "#1a5c2a",
    pills: ["Meta ads", "Google PPC", "Local SEO", "GBP optimization"],
    desc: "Paid traffic and local SEO — Meta, Google, and your Business Profile — managed end to end so the phone keeps ringing every week.",
  },
  {
    num: "02",
    label: "Speed to lead",
    accent: "#34d399",
    dimBg: "rgba(52,211,153,0.07)",
    border: "#145c3a",
    pills: ["Instant text-back", "Missed call AI", "2-way SMS", "Email sequences"],
    desc: "Every inbound lead gets a reply within a minute. Missed calls fire an instant text-back. Nothing waits for you to grab your phone.",
  },
  {
    num: "03",
    label: "Close & book",
    accent: "#22d3ee",
    dimBg: "rgba(34,211,238,0.07)",
    border: "#0e4a55",
    pills: ["CRM pipeline", "Estimates & invoices", "E-signatures", "Scheduling"],
    desc: "Pipeline you can actually see. Estimates and invoices go out from the same system. Signatures come back. Jobs land on the calendar.",
  },
  {
    num: "04",
    label: "Reputation",
    accent: "#a3e635",
    dimBg: "rgba(163,230,53,0.07)",
    border: "#365214",
    pills: ["Auto review requests", "Social posting", "Referral system"],
    desc: "When a job is marked complete, a review request goes out by text. Your Google rating climbs. New leads trust you before the first call.",
  },
];

type LayerProps = {
  layer: Layer;
  idx: number;
  active: number | null;
  setActive: (n: number | null) => void;
  isMobile: boolean;
};

function LayerRow({ layer, idx, active, setActive, isMobile }: LayerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), idx * 120 + 200);
    return () => clearTimeout(t);
  }, [idx]);

  const open = active === idx;

  return (
    <div
      onClick={() => setActive(open ? null : idx)}
      style={{
        background: open ? layer.dimBg : "rgba(255,255,255,0.02)",
        border: `0.5px solid ${open ? layer.border : "rgba(255,255,255,0.06)"}`,
        borderRadius: 14,
        padding: isMobile ? "12px 14px" : "14px 18px",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transition: "all 0.3s ease",
        boxShadow: open ? `0 0 28px ${layer.accent}18` : "none",
      }}
    >
      {/* Mobile: stacked vertical layout. Desktop: horizontal row. */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "stretch" : "center",
          gap: isMobile ? 10 : 14,
        }}
      >
        {/* Top row on mobile: number + label + chevron */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flex: isMobile ? "none" : "0 0 auto",
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: layer.accent,
              opacity: 0.5,
              flexShrink: 0,
            }}
          >
            {layer.num}
          </span>
          <span
            style={{
              fontSize: isMobile ? 14 : 15,
              fontWeight: 700,
              color: "#e8fdf0",
              flex: isMobile ? 1 : "0 0 130px",
            }}
          >
            {layer.label}
          </span>
          {isMobile && (
            <span
              style={{
                color: layer.accent,
                fontSize: 14,
                transition: "transform 0.25s ease",
                transform: open ? "rotate(180deg)" : "none",
                opacity: 0.7,
                flexShrink: 0,
              }}
            >
              ↓
            </span>
          )}
        </div>

        {/* Pills row */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            minWidth: 0,
          }}
        >
          {layer.pills.map((p, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "3px 10px",
                borderRadius: 99,
                fontSize: 11,
                fontWeight: 500,
                background: `${layer.accent}18`,
                color: layer.accent,
                border: `0.5px solid ${layer.accent}44`,
                whiteSpace: "nowrap",
                transition: "transform 0.15s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              {p}
            </span>
          ))}
        </div>

        {!isMobile && (
          <span
            style={{
              color: layer.accent,
              fontSize: 16,
              transition: "transform 0.25s ease",
              transform: open ? "rotate(180deg)" : "none",
              opacity: 0.7,
              flexShrink: 0,
            }}
          >
            ↓
          </span>
        )}
      </div>

      {open && (
        <div
          style={{
            marginTop: 12,
            paddingTop: 12,
            borderTop: `0.5px solid ${layer.border}`,
            fontSize: 13,
            color: "#86efac",
            lineHeight: 1.65,
            animation: "slideUp 0.25s ease",
          }}
        >
          <style>{`@keyframes slideUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`}</style>
          {layer.desc}
        </div>
      )}
    </div>
  );
}

export default function ScaleMintSystemStack() {
  const [active, setActive] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        background: "hsl(230 12% 10% / 0.6)",
        borderRadius: 16,
        padding: isMobile ? "16px 14px" : "20px 20px",
        position: "relative",
        fontFamily: "system-ui, sans-serif",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: 16,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(10px)",
          transition: "all 0.5s ease",
        }}
      >
        <p style={{ fontSize: 11, color: "hsl(148 30% 50%)", margin: 0, letterSpacing: "0.04em" }}>
          {isMobile ? "Tap any layer" : "Click any layer to see what it does"}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {layers.map((l, i) => (
          <LayerRow
            key={i}
            layer={l}
            idx={i}
            active={active}
            setActive={setActive}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}
