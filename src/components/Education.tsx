import React, { useState } from 'react';
import { GraduationCap, Award, Edit3, Check, X, Calendar, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Education: React.FC = () => {
  const { data, updateEducation, isEditMode } = usePortfolio();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    institution: '',
    qualification: '',
    studyDuration: '',
    notes: '',
  });

  const handleStartEdit = (item: any) => {
    setEditingId(item.id);
    setEditForm({
      institution: item.institution,
      qualification: item.qualification,
      studyDuration: item.studyDuration,
      notes: item.notes || '',
    });
  };

  const handleSaveEdit = (id: string) => {
    updateEducation(id, editForm);
    setEditingId(null);
  };

  return (
    <section id="education" className="py-16 sm:py-24 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#B59A63] flex items-center gap-1.5 mb-2">
            <span>✦</span>
            <span>Academic Background</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#174D38] font-display">
            Education & Certifications
          </h2>
          <p className="text-sm sm:text-base text-[#202923]/70 mt-2.5 sm:mt-3 leading-relaxed">
            A transparent and accurate record of academic pursuits, current studies in artificial intelligence, and previous agricultural training in Pakistan.
          </p>
        </div>

        {/* Editorial Timeline Grid */}
        <div className="space-y-4 sm:space-y-6">
          {data.education.map((item) => {
            const isEditing = editingId === item.id;
            const isOngoing = item.status.toLowerCase().includes('progress') || item.status.toLowerCase().includes('ongoing');

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#174D38]/12 p-5 sm:p-8 shadow-xs hover:border-[#174D38]/30 transition-all relative group"
              >
                {/* Edit Button in edit mode or hover */}
                {(isEditMode || isEditing) && !isEditing && (
                  <button
                    onClick={() => handleStartEdit(item)}
                    className="sm:absolute sm:top-6 sm:right-6 mb-3 sm:mb-0 p-2 rounded-lg bg-[#F8F7F2] hover:bg-[#174D38] hover:text-[#F8F7F2] text-[#174D38] text-xs font-semibold border border-[#174D38]/15 flex items-center gap-1.5 transition-colors shadow-2xs min-h-[40px]"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit Details</span>
                  </button>
                )}

                {isEditing ? (
                  /* In-Place Editor with text-base to prevent mobile iOS zoom */
                  <div className="space-y-4 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#202923] mb-1">
                          Institution Name
                        </label>
                        <input
                          type="text"
                          value={editForm.institution}
                          onChange={(e) => setEditForm({ ...editForm, institution: e.target.value })}
                          className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#174D38]/30 focus:border-[#174D38] outline-hidden bg-[#F8F7F2]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#202923] mb-1">
                          Program / Qualification Title
                        </label>
                        <input
                          type="text"
                          value={editForm.qualification}
                          onChange={(e) => setEditForm({ ...editForm, qualification: e.target.value })}
                          className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#174D38]/30 focus:border-[#174D38] outline-hidden bg-[#F8F7F2]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#202923] mb-1">
                          Duration & Status
                        </label>
                        <input
                          type="text"
                          value={editForm.studyDuration}
                          onChange={(e) => setEditForm({ ...editForm, studyDuration: e.target.value })}
                          className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#174D38]/30 focus:border-[#174D38] outline-hidden bg-[#F8F7F2]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#202923] mb-1">
                          Description Notes
                        </label>
                        <input
                          type="text"
                          value={editForm.notes}
                          onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })}
                          className="w-full text-base sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#174D38]/30 focus:border-[#174D38] outline-hidden bg-[#F8F7F2]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <button
                        onClick={() => handleSaveEdit(item.id)}
                        className="px-4 py-2 rounded-lg bg-[#174D38] text-white text-xs font-semibold hover:bg-[#0D3022] flex items-center gap-1.5 min-h-[42px]"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Save Changes</span>
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="px-4 py-2 rounded-lg bg-gray-200 text-[#202923] text-xs font-medium hover:bg-gray-300 flex items-center gap-1.5 min-h-[42px]"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Display Timeline Card */
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 sm:gap-4">
                    <div className="flex-1">
                      {/* Unboxed Metadata with Typographic Separator */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#202923]/60 mb-1.5 font-medium">
                        <span className="font-bold text-[#174D38]">
                          {item.institution}
                        </span>
                        <span aria-hidden="true" className="text-[#B59A63]">·</span>
                        <span>{item.studyDuration}</span>
                        <span aria-hidden="true" className="text-[#B59A63]">·</span>
                        <span className={`font-semibold ${isOngoing ? 'text-[#174D38]' : 'text-[#B59A63]'}`}>
                          {item.status}
                        </span>
                      </div>

                      {/* Qualification Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#202923] tracking-tight font-display">
                        {item.qualification}
                      </h3>

                      {/* Narrative / Notes */}
                      <p className="text-xs sm:text-sm text-[#202923]/75 mt-2 leading-relaxed max-w-3xl">
                        {item.notes}
                      </p>

                      {/* Credential / Training Badge */}
                      {item.badge && (
                        <div className="mt-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#E4EAE0] border border-[#174D38]/15 text-[#174D38] text-xs font-semibold">
                          <Award className="w-4 h-4 text-[#B59A63]" />
                          <span>{item.badge}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Academic Integrity & Transparency Notice */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-xl bg-white border border-[#174D38]/15 text-xs text-[#202923]/75 flex items-start gap-3 shadow-2xs">
          <GraduationCap className="w-5 h-5 text-[#174D38] shrink-0 mt-0.5" />
          <div className="leading-relaxed text-[11px] sm:text-xs">
            <strong className="text-[#174D38] font-semibold">Credibility & Transparency Standard:</strong> Ongoing studies in the four-year Artificial Intelligence diploma at Rehan College are actively in progress. Prior studies at Pak German Institute represent approximately 1 year and 9 months of foundational agricultural coursework rather than a concluded diploma. All qualifications are accurately stated.
          </div>
        </div>
      </div>
    </section>
  );
};
