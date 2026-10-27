import React, { useState } from 'react';
import { CheckCircle2, Edit2, Check, X, Briefcase } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Experience: React.FC = () => {
  const { data, updateInternship, isEditMode } = usePortfolio();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    organization: '',
    duration: '',
    description: '',
  });

  const handleStartEdit = (item: any) => {
    setEditingId(item.id);
    setEditForm({
      organization: item.organization,
      duration: item.duration,
      description: item.description,
    });
  };

  const handleSaveEdit = (id: string) => {
    updateInternship(id, editForm);
    setEditingId(null);
  };

  return (
    <section id="experience" className="py-16 sm:py-24 bg-white border-b border-[#174D38]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#B59A63] flex items-center gap-1.5 mb-2">
            <span>✦</span>
            <span>Practical Experience</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#174D38] font-display">
            Internships & Practical Experience
          </h2>
          <p className="text-sm sm:text-base text-[#202923]/70 mt-2.5 sm:mt-3 leading-relaxed">
            Real-world learning across culinary discipline, junior teaching & facilitation, plant nursery routines, and residential gardening care.
          </p>
        </div>

        {/* 4 Editorial Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {data.internships.map((item) => {
            const isEditing = editingId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#F8F7F2] rounded-2xl border border-[#174D38]/15 p-5 sm:p-8 flex flex-col justify-between hover:border-[#174D38]/35 transition-all shadow-xs relative group"
              >
                {/* Edit Trigger */}
                {(isEditMode || item.isDurationEditable) && !isEditing && (
                  <button
                    onClick={() => handleStartEdit(item)}
                    className="sm:absolute sm:top-6 sm:right-6 mb-3 sm:mb-0 p-2 rounded-lg bg-white hover:bg-[#174D38] hover:text-[#F8F7F2] text-[#174D38] text-xs font-semibold border border-[#174D38]/15 transition-colors flex items-center gap-1.5 shadow-2xs min-h-[40px]"
                    title="Edit organization or duration details"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Edit Details</span>
                  </button>
                )}

                <div>
                  {/* Clean unboxed metadata line */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#202923]/60 mb-1.5 font-medium">
                    <span className="font-bold text-[#174D38]">
                      {item.duration}
                    </span>
                    <span aria-hidden="true" className="text-[#B59A63]">·</span>
                    <span className="truncate max-w-[220px]">
                      {item.organization}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#202923] tracking-tight mb-3 font-display">
                    {item.title}
                  </h3>

                  {isEditing ? (
                    /* Edit form with text-base to prevent mobile iOS zoom */
                    <div className="space-y-3 my-3 p-3.5 bg-white rounded-xl border border-[#174D38]/20">
                      <div>
                        <label className="block text-xs font-semibold text-[#202923] mb-0.5">
                          Organization Name
                        </label>
                        <input
                          type="text"
                          value={editForm.organization}
                          onChange={(e) => setEditForm({ ...editForm, organization: e.target.value })}
                          className="w-full text-base sm:text-xs px-3 py-2 rounded-lg border border-[#174D38]/30 focus:border-[#174D38] outline-hidden bg-[#F8F7F2]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#202923] mb-0.5">
                          Duration
                        </label>
                        <input
                          type="text"
                          value={editForm.duration}
                          onChange={(e) => setEditForm({ ...editForm, duration: e.target.value })}
                          className="w-full text-base sm:text-xs px-3 py-2 rounded-lg border border-[#174D38]/30 focus:border-[#174D38] outline-hidden bg-[#F8F7F2]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#202923] mb-0.5">
                          Core Description
                        </label>
                        <textarea
                          rows={2}
                          value={editForm.description}
                          onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                          className="w-full text-base sm:text-xs px-3 py-2 rounded-lg border border-[#174D38]/30 focus:border-[#174D38] outline-hidden bg-[#F8F7F2]"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <button
                          onClick={() => handleSaveEdit(item.id)}
                          className="px-3.5 py-1.5 rounded-lg bg-[#174D38] text-white text-xs font-semibold hover:bg-[#0D3022] flex items-center gap-1 min-h-[40px]"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Save</span>
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-3.5 py-1.5 rounded-lg bg-gray-200 text-[#202923] text-xs font-medium hover:bg-gray-300 flex items-center gap-1 min-h-[40px]"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>Cancel</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Primary Description Quote */
                    <p className="text-xs sm:text-sm font-medium text-[#174D38] bg-white p-3 sm:p-3.5 rounded-xl border border-[#174D38]/10 mb-4 font-serif italic leading-relaxed">
                      “{item.description}”
                    </p>
                  )}

                  {/* Documented Responsibilities / Learning Points */}
                  <div className="space-y-2 mt-4">
                    <span className="block text-[10px] sm:text-[11px] font-bold text-[#202923]/60 uppercase tracking-wider">
                      Hands-on Exposure
                    </span>
                    <ul className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#202923]/80 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#174D38] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer notes */}
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#174D38]/10 flex items-center justify-between text-[11px] text-[#202923]/55">
                  <span className="font-medium">Documented Practical Immersion</span>
                  {item.isDurationEditable && (
                    <span className="text-[#B59A63] font-semibold">Editable</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
