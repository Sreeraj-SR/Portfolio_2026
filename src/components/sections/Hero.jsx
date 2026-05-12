import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/info';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 max-w-3xl">
            <div className="block lg:hidden mb-8 p-3 bg-primary-500/10 border border-primary-500/20 rounded-lg text-primary-300 text-sm font-medium text-center shadow-lg shadow-primary-500/5 backdrop-blur-sm">
              View portfolio on laptops to see animations
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-500 font-medium tracking-wider uppercase text-sm mb-4 block">
                Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 leading-tight"
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-color/90 mb-6 tracking-wide"
            >
              {personalInfo.name}
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-text-muted mb-6 font-display"
            >
              <span className="text-primary-400">{personalInfo.titles[0]}</span>
              <span className="mx-3 opacity-50">|</span>
              <span>{personalInfo.titles[1]}</span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl text-text-muted mb-10 max-w-2xl text-balance leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="projects" 
                smooth={true} 
                duration={500}
                className="flex items-center gap-2 bg-text-color text-bg-color px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-primary-500/20 text-lg"
              >
                View Projects <ArrowRight size={20} />
              </Link>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500}
                className="flex items-center gap-2 glass-panel px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform cursor-pointer text-lg"
              >
                Contact Me
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-14 flex items-center gap-8"
            >
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary-500 transition-colors transform hover:scale-110">
                <FaGithub size={28} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary-500 transition-colors transform hover:scale-110">
                <FaLinkedin size={28} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-text-muted hover:text-primary-500 transition-colors transform hover:scale-110">
                <Mail size={28} />
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0]
            }}
            transition={{ 
              opacity: { duration: 0.7, delay: 0.3 },
              scale: { duration: 0.7, delay: 0.3 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] shrink-0 relative group mt-10 md:mt-0"
          >
            <div className="absolute inset-0 bg-primary-500/30 rounded-full blur-2xl group-hover:bg-primary-500/50 transition-colors duration-500"></div>
            <img 
              src="/image/Sreeraj_april_2026.png" 
              alt={personalInfo.name} 
              className="w-full h-full object-cover rounded-full border-4 border-glass-border shadow-2xl shadow-primary-500/30 relative z-10 transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
