import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../config/portfolioConfig';
import {
  Terminal,
  Shield,
  Code2,
  FileText,
  ArrowRight,
  Laptop,
  Sparkles,
  MousePointer2,
  Lock,
  Cpu,
  Bot,
  Layers,
  Database,
  Smartphone,
  Globe,
  CheckCircle2
} from 'lucide-react';

interface CyberHeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenQuestionnaire: () => void;
  onViewProjects: () => void;
}

export const CyberHero: React.FC<CyberHeroProps> = ({
  onOpenContact,
  onOpenResume,
  onOpenQuestionnaire,
  onViewProjects
}) => {
  const [activeTool, setActiveTool] = useState<'terminal' | 'shield' | 'code' | 'ai' | 'avatar'>('avatar');

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-28 md:pb-24 bg-black cyber-grid overflow-hidden">
      {/* Intense Ambient Radial Neon Green Glows */}
      <div className="glow-bg-green top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px]"></div>
      <div className="glow-bg-green bottom-0 right-10 w-[450px] h-[450px] opacity-15"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Editorial Bar */}
        <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-emerald-500/20 text-xs tracking-wider">
          <div className="flex items-center gap-2 text-emerald-400 font-cyber font-semibold">
            {/* Geometric Cyber Emblem */}
            <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-400/50 flex items-center justify-center text-emerald-400 text-[10px] font-bold">
              GV
            </div>
            <span className="tracking-widest text-white uppercase">{personalInfo.name}</span>
            <span className="text-emerald-500/50">|</span>
            <span className="text-slate-400 hidden sm:inline text-[11px] font-mono">CYBER SECURITY & SOFTWARE DEV</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[11px] text-emerald-300 font-cyber">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              K.S.R COLLEGE OF ENGINEERING
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-400/40 text-emerald-400 font-cyber font-bold tracking-wider text-xs uppercase">
              III YEAR / V SEM
            </span>
          </div>
        </div>

        {/* Hero Section Canvas */}
        <div className="relative text-center my-4 py-4 md:py-8 select-none">
          
          {/* Giant Neon Bold Headline - 100% UNCLIPPED & UNOBSTRUCTED */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full overflow-hidden"
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[115px] xl:text-[135px] font-black tracking-widest leading-none text-neon-green uppercase text-gradient-green drop-shadow-[0_0_35px_rgba(34,197,94,0.45)] whitespace-nowrap">
              PORTFOLIO
            </h1>
            
            {/* Stage & Discipline Subtitle */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3 text-[11px] sm:text-xs font-cyber tracking-widest text-emerald-400 uppercase">
              <span className="text-emerald-300">/// CYBER SECURITY</span>
              <span className="text-emerald-500/60">•</span>
              <span className="text-slate-300">SOFTWARE & APPLICATION DEV</span>
              <span className="text-emerald-500/60">•</span>
              <span className="text-emerald-300">III YEAR / V SEMESTER ///</span>
            </div>
          </motion.div>

          {/* Central Cybernetic Card Composition - MOVED DOWN, completely separated from PORTFOLIO letters */}
          <div className="relative mt-8 sm:mt-10 md:mt-12 max-w-2xl mx-auto z-20 flex flex-col items-center">
            
            {/* Center Visual Container with Neon Green Backlight */}
            <div className="relative w-64 sm:w-80 md:w-96 aspect-square group">
              {/* Radial green backlight behind figure */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-500/30 via-emerald-600/15 to-transparent blur-2xl transform scale-110"></div>
              
              {/* Interactive Cyber Display Screen (100% Reliable, No Broken Image Glitch) */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-emerald-500/50 bg-gradient-to-b from-slate-950 via-slate-900 to-black shadow-neon-green flex flex-col">
                
                {/* Screen Header Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-black/80 border-b border-emerald-500/30 text-[10px] font-cyber text-emerald-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                    <span className="font-bold tracking-wider uppercase">
                      {activeTool === 'terminal' && 'LIVE PACKET FORENSICS'}
                      {activeTool === 'shield' && 'DEFENSIVE RADAR // ZERO TRUST'}
                      {activeTool === 'code' && 'FULL-STACK ARCHITECTURE'}
                      {activeTool === 'ai' && 'AI-ASSISTED DEV WORKFLOW'}
                      {activeTool === 'avatar' && 'CYBER DEVELOPER SCULPTURE'}
                    </span>
                  </div>
                  <span className="text-slate-400 font-mono text-[9px]">V.5.0 // KSR-LABS</span>
                </div>

                {/* Dynamic Screen View Content */}
                <div className="relative flex-1 p-4 overflow-hidden flex flex-col justify-center">
                  
                  {/* View 1: Cyber Developer Sculpture Hologram (Default) */}
                  {activeTool === 'avatar' && (
                    <div className="relative w-full h-full flex flex-col items-center justify-center text-center select-none">
                      {/* Cybernetic Wireframe Sculpture SVG */}
                      <svg className="w-36 sm:w-44 h-36 sm:h-44" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Glowing Hexagonal Background Grid */}
                        <circle cx="100" cy="100" r="85" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" opacity="0.35" />
                        <circle cx="100" cy="100" r="65" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
                        <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" stroke="#10b981" strokeWidth="1.5" opacity="0.6" />
                        
                        {/* Classical Bust / Cyber Sculpt Silhouette */}
                        <path d="M70 160 C70 120, 80 105, 80 85 C80 65, 88 50, 100 50 C112 50, 120 65, 120 85 C120 105, 130 120, 130 160 Z" fill="#064e3b" stroke="#34d399" strokeWidth="2" opacity="0.85" />
                        <circle cx="100" cy="72" r="28" fill="#022c22" stroke="#22c55e" strokeWidth="2" />
                        
                        {/* Glowing Cyber Sunglasses / Visor */}
                        <rect x="80" y="68" width="40" height="12" rx="4" fill="#22c55e" className="animate-pulse" />
                        <line x1="75" y1="74" x2="125" y2="74" stroke="#a7f3d0" strokeWidth="2" />
                        
                        {/* Digital Neon Headset / Circuits */}
                        <path d="M72 70 L65 75 L65 90" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
                        <path d="M128 70 L135 75 L135 90" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
                        
                        {/* Laptop Base Illumination */}
                        <path d="M60 160 L140 160 L150 175 L50 175 Z" fill="#022c22" stroke="#22c55e" strokeWidth="1.5" />
                        <rect x="75" y="130" width="50" height="30" rx="3" fill="#0f172a" stroke="#22c55e" strokeWidth="1.5" />
                        <rect x="80" y="135" width="40" height="20" rx="2" fill="#22c55e" fillOpacity="0.3" />
                      </svg>

                      {/* Developer Badge */}
                      <div className="mt-1">
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-cyber text-emerald-300">
                          <Cpu className="w-3 h-3 text-emerald-400" />
                          GOPINATH V // ARCHITECT
                        </span>
                      </div>
                    </div>
                  )}

                  {/* View 2: Interactive Terminal Matrix */}
                  {activeTool === 'terminal' && (
                    <div className="font-mono text-left text-[11px] space-y-1.5 text-emerald-400/90 leading-tight">
                      <div className="flex items-center gap-1.5 text-emerald-300 font-bold border-b border-emerald-500/20 pb-1">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>KSR_CYBER_LABS ~ packet_monitor</span>
                      </div>
                      <p className="text-slate-400 text-[10px]">&gt; wireshark --interface eth0 --audit</p>
                      <p className="text-emerald-300 text-[10px]">[+] TCP SYN/ACK 192.168.1.104:443 [ESTABLISHED]</p>
                      <p className="text-cyan-300 text-[10px]">[+] Nmap: 0 zero-day flaws on port 80/443</p>
                      <p className="text-emerald-400 text-[10px]">[+] Burp Suite: Session token CSRF safe</p>
                      <p className="text-yellow-300 text-[10px]">[!] Netlify & Vercel Clusters: 100% HEALTH</p>
                      <div className="flex items-center gap-1 text-emerald-400 pt-1 text-[10px]">
                        <span className="w-2 h-3 bg-emerald-400 animate-pulse"></span>
                        <span className="text-slate-400">ready for inspection...</span>
                      </div>
                    </div>
                  )}

                  {/* View 3: Shield Threat Defense Radar */}
                  {activeTool === 'shield' && (
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <div className="relative w-24 h-24 rounded-full border border-emerald-500/40 flex items-center justify-center">
                        <div className="absolute inset-1 rounded-full border border-dashed border-emerald-400/60 animate-spin"></div>
                        <Shield className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_10px_#22c55e]" />
                      </div>
                      <div className="text-xs font-cyber font-bold text-white tracking-wide">
                        DEFENSIVE SECURITY POSTURE
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 w-full text-[10px] font-mono">
                        <div className="p-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                          FIREWALL: ENFORCED
                        </div>
                        <div className="p-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                          OWASP: AUDITED
                        </div>
                        <div className="p-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                          AWS IAM: VERIFIED
                        </div>
                        <div className="p-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                          PERIMETER: ZERO-TRUST
                        </div>
                      </div>
                    </div>
                  )}

                  {/* View 4: Full-Stack Code Editor */}
                  {activeTool === 'code' && (
                    <div className="font-mono text-left text-[10px] leading-relaxed text-slate-300 bg-black/60 p-2.5 rounded-xl border border-emerald-500/30">
                      <p className="text-slate-400">// Gopinath V - Profile Model</p>
                      <p><span className="text-purple-400">const</span> <span className="text-emerald-400">engineer</span>: <span className="text-cyan-400">Developer</span> = {'{'}</p>
                      <p className="pl-3">stage: <span className="text-amber-300">"III Year / V Sem"</span>,</p>
                      <p className="pl-3">dept: <span className="text-amber-300">"CSE (Cyber Security)"</span>,</p>
                      <p className="pl-3">apps: [<span className="text-emerald-300">"Expense Tracker"</span>, <span className="text-emerald-300">"OmniHub"</span>],</p>
                      <p className="pl-3">hosting: [<span className="text-emerald-300">"Netlify"</span>, <span className="text-emerald-300">"Vercel"</span>],</p>
                      <p className="pl-3">mindset: <span className="text-amber-300">"Security-by-Design"</span></p>
                      <p>{'}'};</p>
                    </div>
                  )}

                  {/* View 5: AI-Assisted Development */}
                  {activeTool === 'ai' && (
                    <div className="flex flex-col items-center justify-center text-center space-y-2 p-1">
                      <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-400/50 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-emerald-400 animate-pulse" />
                      </div>
                      <div className="text-xs font-cyber font-bold text-white tracking-wide">
                        AI-ASSISTED DEVELOPMENT
                      </div>
                      <p className="text-[10px] text-slate-300 leading-tight max-w-xs">
                        Leveraging intelligent generative tooling, rapid prototyping, and automated code review to build high-craft interactive applications.
                      </p>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[9px] font-cyber text-emerald-300 border border-emerald-500/40">
                        RAPID • AUDITED • INTERACTIVE
                      </span>
                    </div>
                  )}

                </div>

                {/* Scanline & Grid Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>

                {/* Bottom Status Overlay Pill */}
                <div className="bg-black/90 border-t border-emerald-500/40 px-3 py-2 flex items-center justify-between text-[10px] font-cyber">
                  <span className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <Laptop className="w-3.5 h-3.5 text-emerald-400" />
                    STATUS: ACTIVE_TERMINAL
                  </span>
                  <span className="text-slate-400 font-mono">III YEAR // V SEM</span>
                </div>
              </div>

              {/* Floating Tool Palette on Left */}
              <div className="absolute -left-6 sm:-left-10 top-1/6 bg-slate-950/95 border border-emerald-500/50 rounded-xl p-1.5 shadow-2xl backdrop-blur-md flex flex-col gap-2 z-30">
                <button
                  onClick={() => setActiveTool('avatar')}
                  className={`p-1.5 rounded-lg text-xs transition-all ${
                    activeTool === 'avatar' ? 'bg-emerald-500 text-black shadow-neon-green-sm scale-105 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Sculpture / Avatar Hologram"
                >
                  <MousePointer2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTool('terminal')}
                  className={`p-1.5 rounded-lg text-xs transition-all ${
                    activeTool === 'terminal' ? 'bg-emerald-500 text-black shadow-neon-green-sm scale-105 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Terminal Forensics"
                >
                  <Terminal className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTool('shield')}
                  className={`p-1.5 rounded-lg text-xs transition-all ${
                    activeTool === 'shield' ? 'bg-emerald-500 text-black shadow-neon-green-sm scale-105 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Cyber Security Radar"
                >
                  <Shield className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTool('code')}
                  className={`p-1.5 rounded-lg text-xs transition-all ${
                    activeTool === 'code' ? 'bg-emerald-500 text-black shadow-neon-green-sm scale-105 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Full-Stack Code"
                >
                  <Code2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTool('ai')}
                  className={`p-1.5 rounded-lg text-xs transition-all ${
                    activeTool === 'ai' ? 'bg-emerald-500 text-black shadow-neon-green-sm scale-105 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="AI-Assisted Dev"
                >
                  <Bot className="w-4 h-4" />
                </button>
              </div>

              {/* Timeline Label on Right */}
              <div className="absolute -right-6 sm:-right-12 bottom-1/4 bg-slate-950/95 border border-emerald-500/50 rounded-xl px-3 py-2 text-right shadow-2xl backdrop-blur-md z-30">
                <div className="text-[10px] uppercase font-cyber text-slate-400 tracking-wider">ACADEMIC STAGE</div>
                <div className="text-sm font-cyber font-extrabold text-emerald-400 tracking-wider">III YEAR / V SEM</div>
                <div className="text-[9px] text-slate-300 font-mono">B.E. CSE (CyberSec)</div>
              </div>

            </div>

            {/* Sub-Headline & Stage Info */}
            <div className="mt-8 space-y-2 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-cyber font-bold text-white tracking-wide">
                GOPINATH V — <span className="text-emerald-400">CYBER SECURITY & SOFTWARE DEVELOPER</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
                III Year / V Semester B.E. Computer Science and Engineering (Cyber Security) undergraduate at K.S.R College of Engineering. Building defensive security tooling, full-stack web applications, AI-assisted software, and modern interactive digital products.
              </p>
            </div>

            {/* User Interests Chips Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto">
              {personalInfo.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-400 text-slate-300 hover:text-emerald-300 text-[11px] font-cyber transition-all"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* High-Impact Action CTAs */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onViewProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-cyber font-bold text-xs tracking-wider uppercase transition-all shadow-neon-green hover:scale-105 active:scale-95"
              >
                <span>View Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-emerald-300 border border-emerald-500/40 hover:border-emerald-400 font-cyber font-semibold text-xs transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 font-cyber font-semibold text-xs transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Connect with Gopinath</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
