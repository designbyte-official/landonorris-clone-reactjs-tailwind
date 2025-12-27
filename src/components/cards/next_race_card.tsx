import React from 'react';

interface NextRaceCardProps {
    className?: string;
}

const NextRaceCard: React.FC<NextRaceCardProps> = ({ className }) => {
    return (
        <div className={`hero-info-card ${className}`}>
            <p className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-[#1F2323]/40 mb-[1rem] ml-[0.5rem]">Next Race</p>
            <div
                className="relative w-[11rem] h-[15rem] bg-white border border-[#1F2323]/5 flex flex-col items-center justify-between py-[1.5rem] px-[1rem] shadow-xl"
                style={{ clipPath: 'polygon(0 0, 75% 0, 100% 18%, 100% 100%, 0 100%)' }}
            >
                {/* Circuit Graphics Placeholder */}
                <div className="w-full h-[40%] flex items-center justify-center opacity-70">
                    <svg viewBox="0 0 100 80" className="w-[8rem] h-auto text-[#1F2323]/30" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10,40 C10,20 40,10 70,10 C90,10 90,30 70,30 L50,40 C30,45 15,60 15,70 L40,75 L80,70" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="w-full text-center">
                    <h3 className="text-[0.8rem] font-sans font-black uppercase tracking-tighter mb-[0.25rem] text-[#1F2323]">Melbourne GP</h3>
                    <p className="text-[0.6rem] font-sans font-bold uppercase text-[#1F2323]/50">Australia</p>

                    <div className="mt-[1rem] pt-[1rem] border-t border-[#1F2323]/5">
                        <p className="text-[0.6rem] font-sans font-black uppercase leading-tight tracking-[0.1em] text-[#1F2323]/80">
                            McLaren F1 <br /> Team
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextRaceCard;
