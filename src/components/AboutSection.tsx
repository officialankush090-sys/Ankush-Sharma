import React from 'react';
import { 
  GraduationCap, 
  ExternalLink, 
  BookOpen, 
  Compass, 
  Target, 
  Code, 
  Sparkles,
  Award
} from 'lucide-react';
import { GitHubCatIcon } from './Logos';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#050608] py-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">
              Biography & Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About Ankush Sharma
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Engineering student at the State Institute of Engineering & Technology (SIET), Nilokheri, driven by the challenge of transforming messy, complex records into clear analytical frameworks.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-sm sm:text-base">
            
            <div className="p-6 rounded-2xl bg-[#0f1117] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-purple-400" />
                <span>The Analytical Journey</span>
              </h3>
              <p>
                My journey began with computer engineering foundations at <strong className="text-white">SIET Nilokheri</strong>. As I dove deeper into database management systems (DBMS), relational querying, and Python programming, I realized my passion lay in <em>unraveling data patterns</em> rather than purely building interface shells.
              </p>
              <p>
                To me, data analytics is not merely writing queries or dragging fields into dashboards. It is about understanding the core operational reality behind the numbers: isolating why customer churn escalated in a specific cohort, locating margin discrepancies across supply chains, or ensuring that data anomalies are methodically cleansed before making business assumptions.
              </p>
            </div>

            {/* Core Values / Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                  <Code className="w-4 h-4" />
                  <span>Data Integrity First</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Reliable insights stem from rigorous data cleaning. I take time to inspect distributions, impute missing values rationally, and validate assumptions.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <Target className="w-4 h-4" />
                  <span>Business Impact Focused</span>
                </div>
                <p className="text-xs text-neutral-400">
                  A dashboard is only as good as the decision it informs. I focus on actionable KPIs: conversion rates, cost leakage, and cohort trends.
                </p>
              </div>
            </div>

            {/* LinkedIn Connection CTA */}
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-300">
                Connect with me on LinkedIn to explore internships, analytics collaborations, or project discussions.
              </div>
              <a
                href="https://www.linkedin.com/in/ankush-sharma-688290376?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#0077b5] hover:bg-[#006097] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0 shadow-sm"
              >
                <span>View LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Academic & Fast Facts (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-[#0f1117] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">SIET Nilokheri</h4>
                    <p className="text-xs text-neutral-400">State Institute of Engineering & Technology</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Enrolled
                </span>
              </div>

              <div className="text-xs space-y-2 text-neutral-300 pt-2 border-t border-white/5">
                <div>
                  <span className="text-neutral-500">Degree:</span> Bachelor of Technology (B.Tech)
                </div>
                <div>
                  <span className="text-neutral-500">Timeline:</span> 2023 – Present
                </div>
                <div>
                  <span className="text-neutral-500">Status:</span> Undergraduate Student & Aspiring Analyst
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[11px] uppercase tracking-wider text-purple-400 font-semibold mb-2">
                  Key Analytics Coursework:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Database Management (DBMS)',
                    'SQL & Relational Models',
                    'Python Scripting',
                    'Probability & Statistics',
                    'Data Structures',
                    'Object-Oriented Programming',
                  ].map((subj) => (
                    <span
                      key={subj}
                      className="px-2 py-1 rounded-md bg-white/5 text-[11px] text-neutral-300 font-mono"
                    >
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Current Focus Snapshot */}
            <div className="p-5 rounded-2xl bg-[#0f1117] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Current Learning Roadmap</span>
              </div>
              <ul className="text-xs text-neutral-400 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">▸</span>
                  <span>Mastering Power BI DAX formulas & complex star schemas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">▸</span>
                  <span>Executing end-to-end Kaggle exploratory analyses using Pandas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">▸</span>
                  <span>Writing optimized PostgreSQL subqueries with window functions.</span>
                </li>
              </ul>
            </div>

            {/* Quick Profile Summary */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
              <span className="text-neutral-400">Active GitHub Portfolio:</span>
              <a
                href="https://github.com/officialankush090-sys"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-white hover:text-purple-300 font-mono font-medium"
              >
                <GitHubCatIcon className="w-3.5 h-3.5" />
                <span>officialankush090-sys</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
