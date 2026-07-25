'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  X,
  Send,
  Sparkles,
  User,
  RefreshCw,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  Download,
  Mail,
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  chips?: string[];
  links?: { label: string; url: string; external?: boolean }[];
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: "Hello! 👋 I'm **Tejas AI Assistant**, custom-built to answer your questions about Tejas Kharkar's AI models, engineering projects, skills, and experience.\n\nHow can I help you today?",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    chips: [
      '🤖 What AI models has Tejas built?',
      '🛠️ What is Tejas\' tech stack?',
      '💼 Tell me about Tejas\' experience',
      '📄 Download Tejas\' Resume',
      '📫 How can I contact Tejas?',
    ],
  },
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateResponse = (query: string): Partial<Message> => {
    const q = query.toLowerCase();

    if (q.includes('project') || q.includes('model') || q.includes('built') || q.includes('yolo') || q.includes('rag')) {
      return {
        text: "⚡ **Tejas has developed 14+ end-to-end AI & Deep Learning projects** across Computer Vision, GenAI, and TinyML:\n\n" +
              "• **AI PPE Safety Detection**: Real-time YOLOv11 multi-class gear detection engine (96.5% mAP).\n" +
              "• **GenAI RAG Knowledge Engine**: Enterprise RAG pipeline using Llama 3 8B, BGE embeddings & ChromaDB.\n" +
              "• **Driver Drowsiness AI**: 468-point 3D MediaPipe face mesh computing EAR & MAR fatigue alerts.\n" +
              "• **ESP32 Edge AI**: INT8 quantized MobileNetV2 TinyML model running on ESP32-CAM (48ms latency).\n" +
              "• **Multimodal X-Ray AI**: DenseNet-121 chest radiography diagnostic classifier with Grad-CAM heatmaps.\n\n" +
              "You can explore all full source code repositories on GitHub!",
        links: [
          { label: 'View Projects Section', url: '#projects' },
          { label: 'GitHub Repositories', url: 'https://github.com/Tejas-1017', external: true },
        ],
        chips: ['🛠️ Tech Stack', '💼 Experience', '📫 Contact Tejas'],
      };
    }

    if (q.includes('skill') || q.includes('stack') || q.includes('language') || q.includes('tech') || q.includes('tool')) {
      return {
        text: "🛠️ **Tejas' Core AI & Software Engineering Stack:**\n\n" +
              "• **Deep Learning & ML**: PyTorch, TensorFlow, YOLOv11, Scikit-Learn, LightGBM, OpenCV, MediaPipe\n" +
              "• **GenAI & LLMs**: LangChain, LlamaIndex, ChromaDB, HuggingFace, RAG Architectures, Fine-Tuning\n" +
              "• **Edge AI & Embedded**: TinyML, ESP32-CAM, C++, ROS2 Humble, Raspberry Pi, CUDA\n" +
              "• **Languages & Web**: Python, C++, TypeScript, Next.js, React, FastAPI, Docker, Git",
        links: [
          { label: 'Explore Skills Matrix', url: '#skills' },
        ],
        chips: ['🤖 AI Projects', '📄 Download Resume', '📫 Contact Tejas'],
      };
    }

    if (q.includes('experience') || q.includes('work') || q.includes('background') || q.includes('job') || q.includes('career')) {
      return {
        text: "💼 **Tejas Kharkar is an AI & Machine Learning Software Engineer** specializing in Computer Vision, Edge AI, and Generative AI.\n\n" +
              "Key Focus Areas:\n" +
              "• Building real-time computer vision streams with sub-50ms latency\n" +
              "• Deploying enterprise RAG pipelines and local quantized LLMs\n" +
              "• Optimizing TinyML models for low-power edge microcontrollers\n" +
              "• Full-stack AI REST API & Web integration using FastAPI & Next.js",
        links: [
          { label: 'View Full Timeline', url: '#experience' },
        ],
        chips: ['🤖 AI Projects', '📄 Download Resume', '📫 Contact Tejas'],
      };
    }

    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return {
        text: "📄 You can view and download **Tejas Kharkar's official Resume PDF** directly below:",
        links: [
          { label: 'Download Tejas_Kharkar_Resume.pdf', url: '/Tejas_kharkar_.pdf', external: true },
        ],
        chips: ['🤖 AI Projects', '💼 Experience', '📫 Contact Tejas'],
      };
    }

    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire') || q.includes('linkedin')) {
      return {
        text: "📫 **Get in touch with Tejas Kharkar:**\n\n" +
              "• **Email**: tejaskharkar15@gmail.com\n" +
              "• **LinkedIn**: linkedin.com/in/tejas-kharkar-tech\n" +
              "• **GitHub**: github.com/Tejas-1017\n\n" +
              "Feel free to send a message directly using the Contact Form on the page!",
        links: [
          { label: 'Go to Contact Form', url: '#contact' },
          { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/tejas-kharkar-tech', external: true },
        ],
        chips: ['🤖 AI Projects', '📄 Download Resume'],
      };
    }

    // Default intelligent AI response
    return {
      text: `Thanks for asking! As **Tejas AI Copilot**, I can tell you all about Tejas Kharkar's software engineering background, AI projects, computer vision models, or contact info.\n\nWould you like to explore his AI projects, technical skills, or send him a message?`,
      chips: [
        '🤖 What AI models has Tejas built?',
        '🛠️ What is Tejas\' tech stack?',
        '💼 Tell me about Tejas\' experience',
        '📫 How can I contact Tejas?',
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time for realistic response
    setTimeout(() => {
      const respData = generateResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: respData.text || '',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        chips: respData.chips,
        links: respData.links,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={lineIdx} className={lineIdx > 0 ? 'block mt-1' : 'block'}>
          {parts.map((part, partIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={partIdx} className="font-bold text-white">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <>
      {/* Floating Widget Trigger Button */}
      <div className="fixed bottom-6 right-6 z-[9990] flex items-center gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c101c]/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(0,243,255,0.2)] cursor-pointer hover:border-cyan-400 transition-all select-none backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Ask Tejas AI Copilot</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-white shadow-[0_0_25px_rgba(0,243,255,0.4)] border border-cyan-300/40 hover:shadow-[0_0_35px_rgba(0,243,255,0.6)] transition-all cursor-pointer overflow-hidden group"
          aria-label="Toggle AI Assistant Chat"
        >
          {/* Ambient Glow Pulse */}
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md animate-ping pointer-events-none opacity-50" />
          {isOpen ? (
            <X className="w-6 h-6 text-white relative z-10" />
          ) : (
            <Bot className="w-7 h-7 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          )}
        </motion.button>
      </div>

      {/* Floating Glassmorphism Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="fixed bottom-24 right-4 sm:right-6 z-[9990] w-[calc(100vw-2rem)] sm:w-[410px] h-[540px] rounded-2xl bg-[#090d18]/95 border border-cyan-500/30 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(0,243,255,0.15)] flex flex-col overflow-hidden font-sans pointer-events-auto"
          >
            {/* Header Bar */}
            <div className="px-4 py-3 bg-gradient-to-r from-[#0c1224] via-[#0f172a] to-[#0c1224] border-b border-cyan-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-300" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#090d18]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white tracking-wide">Tejas AI Assistant</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      COPILOT
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400">Online // AI Knowledge Core</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  title="Reset Conversation"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Conversation Messages Viewport */}
            <div
              data-lenis-prevent
              data-lenis-prevent-wheel
              data-lenis-prevent-touch
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-4 text-sm text-slate-200 scrollbar-thin scrollbar-thumb-cyan-500/20"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono text-slate-400 px-1">
                    {msg.sender === 'bot' ? (
                      <>
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span>Tejas AI</span>
                      </>
                    ) : (
                      <>
                        <User className="w-3 h-3 text-purple-400" />
                        <span>You</span>
                      </>
                    )}
                    <span>• {msg.timestamp}</span>
                  </div>

                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none shadow-[0_0_15px_rgba(0,243,255,0.2)]'
                        : 'bg-[#111827]/90 border border-slate-800 text-slate-200 rounded-tl-none shadow-md'
                    }`}
                  >
                    {renderFormattedText(msg.text)}
                  </div>

                  {/* Links / Action Buttons */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 max-w-[88%]">
                      {msg.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target={link.external ? '_blank' : '_self'}
                          rel={link.external ? 'noopener noreferrer' : ''}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-mono transition-all hover:bg-cyan-500/20"
                        >
                          {link.url.includes('.pdf') ? (
                            <Download className="w-3.5 h-3.5" />
                          ) : link.external ? (
                            <ExternalLink className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5" />
                          )}
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Interactive Quick Suggestion Chips */}
                  {msg.chips && msg.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 max-w-[95%]">
                      {msg.chips.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(chip)}
                          className="px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 text-slate-300 text-xs transition-all text-left cursor-pointer"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#111827] border border-slate-800 w-24">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Box Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#0c1224] border-t border-cyan-500/20 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about AI models, skills, contact..."
                className="flex-1 bg-[#111827] text-slate-100 placeholder-slate-500 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500/60 font-sans"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
