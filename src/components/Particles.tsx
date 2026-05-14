"use client";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseOpacity: number;   // resting opacity
  phase: number;         // sine offset so each star is out of phase
  twinkleSpeed: number;  // how fast it pulses
  flareTimer: number;    // counts down a random flare event
  flareNext: number;     // frames until next flare
  flareDuration: number; // how long the flare lasts
  flareIntensity: number;// extra brightness during flare
};

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;
    const particles: Particle[] = [];
    const COUNT = 55;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: rand(-0.12, 0.12),
        vy: rand(-0.12, 0.12),
        size: rand(0.5, 1.8),
        baseOpacity: rand(0.06, 0.22),
        phase: rand(0, Math.PI * 2),
        twinkleSpeed: rand(0.008, 0.025), // full pulse every 4–12 s
        flareTimer: 0,
        flareNext: Math.floor(rand(200, 900)),  // first flare after random delay
        flareDuration: Math.floor(rand(30, 70)),
        flareIntensity: rand(0.35, 0.7),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      particles.forEach((p) => {
        // Drift
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Twinkle — smooth sine wave between 0.3× and 1× base opacity
        const sine = (Math.sin(frame * p.twinkleSpeed + p.phase) + 1) / 2; // 0–1
        let opacity = p.baseOpacity * (0.3 + sine * 0.7);

        // Flare event — brief bloom
        let glowRadius = 0;
        if (p.flareTimer > 0) {
          // ease in/out over flare duration
          const progress = p.flareTimer / p.flareDuration;
          const flareEase = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
          opacity = Math.min(1, opacity + p.flareIntensity * flareEase);
          glowRadius = p.size * 6 * flareEase;
          p.flareTimer--;
          if (p.flareTimer === 0) {
            // schedule next flare
            p.flareNext = Math.floor(rand(300, 1200));
            p.flareDuration = Math.floor(rand(25, 65));
            p.flareIntensity = rand(0.3, 0.65);
          }
        } else {
          p.flareNext--;
          if (p.flareNext <= 0) {
            p.flareTimer = p.flareDuration;
          }
        }

        // Draw glow halo during flare
        if (glowRadius > 0) {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
          grad.addColorStop(0, `rgba(74, 222, 128, ${opacity * 0.5})`);
          grad.addColorStop(1, `rgba(74, 222, 128, 0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // Draw the star dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 222, 128, ${opacity})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
};

export default Particles;
