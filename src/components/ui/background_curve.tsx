import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface BackgroundCurveProps {
  className?: string;
  opacity?: number;
}

const BackgroundCurve: React.FC<BackgroundCurveProps> = ({ 
  className = '', 
  opacity = 20 
}) => {
  const curveRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!curveRef.current) return;

    // Background Curve Animation
    gsap.to(curveRef.current, {
      rotate: 360,
      duration: 120,
      repeat: -1,
      ease: "none"
    });

    gsap.to(curveRef.current, {
      scale: 1.2,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: curveRef });

  return (
    <div 
      className={`absolute inset-0 z-0 pointer-events-none flex items-center justify-center ${className}`}
      style={{ opacity: opacity / 100 }}
    >
      <img
        ref={curveRef}
        src="/images/green-svgs/background-curve.svg"
        alt=""
        className="w-[120%] h-[120%] object-contain bg-curve max-w-none"
      />
    </div>
  );
};

export default BackgroundCurve;

