import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import BackgroundCurve from '../ui/background_curve';
import { horizontalItems, quoteItem } from './horizontal_scroll/data';

const HorizontalScroll: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !viewportRef.current || !trackRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollDistance = () => Math.max(track.scrollWidth - window.innerWidth, 0);

      // Horizontal scroll
      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: 1,
          pin: sectionRef.current,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  useGSAP(() => {
    if (!trackRef.current) return;

    // Animate images on scroll - set initial state first
    const images = trackRef.current.querySelectorAll('.scattered-image');
    gsap.set(images, { opacity: 1 }); // Make visible by default
    
    images.forEach((img, index) => {
      gsap.from(img, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    });
  }, { scope: trackRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-ln-dark text-ln-cream py-24 lg:py-0 overflow-hidden"
    >
      {/* Animated Background Green Curve - Same as Introduction */}
      <BackgroundCurve opacity={15} className="opacity-15" />

      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 20 Q 50 50 100 20" stroke="white" fill="none" />
          <path d="M0 80 Q 50 50 100 80" stroke="white" fill="none" />
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-[10%] left-[5%] w-3 h-3 rounded-full bg-ln-yellow opacity-20 blur-sm animate-pulse pointer-events-none z-5"></div>
      <div className="absolute top-[30%] right-[10%] w-4 h-4 rounded-full bg-ln-yellow opacity-15 blur-sm animate-pulse pointer-events-none z-5" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-[20%] left-[15%] w-2 h-2 rounded-full bg-ln-yellow opacity-25 blur-sm animate-pulse pointer-events-none z-5" style={{ animationDelay: '2s' }}></div>

      {/* Mobile: Vertical Grid */}
      <div className="lg:hidden grid grid-cols-2 gap-4 px-4">
        {horizontalItems.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className={`relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl ${
              index === 2 || index === 5 ? 'col-span-2' : ''
            }`}
          >
            <img
              src={item.image}
              loading="lazy"
              className="w-full h-full object-cover"
              alt={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
              <span className="text-[8px] uppercase font-bold tracking-widest text-ln-yellow mb-1">
                {item.subtitle}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-white">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Horizontal Scroll Viewport */}
      <div ref={viewportRef} className="hidden lg:block lg:h-screen w-full overflow-hidden relative z-10">
        {/* Track that scrolls horizontally */}
        <div
          ref={trackRef}
          className="flex flex-row h-full items-center"
          style={{ width: 'max-content' }}
        >
          {/* Single Scene Container */}
          <div className="relative w-[2000px] h-[1200px] flex-shrink-0" style={{ minWidth: '2000px', position: 'relative' }}>
            {/* Quote Section - Centered Top */}
            <div
              className="absolute z-20 text-center"
              style={{
                top: quoteItem.position.top,
                left: quoteItem.position.left,
                transform: quoteItem.position.transform,
                width: quoteItem.position.width,
              }}
            >
              <p className="font-serif text-2xl lg:text-3xl leading-tight text-ln-cream mb-4">
                It doesn't matter <span className="italic font-bold">where</span> you start, it's <span className="italic font-bold">how</span> you progress from there.
              </p>
              <img
                src="/images/logos-and-signatures/signature.svg"
                loading="lazy"
                className="w-32 mx-auto invert opacity-80"
                alt="Signature"
              />
            </div>

            {/* Scattered Images */}
            {horizontalItems.map((item, index) => (
              <div
                key={index}
                className="scattered-image absolute z-10 hover:z-50 transition-all duration-500 cursor-pointer group opacity-100"
                style={{
                  top: item.position?.top,
                  left: item.position?.left,
                  right: item.position?.right,
                  bottom: item.position?.bottom,
                  width: item.position?.width,
                  height: item.position?.height,
                  transform: `rotate(${item.position?.rotation || 0}deg)`,
                }}
              >
                <div className="relative w-full h-full bg-gray-800 overflow-hidden shadow-2xl border border-white/10 rounded-lg group-hover:scale-105 group-hover:rotate-0 transition-all duration-500">
                  <img
                    src={item.image}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-ln-yellow block mb-1">
                      {item.subtitle}
                    </span>
                    <span className="text-xs uppercase font-bold tracking-widest text-white">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
