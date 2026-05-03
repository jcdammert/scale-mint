import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Live Demo — Scale Mint",
  description:
    "Watch how Scale Mint's AI qualifies your leads and texts you when they're ready — all on autopilot. Interactive demo.",
};

export default function LiveDemoPage() {
  return (
    <div style={{ background: "#0A0F1C", minHeight: "100vh" }}>
      <Navbar />
      <iframe
        src="/demo.html"
        title="Scale Mint AI Lead Automation Demo"
        style={{
          width: "100%",
          height: "calc(100vh - 80px)",
          border: "none",
          display: "block",
          marginTop: "80px",
        }}
      />
    </div>
  );
}
