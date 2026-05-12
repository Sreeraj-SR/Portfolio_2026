import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../../data/info';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowLogo(window.scrollY > window.innerHeight - 100);
    };
    
    handleScroll(); // Set initial state based on current scroll position
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

  return (
    <nav className={`fixed w-full max-w-[1400px] left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className={`flex items-center gap-3 cursor-pointer transition-opacity duration-300 ${showLogo ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <img src="/image/Sreeraj_april_2026.png" alt="Profile" className="w-10 h-10 rounded-full object-cover border border-primary-500/50 shadow-sm" />
          <span className="text-2xl font-bold gradient-text">SBS.</span>
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-primary-500 font-semibold"
                  className="cursor-pointer text-sm font-medium hover:text-primary-500 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <a href="/resume/Sreeraj_CV.pdf" download="Sreeraj_CV.pdf" className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-primary-500/30 card-hover">
              <Download size={16} /> Resume
            </a>
          </div>
        </div>

        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-panel border-t border-glass-border">
          <ul className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-lg font-medium hover:text-primary-500"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
