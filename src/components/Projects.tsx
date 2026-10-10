import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';
import { KeyRound, Shield, ExternalLink, ArrowRight, Github, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 md:py-24 bg-white border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Real software and cybersecurity tools engineered with Python and clean programming principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Project 1: Password Strength Checker */}
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Header / Illustration Card */}
                <div className="relative aspect-16/9 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 p-6 flex flex-col justify-between text-white overflow-hidden">
                  {/* Subtle code pattern backdrop */}
                  <div className="absolute inset-0 opacity-10 font-mono text-[11px] p-4 select-none pointer-events-none overflow-hidden leading-relaxed">
                    def evaluate_password(pwd):<br />
                    &nbsp;&nbsp;score = 0<br />
                    &nbsp;&nbsp;if len(pwd) &gt;= 8: score += 1<br />
                    &nbsp;&nbsp;if re.search(r'[A-Z]', pwd): score += 1<br />
                    &nbsp;&nbsp;return classify_strength(score)
                  </div>

                  <div className="relative flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium tracking-wide">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <KeyRound className="w-5 h-5 text-blue-200" />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="inline-flex items-center gap-1.5 text-xs text-blue-200 font-mono mb-1">
                      <span>Python 3 • Security Analysis</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleOpenModal(project)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm transition-all shadow-xs"
                >
                  <span>View Details & Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs sm:text-sm transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Project 2: Extensible Future Projects Card */}
          <div className="rounded-3xl bg-slate-50/70 border border-dashed border-slate-300 p-8 flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Pipeline & Expansion
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-3">
                Upcoming Projects
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Currently architecting new software and cybersecurity projects as part of B.Tech coursework and independent research, including cryptographic implementations, network traffic analyzers, and secure Java applications.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>Network Protocol & Packet Analysis tools</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>Java Secure Socket Layer (SSL/TLS) utilities</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>Vulnerability scanning automation in Python</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Maintained centrally in <code className="font-mono text-slate-700">portfolio.ts</code>
              </span>
              <a
                href={PROJECTS_DATA[0].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                <span>Follow on GitHub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
