'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'AI Engineer',
    company: 'Hashtee Labs',
    period: 'May 2026 – Present',
    location: 'Mumbai, India',
    desc: 'Deploying industrial Computer Vision and Edge AI models for real-time monitoring and automation.',
    points: [
      'Developed Computer Vision and Edge AI solutions for industrial automation and monitoring applications.',
      'Built OpenCV-based image processing pipelines for real-time detection and tracking.',
      'Integrated AI models with embedded hardware for low-latency inference.',
      'Implemented MQTT-based communication systems for IoT device management.',
      'Worked on deployment optimization and model performance tuning.',
    ],
    tech: ['Python', 'OpenCV', 'Edge AI', 'MQTT', 'Low-Latency Inference', 'Linux'],
  },
  {
    title: 'Technical Lead – Embedded & Edge AI',
    company: 'Shunya',
    period: 'Aug 2023 – Present',
    location: 'Jaipur / Remote',
    desc: 'Leading hardware-software R&D, building TinyML pipelines, BLE smart systems, and medical health monitors.',
    points: [
      'Built 5+ embedded AI and IoT prototypes using ESP32 and STM32.',
      'Designed complete TinyML pipelines including data collection, labeling, training, quantization and deployment.',
      'Developed BLE Smart Lock using RSSI-based proximity authentication.',
      'Built portable health monitoring device measuring SpO2, BPM and temperature.',
      'Implemented MPU6050-based motion analysis system for tremor detection.',
      'Optimized firmware for latency, memory footprint and power consumption.',
    ],
    tech: ['ESP32', 'STM32', 'TinyML', 'TensorFlow Lite Micro', 'BLE', 'MPU6050', 'Firmware C/C++'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/40">
      {/* Background Lights */}
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>03 // WORK EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white"
          >
            CAREER <span className="text-gradient-cyan">TIMELINE</span>
          </motion.h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Central Glowing Animated Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600 shadow-[0_0_15px_#00f3ff] -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Pulse Center Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_#00f3ff]">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <div className="p-8 rounded-2xl glass-panel-glow light-sweep-container relative">
                      
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-cyan-400" />
                          <span className="font-mono text-xs text-cyan-300 font-bold tracking-wider">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                          <Calendar className="w-3 h-3 text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      
                      <div className="flex items-center gap-2 font-mono text-xs text-slate-400 mb-6">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-3 mb-6">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-300 font-light leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
