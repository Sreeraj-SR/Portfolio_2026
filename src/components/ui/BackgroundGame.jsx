import React, { useEffect, useRef } from 'react';

const BackgroundGame = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Game Entities
    const asteroids = [];
    const ships = [];

    class Asteroid {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 20 + 10;
        this.dx = (Math.random() - 0.5) * 2;
        this.dy = (Math.random() - 0.5) * 2;
        this.vertices = Math.floor(Math.random() * 5) + 5;
        this.offsets = Array.from({ length: this.vertices }, () => Math.random() * 0.4 + 0.8);
        this.flash = 0;
      }
      update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;
        
        // Randomly trigger flash
        if (Math.random() < 0.005 && this.flash <= 0) {
          this.flash = 1;
        }
        if (this.flash > 0) {
          this.flash -= 0.02;
        }
      }
      draw() {
        ctx.beginPath();
        for (let i = 0; i < this.vertices; i++) {
          const angle = (i / this.vertices) * Math.PI * 2;
          const r = this.radius * this.offsets[i];
          const x = this.x + Math.cos(angle) * r;
          const y = this.y + Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        
        // Flash logic
        if (this.flash > 0) {
          ctx.strokeStyle = `rgba(252, 211, 77, ${0.4 + this.flash * 0.6})`;
          ctx.fillStyle = `rgba(245, 158, 11, ${this.flash * 0.8})`;
          ctx.shadowColor = 'rgba(252, 211, 77, 0.8)';
          ctx.shadowBlur = 15;
        } else {
          ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
          ctx.fillStyle = 'rgba(15, 5, 5, 0.6)';
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      }
    }

    class Ship {
      constructor(isFollower) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = isFollower ? 3 : 2;
        this.isFollower = isFollower;
      }
      update() {
        if (this.isFollower) {
          // Steer towards mouse
          const targetAngle = Math.atan2(mouseY - this.y, mouseX - this.x);
          // Smooth rotation
          let diff = targetAngle - this.angle;
          while (diff < -Math.PI) diff += Math.PI * 2;
          while (diff > Math.PI) diff -= Math.PI * 2;
          this.angle += diff * 0.05;
        } else {
          if (Math.random() < 0.02) {
            this.angle += (Math.random() - 0.5);
          }
        }

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
        if (this.y < -20) this.y = canvas.height + 20;
        if (this.y > canvas.height + 20) this.y = -20;
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.moveTo(10, 0);
        ctx.lineTo(-10, -7);
        ctx.lineTo(-5, 0);
        ctx.lineTo(-10, 7);
        ctx.closePath();
        ctx.strokeStyle = this.isFollower ? '#fcd34d' : '#ef4444';
        
        if (this.isFollower) {
          ctx.shadowColor = '#fcd34d';
          ctx.shadowBlur = 10;
        }
        
        ctx.stroke();
        ctx.restore();
      }
    }

    for (let i = 0; i < 20; i++) asteroids.push(new Asteroid());
    for (let i = 0; i < 5; i++) ships.push(new Ship(i < 2)); // 2 followers, 3 random

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      asteroids.forEach(a => {
        a.update();
        a.draw();
      });
      
      ships.forEach(s => {
        s.update();
        s.draw();
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 z-0 opacity-50 pointer-events-none"
      />
      {/* Small Blackhole 1 */}
      <div className="fixed top-1/4 right-1/4 w-48 h-48 z-0 pointer-events-none opacity-70 mix-blend-screen flex items-center justify-center"
           style={{
             background: 'radial-gradient(circle, #000 20%, rgba(239,68,68,0.8) 35%, rgba(245,158,11,0.5) 50%, transparent 70%)',
             borderRadius: '50%',
             boxShadow: '0 0 40px 10px rgba(245,158,11,0.3)',
             animation: 'spin 15s linear infinite'
           }}>
        <div className="absolute inset-0 rounded-full border-[6px] border-t-orange-500 border-r-transparent border-b-rose-600 border-l-transparent animate-[spin_3s_linear_infinite] opacity-60"></div>
        <div className="absolute inset-4 rounded-full border-[3px] border-l-amber-300 border-t-transparent border-r-orange-600 border-b-transparent animate-[spin_5s_linear_infinite_reverse] opacity-80"></div>
      </div>

      {/* Small Blackhole 2 */}
      <div className="fixed bottom-1/3 left-1/4 w-32 h-32 z-0 pointer-events-none opacity-60 mix-blend-screen flex items-center justify-center"
           style={{
             background: 'radial-gradient(circle, #000 20%, rgba(245,158,11,0.8) 35%, rgba(239,68,68,0.5) 50%, transparent 70%)',
             borderRadius: '50%',
             boxShadow: '0 0 30px 5px rgba(239,68,68,0.3)',
             animation: 'spin 20s linear infinite reverse'
           }}>
        <div className="absolute inset-0 rounded-full border-[4px] border-t-amber-500 border-r-transparent border-b-orange-600 border-l-transparent animate-[spin_4s_linear_infinite] opacity-60"></div>
        <div className="absolute inset-3 rounded-full border-[2px] border-l-rose-400 border-t-transparent border-r-amber-500 border-b-transparent animate-[spin_6s_linear_infinite_reverse] opacity-80"></div>
      </div>

      {/* Fiery Planet */}
      <div className="fixed top-1/3 left-1/3 w-24 h-24 z-0 pointer-events-none opacity-50"
           style={{
             background: 'radial-gradient(circle at 30% 30%, #fcd34d, #f59e0b, #92400e, #000)',
             borderRadius: '50%',
             boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.9), 0 0 20px rgba(245,158,11,0.2)',
             animation: 'float 20s ease-in-out infinite'
           }}>
      </div>

      {/* Dark Red Planet with rings */}
      <div className="fixed bottom-1/4 right-1/3 w-40 h-40 z-0 pointer-events-none opacity-40"
           style={{
             background: 'radial-gradient(circle at 40% 30%, #ef4444, #991b1b, #450a0a, #000)',
             borderRadius: '50%',
             boxShadow: 'inset -15px -15px 25px rgba(0,0,0,0.9)',
             animation: 'float 25s ease-in-out infinite reverse'
           }}>
        {/* Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[30%] border-[3px] border-orange-500/30 rounded-[50%] rotate-[20deg]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210%] h-[35%] border-[1px] border-rose-400/20 rounded-[50%] rotate-[20deg]"></div>
      </div>
    </>
  );
};

export default BackgroundGame;
