'use client';

import { motion } from 'framer-motion';

interface ClientLogoProps {
  name: string;
  letter: string;
  gradientFrom: string;
  gradientTo: string;
  delay?: number;
}

export function ClientLogo({ name, letter, gradientFrom, gradientTo, delay = 0 }: ClientLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center gap-2 group cursor-pointer min-w-[80px]"
    >
      {/* Logo SVG */}
      <div className="relative">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          <defs>
            <linearGradient id={`gradient-${name.replace(/\s/g, '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradientFrom} />
              <stop offset="100%" stopColor={gradientTo} />
            </linearGradient>
            <filter id={`glow-${name.replace(/\s/g, '')}`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer Ring */}
          <circle
            cx="32"
            cy="32"
            r="30"
            stroke={`url(#gradient-${name.replace(/\s/g, '')})`}
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          
          {/* Main Circle */}
          <circle
            cx="32"
            cy="32"
            r="24"
            fill={`url(#gradient-${name.replace(/\s/g, '')})`}
            filter={`url(#glow-${name.replace(/\s/g, '')})`}
            className="transition-all duration-300 group-hover:opacity-90"
          />
          
          {/* Letter */}
          <text
            x="32"
            y="38"
            textAnchor="middle"
            fill="white"
            fontSize="24"
            fontWeight="700"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            {letter}
          </text>
        </svg>
      </div>
      
      {/* Company Name */}
      <span className="text-xs text-stripe-gray/60 font-medium transition-colors duration-300 group-hover:text-stripe-purple whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
}
