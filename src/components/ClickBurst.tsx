'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

export default function ClickBurst() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const colors = ['#00f3ff', '#0066ff', '#9d00ff', '#ffffff'];
      const newSparks: Particle[] = Array.from({ length: 14 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 14 + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 4 + 3;
        return {
          id: Date.now() + i + Math.random(),
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 5 + 3,
        };
      });

      setParticles((prev) => [...prev.slice(-30), ...newSparks]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (particles.length === 0) return;

    const timer = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            size: p.size * 0.92,
          }))
          .filter((p) => p.size > 0.4)
      );
    }, 16);

    return () => clearInterval(timer);
  }, [particles.length]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_currentColor]"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            color: p.color,
          }}
        />
      ))}
    </div>
  );
}
