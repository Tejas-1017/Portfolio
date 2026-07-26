"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, X, Send } from "lucide-react";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export default function AITerminal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-cyan-400 font-bold">TEJAS KHARKAR // AI & ML CORE CLI v3.4.0</p>
          <p className="text-gray-400">Type <span className="text-cyan-300">help</span> to view available system diagnostics commands.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-cyan-400 font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-cyan-300 w-24 inline-block">whoami</span> - Display engineer profile bio</p>
            <p><span className="text-cyan-300 w-24 inline-block">skills</span> - Inspect AI/ML core technology stack</p>
            <p><span className="text-cyan-300 w-24 inline-block">projects</span> - List 14 featured deep learning codebases</p>
            <p><span className="text-cyan-300 w-24 inline-block">experience</span> - View career history & positions</p>
            <p><span className="text-cyan-300 w-24 inline-block">contact</span> - Retrieve transmission coordinates</p>
            <p><span className="text-cyan-300 w-24 inline-block">clear</span> - Flush CLI output terminal</p>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-white font-bold">Tejas Rohit Kharkar</p>
            <p className="text-gray-400">AI & Machine Learning Software Engineer | Computer Vision & TinyML Specialist</p>
            <p className="text-gray-400">Location: Mumbai, India | Email: tejaskharkar15@gmail.com</p>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-cyan-400 font-bold">CORE AI/ML TECH MATRIX:</p>
            <p>• Deep Learning: PyTorch, TensorFlow, Scikit-Learn, Keras</p>
            <p>• Computer Vision: OpenCV, YOLOv11, MediaPipe, Video Analytics</p>
            <p>• GenAI & LLMs: Llama 3, ChromaDB, RAG Pipelines, HuggingFace</p>
            <p>• Edge AI / TinyML: TFLite Micro, ESP32, C++, Edge Impulse</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-cyan-400 font-bold">14 FEATURED AI/ML REPOSITORIES:</p>
            <p>1. ai-powered-ppe-detection-yolo (YOLOv11 & OpenCV Safety Analytics)</p>
            <p>2. genai-rag-knowledge-engine (Llama-3 & ChromaDB RAG Engine)</p>
            <p>3. realtime-driver-drowsiness-ai (MediaPipe 468 3D Mesh Vision AI)</p>
            <p>4. multimodal-medical-xray-ai (DenseNet-121 & Grad-CAM Diagnostic AI)</p>
            <p>5. realtime-sign-language-translator (21-Point Hand Mesh & PyTorch LSTM)</p>
            <p>6. neural-style-art-generator (VGG-19 Perceptual Loss Real-Time Painter)</p>
            <p>7. smart-agriculture-crop-disease-ai (Drone Vision & NDVI Leaf Analytics)</p>
            <p>8. fintech-fraud-detection-ai (Graph Neural Nets & LightGBM Fraud AI)</p>
            <p>9. edge-ai-object-detection-esp32 (TinyML TFLite Micro Image Classifier)</p>
            <p>10. autonomous-edge-vision-rover (ROS2 Humble & YOLO Spatial Navigation)</p>
            <p>11. smart-industrial-machine-health (Scikit-Learn Isolation Forest Predictive ML)</p>
            <p>12. ble-smart-lock-system (BLE RSSI Proximity Machine Learning Lock)</p>
            <p>13. assistive-robotics-parkinsons (MPU6050 Motion AI Tremor Suppression)</p>
            <p>14. multiscope-health-monitor (Biomedical DSP SpO2 & Temp Analytics)</p>
          </div>
        );
        break;

      case "experience":
        outputNode = (
          <div className="space-y-1 text-xs text-gray-300">
            <p>• <span className="text-cyan-300">AI Engineer @ Hashtee Labs</span> (Computer Vision & Edge AI)</p>
            <p>• <span className="text-cyan-300">Technical Lead AI @ Shunya</span> (TinyML & Sensor Intelligence Systems)</p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs text-gray-300">
            <p>• LinkedIn: linkedin.com/in/tejas-kharkar-tech</p>
            <p>• GitHub: github.com/Tejas-1017</p>
            <p>• Email: tejaskharkar15@gmail.com</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        outputNode = (
          <p className="text-red-400 text-xs">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-cyan-300">help</span> for commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output: outputNode }]);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl h-[480px] bg-gradient-to-b from-gray-950 to-black border border-cyan-500/50 rounded-2xl flex flex-col shadow-[0_0_50px_rgba(0,243,255,0.25)] overflow-hidden">
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-gray-900/90 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-xs font-mono text-cyan-400 ml-2 font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" /> tejas@aiml-node:~$
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Output Body */}
        <div className="flex-1 p-4 font-mono overflow-y-auto space-y-3">
          {history.map((h, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-cyan-400">
                <span>tejas@aiml-node:~$</span>
                <span className="text-white font-bold">{h.command}</span>
              </div>
              <div className="pl-4">{h.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleCommand} className="p-3 bg-gray-950 border-t border-gray-800 flex items-center gap-2 font-mono">
          <span className="text-cyan-400 text-xs font-bold">tejas@aiml-node:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent text-white text-xs focus:outline-none placeholder-gray-600"
            autoFocus
          />
          <button type="submit" className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-colors">
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
