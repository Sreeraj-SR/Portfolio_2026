import React, { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import RainBackground from './components/ui/RainBackground';
import Cursor from './components/ui/Cursor';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      // Progress bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollY = totalScroll / windowHeight;
      setScrollProgress(scrollY);

      // Scroll to top button
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScroll]);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuint' });
  };

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      <div className="relative min-h-screen">
        {!isMobile && <RainBackground />}
        {!isMobile && <Cursor />}

      {/* Elegant HUD Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-[100] border-b border-white/5">
        <div 
          className="h-full bg-gradient-to-r from-slate-400 via-slate-300 to-slate-200 relative shadow-[0_0_10px_rgba(148,163,184,0.5)]"
          style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.1s' }}
        >
          {/* HUD Text */}
          <div className="absolute right-2 top-3 text-[10px] md:text-xs font-mono font-bold tracking-[0.1em] text-slate-400 drop-shadow-[0_0_2px_#cbd5e1] whitespace-nowrap uppercase">
            SCROLL PROGRESS: {Math.round(scrollProgress * 100)}%
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-500/30 transition-all duration-300 z-50 hover:scale-110 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
    </MotionConfig>
  );
}

export default App;
