import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/info';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="gradient-text">Expertise</span></h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-text-muted max-w-2xl mx-auto">A comprehensive overview of my technical skills, tools, and methodologies used in building modern web applications.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] glass-panel p-6 rounded-2xl border border-glass-border card-hover relative overflow-hidden group text-left"
            >
              {/* Small Icon in Top Right Corner */}
              <div className="absolute top-6 right-6 p-2.5 rounded-lg bg-primary-500/10 text-primary-500 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-500/20 z-10">
                {React.cloneElement(skillGroup.icon, { className: "w-5 h-5" })}
              </div>
              
              <div className="mb-6 relative z-10 pr-12">
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {skillGroup.items.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-bg-color border border-border-color text-text-color hover:border-primary-500 hover:text-primary-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
