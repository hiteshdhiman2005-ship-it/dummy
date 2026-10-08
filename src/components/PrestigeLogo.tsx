import React from 'react';
import { motion } from 'motion/react';

interface PrestigeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export default function PrestigeLogo({
  className = '',
  size = 'md',
  showSubtitle = true,
}: PrestigeLogoProps) {
  // Dimensions based on size
  const iconSize = {
    sm: 'h-9 w-9',
    md: 'h-11 w-11',
    lg: 'h-16 w-16',
  }[size];

  const titleSize = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  }[size];

  return (
    <div className={`flex items-center space-x-3.5 group cursor-pointer select-none ${className}`}>
      
      {/* 3D Mechanical Chronometer Emblem */}
      <div className={`relative ${iconSize} shrink-0 transition-transform duration-500 ease-out group-hover:scale-105 active:scale-95`}>
        
        {/* Outer Radiant Glow */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* SVG Watch Escapement & Chronometer Dial */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(37,99,235,0.25)] group-hover:drop-shadow-[0_4px_16px_rgba(37,99,235,0.45)] transition-all duration-500"
        >
          {/* Outer Polished Platinum Ring */}
          <circle
            cx="50"
            cy="50"
            r="46"
            className="fill-none stroke-blue-200/90 dark:stroke-slate-800"
            strokeWidth="3.5"
          />

          {/* Saturated Cobalt Concentric Track */}
          <circle
            cx="50"
            cy="50"
            r="42"
            className="fill-[#0c1322] stroke-blue-500/30"
            strokeWidth="6"
          />

          {/* Chronometric Dial Millisecond Ticks */}
          <g className="stroke-blue-400/40" strokeWidth="1.5">
            <line x1="50" y1="8" x2="50" y2="13" />
            <line x1="50" y1="92" x2="50" y2="87" />
            <line x1="8" y1="50" x2="13" y2="50" />
            <line x1="92" y1="50" x2="87" y2="50" />
            <line x1="20.5" y1="20.5" x2="24" y2="24" />
            <line x1="79.5" y1="20.5" x2="76" y2="24" />
            <line x1="20.5" y1="79.5" x2="24" y2="76" />
            <line x1="79.5" y1="79.5" x2="76" y2="76" />
          </g>

          {/* Master Escapement Cog / Tourbillon Gear - Spinning inside on hover */}
          <g className="origin-center transition-transform duration-[6000ms] cubic-bezier(0.25, 1, 0.5, 1) group-hover:rotate-[360deg] ease-out">
            {/* Gear Body */}
            <circle
              cx="50"
              cy="50"
              r="24"
              className="fill-none stroke-[#2563EB]/50"
              strokeWidth="2"
            />
            
            {/* Gear Teeth */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 50 + 23 * Math.cos(angle);
              const y1 = 50 + 23 * Math.sin(angle);
              const x2 = 50 + 27 * Math.cos(angle);
              const y2 = 50 + 27 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  className="stroke-[#2563EB]"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              );
            })}

            {/* Inner Star Pattern spokes */}
            {[...Array(3)].map((_, i) => {
              const angle = (i * 120 * Math.PI) / 180;
              const x2 = 50 + 24 * Math.cos(angle);
              const y2 = 50 + 24 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={x2}
                  y2={y2}
                  className="stroke-blue-400"
                  strokeWidth="1.5"
                />
              );
            })}
          </g>

          {/* Ruby Jewel Bearing in the Center (Swiss Luxury Signifier) */}
          <circle
            cx="50"
            cy="50"
            r="4.5"
            className="fill-red-500 stroke-white"
            strokeWidth="1"
          />

          {/* Dynamic Swiss Breguet Watch Hands - Sweep fluidly on hover */}
          <g className="origin-center transition-transform duration-1000 group-hover:rotate-[120deg]">
            {/* Hour Hand */}
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="28"
              className="stroke-white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>

          <g className="origin-center transition-transform duration-[2000ms] group-hover:rotate-[280deg]">
            {/* Minute Hand */}
            <line
              x1="50"
              y1="50"
              x2="73"
              y2="50"
              className="stroke-white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Swifter Continuous Seconds Sweeping Hand */}
          <g className="origin-center animate-[spin_5s_linear_infinite]">
            <line
              x1="50"
              y1="62"
              x2="50"
              y2="12"
              className="stroke-[#60a5fa]"
              strokeWidth="1"
            />
            {/* Elegant balance circle on tail */}
            <circle
              cx="50"
              cy="62"
              r="2"
              className="fill-[#60a5fa]"
            />
          </g>
        </svg>

        {/* Floating Mini Sparkle Star Badge */}
        <div className="absolute -top-1 -right-1 bg-[#2563EB] text-white p-0.5 rounded-full border border-blue-400 shadow-lg scale-75 group-hover:scale-100 group-hover:rotate-[15deg] transition-all duration-500">
          <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
          </svg>
        </div>
      </div>

      {/* Brand Letters in Cinzel Luxury Serif Font */}
      <div className="flex flex-col select-none text-left leading-none">
        <div className="flex items-center">
          <span className={`font-serif ${titleSize} font-bold tracking-[0.06em] text-white group-hover:text-amber-400 transition-colors duration-300`}>
            PRESTIGE
          </span>
          {/* Golden Gilded Trademark Pin */}
          <span className="text-[9px] font-sans font-extrabold text-[#2563EB] ml-0.5 tracking-tighter align-super">
            ®
          </span>
        </div>
        
        {showSubtitle && (
          <span className="text-[9px] tracking-[0.24em] font-sans font-semibold uppercase text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mt-1 pl-[2px]">
            GENÈVE • TIME
          </span>
        )}
      </div>

    </div>
  );
}
