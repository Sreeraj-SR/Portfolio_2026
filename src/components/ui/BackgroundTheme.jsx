import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundTheme = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50 dark:bg-[#070709]">
      
      <AnimatePresence>
        {/* Light Mode: Vibrant Hobbies Collage */}
        <motion.div 
          key="light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 block dark:hidden"
        >
          {/* Strong light overlay for perfect dark text readability */}
          <div className="absolute inset-0 bg-white/75 z-10 backdrop-blur-sm"></div>
          <motion.img 
            src="/image/light_hobbies_serious.png" 
            alt="Sophisticated Hobbies Background" 
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Dark Mode: Sleek Neon Hobbies Collage */}
        <motion.div 
          key="dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 hidden dark:block"
        >
          {/* Strong dark overlay for perfect white text readability */}
          <div className="absolute inset-0 bg-[#09090b]/80 z-10 backdrop-blur-[2px]"></div>
          <motion.img 
            src="/image/dark_hobbies_serious.png" 
            alt="Premium Dark Hobbies Background" 
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default BackgroundTheme;
