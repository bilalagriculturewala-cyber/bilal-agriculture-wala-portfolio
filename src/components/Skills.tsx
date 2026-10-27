import React from 'react';
import { Cpu, GraduationCap, Sprout, Flower2, Utensils, LayoutGrid } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Skills: React.FC = () => {
  const { data } = usePortfolio();

  const iconMap: Record<string, React.ReactNode> = {
    'skill-ai-tools': <Cpu className="w-5 h-5 text-[#174D38]" />,
    'skill-ai-teaching': <GraduationCap className="w-5 h-5 text-[#174D38]" />,
    'skill-agri-learning': <Sprout className="w-5 h-5 text-[#174D38]" />,
    'skill-home-gardening': <Flower2 className="w-5 h-5 text-[#174D38]" />,
    'skill-nursery': <Sprout className="w-5 h-5 text-[#B59A63]" />,
    'skill-cooking': <Utensils className="w-5 h-5 text-[#174D38]" />,
    'skill-digital-content': <LayoutGrid className="w-5 h-5 text-[#174D38]" />,
  };

  return (
    <section id="skills" className="py-24 bg-white border-b border-[#174D38]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#B59A63] flex items-center gap-1.5 mb-2">
            <span>✦</span>
            <span>Competencies & Learning</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#174D38] font-display">
            Skills & Areas of Learning
          </h2>
          <p className="text-sm sm:text-base text-[#202923]/70 mt-3 leading-relaxed">
            Authentic mapping of practical agricultural exposure, AI teacher training certifications, culinary operations, and educational mentoring.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.skills.map((skill) => (
            <div
              key={skill.id}
              className="p-7 rounded-2xl bg-[#F8F7F2] border border-[#174D38]/15 hover:border-[#174D38]/35 transition-all flex flex-col justify-between shadow-2xs group"
            >
              <div>
                {/* Header Icon + Level kicker */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#174D38]/10 flex items-center justify-center shadow-2xs">
                    {iconMap[skill.id] || <Cpu className="w-5 h-5 text-[#174D38]" />}
                  </div>

                  {/* Clean unboxed status indicator */}
                  <span className="text-xs font-semibold text-[#B59A63] tracking-wide">
                    {skill.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#202923] tracking-tight mb-2.5 font-display">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#202923]/70 leading-relaxed mb-5">
                  {skill.description}
                </p>
              </div>

              {/* Items List (Unboxed, clean typographic lines with dot separators) */}
              <div className="pt-4 border-t border-[#174D38]/10">
                <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-xs text-[#202923]/80 font-medium">
                  {skill.items.map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5">
                      <span className="text-[#B59A63]">·</span>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
