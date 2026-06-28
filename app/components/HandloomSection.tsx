"use client";
import React from 'react';

export default function HandloomSection() {
  return (
    <section className="w-full bg-[#FAF9F6] py-24 px-6 md:px-16 lg:px-24 border-t border-[#EAE6DF]">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <span className="text-[11px] tracking-[0.3em] font-medium text-[#C5A880] uppercase">Handloom Heritage</span>
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wide text-[#111111] leading-tight">Preserving Legacies Through Every Weave</h2>
          <p className="text-sm text-[#555555] font-light leading-relaxed tracking-wide">Sivi the Couturier supports local multi-generational weaving clusters across India. Each piece is born from pure yarn organically dyed and slow-crafted on ancestral handlooms.</p>
          <div className="pt-4">
            <a href="/artisans" className="px-8 py-3.5 bg-[#111111] text-white text-[11px] font-medium tracking-[0.2em] uppercase">DISCOVER THE ARTISANS</a>
          </div>
        </div>
        <div className="lg:col-span-7 relative h-[500px] md:h-[650px] w-full rounded-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop" alt="Handloom Craftsmanship" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}