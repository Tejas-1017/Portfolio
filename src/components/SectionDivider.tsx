'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  title?: string;
}

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="relative w-full py-8 flex items-center justify-center overflow-hidden pointer-events-none select-none">
      {/* Background Neon Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Moving Laser Beam Sweep */}
      <motion.div
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute w-1/3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00f3ff]"
      />

      {/* Center Cyber Telemetry Badge */}
      {title && (
        <div className="absolute px-4 py-1 rounded-full bg-[#080c18] border border-cyan-500/40 font-mono text-[10px] text-cyan-300 shadow-[0_0_20px_rgba(0,243,255,0.3)] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>{title}</span>
        </div>
      )}
    </div>
  );
}
