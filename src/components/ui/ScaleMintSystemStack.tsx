"use client";
import { useState, useEffect } from "react";

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
    pills: ["Meta ads", "Google PPC", "SEO", "GBP optimization"],
    desc: "We run and manage your paid traffic — Meta, Google, and local SEO — so your phone rings consistently every week.",
  },
  {
    num: "02",
    label: "Speed to lead",
    accent: "#34d399",
    dimBg: "rgba(52,211,153,0.07)",
    border: "#145c3a",
    pills: ["Instant text-back", "Missed call AI", "2-way SMS", "Email sequences"],
    desc: "Every lead gets a response in under 60 seconds. Missed calls auto-text back. No lead slips through the cracks.",
  },
  {
    num: "03",
    label: "Close & book",
    accent: "#22d3ee",
    dimBg: "rgba(34,211,238,0.07)",
    border: "#0e4a55",
    pills: ["CRM pipeline", "Estimates & invoices", "E-signatures", "Scheduling"],
    desc: "Your full sales pipeline, automated. Send estimates, collect signatures, and book jobs without lifting a finger.",
  },
  {
    num: "04",
    label: "Reputation",
    accent: "#a3e635",
    dimBg: "rgba(163,230,53,0.07)",
    border: "#365214",
    pills: ["Auto review requests", "Social posting", "Referral system"],
    desc: "After every job, a review request fires automatically. Your Google rating climbs. New leads trust you before they even call.",
  },
];

type LayerProps = {
  layer: Layer;
  idx: number;
  active: number | null;
  setActive: (n: number | null) => void;
};

function LayerRow({ layer, idx, active, setActive }: LayerProps) {
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
        padding: "14px 18px",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transition: "all 0.3s ease",
        boxShadow: open ? `0 0 28px ${layer.accent}18` : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: layer.accent, opacity: 0.5, width: 24, flexShrink: 0 }}>
          {layer.num}
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#e8fdf0", flex: "0 0 130px" }}>
          {layer.label}
        </div>
        <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: 6, minWidth: 0 }}>
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
                transition: "transform 0.15s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              {p}
            </span>
          ))}
        </div>
        <div
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
        </div>
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

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        background: "hsl(230 12% 10% / 0.6)",
        borderRadius: 16,
        padding: "20px 20px",
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
          Click any layer to learn more
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {layers.map((l, i) => (
          <LayerRow key={i} layer={l} idx={i} active={active} setActive={setActive} />
        ))}
      </div>
    </div>
  );
}
