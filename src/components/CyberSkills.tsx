import React, { useState } from 'react';
import { motion } from 'motion/react';
import { skillCategories, softwareBadges } from '../config/portfolioConfig';
import {
  Code2,
  Terminal,
  Shield,
  Server,
  Lock,
  Search,
  Flame,
  Database,
  Cpu,
  Coffee,
  CheckCircle2,
  ShieldAlert,
  Smartphone,
  GitBranch,
  Layers
} from 'lucide-react';

export const CyberSkills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'cybersecurity' | 'frontend' | 'backend' | 'languages'>('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.category === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 bg-black cyber-grid-dense relative overflow-hidden border-t border-emerald-500/20">
      <div className="glow-bg-green bottom-10 left-10 w-[500px] h-[500px] opacity-15"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-emerald-500/20 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-cyber text-xs uppercase tracking-widest mb-1">
              <Shield className="w-4 h-4" />
              <span>SECURITY AUDITING & FULL-STACK STACK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              TECHNICAL <span className="text-neon-green text-gradient-green">TOOLSET</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mt-2">
              Combining proactive offensive security tools (Wireshark, Burp Suite, Nmap) with modern full-stack web engineering.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 font-cyber text-xs">
            {[
              { id: 'all', label: 'All Domains' },
              { id: 'cybersecurity', label: 'Cyber Security' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend & DB' },
              { id: 'languages', label: 'Languages' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 border-emerald-400 text-black font-bold shadow-neon-green-sm'
                    : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-cyber-card rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 mb-4">
                  <h3 className="font-cyber text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-cyber text-emerald-400/80 uppercase">
                    {cat.skills.length} TOOLS
                  </span>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          {skill.badgeCode && (
                            <span className="w-6 h-6 rounded bg-emerald-950 border border-emerald-500/40 text-[11px] font-cyber font-bold text-emerald-400 flex items-center justify-center">
                              {skill.badgeCode}
                            </span>
                          )}
                          <span className="font-cyber font-bold text-sm text-slate-100">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-cyber px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                          {skill.level}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-slate-400 leading-tight mt-1 pl-8">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom security posture note */}
              <div className="pt-2 text-[10px] font-cyber text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-500/70" />
                <span>Verified by practical lab & project work</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
