import React, { useState, useEffect } from 'react';
import { Menu, X, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data, isEditMode, toggleEditMode } = usePortfolio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Practical Work', href: '#practical-work' },
    { label: 'Vision', href: '#vision' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F7F2]/95 backdrop-blur-md border-b border-[#174D38]/10 shadow-xs'
          : 'bg-[#F8F7F2]/90 backdrop-blur-xs border-b border-[#174D38]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-8 h-16 sm:h-20">
          {/* Zone 1: Brand Wordmark (Responsive Typography) */}
          <a
            href="#hero"
            className="group flex items-center gap-1.5 sm:gap-2.5 whitespace-nowrap shrink-0 transition-opacity hover:opacity-90 min-h-[44px]"
          >
            <span className="font-serif italic font-semibold text-lg sm:text-2xl text-[#174D38] tracking-tight flex items-center gap-1 sm:gap-1.5">
              <span className="text-[#B59A63] font-normal not-italic text-sm sm:text-lg">✦</span>
              <span className="truncate max-w-[190px] xs:max-w-none">{data.brand.brandName}</span>
            </span>
          </a>

          {/* Zone 2: Desktop Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-[#202923]/75">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#174D38] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#174D38] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Discreet Personalization Toggle */}
            <button
              onClick={toggleEditMode}
              title="Personalize details / upload photo"
              className={`min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] p-2 rounded-lg border text-xs font-medium transition-all flex items-center justify-center ${
                isEditMode
                  ? 'bg-[#174D38] text-[#F8F7F2] border-[#174D38] shadow-xs'
                  : 'bg-white/70 text-[#202923]/70 border-[#174D38]/15 hover:text-[#174D38] hover:border-[#174D38]/30 hover:bg-white'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="sr-only">Customize Portfolio</span>
            </button>

            {/* Desktop "Let's Connect" CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs sm:text-[13px] font-semibold text-[#F8F7F2] bg-[#174D38] hover:bg-[#0D3022] rounded-lg transition-all whitespace-nowrap shadow-xs hover:shadow hover:-translate-y-0.5 tracking-wide min-h-[44px]"
            >
              <span>Let’s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B59A63]" />
            </a>

            {/* Mobile Hamburger Button with comfortable touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-w-[42px] min-h-[42px] p-2.5 rounded-lg border border-[#174D38]/15 bg-white/70 text-[#202923] hover:text-[#174D38] focus:outline-hidden flex items-center justify-center active:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#F8F7F2]/98 backdrop-blur-xl border-b border-[#174D38]/10 px-6 pt-4 pb-10 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          <div className="space-y-1">
            <span className="block text-[11px] font-bold uppercase tracking-widest text-[#B59A63] mb-3 px-3">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium text-[#202923] hover:bg-[#174D38]/10 hover:text-[#174D38] active:bg-[#174D38]/15 transition-colors min-h-[48px]"
              >
                <span>{link.label}</span>
                <span className="text-[#B59A63] text-sm">&rarr;</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#174D38]/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 px-4 rounded-xl text-sm font-semibold bg-[#174D38] text-[#F8F7F2] hover:bg-[#0D3022] active:bg-[#0A241A] flex items-center justify-center gap-2 shadow-sm min-h-[48px]"
            >
              <span>Let’s Connect</span>
              <ArrowUpRight className="w-4 h-4 text-[#B59A63]" />
            </a>

            <button
              onClick={() => {
                toggleEditMode();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold border border-[#174D38]/20 text-[#174D38] bg-white flex items-center justify-center gap-2 min-h-[44px]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>{isEditMode ? 'Exit Customizer' : 'Personalize Portfolio Content'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
