import React from 'react';
import { CornerDownRight } from 'lucide-react';

const TrackMode: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-ln-cream text-ln-dark overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

        {/* On Track - Left Side */}
        <div className="flex flex-col items-center group cursor-pointer relative">

          {/* Typography */}
          <div className="relative mb-12 text-center">
            <span className="absolute -top-8 left-[40%] font-script text-6xl text-ln-yellow z-20 rotate-[-12deg] mix-blend-multiply opacity-90">On</span>
            <h3 className="font-display font-bold text-7xl md:text-[8rem] leading-[0.8] tracking-tighter uppercase relative z-10">
              Track
            </h3>
            <p className="font-sans text-sm text-gray-600 mt-6 max-w-xs mx-auto">
              Most recent results, career stats and photos from trackside.
            </p>
            <div className="mt-4 flex justify-center">
              <button className="w-10 h-10 bg-ln-yellow rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <CornerDownRight size={20} className="text-black" />
              </button>
            </div>
          </div>

          {/* Image - Helmet */}
          <div className="w-full aspect-[4/5] relative">
            <div className="absolute inset-0 bg-gray-200 rounded-sm overflow-hidden transform transition-transform duration-700 group-hover:scale-[1.02]">
              <img src="/assets/ln4-hp-lando-helmet.webp" className="w-full h-full object-cover object-center" alt="Helmet" />
            </div>
            {/* Decorative element */}
            <div className="absolute top-10 -left-10 bg-white p-2 rounded shadow-md z-20 hidden md:block">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold">Lando Norris</span>
              </div>
            </div>
          </div>
        </div>

        {/* Off Track - Right Side */}
        <div className="flex flex-col items-center group cursor-pointer relative mt-12 md:mt-0">

          {/* Typography */}
          <div className="relative mb-12 text-center">
            <span className="absolute -top-10 left-[45%] font-script text-6xl text-ln-yellow z-20 rotate-[5deg] mix-blend-multiply opacity-90">Off</span>
            <div className="flex flex-col items-center">
              <span className="font-serif italic text-6xl md:text-7xl leading-none">OFF</span>
              <h3 className="font-display font-bold text-7xl md:text-[8rem] leading-[0.7] tracking-tighter uppercase relative z-10">
                Track
              </h3>
            </div>
            <p className="font-sans text-sm text-gray-600 mt-6 max-w-xs mx-auto">
              Campaigns, shoots and other such promotional materials for fans.
            </p>
            <div className="mt-4 flex justify-center">
              <button className="w-10 h-10 bg-ln-yellow rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <CornerDownRight size={20} className="text-black" />
              </button>
            </div>
          </div>

          {/* Image - Lifestyle */}
          <div className="w-full aspect-[4/5] relative">
            <div className="absolute inset-0 bg-gray-200 rounded-sm overflow-hidden transform transition-transform duration-700 group-hover:scale-[1.02]">
              <img src="/assets/ln4-hp-lando-head.webp" className="w-full h-full object-cover object-top" alt="Lifestyle" />
            </div>
          </div>
        </div>

      </div>

      {/* Background Graphic Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
        <svg viewBox="0 0 1440 800" fill="none" stroke="black" strokeWidth="0.5">
          <path d="M0 400 Q 720 100 1440 400" />
          <path d="M0 600 Q 720 300 1440 600" />
        </svg>
      </div>
    </section>
  );
};

export default TrackMode;