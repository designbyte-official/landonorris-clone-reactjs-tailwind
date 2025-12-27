import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroFloatingElements: React.FC = () => {
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Floating playful elements animation
    if (floatingElementsRef.current) {
      const elements = floatingElementsRef.current.children;
      Array.from(elements).forEach((el, i) => {
        gsap.to(el, {
          y: `+=${20 + i * 10}`,
          x: `+=${10 + i * 5}`,
          rotation: 5 + i * 3,
          duration: 2 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2,
        });
      });
    }
  }, { scope: floatingElementsRef });

  return (
    <div ref={floatingElementsRef} className="absolute inset-0 z-5 pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-[20%] left-[10%] w-4 h-4 rounded-full bg-ln-yellow opacity-20 blur-sm"></div>
      <div className="absolute top-[40%] right-[15%] w-6 h-6 rounded-full bg-ln-yellow opacity-15 blur-sm"></div>
      <div className="absolute bottom-[30%] left-[20%] w-3 h-3 rounded-full bg-ln-yellow opacity-25 blur-sm"></div>
      <div className="absolute top-[60%] right-[25%] w-5 h-5 rounded-full bg-ln-yellow opacity-18 blur-sm"></div>
      <div className="absolute top-[70%] left-[30%] w-4 h-4 rounded-full bg-ln-yellow opacity-20 blur-sm"></div>
      <div className="absolute bottom-[50%] right-[30%] w-3 h-3 rounded-full bg-ln-yellow opacity-22 blur-sm"></div>
      {/* Floating lines */}
      <div className="absolute top-[25%] right-[10%] w-12 h-px bg-ln-yellow opacity-10 rotate-45"></div>
      <div className="absolute bottom-[25%] left-[15%] w-16 h-px bg-ln-yellow opacity-10 -rotate-12"></div>
      <div className="absolute top-[50%] left-[5%] w-10 h-px bg-ln-yellow opacity-8 rotate-90"></div>
    </div>
  );
};

export default HeroFloatingElements;

