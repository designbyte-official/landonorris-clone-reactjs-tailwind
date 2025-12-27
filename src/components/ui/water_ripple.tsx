import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface WaterRippleProps {
  className?: string;
  style?: React.CSSProperties;
}

const WaterRipple: React.FC<WaterRippleProps> = ({ className = '', style }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get dimensions from container
    const getDimensions = () => {
      const rect = container.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height
      };
    };

    // Set canvas size
    const resizeCanvas = () => {
      const { width, height } = getDimensions();
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();

    // Water ripple data
    const ripples: Array<{ x: number; y: number; radius: number; life: number; maxRadius: number }> = [];

    const drawRipples = () => {
      const { width, height } = getDimensions();
      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 0.2;

      ripples.forEach((ripple, index) => {
        ripple.radius += 2;
        ripple.life -= 0.02;

        if (ripple.life <= 0 || ripple.radius > ripple.maxRadius) {
          ripples.splice(index, 1);
          return;
        }

        // Create gradient for ripple
        const gradient = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          ripple.radius - 20,
          ripple.x,
          ripple.y,
          ripple.radius
        );
        
        const opacity = ripple.life * 0.3;
        gradient.addColorStop(0, `rgba(210, 255, 0, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(210, 255, 0, ${opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(210, 255, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(drawRipples);
    };

    // Add ripple on mouse move (occasionally)
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.98) {
        const rect = container.getBoundingClientRect();
        ripples.push({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          radius: 0,
          life: 1,
          maxRadius: 150
        });
      }
    };

    // Add ripple on click
    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        life: 1,
        maxRadius: 200
      });
    };

    // Auto ripples
    const autoRipple = () => {
      if (ripples.length < 2) {
        const { width, height } = getDimensions();
        ripples.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 0,
          life: 1,
          maxRadius: 120
        });
      }
      setTimeout(autoRipple, 3000 + Math.random() * 3000);
    };

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
    };

    // Start animation
    drawRipples();
    autoRipple();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 15, ...style }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'overlay' }}
      />
    </div>
  );
};

export default WaterRipple;
