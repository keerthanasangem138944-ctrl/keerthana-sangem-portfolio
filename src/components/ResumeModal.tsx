import React, { useState, useEffect } from 'react';
import { X, FileText, Download, ExternalLink, AlertCircle, CheckCircle2, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [fileExists, setFileExists] = useState<boolean | null>(null);
  const [checking, setChecking] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Check if the resume file exists on server
    setChecking(true);
    fetch(PERSONAL_INFO.resumePath, { method: 'HEAD' })
      .then((res) => {
        // If status is 200 and not HTML (SPA fallback often returns HTML 200 with index.html)
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && !contentType.includes('text/html')) {
          setFileExists(true);
        } else {
          setFileExists(false);
        }
      })
      .catch(() => {
        setFileExists(false);
      })
      .finally(() => {
        setChecking(false);
      });
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyPath = () => {
    navigator.clipboard.writeText('public/resume/Keerthana_Sangem_Resume.pdf');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden transform transition-all p-6 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-lg font-bold text-slate-900">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs text-slate-500">
              {PERSONAL_INFO.fullName} • {PERSONAL_INFO.headline}
            </p>
          </div>
        </div>

        {checking ? (
          <div className="py-8 text-center text-slate-500 text-sm flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <span>Verifying document availability...</span>
          </div>
        ) : fileExists ? (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">Verified resume document ready</p>
                <p className="text-xs text-slate-600 mt-0.5">
                  The verified PDF is available for preview in browser or direct download.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Resume</span>
              </a>
              <a
                href={PERSONAL_INFO.resumePath}
                download="Keerthana_Sangem_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 text-sm text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900">Document Upload Pending</p>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  The resume PDF has not yet been committed to the GitHub repository. To display your verified document, upload your PDF file to the specified path below.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
              <div className="flex items-center justify-between text-slate-600 mb-1.5 font-medium">
                <span>Target Repository File Path:</span>
                <button
                  onClick={handleCopyPath}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold focus:outline-hidden"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <code className="block bg-white p-2 rounded-lg border border-slate-200 text-slate-800 font-mono select-all">
                public/resume/Keerthana_Sangem_Resume.pdf
              </code>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Once you upload the file to your repository and push to GitHub (or deploy to Vercel), this button will immediately allow recruiters to view and download your resume.
            </p>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Close
              </button>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-xs"
              >
                <span>Go to GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
