'use client';

import { useState, useEffect } from 'react';
import { Cpu, ArrowUp } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black pt-16 pb-8 border-t border-white/10 overflow-hidden font-mono text-xs">
      {/* Animated Glowing Separator Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00f3ff]" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="font-extrabold text-sm text-white tracking-widest uppercase text-gradient-cyan">
                TEJAS KHARKAR
              </p>
              <p className="text-[10px] text-slate-400 uppercase">
                AI & EMBEDDED SYSTEMS ENGINEER
              </p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <a href="#home" className="hover:text-cyan-400 transition-colors">HOME</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">SKILLS</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">EXPERIENCE</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">PROJECTS</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">CONTACT</a>
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass-panel border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
            data-cursor-text="TOP"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Status Ticker & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>SYSTEMS 100% NOMINAL</span>
            </span>
            <span className="text-white/20">|</span>
            <span>MUMBAI: {time || '12:00:00 IST'}</span>
          </div>

          <p className="text-slate-400">
            © {new Date().getFullYear()} Tejas Kharkar. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}
