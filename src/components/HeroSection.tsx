import React, { useState } from 'react';
import { 
  GoogleLogo, 
  MicrosoftLogo, 
  KurukshetraLogo, 
  KaggleLogo, 
  SupabaseLogo, 
  GitHubCatIcon 
} from './Logos';
import { ProjectsModal } from './ProjectsModal';
import { ResumeModal } from './ResumeModal';
import { ContributionsModal } from './ContributionsModal';

export const HeroSection: React.FC = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContributionsOpen, setIsContributionsOpen] = useState(false);
  const [orbHovered, setOrbHovered] = useState(false);

  return (
    <section className="relative min-h-screen w-full bg-black text-white flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-12 md:py-16 lg:py-20 overflow-hidden select-none">
      
      {/* Background Subtle Gradient & Glow */}
      <div 
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" 
        aria-hidden="true" 
      />

      {/* Main Hero Container */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1 my-auto">
        
        {/* Left Column: Bio & Calls to Action */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center z-10">
          
          {/* Subtitle / Intro */}
          <div className="mb-3.5 sm:mb-4">
            <span className="text-xs sm:text-[13px] md:text-sm font-semibold tracking-[0.22em] text-[#7d859b] uppercase">
              HELLO, I'M
            </span>
          </div>

          {/* Name Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-bold text-white tracking-tight leading-[1.08] mb-2 sm:mb-3">
            Ankush Sharma
          </h1>

          {/* Role / Discipline Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-medium sm:font-semibold text-[#9e9bf6] tracking-tight leading-tight mb-5 sm:mb-6">
            Aspiring Data Analyst
          </h2>

          {/* Bio Description */}
          <p className="text-sm sm:text-base md:text-[17px] text-[#c3c7d2] font-normal leading-[1.65] max-w-xl mb-8 sm:mb-10 text-balance">
            Undergraduate student at <strong className="text-white">SIET Nilokheri</strong> with hands-on experience in 
            Python, SQL, Excel, and exploratory data analysis. Focused on translating complex records 
            into actionable business intelligence and structured analytical models.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-12 sm:mb-16">
            {/* View My Work Button */}
            <button
              onClick={() => setIsProjectsOpen(true)}
              className="group h-[50px] px-7 rounded-full bg-white hover:bg-[#ededed] text-black font-semibold text-[15px] flex items-center justify-center gap-3 transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] active:scale-[0.98] cursor-pointer"
              title="Explore Ankush's Projects & GitHub Code"
            >
              <span>View My Work</span>
              <GitHubCatIcon className="w-[18px] h-[18px] text-black transition-transform duration-200 group-hover:scale-110" />
            </button>

            {/* Download CV Button */}
            <button
              onClick={() => setIsResumeOpen(true)}
              className="group h-[50px] px-7 rounded-full bg-transparent hover:bg-white/10 text-white font-semibold text-[15px] border border-white/90 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              title="Preview & Download Ankush Sharma's CV"
            >
              <span>Download CV</span>
              {/* Custom Download Icon (tray with arrow down) matching the image */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </div>

          {/* Trusted By Section */}
          <div className="pt-2">
            <p className="text-[12px] md:text-[13px] text-neutral-400 font-normal mb-3 tracking-wide">
              Trusted by
            </p>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-9 text-white">
              {/* Google */}
              <div 
                className="opacity-95 hover:opacity-100 transition-opacity cursor-default" 
                title="Google"
              >
                <GoogleLogo className="h-5 sm:h-6 text-white fill-current" />
              </div>

              {/* Microsoft */}
              <div 
                className="opacity-95 hover:opacity-100 transition-opacity cursor-default" 
                title="Microsoft"
              >
                <MicrosoftLogo className="text-white" />
              </div>

              {/* Kurukshetra University */}
              <div 
                className="opacity-95 hover:opacity-100 transition-opacity cursor-default" 
                title="Kurukshetra University"
              >
                <KurukshetraLogo className="text-white" />
              </div>

              {/* Kaggle */}
              <div 
                className="opacity-95 hover:opacity-100 transition-opacity cursor-default" 
                title="Kaggle"
              >
                <KaggleLogo className="text-white" />
              </div>

              {/* Supabase */}
              <div 
                className="opacity-95 hover:opacity-100 transition-opacity cursor-default" 
                title="Supabase"
              >
                <SupabaseLogo className="text-white" />
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Visual Composition with Curved Loop, Glassy Orb & Cards */}
        <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] w-full">
          
          {/* Main Visual Canvas wrapper */}
          <div className="relative w-full max-w-[500px] h-[480px] sm:h-[520px]">
            
            {/* The Thin Organic Outline Loop */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.11)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.16)" />
                </linearGradient>
              </defs>
              {/* Organic trajectory loop framing the floating items */}
              <path
                d="M 240 460 
                   C 140 460, 60 400, 55 330 
                   C 50 250, 75 140, 110 90 
                   C 145 40, 240 30, 360 30 
                   C 440 30, 460 70, 460 140 
                   C 460 210, 440 310, 420 380 
                   C 400 440, 330 460, 240 460 Z"
                stroke="url(#loopGradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Floating Element 1: "4 Verified Projects" Card */}
            <div 
              onClick={() => setIsProjectsOpen(true)}
              className="absolute top-0 right-2 sm:right-4 w-[140px] sm:w-[155px] p-4 sm:p-5 rounded-2xl bg-[#0f1117]/90 border border-white/12 backdrop-blur-md shadow-2xl hover:border-purple-400/40 hover:scale-[1.03] transition-all duration-300 cursor-pointer group z-20"
              title="Click to view verified repositories on officialankush090-sys"
            >
              <div className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white tracking-tight leading-none mb-2 font-mono tabular-nums">
                4
              </div>
              <div className="text-xs sm:text-[13px] text-neutral-400 leading-snug font-normal group-hover:text-neutral-300 transition-colors">
                Verified<br />Repositories
              </div>
            </div>

            {/* Floating Element 2: Translucent Glassy Orb with Purple Sparkle */}
            <div 
              className="absolute top-[280px] sm:top-[290px] left-[20px] sm:left-[30px] -translate-y-1/2 -translate-x-1/4 z-20 cursor-pointer transition-transform duration-300"
              onMouseEnter={() => setOrbHovered(true)}
              onMouseLeave={() => setOrbHovered(false)}
              onClick={() => setIsProjectsOpen(true)}
              style={{
                transform: orbHovered ? 'scale(1.1) translateY(-4px)' : 'scale(1)',
              }}
              title="Interactive Innovation Core"
            >
              {/* Outer 3D Glass Sphere */}
              <div 
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.85)] border border-white/15"
                style={{
                  background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.28) 0%, rgba(85, 92, 117, 0.35) 25%, rgba(18, 20, 30, 0.85) 60%, rgba(6, 7, 12, 0.98) 100%)',
                  boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.45), inset 0 -4px 10px rgba(0, 0, 0, 0.9), 0 12px 30px rgba(0,0,0,0.8)',
                }}
              >
                {/* Glass specular top highlight */}
                <div 
                  className="absolute top-2 left-3 w-8 h-4 rounded-full bg-gradient-to-b from-white/40 to-transparent blur-[1px] transform -rotate-25 pointer-events-none" 
                />

                {/* Glowing Purple/Violet Center Sparkle */}
                <div className="relative flex items-center justify-center">
                  {/* Purple glow backdrop */}
                  <div 
                    className="absolute w-8 h-8 rounded-full bg-purple-500/50 blur-md pointer-events-none animate-pulse" 
                  />
                  {/* Four-pointed diamond star sparkle */}
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-7 h-7 text-[#b59efe] filter drop-shadow-[0_0_8px_rgba(181,158,254,0.9)]"
                    aria-hidden="true"
                  >
                    <path d="M12 0 C12 7, 7 12, 0 12 C7 12, 12 17, 12 24 C12 17, 17 12, 24 12 C17 12, 12 7, 12 0 Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Element 3: "+120% Git Contributions" Card */}
            <div 
              onClick={() => setIsContributionsOpen(true)}
              className="absolute bottom-6 sm:bottom-8 right-0 sm:right-2 w-[220px] sm:w-[250px] p-4 sm:p-5 rounded-2xl bg-[#0f1115]/85 border border-white/12 backdrop-blur-md shadow-2xl hover:border-purple-400/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer group z-20"
              title="Click to view GitHub velocity & commit stats"
            >
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none mb-1 font-mono tabular-nums">
                +120%
              </div>
              <div className="text-xs sm:text-[13px] text-neutral-400 font-normal mb-3 sm:mb-4 group-hover:text-neutral-300 transition-colors">
                Git Contributions
              </div>

              {/* The Smooth Upward Lilac Wave Graph */}
              <div className="w-full h-8 sm:h-9 relative flex items-center">
                <svg
                  viewBox="0 0 210 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full overflow-visible"
                >
                  <path
                    d="M 5 34 C 25 33, 40 22, 60 25 C 80 28, 95 32, 115 24 C 135 16, 150 19, 170 12 C 185 6, 195 9, 205 2"
                    stroke="#a892fc"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="filter drop-shadow-[0_0_6px_rgba(168,146,252,0.65)]"
                  />
                </svg>
              </div>

              {/* Diamond Sparkle underneath bottom right of the card */}
              <div 
                className="absolute -bottom-4 right-12 translate-y-1/2 pointer-events-none z-10"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-[#5a6272] opacity-90 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                >
                  <path d="M12 0 C12 6.5, 6.5 12, 0 12 C6.5 12, 12 17.5, 12 24 C12 17.5, 17.5 12, 24 12 C17.5 12, 12 6.5, 12 0 Z" />
                </svg>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Modals */}
      <ProjectsModal 
        isOpen={isProjectsOpen} 
        onClose={() => setIsProjectsOpen(false)} 
      />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <ContributionsModal 
        isOpen={isContributionsOpen} 
        onClose={() => setIsContributionsOpen(false)} 
      />
    </section>
  );
};
