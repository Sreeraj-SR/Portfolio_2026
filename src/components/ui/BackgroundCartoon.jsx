import React from 'react';

const BackgroundCartoon = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#a3b1c6] pointer-events-none" style={{ perspective: '1200px' }}>
      
      {/* Ambient Misty Fog Layer Over Everything */}
      <div className="absolute inset-0 z-50 bg-gradient-to-t from-[#a3b1c6] via-[#a3b1c6]/60 to-transparent pointer-events-none"></div>

      {/* 3D World Container - Isometric Projection */}
      <div 
        className="absolute top-1/2 left-1/2 w-full h-full"
        style={{ 
          transform: 'translate(-50%, -50%) rotateX(60deg) rotateZ(-45deg)', 
          transformStyle: 'preserve-3d' 
        }}
      >
        
        {/* Cartoon Book (Reading) */}
        <div 
          className="absolute top-[10%] left-[20%] animate-[float_12s_ease-in-out_infinite]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Base pages */}
          <div className="w-40 h-56 bg-white border-[6px] border-[#2d3748] rounded-xl" style={{ transform: 'translateZ(0px)', boxShadow: '15px 15px 0px rgba(0,0,0,0.15)' }}>
            <div className="absolute top-12 left-6 w-20 h-4 bg-gray-200 rounded-full"></div>
            <div className="absolute top-24 left-6 w-28 h-4 bg-gray-200 rounded-full"></div>
            <div className="absolute top-36 left-6 w-24 h-4 bg-gray-200 rounded-full"></div>
          </div>
          {/* Book Cover flap */}
          <div className="absolute top-0 left-0 w-40 h-56 bg-[#f6ad55] border-[6px] border-[#2d3748] rounded-xl origin-left" style={{ transform: 'rotateY(-30deg) translateZ(5px)' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#dd6b20] border-[4px] border-[#2d3748] rounded-full"></div>
          </div>
        </div>

        {/* Cartoon Mountain (Travelling) */}
        <div 
          className="absolute top-[40%] right-[20%] animate-[float_15s_ease-in-out_infinite]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Mountain Front Face */}
          <div className="w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[140px] border-b-[#4fd1c5] relative">
            {/* Snowcap */}
            <div className="absolute top-[30px] -left-[30px] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-white"></div>
          </div>
          {/* Mountain Shadow/Side Face to make it 3D */}
          <div className="w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[140px] border-b-[#319795] absolute top-0 left-0 origin-left" style={{ transform: 'rotateY(-60deg)' }}>
             <div className="absolute top-[30px] -left-[30px] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-[#e2e8f0]"></div>
          </div>
        </div>

        {/* Cartoon Road / Map chunk (Bike Riding) */}
        <div 
          className="absolute bottom-[20%] left-[40%] animate-[float_10s_ease-in-out_infinite]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Floating Road Platform */}
          <div className="w-64 h-32 bg-[#cbd5e0] border-[6px] border-[#2d3748] rounded-xl overflow-hidden relative" style={{ transform: 'translateZ(0px)', boxShadow: '20px 20px 0px rgba(0,0,0,0.15)' }}>
            {/* Dashed line */}
            <div className="absolute top-1/2 left-0 w-full h-0 border-t-[8px] border-white border-dashed -translate-y-1/2"></div>
          </div>
          {/* Cute Simple Tree on the road */}
          <div className="absolute top-4 left-8" style={{ transform: 'translateZ(10px) rotateX(-90deg) rotateY(45deg)', transformStyle: 'preserve-3d' }}>
            <div className="w-6 h-12 bg-[#744210] border-[4px] border-[#2d3748] absolute bottom-0 left-1/2 -translate-x-1/2"></div>
            <div className="w-16 h-16 bg-[#48bb78] border-[4px] border-[#2d3748] rounded-full absolute bottom-8 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>
        
        {/* Cloud 1 */}
        <div className="absolute top-[20%] left-[60%] animate-[float_20s_ease-in-out_infinite]" style={{ transform: 'translateZ(100px)' }}>
          <div className="w-32 h-16 bg-white border-[6px] border-[#2d3748] rounded-full relative" style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.1)' }}>
             <div className="absolute -top-8 left-6 w-16 h-16 bg-white border-[6px] border-[#2d3748] rounded-full border-b-0"></div>
          </div>
        </div>
        
        {/* Cloud 2 */}
        <div className="absolute bottom-[40%] left-[10%] animate-[float_18s_ease-in-out_infinite]" style={{ transform: 'translateZ(150px)' }}>
          <div className="w-24 h-12 bg-white border-[6px] border-[#2d3748] rounded-full relative" style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.1)' }}>
             <div className="absolute -top-6 left-4 w-12 h-12 bg-white border-[6px] border-[#2d3748] rounded-full border-b-0"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BackgroundCartoon;
