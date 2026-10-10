import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  Download, 
  Calendar, 
  Building2, 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  X
} from 'lucide-react';
import { CERTIFICATES_DATA, Certificate } from '../data/portfolio';

export const Certificates: React.FC = () => {
  const [selectedPendingCert, setSelectedPendingCert] = useState<Certificate | null>(null);
  const [copied, setCopied] = useState(false);

  const handleActionClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    cert: Certificate,
    _action: 'view' | 'download'
  ) => {
    try {
      const res = await fetch(cert.filePath, { method: 'HEAD' });
      const contentType = res.headers.get('content-type') || '';
      // If file not found or returns SPA index.html, prompt the upload modal
      if (!res.ok || contentType.includes('text/html')) {
        e.preventDefault();
        setSelectedPendingCert(cert);
      }
    } catch {
      e.preventDefault();
      setSelectedPendingCert(cert);
    }
  };

  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(`public${path}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="certificates" 
      className="py-20 md:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white border-t border-slate-100 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Certificate Vault
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            A collection of certifications, technical achievements, and continuous learning.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES_DATA.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top Accent & Icon */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Award className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200/70">
                    {cert.category}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                  {cert.title}
                </h3>

                {/* Issuer Details */}
                <div className="space-y-1.5 mb-6 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-medium text-slate-800">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                <a
                  href={cert.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleActionClick(e, cert, 'view')}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  aria-label={`View ${cert.title} certificate PDF`}
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  <span>View Certificate</span>
                </a>

                <a
                  href={cert.filePath}
                  download={cert.fileName}
                  onClick={(e) => handleActionClick(e, cert, 'download')}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50/80 hover:bg-blue-100/90 text-blue-700 border border-blue-200 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600 shadow-2xs"
                  aria-label={`Download ${cert.title} certificate PDF`}
                >
                  <Download className="w-3.5 h-3.5 text-blue-600" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Notice */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-slate-800">Directly Verifiable Credentials</p>
              <p className="text-xs text-slate-500">
                All certificates represent completed coursework and evaluated technical training programs.
              </p>
            </div>
          </div>
          <span className="text-xs font-medium text-slate-400 shrink-0">
            Total: 6 Certified Programs
          </span>
        </div>
      </div>

      {/* Pending Upload Information Modal */}
      {selectedPendingCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          onClick={() => setSelectedPendingCert(null)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-6 text-slate-800 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPendingCert(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 id="cert-modal-title" className="text-base font-bold text-slate-900">
                  Certificate Document
                </h3>
                <p className="text-xs text-slate-500">
                  {selectedPendingCert.issuer}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-900">PDF Upload Pending</p>
                  <p className="text-amber-800 mt-0.5 leading-relaxed">
                    This certificate PDF has not yet been committed to your GitHub repository.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                <div className="flex items-center justify-between text-slate-600 mb-1 font-medium">
                  <span>Target Repository File Path:</span>
                  <button
                    onClick={() => handleCopyPath(selectedPendingCert.filePath)}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold focus:outline-hidden"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <code className="block bg-white p-2 rounded-lg border border-slate-200 text-slate-800 font-mono text-[11px] select-all break-all">
                  public/certificates/{selectedPendingCert.fileName}
                </code>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Upload <strong>{selectedPendingCert.fileName}</strong> to the <code>public/certificates/</code> folder on GitHub. Once pushed or deployed, this button will immediately view and download the PDF.
              </p>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedPendingCert(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
