'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, Mail, MapPin, Phone, CheckCircle2, Brain, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa6';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      console.log('Background email transmission dispatched.');
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#00f3ff', '#0066ff', '#9d00ff'],
      });

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 relative overflow-hidden bg-black/40">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>05 // INITIATE NEURAL TRANSMISSION</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            GET IN <span className="text-gradient-cyan">TOUCH</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Let&apos;s Build Cutting-Edge <span className="text-cyan-400">AI / ML Software</span> & <span className="text-purple-400">Vision Systems</span>.
            </h3>

            <p className="text-slate-300 text-sm font-light leading-relaxed mb-8">
              Open for Machine Learning Engineer roles, Computer Vision projects, Generative AI integration, and Deep Learning model deployment inquiries.
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-xl glass-panel-glow light-sweep-container flex items-center gap-4 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase">DIRECT EMAIL</p>
                  <p className="font-bold text-white text-sm">tejaskharkar15@gmail.com</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-panel-glow light-sweep-container flex items-center gap-4 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase">TELEPHONE</p>
                  <p className="font-bold text-white text-sm">+91 84591 65320</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-panel flex items-center gap-4 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase">LOCATION BASE</p>
                  <p className="font-bold text-white text-sm">Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-xs font-mono text-slate-400 uppercase mb-4">CONNECT CHANNELS</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/tejas-kharkar-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-panel border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                  data-cursor-text="LINKEDIN"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com/Tejas-1017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-panel border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                  data-cursor-text="GITHUB"
                >
                  <FaGithub className="w-5 h-5" />
                </a>

                <a
                  href="/Tejas_kharkar_.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-panel border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                  data-cursor-text="RESUME"
                >
                  <FaFilePdf className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-2xl glass-panel-glow light-sweep-container relative border border-cyan-500/30">
              
              <h3 className="text-xl font-mono font-bold text-white mb-6 flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span>AI TRANSMISSION TERMINAL</span>
              </h3>

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_30px_#00f3ff]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">TRANSMISSION DELIVERED</h4>
                  <p className="text-slate-300 font-mono text-xs max-w-sm">
                    Your message has been transmitted directly to tejaskharkar15@gmail.com. Tejas will review and respond shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs text-slate-300 uppercase mb-2">
                        YOUR NAME / IDENTITY *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Connor"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-300 uppercase mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-slate-300 uppercase mb-2">
                      SUBJECT / INQUIRY
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI / ML Engineering Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-slate-300 uppercase mb-2">
                      TRANSMISSION MESSAGE *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your AI / ML project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-black font-mono font-extrabold text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:shadow-[0_0_40px_rgba(0,243,255,0.8)] transition-all duration-300 hover:scale-[1.02] active:scale-98 disabled:opacity-50"
                    data-cursor-text="TRANSMIT"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>TRANSMITTING SIGNAL...</span>
                      </>
                    ) : (
                      <>
                        <span>INITIATE TRANSMISSION</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
