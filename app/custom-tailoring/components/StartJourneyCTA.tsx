"use client";
import React from 'react';
import { customTailoringData } from '../data/customTailoringData';

export default function StartJourneyCTA() {
  const data = customTailoringData || {};

  return (
    <section className="w-full bg-white py-20 px-6 border-t border-[#EAE6DF] text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#C5A880] font-bold block">
          {data.ctaTag || "The Atelier Curation"}
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-light tracking-widest text-[#111111] uppercase">
          {data.ctaTitle || "Begin Your Bespoke Narrative"}
        </h2>
        <p className="text-xs md:text-sm text-neutral-500 font-light tracking-wide max-w-md mx-auto leading-relaxed">
          {data.ctaDescription || "Connect directly with our head master-weavers to configure a garment tuned precisely to your measurements."}
        </p>
        <div className="pt-4">
          <a 
            href="#consultation-form" 
            className="inline-block px-10 py-4 bg-[#111111] text-white text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 hover:bg-neutral-800"
          >
            {data.ctaButtonText || "Book Consultation"}
          </a>
        </div>
      </div>
    </section>
  );
}