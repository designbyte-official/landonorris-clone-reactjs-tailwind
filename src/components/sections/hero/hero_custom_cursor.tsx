import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface HeroCustomCursorProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const HeroCustomCursor: React.FC<HeroCustomCursorProps> = ({ containerRef }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container || !cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      if (cursor) {
        gsap.set(cursor, {
          x: cursorX,
          y: cursorY,
          xPercent: -50,
          yPercent: -50
        });
      }

      requestAnimationFrame(animateCursor);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef]);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[60] opacity-0"
      style={{ willChange: 'transform' }}
    >
      <div className="relative w-16 h-16 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full border-2 border-ln-yellow bg-ln-yellow/10 backdrop-blur-sm animate-pulse"></div>
        <div className="absolute inset-0 rounded-full border border-ln-deep-forest/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-ln-yellow"></div>
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, 
              rgba(210, 255, 0, 0.3) 0deg,
              rgba(34, 40, 49, 0.3) 90deg,
              rgba(210, 255, 0, 0.3) 180deg,
              rgba(34, 40, 49, 0.3) 270deg,
              rgba(210, 255, 0, 0.3) 360deg
            )`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            animation: 'spin 3s linear infinite'
          }}
        ></div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default HeroCustomCursor;

