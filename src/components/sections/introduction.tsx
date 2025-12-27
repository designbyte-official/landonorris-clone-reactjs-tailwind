import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRive } from 'rive-react';
import BackgroundCurve from '../ui/background_curve';

const Introduction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

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
    // Additional animations can be added here if needed
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

      </div>
    </section>
  );
};

export default Introduction;