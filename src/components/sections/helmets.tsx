import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const helmets = [
  { id: 1, name: 'Season', year: '2025', img: '/images/helmets/asset 23.webp' },
  { id: 2, name: 'Discoball', year: '2025', img: '/images/helmets/asset 27.webp' },
  { id: 3, name: 'Dark Glitter', year: '2025', img: '/images/helmets/asset 29.webp' },
  { id: 4, name: 'Porcelain', year: '2024', img: '/images/helmets/asset 31.webp' },
  { id: 5, name: 'GIF', year: '2024', img: '/images/helmets/asset 33.webp' },
  { id: 6, name: 'Season', year: '2024', img: '/images/helmets/asset 35.webp' },
  { id: 7, name: 'Race', year: '2023', img: '/images/helmets/asset 37.webp' },
  { id: 8, name: 'Chrome', year: '2023', img: '/images/helmets/asset 39.webp' },
  { id: 9, name: 'Beachball', year: '2023', img: '/images/helmets/asset 41.webp' },
];

const Helmets: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current, {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#111] text-white py-32 px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <div className="relative">
            <h2 className="font-display font-bold text-6xl md:text-8xl tracking-tighter uppercase leading-none">
              Helmets<br />
              <span className="text-ln-yellow font-serif font-normal italic lowercase">Hall of Fame</span>
            </h2>
          </div>
          <div className="max-w-md mt-8 md:mt-0 text-gray-400 text-sm font-sans border-l border-gray-700 pl-6">
            <p>From his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helmets.</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-800">
          {helmets.map((helmet, idx) => (
            <div
              key={idx}
              ref={el => { gridRef.current[idx] = el }}
              className="relative aspect-square border-r border-b border-gray-800 group overflow-hidden cursor-pointer bg-ln-dark hover:bg-gradient-to-br hover:from-ln-dark hover:to-gray-900 transition-all duration-500">

              {/* Image */}
              <div className="w-full h-full p-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img
                  src={helmet.img}
                  alt={helmet.name}
                  loading="lazy"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Hover Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Info Label */}
              <div className="absolute bottom-6 right-6 flex items-baseline gap-2 text-sm font-bold uppercase tracking-wider">
                <span className="text-white group-hover:text-ln-yellow transition-colors">{helmet.name}</span>
                <span className="text-ln-yellow">{helmet.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-32 flex flex-col items-center justify-center text-center">
          {/* Laurel Icon */}
          <div className="mb-6 text-ln-yellow opacity-80">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 17a5 5 0 0 0-5-5M12 17a5 5 0 0 1 5-5M5 12h.01M19 12h.01" />
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
            </svg>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-white mb-8">
            See more helmets and highlights<br />from Lando on the track
          </h3>

          <button className="group bg-ln-yellow text-black px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-white transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-2xl">
            View On Track <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Helmets;