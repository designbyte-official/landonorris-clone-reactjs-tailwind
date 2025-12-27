import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CTA: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                y: 100,
                rotation: (i) => (i - 2) * 15,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'back.out(1.5)',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full pt-20 pb-0 bg-ln-cream overflow-hidden">

            {/* Social Cards Fan */}
            <div className="relative w-full h-[200px] md:h-[300px] mb-[-80px] md:mb-[-100px] z-0 overflow-hidden">
                <div className="absolute left-1/2 -translate-x-1/2 w-full md:w-[800px] h-full flex justify-center items-end gap-2 md:gap-4 perspective-[1000px] px-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            ref={el => { cardsRef.current[i - 1] = el }}
                            className="w-20 h-32 md:w-32 md:h-48 bg-gray-800 rounded-lg md:rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-10 hover:scale-110 border border-white/20"
                            style={{
                                transform: `rotate(${(i - 3) * 8}deg) translateY(${Math.abs(i - 3) * 8}px)`,
                                zIndex: i === 3 ? 10 : 5
                            }}>
                            <img src="/images/horizontal/asset 8.webp" loading="lazy" className="w-full h-full object-cover opacity-80" alt={`Social ${i}`} />
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-24 w-full text-center z-20">
                    <h3 className="font-display text-2xl font-bold mb-4">Follow Lando on social media</h3>
                    <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-ln-yellow hover:scale-110 transition-all duration-300">Tiktok</a>
                        <a href="#" className="hover:text-ln-yellow hover:scale-110 transition-all duration-300">Instagram</a>
                        <a href="#" className="hover:text-ln-yellow hover:scale-110 transition-all duration-300">Youtube</a>
                        <a href="#" className="hover:text-ln-yellow hover:scale-110 transition-all duration-300">Twitch</a>
                    </div>
                </div>
            </div>

            {/* Main Dark Card */}
            <div className="relative w-[95%] mx-auto bg-gradient-to-b from-[#1a2e1a] to-ln-dark rounded-t-[2rem] md:rounded-t-[3rem] pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 text-center text-white overflow-hidden z-10">
                {/* Background Curves */}
                <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0 100 Q 50 0 100 100" fill="none" stroke="white" strokeWidth="0.5" />
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    {/* Signature/Script */}
                    <div className="text-ln-yellow mb-4 -rotate-6">
                        <img src="/images/logos-and-signatures/signature.svg" loading="lazy" alt="L4 Signature" className="h-16 w-auto opacity-80 invert" />
                    </div>

                    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-8xl uppercase leading-[0.9] tracking-tighter mb-8 md:mb-12">
                        Always <span className="text-ln-yellow italic font-serif lowercase">Bringing</span><br />
                        The <span className="stroke-text">Fight.</span>
                    </h2>

                    {/* Helmet Image Centered */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mb-8 md:mb-12 mx-auto">
                        <img src="/images/helmets/asset 23.webp" loading="lazy" className="w-full h-full object-contain drop-shadow-2xl" alt="Helmet" />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="group bg-ln-yellow text-black px-8 py-3 rounded-full font-bold uppercase text-xs hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
                            Business Enquiries
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    {/* Footer Links Bottom */}
                    <div className="absolute bottom-6 left-0 w-full px-12 flex justify-between text-[10px] text-gray-500 uppercase tracking-widest">
                        <span>© 2025 Lando Norris. All rights reserved</span>
                        <div className="flex gap-4">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;