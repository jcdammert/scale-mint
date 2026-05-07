import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Live Demo",
  description:
    "Walk through a real lead flow — missed call to text-back to booked job. See exactly how Scale Mint runs in the wild. No sign-up.",
  alternates: { canonical: "/live-demo" },
  openGraph: {
    title: "Live Demo | Scale Mint",
    description:
      "Walk through a real lead flow — missed call to text-back to booked job. No sign-up.",
    url: "/live-demo",
  },
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
