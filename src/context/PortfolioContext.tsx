import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData, initialPortfolioData, EducationItem, InternshipItem, PracticalProject, SocialLinks } from '../data/portfolioData';

interface PortfolioContextType {
  data: PortfolioData;
  isEditMode: boolean;
  toggleEditMode: () => void;
  updateBrand: (updated: Partial<PortfolioData['brand']>) => void;
  updateEducation: (id: string, updated: Partial<EducationItem>) => void;
  updateInternship: (id: string, updated: Partial<InternshipItem>) => void;
  updateProject: (id: string, updated: Partial<PracticalProject>) => void;
  updateSocial: (updated: Partial<SocialLinks>) => void;
  updatePortrait: (dataUrl: string) => void;
  resetToDefault: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const STORAGE_KEY = 'bilal_portfolio_data_v2';

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...initialPortfolioData,
          ...parsed,
          brand: {
            ...initialPortfolioData.brand,
            ...parsed.brand,
            portraitImage: parsed.brand?.portraitImage || initialPortfolioData.brand.portraitImage,
          },
          social: { ...initialPortfolioData.social, ...parsed.social },
        };
      }
    } catch {
      // fallback
    }
    return initialPortfolioData;
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore quota error if large image
    }
  }, [data]);

  const toggleEditMode = () => setIsEditMode(prev => !prev);

  const updateBrand = (updated: Partial<PortfolioData['brand']>) => {
    setData(prev => ({
      ...prev,
      brand: { ...prev.brand, ...updated }
    }));
  };

  const updateEducation = (id: string, updated: Partial<EducationItem>) => {
    setData(prev => ({
      ...prev,
      education: prev.education.map(item => item.id === id ? { ...item, ...updated } : item)
    }));
  };

  const updateInternship = (id: string, updated: Partial<InternshipItem>) => {
    setData(prev => ({
      ...prev,
      internships: prev.internships.map(item => item.id === id ? { ...item, ...updated } : item)
    }));
  };

  const updateProject = (id: string, updated: Partial<PracticalProject>) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(item => item.id === id ? { ...item, ...updated } : item)
    }));
  };

  const updateSocial = (updated: Partial<SocialLinks>) => {
    setData(prev => ({
      ...prev,
      social: { ...prev.social, ...updated }
    }));
  };

  const updatePortrait = (dataUrl: string) => {
    setData(prev => ({
      ...prev,
      brand: { ...prev.brand, portraitImage: dataUrl }
    }));
  };

  const resetToDefault = () => {
    if (window.confirm("Reset all customizations back to official default content?")) {
      setData(initialPortfolioData);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        isEditMode,
        toggleEditMode,
        updateBrand,
        updateEducation,
        updateInternship,
        updateProject,
        updateSocial,
        updatePortrait,
        resetToDefault,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
