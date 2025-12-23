import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="w-full pt-20 pb-0 bg-ln-cream overflow-hidden">

            {/* Social Cards Fan */}
            <div className="relative w-full h-[300px] mb-[-100px] z-0 overflow-hidden">
                <div className="absolute left-1/2 -translate-x-1/2 w-[800px] h-full flex justify-center items-end gap-4 perspective-[1000px]">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-32 h-48 bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-10 border border-white/20"
                            style={{
                                transform: `rotate(${(i - 3) * 10}deg) translateY(${Math.abs(i - 3) * 10}px)`,
                                zIndex: i === 3 ? 10 : 5
                            }}>
                            <img src="/assets/ln-social-img-5.webp" className="w-full h-full object-cover opacity-80" />
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-24 w-full text-center z-20">
                    <h3 className="font-display text-2xl font-bold mb-4">Follow Lando on social media</h3>
                    <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest">
                        <a href="#">Tiktok</a>
                        <a href="#">Instagram</a>
                        <a href="#">Youtube</a>
                        <a href="#">Twitch</a>
                    </div>
                </div>
            </div>

            {/* Main Dark Card */}
            <div className="relative w-[95%] mx-auto bg-gradient-to-b from-[#1a2e1a] to-ln-dark rounded-t-[3rem] pt-32 pb-20 px-6 text-center text-white overflow-hidden z-10">
                {/* Background Curves */}
                <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0 100 Q 50 0 100 100" fill="none" stroke="white" strokeWidth="0.5" />
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    {/* Signature/Script */}
                    <div className="text-ln-yellow mb-4 -rotate-6">
                        <img src="/assets/ln4-hw-signature2.svg" alt="L4 Signature" className="h-16 w-auto opacity-80" />
                    </div>

                    <h2 className="font-display font-bold text-5xl md:text-8xl uppercase leading-[0.9] tracking-tighter mb-12">
                        Always <span className="text-ln-yellow italic font-serif lowercase">Bringing</span><br />
                        The <span className="stroke-text">Fight.</span>
                    </h2>

                    {/* Helmet Image Centered */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
                        <img src="/assets/ln-360-helm-1.webp" className="w-full h-full object-contain drop-shadow-2xl" alt="Helmet" />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="bg-ln-yellow text-black px-8 py-3 rounded-full font-bold uppercase text-xs hover:scale-105 transition-transform flex items-center gap-2">
                            Business Enquiries
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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