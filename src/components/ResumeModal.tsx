import React, { useState } from 'react';
import { resumeDetails } from '../data/portfolioData';
import { X, Download, Copy, Check, GraduationCap, Code, Briefcase, Mail } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadCV = () => {
    const cvContent = `=====================================================
ANKUSH - CURRICULUM VITAE
Aspiring Data Analyst | Student at SIET Nilokheri
Email: ${resumeDetails.email}
GitHub: ${resumeDetails.github}
LinkedIn: ${resumeDetails.linkedin}
=====================================================

EDUCATION:
- ${resumeDetails.education.degree}
  ${resumeDetails.education.institution} (${resumeDetails.education.timeline})
  Relevant Coursework: ${resumeDetails.education.coursework.join(', ')}

TECHNICAL SKILLS:
- Languages: ${resumeDetails.skills.languages.join(', ')}
- Frontend: ${resumeDetails.skills.frontend.join(', ')}
- Backend & Data: ${resumeDetails.skills.backendData.join(', ')}
- Tools: ${resumeDetails.skills.tools.join(', ')}

HIGHLIGHTS & EXPERIENCE:
${resumeDetails.highlights.map(h => `- ${h}`).join('\n')}

=====================================================
`;
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ankush_Data_Analyst_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#0b0d13] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#12141c]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Ankush — CV & Academic Profile
              </h2>
              <p className="text-xs text-neutral-400">
                Aspiring Data Analyst · Student at SIET Nilokheri
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Quick Contact & Action Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 text-neutral-300">
              <Mail className="w-4 h-4 text-purple-400 shrink-0" />
              <span className="font-mono text-xs sm:text-sm">{resumeDetails.email}</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>
              <button
                onClick={handleDownloadCV}
                className="px-4 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                {downloadSuccess ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Download className="w-3.5 h-3.5" />}
                <span>{downloadSuccess ? 'Downloaded!' : 'Download CV'}</span>
              </button>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-purple-400 font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="p-4 rounded-xl bg-[#13151f] border border-white/5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-medium">
                <span className="text-white text-base font-semibold">{resumeDetails.education.degree}</span>
                <span className="text-xs text-neutral-400">{resumeDetails.education.timeline}</span>
              </div>
              <p className="text-purple-300 text-sm">{resumeDetails.education.institution}</p>
              <div className="pt-2 text-xs text-neutral-300">
                <strong className="text-neutral-400">Core Coursework: </strong>
                {resumeDetails.education.coursework.join(', ')}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-purple-400 font-semibold">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#13151f] border border-white/5">
                <div className="text-xs font-semibold text-neutral-400 mb-1.5">Languages</div>
                <div className="flex flex-wrap gap-1.5">
                  {resumeDetails.skills.languages.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded bg-white/5 text-xs text-neutral-200 font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#13151f] border border-white/5">
                <div className="text-xs font-semibold text-neutral-400 mb-1.5">Frontend</div>
                <div className="flex flex-wrap gap-1.5">
                  {resumeDetails.skills.frontend.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded bg-white/5 text-xs text-neutral-200 font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#13151f] border border-white/5">
                <div className="text-xs font-semibold text-neutral-400 mb-1.5">Backend & Databases</div>
                <div className="flex flex-wrap gap-1.5">
                  {resumeDetails.skills.backendData.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded bg-white/5 text-xs text-neutral-200 font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#13151f] border border-white/5">
                <div className="text-xs font-semibold text-neutral-400 mb-1.5">Tools & Environments</div>
                <div className="flex flex-wrap gap-1.5">
                  {resumeDetails.skills.tools.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded bg-white/5 text-xs text-neutral-200 font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-purple-400 font-semibold">
              <Briefcase className="w-4 h-4" />
              <span>Key Strengths & Practice</span>
            </div>
            <ul className="space-y-2 p-4 rounded-xl bg-[#13151f] border border-white/5 text-neutral-300 text-xs sm:text-sm">
              {resumeDetails.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-purple-400 mt-1">✦</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#12141c] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400">Available for Data Analyst internships & projects</span>
            <a
              href={resumeDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-purple-400 hover:text-purple-300 underline font-medium"
            >
              LinkedIn Profile
            </a>
          </div>
          <button
            onClick={handleDownloadCV}
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Plaintext CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};
