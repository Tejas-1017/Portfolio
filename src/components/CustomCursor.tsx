'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    // Disable custom trailing cursor on touch devices to ensure 60 FPS mobile scrolling
    if (
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768)
    ) {
      setTimeout(() => setIsTouchDevice(true), 0);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

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
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Central Neon Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-300 rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_#00f3ff]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isMouseDown ? 0.6 : isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.08 }}
      />

      {/* Trailing Interactive Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-cyan-400/80 bg-cyan-500/10 backdrop-blur-[2px] flex items-center justify-center text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider"
        animate={{
          x: mousePosition.x - (isHovered ? 36 : 22),
          y: mousePosition.y - (isHovered ? 36 : 22),
          width: isHovered ? 72 : 44,
          height: isHovered ? 72 : 44,
          scale: isMouseDown ? 0.85 : 1,
          borderColor: isHovered ? 'rgba(0, 243, 255, 1)' : 'rgba(0, 243, 255, 0.4)',
          boxShadow: isHovered
            ? '0 0 35px rgba(0, 243, 255, 0.6), inset 0 0 20px rgba(0, 243, 255, 0.3)'
            : '0 0 15px rgba(0, 243, 255, 0.2)',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 280, mass: 0.15 }}
      >
        {cursorText && <span className="animate-pulse">{cursorText}</span>}
      </motion.div>
    </>
  );
}
