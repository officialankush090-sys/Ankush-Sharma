import React, { useState } from 'react';
import { Menu, X, BarChart2, FileText, Code, FolderGit2, User, Mail } from 'lucide-react';
import { GitHubCatIcon } from './Logos';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between h-16">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-700 flex items-center justify-center font-bold text-white text-sm shadow-md">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-purple-300 transition-colors">
              Ankush Sharma
            </span>
            <span className="text-[10px] text-neutral-400 font-mono">
              Aspiring Data Analyst · SIET
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Link & Social */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/officialankush090-sys"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <GitHubCatIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all shadow-sm"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d12] border-b border-white/10 px-6 py-4 space-y-3 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-300 hover:text-white py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <a
              href="https://github.com/officialankush090-sys"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white font-mono"
            >
              <GitHubCatIcon className="w-4 h-4" />
              <span>officialankush090-sys</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-1.5 rounded-full bg-purple-600 text-white text-xs font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
