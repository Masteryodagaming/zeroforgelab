"use client";

import { useEffect, useMemo, useState } from "react";

type Particle = {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  kind: "ice" | "ember";
  opacity: number;
};

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const kind: "ice" | "ember" = i % 3 === 0 ? "ember" : "ice";
    return {
      id: i,
      left: `${(i * 37 + 11) % 100}%`,
      size: kind === "ice" ? 2 + (i % 3) : 2 + (i % 4),
      duration: 10 + (i % 9) * 1.4,
      delay: (i % 12) * 0.7,
      kind,
      opacity: kind === "ice" ? 0.45 + (i % 4) * 0.1 : 0.35 + (i % 3) * 0.12,
    };
  });
}

export default function AnimatedBackground() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const particles = useMemo(() => makeParticles(28), []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="stage">
        <div className="stage-grid" />
        <div className="orb-ice" />
        <div className="orb-ember" />
        {!reduceMotion &&
          particles.map((p) => (
            <span
              key={p.id}
              className={`particle ${p.kind === "ice" ? "particle-ice" : "particle-ember"}`}
              style={{
                left: p.left,
                bottom: `${(p.id * 7) % 40}%`,
                width: p.size,
                height: p.size,
                opacity: p.opacity,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
      </div>
    </div>
  );
}
