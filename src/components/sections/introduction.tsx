import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRive } from 'rive-react';
import BackgroundCurve from '../ui/background_curve';

const Introduction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Rive signature animation
  const { RiveComponent } = useRive({
    src: '/riv-animations/signature.riv',
    autoplay: true,
  });

  // Set up letter animation after refs are populated
  useEffect(() => {
    const timer = setTimeout(() => {
      const letters = lettersRef.current.filter(el => el !== null);
      if (letters.length > 0 && textRef.current) {
        // Set initial invisible state
        gsap.set(letters, { opacity: 0, y: 30 });
        
        // Animate on scroll with fromTo
        gsap.fromTo(letters, 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.03,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 75%",
            }
          }
        );
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []); // Run once after mount

  useGSAP(() => {

    // Animate Images Stagger with rotation and scale
    gsap.from(imagesRef.current, {
      y: 100,
      opacity: 0,
      rotation: (i) => (i % 2 === 0 ? -5 : 5),
      scale: 0.9,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
      }
    });

    // Parallax effect on scroll
    imagesRef.current.forEach((img, i) => {
      if (img) {
        gsap.to(img, {
          y: (i % 2 === 0 ? -20 : 20),
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          }
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-ln-dark text-ln-cream py-24 px-4 overflow-hidden">
      {/* Animated Background Green Curve - Same as Hero */}
      <BackgroundCurve opacity={15} className="opacity-15" />

      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 20 Q 50 50 100 20" stroke="white" fill="none" />
          <path d="M0 80 Q 50 50 100 80" stroke="white" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-[10%] left-[5%] w-3 h-3 rounded-full bg-ln-yellow opacity-20 blur-sm animate-pulse"></div>
        <div className="absolute top-[30%] right-[10%] w-4 h-4 rounded-full bg-ln-yellow opacity-15 blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[20%] left-[15%] w-2 h-2 rounded-full bg-ln-yellow opacity-25 blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Typography Block */}
        <div ref={textRef} className="flex flex-col items-center text-center mb-32">
          <div className="w-16 h-16 border border-ln-yellow rounded-full flex items-center justify-center mb-8 opacity-80">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-ln-yellow">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="1" />
            </svg>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.85] tracking-tight uppercase max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto font-display font-bold">
            {(() => {
              const fullText = "Redefining Limits, Fighting for Wins, Bringing It All In All Ways. Defining A Legacy in Formula 1 On And Off The Track.";
              let letterIndex = 0;
              const parts = [
                { text: "Redefining", className: "font-serif text-ln-yellow font-normal normal-case italic mr-4" },
                { text: "Limits,", className: "stroke-text" },
                { text: "\nFighting for ", className: "" },
                { text: "Wins,", className: "text-ln-yellow" },
                { text: "\nBringing It All In ", className: "" },
                { text: "\nAll Ways. Defining A ", className: "" },
                { text: "Legacy", className: "text-ln-yellow font-serif font-normal normal-case italic" },
                { text: " in Formula 1 ", className: "" },
                { text: "\nOn And Off The ", className: "" },
                { text: "Track.", className: "" },
              ];

              return parts.map((part, partIndex) => {
                const isNewLine = part.text.startsWith('\n');
                const cleanText = isNewLine ? part.text.slice(1) : part.text;
                
                return (
                  <React.Fragment key={partIndex}>
                    {isNewLine && <br />}
                    <span className={part.className}>
                      {cleanText.split('').map((letter, letterIdx) => {
                        const idx = letterIndex++;
                        return (
                          <span
                            key={letterIdx}
                            ref={el => { if (el) lettersRef.current[idx] = el }}
                            className="inline-block"
                          >
                            {letter === ' ' ? '\u00A0' : letter}
                          </span>
                        );
                      })}
                    </span>
                  </React.Fragment>
                );
              });
            })()}
          </h2>

          {/* Rive Animated Signature - Center */}
          <div className="mt-16 w-full flex justify-center">
            <div className="w-[300px] md:w-[400px] h-[100px] md:h-[150px] relative">
              {RiveComponent && <RiveComponent className="w-full h-full" />}
            </div>
          </div>
        </div>

        {/* Mobile Image Gallery */}
        <div className="lg:hidden grid grid-cols-2 gap-4 px-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
            <img src="/images/horizontal/asset 8.webp" loading="lazy" className="w-full h-full object-cover" alt="Qatar" />
            <span className="absolute bottom-2 left-2 text-[8px] uppercase font-bold tracking-widest text-white drop-shadow-md">Qatar, 2024</span>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
            <img src="/images/horizontal/asset 9.webp" loading="lazy" className="w-full h-full object-cover" alt="FIA" />
            <span className="absolute bottom-2 left-2 text-[8px] uppercase font-bold tracking-widest text-white drop-shadow-md">FIA Prize, 2024</span>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl col-span-2">
            <img src="/images/horizontal/asset 10.webp" loading="lazy" className="w-full h-full object-cover" alt="Miami" />
            <span className="absolute bottom-2 left-2 text-[8px] uppercase font-bold tracking-widest text-white drop-shadow-md">Miami GP, 2024</span>
          </div>
        </div>

        {/* Scattered Grid - Updated Images (Desktop) */}
        <div className="relative h-[800px] w-full max-w-7xl mx-auto hidden lg:block">

          {/* 1. Qatar 2024 - Top Left */}
          <div ref={el => { imagesRef.current[0] = el }} className="absolute top-0 left-[10%] w-[280px] h-[350px] rotate-[-3deg] z-10 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer">
            <span className="absolute -top-6 left-0 text-[10px] uppercase font-bold tracking-widest text-gray-400">Qatar, 2024</span>
            <div className="w-full h-full bg-gray-800 overflow-hidden shadow-2xl border border-white/10">
              <img src="/images/horizontal/asset 8.webp" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Qatar" />
            </div>
          </div>

          {/* 2. Quote + Signature - Right Side */}
          <div ref={el => { imagesRef.current[1] = el }} className="absolute top-[10%] right-[15%] w-[350px] text-left z-20">
            <p className="font-serif text-3xl leading-tight text-ln-cream mb-4">
              It doesn't matter <span className="italic font-bold">where</span> you start, it's <span className="italic font-bold">how</span> you progress from there.
            </p>
            <img src="/images/logos-and-signatures/signature.svg" loading="lazy" className="w-32 invert opacity-80" alt="Signature" />
          </div>

          {/* 3. FIA Prize Giving - Center Bottom */}
          <div ref={el => { imagesRef.current[2] = el }} className="absolute bottom-[20%] left-[30%] w-[250px] h-[250px] rotate-[2deg] z-10 hover:z-50 transition-all duration-500 hover:scale-105 hover:rotate-0 cursor-pointer">
            <span className="absolute -top-6 left-0 text-[10px] uppercase font-bold tracking-widest text-gray-400">FIA Prize Giving, 2024</span>
            <div className="w-full h-full bg-gray-800 overflow-hidden shadow-2xl">
              <img src="/images/horizontal/asset 9.webp" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="FIA" />
            </div>
          </div>

          {/* 4. Miami GP - Right Large */}
          <div ref={el => { imagesRef.current[3] = el }} className="absolute top-[40%] right-0 w-[400px] h-[500px] rotate-[-2deg] z-30 border-4 border-ln-yellow/10 hover:rotate-0 hover:scale-105 transition-all duration-500">
            <span className="absolute -top-6 left-0 text-[10px] uppercase font-bold tracking-widest text-gray-400">Miami GP, 2024</span>
            <div className="w-full h-full bg-gray-800 overflow-hidden shadow-2xl">
              <img src="/images/horizontal/asset 10.webp" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Miami" />
            </div>
          </div>

          {/* 5. Podium - Bottom Left Crop */}
          <div ref={el => { imagesRef.current[4] = el }} className="absolute bottom-[-50px] left-0 w-[400px] h-[300px] rotate-2 z-0 opacity-80">
            <img src="/images/horizontal/asset 11.webp" loading="lazy" className="w-full h-full object-cover" alt="Battersea" />
            <span className="absolute bottom-12 right-4 text-[10px] uppercase font-bold tracking-widest text-white drop-shadow-md">Battersea, 2024</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;