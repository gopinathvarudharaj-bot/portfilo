import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo, education, certifications, experiences, personalProjects, skillCategories } from '../config/portfolioConfig';
import {
  X,
  Sparkles,
  Copy,
  Check,
  FileCode,
  Terminal,
  Shield,
  Code2,
  ExternalLink,
  BookOpen,
  Send,
  Download,
  Share2
} from 'lucide-react';

interface PortfolioPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCustomize?: () => void;
}

export const PortfolioPromptModal: React.FC<PortfolioPromptModalProps> = ({
  isOpen,
  onClose,
  onOpenCustomize
}) => {
  const [activeTab, setActiveTab] = useState<'master' | 'cyber' | 'dev' | 'bio' | 'raw'>('master');
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  // Master Prompt combining everything
  const masterPrompt = `Create a high-impact, modern, and cybersecurity-themed personal portfolio website for:

# 👤 PERSONAL IDENTITY & CONTACT
- Name: ${personalInfo.name}
- Headline: ${personalInfo.role}
- Academic Stage: ${personalInfo.secondaryRole}
- Institution: ${education.institution} (${education.duration}, ${education.location})
- Location: ${personalInfo.location}
- Email: ${personalInfo.email}
- Phone / WhatsApp: ${personalInfo.phone}
- LinkedIn: ${personalInfo.linkedin}
- GitHub: ${personalInfo.github}
- Instagram: ${personalInfo.instagram}

# 🎯 MISSION & PROFESSIONAL SUMMARY
- Tagline: "${personalInfo.tagline}"
- Bio: "${personalInfo.bio}"
- Core Interests: ${personalInfo.interests.join(', ')}

# 🎓 EDUCATION
- Degree: ${education.degree} (${education.specialization})
- College: ${education.institution}, ${education.location}
- Academic Year: ${education.year}
- Key Coursework: ${education.coursework.join(', ')}

# 🏆 INDUSTRY CERTIFICATIONS & CREDENTIALS
${certifications.map(c => `- ${c.title} by ${c.issuer} (${c.type})${c.validationNumber ? ` [Validation ID: ${c.validationNumber}]` : ''} | Issued: ${c.issueDate}`).join('\n')}

# 💼 PRACTICAL INTERNSHIPS & EXPERIENCE
${experiences.map(e => `## ${e.title} @ ${e.company} (${e.duration})
- Role: ${e.role} | Type: ${e.type} | Location: ${e.location}
- Core Achievements:
${e.keyAchievements.map(a => `  * ${a}`).join('\n')}
- Tech Stack: ${e.technologies.join(', ')}`).join('\n\n')}

# 🚀 FEATURED LIVE PROJECTS
${personalProjects.map(p => `## ${p.title} (${p.category})
- Subtitle: ${p.subtitle}
- Overview: ${p.shortDesc}
- Technologies: ${p.technologies.join(', ')}
${p.liveUrl ? `- Live Demo URL: ${p.liveUrl}` : ''}
${p.alternativeLiveUrl ? `- Mirror URL: ${p.alternativeLiveUrl}` : ''}
- Key Highlights:
${p.keyFeatures.map(k => `  * ${k}`).join('\n')}`).join('\n\n')}

# 🛠️ TECHNICAL SKILLS MATRIX
${skillCategories.map(cat => `### ${cat.title}:
${cat.skills.map(s => `- ${s.name} (${s.level}): ${s.description}`).join('\n')}`).join('\n\n')}

# 🎨 DESIGN & PORTFOLIO REQUIREMENTS
- Cyber-aesthetic dark theme with neon emerald/cyan accents, glassmorphism cards, and terminal-style telemetry badges.
- Include interactive tabs for Projects with working links, Skills matrix with badges, Certifications with verification badges, and an interactive contact section.
- Fully responsive across desktop, tablet, and mobile with smooth animations.`;

  // Cyber Security Focused Prompt
  const cyberPrompt = `Act as an expert technical portfolio builder. Generate an elite Cybersecurity & Penetration Testing Portfolio for:

Candidate: ${personalInfo.name}
Role: Cyber Security Researcher & Network Defense Specialist
Academics: B.E. Computer Science and Engineering (Cyber Security) at ${education.institution} (III Year / V Semester, Batch ${personalInfo.batchYears})
Contact: ${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.linkedin}

Key Security Specializations:
- Offensive & Defensive Security: Wireshark packet capture & protocol forensics (DNS, TCP, HTTP/S), Burp Suite web vulnerability scanning & proxy interception, Nmap network mapping & port reconnaissance, Netdiscover OSINT asset tracking.
- Cloud & Infrastructure Security: AWS Certified Cloud Practitioner (Validation ID: ${certifications[0]?.validationNumber || '1213f1754e464440bd88172aa4e5fa01'}) — IAM least-privilege policies, VPC security groups, S3 access policies.
- Hands-on Experience: Cybersecurity Intern (Pentesting) at Pargavan Cyyber Solutions (June–July 2026) focusing on OWASP Top 10 web vulnerabilities, network enumeration, and threat mitigation reports.

Featured Secure Engineering Projects:
1. ZenJournal (Private Mindfulness Journal) - Local-first encryption, secure zero-leakage state. Live: https://zenjournalapp.netlify.app/
2. Smart Expense Tracker - Client-side private financial data storage & encrypted thresholds. Live: https://zenjournalapp.netlify.app/
3. OmniHub Multi-App Container - Sandboxed iFrame isolation, unified security boundaries. Live: https://nutri-track-5toytglnm-gopinathvarudharaj-5095s-projects.vercel.app/metrics

Please generate a portfolio highlighting my security auditing workflow, tools matrix, certification verification, and ethical hacking credentials.`;

  // Full-Stack Developer Prompt
  const devPrompt = `Create a high-converting Full-Stack Software Developer portfolio for:

Developer: ${personalInfo.name}
Headline: Full-Stack Developer & Software Engineer (React, TypeScript, Node.js, Java, MySQL)
Education: B.E. CSE at ${education.institution}
Contact: ${personalInfo.email} | ${personalInfo.phone} | GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

Tech Stack:
- Frontend: React 18+, TypeScript, Tailwind CSS, Framer Motion, Recharts
- Backend: Node.js, Express.js, REST APIs, Java OOP
- Database: MySQL, Firebase Firestore, IndexedDB
- Cloud & Deployment: AWS Certified Cloud Practitioner, Vercel, Netlify, Git/GitHub

Live Deployed Applications:
1. Fresh Farm Web Portal: Agricultural product catalogue & order dispatch system.
   - Deployed on Vercel: https://freshfarm-topaz.vercel.app/
   - Mirror on Netlify: https://freshfarmshop.netlify.app/
2. NutriTrack: Health metrics & calorie tracking dashboard with dynamic Recharts visualizers.
   - Live URL: https://nutri-track-5toytglnm-gopinathvarudharaj-5095s-projects.vercel.app/metrics
3. Together (Two Friends, One Space): Real-time collaborative shared sanctuary with Firebase Firestore sync.
   - Live URL: https://zenjournalapp.netlify.app/
4. Smart Expense Tracker: Real-time category budget analytics, spending thresholds, and CSV reporting.
5. Alumni Management System: Institutional graduate networking platform with MySQL relational database.
   - Live URL: https://alumni-lmanagement-system.netlify.app/

Experience:
- Web Development Intern at Imagecon India Pvt. Ltd. (July 2025) — Built TeamTask Organizer web application.

Please generate a clean, reactive portfolio with live demo buttons, source code links, interactive skill badges, and responsive design.`;

  // Bio & About Prompt
  const bioPrompt = `Write an engaging, authentic "About Me" and elevator pitch for Gopinath V's portfolio:

Profile Summary:
- Full Name: Gopinath V
- Education: III Year / V Semester B.E. Computer Science and Engineering (Cyber Security) at K.S.R College of Engineering (Batch 2024–2028).
- Key Focus: Intersection of Defensive Cybersecurity (network forensics, OWASP pentesting, AWS Cloud security) and Full-Stack Web Development (React, TypeScript, Node.js).
- Credential: AWS Certified Cloud Practitioner (Amazon Web Services).
- Internships: Cybersecurity Pentesting at Pargavan Cyber Solutions & Web Development at Imagecon India Pvt. Ltd.
- Philosophy: Security-by-Design — building intuitive, high-speed digital products where privacy and resilience are built in from day one.
- Location: Namakkal / Tiruchengode, Tamil Nadu, India.
- Email: gopinathvarudharaj@gmail.com | Phone: +91 63825 99927

Generate:
1. A punchy 2-sentence elevator pitch.
2. A compelling 3-paragraph portfolio bio (Background, Passion, Future Vision).
3. A bulleted summary of key strengths suitable for a LinkedIn summary or resume profile.`;

  // Raw Structured JSON for developers
  const rawJSON = JSON.stringify(
    {
      personal: personalInfo,
      education,
      certifications,
      experiences,
      projects: personalProjects,
      skills: skillCategories
    },
    null,
    2
  );

  const getCurrentText = () => {
    switch (activeTab) {
      case 'master':
        return masterPrompt;
      case 'cyber':
        return cyberPrompt;
      case 'dev':
        return devPrompt;
      case 'bio':
        return bioPrompt;
      case 'raw':
        return rawJSON;
      default:
        return masterPrompt;
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl bg-slate-950 border border-emerald-500/40 rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden z-10 my-6 flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-5 border-b border-emerald-500/20 bg-emerald-950/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-emerald-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <h3 className="font-cyber font-bold text-base sm:text-lg text-white tracking-wide">
                    MY PERSONAL DETAILS & PORTFOLIO PROMPTS
                  </h3>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Gopinath V — Ready-to-copy prompts & structured data for AI & Portfolio Builders
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy(getCurrentText(), 'current')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-cyber font-bold tracking-wider uppercase transition-all shadow-neon-green-sm"
              >
                {copied === 'current' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy This Prompt</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Prompt Selector Tabs */}
          <div className="flex items-center gap-1.5 px-5 py-3 border-b border-slate-800 bg-black/40 overflow-x-auto text-xs font-cyber">
            <button
              onClick={() => setActiveTab('master')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'master'
                  ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Master Portfolio Prompt</span>
            </button>

            <button
              onClick={() => setActiveTab('cyber')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'cyber'
                  ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Cyber & Pentesting Prompt</span>
            </button>

            <button
              onClick={() => setActiveTab('dev')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'dev'
                  ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Full-Stack Dev Prompt</span>
            </button>

            <button
              onClick={() => setActiveTab('bio')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'bio'
                  ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Bio & Summary Prompt</span>
            </button>

            <button
              onClick={() => setActiveTab('raw')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'raw'
                  ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Raw JSON Data</span>
            </button>
          </div>

          {/* Quick Info Ribbon */}
          <div className="bg-slate-900/60 px-5 py-2.5 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-4 text-slate-300 font-mono">
              <span className="text-emerald-400 font-cyber font-semibold">{personalInfo.name}</span>
              <span className="text-slate-500">•</span>
              <span>{personalInfo.email}</span>
              <span className="text-slate-500">•</span>
              <span>{personalInfo.phone}</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400">AWS Certified</span>
            </div>
            <span className="text-[11px] text-slate-400">
              Copy and paste directly into Gemini, ChatGPT, Claude, v0, or Bolt
            </span>
          </div>

          {/* Main Prompt Text Display Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            <div className="relative group">
              <pre className="p-4 sm:p-5 rounded-2xl bg-black/80 border border-slate-800 text-xs sm:text-sm font-mono text-slate-200 whitespace-pre-wrap leading-relaxed selection:bg-emerald-500 selection:text-black">
                {getCurrentText()}
              </pre>

              {/* Floating Copy Button Inside Code Area */}
              <button
                onClick={() => handleCopy(getCurrentText(), 'floating')}
                className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 text-xs font-cyber flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all"
                title="Copy contents"
              >
                {copied === 'floating' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Details Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-[10px] font-cyber uppercase tracking-wider text-emerald-400 mb-1">
                  AWS CERTIFICATION
                </div>
                <div className="text-xs font-bold text-white">AWS Certified Cloud Practitioner</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">ID: 1213f1754e464440bd88172aa4e5fa01</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-[10px] font-cyber uppercase tracking-wider text-cyan-400 mb-1">
                  PRACTICAL INTERNSHIPS
                </div>
                <div className="text-xs font-bold text-white">Cybersecurity & Web Dev</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Pargavan Solutions & Imagecon India</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-[10px] font-cyber uppercase tracking-wider text-amber-400 mb-1">
                  7+ LIVE PROJECTS
                </div>
                <div className="text-xs font-bold text-white">Deployed on Vercel & Netlify</div>
                <div className="text-[11px] text-slate-400 mt-0.5">ZenJournal, Fresh Farm, NutriTrack, etc.</div>
              </div>
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="p-4 border-t border-slate-800 bg-black/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {onOpenCustomize && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenCustomize();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 text-xs font-cyber border border-slate-800 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Customize My Details</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy(getCurrentText(), 'bottom')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-cyber font-bold tracking-wider uppercase transition-all shadow-neon-green-sm"
              >
                {copied === 'bottom' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied Prompt!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Current Prompt</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-cyber transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
