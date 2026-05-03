"use client";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

type Lead = {
  id: number;
  name: string;
  service: string;
  source: string;
  stage: number;
  value: number;
  time: string;
};

type Stage = {
  label: string;
  accent: string;
  bg: string;
  border: string;
};

type Kpi = {
  label: string;
  value: string;
  sub: string;
  accent: string;
};

const initialLeads: Lead[] = [
  { id: 1, name: "Mike T.", service: "Pressure wash", source: "FB Ad", stage: 0, value: 380, time: "2m ago" },
  { id: 2, name: "Sarah K.", service: "Remodel est.", source: "Google", stage: 0, value: 4200, time: "18m ago" },
  { id: 3, name: "Dan R.", service: "HVAC quote", source: "Missed call", stage: 0, value: 1100, time: "41m ago" },
  { id: 4, name: "James L.", service: "Epoxy floor", source: "SMS reply", stage: 1, value: 2800, time: "1h ago" },
  { id: 5, name: "Lisa M.", service: "Roofing", source: "Seq. day 2", stage: 1, value: 6500, time: "2h ago" },
  { id: 6, name: "Tony B.", service: "Deck wash", source: "Estimate sent", stage: 2, value: 380, time: "3h ago" },
  { id: 7, name: "Nina W.", service: "Window tint", source: "Estimate sent", stage: 2, value: 210, time: "4h ago" },
  { id: 8, name: "Carlos M.", service: "Full remodel", source: "Signed", stage: 3, value: 8900, time: "Yesterday" },
];

const stages: Stage[] = [
  { label: "New lead", accent: "#4ade80", bg: "rgba(74,222,128,0.08)", border: "rgba(74,222,128,0.2)" },
  { label: "Contacted", accent: "#34d399", bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.2)" },
  { label: "Estimate sent", accent: "#22d3ee", bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.2)" },
  { label: "Booked", accent: "#a3e635", bg: "rgba(163,230,53,0.08)", border: "rgba(163,230,53,0.2)" },
];

const kpis: Kpi[] = [
  { label: "New leads", value: "24", sub: "+8 this week", accent: "#4ade80" },
  { label: "Pipeline", value: "$34k", sub: "active value", accent: "#34d399" },
  { label: "Jobs booked", value: "11", sub: "+3 vs last week", accent: "#22d3ee" },
  { label: "Response time", value: "<60s", sub: "avg auto-reply", accent: "#a3e635" },
];

function KPICard({ kpi, idx }: { kpi: Kpi; idx: number }) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), idx * 80 + 200);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: 10,
        padding: "12px 14px",
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(8px)",
        transition: "all 0.4s ease, border-color 0.2s, box-shadow 0.2s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${kpi.accent}44`;
        e.currentTarget.style.boxShadow = `0 0 16px ${kpi.accent}18`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: 11, color: "#2d6a3a", marginBottom: 4 }}>{kpi.label}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: kpi.accent, lineHeight: 1 }}>{kpi.value}</div>
      <div style={{ fontSize: 10, color: "#1f4a2a", marginTop: 4 }}>{kpi.sub}</div>
    </div>
  );
}

