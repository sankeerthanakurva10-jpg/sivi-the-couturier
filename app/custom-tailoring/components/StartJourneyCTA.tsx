"use client";
import React from 'react';
import { startJourneyData } from '../data/customTailoringData';

export default function StartJourneyCTA() {
  const data = startJourneyData || {};

  return (
    <section className="w-full bg-white py-20 px-6 border-t border-[#EAE6DF] text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-serif font-light tracking-widest text-[#111111] uppercase">
          {data.title || "Start Your Journey"}
        </h2>
        <p className="text-xs md:text-sm text-neutral-500 font-light tracking-wide max-w-md mx-auto leading-relaxed">
          {data.description}
        </p>
        <div className="pt-4">
          <a 
            href="#consultation-form" 
            className="inline-block px-10 py-4 bg-[#111111] text-white text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 hover:bg-neutral-800"
          >
            {data.ctaText || "BOOK A CONSULTATION"}
          </a>
        </div>
      </div>
    </section>
  );
}