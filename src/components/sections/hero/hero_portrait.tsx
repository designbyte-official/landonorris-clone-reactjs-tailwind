import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import * as PIXI from 'pixi.js';

interface HeroPortraitProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const HeroPortrait: React.FC<HeroPortraitProps> = ({ containerRef }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<PIXI.Application | null>(null);
  const initializedRef = useRef<boolean>(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current || initializedRef.current) return;
    if (appRef.current) return; // Already initialized

    initializedRef.current = true;

    // PixiJS 3D Depth Map Effect
    let app: PIXI.Application | null = null;
    let cleanupFn: (() => void) | null = null;

    const initPixi = async () => {

      app = new PIXI.Application();
      appRef.current = app;
      await app.init({
        antialias: true,
        backgroundAlpha: 0,
        resizeTo: canvasRef.current || undefined,
        width: 1200,
        height: 1200,
      });

      if (canvasRef.current && app.canvas && !canvasRef.current.contains(app.canvas)) {
        canvasRef.current.appendChild(app.canvas);
      }

      const diffuseTex = await PIXI.Assets.load('/images/hero/diffuse.webp');
      const depthTex = await PIXI.Assets.load('/images/hero/depth.webp');

      const container = new PIXI.Container();
      app.stage.addChild(container);

      const diffuseSprite = new PIXI.Sprite(diffuseTex);
      const depthSprite = new PIXI.Sprite(depthTex);

      // Aspect ratio handling - increased scale for wider image
      const scale = (app.renderer.height * 1.1) / diffuseSprite.height;
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

      let targetX = 0;
      let targetY = 0;
      let waveOffset = 0;

      // Continuous liquid wave animation - more subtle
      const animateLiquid = () => {
        waveOffset += 0.015; // Slower
        
        // Subtle wave patterns
        const wave1X = Math.sin(waveOffset) * 8; // Reduced from 20
        const wave1Y = Math.cos(waveOffset * 0.7) * 6; // Reduced from 15
        const wave2X = Math.sin(waveOffset * 1.3) * 5; // Reduced from 12
        const wave2Y = Math.cos(waveOffset * 0.9) * 4; // Reduced from 10
        
        // Combine mouse position with waves
        const finalX = targetX + wave1X + wave2X;
        const finalY = targetY + wave1Y + wave2Y;
        
        // Smooth interpolation for liquid feel
        displacementFilter.scale.x += (finalX - displacementFilter.scale.x) * 0.08; // Slower interpolation
        displacementFilter.scale.y += (finalY - displacementFilter.scale.y) * 0.08;
      };

      // Use GSAP ticker instead of requestAnimationFrame
      gsap.ticker.add(animateLiquid);

      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const { clientX, clientY } = e;
        
        // Calculate target position - more subtle movement
        targetX = ((clientX - rect.left) / rect.width - 0.5) * 40; // Reduced from 80
        targetY = ((clientY - rect.top) / rect.height - 0.5) * 25; // Reduced from 50
      };

      // Add subtle ripple effect on mouse click
      const handleMouseClick = (e: MouseEvent) => {
        if (!containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const { clientX, clientY } = e;
        const clickX = ((clientX - rect.left) / rect.width - 0.5) * 40;
        const clickY = ((clientY - rect.top) / rect.height - 0.5) * 25;
        
        // Create subtle ripple effect
        gsap.fromTo(displacementFilter.scale,
          {
            x: clickX,
            y: clickY,
          },
          {
            x: clickX + 15, // Reduced from 30
            y: clickY + 15, // Reduced from 30
            duration: 0.8,
            ease: 'power2.out',
            yoyo: true,
            repeat: 1,
          }
        );
      };

      // Add event listeners
      if (containerRef.current) {
        containerRef.current.addEventListener('mousemove', handleMouseMove);
        containerRef.current.addEventListener('click', handleMouseClick);
      }
      setImagesLoaded(true);

      cleanupFn = () => {
        gsap.ticker.remove(animateLiquid);
        if (containerRef.current) {
          containerRef.current.removeEventListener('mousemove', handleMouseMove);
          containerRef.current.removeEventListener('click', handleMouseClick);
        }
        if (app) {
          app.destroy(true, { children: true, texture: true });
          appRef.current = null;
          initializedRef.current = false;
        }
      };
    };

    initPixi();

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <div className="relative z-20 h-full flex items-end w-full max-w-[100rem]">
      <div
        ref={canvasRef}
        className="w-full h-full flex items-end justify-center select-none pointer-events-none"
      />
    </div>
  );
};

export default HeroPortrait;

