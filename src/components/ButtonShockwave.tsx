'use client';

import { useEffect, useState } from 'react';

interface ShockwaveRing {
  id: number;
  x: number;
  y: number;
}

export default function ButtonShockwave() {
  const [rings, setRings] = useState<ShockwaveRing[]>([]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const actionElement = target.closest('button, a, .interactive-hover');
      if (actionElement) {
        const newRing: ShockwaveRing = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
        };
        setRings((prev) => [...prev.slice(-10), newRing]);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  useEffect(() => {
    if (rings.length === 0) return;
    const timer = setTimeout(() => {
      setRings((prev) => prev.slice(1));
    }, 700);
    return () => clearTimeout(timer);
  }, [rings]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden">
      {rings.map((r) => (
        <div
          key={r.id}
          className="absolute rounded-full border-2 border-cyan-400 shadow-[0_0_30px_#00f3ff] animate-[ping_0.6s_cubic-bezier(0,0,0.2,1)_forwards]"
          style={{
            left: `${r.x - 40}px`,
            top: `${r.y - 40}px`,
            width: '80px',
            height: '80px',
          }}
        />
      ))}
    </div>
  );
}
