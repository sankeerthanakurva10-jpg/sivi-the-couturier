"use client";
import React from 'react';
import { fabricEducationList } from '../data/handloomData';

export default function FabricEducation() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 border-t border-[#EAE6DF]">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-light tracking-[0.2em] text-black uppercase">TEXTILE EDUCATION</h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fabricEducationList.map((fab) => (
            <div key={fab.id} className="p-8 md:p-12 bg-white border border-[#EAE6DF] rounded-sm flex flex-col">
              <h3 className="text-lg font-serif tracking-[0.15em] uppercase text-black mb-6 pb-2 border-b border-neutral-100 font-medium">{fab.name}</h3>
              <div className="space-y-4 text-xs tracking-wide">
                <div className="grid grid-cols-4 gap-2"><span className="font-semibold uppercase text-neutral-400 text-[10px]">TACTILE FEEL</span><span className="col-span-3 text-[#333333]">{fab.feel}</span></div>
                <div className="grid grid-cols-4 gap-2"><span className="font-semibold uppercase text-neutral-400 text-[10px]">TEXTURE MESH</span><span className="col-span-3 text-[#333333]">{fab.texture}</span></div>
                <div className="grid grid-cols-4 gap-2"><span className="font-semibold uppercase text-neutral-400 text-[10px]">UTILITY TASK</span><span className="col-span-3 text-[#333333]">{fab.benefits}</span></div>
                <div className="grid grid-cols-4 gap-2"><span className="font-semibold uppercase text-neutral-400 text-[10px]">CRAFT PATH</span><span className="col-span-3 text-[#555555] italic">{fab.craftsmanship}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}