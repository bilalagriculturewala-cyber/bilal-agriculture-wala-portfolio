import React, { useRef } from 'react';
import { X, Upload, RotateCcw, Check, User, Link, Phone, GraduationCap, Briefcase } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const CustomizerModal: React.FC = () => {
  const { data, isEditMode, toggleEditMode, updateBrand, updateSocial, updatePortrait, resetToDefault } = usePortfolio();
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isEditMode) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white border-l border-[#174D38]/20 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
      {/* Drawer Header */}
      <div className="p-5 border-b border-[#174D38]/10 flex items-center justify-between bg-[#F8F7F2]">
        <div>
          <h3 className="text-base font-bold text-[#202923] flex items-center gap-2">
            <span>Portfolio Personalizer</span>
          </h3>
          <p className="text-xs text-[#202923]/60 mt-0.5">
            Update personal info, portrait, links, or WhatsApp.
          </p>
        </div>
        <button
          onClick={toggleEditMode}
          className="p-1.5 rounded-lg text-[#202923]/60 hover:text-[#202923] hover:bg-gray-200"
          title="Close Customizer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Drawer Body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 text-xs">
        {/* Portrait Upload Section */}
        <div className="space-y-3 pb-5 border-b border-[#174D38]/10">
          <label className="block font-bold text-[#202923] uppercase tracking-wider text-[11px]">
            Original Portrait Photograph
          </label>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-[#F8F7F2] border border-[#174D38]/20 flex items-center justify-center overflow-hidden shrink-0">
              {data.brand.portraitImage ? (
                <img
                  src={data.brand.portraitImage}
                  alt="Portrait preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-serif italic font-bold text-lg text-[#174D38]">BM</span>
              )}
            </div>

            <div className="space-y-1.5">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 rounded bg-[#174D38] text-white hover:bg-[#0F3325] font-medium flex items-center gap-1.5 shadow-2xs"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{data.brand.portraitImage ? 'Replace Photo' : 'Upload My Photo'}</span>
              </button>
              {data.brand.portraitImage && (
                <button
                  type="button"
                  onClick={() => updatePortrait('')}
                  className="block text-red-600 hover:underline text-[11px]"
                >
                  Remove Photo
                </button>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={(e) => {
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
              }}
            />
          </div>
        </div>

        {/* WhatsApp Setup */}
        <div className="space-y-2 pb-5 border-b border-[#174D38]/10">
          <label className="block font-bold text-[#202923] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp Contact Number</span>
          </label>
          <p className="text-[11px] text-[#202923]/60">
            Per your instructions: WhatsApp button is hidden until you enter your preferred number here.
          </p>
          <input
            type="tel"
            value={data.social.whatsApp}
            onChange={(e) => updateSocial({ whatsApp: e.target.value })}
            placeholder="e.g. +923001234567"
            className="w-full p-2 border border-[#174D38]/20 rounded bg-[#F8F7F2] text-xs focus:border-[#174D38] outline-hidden"
          />
        </div>

        {/* Social Links */}
        <div className="space-y-3 pb-5 border-b border-[#174D38]/10">
          <label className="block font-bold text-[#202923] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <Link className="w-3.5 h-3.5 text-[#174D38]" />
            <span>Social Profile URLs</span>
          </label>

          <div>
            <label className="block text-[11px] font-medium text-[#202923]/80 mb-1">LinkedIn Profile</label>
            <input
              type="url"
              value={data.social.linkedIn}
              onChange={(e) => updateSocial({ linkedIn: e.target.value })}
              className="w-full p-2 border border-[#174D38]/20 rounded bg-[#F8F7F2] text-xs"
              placeholder="https://linkedin.com/in/..."
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-[#202923]/80 mb-1">Facebook Profile</label>
            <input
              type="url"
              value={data.social.facebook}
              onChange={(e) => updateSocial({ facebook: e.target.value })}
              className="w-full p-2 border border-[#174D38]/20 rounded bg-[#F8F7F2] text-xs"
              placeholder="https://facebook.com/..."
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-[#202923]/80 mb-1">Contact Email</label>
            <input
              type="email"
              value={data.social.email}
              onChange={(e) => updateSocial({ email: e.target.value })}
              className="w-full p-2 border border-[#174D38]/20 rounded bg-[#F8F7F2] text-xs"
            />
          </div>
        </div>

        {/* Reset to Default */}
        <div className="pt-2">
          <button
            onClick={resetToDefault}
            className="w-full py-2.5 px-3 rounded-lg border border-red-300 text-red-700 hover:bg-red-50 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Changes to Default</span>
          </button>
        </div>
      </div>

      {/* Drawer Footer */}
      <div className="p-4 border-t border-[#174D38]/10 bg-[#F8F7F2] flex items-center justify-between">
        <span className="text-[11px] text-[#202923]/60">Saved automatically in browser.</span>
        <button
          onClick={toggleEditMode}
          className="px-4 py-2 bg-[#174D38] hover:bg-[#0F3325] text-white text-xs font-semibold rounded-lg shadow-xs"
        >
          Done Editing
        </button>
      </div>
    </div>
  );
};
