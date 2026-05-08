import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    
    const updateFollower = () => {
      setFollower((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateFollower);
    };
    
    updateFollower();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block overflow-hidden">
      
      {/* Sleek Follower Ring */}
      <div 
        className="absolute w-10 h-10 rounded-full border border-slate-500/50 backdrop-blur-sm transition-transform duration-75 ease-out shadow-[0_0_15px_rgba(100,116,139,0.2)]"
        style={{
          left: follower.x,
          top: follower.y,
          transform: `translate(-50%, -50%)`,
        }}
      />

      {/* Solid crisp inner dot */}
      <div 
        className="absolute w-2 h-2 bg-slate-200 rounded-full shadow-[0_0_8px_#cbd5e1]"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};

export default Cursor;
