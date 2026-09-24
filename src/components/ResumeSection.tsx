import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  GraduationCap, 
  Code, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Linkedin, 
  Check,
  Layers,
  Sparkles
} from 'lucide-react';
import { GitHubCatIcon } from './Logos';
import { resumeDetails } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    const cvContent = `=====================================================
ANKUSH - ATS-FRIENDLY CURRICULUM VITAE
Aspiring Data Analyst | Student at SIET Nilokheri
Email: ${resumeDetails.email}
GitHub: ${resumeDetails.github}
LinkedIn: ${resumeDetails.linkedin}
=====================================================

PROFESSIONAL SUMMARY:
Diligent and analytical Computer Engineering undergraduate at the State Institute of Engineering & Technology (SIET), Nilokheri. Solid practical grounding in SQL query design, Python scripting (Pandas, NumPy), spreadsheet modeling in Microsoft Excel, and business dashboard creation. Passionate about translating messy, unstructured data into clean, actionable business decisions and repeatable analytical pipelines.

EDUCATION:
- ${resumeDetails.education.degree}
  ${resumeDetails.education.institution} (${resumeDetails.education.timeline})
  Relevant Coursework: Database Management Systems (DBMS / SQL), Python Programming, Data Structures & Algorithms, Probability & Statistics, Computer Networks.

TECHNICAL SKILLS:
- Languages & Core: Python, SQL (PostgreSQL, MySQL), TypeScript/JavaScript
- Data & Analytics: Pandas, NumPy, Data Cleaning, Exploratory Data Analysis (EDA)
- Visualization & BI: Microsoft Excel (Pivot Tables, XLOOKUP, Modeling), Power BI, Matplotlib, Seaborn
- Version Control & Tools: Git, GitHub, VS Code, Linux/Bash

KEY ANALYTICAL PROJECTS:
1. Retail Sales Performance & Customer Segment Analysis (SQL)
   - Wrote modular PostgreSQL scripts analyzing 50,000+ orders.
   - Built RFM customer segmentation queries and isolated 12% high-value repeat customer cohort.
   - GitHub: https://github.com/officialankush090-sys/sql-retail-sales-analysis

2. Telecom Customer Churn Exploratory Analysis (Python)
   - Cleaned and profiled 7,043 customer accounts using Pandas and Seaborn.
   - Identified 42.7% churn rate on month-to-month contracts vs 2.8% on two-year agreements.
   - GitHub: https://github.com/officialankush090-sys/customer-churn-eda-python

3. Executive KPI & Budget Variance Dashboard (Excel)
   - Built dynamic multi-department expense tracker using XLOOKUP and Power Query.
   - Eliminated manual consolidation across 14 fragmented spreadsheets.
   - GitHub: https://github.com/officialankush090-sys/excel-kpi-financial-dashboard

ACADEMIC HIGHLIGHTS & PRACTICE:
- Actively solving database modeling and algorithm questions.
- Verified active open-source contributor on GitHub (officialankush090-sys).
- Available for Data Analyst internships and entry-level positions.

=====================================================
`;
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ankush_Data_Analyst_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <section id="resume" className="w-full bg-[#07080c] py-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">
                Curriculum Vitae
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Resume & Academic Credentials
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              ATS-compatible resume layout reflecting verified academic standing at SIET Nilokheri and hands-on analytics experience.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleDownloadCV}
              className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-lg active:scale-95"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Downloaded Plaintext Resume!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-black" />
                  <span>Download Plaintext Resume</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ATS-Friendly Paper-Style Visual Container */}
        <div className="w-full max-w-4xl mx-auto rounded-2xl bg-[#0f1117] border border-white/10 p-8 sm:p-12 space-y-8 text-neutral-300 shadow-2xl">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 space-y-3 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ankush
              </h3>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold">
                Aspiring Data Analyst
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>SIET Nilokheri, Haryana, India</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <span className="font-mono text-white">officialankush090@gmail.com</span>
              </span>
              <a
                href={resumeDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:underline flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={resumeDetails.github}
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:underline flex items-center gap-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-bold text-purple-400">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Motivated Computer Engineering undergraduate at SIET Nilokheri dedicated to data analytics and relational query engineering. Experienced in executing exploratory data analysis (EDA) using Python and Pandas, extracting multi-table cohort data via PostgreSQL, and constructing interactive dashboards in Microsoft Excel and Power BI. Focused on data integrity, clear visualization, and statistical validation.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-purple-400">
              Education
            </h4>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold text-white">
                <span>State Institute of Engineering & Technology (SIET), Nilokheri</span>
                <span className="text-xs text-neutral-400 font-normal">2023 – Present</span>
              </div>
              <p className="text-xs text-purple-300">Bachelor of Technology (B.Tech) in Computer Engineering</p>
              <div className="text-xs text-neutral-400 pt-1">
                <strong>Relevant Coursework: </strong> Database Management Systems (DBMS / SQL), Python Programming, Probability & Statistics, Data Structures & Algorithms, Computer Networks.
              </div>
            </div>
          </div>

          {/* Technical Skills Categorized */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-purple-400">
              Technical Skill Matrix
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-white">Programming: </span>
                <span className="text-neutral-400">Python (Pandas, NumPy, Matplotlib, Seaborn)</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-white">Databases: </span>
                <span className="text-neutral-400">SQL (PostgreSQL, MySQL, JOINS, Aggregations)</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-white">Spreadsheets: </span>
                <span className="text-neutral-400">Microsoft Excel (Pivot Tables, XLOOKUP, Power Query)</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-white">BI & Visualization: </span>
                <span className="text-neutral-400">Power BI (DAX, Data Modeling), Tableau (Learning)</span>
              </div>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-purple-400">
              Featured Analytics Projects
            </h4>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-white">
                  <span>Retail Sales Performance & Customer Segment Analysis</span>
                  <span className="text-purple-400 font-mono text-xs">PostgreSQL / SQL</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Engineered modular SQL queries analyzing 50k+ records. Implemented RFM customer segmentation to reveal that 12% of high-repeat customers accounted for 58% of gross margins.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-white">
                  <span>Telecom Customer Churn Exploratory Data Analysis</span>
                  <span className="text-purple-400 font-mono text-xs">Python / Pandas</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Conducted bivariate and correlation analyses on 7,043 subscriber accounts. Discovered a 42.7% churn rate on month-to-month contracts and isolated the highest-risk onboarding window.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
