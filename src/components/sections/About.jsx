import React from 'react';
import { motion } from 'framer-motion';
import { aboutStats, personalInfo } from '../../data/info';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-6 text-balance mx-auto">
              I am a dedicated Full Stack Developer with a passion for architecting and building scalable web applications. My journey in software engineering has equipped me with a robust understanding of both frontend aesthetics and backend logic.
            </p>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-12 text-balance mx-auto">
              Currently pursuing my MCA while working as a Full Stack Developer Intern at Inker Robotics, I specialize in creating seamless user experiences using React and TypeScript, powered by robust Node.js and Django backends.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {aboutStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-panel p-6 rounded-xl border border-glass-border card-hover text-center"
                >
                  <h4 className="text-3xl font-bold text-primary-500 mb-2">{stat.value}</h4>
                  <p className="text-sm text-text-muted font-medium">{stat.label}</p>
                  {stat.qualification && (
                    <p className="text-xs text-text-muted font-medium mt-1">{stat.qualification}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
