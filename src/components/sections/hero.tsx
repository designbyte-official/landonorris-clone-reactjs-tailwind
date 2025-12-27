import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import NextRaceCard from '../cards/next_race_card';
import * as PIXI from 'pixi.js';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const helmetRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useGSAP(() => {
    // Initial entrance animations
    gsap.from(helmetRef.current, {
      scale: 0.85,
      opacity: 0,
      duration: 2,
      ease: 'elastic.out(1, 0.75)',
      delay: 0.5
    });

    gsap.from(".hero-center-icon", {
      y: '-2rem',
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.2
    });

    // Parallax on Scroll
    gsap.to(".hero-center-icon", {
      y: '-10vh',
      opacity: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    });

    gsap.to(helmetRef.current, {
      y: '-20vh',
      rotate: 15,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      }
    });

    // Background Curve Animation
    gsap.to(".bg-curve", {
      rotate: 360,
      duration: 120,
      repeat: -1,
      ease: "none"
    });

    gsap.to(".bg-curve", {
      scale: 1.2,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // PixiJS 3D Depth Map Effect
    let app: PIXI.Application | null = null;

    const initPixi = async () => {
      app = new PIXI.Application();
      await app.init({
        antialias: true,
        backgroundAlpha: 0,
        resizeTo: canvasRef.current || undefined,
        width: 800,
        height: 1000,
      });

      if (canvasRef.current && app.canvas) {
        canvasRef.current.appendChild(app.canvas);
      }

      const diffuseTex = await PIXI.Assets.load('/images/hero/diffuse.webp');
      const depthTex = await PIXI.Assets.load('/images/hero/depth.webp');

      const container = new PIXI.Container();
      app.stage.addChild(container);

      const diffuseSprite = new PIXI.Sprite(diffuseTex);
      const depthSprite = new PIXI.Sprite(depthTex);

      // Aspect ratio handling
      const scale = (app.renderer.height * 0.9) / diffuseSprite.height;
      diffuseSprite.scale.set(scale);
      depthSprite.scale.set(scale);

      diffuseSprite.anchor.set(0.5, 1);
      depthSprite.anchor.set(0.5, 1);
      diffuseSprite.x = app.renderer.width / 2;
      diffuseSprite.y = app.renderer.height;
      depthSprite.x = app.renderer.width / 2;
      depthSprite.y = app.renderer.height;

      container.addChild(diffuseSprite);
      container.addChild(depthSprite);

      const displacementFilter = new PIXI.DisplacementFilter({
        sprite: depthSprite,
        scale: { x: 0, y: 0 }
      });

      diffuseSprite.filters = [displacementFilter];

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX = (clientX / innerWidth - 0.5) * 50;
        mouseY = (clientY / innerHeight - 0.5) * 30;

        // Update displacement filter scale for liquid effect
        gsap.to(displacementFilter.scale, {
          x: mouseX,
          y: mouseY,
          duration: 1.5,
          ease: 'power2.out'
        });

        // Update helmet parallax
        gsap.to(helmetRef.current, {
          x: mouseX * 0.8,
          y: mouseY * 0.5,
          rotationY: mouseX * 0.2,
          duration: 1.5,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      setImagesLoaded(true);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (app) app.destroy(true, { children: true, texture: true });
      };
    };

    const cleanup = initPixi();
    return () => {
      cleanup.then(fn => fn && fn());
    };
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[50rem] flex items-end justify-center overflow-hidden bg-[#EFEEEC]"
    >
      {/* Animated Background Green Curve */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
        <img
          src="/images/green-svgs/background-curve.svg"
          alt=""
          className="w-[120%] h-[120%] object-contain bg-curve max-w-none"
        />
      </div>

      {/* Next Race Sidebar Card */}
      <NextRaceCard className="absolute left-[3rem] bottom-[4rem] z-20 hidden lg:block" />

      {/* Top Center Logo */}

      {/* Top Center Logo - Icon Style (Now in Hero, not Header) */}
      <div className="absolute top-[3rem] md:top-[4rem] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 hero-center-icon">
        <img
          src="/images/logos-and-signatures/intial-logo-loading-icon.svg"
          alt="LN4"
          className="w-[3rem] md:w-[4rem] h-auto"
        />
      </div>

      {/* Main Composition */}
      <div ref={contentRef} className="relative z-10 w-full max-w-[90rem] h-full flex items-end justify-center px-[1rem]">

        {/* Wireframe Helmet Overlay */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[35rem] md:w-[55rem] h-[35rem] md:h-[55rem] z-30 pointer-events-none mix-blend-multiply opacity-40 select-none">
          <img
            ref={helmetRef}
            src="/images/hero/Norris_Helmet_mat_BaseColor.webp"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Lando Portrait - PixiJS Displacement Effect */}
        <div className="relative z-20 h-full flex items-end">
          <div
            ref={canvasRef}
            className="w-full h-full flex items-end justify-center select-none pointer-events-none"
          />
        </div>

        {/* Floating Signature/Accent */}
        <div className="absolute right-[5rem] top-[20%] z-25 opacity-20 hidden xl:block">
          <img
            src="/images/logos-and-signatures/signature-big.svg"
            alt=""
            className="w-[12rem] h-auto invert"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;