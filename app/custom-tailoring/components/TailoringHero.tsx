"use client";
import React from 'react';
import { heroData } from '../data/customTailoringData';

export default function TailoringHero() {
  const data = heroData || {};

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] bg-[#FAF9F6] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          poster={data.fallbackImage}
        >
          <source src={data.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-6 text-white max-w-2xl mt-16">
        <h1 className="text-3xl md:text-5xl font-serif font-light tracking-[0.2em] uppercase mb-4">
          {data.title || "CUSTOM TAILORING"}
        </h1>
        <p className="text-xs md:text-sm font-sans tracking-[0.15em] uppercase text-neutral-200">
          {data.subtitle}
        </p>
      </div>
    </section>
  );
}