import React from 'react';
import { Mail, Linkedin, Facebook, MessageCircle, ArrowUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { data } = usePortfolio();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#202923] text-[#F8F7F2] border-t border-[#174D38]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-3">
            <a
              href="#hero"
              className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 font-display"
            >
              <span className="font-serif italic font-semibold text-3xl text-[#B59A63]">✦</span>
              <span>{data.brand.brandName}</span>
            </a>
            <p className="text-base text-[#D5C299] font-serif italic">
              Connecting Agriculture, AI, and Education.
            </p>
            <p className="text-xs text-white/55 max-w-md leading-relaxed font-sans">
              Practical learning journey of {data.brand.fullName} across agricultural exploration, artificial intelligence studies at Rehan College, and educational facilitation in Pakistan.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="block text-xs font-bold uppercase tracking-wider text-[#B59A63] mb-3">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#about" className="hover:text-[#F8F7F2] transition-colors">About & Journey</a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#F8F7F2] transition-colors">Education & Credentials</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#F8F7F2] transition-colors">Internships & Practice</a>
              </li>
              <li>
                <a href="#practical-work" className="hover:text-[#F8F7F2] transition-colors">Practical Work</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#F8F7F2] transition-colors">Skills & Learning Areas</a>
              </li>
              <li>
                <a href="#vision" className="hover:text-[#F8F7F2] transition-colors">Vision for Agriculture</a>
              </li>
            </ul>
          </div>

          {/* Connect & Direct Actions */}
          <div className="md:col-span-3 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-[#B59A63] mb-3">
              Direct Contact
            </span>
            <div className="flex flex-col gap-2.5 text-xs text-white/70">
              <a
                href={`mailto:${data.social.email}`}
                className="hover:text-white flex items-center gap-2 truncate transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#B59A63]" />
                <span className="truncate">{data.social.email}</span>
              </a>

              {data.social.linkedIn && (
                <a
                  href={data.social.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#B59A63]" />
                  <span>LinkedIn Profile</span>
                </a>
              )}

              {data.social.facebook && (
                <a
                  href={data.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#B59A63]" />
                  <span>Facebook Profile</span>
                </a>
              )}

              {data.social.whatsApp && (
                <a
                  href={`https://wa.me/${data.social.whatsApp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#B59A63]" />
                  <span>WhatsApp Contact</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            <span>© {currentYear} {data.brand.brandName} ({data.brand.fullName}). All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B59A63]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
