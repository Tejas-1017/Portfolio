"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub as Github } from "react-icons/fa6";
import { ExternalLink, Cpu, Activity, ShieldCheck, Zap, Layers, Sparkles, X, Terminal, Brain, Eye, Lock, HeartPulse, Stethoscope, Hand, Palette, Sprout, CreditCard } from "lucide-react";

interface ProjectMetric {
  label: string;
  value: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  architecture: string;
  precision: string;
  latency: string;
  tech: string[];
  metrics: ProjectMetric[];
  github: string;
  demo?: string;
  icon: React.ElementType;
}

const projectsData: Project[] = [
  {
    id: "ppe-detection",
    title: "AI PPE & CCTV Safety Monitoring System",
    category: "Computer Vision & Deep Learning",
    description: "Real-time edge computer vision safety pipeline detecting helmets, vests, and safety gear from multiple high-definition RTSP streams.",
    longDescription: "Engineered an end-to-end industrial computer vision application leveraging YOLOv11 and PyTorch. Features multi-thread RTSP frame processing, real-time spatial bounding box regression, and automated MQTT telemetry alerts when safety gear violations occur.",
    architecture: "YOLOv11-Custom + PyTorch + OpenCV CUDA",
    precision: "98.7% mAP@0.5",
    latency: "3.8 ms / frame",
    tech: ["YOLOv11", "PyTorch", "OpenCV", "Python", "CUDA", "FastAPI"],
    metrics: [
      { label: "Precision mAP", value: "98.7%", color: "text-cyan-400" },
      { label: "Inference Speed", value: "3.8 ms", color: "text-green-400" },
      { label: "Parallel Streams", value: "16 RTSP", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/ai-powered-ppe-detection-yolo",
    icon: ShieldCheck
  },
  {
    id: "genai-rag",
    title: "GenAI RAG Document Intelligence Engine",
    category: "Generative AI & LLMs",
    description: "Enterprise Retrieval-Augmented Generation (RAG) system running local quantized Llama-3 and ChromaDB vector embeddings.",
    longDescription: "Developed a secure offline GenAI engine using PyTorch, HuggingFace Transformers, and ChromaDB vector database. Implements contextual hybrid search, sentence-transformer embeddings, and sub-1.2s TTFT local Llama-3 inference.",
    architecture: "Llama-3-8B (INT4) + ChromaDB + LangChain",
    precision: "99.2% Retrieval Accuracy",
    latency: "< 1.2s TTFT",
    tech: ["PyTorch", "ChromaDB", "FastAPI", "Llama 3", "LangChain", "Python"],
    metrics: [
      { label: "Retrieval Accuracy", value: "99.2%", color: "text-cyan-400" },
      { label: "TTFT Latency", value: "< 1.2s", color: "text-green-400" },
      { label: "Quantization", value: "INT4 GGUF", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/genai-rag-knowledge-engine",
    icon: Brain
  },
  {
    id: "driver-drowsiness",
    title: "Real-Time Driver Drowsiness Vision AI",
    category: "Computer Vision & Safety",
    description: "Computer vision driver safety system tracking 468 3D facial landmarks to calculate EAR/MAR for fatigue detection.",
    longDescription: "Created a real-time driver fatigue monitor that measures Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) from 468 facial mesh landmarks using MediaPipe and PyTorch to prevent microsleep accidents.",
    architecture: "MediaPipe 3D Mesh + PyTorch CNN + OpenCV",
    precision: "98.9% Fatigue Detection",
    latency: "3.5 ms / frame",
    tech: ["MediaPipe", "OpenCV", "PyTorch", "Python", "NumPy"],
    metrics: [
      { label: "Fatigue Accuracy", value: "98.9%", color: "text-cyan-400" },
      { label: "FPS Rate", value: "60 FPS", color: "text-green-400" },
      { label: "Landmarks", value: "468 Mesh", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/realtime-driver-drowsiness-ai",
    icon: Eye
  },
  {
    id: "medical-xray-ai",
    title: "Multimodal Medical X-Ray Pathological AI",
    category: "AI Healthcare & Explainable AI",
    description: "Vision Transformer & DenseNet-121 model for chest X-ray diagnosis with Grad-CAM visual heatmaps.",
    longDescription: "Deep learning medical imaging pipeline trained on NIH ChestX-ray14 dataset. Provides automated pathology detection (Pneumonia, Effusion) with sub-15ms Grad-CAM heatmaps highlighting pulmonary anomalies.",
    architecture: "DenseNet-121 + Vision Transformer (ViT) + Grad-CAM",
    precision: "96.4% AUC-ROC Score",
    latency: "12 ms / image",
    tech: ["PyTorch", "Torchvision", "DenseNet-121", "Grad-CAM", "FastAPI"],
    metrics: [
      { label: "AUC-ROC Score", value: "96.4%", color: "text-cyan-400" },
      { label: "Grad-CAM Latency", value: "12 ms", color: "text-green-400" },
      { label: "Precision", value: "FP16 TensorRT", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/multimodal-medical-xray-ai",
    icon: Stethoscope
  },
  {
    id: "sign-language-ai",
    title: "Real-Time Sign Language & Gesture AI",
    category: "Computer Vision & Gesture NLP",
    description: "21-Point 3D hand mesh tracking and PyTorch LSTM model translating sign gestures into speech in real time.",
    longDescription: "Bi-directional vision system tracking 21-point 3D hand mesh coordinates using MediaPipe and PyTorch LSTM to translate ASL sign language into text and real-time audio speech synthesis.",
    architecture: "MediaPipe 3D Mesh + PyTorch LSTM + gTTS",
    precision: "97.6% Gesture Accuracy",
    latency: "3.2 ms / frame",
    tech: ["MediaPipe", "PyTorch", "LSTM", "OpenCV", "gTTS", "Python"],
    metrics: [
      { label: "Gesture Accuracy", value: "97.6%", color: "text-cyan-400" },
      { label: "Stream Speed", value: "60 FPS", color: "text-green-400" },
      { label: "Hand Mesh Nodes", value: "21 Points", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/realtime-sign-language-translator",
    icon: Hand
  },
  {
    id: "neural-style-art",
    title: "Neural Artistic Style Transfer & Painter",
    category: "Generative AI & Style Transfer",
    description: "Fast VGG-19 perceptual loss style transfer engine re-styling live video streams at 40 FPS.",
    longDescription: "Real-time neural artistic style transfer system utilizing deep VGG-19 perceptual loss networks and ONNX Runtime FP16 acceleration to paint live video streams in iconic artistic styles.",
    architecture: "VGG-19 Perceptual Loss + ONNX Runtime FP16",
    precision: "Loss < 0.02",
    latency: "40 FPS Stream",
    tech: ["PyTorch", "VGG-19", "ONNX Runtime", "OpenCV", "Streamlit"],
    metrics: [
      { label: "Video Frame Rate", value: "40 FPS", color: "text-cyan-400" },
      { label: "Perceptual Loss", value: "< 0.02", color: "text-green-400" },
      { label: "Runtime Engine", value: "ONNX FP16", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/neural-style-art-generator",
    icon: Palette
  },
  {
    id: "crop-disease-ai",
    title: "Smart Agriculture Drone Crop Health AI",
    category: "AgriTech & Drone Vision",
    description: "Drone aerial imagery vision pipeline for leaf pathology segmentation and NDVI vegetation index calculation.",
    longDescription: "Edge AI drone vision system segmenting crop leaf diseases (Blight, Rust) with YOLOv11-Segment while computing real-time NDVI chlorophyll health maps for precision agricultural spraying.",
    architecture: "YOLOv11-Segment + PyTorch + OpenCV NDVI",
    precision: "98.1% Leaf mAP",
    latency: "2.8 ms / frame",
    tech: ["YOLOv11", "PyTorch", "OpenCV", "Python", "AgriTech"],
    metrics: [
      { label: "Pathology mAP", value: "98.1%", color: "text-cyan-400" },
      { label: "Stream Speed", value: "35 FPS", color: "text-green-400" },
      { label: "Inference Speed", value: "2.8 ms", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/smart-agriculture-crop-disease-ai",
    icon: Sprout
  },
  {
    id: "fintech-fraud-ai",
    title: "Real-Time FinTech Financial Fraud AI",
    category: "FinTech ML & Graph Neural Nets",
    description: "Graph Neural Network & LightGBM ensemble pipeline scoring transaction fraud in sub-1.5ms.",
    longDescription: "High-throughput financial fraud scoring engine combining PyTorch Geometric Graph Neural Networks (GNN) and LightGBM to identify multi-hop money laundering loops and transaction anomalies in sub-1.5ms.",
    architecture: "PyTorch Geometric GNN + LightGBM + SMOTE",
    precision: "99.6% ROC-AUC",
    latency: "< 1.5 ms / transaction",
    tech: ["PyTorch Geometric", "LightGBM", "Scikit-Learn", "FastAPI", "Python"],
    metrics: [
      { label: "ROC-AUC Score", value: "99.6%", color: "text-cyan-400" },
      { label: "Scoring Latency", value: "< 1.5 ms", color: "text-green-400" },
      { label: "Model Type", value: "GNN Ensemble", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/fintech-fraud-detection-ai",
    icon: CreditCard
  },
  {
    id: "edge-object-detection",
    title: "Edge AI TinyML Image Classification",
    category: "TinyML & Model Quantization",
    description: "Quantized INT8 MobileNetV2 image classification engine deployed on microcontroller hardware.",
    longDescription: "Designed an ultra-compact TinyML visual recognition engine. Quantized MobileNetV2 architecture down to 240KB INT8 model arena running on microcontrollers with 85ms inference cycle.",
    architecture: "TFLite Micro (INT8) + Edge Impulse + C++",
    precision: "96.4% Top-1 Accuracy",
    latency: "85 ms (CPU Edge)",
    tech: ["TFLite Micro", "C++", "Python", "Edge Impulse", "TensorFlow"],
    metrics: [
      { label: "Top-1 Accuracy", value: "96.4%", color: "text-cyan-400" },
      { label: "Model Arena", value: "240 KB", color: "text-green-400" },
      { label: "Quantization", value: "INT8 Full", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/edge-ai-object-detection-esp32",
    icon: Cpu
  },
  {
    id: "edge-vision-rover",
    title: "Autonomous Edge Vision Navigation Rover",
    category: "Robotics Vision & Spatial AI",
    description: "Autonomous vision system combining ROS2 Humble and YOLOv11-Nano spatial depth mapping.",
    longDescription: "Robotics computer vision application utilizing ROS2 nodes and YOLOv11-Nano object detection for real-time visual feature tracking, stereoscopic spatial mapping, and autonomous obstacle avoidance.",
    architecture: "ROS2 Humble + YOLOv11-Nano + OpenCV Depth",
    precision: "97.8% Obstacle Avoidance",
    latency: "4.8 ms / frame",
    tech: ["ROS2", "YOLOv11-Nano", "OpenCV", "PyTorch", "Python", "C++"],
    metrics: [
      { label: "Obstacle Avoidance", value: "97.8%", color: "text-cyan-400" },
      { label: "Frame Latency", value: "4.8 ms", color: "text-green-400" },
      { label: "ROS Nodes", value: "12 Nodes", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/autonomous-edge-vision-rover",
    icon: Zap
  },
  {
    id: "smart-industrial-health",
    title: "Smart Industrial Machine Health Anomaly AI",
    category: "Predictive ML & Time-Series AI",
    description: "Time-series predictive maintenance AI engine using Scikit-Learn Isolation Forests.",
    longDescription: "Industrial IoT predictive maintenance machine learning system analyzing tri-axis vibration frequencies and thermal telemetry to predict equipment breakdown weeks before failure.",
    architecture: "Isolation Forest + Scikit-Learn + MQTT Stream",
    precision: "99.1% Anomaly Detection",
    latency: "1.2 ms / sample",
    tech: ["Scikit-Learn", "Python", "MQTT", "Pandas", "NumPy"],
    metrics: [
      { label: "Anomaly Accuracy", value: "99.1%", color: "text-cyan-400" },
      { label: "Sampling Speed", value: "1.2 ms", color: "text-green-400" },
      { label: "Early Warning", value: "14 Days", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/smart-industrial-machine-health",
    icon: Activity
  },
  {
    id: "ble-smart-lock",
    title: "BLE Proximity Machine Learning Lock",
    category: "AI Proximity Classification",
    description: "BLE RSSI signal filtering and decision tree machine learning lock system.",
    longDescription: "Engineered a secure smart proximity authentication system using BLE RSSI signal kalman filtering and a decision tree classifier to execute touchless unlock triggers.",
    architecture: "Kalman Filter + Decision Tree Classifier",
    precision: "99.4% Auth Accuracy",
    latency: "18 ms cycle",
    tech: ["BLE", "C++", "Python", "Scikit-Learn"],
    metrics: [
      { label: "Auth Accuracy", value: "99.4%", color: "text-cyan-400" },
      { label: "Range Precision", value: "±0.15 m", color: "text-green-400" },
      { label: "Latency", value: "18 ms", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/ble-smart-lock-system",
    icon: Lock
  },
  {
    id: "parkinsons-robotics",
    title: "Assistive Tremor Motion Analysis AI",
    category: "Motion Pattern Recognition AI",
    description: "MPU6050 6-DOF sensor real-time tremor cancellation algorithm using PID control.",
    longDescription: "Biomedical engineering application featuring real-time motion tracking with 6-DOF IMU sensors and closed-loop PID filtering to stabilize pathological hand tremors.",
    architecture: "6-DOF IMU Filter + PID Controller",
    precision: "94.2% Tremor Suppression",
    latency: "2.1 ms update",
    tech: ["C++", "Python", "Motion AI", "PID Control"],
    metrics: [
      { label: "Suppression Rate", value: "94.2%", color: "text-cyan-400" },
      { label: "Filter Delay", value: "2.1 ms", color: "text-green-400" },
      { label: "Sampling Rate", value: "500 Hz", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/assistive-robotics-parkinsons",
    icon: Layers
  },
  {
    id: "multiscope-health",
    title: "Multiscope Biomedical AI Health Monitor",
    category: "Biomedical Signal Analytics",
    description: "Real-time SpO2, heart rate, and thermal biomedical signal processing telemetry.",
    longDescription: "Multi-parameter health diagnostic device analyzing PPG pulse waves and infrared thermometry to calculate SpO2 oxygen saturation and heart rate variability in real-time.",
    architecture: "PPG Signal DSP + Infrared Analytics",
    precision: "99.0% Vital Accuracy",
    latency: "1.0 ms sampling",
    tech: ["C++", "DSP", "Python", "Biomedical AI"],
    metrics: [
      { label: "Vital Accuracy", value: "99.0%", color: "text-cyan-400" },
      { label: "DSP Sampling", value: "1.0 ms", color: "text-green-400" },
      { label: "Telemetry", value: "Real-Time", color: "text-purple-400" }
    ],
    github: "https://github.com/Tejas-1017/multiscope-health-monitor",
    icon: HeartPulse
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-950/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-950/20 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>14 FEATURED AI/ML CODEBASES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-space font-bold">
              FEATURED <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">AI & ML PROJECTS</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            Production-ready deep learning models, computer vision systems, generative AI engines, and TinyML neural networks engineered for extreme accuracy and low latency.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative rounded-2xl bg-gradient-to-b from-gray-900/90 to-black p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-cyan-400/80 px-2.5 py-1 rounded-md bg-cyan-950/30 border border-cyan-500/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 font-space">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-800/80 text-gray-300 border border-gray-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold group/btn"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>INSPECT METRICS</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Model Metrics Inspector Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-gradient-to-b from-gray-900 to-black border border-cyan-500/40 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(0,243,255,0.2)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400">AI MODEL INFRASTRUCTURE & METRICS</span>
                  <h3 className="text-2xl font-bold text-white font-space">{selectedProject.title}</h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Telemetry Cards Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/60 border border-gray-800 text-center">
                    <span className="text-[11px] font-mono text-gray-400 block mb-1">{m.label}</span>
                    <span className={`text-lg font-extrabold font-mono ${m.color}`}>{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Architecture Detail Box */}
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 mb-6 font-mono text-xs text-gray-300">
                <span className="text-cyan-400 font-bold block mb-1">// ARCHITECTURE & DEPLOYMENT SPECS</span>
                <p>{selectedProject.architecture}</p>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm hover:brightness-110 transition-all font-mono"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW GITHUB REPOSITORY</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
