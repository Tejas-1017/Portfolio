'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window);

    // Fast loading step: 200ms on mobile, 500ms on desktop
    const stepIncrement = isMobile ? 25 : 15;
    const intervalSpeed = isMobile ? 20 : 30;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, isMobile ? 50 : 150);
          return 100;
        }
        return Math.min(100, prev + stepIncrement);
      });
    }, intervalSpeed);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(5px)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black select-none overflow-hidden"
        >
          {/* Ambient Background Light */}
          <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Main Loader Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase mb-4 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>System Initialization // AI CORE</span>
            </motion.div>

            <motion.h1
              initial={{ scale: 0.95, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl md:text-8xl font-extrabold uppercase text-white tracking-widest drop-shadow-[0_0_35px_rgba(0,243,255,0.4)]"
            >
              Portfolio
            </motion.h1>

            {/* Progress Bar */}
            <div className="w-56 md:w-80 h-1 bg-white/10 rounded-full mt-8 overflow-hidden relative border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_#00f3ff]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between w-56 md:w-80 mt-3 font-mono text-xs text-slate-400">
              <span>TINEML CORE</span>
              <span className="text-cyan-400 font-bold">{progress}%</span>
              <span>READY</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