function LeadCard({ lead, stage, onDragStart }: { lead: Lead; stage: Stage; onDragStart: () => void }) {
  const initials = lead.name.split(" ").map(w => w[0]).join("");
  return (
    <div
      draggable
      onDragStart={onDragStart}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: 8,
        padding: "10px 12px",
        cursor: "grab",
        transition: "border-color 0.2s, box-shadow 0.2s",
        userSelect: "none",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${stage.accent}44`;
        e.currentTarget.style.boxShadow = `0 0 12px ${stage.accent}14`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
        <div
          style={{
            width: 26, height: 26, borderRadius: "50%",
            background: stage.bg, border: `0.5px solid ${stage.accent}44`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: 600, color: stage.accent, flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#d4fde4", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {lead.name}
          </div>
          <div style={{ fontSize: 10, color: "#2d6a3a" }}>{lead.service}</div>
        </div>
        <div style={{ fontSize: 11, fontWeight: 600, color: stage.accent, flexShrink: 0 }}>
          ${lead.value.toLocaleString()}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 10, color: "#2d5a3a", background: "rgba(255,255,255,0.04)", padding: "2px 6px", borderRadius: 4 }}>
          {lead.source}
        </span>
        <span style={{ fontSize: 10, color: "#1f4a2a" }}>{lead.time}</span>
      </div>
    </div>
  );
}

export default function ScaleMintDashboard() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [dragging, setDragging] = useState<number | null>(null);
  const [over, setOver] = useState<number | null>(null);
  const [vis, setVis] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const t = setTimeout(() => setVis(true), 80);
    return () => clearTimeout(t);
  }, []);

  const totalPipeline = leads.filter(l => l.stage < 3).reduce((s, l) => s + l.value, 0);

  function handleDrop(stageIdx: number) {
    if (dragging === null) return;
    setLeads(prev => prev.map(l => l.id === dragging ? { ...l, stage: stageIdx } : l));
    setDragging(null);
    setOver(null);
  }

  return (
    <div
      style={{
        background: "hsl(230 12% 10% / 0.6)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        borderRadius: 16,
        padding: 22,
        overflow: "hidden",
        position: "relative",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* Header */}
      <div
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: 18,
          opacity: vis ? 1 : 0, transition: "opacity 0.5s ease",
        }}
      >
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.12em", color: "#4ade80", fontWeight: 600, marginBottom: 4 }}>
            SCALE MINT BUSINESS OS
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#e8fdf0" }}>Johnson Remodeling Co.</div>
        </div>
        <div
          style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "rgba(74,222,128,0.08)",
            border: "0.5px solid rgba(74,222,128,0.2)",
            borderRadius: 99, padding: "5px 12px",
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", animation: "pulse 2s ease-in-out infinite" }} />
          <span style={{ fontSize: 11, color: "#4ade80", fontWeight: 500 }}>Live</span>
        </div>
      </div>

      {/* KPIs */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, minmax(0,1fr))" : "repeat(4,minmax(0,1fr))",
        gap: 8,
        marginBottom: 18,
      }}>
        {kpis.map((k, i) => <KPICard key={i} kpi={k} idx={i} />)}
      </div>

      <div style={{ fontSize: 11, color: "#1f4a2a", marginBottom: 10, paddingLeft: 2 }}>
        Sales pipeline · drag cards between stages
      </div>

      {/* Pipeline columns */}
      <div style={{
        display: isMobile ? "flex" : "grid",
        gridTemplateColumns: isMobile ? undefined : "repeat(4,minmax(0,1fr))",
        gap: 8,
        overflowX: isMobile ? "auto" : "visible",
        paddingBottom: isMobile ? 8 : 0,
      }}>
        {stages.map((stage, si) => {
          const stageLeads = leads.filter(l => l.stage === si);
          const isOver = over === si;
          return (
            <div
              key={si}
              onDragOver={e => { e.preventDefault(); setOver(si); }}
              onDragLeave={() => setOver(null)}
              onDrop={() => handleDrop(si)}
              style={{
                background: isOver ? "rgba(74,222,128,0.05)" : "rgba(255,255,255,0.015)",
                borderRadius: 10,
                padding: "10px 8px",
                border: `0.5px solid ${isOver ? stage.accent + "44" : "rgba(255,255,255,0.05)"}`,
                minHeight: 160,
                minWidth: isMobile ? 140 : undefined,
                flexShrink: isMobile ? 0 : undefined,
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 600, color: "#2d6a3a", letterSpacing: "0.06em" }}>
                  {stage.label.toUpperCase()}
                </span>
                <span
                  style={{
                    background: stage.bg, color: stage.accent,
                    fontSize: 10, padding: "2px 7px", borderRadius: 99, fontWeight: 600,
                  }}
                >
                  {stageLeads.length}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {stageLeads.map(lead => (
                  <LeadCard
                    key={lead.id}
                    lead={lead}
                    stage={stage}
                    onDragStart={() => setDragging(lead.id)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: 14,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 12, borderTop: "0.5px solid rgba(255,255,255,0.05)",
        }}
      >
        <span style={{ fontSize: 11, color: "#1f4a2a" }}>Total pipeline value</span>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#4ade80" }}>
          ${totalPipeline.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
