"use client";

import { useEffect, useRef } from "react";
import { Rocket } from "lucide-react";

/**
 * A green glowing rocket that drifts across the viewport in a curved
 * loop. Fixed-positioned (doesn't scroll with content), pointer-events
 * disabled (doesn't block clicks), and subtly parallaxes toward the
 * cursor for a touch of interactivity.
 *
 * Disabled when the user prefers reduced motion, and on touch devices
 * where the parallax doesn't make sense.
 */
export default function FlyingRocket() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on reduced motion or touch devices
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reduced) {
      if (wrapRef.current) wrapRef.current.style.display = "none";
      return;
    }
    if (isTouch || !rocketRef.current) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    function onMove(e: MouseEvent) {
      // Pointer position relative to viewport center, scaled small
      targetX = (e.clientX / window.innerWidth - 0.5) * 24;
      targetY = (e.clientY / window.innerHeight - 0.5) * 24;
    }

    function tick() {
      // Smooth lerp toward the target so the parallax glides
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      if (rocketRef.current) {
        rocketRef.current.style.setProperty("--rx", `${curX.toFixed(2)}px`);
        rocketRef.current.style.setProperty("--ry", `${curY.toFixed(2)}px`);
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div ref={rocketRef} className="rocket-flight">
        <div className="rocket-traveler">
          <div className="rocket-halo" />
          <Rocket
            size={30}
            strokeWidth={1.5}
            className="rocket-icon"
          />
        </div>
      </div>
    </div>
  );
}
