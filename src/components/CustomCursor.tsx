'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, textarea, .interactive-hover');
      if (interactive) {
        setIsHovered(true);
        const dataText = interactive.getAttribute('data-cursor-text');
        if (dataText) setCursorText(dataText);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Central Cyan Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[9999] shadow-[0_0_12px_#00f3ff]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Trailing Outer Ring / Glowing Aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-cyan-400/60 bg-cyan-500/10 backdrop-blur-[2px] flex items-center justify-center text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider"
        animate={{
          x: mousePosition.x - (isHovered ? 32 : 20),
          y: mousePosition.y - (isHovered ? 32 : 20),
          width: isHovered ? 64 : 40,
          height: isHovered ? 64 : 40,
          borderColor: isHovered ? 'rgba(0, 243, 255, 0.9)' : 'rgba(0, 243, 255, 0.3)',
          boxShadow: isHovered
            ? '0 0 30px rgba(0, 243, 255, 0.5), inset 0 0 15px rgba(0, 243, 255, 0.2)'
            : '0 0 15px rgba(0, 243, 255, 0.2)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {cursorText && <span>{cursorText}</span>}
      </motion.div>
    </>
  );
}
