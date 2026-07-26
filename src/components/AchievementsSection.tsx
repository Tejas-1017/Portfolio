'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, ShieldCheck } from 'lucide-react';

const achievements = [
  {
    title: '1st Winner – Innovation Challenge',
    event: "ESYA '23",
    organizer: 'IIIT Delhi',
    rank: '1ST WINNER',
    rankBadge: 'gold',
    desc: 'Awarded 1st Winner at IIIT Delhi for pioneering AI hardware innovation and project demonstration.',
    category: 'National Innovation',
  },
  {
    title: '1st Winner – Project Expo',
    event: 'Project Expo MIT',
    organizer: 'MIT Jaipur',
    rank: '1ST PLACE',
    rankBadge: 'gold',
    desc: 'Secured 1st Place in the engineering project exposition showcasing real-time robotics and AI integration.',
    category: 'Robotics & AI',
  },
  {
    title: 'International Winner (Runner Up)',
    event: 'Technoxian RC Electric International 2024',
    organizer: 'Technoxian World Robotics Championship',
    rank: 'INTERNATIONAL RUNNER UP',
    rankBadge: 'cyan',
    desc: 'Achieved International Runner Up position in high-performance RC electric autonomous engineering.',
    category: 'International Robotics',
  },
  {
    title: '1st Runner Up – Virtual Robotics',
    event: 'MindSpark 2023',
    organizer: 'COEP Pune (College of Engineering Pune)',
    rank: '1ST RUNNER UP',
    rankBadge: 'silver',
    desc: 'Secured 1st Runner Up position in advanced robot kinematic simulation & autonomous virtual navigation.',
    category: 'Virtual Simulation',
  },
  {
    title: '1st Runner Up – Innovation Challenge',
    event: 'Makers Carnival 2023',
    organizer: 'JECRC Jaipur',
    rank: '1ST RUNNER UP',
    rankBadge: 'silver',
    desc: 'Won 1st Runner Up honors for designing low-power edge sensor systems & hardware prototypes.',
    category: 'Hardware Innovation',
  },
  {
    title: '2nd Runner Up – IEEE National Project Expo',
    event: 'IEEE National Expo',
    organizer: 'Chandigarh University',
    rank: '2ND RUNNER UP',
    rankBadge: 'bronze',
    desc: 'Awarded 2nd Runner Up at the IEEE National Project Expo for multi-sensor IoT and embedded AI telemetry.',
    category: 'IEEE National',
  },
  {
    title: '2nd Runner Up – Engineer 2k23 Project Expo',
    event: 'Engineer 2k23',
    organizer: 'NIT Surathkal',
    rank: '2ND RUNNER UP',
    rankBadge: 'bronze',
    desc: 'Recognized at NIT Surathkal national technical symposium for real-time computer vision hardware architecture.',
    category: 'National Expo',
  },
  {
    title: '2nd Place – Innovation Competition',
    event: 'National Innovation Summit',
    organizer: 'NIT Srinagar',
    rank: '2ND PLACE',
    rankBadge: 'bronze',
    desc: 'Awarded 2nd Place for embedded AI research and TinyML real-time sensor processing pipelines.',
    category: 'National Innovation',
  },
  {
    title: '3rd Place – Makers Exhibition',
    event: 'Makers Carnival',
    organizer: 'JECRC Jaipur',
    rank: '3RD PLACE',
    rankBadge: 'bronze',
    desc: 'Secured 3rd Place in the Makers Exhibition showcasing Parkinson’s active tremor cancellation hardware.',
    category: 'Hardware Exhibition',
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-12 md:py-24 relative overflow-hidden bg-black/60">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3 shadow-[0_0_15px_rgba(0,243,255,0.15)]">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            <span>04 // NATIONAL & INTERNATIONAL HONORS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            AWARDS & <span className="text-gradient-cyan">RECOGNITIONS</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-4 font-mono">
            National IEEE Expos, International Robotics Championships, and IIT/NIT Technical Summit Victories
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const isGold = item.rankBadge === 'gold';
            const isCyan = item.rankBadge === 'cyan';
            const isSilver = item.rankBadge === 'silver';

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl glass-panel-glow light-sweep-container relative flex flex-col justify-between group border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div>
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {item.category}
                    </span>

                    <div
                      className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider flex items-center gap-1.5 ${
                        isGold
                          ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 shadow-[0_0_12px_rgba(234,179,8,0.3)]'
                          : isCyan
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,243,255,0.3)]'
                          : isSilver
                          ? 'bg-slate-300/20 text-slate-200 border border-slate-300/40'
                          : 'bg-amber-600/20 text-amber-300 border border-amber-500/40'
                      }`}
                    >
                      <Trophy className="w-3 h-3" />
                      <span>{item.rank}</span>
                    </div>
                  </div>

                  {/* Title & Event */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300 font-semibold mb-3">
                    <Award className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{item.organizer}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Event Tag */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-500">
                  <span>{item.event}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400/60" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
