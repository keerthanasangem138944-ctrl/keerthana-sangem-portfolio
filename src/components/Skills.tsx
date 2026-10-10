import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Cpu, 
  Layers, 
  Shield, 
  KeyRound, 
  GitBranch, 
  Command, 
  Github,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { SKILLS_DATA, SkillItem } from '../data/portfolio';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Programming' | 'Cybersecurity' | 'Developer Tools'>('All');

  const categories: Array<'All' | 'Programming' | 'Cybersecurity' | 'Developer Tools'> = [
    'All',
    'Programming',
    'Cybersecurity',
    'Developer Tools',
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((skill) => skill.category === selectedCategory);

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-blue-600' };
    switch (iconName) {
      case 'Code':
        return <Code {...props} />;
      case 'Terminal':
        return <Terminal {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Shield':
        return <Shield {...props} />;
      case 'KeyRound':
        return <KeyRound {...props} />;
      case 'GitBranch':
        return <GitBranch {...props} />;
      case 'CommandLine':
      case 'Command':
        return <Command {...props} />;
      case 'Github':
        return <Github {...props} />;
      default:
        return <Code {...props} />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 bg-slate-50/50 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Skills & Proficiencies
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Practical competencies in software development, defensive cybersecurity fundamentals, and version control tooling.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs self-start md:self-auto" role="tablist" aria-label="Filter skills by category">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-2xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              tabIndex={0}
              className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between focus:outline-hidden focus:ring-2 focus:ring-blue-600"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-100/70 transition-transform">
                    {renderIcon(skill.iconName)}
                  </div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-200/60">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Verified in portfolio curriculum</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on genuine proficiency representation */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 flex items-center gap-3">
          <Shield className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            Every listed skill corresponds to verified coursework at Marwadi University, project implementations, or documented hands-on practice. No arbitrary percentage ratings or exaggerated claims.
          </span>
        </div>
      </div>
    </section>
  );
};
