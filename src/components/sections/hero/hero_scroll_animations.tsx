import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface HeroScrollAnimationsProps {
  containerRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
}

export const useHeroScrollAnimations = ({ containerRef, contentRef }: HeroScrollAnimationsProps) => {
  useGSAP(() => {
    if (!containerRef.current || !contentRef.current) return;

    // Initial entrance animations
    gsap.from(".hero-center-icon", {
      y: '-2rem',
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.2
    });

    // Pin hero section and zoom out effect
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=200%',
      pin: true,
      anticipatePin: 1,
    });

    // Zoom out content on scroll
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        scale: 0.6,
        opacity: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
        }
      });
    }

    // Logo fade away at top
    gsap.to(".hero-center-icon", {
      y: '-15vh',
      opacity: 0,
      scale: 0.7,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'top+=200 top',
        scrub: 1,
      }
    });
  }, { scope: containerRef });
};

