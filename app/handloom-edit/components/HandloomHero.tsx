"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { handloomHeroContent } from '../data/handloomData';

export default function HandloomHero() {
  const { media, title, subtitle, buttonText } = handloomHeroContent;

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-[#FAF9F6] overflow-hidden flex items-center justify-center">
      
      {/* Dynamic Content Factory Core */}
      <div className="absolute inset-0 w-full h-full">
        {media.type === 'video' ? (
          <video 
            key={media.url}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src={media.url} type="video/mp4" />
          </video>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={media.url} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        )}
        
        {/* Soft, rich editorial overlay shadow */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Narrative Typography Stream */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 pb-24 z-10 text-white">
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "0.15em", y: 30 }} 
          animate={{ opacity: 1, letterSpacing: "0.25em", y: 0 }} 
          transition={{ duration: 1.2 }} 
          className="text-4xl md:text-7xl font-serif font-light tracking-[0.25em] mb-4 uppercase"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }} 
          className="text-xs md:text-sm font-serif tracking-[0.2em] mb-8 text-neutral-200"
        >
          {subtitle}
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.8 }} 
          className="px-10 py-3.5 bg-white text-black text-xs tracking-[0.2em] font-medium uppercase border border-white hover:bg-transparent hover:text-white transition-all duration-500"
        >
          {buttonText}
        </motion.button>
      </div>
    </section>
  );
}