import React from 'react';
import { Target, Lightbulb, TrendingUp, Sparkles, Sprout, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Vision: React.FC = () => {
  const { data } = usePortfolio();

  return (
    <section id="vision" className="py-28 bg-[#0D3022] text-[#F8F7F2] relative overflow-hidden">
      {/* Subtle geometric and botanical background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="vision-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 0 32 L 64 32 M 32 0 L 32 64" fill="none" stroke="#B59A63" strokeWidth="0.5" />
              <circle cx="32" cy="32" r="2" fill="#FFFFFF" fillOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vision-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B59A63] uppercase mb-4">
            <span>✦</span>
            <span>Long-Term Mission & Future Perspective</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 font-display [text-wrap:balance]">
            Better Farming. <br />
            <span className="text-[#D5C299] font-serif font-normal italic">
              Modern Technology. Stronger Pakistan.
            </span>
          </h2>

          {/* Mission Statement Box */}
          <div className="p-7 sm:p-9 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md text-left sm:text-center shadow-xl">
            <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-serif italic max-w-2xl mx-auto">
              “{data.vision.mission}”
            </p>
            <span className="block mt-5 text-[11px] font-semibold tracking-widest text-[#B59A63] uppercase">
              Bilal Agriculture Wala · Future Aspiration
            </span>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.vision.pillars.map((pillar, index) => {
            const icons = [
              <Sprout className="w-6 h-6 text-[#B59A63]" key="sprout" />,
              <Smartphone className="w-6 h-6 text-[#B59A63]" key="phone" />,
              <TrendingUp className="w-6 h-6 text-[#B59A63]" key="trend" />,
            ];

            return (
              <div
                key={pillar.title}
                className="rounded-2xl p-8 bg-white/[0.04] border border-white/10 hover:border-[#B59A63]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-[#174D38] transition-colors">
                      {icons[index]}
                    </div>
                    <span className="font-serif italic text-2xl text-white/30 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Principle Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 font-display">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Practical Focus Points */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-white/75 leading-relaxed">
                      <span className="text-[#B59A63] font-bold">·</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Disclaimer Box */}
        <div className="mt-14 text-center text-xs text-white/55 max-w-2xl mx-auto leading-relaxed">
          <span>
            Note: This mission outlines long-term personal aspirations, research directions, and continuous experimentation; it is presented as a dedicated vision to learn, grow, and serve Pakistani farming communities.
          </span>
        </div>
      </div>
    </section>
  );
};
