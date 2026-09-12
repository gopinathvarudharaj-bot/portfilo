import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo, education, certifications, experiences, personalProjects, skillCategories } from '../config/portfolioConfig';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  Award,
  CheckCircle2,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Sparkles
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md print:hidden"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-slate-950 border border-emerald-500/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-6 text-slate-100 print:border-none print:bg-white print:text-black print:rounded-none"
        >
          {/* Action Bar (Top) */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-black/60 print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-cyber font-bold tracking-wider text-emerald-400 uppercase">
                CURRICULUM VITAE // GOPINATH V
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-cyber text-slate-200 border border-slate-700 transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-emerald-400" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Canvas */}
          <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto print:max-h-none print:overflow-visible space-y-8">
            
            {/* Header / Identity */}
            <div className="border-b border-slate-800 pb-6 print:border-slate-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-cyber font-black text-white print:text-black tracking-tight uppercase">
                    {personalInfo.name}
                  </h1>
                  <p className="text-sm font-cyber font-bold text-emerald-400 print:text-emerald-700 mt-1 uppercase">
                    {personalInfo.role}
                  </p>
                  <p className="text-xs text-slate-400 print:text-slate-600">
                    B.E. Computer Science & Engineering (Cyber Security) | K.S.R College of Engineering (2024–2028)
                  </p>
                </div>

                <div className="text-xs text-slate-300 print:text-slate-700 space-y-1 font-cyber">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-600" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-600" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-600" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Education */}
            <div>
              <h2 className="text-xs font-cyber font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest mb-3 border-b border-emerald-500/20 pb-1">
                EDUCATION
              </h2>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="font-cyber font-bold text-base text-white print:text-black">
                    {education.degree} — {education.specialization}
                  </h3>
                  <span className="text-xs font-cyber text-emerald-400 print:text-emerald-700 font-bold">
                    {education.duration}
                  </span>
                </div>
                <p className="text-xs text-slate-300 print:text-slate-700 font-medium">
                  {education.institution}, {education.location}
                </p>
                <p className="text-[11px] text-slate-400 print:text-slate-600 mt-2">
                  Key Subjects: {education.coursework.join(', ')}
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-cyber font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest mb-3 border-b border-emerald-500/20 pb-1">
                VERIFIED CREDENTIALS & CERTIFICATIONS
              </h2>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200 text-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <span className="font-bold text-white print:text-black font-cyber">
                        {cert.title} — <span className="text-emerald-400 print:text-emerald-700">{cert.issuer}</span>
                      </span>
                      <span className="text-[11px] text-slate-400 print:text-slate-600 font-cyber">
                        {cert.duration || cert.issueDate}
                      </span>
                    </div>
                    {cert.validationNumber && (
                      <p className="text-[10px] text-slate-400 print:text-slate-600 font-mono">
                        Verification ID: {cert.validationNumber} (Active to {cert.expiryDate})
                      </p>
                    )}
                    {cert.internshipId && (
                      <p className="text-[10px] text-slate-400 print:text-slate-600 font-mono">
                        Certificate ID: {cert.internshipId}
                      </p>
                    )}
                    <ul className="list-disc list-inside mt-1.5 space-y-0.5 text-[11px] text-slate-300 print:text-slate-700">
                      {cert.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-cyber font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest mb-3 border-b border-emerald-500/20 pb-1">
                INDUSTRY INTERNSHIPS & PRACTICAL EXPERIENCE
              </h2>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200 text-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <span className="font-bold text-white print:text-black font-cyber text-sm">
                        {exp.role} — <span className="text-emerald-400 print:text-emerald-700">{exp.company}</span>
                      </span>
                      <span className="text-[11px] text-slate-400 print:text-slate-600 font-cyber">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-slate-300 print:text-slate-700 mb-2">
                      {exp.description}
                    </p>
                    <div className="space-y-1">
                      {exp.keyAchievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300 print:text-slate-700">
                          <span className="text-emerald-400 print:text-emerald-700">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-cyber font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest mb-3 border-b border-emerald-500/20 pb-1">
                FEATURED PROJECTS
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {personalProjects.map((p) => (
                  <div
                    key={p.id}
                    className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-white print:text-black font-cyber">
                        {p.title}
                      </span>
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] text-emerald-400 print:text-emerald-700 hover:underline inline-flex items-center gap-0.5">
                        Live Demo <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                    <p className="text-[11px] text-slate-300 print:text-slate-700 mb-2">
                      {p.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {p.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-1.5 py-0.5 rounded bg-slate-950 print:bg-slate-200 text-[9px] font-cyber text-emerald-400 print:text-emerald-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-cyber font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest mb-3 border-b border-emerald-500/20 pb-1">
                CORE TECHNICAL COMPETENCIES
              </h2>
              <div className="flex flex-wrap gap-2 text-xs font-cyber">
                {[
                  'React.js', 'TypeScript', 'Node.js', 'Wireshark', 'Burp Suite', 'Nmap',
                  'Java (OOP)', 'MySQL', 'Firebase', 'Git / GitHub', 'Tailwind CSS',
                  'Network Security', 'OWASP Vulnerabilities', 'REST APIs', 'Cloud (AWS)'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 print:bg-slate-100 print:border-slate-300 text-slate-200 print:text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="p-4 border-t border-slate-800 bg-black/60 flex items-center justify-between print:hidden">
            <span className="text-[11px] text-slate-400 font-cyber">
              Official Profile of Gopinath V — K.S.R College of Engineering
            </span>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-cyber font-bold uppercase transition-colors shadow-neon-green-sm"
            >
              Print / Save PDF
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
