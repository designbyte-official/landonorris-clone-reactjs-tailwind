import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AnimatedTextButton from '../ui/animated_text_button';

const MenuButton: React.FC = () => {
  return (
    <button className="group bg-ln-white p-[0.7rem] md:p-[1rem] hover:bg-ln-offwhite transition-colors duration-300 flex items-center justify-center border-none shadow-none cursor-pointer aspect-square rounded-[0.4rem]">
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
      <div className="w-full h-[0.35rem] bg-ln-deep-forest pointer-events-auto"></div>

      <header
        ref={headerRef}
        className="w-full px-[1.5rem] py-[1.2rem] flex justify-between items-center bg-transparent"
      >
        {/* Left Logo - Vertically Stacked */}
        <div ref={logoRef} className="flex-shrink-0 pointer-events-auto leading-[0.85]">
          <a href="/" className="flex flex-col items-start group">
            <span className="font-serif text-[1.8rem] md:text-[2.2rem] text-ln-deep-forest group-hover:text-ln-black transition-colors uppercase tracking-tight">
              LANDO
            </span>
            <span className="font-sans font-black text-[1.8rem] md:text-[2.2rem] text-ln-deep-forest group-hover:text-ln-black transition-colors uppercase tracking-tight">
              NORRIS
            </span>
          </a>
        </div>

        {/* Right Actions */}
        <div ref={actionsRef} className="flex items-center gap-[0.8rem] pointer-events-auto">
          <AnimatedTextButton
            text="Store"
            href="https://store.landonorris.com"
            target="_blank"
            rel="noopener noreferrer"
            icon="/images/logos-icons/cart.svg"
            iconAlt="Cart"
            className="group flex items-center gap-[0.55rem] bg-ln-yellow text-ln-deep-forest px-[1.8rem] py-[1rem] md:px-[2.2rem] md:py-[1.2rem] font-sans font-black uppercase tracking-tight hover:brightness-105 active:scale-95 transition-all duration-300 rounded-[0.6rem] shadow-none border-none"
            iconClassName="w-[1.2rem] h-[1.2rem]"
            textClassName="text-[0.9rem] md:text-[1rem]"
          />
          <MenuButton />
        </div>
      </header>
    </div>
  );
};

export default Header;