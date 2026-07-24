'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Brain, Award, BookOpen, Layers, CheckCircle2, Download, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: Brain,
    value: '14+',
    label: 'AI & ML Codebases',
    desc: 'CV, YOLO & Neural Architectures',
  },
  {
    icon: Award,
    value: '2+',
    label: 'Years AI Specialization',
    desc: 'Hashtee Labs & Shunya',
  },
  {
    icon: BookOpen,
    value: 'B.Tech AI',
    label: 'Education Focus',
    desc: 'UEM Jaipur (2023 - 2027)',
  },
  {
    icon: Layers,
    value: '< 5ms',
    label: 'Ultra-Low Latency',
    desc: 'Optimized Real-Time Inference',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>01 // AI ENGINEER BIOGRAPHY & METRICS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white"
          >
            ABOUT <span className="text-gradient-cyan">ME</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-cyan-500/30 p-3 group shadow-[0_0_30px_rgba(0,243,255,0.15)]">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/tejas_photo.jpg"
                  alt="Tejas Kharkar AI Engineer"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white">
                  <div>
                    <p className="font-bold text-cyan-300">TEJAS ROHIT KHARKAR</p>
                    <p className="text-[10px] text-slate-400">AI / ML SOFTWARE ENGINEER</p>
                  </div>
                  <div className="px-2 py-1 rounded bg-purple-500/20 border border-purple-400/40 text-[10px] text-purple-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>AI ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
              Designing <span className="text-cyan-400">Deep Learning Architectures</span> & High-Throughput <span className="text-purple-400">Computer Vision Systems</span>.
            </h3>

            <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
              I am an AI and Machine Learning Engineer focused on crafting real-time Computer Vision pipelines, object detection systems (YOLO/OpenCV), Generative AI models, and model compression algorithms. Experienced in training, quantization (TFLite Micro/ONNX/TensorRT), and deploying low-latency intelligent software solutions.
            </p>

            <div className="space-y-3 mb-10 font-mono text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>AI Engineer at Hashtee Labs — Industrial Computer Vision & Real-Time Tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Technical Lead at Shunya — TinyML Neural Pipelines & Sensor Intelligence</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Specialized in PyTorch, TensorFlow, OpenCV, Generative AI & Model Optimization</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-8">
              {stats.map((st) => {
                const IconComp = st.icon;
                return (
                  <motion.div
                    key={st.label}
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.01 }}
                    className="p-4 rounded-xl glass-panel-glow light-sweep-container flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-extrabold font-mono text-white text-gradient-cyan">
                        {st.value}
                      </span>
                      <IconComp className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white mb-0.5">{st.label}</p>
                      <p className="text-[11px] text-slate-400 font-mono">{st.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div>
              <a
                href="/Tejas_kharkar_.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono font-bold text-xs tracking-wider uppercase hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:scale-105 active:scale-95"
                data-cursor-text="DOWNLOAD"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD AI RESUME (PDF)</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
