import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// 1. Heavy Falling Rain
const Drop = ({ id }) => {
  const [key, setKey] = useState(id);
  const [props, setProps] = useState(null);

  useEffect(() => {
    const getProps = () => {
      const startX = -20 + Math.random() * 140; // Wider range to account for wind skew
      const startY = -20 - Math.random() * 30; // Start high
      const duration = 0.3 + Math.random() * 0.4; // Very fast falling
      const delay = Math.random() * 2; // Rapid spawn
      const length = 20 + Math.random() * 60; // Long streaks
      const opacity = 0.3 + Math.random() * 0.6; // High visibility

      return { startX, startY, duration, delay, length, opacity };
    };

    setProps(getProps());
  }, [key]);

  useEffect(() => {
    if (!props) return;
    const timer = setTimeout(() => {
      setKey(prev => prev + 1000);
    }, (props.duration + props.delay) * 1000);
    return () => clearTimeout(timer);
  }, [props]);

  if (!props) return null;

  return (
    <motion.div
      key={key}
      initial={{ x: `${props.startX}vw`, y: `${props.startY}vh`, opacity: 0 }}
      animate={{ y: `120vh`, opacity: [0, props.opacity, props.opacity, 0] }}
      transition={{
        duration: props.duration,
        delay: props.delay,
        ease: "linear"
      }}
      className="absolute top-0 left-0 w-[1.5px] bg-gradient-to-b from-transparent via-blue-200/60 to-blue-300"
      style={{
        height: `${props.length}px`,
        boxShadow: '0 0 8px 1px rgba(100, 150, 255, 0.4)'
      }}
    />
  );
};

// 2. Puddle Splashes (Rings and tiny droplets bouncing up)
const Splash = ({ id }) => {
  const [key, setKey] = useState(id);
  const [props, setProps] = useState(null);

  useEffect(() => {
    const getProps = () => {
      const x = Math.random() * 100;
      const y = 60 + Math.random() * 40; // Splash in the bottom 40% of the screen
      const delay = Math.random() * 1.5;
      return { x, y, delay };
    };
    setProps(getProps());
  }, [key]);

  useEffect(() => {
    if (!props) return;
    const timer = setTimeout(() => {
      setKey(prev => prev + 1000);
    }, (0.5 + props.delay) * 1000);
    return () => clearTimeout(timer);
  }, [props]);

  if (!props) return null;

  return (
    <motion.div
      key={key}
      className="absolute pointer-events-none z-10"
      style={{ left: `${props.x}vw`, top: `${props.y}vh` }}
    >
      {/* Expanding Ripple Ring */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0.8, y: 0 }}
        animate={{ scale: 2.5, opacity: 0, y: -5 }}
        transition={{ duration: 0.4, delay: props.delay, ease: "easeOut" }}
        className="w-12 h-3 rounded-[100%] border border-white/70 shadow-[0_0_10px_rgba(255,255,255,0.4)]"
      />
      {/* Tiny droplet shooting upward */}
      <motion.div
        initial={{ y: 0, opacity: 1, scale: 1 }}
        animate={{ y: -30, opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, delay: props.delay, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full blur-[0.5px] shadow-[0_0_5px_rgba(255,255,255,0.8)]"
      />
    </motion.div>
  );
};

// 3. Screen Droplets (Sticking to the "lens" and sliding down)
const GlassDroplet = ({ id }) => {
  const [key, setKey] = useState(id);
  const [props, setProps] = useState(null);

  useEffect(() => {
    const getProps = () => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = 3 + Math.random() * 7;
      const duration = 6 + Math.random() * 8;
      const delay = Math.random() * 5;
      return { x, y, size, duration, delay };
    };
    setProps(getProps());
  }, [key]);

  useEffect(() => {
    if (!props) return;
    const timer = setTimeout(() => {
      setKey(prev => prev + 1000);
    }, (props.duration + props.delay) * 1000);
    return () => clearTimeout(timer);
  }, [props]);

  if (!props) return null;

  return (
    <motion.div
      key={key}
      initial={{ x: `${props.x}vw`, y: `${props.y}vh`, opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.9, 0], 
        scale: [0, 1, 0.8], 
        y: [`${props.y}vh`, `${props.y}vh`, `${props.y + 15}vh`] // Slides down before fading
      }}
      transition={{ 
        duration: props.duration, 
        delay: props.delay,
        y: { delay: props.duration * 0.6, duration: props.duration * 0.4, ease: "easeIn" },
        opacity: { times: [0, 0.2, 1] }
      }}
      className="absolute rounded-full bg-blue-50/10 backdrop-blur-[2px] z-20 pointer-events-none"
      style={{
        width: `${props.size}px`,
        height: `${props.size * 1.3}px`,
        boxShadow: 'inset 0px -2px 4px rgba(255,255,255,0.7), inset 0px 2px 2px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.4)'
      }}
    />
  );
};

const RainBackground = () => {
  const drops = Array.from({ length: 300 }, (_, i) => i);
  const splashes = Array.from({ length: 35 }, (_, i) => i);
  const glassDroplets = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-900 dark:bg-black">
      
      {/* Moody stormy background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#09090b] to-[#020617] opacity-90"></div>
      
      {/* Occasional distant lightning flashes */}
      <motion.div 
        className="absolute inset-0 bg-white mix-blend-overlay z-0"
        animate={{ opacity: [0, 0, 0, 0.08, 0, 0, 0.15, 0, 0, 0, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* 1. Fast Falling Rain layer (skewed by wind) */}
      <div className="absolute inset-0 transform -skew-x-[12deg] scale-110 z-10">
        {drops.map(id => (
          <Drop key={`drop-${id}`} id={id} />
        ))}
      </div>

      {/* 2. Puddle Splashes at the bottom */}
      <div className="absolute inset-0 z-10">
        {splashes.map(id => (
          <Splash key={`splash-${id}`} id={id} />
        ))}
      </div>

      {/* 3. Screen Droplets sticking to the lens */}
      <div className="absolute inset-0 z-20">
        {glassDroplets.map(id => (
          <GlassDroplet key={`glass-${id}`} id={id} />
        ))}
      </div>

      {/* Subtle fog/mist at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-slate-900/60 to-transparent dark:from-black/90 z-20 pointer-events-none"></div>
    </div>
  );
};

export default RainBackground;
