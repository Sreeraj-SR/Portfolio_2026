import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/info';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="gradient-text">Touch</span></h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-text-muted max-w-2xl mx-auto">Looking for opportunities or have a project in mind? Let's connect.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <div className="glass-panel p-8 rounded-2xl border border-glass-border flex flex-col items-center text-center gap-4 card-hover">
            <div className="w-14 h-14 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center shrink-0 mb-2">
              <Mail size={28} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-muted mb-2">Email</h4>
              <a href={`mailto:${personalInfo.email}`} className="font-medium hover:text-primary-500 transition-colors text-lg">{personalInfo.email}</a>
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl border border-glass-border flex flex-col items-center text-center gap-4 card-hover">
            <div className="w-14 h-14 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center shrink-0 mb-2">
              <Phone size={28} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-muted mb-2">Phone</h4>
              <a href={`tel:${personalInfo.phone}`} className="font-medium hover:text-primary-500 transition-colors text-lg">{personalInfo.phone}</a>
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl border border-glass-border flex flex-col items-center text-center gap-4 card-hover">
            <div className="w-14 h-14 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center shrink-0 mb-2">
              <MapPin size={28} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-muted mb-2">Location</h4>
              <span className="font-medium text-lg">{personalInfo.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
