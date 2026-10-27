import React from 'react';
import { BookOpen, Utensils, Sprout, BrainCircuit, ArrowUpRight, Compass } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const About: React.FC = () => {
  const { data } = usePortfolio();

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-y border-[#174D38]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Editorial Callout & Quote */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#B59A63] flex items-center gap-1.5 mb-2">
                <span>✦</span>
                <span>Personal Narrative</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#174D38] font-display">
                My Journey
              </h2>
            </div>

            {/* Premium Editorial Quote Block */}
            <div className="relative p-5 sm:p-8 rounded-2xl bg-[#F8F7F2] border border-[#174D38]/15 shadow-xs">
              <span className="font-serif text-5xl sm:text-6xl text-[#B59A63]/40 leading-none select-none block -mb-4 sm:-mb-6">
                “
              </span>
              <p className="text-sm sm:text-base lg:text-lg text-[#202923] leading-relaxed italic font-serif relative z-10">
                {data.brand.aboutIntro}
              </p>
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#174D38]/10 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-[#174D38] tracking-wide">
                    {data.brand.fullName}
                  </span>
                  <span className="block text-[11px] text-[#202923]/60 font-medium">
                    {data.brand.brandName}
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#B59A63] uppercase">
                  Pakistan
                </span>
              </div>
            </div>

            {/* Quick Core Philosophy Badge */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#E4EAE0]/40 border border-[#174D38]/10 text-xs text-[#202923]/80 space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#174D38]">
                <Compass className="w-4 h-4 text-[#B59A63]" />
                <span>The Learning Principle</span>
              </div>
              <p className="leading-relaxed text-[#202923]/70 text-[11px] sm:text-xs">
                Value practical, hands-on learning over purely theoretical claims. Gain real experience step-by-step, experiment in the field, and apply technology where it matters most.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Biography & Practical Foundation */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-[#202923]/85 leading-relaxed text-sm sm:text-base">
            <p className="text-base sm:text-lg font-serif italic text-[#174D38] leading-relaxed border-l-2 border-[#B59A63] pl-3.5 sm:pl-4">
              My journey began with a genuine curiosity for how things grow in the soil and how communities learn through shared knowledge.
            </p>

            <p>
              Rather than limiting myself to textbooks, I have actively sought out practical environments—from handling soil in plant nurseries to managing food preparation in commercial kitchens, and facilitating interactive learning in educational spaces.
            </p>

            <p>
              During my studies at the <strong>Pak German Institute</strong> (over approximately 1 year and 9 months), I gained foundational knowledge in crop cycles, agricultural processes, and field management. This experience gave me a firsthand appreciation for the dedication of Pakistani farmers and the real challenges they face with weather, soil nourishment, and market access.
            </p>

            <p>
              Currently, as an ongoing student in the four-year Artificial Intelligence diploma program at <strong>Rehan College</strong>, and having earned my <strong>AI Teacher Training – Level 2</strong> certification, I am working on the intersection of agriculture and digital technology. My goal is to make modern AI tools and practical knowledge accessible to everyday people and farmers across Pakistan.
            </p>

            {/* Four Practical Foundations Grid */}
            <div className="pt-2 sm:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="p-4 rounded-xl bg-[#F8F7F2] border border-[#174D38]/10 hover:border-[#174D38]/25 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-md bg-[#174D38]/10 text-[#174D38]">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#202923] font-display">Hands-On Cultivation</h3>
                </div>
                <p className="text-xs text-[#202923]/70 leading-relaxed">
                  Practical experience in plant nurseries, seed germination, and home gardening maintenance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F7F2] border border-[#174D38]/10 hover:border-[#174D38]/25 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-md bg-[#174D38]/10 text-[#174D38]">
                    <BrainCircuit className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#202923] font-display">AI & Digital Tools</h3>
                </div>
                <p className="text-xs text-[#202923]/70 leading-relaxed">
                  Active study of artificial intelligence at Rehan College and certified Level 2 AI Teacher Training.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F7F2] border border-[#174D38]/10 hover:border-[#174D38]/25 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-md bg-[#174D38]/10 text-[#174D38]">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#202923] font-display">Teaching & Mentorship</h3>
                </div>
                <p className="text-xs text-[#202923]/70 leading-relaxed">
                  Experience as a junior teacher and facilitator, simplifying technology concepts for others.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F7F2] border border-[#174D38]/10 hover:border-[#174D38]/25 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-md bg-[#174D38]/10 text-[#174D38]">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#202923] font-display">Kitchen Discipline</h3>
                </div>
                <p className="text-xs text-[#202923]/70 leading-relaxed">
                  Formal 3-month culinary internship building precision, hygiene standards, and focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
