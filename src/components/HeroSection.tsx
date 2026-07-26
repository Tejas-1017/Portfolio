'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Terminal, Brain } from 'lucide-react';
import AITerminal from './AITerminal';

export default function HeroSection() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-fit md:min-h-screen pt-24 pb-12 md:pt-32 md:pb-16 flex items-center justify-center overflow-hidden bg-cyber-grid"
    >
      {/* AI Terminal Drawer Modal */}
      <AITerminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

      {/* Ambient Lighting Spheres */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-10 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 right-10 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8 md:gap-12 relative z-10">
        
        {/* Left Column: Hero Typography & Call-To-Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Telemetry Chip */}
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-panel border border-cyan-500/30 text-[11px] md:text-xs font-mono text-cyan-300 mb-4 md:mb-6 w-max shadow-[0_0_15px_rgba(0,243,255,0.15)]">
            <Brain className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 animate-pulse" />
            <span>AI & MACHINE LEARNING ENGINEER</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-purple-400 font-bold hidden sm:inline">DEEP LEARNING & CV</span>
          </div>

          {/* Bold Title */}
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold uppercase text-white tracking-tight leading-[0.95] mb-4 md:mb-6">
            TEJAS <br />
            <span className="text-gradient-cyan drop-shadow-[0_0_35px_rgba(0,243,255,0.4)]">
              KHARKAR
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-lg max-w-xl font-light leading-relaxed mb-6 md:mb-8">
            Architecting high-performance <span className="text-cyan-400 font-semibold">Deep Learning</span> models, <span className="text-purple-400 font-semibold">Computer Vision pipelines</span> (YOLO / OpenCV), and <span className="text-white font-semibold">Generative AI</span> solutions with ultra-low latency edge deployment.
          </p>

          {/* Live Telemetry Data Badges */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md mb-6 md:mb-10 font-mono text-xs">
            <div className="p-2.5 sm:p-3 rounded-lg glass-panel border border-white/10 flex flex-col hover:border-cyan-400/50 transition-colors">
              <span className="text-slate-400 text-[9px] sm:text-[10px]">AI ENGINE</span>
              <span className="text-cyan-400 font-bold text-xs sm:text-sm">PYTORCH</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-lg glass-panel border border-white/10 flex flex-col hover:border-cyan-400/50 transition-colors">
              <span className="text-slate-400 text-[9px] sm:text-[10px]">VISION STACK</span>
              <span className="text-cyan-400 font-bold text-xs sm:text-sm">OPENCV/YOLO</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-lg glass-panel border border-white/10 flex flex-col hover:border-cyan-400/50 transition-colors">
              <span className="text-slate-400 text-[9px] sm:text-[10px]">INFERENCE</span>
              <span className="text-cyan-400 font-bold text-xs sm:text-sm">&lt; 5 MS</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="group relative px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-mono font-bold text-xs sm:text-sm tracking-wider uppercase overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.4)] hover:shadow-[0_0_50px_rgba(0,243,255,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 sm:gap-3"
              data-cursor-text="VIEW"
            >
              <span>EXPLORE AI MODELS</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>

            <button
              onClick={() => setIsTerminalOpen(true)}
              className="group px-5 py-3.5 sm:px-7 sm:py-4 rounded-xl glass-panel border border-purple-500/40 text-purple-300 font-mono font-bold text-xs sm:text-sm tracking-wider uppercase hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2 sm:gap-3 shadow-[0_0_20px_rgba(157,0,255,0.2)]"
              data-cursor-text="TERMINAL"
            >
              <Terminal className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
              <span>LAUNCH AI CLI</span>
            </button>

            <a
              href="/Tejas_kharkar_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl glass-panel border border-white/10 text-slate-300 font-mono font-bold text-xs sm:text-sm tracking-wider uppercase hover:border-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              data-cursor-text="PDF"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>RESUME</span>
            </a>
          </div>

        </div>

        {/* Right Column: Realistic Cutout Portrait (Mobile Optimized) */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-4 lg:mt-0">
          <div className="absolute w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] rounded-full border border-cyan-500/20 border-dashed animate-[spin_40s_linear_infinite] pointer-events-none" />
          <div className="absolute w-[200px] h-[200px] sm:w-[340px] sm:h-[340px] rounded-full border border-purple-500/20 pointer-events-none shadow-[0_0_40px_rgba(0,243,255,0.15)]" />

          <div className="relative z-10 w-full max-w-[240px] sm:max-w-[340px] md:max-w-[400px] aspect-[4/5] animate-float flex items-center justify-center">
            <div className="absolute top-6 w-[80%] h-[80%] bg-gradient-to-t from-cyan-500/40 via-purple-600/30 to-transparent rounded-full blur-[40px] pointer-events-none" />

            <Image
              src="/images/tejas_cutout.png"
              alt="Tejas Kharkar Portrait"
              width={500}
              height={625}
              priority
              sizes="(max-width: 768px) 60vw, 40vw"
              className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(0,243,255,0.35)] select-none pointer-events-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
