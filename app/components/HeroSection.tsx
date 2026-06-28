"use client";
import React, { useState } from 'react';
import { heroSections } from '../data/homepageData';

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const current = heroSections[index];

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-[#FAF9F6] overflow-hidden">  
      <div className="w-full h-full relative">
        {current.type === 'video' ? (
          <video 
            src={current.mediaUrl} 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover" 
          />
        ) : (
          <img 
            src={current.mediaUrl} 
            alt={current.collectionName} 
            className="w-full h-full object-cover" 
          />
        )}
        
        {/* Editorial Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
        
        {/* Central Overlay Copy */}
        <div className="absolute inset-x-0 bottom-16 md:bottom-24 z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.25em] mb-4 font-serif uppercase">
            {current.collectionName}
          </h1>
          <p className="text-xs md:text-sm tracking-widest font-light leading-relaxed mb-8 text-neutral-200 max-w-2xl font-sans">
            {current.description}
          </p>
          <a 
            href={current.buttonLink} 
            className="px-8 py-3 bg-white text-black text-xs font-medium tracking-[0.2em] uppercase border border-white hover:bg-transparent hover:text-white transition-all duration-300"
          >
            {current.buttonText}
          </a>
        </div>
        
        {/* Slider Controls */}
        <button 
          onClick={() => setIndex((index - 1 + heroSections.length) % heroSections.length)} 
          className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm z-20 hover:bg-white hover:text-black transition-all"
        >
          ‹
        </button>
        <button 
          onClick={() => setIndex((index + 1) % heroSections.length)} 
          className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm z-20 hover:bg-white hover:text-black transition-all"
        >
          ›
        </button>
      </div>
    </section>
  );
}