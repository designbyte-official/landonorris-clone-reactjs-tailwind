import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLImageElement>(null);
  const helmetRef = useRef<HTMLImageElement>(null);
  const bgLinesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1

      // Portrait: Slight movement opposite to mouse for depth
      if (portraitRef.current) {
        gsap.to(portraitRef.current, {
          x: -x * 15,
          y: -y * 10,
          duration: 1,
          ease: 'power2.out',
        });
      }

      // Helmet Layer (Wireframe/Tech): Moves WITH mouse, creating a parallax separation from head
      // This matches the "looking around" or 3D effect shown in the original site
      if (helmetRef.current) {
        gsap.to(helmetRef.current, {
          x: x * 40,
          y: y * 30,
          rotationY: x * 5,
          rotationX: -y * 5,
          duration: 1.2,
          ease: 'power2.out',
        });
      }

      // Background Lines: Very subtle movement
      if (bgLinesRef.current) {
        gsap.to(bgLinesRef.current, {
          x: -x * 20,
          y: -y * 20,
          duration: 1.5,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[110vh] flex items-end justify-center overflow-hidden pt-20"
    >
      {/* Background Contour Lines */}
      <div ref={bgLinesRef} className="absolute inset-0 z-0 opacity-40 scale-110">
         <svg viewBox="0 0 1440 1024" className="w-full h-full text-gray-300" fill="none" stroke="currentColor" strokeWidth="0.5">
             <path d="M-100,200 Q400,0 900,300 T1600,200" />
             <path d="M-100,500 Q300,300 800,600 T1600,400" />
             <path d="M-100,800 Q500,600 1000,900 T1600,700" />
             <circle cx="200" cy="300" r="150" strokeDasharray="4 4" />
             <circle cx="1200" cy="200" r="200" opacity="0.5" />
         </svg>
      </div>

      {/* Top Center Logo */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
         <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20 L25 15 L30 20" stroke="black" strokeWidth="2"/>
            <path d="M25 15 V35" stroke="black" strokeWidth="2"/>
         </svg>
      </div>

      {/* Composition Container */}
      <div className="relative z-10 w-full max-w-[1400px] h-[90%] flex items-end justify-center">
        
        {/* Wireframe Helmet Graphic - Placed behind/around head for effect */}
        {/* Using the helmet asset from CDN */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] z-20 pointer-events-none mix-blend-multiply opacity-60">
             <img 
               ref={helmetRef}
               src="/assets/ln4-hp-lando-helmet.webp" 
               alt="Helmet Wireframe" 
               className="w-full h-full object-contain"
             />
        </div>

        {/* Lando Portrait */}
        <div className="relative z-10 h-full w-auto flex items-end">
          <img 
            ref={portraitRef}
            src="/assets/ln4-hp-lando-head.webp" 
            alt="Lando Norris" 
            className="h-[85vh] w-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;