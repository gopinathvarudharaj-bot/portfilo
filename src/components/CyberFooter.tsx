import React from 'react';
import { personalInfo } from '../config/portfolioConfig';
import { Terminal, Shield, ArrowUp, Heart, Sparkles } from 'lucide-react';

interface CyberFooterProps {
  onOpenQuestionnaire: () => void;
}

export const CyberFooter: React.FC<CyberFooterProps> = ({ onOpenQuestionnaire }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-emerald-500/20 py-12 relative overflow-hidden mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-emerald-500/10">
          
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/50 flex items-center justify-center text-emerald-400 font-cyber font-black text-sm shadow-neon-green-sm">
              GV
            </div>
            <div>
              <span className="font-cyber font-bold text-white uppercase tracking-wider text-sm block">
                {personalInfo.name} — PORTFOLIO
              </span>
              <span className="text-[11px] text-emerald-400 font-cyber block">
                Full-Stack Developer & B.E. CSE (Cyber Security) @ K.S.R
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-cyber text-slate-400">
            <a href="#home" className="hover:text-emerald-400 transition-colors">HOME</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">ABOUT ME</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">PROJECTS</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">SKILLS</a>
            <a href="#certifications" className="hover:text-emerald-400 transition-colors">CERTIFICATES</a>
            <a href="#journey" className="hover:text-emerald-400 transition-colors">JOURNEY</a>
            <button
              onClick={onOpenQuestionnaire}
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>CUSTOMIZE PROFILE</span>
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/40 transition-colors"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-cyber text-slate-500 gap-2">
          <span>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Kadayanallur, Tamil Nadu.
          </span>
          <span className="flex items-center gap-1">
            Engineered with React, TypeScript & Cyber Aesthetic
          </span>
        </div>

      </div>
    </footer>
  );
};
