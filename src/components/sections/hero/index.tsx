import React, { useRef } from 'react';
import NextRaceCard from '../../cards/next_race_card';
import BackgroundCurve from '../../ui/background_curve';
import WaterRipple from '../../ui/water_ripple';
import HeroLogo from './hero_logo';
import HeroFloatingElements from './hero_floating_elements';
import HeroMessage from './hero_message';
import HeroPortrait from './hero_portrait';
import { useHeroScrollAnimations } from './hero_scroll_animations';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Apply scroll animations
  useHeroScrollAnimations({ containerRef, contentRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[50rem] flex items-end justify-center overflow-hidden bg-ln-cream"
    >
      {/* Animated Background Green Curve */}
      <BackgroundCurve />

      {/* Next Race Sidebar Card */}
      <NextRaceCard className="absolute left-[3rem] bottom-[4rem] z-20 hidden lg:block" />

      {/* Top Center Logo */}
      <HeroLogo />

      {/* Floating Playful Elements */}
      <HeroFloatingElements />

      {/* Main Composition */}
      <div ref={contentRef} className="relative z-10 w-full max-w-[90rem] h-full flex items-end justify-center px-[1rem]">
        {/* Water Ripple Effect Canvas */}
        <WaterRipple />

        {/* Lando Portrait - PixiJS Displacement Effect */}
        <HeroPortrait containerRef={containerRef} />

        {/* Scroll Message with Signature */}
        <HeroMessage containerRef={containerRef} />
      </div>
    </section>
  );
};

export default Hero;

