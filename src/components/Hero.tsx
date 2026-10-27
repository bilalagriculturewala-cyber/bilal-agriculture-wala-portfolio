import React, { useRef } from 'react';
import { ArrowRight, Mail, Camera, Sparkles, MapPin, Sprout, ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Hero: React.FC = () => {
  const { data, updatePortrait } = usePortfolio();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePortraitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          updatePortrait(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const portraitSrc = data.brand.portraitImage || '/assets/aistudio/ChatGPT_Image_Sep_18__2026__11_12_26_PM__1__d730571d.png';

  return (
    <section id="hero" className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 md:pt-14 md:pb-24 overflow-hidden bg-grain">
      {/* Subtle background glow */}
      <div className="absolute top-12 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#E4EAE0]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-6 left-6 w-64 sm:w-80 h-64 sm:h-80 bg-[#B59A63]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Top Kicker & Coordinates (Clean responsive wrap) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-[#174D38]/10 text-[10px] sm:text-xs text-[#202923]/65 tracking-wider font-medium">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#174D38] shrink-0" />
            <span className="font-semibold text-[#174D38] tracking-widest uppercase">
              {data.brand.heroLabel || 'AGRICULTURE × ARTIFICIAL INTELLIGENCE × EDUCATION'}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[#202923]/60">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#B59A63]" />
              <span>Punjab, Pakistan</span>
            </span>
            <span className="text-[#174D38]/20">|</span>
            <span>Practical Learner</span>
          </div>
        </div>

        {/* Asymmetric Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Typographic Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Main Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-bold text-[#174D38] tracking-tight leading-[1.12] mb-3 sm:mb-4 font-display [text-wrap:balance]">
              Growing Beyond <br />
              <span className="font-serif italic font-normal text-[#202923] relative inline-block">
                Boundaries.
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2 text-[#B59A63]/60"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.5C45 2 155 2 199 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-base sm:text-xl lg:text-2xl font-serif italic text-[#B59A63] font-medium mb-4 sm:mb-6 tracking-wide">
              {data.brand.heroSubheadline || 'Connecting Agriculture, AI & a Better Future.'}
            </h2>

            {/* Introduction Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-[#202923]/80 leading-relaxed max-w-2xl mb-6 sm:mb-8 font-sans font-normal">
              {data.brand.heroIntro}
            </p>

            {/* Primary & Secondary CTAs (Full width on small mobile, auto on desktop) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#174D38] hover:bg-[#0D3022] active:bg-[#0A241A] text-[#F8F7F2] font-semibold text-sm transition-all shadow-sm hover:shadow hover:-translate-y-0.5 min-h-[48px] text-center"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4 text-[#B59A63]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl border border-[#174D38]/30 hover:border-[#174D38] bg-white/80 hover:bg-white text-[#202923] hover:text-[#174D38] font-semibold text-sm transition-all shadow-2xs hover:-translate-y-0.5 min-h-[48px] text-center"
              >
                <Mail className="w-4 h-4 text-[#174D38]" />
                <span>Let’s Connect</span>
              </a>
            </div>

            {/* Credibility Line (Unboxed Text with Subtle Dot Separators) */}
            <div className="pt-4 sm:pt-6 border-t border-[#174D38]/10 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#202923]/70 font-medium">
              <span className="text-[#174D38] font-semibold">
                {data.brand.heroCredibility || 'Practical Learning • Agriculture • AI Education'}
              </span>
              <span className="text-[#B59A63] hidden xs:inline">✦</span>
              <span className="text-[#202923]/60">Rehan College Student</span>
              <span className="text-[#B59A63] hidden xs:inline">✦</span>
              <span className="text-[#202923]/60">AI Teacher Training Level 2</span>
            </div>
          </div>

          {/* Right Column: Carefully Composed Editorial Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center mt-2 lg:mt-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto">
              {/* Outer Editorial Accent Frames */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-full h-full rounded-2xl border border-[#B59A63]/30 pointer-events-none -z-10" />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-full h-full rounded-2xl bg-[#E4EAE0]/50 -z-20" />

              {/* Main Portrait Frame */}
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#E4EAE0] border border-[#174D38]/15 shadow-xl group">
                <img
                  src={portraitSrc}
                  alt="Bilal Mustafa - Bilal Agriculture Wala"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                />

                {/* Bottom gradient scrim for legible editorial nameplate */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#202923]/90 via-[#202923]/25 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white" />

                {/* Nameplate & Brand Attribution */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-10 flex items-end justify-between">
                  <div>
                    <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#B59A63]">
                      Personal Portfolio
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight text-white leading-tight">
                      {data.brand.fullName}
                    </h3>
                    <p className="text-xs text-white/80 font-medium mt-0.5">
                      {data.brand.brandName}
                    </p>
                  </div>

                  {/* Change photo button trigger with 44px touch target */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Change or upload portrait photo"
                    className="min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#174D38] backdrop-blur-md border border-white/30 transition-all shadow-sm flex items-center justify-center"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  className="hidden"
                  onChange={handlePortraitUpload}
                />
              </div>

              {/* Editorial Caption Under Portrait */}
              <div className="mt-2.5 sm:mt-3.5 flex items-center justify-between text-xs text-[#202923]/60 px-1 font-medium">
                <span className="italic font-serif text-xs sm:text-[13px] text-[#174D38]">
                  Bilal Mustafa · Practical Learner
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-wider uppercase text-[#B59A63]">
                  Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Four-Pillar Foundation Bar Below Hero */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#174D38]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="border-l-2 border-[#174D38] pl-3.5 sm:pl-4 py-1">
            <span className="block text-[10px] sm:text-[11px] font-semibold text-[#174D38] uppercase tracking-wider mb-0.5 sm:mb-1">
              Field Studies
            </span>
            <span className="text-sm sm:text-base font-bold text-[#202923] font-display">
              Agriculture & Soils
            </span>
            <p className="text-xs text-[#202923]/65 mt-0.5 sm:mt-1 leading-relaxed">
              Pak German Institute (~1.75 yrs previous study)
            </p>
          </div>

          <div className="border-l-2 border-[#B59A63] pl-3.5 sm:pl-4 py-1">
            <span className="block text-[10px] sm:text-[11px] font-semibold text-[#B59A63] uppercase tracking-wider mb-0.5 sm:mb-1">
              AI Education
            </span>
            <span className="text-sm sm:text-base font-bold text-[#202923] font-display">
              Four-Year Diploma
            </span>
            <p className="text-xs text-[#202923]/65 mt-0.5 sm:mt-1 leading-relaxed">
              Ongoing student at Rehan College
            </p>
          </div>

          <div className="border-l-2 border-[#174D38] pl-3.5 sm:pl-4 py-1">
            <span className="block text-[10px] sm:text-[11px] font-semibold text-[#174D38] uppercase tracking-wider mb-0.5 sm:mb-1">
              Teaching Credentials
            </span>
            <span className="text-sm sm:text-base font-bold text-[#202923] font-display">
              AI Teacher Training
            </span>
            <p className="text-xs text-[#202923]/65 mt-0.5 sm:mt-1 leading-relaxed">
              Level 2 certified facilitator
            </p>
          </div>

          <div className="border-l-2 border-[#B59A63] pl-3.5 sm:pl-4 py-1">
            <span className="block text-[10px] sm:text-[11px] font-semibold text-[#B59A63] uppercase tracking-wider mb-0.5 sm:mb-1">
              Practical Immersions
            </span>
            <span className="text-sm sm:text-base font-bold text-[#202923] font-display">
              4 Distinct Internships
            </span>
            <p className="text-xs text-[#202923]/65 mt-0.5 sm:mt-1 leading-relaxed">
              Culinary, teaching, nursery, & gardening
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
