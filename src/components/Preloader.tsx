'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Ultra-fast progress completion (400ms total duration)
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 100);
          return 100;
        }
        return prev + 25;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030408] select-none overflow-hidden"
        >
          {/* Ambient Cyan Halo */}
          <div className="absolute w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Loader Text & Title */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <div className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>INITIALIZING AI CORE // TEJAS KHARKAR</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold uppercase text-white tracking-widest drop-shadow-[0_0_35px_rgba(0,243,255,0.4)]">
              PORTFOLIO
            </h1>

            {/* Glowing Cyber Progress Bar */}
            <div className="w-64 sm:w-80 h-1 bg-white/10 rounded-full mt-8 overflow-hidden relative border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_#00f3ff] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Readout */}
            <div className="flex items-center justify-between w-64 sm:w-80 mt-3 font-mono text-xs text-slate-400">
              <span>SYSTEM READY</span>
              <span className="text-cyan-400 font-bold">{progress}%</span>
              <span>ONLINE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
