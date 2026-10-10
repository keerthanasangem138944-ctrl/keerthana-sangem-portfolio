import React, { useState } from 'react';
import { ArrowDown, FileText, Download, ExternalLink, Github, Linkedin, Mail, ShieldCheck, Terminal, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { ResumeModal } from './ResumeModal';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      const res = await fetch(PERSONAL_INFO.resumePath, { method: 'HEAD' });
      const contentType = res.headers.get('content-type') || '';
      if (!res.ok || contentType.includes('text/html')) {
        e.preventDefault();
        setResumeModalOpen(true);
      }
    } catch {
      e.preventDefault();
      setResumeModalOpen(true);
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f00f_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f00f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>{PERSONAL_INFO.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.15] mb-3">
              Hi, I'm{' '}
              <span className="text-blue-600 inline-block font-extrabold">
                {PERSONAL_INFO.fullName}
              </span>
              .
            </h1>

            {/* Professional Headline */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 mb-5">
              {PERSONAL_INFO.headline}
            </h2>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              I am a cybersecurity student with a strong programming foundation in Java, Python, and C.
              I focus on understanding digital security principles, analyzing software vulnerabilities,
              and building practical, reliable applications.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm sm:text-base transition-all shadow-sm hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleResumeClick(e)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-medium text-sm sm:text-base transition-all shadow-2xs hover:border-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="View Resume PDF (opens in new tab)"
              >
                <ExternalLink className="w-4 h-4 text-blue-600" />
                <span>View Resume</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Keerthana_Sangem_Resume.pdf"
                onClick={(e) => handleResumeClick(e)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-50/70 hover:bg-blue-100/80 border border-blue-200 text-blue-700 font-medium text-sm sm:text-base transition-all shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Download Resume PDF"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Secondary Social Links */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-100 w-full">
              <span className="text-xs uppercase font-semibold tracking-wider text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  aria-label={`Email ${PERSONAL_INFO.email}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Frame & Verified Specialization Badges (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl p-3 sm:p-4 bg-white border border-slate-200 shadow-xl shadow-blue-500/5">
                {/* Image frame */}
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 border border-slate-200/80 flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={PERSONAL_INFO.profileImagePath}
                      alt="Keerthana Sangem - Cybersecurity Student and Developer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 hover:scale-102"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-blue-50/80 to-blue-100/50">
                      <div className="w-24 h-24 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-md shadow-blue-600/20 mb-4 tracking-wider">
                        {PERSONAL_INFO.initials}
                      </div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {PERSONAL_INFO.fullName}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 max-w-[200px]">
                        Cybersecurity • Java & Python Developer
                      </p>
                    </div>
                  )}

                  {/* Corner Accent badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-slate-200/80 text-[11px] font-medium text-slate-700 shadow-2xs flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Cybersecurity Specialization</span>
                  </div>
                </div>

                {/* Supporting labels underneath portrait */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-center text-blue-600 mb-1">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-700 leading-tight block">
                      Cybersecurity
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-center text-blue-600 mb-1">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-700 leading-tight block">
                      Java & Python
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-center text-blue-600 mb-1">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-700 leading-tight block">
                      Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume verification modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </section>
  );
};
