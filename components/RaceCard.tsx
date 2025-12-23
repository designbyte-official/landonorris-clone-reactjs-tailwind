import React from 'react';

const RaceCard: React.FC = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-6 z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        {/* Main Card */}
        <div className="w-24 h-40 border border-black/80 rounded-lg p-2 flex flex-col items-center justify-between bg-white/50 backdrop-blur-sm relative">
            <span className="text-[8px] font-sans font-bold uppercase tracking-wider text-gray-500 w-full text-left">Next Race</span>
            
            {/* Track Shape */}
            <div className="w-full flex-1 flex items-center justify-center py-2">
                <svg viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="1.5" className="w-12 h-12">
                   <path d="M20 70 C 20 50, 40 30, 70 30 C 90 30, 90 50, 70 50 L 50 60 L 30 70 Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <div className="w-full border-t border-black/20 pt-1">
                <span className="text-[8px] font-bold font-display uppercase block text-center">Melbourne GP</span>
            </div>
        </div>

        {/* Laurel Wreath Badge */}
        <div className="w-24 flex flex-col items-center text-center opacity-70">
            <div className="w-12 h-12 flex items-center justify-center border border-black/20 rounded-full mb-1">
                 {/* Helmet Icon */}
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                     <path d="M12 4C7 4 3 8 3 13V19C3 20 4 21 5 21H19C20 21 21 20 21 19V13C21 8 17 4 12 4Z" />
                     <path d="M3 13H21" />
                 </svg>
            </div>
            <p className="text-[8px] font-sans font-bold uppercase leading-tight">McLaren F1<br/>Since 2019</p>
        </div>
      </div>
    </div>
  );
};

export default RaceCard;