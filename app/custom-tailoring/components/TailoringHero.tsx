"use client";
import React from 'react';
// Make sure this import matches your data file structure exactly!
import { customTailoringData } from '../data/customTailoringData';

export default function TailoringHero() {
  // If your data file exports an object directly, we read it. Otherwise, we fallback to elegant defaults.
  const data = customTailoringData || {};

  // Premium placeholder strings to ensure zero runtime screen crashes
  const videoSrc = data.videoUrl || "https://assets.mixkit.co/videos/preview/mixkit-womans-feet-walking-in-a-silky-skirt-43285-large.mp4";
  const posterImg = data.fallbackImage || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] bg-[#FAF9F6] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          /* FIXED: Adding the conditional check safeguards against undefined properties */
          poster={posterImg}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-6 text-white max-w-2xl mt-16">
        <h1 className="text-3xl md:text-5xl font-serif font-light tracking-[0.2em] uppercase mb-4">
          {data.heroTitle || "Bespoke Atelier"}
        </h1>
        <p className="text-xs md:text-sm font-sans tracking-[0.15em] uppercase text-neutral-200">
          {data.heroSubtitle || "Crafted to Your Exact Proportions"}
        </p>
      </div>
    </section>
  );
}