import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  '/image/background_images/aryan-nikhil-TL_mvXYfSZ8-unsplash copy.jpg',
  '/image/background_images/roksolana-zasiadko-cf-ZRVtH6kE-unsplash (1) copy.jpg',
  '/image/background_images/sash-ka-Sol0y8iask0-unsplash.jpg',
  '/image/background_images/teodor-kuduschiev-SRGib9KboaE-unsplash.jpg'
];

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change background image every 7 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#09090b] pointer-events-none">
      {/* 40% dark overlay for text readability without obscuring the image */}
      <div className="absolute inset-0 bg-[#09090b]/40 z-10"></div>

      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={IMAGES[currentIndex]}
          alt="Atmospheric Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default BackgroundSlider;
