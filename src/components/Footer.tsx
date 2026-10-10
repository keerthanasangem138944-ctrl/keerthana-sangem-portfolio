import React from 'react';
import { Github, Linkedin, Mail, Shield, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800">
          {/* Left Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                {PERSONAL_INFO.initials}
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.fullName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {PERSONAL_INFO.headline} • Marwadi University, Rajkot, Gujarat. Committed to building practical and defensively secure software.
            </p>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm" aria-label="Footer navigation">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#certificates"
              onClick={(e) => handleNavClick(e, 'certificates')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Certificates
            </a>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, 'experience')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Email Keerthana Sangem"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-500">
            <Shield className="w-3.5 h-3.5 text-blue-500" />
            <span>Cybersecurity Student & Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
