"use client";
import React from 'react';
import { mainCollectionMeta } from '../data/collectionsData';

export default function CollectionIntro() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 md:py-28 px-6 text-center border-b border-[#EAE6DF]">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="text-[10px] tracking-[0.35em] text-[#C5A880] font-bold uppercase font-sans block">
          The Sivi Manifesto
        </span>
        <h2 className="text-xl md:text-2xl font-serif font-light text-[#111111] leading-relaxed tracking-wide max-w-2xl mx-auto">
          &ldquo;{mainCollectionMeta.description}&rdquo;
        </h2>
        <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-6" />
      </div>
    </section>
  );
}