import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const centerLogoRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
    })
      .from([logoRef.current, centerLogoRef.current, actionsRef.current], {
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

        {/* Center Logo */}
        <div ref={centerLogoRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto hidden md:block">
          <a href="/" className="block hover:scale-110 transition-transform duration-300">
            <img
              src="/images/logos-and-signatures/intial-logo-loading-icon.svg"
              alt="LN Logo"
              className="w-[1.8rem] h-[2rem] filter brightness-0"
            />
          </a>
        </div>

        {/* Right Actions */}
        <div ref={actionsRef} className="flex items-center gap-[0.8rem] pointer-events-auto">
          <a
            href="https://store.landonorris.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-[0.55rem] bg-ln-yellow text-ln-deep-forest px-[1.2rem] py-[0.7rem] md:px-[1.6rem] md:py-[0.85rem] font-sans font-black uppercase tracking-tight hover:brightness-105 active:scale-95 transition-all duration-300 rounded-[0.6rem] shadow-none border-none"
          >
            <img
              src="/images/logos-icons/cart.svg"
              alt="Cart"
              className="w-[1.2rem] h-[1.2rem] transition-transform duration-300 group-hover:-translate-y-px"
            />
            <span className="text-[0.9rem] md:text-[1rem] leading-none">Store</span>
          </a>

          <button className="group bg-white p-[0.7rem] md:p-[1rem] rounded-[1rem] hover:bg-ln-offwhite transition-all duration-300 flex items-center justify-center border-none shadow-none cursor-pointer">
            <div className="flex flex-col gap-[0.35rem] w-[1.4rem] md:w-[1.8rem]">
              <div className="h-[2px] w-[60%] bg-ln-deep-forest self-end transition-all duration-300 group-hover:w-full"></div>
              <div className="h-[2px] w-[60%] bg-ln-deep-forest self-start transition-all duration-300 group-hover:w-full"></div>
            </div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;