// Archived: was Pillar 03 "Reviews That Stack Up After Every Job" visual
// Removed when pillars were consolidated from 4 → 3 (reviews merged into Online Presence pillar)
// Keep — the stacking review cards and notification UI could be reused on a testimonials or social proof section

import { Star } from "lucide-react";

export default function ReviewsPillarVisual() {
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
