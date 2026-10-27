import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { PracticalWork } from './components/PracticalWork';
import { Skills } from './components/Skills';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomizerModal } from './components/CustomizerModal';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen w-full overflow-x-hidden bg-[#F8F7F2] text-[#202923] flex flex-col font-sans selection:bg-[#174D38] selection:text-[#F8F7F2]">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <Education />
          <Experience />
          <PracticalWork />
          <Skills />
          <Vision />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Customizer Slide-over Panel */}
        <CustomizerModal />
      </div>
    </PortfolioProvider>
  );
}
