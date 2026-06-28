"use client";
import React from 'react';
import { handloomCollectionsList } from '../data/handloomData';

export default function HandloomCollections() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-light tracking-[0.2em] text-black uppercase">HANDLOOM ANTHOLOGIES</h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {handloomCollectionsList.map((col) => (
            <div key={col.id} className="group relative flex flex-col bg-white overflow-hidden border border-[#EAE6DF] rounded-sm">
              <div className="w-full h-[45vh] overflow-hidden bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={col.imageUrl} alt={col.title} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-103" />
              </div>
              <div className="p-6 bg-white flex flex-col items-center text-center">
                <h3 className="text-sm font-serif tracking-[0.2em] uppercase font-semibold text-black mb-2">{col.title}</h3>
                <p className="text-[12px] font-light text-[#666666] tracking-wide mb-4 leading-relaxed max-w-xs">{col.description}</p>
                <a href="/shop" className="text-[10px] tracking-widest font-semibold uppercase border-b border-black/40 pb-0.5 hover:border-black transition-colors">EXPLORE</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}