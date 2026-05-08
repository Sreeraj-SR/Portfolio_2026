import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../../data/info';

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic <span className="gradient-text">Background</span></h2>
              <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="glass-panel p-6 rounded-2xl border border-glass-border card-hover flex gap-4"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500">
                      <GraduationCap size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-color">{edu.degree}</h3>
                    <p className="text-text-muted text-sm mt-1 mb-1">{edu.university}</p>
                    <p className="text-text-muted text-sm mt-1 mb-3">{edu.institution}</p>
                    <div className="flex gap-4 items-center">
                      <span className="text-xs font-semibold bg-primary-500/10 text-primary-500 px-3 py-1 rounded-full border border-primary-500/20">
                        Score: {edu.score}
                      </span>
                      <span className="text-xs font-medium text-text-muted">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div id="certifications">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Licenses & <span className="gradient-text">Certifications</span></h2>
              <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-4 rounded-xl border border-glass-border card-hover flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Award size={20} />
                  </div>
                  <p className="font-medium text-sm text-text-color/90">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
