import React, { useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const StoreButton: React.FC = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const letterContainersRef = useRef<(HTMLDivElement | null)[]>([]);
  const text = 'Store';
  
  const letters = useMemo(() => text.split(''), [text]);

  useGSAP(() => {
    // Set initial state for letters
    letterContainersRef.current.forEach((container) => {
      if (!container) return;
      const letter = container.querySelector('.letter-current');
      const letterNext = container.querySelector('.letter-next');
      
      if (letter) {
        gsap.set(letter, {
          y: 0,
          opacity: 1,
        });
      }
      
      if (letterNext) {
        gsap.set(letterNext, {
          y: 20,
          opacity: 0,
        });
      }
    });

    const handleMouseEnter = () => {
      letterContainersRef.current.forEach((container, index) => {
        if (!container) return;
        
        const letter = container.querySelector('.letter-current');
        const letterNext = container.querySelector('.letter-next');
        
        if (letter && letterNext) {
          gsap.to(letter, {
            y: -20,
            opacity: 0,
            duration: 0.4,
            delay: index * 0.05,
            ease: 'power2.in',
          });
          
          gsap.to(letterNext, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: index * 0.05,
            ease: 'power2.out',
          });
        }
      });
    };

    const handleMouseLeave = () => {
      letterContainersRef.current.forEach((container, index) => {
        if (!container) return;
        
        const letter = container.querySelector('.letter-current');
        const letterNext = container.querySelector('.letter-next');
        
        if (letter && letterNext) {
          // Reset letter-next back to below
          gsap.to(letterNext, {
            y: 20,
            opacity: 0,
            duration: 0.3,
            delay: index * 0.03,
            ease: 'power2.in',
          });
          
          // Bring letter-current back from above
          gsap.fromTo(letter,
            {
              y: -20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              delay: index * 0.03,
              ease: 'power2.out',
            }
          );
        }
      });
    };

    const button = buttonRef.current;
    if (button) {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, { scope: buttonRef });

  return (
    <a
      ref={buttonRef}
      href="https://store.landonorris.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-[0.55rem] bg-ln-yellow text-ln-deep-forest px-[1.8rem] py-[1rem] md:px-[2.2rem] md:py-[1.2rem] font-sans font-black uppercase tracking-tight hover:brightness-105 active:scale-95 transition-all duration-300 rounded-[0.6rem] shadow-none border-none"
    >
      <img
        src="/images/logos-icons/cart.svg"
        alt="Cart"
        className="w-[1.2rem] h-[1.2rem]"
      />
      <span className="text-[0.9rem] md:text-[1rem] leading-none inline-flex">
        {letters.map((letter, index) => (
          <div
            key={index}
            ref={(el) => {
              letterContainersRef.current[index] = el;
            }}
            className="inline-block relative overflow-hidden h-[1em]"
          >
            <span className="letter-current inline-block">{letter === ' ' ? '\u00A0' : letter}</span>
            <span className="letter-next absolute top-0 left-0 inline-block">{letter === ' ' ? '\u00A0' : letter}</span>
          </div>
        ))}
      </span>
    </a>
  );
};

const MenuButton: React.FC = () => {
  return (
    <button className="group bg-white p-[0.7rem] md:p-[1rem] hover:bg-ln-offwhite transition-all duration-300 flex items-center justify-center border-none shadow-none cursor-pointer aspect-square rounded-[0.4rem]">
      <div className="flex flex-col gap-[0.35rem] w-[1.4rem] md:w-[1.8rem]">
        <div className="h-[2px] w-[60%] bg-ln-deep-forest self-end transition-all duration-300 group-hover:w-full"></div>
        <div className="h-[2px] w-[60%] bg-ln-deep-forest self-start transition-all duration-300 group-hover:w-full"></div>
      </div>
    </button>
  );
};

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
    })
      .from([logoRef.current, actionsRef.current], {
        y: 20,
        opacity: 0,
        stagger: 0.1,
      }, "-=0.8");
  }, { scope: headerRef });

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Top Accent Line */}
      <div className="w-full h-[0.35rem] bg-[#2D1B1B] pointer-events-auto"></div>

      <header
        ref={headerRef}
        className="w-full px-[1.5rem] py-[1.2rem] flex justify-between items-center bg-transparent"
      >
        {/* Left Logo - Vertically Stacked */}
        <div ref={logoRef} className="flex-shrink-0 pointer-events-auto leading-[0.85]">
          <a href="/" className="flex flex-col items-start group">
            <span className="font-serif text-[1.8rem] md:text-[2.2rem] text-ln-deep-forest group-hover:text-black transition-colors uppercase tracking-tight">
              LANDO
            </span>
            <span className="font-sans font-black text-[1.8rem] md:text-[2.2rem] text-ln-deep-forest group-hover:text-black transition-colors uppercase tracking-tight">
              NORRIS
            </span>
          </a>
        </div>

        {/* Right Actions */}
        <div ref={actionsRef} className="flex items-center gap-[0.8rem] pointer-events-auto">
          <StoreButton />
          <MenuButton />
        </div>
      </header>
    </div>
  );
};

export default Header;