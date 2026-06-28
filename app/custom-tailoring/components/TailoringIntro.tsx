"use client";
import React from 'react';
import { introData } from '../data/customTailoringData';

export default function TailoringIntro() {
  const data = introData || {};

  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 max-w-[1200px] mx-auto text-center flex flex-col items-center">
      <span className="text-xs tracking-[0.3em] text-neutral-400 uppercase font-medium mb-4 font-sans">
        The Atelier Experience
      </span>
      <h2 className="text-4xl md:text-6xl text-neutral-900 font-serif font-light tracking-wide leading-tight mb-4">
        {data.heading || "Bespoke Creation"}
      </h2>
      <p className="text-sm text-neutral-600 font-light max-w-3xl leading-relaxed tracking-wide">
        {data.description || "Tailored down to the individual thread layer to follow your precise movements naturally."}
      </p>
    </section>
  );
}