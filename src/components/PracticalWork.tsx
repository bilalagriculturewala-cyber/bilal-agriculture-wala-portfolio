import React, { useState } from 'react';
import { ExternalLink, Upload, Eye, CheckCircle2, Sparkles, Filter, X, Edit3, ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { PracticalProject } from '../data/portfolioData';
import { VisualAsset } from './VisualAsset';

export const PracticalWork: React.FC = () => {
  const { data, updateProject } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<PracticalProject | null>(null);
  const [isEditingInModal, setIsEditingInModal] = useState(false);
  const [editFormData, setEditFormData] = useState<Partial<PracticalProject>>({});

  const categories = [
    { id: 'all', label: 'All Activities' },
    { id: 'gardening', label: 'Home Gardening' },
    { id: 'nursery', label: 'Nursery Operations' },
    { id: 'vegetables', label: 'Vegetable Growing' },
    { id: 'campus', label: 'Campus & Education' },
    { id: 'ai-content', label: 'AI Content Creation' },
    { id: 'ai-agri', label: 'AI for Agriculture' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? data.projects
    : data.projects.filter(p => p.category === selectedCategory);

  const handleOpenModal = (project: PracticalProject) => {
    setActiveModalProject(project);
    setIsEditingInModal(false);
    setEditFormData({
      title: project.title,
      description: project.description,
      categoryLabel: project.categoryLabel,
    });
  };

  const handleSaveModalEdit = () => {
    if (activeModalProject) {
      updateProject(activeModalProject.id, editFormData);
      setActiveModalProject(prev => prev ? { ...prev, ...editFormData } : null);
      setIsEditingInModal(false);
    }
  };

  const handleUploadProjectImage = (id: string, dataUrl: string) => {
    updateProject(id, { customImage: dataUrl });
    if (activeModalProject && activeModalProject.id === id) {
      setActiveModalProject(prev => prev ? { ...prev, customImage: dataUrl } : null);
    }
  };

  return (
    <section id="practical-work" className="py-16 sm:py-24 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-3xl">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#B59A63] flex items-center gap-1.5 mb-2">
              <span>✦</span>
              <span>Practical Portfolio</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#174D38] font-display">
              Learning Through Practical Work
            </h2>
            <p className="text-sm sm:text-base text-[#202923]/70 mt-2.5 sm:mt-3 leading-relaxed">
              Hands-on plant care, seedling nursery routines, crop growth cycles, educational campus greening, and applied AI exploration.
            </p>
          </div>

          {/* Upload notice / hint */}
          <div className="text-xs text-[#202923]/70 bg-white/80 border border-[#174D38]/15 px-3.5 py-2.5 rounded-xl self-start md:self-auto font-medium shadow-2xs">
            <span>Tap any project to inspect details or upload photos.</span>
          </div>
        </div>

        {/* Category Filter Tabs (Touch scrollable with padding bleed on mobile) */}
        <div className="relative mb-8 sm:mb-10">
          <div className="flex items-center gap-2 p-1.5 bg-white rounded-xl border border-[#174D38]/15 overflow-x-auto scrollbar-none shadow-2xs -mx-4 px-4 sm:mx-0 sm:px-1.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 tracking-wide min-h-[40px] flex items-center justify-center ${
                    isActive
                      ? 'bg-[#174D38] text-[#F8F7F2] shadow-xs'
                      : 'text-[#202923]/70 hover:text-[#174D38] active:bg-[#E4EAE0]/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Image-Led Bento / Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="bg-white rounded-2xl border border-[#174D38]/12 overflow-hidden shadow-xs hover:border-[#174D38]/35 hover:shadow-md transition-all cursor-pointer flex flex-col group active:scale-[0.99]"
            >
              {/* Media Visual Area */}
              <div className="relative">
                <VisualAsset
                  type={project.imageFallbackType}
                  customImage={project.customImage}
                  title={project.title}
                  aspectRatio="aspect-[16/10]"
                  allowUpload={true}
                  onUploadImage={(dataUrl) => handleUploadProjectImage(project.id, dataUrl)}
                />

                {project.isFutureConcept && (
                  <div className="absolute top-3 right-3 bg-[#0D3022]/90 text-[#B59A63] border border-[#B59A63]/30 text-[10px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                    Future Development Concept
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category kicker */}
                  <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#B59A63] mb-1 sm:mb-1.5">
                    {project.categoryLabel}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-[#202923] tracking-tight group-hover:text-[#174D38] transition-colors mb-2 font-display leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#202923]/70 line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Key learnings preview */}
                <div className="pt-3.5 sm:pt-4 border-t border-[#174D38]/10 flex items-center justify-between text-xs text-[#174D38] font-semibold">
                  <span className="flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B59A63]" />
                    <span>{project.learnings.length} Core Learnings</span>
                  </span>
                  <span className="text-xs text-[#202923]/60 group-hover:text-[#174D38] transition-colors flex items-center gap-1 font-medium">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Lightbox & Edit Modal (Mobile optimized) */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
            <div
              className="bg-white rounded-t-2xl sm:rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-[#174D38]/20 shadow-2xl relative pb-6 sm:pb-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button with 44px touch target */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 min-w-[42px] min-h-[42px] p-2.5 rounded-full bg-white/90 hover:bg-white text-[#202923] border border-[#174D38]/20 shadow-xs flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Visual Area */}
              <div className="relative">
                <VisualAsset
                  type={activeModalProject.imageFallbackType}
                  customImage={activeModalProject.customImage}
                  title={activeModalProject.title}
                  aspectRatio="aspect-[16/9]"
                  allowUpload={true}
                  onUploadImage={(dataUrl) => handleUploadProjectImage(activeModalProject.id, dataUrl)}
                />
              </div>

              {/* Modal Content */}
              <div className="p-5 sm:p-8">
                {isEditingInModal ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#202923] mb-1">
                        Category Label
                      </label>
                      <input
                        type="text"
                        value={editFormData.categoryLabel || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, categoryLabel: e.target.value })}
                        className="w-full text-base sm:text-xs px-3 py-2 border rounded-md border-[#174D38]/30 bg-[#F8F7F2]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#202923] mb-1">
                        Project / Activity Title
                      </label>
                      <input
                        type="text"
                        value={editFormData.title || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                        className="w-full text-base sm:text-sm font-bold px-3 py-2 border rounded-md border-[#174D38]/30 bg-[#F8F7F2]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#202923] mb-1">
                        Description
                      </label>
                      <textarea
                        rows={3}
                        value={editFormData.description || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                        className="w-full text-base sm:text-xs px-3 py-2 border rounded-md border-[#174D38]/30 bg-[#F8F7F2]"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <button
                        onClick={handleSaveModalEdit}
                        className="px-4 py-2.5 bg-[#174D38] text-white rounded-lg text-xs font-semibold hover:bg-[#0D3022] min-h-[42px]"
                      >
                        Save Details
                      </button>
                      <button
                        onClick={() => setIsEditingInModal(false)}
                        className="px-4 py-2.5 bg-gray-200 text-[#202923] rounded-lg text-xs font-medium hover:bg-gray-300 min-h-[42px]"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#B59A63]">
                        {activeModalProject.categoryLabel}
                      </span>
                      <button
                        onClick={() => setIsEditingInModal(true)}
                        className="text-xs text-[#174D38] hover:underline flex items-center gap-1 font-semibold min-h-[36px] py-1 px-2"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit Text</span>
                      </button>
                    </div>

                    <h3 className="text-xl sm:text-3xl font-bold text-[#202923] tracking-tight mb-3 font-display">
                      {activeModalProject.title}
                    </h3>

                    {activeModalProject.isFutureConcept && (
                      <div className="mb-4 p-3.5 rounded-xl bg-[#E4EAE0]/50 border border-[#B59A63]/30 text-xs text-[#202923]">
                        <strong className="text-[#174D38]">Research & Concept Area:</strong> Presented as an active exploration and future project development goal for Pakistani agriculture.
                      </div>
                    )}

                    <p className="text-xs sm:text-base text-[#202923]/80 leading-relaxed mb-6 font-normal">
                      {activeModalProject.description}
                    </p>

                    {/* Learnings list */}
                    <div className="border-t border-[#174D38]/10 pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#174D38] mb-3">
                        Key Practical Learnings & Skills Demonstrated
                      </h4>
                      <div className="space-y-2.5">
                        {activeModalProject.learnings.map((learning, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#202923]/80">
                            <CheckCircle2 className="w-4 h-4 text-[#174D38] shrink-0 mt-0.5" />
                            <span>{learning}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Photo upload trigger inside modal */}
                    <div className="mt-6 sm:mt-8 pt-4 border-t border-[#174D38]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <span className="text-xs text-[#202923]/60">
                        {activeModalProject.customImage ? 'Custom photograph active.' : 'Using domain botanical placeholder.'}
                      </span>
                      <label className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#174D38] text-white hover:bg-[#0D3022] text-xs font-semibold cursor-pointer shadow-xs transition-colors min-h-[44px]">
                        <Upload className="w-3.5 h-3.5 text-[#B59A63]" />
                        <span>{activeModalProject.customImage ? 'Replace Photo' : 'Upload Original Photo'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = () => {
                                if (typeof reader.result === 'string') {
                                  handleUploadProjectImage(activeModalProject.id, reader.result);
                                }
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
