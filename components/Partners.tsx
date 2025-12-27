import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Partners: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const logosRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate logos on scroll
            gsap.from(logosRef.current, {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const partners = [
        { name: 'Ralph Lauren', logo: '/assets/ln4-ln4-collab-logo-ralph.svg' },
        { name: 'Playstation', logo: '/assets/ln4-ln4-collab-logo-ps4.svg' },
        { name: 'Quadrant', logo: '/assets/ln4-ln4-collab-logo-quadrant.svg' },
        { name: 'Tumi', logo: '/assets/ln4-ln4-collab-logo-tumi.svg' },
        { name: 'Hilton', logo: '/assets/ln4-ln4-collab-logo-hilton.svg' },
        { name: 'Uber', logo: '/assets/ln4-ln4-collab-logo-uber.svg' },
    ];

    return (
        <section ref={sectionRef} className="w-full py-32 bg-ln-cream border-t border-gray-200 relative overflow-hidden">

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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
                    {partners.map((partner, idx) => (
                        <div 
                            key={idx}
                            ref={el => { logosRef.current[idx] = el }}
                            className="flex justify-center items-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                        >
                            <img 
                                src={partner.logo} 
                                alt={partner.name}
                                loading="lazy" 
                                className="max-h-full max-w-full" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;