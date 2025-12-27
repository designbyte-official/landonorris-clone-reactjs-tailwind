import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Shop: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });

      // Image animation
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-ln-cream text-ln-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div ref={textRef} className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest">Lando Store</span>
            </div>
            <h2 className="font-display font-bold text-7xl md:text-9xl tracking-tighter uppercase leading-[0.85] mb-8">
              New In:<br />
              LN4 Racing
            </h2>
            <p className="font-sans text-gray-600 max-w-md mb-8">
              A collection built for performance and speed, combining classic motorsport aesthetics & modern craftsmanship.
            </p>
            <a href="#" className="group inline-flex items-center gap-2 bg-ln-yellow text-black px-6 py-3 font-bold uppercase text-sm hover:bg-black hover:text-ln-yellow transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Visit The Store <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Image Collage */}
          <div ref={imageRef} className="relative h-[500px] md:h-[600px] w-full">
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[85%] md:w-[80%] h-[75%] md:h-[80%] bg-gray-200 z-10 rounded-lg overflow-hidden shadow-xl">
              <img src="/images/horizontal/victory-lane.webp" loading="lazy" className="w-full h-full object-cover" alt="Merch Main" />

              {/* Script Overlay */}
              <div className="absolute -bottom-6 md:-bottom-10 -left-10 md:-left-20 font-script text-6xl md:text-8xl text-blue-300 drop-shadow-lg z-20 -rotate-12 mix-blend-multiply">
                Lando
              </div>
            </div>

            {/* Secondary Image */}
            <div className="absolute bottom-0 left-0 w-[45%] md:w-[40%] h-[35%] md:h-[40%] bg-gray-300 z-20 border-4 border-white rounded-lg overflow-hidden shadow-xl">
              <img src="/images/helmets/asset 1.webp" loading="lazy" className="w-full h-full object-cover" alt="Merch Detail" />
            </div>

            {/* Sticker Graphic */}
            <div className="absolute top-6 md:top-10 left-6 md:left-10 w-20 h-20 md:w-24 md:h-24 bg-ln-yellow rounded-full flex items-center justify-center -rotate-12 z-30 shadow-lg">
              <span className="font-display font-bold text-lg md:text-xl text-center leading-none">LN4<br />DROP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;