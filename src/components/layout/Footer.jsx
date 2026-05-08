import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { personalInfo } from '../../data/info';

const Footer = () => {
  return (
    <footer className="border-t border-glass-border py-10 bg-bg-color relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-500/5 mix-blend-overlay"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link to="home" smooth={true} duration={500} className="text-2xl font-bold cursor-pointer gradient-text">
              SBS.
            </Link>
            <p className="text-sm text-text-muted mt-2 max-w-xs">
              Building scalable web applications and intuitive user interfaces.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all text-text-muted">
              <FaGithub size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all text-text-muted">
              <FaLinkedin size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all text-text-muted">
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          
            <p className="flex items-center gap-1">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
