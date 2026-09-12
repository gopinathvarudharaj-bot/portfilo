import React, { useState } from 'react';
import { personalInfo as initialPersonalInfo } from './config/portfolioConfig';
import { PersonalInfo } from './types';
import { CyberNavbar } from './components/CyberNavbar';
import { CyberHero } from './components/CyberHero';
import { CyberAboutMe } from './components/CyberAboutMe';
import { CyberProjects } from './components/CyberProjects';
import { CyberSkills } from './components/CyberSkills';
import { CyberCertifications } from './components/CyberCertifications';
import { CyberMilestones } from './components/CyberMilestones';
import { CyberContact } from './components/CyberContact';
import { CyberFooter } from './components/CyberFooter';
import { ProfileQuestionnaireModal } from './components/ProfileQuestionnaireModal';
import { ResumeModal } from './components/ResumeModal';
import { CyberWhatsAppWidget } from './components/CyberWhatsAppWidget';

export default function App() {
  const [personalData, setPersonalData] = useState<PersonalInfo>(initialPersonalInfo);
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleUpdateInfo = (updated: Partial<PersonalInfo>) => {
    setPersonalData(prev => ({
      ...prev,
      ...updated
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-100 selection:bg-emerald-500 selection:text-black">
      {/* Cyber Sticky Navigation */}
      <CyberNavbar
        onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => scrollToSection('#contact')}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Top Section: Huge Neon Green PORTFOLIO Display + Center Hacker Sculpture */}
        <CyberHero
          onOpenContact={() => scrollToSection('#contact')}
          onOpenResume={() => setResumeOpen(true)}
          onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
          onViewProjects={() => scrollToSection('#projects')}
        />

        {/* 2. Featured Section: ABOUT ME with 3D Phone Mockups & Software Badges matching image */}
        <CyberAboutMe
          onOpenContact={() => scrollToSection('#contact')}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 3. Featured Live Projects (ZenJournal, NutriTrack, Fresh Farm, Alumni System) */}
        <CyberProjects
          onOpenContact={() => scrollToSection('#contact')}
        />

        {/* 4. Full Technical Skills & Pentesting Tool Matrix */}
        <CyberSkills />

        {/* 5. Industry Certifications (AWS Certified Cloud Practitioner, Internships) */}
        <CyberCertifications
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 6. Academic Journey & Technical Milestones */}
        <CyberMilestones
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 7. Contact Section */}
        <CyberContact />
      </main>

      {/* Footer */}
      <CyberFooter
        onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
      />

      {/* Floating Direct WhatsApp Widget */}
      <CyberWhatsAppWidget />

      {/* Interactive Profile Questionnaire Modal (Ask Questions & Live Customizer) */}
      <ProfileQuestionnaireModal
        isOpen={questionnaireOpen}
        onClose={() => setQuestionnaireOpen(false)}
        currentInfo={personalData}
        onUpdateInfo={handleUpdateInfo}
      />

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
