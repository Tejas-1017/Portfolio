'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black select-none overflow-hidden"
        >
          {/* Ambient Background Matrix Light */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

          {/* Main Loader Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            {/* Telemetry Status Readout */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>System Initialization // Edge AI v2.0</span>
            </motion.div>

            {/* Giant Title requested in Hero/Loader prompt: "Portfolio" */}
            <motion.h1
              initial={{ scale: 0.85, opacity: 0, letterSpacing: '0.1em' }}
              animate={{ scale: 1, opacity: 1, letterSpacing: '0.25em' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase text-white tracking-widest drop-shadow-[0_0_35px_rgba(0,243,255,0.4)]"
            >
              Portfolio
            </motion.h1>

            {/* Progress Bar Container */}
            <div className="w-64 md:w-80 h-1 bg-white/10 rounded-full mt-10 overflow-hidden relative border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_#00f3ff]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage & Diagnostics */}
            <div className="flex items-center justify-between w-64 md:w-80 mt-3 font-mono text-xs text-slate-400">
              <span>TINEML CORE</span>
              <span className="text-cyan-400 font-bold">{progress}%</span>
              <span>NOMINAL</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
