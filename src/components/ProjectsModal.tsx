import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, GitFork, Star, Check, Code2, Layers, AlertCircle, ShieldCheck } from 'lucide-react';
import { GitHubCatIcon } from './Logos';
import { VERIFIED_GITHUB_CONFIG } from '../services/githubService';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFilter?: string;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose, initialFilter = 'All' }) => {
  const [selectedTag, setSelectedTag] = useState<string>(initialFilter);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  // Real verified repositories strictly under officialankush090-sys
  const verifiedProjects: Project[] = [
    {
      id: 'repo-officialankush090-sys',
      title: 'officialankush090-sys (Profile Repository)',
      status: 'Completed',
      description: 'Official GitHub profile README and configuration showcasing data analytics tools, skills, and projects.',
      tags: ['Profile', 'Markdown', 'Data Analytics', 'Portfolio'],
      githubUrl: 'https://github.com/officialankush090-sys/officialankush090-sys',
      metrics: 'Owner verified repository',
    },
    {
      id: 'repo-sql-retail',
      title: 'Retail Sales Performance & Customer Segment Analysis',
      status: 'Completed',
      description: 'Modular PostgreSQL queries extracting sales trends, AOV, and RFM customer segmentation on retail orders.',
      tags: ['SQL', 'PostgreSQL', 'Data Analytics'],
      githubUrl: 'https://github.com/officialankush090-sys/sql-retail-sales-analysis',
      metrics: '50k+ records analyzed',
    },
    {
      id: 'repo-customer-churn',
      title: 'Telecom Customer Churn Exploratory Data Analysis',
      status: 'Completed',
      description: 'Exploratory data analysis using Python, Pandas, Matplotlib, and Seaborn identifying key churn drivers.',
      tags: ['Python', 'Pandas', 'Data Analytics', 'Seaborn'],
      githubUrl: 'https://github.com/officialankush090-sys/customer-churn-eda-python',
      metrics: '7,043 subscriber cohort',
    },
    {
      id: 'repo-excel-kpi',
      title: 'Executive Financial & Operational KPI Dashboard',
      status: 'Completed',
      description: 'Interactive Microsoft Excel workbook leveraging XLOOKUP, Pivot Tables, and dynamic slicers for expense variance.',
      tags: ['Excel', 'Data Analytics', 'Spreadsheet'],
      githubUrl: 'https://github.com/officialankush090-sys/excel-kpi-financial-dashboard',
      metrics: '14 spreadsheets consolidated',
    },
  ];

  const tags = ['All', 'SQL', 'Python', 'Excel', 'Data Analytics'];

  const filteredProjects = selectedTag === 'All'
    ? verifiedProjects
    : verifiedProjects.filter((p) => p.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase()));

  const handleCopyLink = (project: Project) => {
    navigator.clipboard.writeText(project.githubUrl);
    setCopiedId(project.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-[#0c0d12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#11131a]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold tracking-tight text-white">
                  Verified GitHub Repositories
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  owner: {VERIFIED_GITHUB_CONFIG.username}
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Repositories strictly verified against official GitHub account
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-white/5 bg-[#0e0f16] overflow-x-auto">
          <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mr-2 shrink-0">
            Filter:
          </span>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors shrink-0 cursor-pointer ${
                selectedTag === tag
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="p-6 overflow-y-auto space-y-4 max-h-[60vh]">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-xl bg-[#13151f] border border-white/5 hover:border-purple-500/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="text-xs text-purple-400 font-medium font-mono">
                    Owner: <span className="text-neutral-200">{VERIFIED_GITHUB_CONFIG.username}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0">
                  <button
                    onClick={() => handleCopyLink(project)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs flex items-center gap-1 transition-colors cursor-pointer"
                    title="Copy GitHub link"
                  >
                    {copiedId === project.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <GitHubCatIcon className="w-3.5 h-3.5" />
                        <span>Link</span>
                      </>
                    )}
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 text-neutral-400 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0e0f16] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Exclusively linked to {VERIFIED_GITHUB_CONFIG.profileUrl}</span>
          </div>
          <a
            href={VERIFIED_GITHUB_CONFIG.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-white hover:text-purple-300 font-medium transition-colors"
          >
            <GitHubCatIcon className="w-4 h-4" />
            <span>github.com/{VERIFIED_GITHUB_CONFIG.username}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
