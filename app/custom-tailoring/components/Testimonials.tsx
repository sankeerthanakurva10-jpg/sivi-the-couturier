"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/customTailoringData';

export default function Testimonials() {
  const list = testimonials || [];

  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 border-t border-[#EAE6DF]">
      <div className="max-w-[1400px] mx-auto text-center">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-bold block mb-2">Patron Curation</span>
        <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase font-light text-black mb-12">Atelier Voices</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {list.map((item: any) => (
            <div
              key={item.id}
              className="p-8 bg-white border border-[#EAE6DF] rounded-sm text-center shadow-xs flex flex-col justify-between"
            >
              <p className="text-xs md:text-sm italic font-serif text-neutral-600 tracking-wide leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}