import React from 'react';

const Partners: React.FC = () => {
    return (
        <section className="w-full py-32 bg-ln-cream border-t border-gray-200 relative overflow-hidden">

            {/* Background Large Script */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none">
                <span className="font-script text-[25vw] text-ln-yellow opacity-90 -rotate-12 block leading-none mix-blend-multiply blur-[1px]">Collabs</span>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                    <h3 className="font-display font-bold text-5xl md:text-6xl uppercase leading-[0.9]">
                        Partners<br />
                        <span className="font-serif font-normal italic lowercase text-4xl">& Campaigns</span>
                    </h3>
                    <p className="max-w-xs text-xs font-sans mt-6 md:mt-0 text-gray-500 leading-relaxed">
                        Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.
                    </p>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center grayscale opacity-80 hover:opacity-100 transition-opacity duration-300">
                    {/* Using extracted SVG URLs */}
                    <div className="flex justify-center items-center h-16">
                        <img src="/assets/ln4-ln4-collab-logo-ralph.svg" alt="Ralph Lauren" className="max-h-full max-w-full" />
                    </div>
                    <div className="flex justify-center items-center h-16">
                        <img src="/assets/ln4-ln4-collab-logo-ps4.svg" alt="Playstation" className="max-h-full max-w-full" />
                    </div>
                    <div className="flex justify-center items-center h-16">
                        <img src="/assets/ln4-ln4-collab-logo-quadrant.svg" alt="Quadrant" className="max-h-full max-w-full" />
                    </div>
                    <div className="flex justify-center items-center h-16">
                        <img src="/assets/ln4-ln4-collab-logo-tumi.svg" alt="Tumi" className="max-h-full max-w-full" />
                    </div>
                    <div className="flex justify-center items-center h-16">
                        <img src="/assets/ln4-ln4-collab-logo-hilton.svg" alt="Hilton" className="max-h-full max-w-full" />
                    </div>
                    <div className="flex justify-center items-center h-16">
                        <img src="/assets/ln4-ln4-collab-logo-uber.svg" alt="Uber" className="max-h-full max-w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;