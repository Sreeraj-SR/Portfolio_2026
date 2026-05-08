import React from 'react';
import { motion } from 'framer-motion';

const BackgroundFlow = () => {
  return (
    <div className="flow-container pointer-events-none">
      {/* Subtle Noise Texture overlay for a premium matte finish */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay z-10"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* Dark Zinc Base layer */}
      <div className="absolute inset-0 bg-[#09090b]"></div>

      {/* Flow Blob 1 - Deep Slate */}
      <motion.div
        className="absolute w-[70vw] h-[70vh] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.15]"
        style={{
          background: 'radial-gradient(circle, #475569, transparent 70%)',
          top: '-10%',
          left: '-10%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Flow Blob 2 - Soft Silver/Grey */}
      <motion.div
        className="absolute w-[80vw] h-[80vh] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, #64748b, transparent 70%)',
          bottom: '-20%',
          right: '-20%',
        }}
        animate={{
          x: [0, -120, 0],
          y: [0, -100, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Flow Blob 3 - Light Highlight moving through center */}
      <motion.div
        className="absolute w-[50vw] h-[50vh] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #cbd5e1, transparent 70%)',
          top: '30%',
          left: '20%',
        }}
        animate={{
          x: [-50, 150, -50],
          y: [100, -100, 100],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
};

export default BackgroundFlow;
