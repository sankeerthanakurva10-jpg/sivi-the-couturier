"use client";
import React from 'react';
import { weavingProcessSteps } from '../data/handloomData';

export default function WeavingProcess() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 border-y border-[#EAE6DF]">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-light tracking-[0.2em] text-black uppercase">THE METICULOUS JOURNEY</h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {weavingProcessSteps.map((step) => (
            <div key={step.id} className="p-8 bg-white/40 backdrop-blur-xs border border-[#EAE6DF] rounded-sm transition-all duration-300 hover:bg-white hover:shadow-md">
              <span className="block text-4xl font-serif font-light text-[#C5A880]/40 mb-4">{step.stepNumber}</span>
              <h3 className="text-sm font-serif tracking-widest uppercase mb-2 font-medium text-black">{step.title}</h3>
              <p className="text-[12px] leading-relaxed text-[#555555] tracking-wide font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}