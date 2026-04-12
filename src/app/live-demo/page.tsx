import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Demo — Scale Mint",
  description:
    "Watch how Scale Mint's AI qualifies your leads and texts you when they're ready — all on autopilot. Interactive demo.",
};

export default function LiveDemoPage() {
  return (
    <div style={{ background: "#0A0F1C", minHeight: "100vh" }}>
      <iframe
        src="/demo.html"
        title="Scale Mint AI Lead Automation Demo"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          display: "block",
        }}
      />
    </div>
  );
}
