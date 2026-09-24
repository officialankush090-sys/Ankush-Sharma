/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-600/40 selection:text-white flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Home / Hero (With verified links & floating interactive elements) */}
        <HeroSection />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Skills Section (Categorized Python, SQL, Excel, Power BI / Tableau, Stats) */}
        <SkillsSection />

        {/* 4. Projects Section (Live GitHub API + Verified Analytics Case Studies) */}
        <ProjectsSection />

        {/* 5. Resume Section (ATS-optimized CV + Plaintext Download) */}
        <ResumeSection />

        {/* 6. Contact Section (Spam-protected, validated, with direct mail client & LinkedIn) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
