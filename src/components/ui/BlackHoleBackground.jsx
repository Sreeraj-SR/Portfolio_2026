import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Comet = ({ id }) => {
  const [key, setKey] = useState(id); // Use id as initial key
  const [props, setProps] = useState(null);

  useEffect(() => {
    // Generate props on client side only to avoid hydration mismatch
    const getProps = () => {
      const startAngle = Math.random() * 360;
      // Spawn completely outside the center
      const startRadius = 60 + Math.random() * 40; // 60vw to 100vw distance from center
      const duration = 12 + Math.random() * 15; // 12s to 27s
      const delay = Math.random() * 15; // 0s to 15s
      
      // Orbit direction (clockwise or counter-clockwise)
      const direction = Math.random() > 0.5 ? 1 : -1;
      // Orbit amount before falling into the center (90 to 270 degrees)
      const orbitDegrees = (90 + Math.random() * 180) * direction;

      return { startAngle, startRadius, duration, delay, orbitDegrees };
    };

    setProps(getProps());
  }, [key]);

  useEffect(() => {
    if (!props) return;
    
    // When animation completes, generate new props and increment key to trigger re-render
    const timer = setTimeout(() => {
      setKey(prev => prev + 100); // Add 100 to ensure uniqueness
    }, (props.duration + props.delay) * 1000);
    
    return () => clearTimeout(timer);
  }, [props]);

  if (!props) return null;

  return (
    <motion.div
      key={key}
      className="absolute top-1/2 left-1/2 w-0 h-0"
      initial={{ rotate: props.startAngle }}
      animate={{ rotate: props.startAngle + props.orbitDegrees }}
      transition={{ 
        duration: props.duration, 
        delay: props.delay, 
        ease: "easeIn" // Accelerates as it orbits closer!
      }}
    >
      <motion.div
        initial={{ x: `${props.startRadius}vw`, opacity: 0, scale: 0 }}
        animate={{ x: `5vw`, opacity: [0, 1, 1, 0], scale: [0, 1, 0.8, 0] }}
        transition={{ 
          duration: props.duration, 
          delay: props.delay,
          ease: "easeIn", // Gravity accelerates it towards the center!
          opacity: { times: [0, 0.1, 0.9, 1] },
          scale: { times: [0, 0.1, 0.9, 1] }
        }}
        className="absolute top-0 left-0 h-[1.5px] w-[100px] md:w-[200px] bg-gradient-to-r from-white via-white/40 to-transparent rounded-full blur-[0.5px]"
        style={{
          boxShadow: '0 0 15px 2px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Comet Head (Leading edge on the left as it travels to 0) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-white rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.9)]" />
      </motion.div>
    </motion.div>
  );
};

const BlackHoleBackground = () => {
  // Generate 12 comets
  const comets = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      
      {/* Black Hole Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full opacity-70"
        >
          <img 
            src="/image/black_hole.png" 
            alt="Black Hole" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Deep Space Overlay to ensure image blends into pure black */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80"></div>

      {/* Comets Layer */}
      <div className="absolute inset-0">
        {comets.map(id => (
          <Comet key={id} id={id} />
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
    </div>
  );
};

export default BlackHoleBackground;
