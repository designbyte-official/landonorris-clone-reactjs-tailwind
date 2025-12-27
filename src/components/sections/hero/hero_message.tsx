import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface HeroMessageProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const HeroMessage: React.FC<HeroMessageProps> = ({ containerRef }) => {
  const messageRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Reveal message and signature on scroll
    if (messageRef.current) {
      gsap.fromTo(messageRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=200%',
            scrub: 1,
          }
        }
      );
    }

    if (signatureRef.current) {
      gsap.fromTo(signatureRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=200%',
            scrub: 1,
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <div 
      ref={messageRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-6 opacity-0 pointer-events-none"
    >
      <div className="text-center">
        <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-8xl uppercase leading-[0.9] tracking-tighter text-ln-deep-forest mb-4">
          Always <span className="text-ln-yellow italic font-serif lowercase">Bringing</span>
          <br />
          The <span className="text-ln-deep-forest">Fight.</span>
        </h2>
      </div>
      <img
        ref={signatureRef}
        src="/images/logos-and-signatures/signature.svg"
        alt="Lando Norris Signature"
        className="w-[10rem] md:w-[14rem] h-auto opacity-0"
      />
    </div>
  );
};

export default HeroMessage;

