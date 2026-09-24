import React, { useState } from 'react';
import { 
  dataAnalystSkillTree, 
  ProficiencyStage, 
  SkillCategory 
} from '../data/skillsAndProjects';
import { 
  Code2, 
  Database, 
  BarChart3, 
  FileSpreadsheet, 
  Binary, 
  GitBranch, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  Search,
  BookOpen
} from 'lucide-react';

const stageBadgeStyles: Record<ProficiencyStage, { bg: string; text: string; border: string; icon: React.ReactNode }> = {
  'Project Experience': {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/25',
    icon: <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />,
  },
  'Practicing': {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/25',
    icon: <Code2 className="w-3 h-3 text-purple-400 shrink-0" />,
  },
  'Familiar': {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/25',
    icon: <Clock className="w-3 h-3 text-blue-400 shrink-0" />,
  },
  'Currently Learning': {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/25',
    icon: <BookOpen className="w-3 h-3 text-amber-400 shrink-0" />,
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  programming: <Code2 className="w-4 h-4 text-purple-400" />,
  dataAnalysis: <Binary className="w-4 h-4 text-emerald-400" />,
  database: <Database className="w-4 h-4 text-blue-400" />,
  visualization: <BarChart3 className="w-4 h-4 text-purple-400" />,
  spreadsheet: <FileSpreadsheet className="w-4 h-4 text-emerald-400" />,
  statistics: <Sparkles className="w-4 h-4 text-amber-400" />,
  tools: <GitBranch className="w-4 h-4 text-neutral-300" />,
};

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filterTabs = [
    { label: 'All Disciplines', value: 'All' },
    { label: 'Python & Data', value: 'dataAnalysis' },
    { label: 'SQL & Database', value: 'database' },
    { label: 'Visuals & BI', value: 'visualization' },
    { label: 'Spreadsheets', value: 'spreadsheet' },
    { label: 'Statistics', value: 'statistics' },
  ];

  const filteredCategories = dataAnalystSkillTree.filter((cat) => {
    if (selectedFilter !== 'All' && cat.categoryKey !== selectedFilter) {
      if (selectedFilter === 'dataAnalysis' && (cat.categoryKey === 'programming' || cat.categoryKey === 'dataAnalysis')) {
        // combine
      } else {
        return false;
      }
    }
    return true;
  });

  return (
    <section id="skills" className="w-full bg-[#07080c] py-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">
                Technical Toolkit
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Skills & Methodological Competencies
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Real proficiencies categorized with strict honesty. No arbitrary percentages — every tool is benchmarked by verified project work, hands-on practice, or ongoing study at SIET Nilokheri.
            </p>
          </div>

          {/* Legend Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs bg-white/[0.02] p-3 rounded-xl border border-white/5 shrink-0">
            <span className="text-neutral-400 font-medium mr-1">Status Guide:</span>
            {Object.entries(stageBadgeStyles).map(([stage, style]) => (
              <span
                key={stage}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border ${style.bg} ${style.text} ${style.border}`}
              >
                {style.icon}
                <span>{stage}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilter === tab.value
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g., SQL, Pandas)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat: SkillCategory) => {
            const visibleSkills = cat.skills.filter((s) =>
              s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              s.description.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (visibleSkills.length === 0) return null;

            return (
              <div
                key={cat.title}
                className="rounded-2xl bg-[#0f1117] border border-white/10 p-6 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        {categoryIcons[cat.categoryKey] || <Code2 className="w-4 h-4 text-purple-400" />}
                      </div>
                      <h3 className="font-semibold text-base text-white group-hover:text-purple-300 transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {visibleSkills.length} {visibleSkills.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed border-b border-white/5 pb-3">
                    {cat.description}
                  </p>

                  {/* Skills List in Category */}
                  <div className="space-y-3.5">
                    {visibleSkills.map((skill) => {
                      const style = stageBadgeStyles[skill.stage];
                      return (
                        <div
                          key={skill.name}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors space-y-1.5"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium text-sm text-white">
                              {skill.name}
                            </span>
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium border ${style.bg} ${style.text} ${style.border}`}
                            >
                              {style.icon}
                              <span>{skill.stage}</span>
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400 leading-normal">
                            {skill.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500">
                  <span>SIET Nilokheri Academic Roadmap</span>
                  <span className="text-purple-400 font-mono">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Journey Highlight Box */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-950/20 via-[#0e1017] to-purple-950/10 border border-purple-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
              <GraduationCap className="w-4 h-4" />
              <span>Current Growth Focus: Advanced DAX & Window SQL</span>
            </div>
            <h4 className="text-xl font-bold text-white tracking-tight">
              Actively Expanding Analytics Methodologies
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Currently deepening skills in advanced SQL windowing (<code className="font-mono text-purple-300 bg-white/5 px-1 py-0.5 rounded">LEAD</code>, <code className="font-mono text-purple-300 bg-white/5 px-1 py-0.5 rounded">LAG</code>, <code className="font-mono text-purple-300 bg-white/5 px-1 py-0.5 rounded">OVER(PARTITION BY)</code>), dynamic DAX measures in Power BI, and statistical hypothesis testing with Python.
            </p>
          </div>
          <a
            href="https://github.com/officialankush090-sys"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-semibold flex items-center gap-2 transition-colors shrink-0 shadow-sm"
          >
            <span>Track Study Code on GitHub</span>
            <GitBranch className="w-3.5 h-3.5 text-black" />
          </a>
        </div>

      </div>
    </section>
  );
};
