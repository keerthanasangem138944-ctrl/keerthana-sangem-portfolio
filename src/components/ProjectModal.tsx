import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Check, AlertTriangle, KeyRound, Terminal, Github } from 'lucide-react';
import { Project } from '../data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Interactive test playground inside modal to showcase the Python logic
  const [testPassword, setTestPassword] = useState('Passw0rd!2026');
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Analysis rules matching Keerthana's Python project algorithm
  const hasMinLength = testPassword.length >= 8;
  const hasStrongLength = testPassword.length >= 12;
  const hasUpper = /[A-Z]/.test(testPassword);
  const hasLower = /[a-z]/.test(testPassword);
  const hasNumber = /[0-9]/.test(testPassword);
  const hasSpecial = /[^A-Za-z0-9]/.test(testPassword);

  let score = 0;
  if (hasMinLength) score += 1;
  if (hasStrongLength) score += 1;
  if (hasUpper) score += 1;
  if (hasLower) score += 1;
  if (hasNumber) score += 1;
  if (hasSpecial) score += 1;

  let strengthLabel = 'Weak';
  let strengthColor = 'text-red-600 bg-red-50 border-red-200';
  let barColor = 'bg-red-500';

  if (score >= 5) {
    strengthLabel = 'Very Strong';
    strengthColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
    barColor = 'bg-emerald-600';
  } else if (score >= 4) {
    strengthLabel = 'Strong';
    strengthColor = 'text-blue-700 bg-blue-50 border-blue-200';
    barColor = 'bg-blue-600';
  } else if (score >= 3) {
    strengthLabel = 'Moderate';
    strengthColor = 'text-amber-700 bg-amber-50 border-amber-200';
    barColor = 'bg-amber-500';
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 transform transition-all text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between gap-4 bg-gradient-to-r from-blue-50/50 via-white to-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20 shrink-0">
              <KeyRound className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                {project.category} Project
              </span>
              <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-slate-900">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {project.tagline}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Detailed Purpose & Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Project Purpose & Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Confirmed Features */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Confirmed Capabilities & Logic
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
                >
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Logic Sandbox (Demonstrating Keerthana's Python evaluation algorithm) */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-600" />
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  Interactive Algorithm Sandbox
                </h4>
              </div>
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${strengthColor}`}>
                {strengthLabel} ({score}/6)
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-3">
              Test how the Python validation rules evaluate credential entropy and resilience:
            </p>

            <div className="space-y-3">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={testPassword}
                  onChange={(e) => setTestPassword(e.target.value)}
                  placeholder="Enter a test password..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-mono text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 font-medium"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              {/* Strength Meter Bar */}
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${barColor}`}
                  style={{ width: `${Math.min(100, (score / 6) * 100)}%` }}
                />
              </div>

              {/* Requirement Checklist */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className={`flex items-center gap-1.5 ${hasMinLength ? 'text-emerald-700 font-medium' : 'text-slate-500'}`}>
                  {hasMinLength ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <span className="w-3.5 h-3.5 inline-block text-center">•</span>}
                  <span>Min 8 characters</span>
                </div>
                <div className={`flex items-center gap-1.5 ${hasUpper ? 'text-emerald-700 font-medium' : 'text-slate-500'}`}>
                  {hasUpper ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <span className="w-3.5 h-3.5 inline-block text-center">•</span>}
                  <span>Uppercase [A-Z]</span>
                </div>
                <div className={`flex items-center gap-1.5 ${hasLower ? 'text-emerald-700 font-medium' : 'text-slate-500'}`}>
                  {hasLower ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <span className="w-3.5 h-3.5 inline-block text-center">•</span>}
                  <span>Lowercase [a-z]</span>
                </div>
                <div className={`flex items-center gap-1.5 ${hasNumber ? 'text-emerald-700 font-medium' : 'text-slate-500'}`}>
                  {hasNumber ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <span className="w-3.5 h-3.5 inline-block text-center">•</span>}
                  <span>Numeric [0-9]</span>
                </div>
                <div className={`flex items-center gap-1.5 ${hasSpecial ? 'text-emerald-700 font-medium' : 'text-slate-500'}`}>
                  {hasSpecial ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <span className="w-3.5 h-3.5 inline-block text-center">•</span>}
                  <span>Special symbol</span>
                </div>
                <div className={`flex items-center gap-1.5 ${hasStrongLength ? 'text-emerald-700 font-medium' : 'text-slate-500'}`}>
                  {hasStrongLength ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <span className="w-3.5 h-3.5 inline-block text-center">•</span>}
                  <span>12+ chars (Entropy)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-sm transition-colors"
          >
            Close
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Profile & Code</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
