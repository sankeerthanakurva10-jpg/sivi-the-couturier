"use client";
import React from 'react';
import { sustainabilityPillarsList } from '../data/handloomData';

export default function SustainabilitySection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 border-b border-[#EAE6DF]">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="flex flex-col justify-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#C5A880] font-bold block mb-3">CONSCIOUS VALUE</span>
          <h2 className="text-2xl md:text-3xl font-serif font-light tracking-[0.15em] text-black uppercase leading-tight">THE ETHICAL WEAVE ARCHITECTURE</h2>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {sustainabilityPillarsList.map((p) => (
            <div key={p.id} className="space-y-3">
              <h3 className="text-xs font-serif tracking-[0.2em] uppercase font-semibold text-black">{p.title}</h3>
              <p className="text-[12px] text-[#666666] tracking-wide leading-relaxed font-light text-justify">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}