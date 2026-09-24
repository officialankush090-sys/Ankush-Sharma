import React from 'react';

export const GoogleLogo: React.FC<{ className?: string }> = ({ className = 'h-6' }) => (
  <svg
    viewBox="0 0 100 32"
    fill="currentColor"
    className={className}
    aria-label="Google"
    role="img"
  >
    <path d="M12.8 13.9v4.5h7.3c-.3 1.9-1.2 3.3-2.5 4.3-1.6 1.2-3.6 1.9-6.3 1.9-5 0-9.1-4.1-9.1-9.2s4.1-9.2 9.1-9.2c2.7 0 4.7 1.1 6.1 2.5l3.2-3.2C18.6 3 15.7 1.7 11.3 1.7 5.1 1.7 0 6.8 0 13s5.1 11.3 11.3 11.3c3.4 0 6-1.1 8-3.2 2.1-2.1 2.8-5.1 2.8-7.5 0-.7-.1-1.4-.2-1.9h-9.1z" />
    <path d="M32.5 8.7c-4.3 0-7.7 3.3-7.7 7.7s3.5 7.7 7.7 7.7 7.7-3.4 7.7-7.7-3.4-7.7-7.7-7.7zm0 12.3c-2.4 0-4.5-2-4.5-4.6s2.1-4.6 4.5-4.6 4.5 2 4.5 4.6-2.1 4.6-4.5 4.6z" />
    <path d="M49 8.7c-4.3 0-7.7 3.3-7.7 7.7s3.5 7.7 7.7 7.7 7.7-3.4 7.7-7.7-3.4-7.7-7.7-7.7zm0 12.3c-2.4 0-4.5-2-4.5-4.6s2.1-4.6 4.5-4.6 4.5 2 4.5 4.6-2.1 4.6-4.5 4.6z" />
    <path d="M64.7 9.1v1.4h-.1c-.8-1-2.4-1.9-4.3-1.9-4.1 0-7.7 3.5-7.7 7.8s3.6 7.7 7.7 7.7c2 0 3.5-.9 4.3-1.9h.1v1.2c0 3-1.6 4.5-4.2 4.5-2.1 0-3.4-1.5-4-2.8l-2.8 1.2c.8 2 3 4.6 6.8 4.6 3.9 0 7.3-2.3 7.3-8.1V9.1h-3.2zm-4.1 11.9c-2.3 0-4.2-2-4.2-4.6 0-2.7 1.9-4.6 4.2-4.6 2.3 0 4.1 2 4.1 4.7 0 2.6-1.8 4.5-4.1 4.5z" />
    <path d="M72.2 2.6h3.2v21.5h-3.2z" />
    <path d="M83.6 8.7c-3.8 0-6.9 3.2-6.9 7.7 0 4.6 3.2 7.7 7.4 7.7 3.4 0 5.4-1.9 6.6-3.4l-2.6-1.8c-.8 1.1-1.9 2.1-4 2.1-2.1 0-3.6-1.1-4.2-2.7l11.4-4.7-.6-1.4c-.9-2.2-3.4-3.5-7.1-3.5zm.3 3c1.7 0 2.9.9 3.4 2l-7.7 3.2c-.3-2.1 1.7-5.2 4.3-5.2z" />
  </svg>
);

export const MicrosoftLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
      <div className="bg-current w-full h-full"></div>
      <div className="bg-current w-full h-full"></div>
      <div className="bg-current w-full h-full"></div>
      <div className="bg-current w-full h-full"></div>
    </div>
    <span className="text-sm font-semibold tracking-tight leading-none text-current">
      Microsoft
    </span>
  </div>
);

export const KurukshetraLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex flex-col text-left leading-tight ${className}`}>
    <span className="text-xs font-bold tracking-tight text-current">
      Kurukshetra
    </span>
    <span className="text-xs font-normal tracking-wide text-neutral-300">
      University
    </span>
  </div>
);

export const KaggleLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M4 3v18" />
      <path d="M18 4L9 13l9 7" />
    </svg>
    <span className="text-sm font-semibold tracking-tight leading-none text-current">
      Kaggle
    </span>
  </div>
);

export const SupabaseLogo: React.FC<{ className?: string }> = ({ className = 'h-5' }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-400">
      <path d="M13.3 2.1c-.8-.8-2-.3-2.1.8L9.8 11.5h8.9c1 0 1.6 1.1 1 1.9L10.7 21.9c-.8.8-2 .3-2.1-.8l1.4-8.6H1.1c-1 0-1.6-1.1-1-1.9L9 2.1c.3-.4.8-.6 1.3-.6l3 0z" />
    </svg>
    <span className="text-sm font-semibold tracking-tight leading-none text-current">
      Supabase
    </span>
  </div>
);

export const GitHubCatIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);
