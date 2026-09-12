import React, { useState, useEffect } from 'react';
import { personalInfo } from '../config/portfolioConfig';
import {
  Terminal,
  Shield,
  FileText,
  Sparkles,
  Menu,
  X,
  Phone,
  MessageSquare,
  ExternalLink
} from 'lucide-react';

interface CyberNavbarProps {
  onOpenQuestionnaire: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const CyberNavbar: React.FC<CyberNavbarProps> = ({
  onOpenQuestionnaire,
  onOpenResume,
  onOpenContact
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'JOURNEY', href: '#journey' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-emerald-500/30 py-3 shadow-2xl'
          : 'bg-black/50 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-emerald-400 font-cyber font-black text-xs group-hover:scale-105 group-hover:border-emerald-400 shadow-neon-green-sm transition-all">
            GV
          </div>
          <div>
            <span className="font-cyber font-extrabold text-sm tracking-wider text-white group-hover:text-emerald-400 transition-colors uppercase block">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-cyber text-emerald-400/80 tracking-widest block uppercase">
              CYBER & DEV
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-cyber tracking-widest text-slate-300 hover:text-emerald-400 transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenQuestionnaire}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 hover:text-white text-xs font-cyber transition-all"
            title="Answer questions to personalize your portfolio"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
            <span className="hidden md:inline">Customize Info</span>
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-cyber transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-cyber font-bold tracking-wider uppercase transition-colors shadow-neon-green-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenQuestionnaire}
            className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs"
            title="Customize"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-700 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-emerald-500/30 px-4 pt-3 pb-6 space-y-3 font-cyber text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-emerald-400 border-b border-slate-900 tracking-wider"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-700 flex items-center justify-center gap-2 text-xs"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View Full Credentials Resume</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-xl bg-emerald-500 text-black font-bold uppercase tracking-wider text-xs shadow-neon-green-sm"
            >
              Get In Touch / Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
