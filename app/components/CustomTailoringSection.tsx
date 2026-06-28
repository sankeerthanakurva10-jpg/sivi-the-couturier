"use client";
import React from 'react';
import { featuredCollections } from '../data/homepageData';

export default function CustomTailoringSection() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 border-t border-[#EAE6DF]">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif tracking-[0.15em] uppercase text-[#111111] mb-2">FEATURED CURATIONS</h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {featuredCollections.map((col) => (
            <a href={col.link} key={col.id} className="group block overflow-hidden relative rounded-xl">
              <div className="aspect-[3/4] w-full overflow-hidden relative bg-neutral-100">
                <img src={col.imageUrl} alt={col.title} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 flex justify-between items-center px-1">
                <h3 className="text-xs tracking-[0.2em] font-medium text-[#111111] uppercase">{col.title}</h3>
                <span className="text-xs text-[#888888]">→</span>
              </div>
            </a>
          ))}
        </div>
        <div className="w-full bg-white border border-[#EAE6DF] rounded-2xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.3em] font-bold text-[#C5A880] uppercase">Atelier Services</span>
            <h2 className="text-3xl font-serif text-[#111111] tracking-wide">MADE TO MEASURE & COUTURE</h2>
            <p className="text-sm text-[#666666] font-light leading-relaxed tracking-wide">Experience the luxury of customized couture tailoring executed built explicitly around your unique configurations.</p>
            <div className="pt-4">
              <a href="/consultation" className="inline-block px-8 py-3.5 bg-[#111111] text-white text-[11px] font-medium tracking-[0.2em] uppercase">BOOK CONSULTATION</a>
            </div>
          </div>
          <div className="h-[400px] rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1200&auto=format&fit=crop" alt="Bespoke Tailoring" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}