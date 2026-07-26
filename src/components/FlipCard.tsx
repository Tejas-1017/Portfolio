'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw } from 'lucide-react';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export default function FlipCard({ front, back, className = '' }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative perspective-1000 cursor-pointer ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* 3D Rotating Container */}
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {/* Front Face */}
        <div className="w-full h-full [backface-visibility:hidden] relative group">
          {front}
          
          {/* Corner Flip Hint Badge */}
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-cyan-500/20 border border-cyan-400/40 font-mono text-[9px] text-cyan-300 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity z-20">
            <RotateCw className="w-2.5 h-2.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>FLIP</span>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-b from-[#0c1224] to-[#04060c] border border-cyan-400/60 p-6 flex flex-col justify-between shadow-[0_0_40px_rgba(0,243,255,0.3)] z-20"
        >
          {back}

          {/* Corner Flip-Back Hint Badge */}
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-purple-500/20 border border-purple-400/40 font-mono text-[9px] text-purple-300 flex items-center gap-1 z-30">
            <RotateCw className="w-2.5 h-2.5 text-purple-400" />
            <span>FLIP BACK</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
