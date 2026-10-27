import React from 'react';
import { Sprout, Flower2, Carrot, GraduationCap, Cpu, Sparkles, Upload } from 'lucide-react';

interface VisualAssetProps {
  type: 'garden' | 'nursery' | 'vegetable' | 'education' | 'ai' | 'smart-farming';
  customImage?: string;
  title: string;
  className?: string;
  aspectRatio?: string;
  onUploadImage?: (dataUrl: string) => void;
  allowUpload?: boolean;
}

export const VisualAsset: React.FC<VisualAssetProps> = ({
  type,
  customImage,
  title,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  onUploadImage,
  allowUpload = false,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUploadImage) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onUploadImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (customImage) {
    return (
      <div className={`relative overflow-hidden group ${aspectRatio} ${className} bg-[#174D38]/5 rounded-xl`}>
        <img
          src={customImage}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {allowUpload && onUploadImage && (
          <label className="absolute bottom-3 right-3 bg-[#174D38]/90 hover:bg-[#174D38] text-[#F8F7F2] text-xs font-semibold px-2.5 py-1.5 rounded-lg backdrop-blur-sm cursor-pointer shadow-md transition-all flex items-center gap-1.5 opacity-0 group-hover:opacity-100">
            <Upload className="w-3.5 h-3.5 text-[#B59A63]" />
            <span>Change Photo</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    );
  }

  // Domain-crafted architectural visual card when no image is uploaded
  const visualThemes = {
    garden: {
      bg: 'from-[#174D38]/12 via-[#E4EAE0]/40 to-[#F8F7F2]',
      border: 'border-[#174D38]/15',
      icon: <Sprout className="w-7 h-7 text-[#174D38]" />,
      badge: 'Home Gardening & Plant Care',
      tagline: 'Practical plant maintenance, organic soil, and container growth',
    },
    nursery: {
      bg: 'from-[#174D38]/15 via-[#E4EAE0]/50 to-[#F8F7F2]',
      border: 'border-[#174D38]/20',
      icon: <Flower2 className="w-7 h-7 text-[#174D38]" />,
      badge: 'Nursery Operations',
      tagline: 'Seedling germination trays, sapling care, and greenhouse routines',
    },
    vegetable: {
      bg: 'from-[#174D38]/12 via-[#B59A63]/12 to-[#F8F7F2]',
      border: 'border-[#B59A63]/25',
      icon: <Carrot className="w-7 h-7 text-[#B59A63]" />,
      badge: 'Vegetable Cultivation',
      tagline: 'Growth cycles, nutrient balance, and organic vegetable production',
    },
    education: {
      bg: 'from-[#174D38]/14 via-[#202923]/6 to-[#F8F7F2]',
      border: 'border-[#174D38]/15',
      icon: <GraduationCap className="w-7 h-7 text-[#174D38]" />,
      badge: 'Campus & Educational Learning',
      tagline: 'Active learning spaces, school improvements, and peer facilitation',
    },
    ai: {
      bg: 'from-[#0D3022]/18 via-[#174D38]/10 to-[#F8F7F2]',
      border: 'border-[#B59A63]/30',
      icon: <Cpu className="w-7 h-7 text-[#174D38]" />,
      badge: 'AI & Educational Content',
      tagline: 'Generative AI literacy, Urdu-accessible guides, and digital teaching aids',
    },
    'smart-farming': {
      bg: 'from-[#0D3022]/20 via-[#B59A63]/15 to-[#F8F7F2]',
      border: 'border-[#B59A63]/40',
      icon: <Sparkles className="w-7 h-7 text-[#B59A63]" />,
      badge: 'AI for Agriculture Concept',
      tagline: 'Future research: mobile crop diagnosis and smart farm advisory',
    },
  };

  const theme = visualThemes[type] || visualThemes.garden;

  return (
    <div
      className={`relative overflow-hidden ${aspectRatio} ${className} rounded-xl border ${theme.border} bg-gradient-to-br ${theme.bg} p-6 flex flex-col justify-between group transition-all duration-300 hover:border-[#174D38]/40 hover:shadow-xs`}
    >
      {/* Background Graphic Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`pattern-${type}`} width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 0 16 L 32 16 M 16 0 L 16 32" fill="none" stroke="#174D38" strokeWidth="0.5" strokeOpacity="0.4" />
              <circle cx="16" cy="16" r="1.5" fill="#B59A63" fillOpacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pattern-${type})`} />
        </svg>
      </div>

      {/* Top Header */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="w-11 h-11 rounded-lg bg-white/90 border border-[#174D38]/10 flex items-center justify-center shadow-2xs">
          {theme.icon}
        </div>
        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#174D38] bg-white/80 px-2.5 py-1 rounded border border-[#174D38]/10 backdrop-blur-xs">
          {theme.badge}
        </span>
      </div>

      {/* Center Details */}
      <div className="relative z-10 my-auto py-2">
        <h4 className="text-base font-bold text-[#202923] tracking-tight font-display">
          {title}
        </h4>
        <p className="text-xs text-[#202923]/70 mt-1 line-clamp-2 leading-relaxed">
          {theme.tagline}
        </p>
      </div>

      {/* Bottom Footer & Upload Affordance */}
      <div className="relative z-10 flex items-center justify-between text-xs text-[#174D38] pt-2 border-t border-[#174D38]/10">
        <span className="font-medium text-[11px] tracking-wide text-[#202923]/60">
          Documented Practical Learning
        </span>
        {allowUpload && onUploadImage && (
          <label className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#174D38] text-[#F8F7F2] hover:bg-[#0D3022] text-xs font-semibold cursor-pointer transition-colors shadow-2xs">
            <Upload className="w-3 h-3 text-[#B59A63]" />
            <span>Upload Photo</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    </div>
  );
};
