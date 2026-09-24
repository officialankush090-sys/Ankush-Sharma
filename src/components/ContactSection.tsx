import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  Copy, 
  Check, 
  ShieldCheck,
  Clock
} from 'lucide-react';
import { GitHubCatIcon } from './Logos';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // anti-bot spam prevention field
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('officialankush090@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.honeypot) {
      console.warn('Bot submission blocked');
      setStatus('success');
      return;
    }

    // Input Validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus('error');
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid business or personal email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please provide a message with at least 10 characters.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Client-side validated submission with mailto direct fallback
    setTimeout(() => {
      setStatus('success');
      // Prepare direct mail client link for guaranteed delivery
      const mailtoUrl = `mailto:officialankush090@gmail.com?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name.trim()}`
      )}&body=${encodeURIComponent(
        `Sender: ${formData.name.trim()} (${formData.email.trim()})\n\nMessage:\n${formData.message.trim()}`
      )}`;
      
      // Attempt window navigation to email client
      window.location.href = mailtoUrl;

      setFormData({
        name: '',
        email: '',
        message: '',
        honeypot: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="w-full bg-[#050608] py-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Connect for Analytics Opportunities
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            I am currently open to Data Analyst internships, project collaborations, and entry-level analytical opportunities. Feel free to send a message or connect directly.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Social Proof */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#0f1117] border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white">
                Contact Details & Direct Links
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400">Official Email</div>
                      <div className="text-xs sm:text-sm font-mono text-white">officialankush090@gmail.com</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400">Location</div>
                    <div className="text-xs sm:text-sm text-white">SIET Nilokheri, Haryana, India</div>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400">Response Window</div>
                    <div className="text-xs sm:text-sm text-white">Within 24 hours on business days</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-white/5 space-y-3">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Verified Profiles
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.linkedin.com/in/ankush-sharma-688290376?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0077b5]/10 hover:bg-[#0077b5]/20 border border-[#0077b5]/30 text-white transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-[#0077b5]" />
                      <span className="text-xs font-medium">LinkedIn Profile</span>
                    </div>
                    <span className="text-xs text-neutral-400">ankush-sharma</span>
                  </a>

                  <a
                    href="https://github.com/officialankush090-sys"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <GitHubCatIcon className="w-4 h-4 text-white" />
                      <span className="text-xs font-medium">GitHub Repository</span>
                    </div>
                    <span className="text-xs text-neutral-400 font-mono">officialankush090-sys</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1117] border border-white/10 space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Recruiter inquiries, interview invitations, or data project questions.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Validated & Spam Protected</span>
                </div>
              </div>

              {/* Status alerts */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-300 text-xs sm:text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block text-emerald-200">Message dispatched!</strong>
                    Your email client has been prompted with your message directly to officialankush090@gmail.com.
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-xs">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>{errorMessage}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for bot suppression */}
                <input
                  type="text"
                  name="user_organization_verify"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-medium text-neutral-300">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g., Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-medium text-neutral-300">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g., sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-medium text-neutral-300">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe the opportunity, internship role, or project you'd like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-50 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Preparing Email...' : 'Send Message'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
