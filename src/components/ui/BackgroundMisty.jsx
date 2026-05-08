import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  '/image/background_images/anthony-lim-2kngEKj1mgU-unsplash.jpg',
  '/image/background_images/aryan-nikhil-TL_mvXYfSZ8-unsplash.jpg',
  '/image/background_images/enrico-bet-TCsCykbwSJw-unsplash.jpg',
  '/image/background_images/jusdevoyage-oJMlA56bC_M-unsplash.jpg',
  '/image/background_images/roksolana-zasiadko-cf-ZRVtH6kE-unsplash (1).jpg'
];

const BackgroundMisty = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change background image every 10 seconds for a slow, moody transition
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050505]">
      {/* Heavy dark overlay for excellent text readability */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>
      
      {/* Bottom gradient fade so the background blends perfectly with the page ends */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#09090b] z-20 pointer-events-none"></div>

      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={IMAGES[currentIndex]}
          alt="Misty Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default BackgroundMisty;
