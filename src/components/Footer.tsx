import React from 'react';
import { Mail, Linkedin, Heart } from 'lucide-react';
import { GitHubCatIcon } from './Logos';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-12 px-6 sm:px-10 md:px-16 text-neutral-400 text-xs">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand info */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-white font-bold text-sm tracking-tight">
            Ankush Sharma
          </div>
          <p className="text-neutral-500">
            Aspiring Data Analyst · Undergraduate at SIET Nilokheri
          </p>
        </div>

        {/* Center: Authentic Ethics note */}
        <div className="text-neutral-500 text-center text-[11px] max-w-md">
          Crafted with authentic project artifacts, genuine academic progress at SIET Nilokheri, and zero inflated metrics.
        </div>

        {/* Right: Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/officialankush090-sys"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            title="GitHub"
          >
            <GitHubCatIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ankush-sharma-688290376?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:officialankush090@gmail.com"
            className="hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
