'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LaptopTransition() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Laptop Lid Opening Angle (-90deg closed to 0deg open)
  const lidRotateX = useTransform(scrollYProgress, [0.15, 0.45], [-88, 0]);
  const laptopScale = useTransform(scrollYProgress, [0.15, 0.55], [0.85, 1.05]);
  const textOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const glowIntensity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-black py-20 z-10"
    >
      {/* Background Lighting Glow */}
      <motion.div
        style={{ opacity: glowIntensity }}
        className="absolute w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[180px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center relative z-20">
        
        {/* Subtitle Badge */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>NEURAL INTERFACE // READY</span>
        </motion.div>

        {/* 3D Laptop Perspective Container */}
        <motion.div
          style={{ scale: laptopScale }}
          className="relative w-full max-w-3xl aspect-[16/10] perspective-1000 flex flex-col items-center"
        >
          {/* Laptop Lid Screen */}
          <motion.div
            style={{
              rotateX: lidRotateX,
              transformOrigin: 'bottom center',
              transformStyle: 'preserve-3d',
            }}
            className="w-[90%] h-[78%] bg-[#080c18] rounded-t-2xl border-4 border-[#1e293b] relative overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.25)] flex flex-col justify-between p-6"
          >
            {/* Screen Top Camera Dot */}
            <div className="self-center w-2 h-2 rounded-full bg-cyan-500/40 border border-cyan-400 shadow-[0_0_8px_#00f3ff]" />

            {/* Glowing Screen Content (Matching Video-15644.mp4) */}
            <div className="flex flex-col items-center justify-center my-auto space-y-4">
              <motion.h2
                style={{ opacity: textOpacity }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-mono tracking-tight text-white drop-shadow-[0_0_25px_rgba(0,243,255,0.8)]"
              >
                WELCOME TO MY <br />
                <span className="text-gradient-cyan">PORTFOLIO</span>
              </motion.h2>
              <p className="text-slate-400 font-mono text-xs tracking-widest uppercase">
                TEJAS KHARKAR // AI & MACHINE LEARNING ENGINEER
              </p>
            </div>

            {/* Screen Bottom Bar Logo */}
            <div className="self-center text-[10px] font-mono text-cyan-400/60 uppercase tracking-wider">
              TEJAS // AI MODEL CORE
            </div>
          </motion.div>

          {/* Laptop Base Body */}
          <div className="w-[100%] h-[8%] bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-b-xl border-t border-cyan-500/40 shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative flex items-center justify-center">
            {/* Trackpad Notch */}
            <div className="w-16 h-1.5 bg-[#334155] rounded-full" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
