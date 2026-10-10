import React, { useState } from 'react';
import { GraduationCap, MapPin, Target, GitBranch, Shield, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 md:py-24 bg-white border-t border-slate-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Background & Objectives</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            <p>
              I am a <strong className="text-slate-900 font-semibold">B.Tech Computer Science Engineering student</strong> specializing in <strong className="text-blue-600 font-semibold">Cyber Security</strong> at <strong className="text-slate-900 font-semibold">Marwadi University</strong> in Rajkot, Gujarat (July 2025 to May 2029).
            </p>

            <p>
              My academic and technical journey centers on learning how computing systems operate at a fundamental level and how software can be engineered securely from the ground up. I actively program in <span className="text-slate-800 font-medium">Java</span>, <span className="text-slate-800 font-medium">Python</span>, and <span className="text-slate-800 font-medium">C</span>, combining structural object-oriented programming with lightweight security automation.
            </p>

            <p>
              To maintain reliable engineering discipline, I use <strong className="text-slate-900 font-semibold">Git and GitHub</strong> for version control, commit organization, and branch management. Whether designing a password strength analysis engine or collaborating on technical tasks at Decode Labs, I prioritize readable, well-structured, and verifiable code.
            </p>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100/90 text-sm sm:text-base text-slate-700">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Career Objective</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {PERSONAL_INFO.careerObjective}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts & Key Highlights (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Profile snapshot card */}
            <div className="p-4.5 rounded-2xl bg-gradient-to-r from-blue-50/70 to-slate-50 border border-blue-100 flex items-center gap-4 shadow-2xs">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border border-blue-200 shrink-0 flex items-center justify-center shadow-xs">
                {!imageError ? (
                  <img
                    src={PERSONAL_INFO.profileImagePath}
                    alt={PERSONAL_INFO.fullName}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                ) : (
                  <span className="font-bold text-blue-700 text-base">{PERSONAL_INFO.initials}</span>
                )}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                  {PERSONAL_INFO.fullName}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 font-medium">
                  {PERSONAL_INFO.headline}
                </p>
                <span className="inline-block text-[11px] font-semibold text-blue-600 mt-1">
                  Marwadi University • 2025–2029
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-xs transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm">Undergraduate Education</h4>
              <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                {PERSONAL_INFO.education.institution}
              </p>
              <p className="text-slate-500 text-xs mt-0.5">
                B.Tech CSE (Cyber Security) • 2025–2029
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-xs transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm">Current Location</h4>
              <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                {PERSONAL_INFO.location}
              </p>
              <p className="text-slate-500 text-xs mt-0.5">
                Available for on-site & remote opportunities
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-xs transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm">Primary Focus</h4>
              <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                Cybersecurity & Application Development
              </p>
              <p className="text-slate-500 text-xs mt-0.5">
                Secure coding practices, defensive principles, and practical software design
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-xs transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center mb-3">
                <GitBranch className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm">Workflow & Version Control</h4>
              <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                Git & GitHub Version Control
              </p>
              <p className="text-slate-500 text-xs mt-0.5">
                Branching, structured commit messages, and collaboration workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
