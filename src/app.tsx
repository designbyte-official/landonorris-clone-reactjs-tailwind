import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/layout/header';
import Hero from './components/sections/hero';
import RaceCard from './components/cards/race_card';
import BackgroundLines from './components/ui/background_lines';
import Introduction from './components/sections/introduction';
import TrackMode from './components/sections/track_mode';
import Helmets from './components/sections/helmets';
import Shop from './components/sections/shop';
import Partners from './components/sections/partners';
import CTA from './components/sections/cta';
import Footer from './components/layout/footer';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // Reveal animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.loader-overlay', {
      height: 0,
      duration: 1.2,
      ease: 'power4.inOut',
      delay: 0.2
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-ln-cream text-ln-dark overflow-x-hidden selection:bg-ln-yellow selection:text-black scroll-smooth">

      {/* Intro Loader Overlay */}
      <div className="loader-overlay fixed inset-0 bg-ln-yellow z-[100] flex items-center justify-center overflow-hidden">
        <h1 className="font-display font-bold text-6xl md:text-9xl tracking-tighter text-black uppercase animate-pulse">
          LN4
        </h1>
      </div>

      {/* Global Background Graphics */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply">
        <BackgroundLines />
      </div>

      <Header />
      <RaceCard />

      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <Introduction />
        <TrackMode />
        <Helmets />
        <Shop />
        <Partners />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;