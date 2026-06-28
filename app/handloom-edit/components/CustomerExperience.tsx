"use client";
import React from 'react';
import { handloomTestimonials } from '../data/handloomData';

export default function CustomerExperience() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#C5A880] font-bold block mb-4">PATRON NOTEBOOK</span>
        <h2 className="text-xl md:text-2xl font-serif font-light tracking-[0.2em] text-black mb-12 uppercase">COLLECTIVE PERSPECTIVES</h2>
        <div className="space-y-12">
          {handloomTestimonials.map((t) => (
            <div key={t.id} className="border-b border-neutral-200/60 pb-8 last:border-0">
              <p className="text-sm md:text-lg font-serif font-light italic tracking-wide text-neutral-800 mb-4">"{t.quote}"</p>
              <span className="text-[10px] tracking-[0.2em] uppercase text-black font-semibold font-sans">{t.author}</span>
              <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-sans font-light ml-2">— {t.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}