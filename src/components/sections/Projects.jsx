import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/info';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
          <p className="mt-6 text-text-muted max-w-2xl">Showcasing complex SaaS platforms and modern web applications built with scalable architectures.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group glass-panel rounded-2xl overflow-hidden border border-glass-border card-hover flex flex-col"
            >
              <div className="h-48 bg-border-color/30 flex items-center justify-center relative overflow-hidden">
                {/* Project Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-emerald-500/10 mix-blend-overlay"></div>
                <span className="text-6xl font-black text-text-muted/50 group-hover:scale-110 transition-transform duration-500 tracking-widest uppercase">
                  {project.title.substring(0, 2)}
                </span>
                
                <div className="absolute inset-0 bg-bg-color/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a href={project.github} className="p-3 bg-card-bg rounded-full hover:text-primary-500 transition-colors shadow-lg">
                    <FaGithub size={24} />
                  </a>
                  <a href={project.live} className="p-3 bg-card-bg rounded-full hover:text-primary-500 transition-colors shadow-lg">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                <p className="text-text-muted mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-text-color uppercase tracking-wider">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-xs text-text-muted flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border-color">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-primary-500 bg-primary-500/10 px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
