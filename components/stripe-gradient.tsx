'use client';

import { useEffect, useRef } from 'react';

interface StripeGradientProps {
  colors?: string[];
  className?: string;
}

export function StripeGradient({ 
  colors = ['#a960ee', '#ff333d', '#90e0ff', '#ffcb57'],
  className = '' 
}: StripeGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
    };

    const gradientStops = colors.map(hex => hexToRgb(hex));

    const draw = () => {
      time += 0.002;
      
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const numPoints = gradientStops.length;
      const segmentWidth = width / (numPoints - 1);

      for (let i = 0; i < numPoints - 1; i++) {
        const offset = (time * 50 + i * (width / numPoints)) % width;
        
        const x1 = (i * segmentWidth + offset) % (width + segmentWidth) - segmentWidth;
        const x2 = x1 + segmentWidth * 2;

        const gradient = ctx.createLinearGradient(x1, 0, x2, height);
        
        for (let j = 0; j <= 4; j++) {
          const t = j / 4;
          const colorIndex = Math.floor(lerp(i, i + 1, t));
          const colorIndex2 = (colorIndex + 1) % numPoints;
          const localT = (t * numPoints) % 1;
          
          const c1 = gradientStops[colorIndex];
          const c2 = gradientStops[colorIndex2];
          
          const r = Math.floor(lerp(c1.r, c2.r, localT));
          const g = Math.floor(lerp(c1.g, c2.g, localT));
          const b = Math.floor(lerp(c1.b, c2.b, localT));
          
          gradient.addColorStop(t, `rgb(${r}, ${g}, ${b})`);
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}
