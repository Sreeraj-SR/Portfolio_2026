import React from 'react';
import { Compass, BookOpen, Mountain, Map, Wind, MapPin } from 'lucide-react';

const BackgroundMist = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0f12]">
      {/* CSS Mist/Fog Layers */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-primary-900/10 blur-[120px] rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute top-[30%] right-[-20%] w-[100%] h-[100%] bg-primary-800/10 blur-[150px] rounded-full animate-[spin_80s_linear_infinite_reverse]"></div>
        <div className="absolute bottom-[-30%] left-[10%] w-[150%] h-[120%] bg-white/5 blur-[180px] rounded-full animate-[pulse_15s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Floating Subliminal Hobby Elements */}
      {/* Opacity is extremely low (0.02 to 0.04) so it's felt rather than explicitly seen */}
      <div className="absolute inset-0 text-white/5">
        {/* Travel / Bike Riding / Exploring */}
        <Compass size={600} className="absolute -top-20 -left-20 -rotate-12 animate-[float_25s_ease-in-out_infinite] opacity-30" />
        <Mountain size={800} className="absolute top-1/4 -right-1/4 opacity-20 animate-[pulse_20s_ease-in-out_infinite]" />
        <Map size={500} className="absolute -bottom-20 left-1/4 -rotate-6 animate-[float_30s_ease-in-out_infinite_reverse] opacity-40" />
        
        {/* Reading */}
        <BookOpen size={450} className="absolute bottom-40 -right-10 rotate-12 animate-[float_35s_ease-in-out_infinite] opacity-30" />
        
        {/* Subtle abstract lines representing roads/journeys (Bike riding / Travel) */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
           <path d="M -100,500 Q 300,800 800,300 T 1600,600 T 2200,400" fill="none" stroke="currentColor" strokeWidth="1" className="animate-[pulse_12s_ease-in-out_infinite]" />
           <path d="M -100,800 Q 400,500 900,900 T 1800,600 T 2200,900" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-[pulse_18s_ease-in-out_infinite_reverse]" />
        </svg>
      </div>
      
      {/* Noise texture overlay for misty/grainy feel */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
    </div>
  );
};

export default BackgroundMist;
