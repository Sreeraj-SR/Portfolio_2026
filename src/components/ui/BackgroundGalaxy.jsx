import React from 'react';

const BackgroundGalaxy = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#030014] pointer-events-none">
      {/* Nebula / Galaxy Swirls */}
      <div className="absolute inset-0 opacity-50 mix-blend-screen">
        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-purple-900/40 blur-[150px] rounded-full animate-[spin_40s_linear_infinite]"></div>
        <div className="absolute top-[30%] right-[-20%] w-[100%] h-[100%] bg-fuchsia-900/30 blur-[120px] rounded-full animate-[spin_50s_linear_infinite_reverse]"></div>
        <div className="absolute bottom-[-30%] left-[10%] w-[150%] h-[120%] bg-indigo-900/40 blur-[180px] rounded-full animate-[pulse_10s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Stars Layer 1 (Slow) */}
      <div 
        className="absolute inset-[-50%] animate-[spin_120s_linear_infinite] opacity-60"
        style={{
          backgroundImage: 'radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #d8b4fe, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #e9d5ff, rgba(0,0,0,0))',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      ></div>

      {/* Stars Layer 2 (Medium) */}
      <div 
        className="absolute inset-[-50%] animate-[spin_90s_linear_infinite_reverse] opacity-50"
        style={{
          backgroundImage: 'radial-gradient(2px 2px at 20px 30px, #c084fc, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #a855f7, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #e9d5ff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #fff, rgba(0,0,0,0))',
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px'
        }}
      ></div>

      {/* Stars Layer 3 (Fast) */}
      <div 
        className="absolute inset-[-50%] animate-[spin_60s_linear_infinite] opacity-40"
        style={{
          backgroundImage: 'radial-gradient(3px 3px at 50px 160px, #e9d5ff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #c084fc, rgba(0,0,0,0))',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px'
        }}
      ></div>
    </div>
  );
};

export default BackgroundGalaxy;
