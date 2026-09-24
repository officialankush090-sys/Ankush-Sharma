import React, { useState, useEffect } from 'react';
import { 
  fetchVerifiedUserRepositories, 
  GitHubRepo,
  VERIFIED_GITHUB_CONFIG,
  FetchResult
} from '../services/githubService';
import { 
  verifiedCaseStudies, 
  DetailedCaseStudy 
} from '../data/skillsAndProjects';
import { 
  FolderGit2, 
  ExternalLink, 
  Star, 
  GitFork, 
  Calendar, 
  FileCode, 
  RefreshCw, 
  Layers, 
  CheckCircle2, 
  X,
  AlertCircle,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { GitHubCatIcon } from './Logos';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Featured' | 'AllRepositories'>('Featured');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [repoCategory, setRepoCategory] = useState<string>('All');
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [fetchState, setFetchState] = useState<FetchResult>({
    repos: [],
    verifiedOwner: VERIFIED_GITHUB_CONFIG.username,
    isCached: false,
    error: null,
    status: 'SUCCESS',
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<DetailedCaseStudy | null>(null);

  const loadRepos = async () => {
    setIsLoading(true);
    const result = await fetchVerifiedUserRepositories();
    setFetchState(result);
    setRepos(result.repos);
    setIsLoading(false);
  };

  useEffect(() => {
    loadRepos();
  }, []);

  const featuredCategories = ['All', 'SQL', 'Python', 'Excel', 'Power BI'];
  const repoCategories = ['All', 'Featured Projects', 'Data Analytics', 'Python', 'SQL', 'Web Development', 'Other'];

  const filteredCaseStudies = selectedCategory === 'All'
    ? verifiedCaseStudies
    : verifiedCaseStudies.filter(c => c.category === selectedCategory);

  // Helper to categorize real repositories strictly based on actual content/topics/languages
  const categorizeRepo = (repo: GitHubRepo): string => {
    const lang = (repo.language || '').toLowerCase();
    const name = repo.name.toLowerCase();
    const desc = (repo.description || '').toLowerCase();
    const topics = (repo.topics || []).map(t => t.toLowerCase());

    const isPython = lang === 'python' || lang === 'jupyter notebook' || topics.includes('python') || desc.includes('python');
    const isSql = lang === 'sql' || topics.includes('sql') || topics.includes('postgresql') || desc.includes('sql');
    const isData = isPython || isSql || topics.includes('data-analysis') || topics.includes('eda') || desc.includes('data') || desc.includes('analytics');
    const isWeb = lang === 'typescript' || lang === 'javascript' || lang === 'html' || lang === 'css' || topics.includes('react') || topics.includes('web');

    if (repo.name === VERIFIED_GITHUB_CONFIG.username || repo.name === 'sql-retail-sales-analysis') {
      return 'Featured Projects';
    }
    if (isData) return 'Data Analytics';
    if (isPython) return 'Python';
    if (isSql) return 'SQL';
    if (isWeb) return 'Web Development';
    return 'Other';
  };

  const filteredRepos = repos.filter((repo) => {
    if (repoCategory === 'All') return true;
    const cat = categorizeRepo(repo);
    if (repoCategory === 'Featured Projects' && cat === 'Featured Projects') return true;
    if (repoCategory === 'Data Analytics' && (cat === 'Data Analytics' || cat === 'Featured Projects')) return true;
    if (repoCategory === 'Python' && (repo.language?.toLowerCase() === 'python' || repo.topics?.includes('python'))) return true;
    if (repoCategory === 'SQL' && (repo.language?.toLowerCase() === 'sql' || repo.topics?.includes('sql'))) return true;
    if (repoCategory === 'Web Development' && (repo.language?.toLowerCase() === 'typescript' || repo.language?.toLowerCase() === 'javascript')) return true;
    if (repoCategory === 'Other') return cat === 'Other';
    return cat === repoCategory;
  });

  return (
    <section id="projects" className="w-full bg-[#07080c] py-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">
                Verified Repositories & Analytics Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Projects & Verified GitHub Code
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Strictly bound to GitHub account <strong className="text-white font-mono">{VERIFIED_GITHUB_CONFIG.username}</strong>. Every project represents genuine data cleaning, querying, or exploratory scripts.
            </p>
          </div>

          {/* Toggle between Featured Case Studies and Live GitHub Repositories */}
          <div className="flex items-center p-1 bg-white/5 rounded-xl border border-white/10 shrink-0">
            <button
              onClick={() => setActiveTab('Featured')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'Featured'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Featured Case Studies ({verifiedCaseStudies.length})
            </button>
            <button
              onClick={() => setActiveTab('AllRepositories')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'AllRepositories'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <GitHubCatIcon className="w-3.5 h-3.5" />
              <span>GitHub Repositories ({repos.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Featured Case Studies */}
        {activeTab === 'Featured' && (
          <div className="space-y-8">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/5">
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mr-2 shrink-0">
                Discipline:
              </span>
              {featuredCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCaseStudies.map((study) => (
                <div
                  key={study.id}
                  className="rounded-2xl bg-[#0f1117] border border-white/10 p-6 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded text-[11px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/25">
                        {study.category} Case Study
                      </span>
                      <a
                        href={study.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                        title={`Open on github.com/${VERIFIED_GITHUB_CONFIG.username}`}
                      >
                        <GitHubCatIcon className="w-4 h-4" />
                      </a>
                    </div>

                    <h3 className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors leading-snug">
                      {study.title}
                    </h3>

                    <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                      {study.problem}
                    </p>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 text-xs">
                      <div className="text-neutral-500 font-mono text-[11px]">Primary Insight:</div>
                      <div className="text-neutral-300 line-clamp-2">
                        {study.keyInsights[0]}
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white/5 text-neutral-400 text-[11px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedCaseStudy(study)}
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5 text-purple-400" />
                      <span>Read Case Study</span>
                    </button>
                    <a
                      href={study.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>Code</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 2: Live GitHub Repositories (Strict Owner Verified) */}
        {activeTab === 'AllRepositories' && (
          <div className="space-y-6">
            
            {/* Strict Owner Verification Status Bar */}
            <div className="p-4 rounded-xl bg-[#0f1117] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400">Verified Account:</span>
                    <a 
                      href={VERIFIED_GITHUB_CONFIG.profileUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="font-mono text-white font-bold hover:text-purple-300 underline"
                    >
                      {VERIFIED_GITHUB_CONFIG.username}
                    </a>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-mono">
                      owner.login verified
                    </span>
                  </div>
                  <div className="text-neutral-400 mt-0.5">
                    Repositories strictly filtered: <code className="text-purple-300 font-mono text-[11px]">repo.owner.login === '{VERIFIED_GITHUB_CONFIG.username}'</code>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={VERIFIED_GITHUB_CONFIG.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs flex items-center gap-1.5 transition-colors"
                >
                  <GitHubCatIcon className="w-3.5 h-3.5" />
                  <span>Open GitHub Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={loadRepos}
                  disabled={isLoading}
                  className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                  <span>Re-fetch Repos</span>
                </button>
              </div>
            </div>

            {/* Error or Rate-limit Notice */}
            {fetchState.error && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3 text-amber-300 text-xs">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-semibold text-amber-200">
                    {fetchState.status === 'RATE_LIMITED' 
                      ? 'GitHub API Notice' 
                      : 'GitHub projects are temporarily unavailable. Please try again later.'}
                  </div>
                  <p className="text-neutral-300">
                    {fetchState.error}
                  </p>
                </div>
              </div>
            )}

            {/* Repository Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/5">
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mr-2 shrink-0">
                Filter:
              </span>
              {repoCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setRepoCategory(cat)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer shrink-0 ${
                    repoCategory === cat
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Repositories Cards */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-44 rounded-2xl bg-[#0f1117] border border-white/5 animate-pulse p-6" />
                ))}
              </div>
            ) : filteredRepos.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#0f1117] border border-white/10 space-y-3">
                <FolderGit2 className="w-8 h-8 text-neutral-500 mx-auto" />
                <p className="text-neutral-400 text-sm font-medium">
                  No repositories match filter "{repoCategory}".
                </p>
                <p className="text-neutral-500 text-xs">
                  Showing repositories exclusively owned by <span className="font-mono text-white">{VERIFIED_GITHUB_CONFIG.username}</span>.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRepos.map((repo) => (
                  <div
                    key={repo.id}
                    className="rounded-2xl bg-[#0f1117] border border-white/10 p-5 flex flex-col justify-between hover:border-purple-500/30 transition-all group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileCode className="w-4 h-4 text-purple-400" />
                          <h4 className="font-semibold text-sm text-white group-hover:text-purple-300 transition-colors truncate max-w-[200px]">
                            {repo.name}
                          </h4>
                        </div>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-400 hover:text-white p-1 rounded hover:bg-white/5 transition-colors"
                          title={`View ${repo.full_name} on GitHub`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                        {repo.description || 'Public repository by officialankush090-sys.'}
                      </p>

                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {repo.topics.slice(0, 4).map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-neutral-400 font-mono">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span>{repo.language || 'Code'}</span>
                        </span>
                        {repo.stargazers_count > 0 && (
                          <span className="flex items-center gap-0.5 text-amber-400">
                            <Star className="w-3 h-3 fill-current" />
                            <span>{repo.stargazers_count}</span>
                          </span>
                        )}
                        {repo.forks_count > 0 && (
                          <span className="flex items-center gap-0.5 text-neutral-400">
                            <GitFork className="w-3 h-3" />
                            <span>{repo.forks_count}</span>
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono">
                        {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </div>

      {/* Case Study Full Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-[#0d0e14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#12141c]">
              <div className="space-y-1">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {selectedCaseStudy.category} Case Study Breakdown
                </span>
                <h3 className="text-lg font-bold text-white">
                  {selectedCaseStudy.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
              
              {/* Problem & Objective */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                    Business Problem
                  </div>
                  <p className="text-neutral-300 leading-relaxed text-xs">
                    {selectedCaseStudy.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    Analytical Objective
                  </div>
                  <p className="text-neutral-300 leading-relaxed text-xs">
                    {selectedCaseStudy.objective}
                  </p>
                </div>
              </div>

              {/* Dataset Description */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Dataset Specifications
                </div>
                <p className="text-neutral-300 leading-relaxed text-xs">
                  {selectedCaseStudy.dataset}
                </p>
              </div>

              {/* Data Cleaning Stage */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Data Cleaning & Transformation Procedures</span>
                </div>
                <ul className="space-y-2 p-4 rounded-xl bg-[#13151f] border border-white/5 text-neutral-300 text-xs">
                  {selectedCaseStudy.cleaningProcess.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono shrink-0">[{idx + 1}]</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Insights & Results */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Actionable Business Insights
                </div>
                <div className="space-y-2 p-4 rounded-xl bg-[#13151f] border border-white/5 text-neutral-300 text-xs">
                  {selectedCaseStudy.keyInsights.map((insight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400">✦</span>
                      <span>{insight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex items-center gap-2 flex-wrap pt-2">
                <span className="text-neutral-400 text-xs">Technologies Used:</span>
                {selectedCaseStudy.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-white/5 text-white font-mono text-xs">
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#12141c] flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-mono">
                owner: {VERIFIED_GITHUB_CONFIG.username}
              </span>
              <a
                href={selectedCaseStudy.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>View Notebook / SQL File</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
