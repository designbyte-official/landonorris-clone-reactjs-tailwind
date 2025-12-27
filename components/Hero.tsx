import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLImageElement>(null);
  const helmetRef = useRef<HTMLImageElement>(null);
  const bgLinesRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    // Initial animation on load
    if (imagesLoaded) {
      gsap.from(portraitRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5
      });
      
      gsap.from(helmetRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.8,
        ease: 'elastic.out(1, 0.6)',
        delay: 0.8
      });
    }
  }, [imagesLoaded]);

  useEffect(() => {
    // Scroll-triggered animation
    const ctx = gsap.context(() => {
      gsap.to(portraitRef.current, {
        y: 200,
        scale: 0.95,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });

      gsap.to(helmetRef.current, {
        y: -150,
        rotate: 15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  
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

      // Helmet Layer: Moves WITH mouse, creating parallax effect
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
      className="relative w-full h-[100vh] md:h-[110vh] flex items-end justify-center overflow-hidden pt-20"
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
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] z-20 pointer-events-none mix-blend-multiply opacity-40 md:opacity-60 transition-opacity duration-700">
             <img 
               ref={helmetRef}
               src="/assets/ln4-hp-lando-helmet.webp" 
               alt="Helmet Wireframe" 
               className="w-full h-full object-contain"
               onLoad={() => setImagesLoaded(true)}
             />
        </div>

        {/* Lando Portrait */}
        <div className="relative z-10 h-full w-auto flex items-end">
          <img 
            ref={portraitRef}
            src="/assets/ln4-hp-lando-head.webp" 
            alt="Lando Norris" 
            className="h-[70vh] md:h-[85vh] w-auto object-contain object-bottom drop-shadow-2xl transition-all duration-700"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;