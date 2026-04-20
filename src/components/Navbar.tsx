'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-black/60 backdrop-blur-xl border-b border-cyan-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-white font-mono text-sm tracking-wider"
          data-cursor-text="HOME"
        >
          <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
            <Brain className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-widest text-gradient-cyan group-hover:text-cyan-300">
              TEJAS KHARKAR
            </span>
            <span className="text-[10px] text-cyan-400/70 tracking-widest uppercase font-mono">
              AI & ML ENGINEER
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-black/40 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-mono tracking-wider transition-colors duration-300 ${
                  isActive ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                data-cursor-text={item.label}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_#00f3ff]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Telemetry Status Badge / CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>AI CORE ONLINE</span>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-mono font-bold tracking-wider rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.7)] hover:scale-105 active:scale-95"
            data-cursor-text="TALK"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </header>
  );
}
