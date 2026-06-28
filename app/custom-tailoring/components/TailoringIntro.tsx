"use client";
import React from 'react';
// Import your custom tailoring data safely
import { customTailoringData } from '../data/customTailoringData';

export default function TailoringIntro() {
  // Safeguard the data variable so it never reads properties of undefined
  const data = customTailoringData || {};

  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 max-w-[1200px] mx-auto text-center flex flex-col items-center">
      <span className="text-xs tracking-[0.3em] text-neutral-400 uppercase font-medium mb-4 font-sans">
        {data.introTag || "The Atelier Experience"}
      </span>
      
      {/* FIXED: Using clean fallbacks safely handles empty data fields */}
      <h2 className="text-4xl md:text-6xl text-neutral-900 font-serif font-light tracking-wide leading-tight mb-4">
        {data.heading || "Timeless Curation"}
      </h2>
      
      <h3 className="text-lg text-neutral-500 font-light tracking-wide leading-relaxed italic mb-8 max-w-2xl">
        {data.subheading || "Designed uniquely for your comfort and precise lifestyle movements."}
      </h3>

      {data.introDescription && (
        <p className="text-sm text-neutral-600 font-light max-w-3xl leading-relaxed text-justify md:text-center tracking-wide">
          {data.introDescription}
        </p>
      )}
    </section>
  );
}