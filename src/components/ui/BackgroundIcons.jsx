import React from 'react';
import { TreePine, Bike, BookOpen, Compass, Cloud, Map } from 'lucide-react';

const BackgroundIcons = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      {/* Misty night fog gradients blended with black */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/60 to-black blur-3xl"></div>
      
      {/* Heavy background moonlight mist layer */}
      <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-blue-900/10 blur-[120px] rounded-full animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute top-[30%] right-[-20%] w-[100%] h-[100%] bg-slate-800/30 blur-[150px] rounded-full animate-[spin_80s_linear_infinite_reverse]"></div>
      
      {/* Icons scattered in moonlight */}
      <div className="absolute inset-0 opacity-[0.08] text-slate-200">
         <TreePine size={48} className="absolute top-[10%] left-[15%] animate-[float_15s_ease-in-out_infinite]" />
         <Bike size={56} className="absolute top-[25%] right-[20%] animate-[float_12s_ease-in-out_infinite_reverse]" />
         <BookOpen size={40} className="absolute bottom-[30%] left-[25%] animate-[float_18s_ease-in-out_infinite]" />
         <TreePine size={64} className="absolute bottom-[15%] right-[15%] animate-[float_14s_ease-in-out_infinite_reverse]" />
         <Map size={48} className="absolute top-[40%] left-[5%] animate-[float_20s_ease-in-out_infinite]" />
         <Cloud size={120} className="absolute top-[15%] right-[40%] animate-[float_25s_ease-in-out_infinite] opacity-30" />
         <Bike size={40} className="absolute bottom-[10%] left-[45%] animate-[float_16s_ease-in-out_infinite_reverse]" />
         <Compass size={56} className="absolute top-[50%] right-[10%] animate-[float_22s_ease-in-out_infinite]" />
         <BookOpen size={48} className="absolute top-[60%] left-[40%] animate-[float_19s_ease-in-out_infinite_reverse]" />
         <Cloud size={150} className="absolute bottom-[40%] right-[30%] animate-[float_28s_ease-in-out_infinite] opacity-20" />
         <TreePine size={52} className="absolute top-[70%] right-[5%] animate-[float_20s_ease-in-out_infinite]" />
         <Bike size={44} className="absolute top-[5%] right-[50%] animate-[float_24s_ease-in-out_infinite_reverse]" />
      </div>
      
      {/* Foreground night mist to obscure the icons slightly blended with black */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default BackgroundIcons;
