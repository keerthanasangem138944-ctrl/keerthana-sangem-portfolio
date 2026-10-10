import React from 'react';
import { TIMELINE_DATA } from '../data/portfolio';
import { GraduationCap, Briefcase, KeyRound, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Education':
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'Technical Experience':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'Project Milestone':
        return <KeyRound className="w-5 h-5 text-blue-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="experience" className="py-20 md:py-24 bg-slate-50/50 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Verified Timeline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Experience & Education
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Documented academic background, verified technical project work at Decode Labs, and core engineering milestones.
          </p>
        </div>

        {/* Timeline / Cards Container */}
        <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-6 md:ml-8 pl-6 sm:pl-8 space-y-10">
          {TIMELINE_DATA.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {getIcon(item.type)}
                    <span>{item.type}</span>
                  </span>

                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                  {item.title}
                </h3>
                <h4 className="text-sm font-semibold text-blue-600 mb-3">
                  {item.organization}
                </h4>

                <div className="space-y-2 mb-4">
                  {item.description.map((desc, i) => (
                    <p key={i} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                  {item.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Data Policy Note */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 flex items-center gap-3 max-w-2xl">
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            Reflects authentic records from Keerthana's verified LinkedIn profile and university enrollment. Future accomplishments and certificates will be added as they are completed.
          </span>
        </div>
      </div>
    </section>
  );
};
