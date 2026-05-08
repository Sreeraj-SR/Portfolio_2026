import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../../data/info';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="gradient-text">Experience</span></h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="glass-panel p-8 rounded-2xl border border-glass-border card-hover group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-500/20 p-3 rounded-xl text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                      <Briefcase size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-color group-hover:text-primary-500 transition-colors">{exp.role}</h3>
                      <h4 className="text-xl font-medium text-text-muted">{exp.company}</h4>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 text-sm text-text-muted font-medium bg-card-bg px-4 py-2 rounded-lg border border-border-color">
                    <span className="flex items-center gap-2"><Calendar size={16} className="text-primary-500" /> {exp.period}</span>
                    <span className="flex items-center gap-2"><MapPin size={16} className="text-primary-500" /> {exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-text-color/80">
                      <span className="text-primary-500 mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
