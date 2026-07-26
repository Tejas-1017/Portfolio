'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Sparkles, Code, Cpu, Layers, Check } from 'lucide-react';

const skillCategories = [
  {
    id: 'ai-ml',
    title: 'Deep Learning & ML',
    icon: Brain,
    desc: 'Neural Network Architectures, PyTorch, TensorFlow, Model Training, Optimization & Quantization.',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Deep Learning', 'Neural Networks', 'Model Quantization', 'TinyML'],
  },
  {
    id: 'vision',
    title: 'Computer Vision',
    icon: Eye,
    desc: 'Real-time object detection (YOLO), OpenCV image processing pipelines, video analytics & tracking.',
    skills: ['OpenCV', 'YOLO v8/v11', 'Object Detection', 'Multi-Object Tracking', 'CCTV Video Analytics', 'Segmentation'],
  },
  {
    id: 'genai',
    title: 'Generative AI & LLMs',
    icon: Sparkles,
    desc: 'Retrieval-Augmented Generation (RAG), Local LLM Inference, Transformer Models, Prompt Engineering.',
    skills: ['Generative AI', 'Large Language Models', 'RAG Pipelines', 'Prompt Engineering', 'Transformers', 'Vector Embeddings'],
  },
  {
    id: 'software',
    title: 'AI Software & Engineering',
    icon: Code,
    desc: 'High-performance backend systems, API integration, database design, version control.',
    skills: ['Python', 'C++', 'SQL', 'FastAPI / REST APIs', 'Git / GitHub', 'Linux CLI', 'VS Code'],
  },
  {
    id: 'edge-inference',
    title: 'Model Optimization & Edge',
    icon: Cpu,
    desc: 'Low-latency inference engines, TensorRT, ONNX Runtime, TFLite Micro, Edge Impulse.',
    skills: ['TensorFlow Lite Micro', 'ONNX Runtime', 'Edge Impulse', 'Latency Optimization', 'ESP32 / STM32 Hardware'],
  },
  {
    id: 'protocols-mlops',
    title: 'MLOps & IoT Data',
    icon: Layers,
    desc: 'Telemetry streaming, sensor signal processing, automated data pipelines, MQTT.',
    skills: ['MQTT Telemetry', 'BLE Signal Processing', 'MPU6050 Motion AI', 'Data Pipelines', 'Firmware C/C++'],
  },
];

export default function SkillsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="skills" className="py-12 md:py-24 relative overflow-hidden bg-black/60">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>02 // AI / ML TECHNICAL MATRIX</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            AI ENGINEERING <span className="text-gradient-cyan">SKILLS</span>
          </h2>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            const isHovered = hoveredCard === cat.id;

            return (
              <div
                key={cat.id}
                onMouseEnter={() => setHoveredCard(cat.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 rounded-2xl glass-panel light-sweep-container relative transition-all duration-300 cursor-pointer border ${
                  isHovered
                    ? 'border-cyan-400 shadow-[0_0_35px_rgba(0,243,255,0.25)] scale-[1.02] -translate-y-2'
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
                data-cursor-text="EXPLORE"
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? 'bg-cyan-500 text-black shadow-[0_0_20px_#00f3ff] rotate-6'
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    }`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
                  {cat.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors flex items-center gap-1"
                    >
                      <Check className="w-3 h-3 text-cyan-400" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
