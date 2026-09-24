import React from 'react';
import { contributionStats } from '../data/portfolioData';
import { X, GitCommit, GitPullRequest, Flame, Calendar } from 'lucide-react';
import { GitHubCatIcon } from './Logos';

interface ContributionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContributionsModal: React.FC<ContributionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl flex flex-col bg-[#0d0e14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#12141c]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <GitCommit className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span>Git Activity & Velocity</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {contributionStats.growth} YoY
                </span>
              </h2>
              <p className="text-xs text-neutral-400 mt-0.5">
                Consistent version control discipline and development metrics
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
        <div className="p-6 space-y-5 text-sm">
          {/* Key Stat Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[#141622] border border-white/5 text-center">
              <div className="text-xl font-bold text-white tracking-tight">
                {contributionStats.totalCommitsThisYear}
              </div>
              <div className="text-xs text-neutral-400 mt-1 flex items-center justify-center gap-1">
                <GitPullRequest className="w-3 h-3 text-purple-400" />
                <span>Total Commits</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#141622] border border-white/5 text-center">
              <div className="text-xl font-bold text-amber-400 tracking-tight">
                {contributionStats.longestStreakDays}d
              </div>
              <div className="text-xs text-neutral-400 mt-1 flex items-center justify-center gap-1">
                <Flame className="w-3 h-3 text-amber-400" />
                <span>Max Streak</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#141622] border border-white/5 text-center">
              <div className="text-xl font-bold text-white tracking-tight">
                {contributionStats.repositoriesContributed}
              </div>
              <div className="text-xs text-neutral-400 mt-1 flex items-center justify-center gap-1">
                <Calendar className="w-3 h-3 text-emerald-400" />
                <span>Active Repos</span>
              </div>
            </div>
          </div>

          {/* Monthly Trend Bars */}
          <div className="p-4 rounded-xl bg-[#141622] border border-white/5 space-y-3">
            <div className="text-xs font-semibold text-neutral-300 flex items-center justify-between">
              <span>Monthly Contributions (Growth Trajectory)</span>
              <span className="text-purple-400 font-mono">+120% Acceleration</span>
            </div>

            <div className="flex items-end justify-between gap-2 h-28 pt-4">
              {contributionStats.monthlyTrend.map((item) => {
                const heightPercent = Math.round((item.commits / 200) * 100);
                return (
                  <div key={item.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                    <span className="text-[10px] text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                      {item.commits}
                    </span>
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-purple-700/60 to-purple-400 group-hover:from-purple-600 group-hover:to-purple-300 transition-all duration-300"
                      style={{ height: `${heightPercent}%` }}
                    />
                    <span className="text-[11px] text-neutral-400 font-medium">
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Language Stack */}
          <div className="p-4 rounded-xl bg-[#141622] border border-white/5 space-y-3">
            <div className="text-xs font-semibold text-neutral-300">
              Languages in Codebase Contributions
            </div>
            {/* Progress bar */}
            <div className="w-full h-2.5 rounded-full overflow-hidden flex bg-white/5">
              {contributionStats.primaryLanguages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>
            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
              {contributionStats.primaryLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                  <span className="text-neutral-300">{lang.name}</span>
                  <span className="text-neutral-400 font-mono ml-auto">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#12141c] flex items-center justify-between">
          <span className="text-xs text-neutral-400">Public profile available on GitHub</span>
          <a
            href="https://github.com/officialankush090-sys"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <GitHubCatIcon className="w-3.5 h-3.5" />
            <span>Open GitHub Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};
