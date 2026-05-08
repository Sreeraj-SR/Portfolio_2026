import React from 'react';
import { motion } from 'framer-motion';

const SectionBackground = ({ image }) => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {/* Light overlay for text readability without hiding the image */}
      <div className="absolute inset-0 bg-[#09090b]/40 z-10"></div>
      
      {/* Top & Bottom gradient fade just for the edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/90 via-transparent to-[#09090b]/90 z-20"></div>

      <motion.img 
        src={image} 
        alt="Background" 
        className="absolute inset-0 w-full h-[120%] object-cover object-center"
        initial={{ y: "-10%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: false, margin: "100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  );
};

export default SectionBackground;
