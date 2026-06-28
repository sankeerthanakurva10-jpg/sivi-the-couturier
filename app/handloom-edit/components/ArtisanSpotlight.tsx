"use client";
import React from 'react';
import { artisanSpotlightContent } from '../data/handloomData';

export default function ArtisanSpotlight() {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 lg:py-24 px-4 md:px-12">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 overflow-hidden rounded-sm shadow-sm bg-neutral-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={artisanSpotlightContent.imageUrl} alt={artisanSpotlightContent.artisanName} className="w-full h-[50vh] lg:h-[70vh] object-cover hover:scale-101 transition-transform duration-1000" />
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center px-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] mb-3 font-semibold">{artisanSpotlightContent.title}</span>
          <h2 className="text-3xl font-serif font-light tracking-widest text-black mb-1 uppercase">{artisanSpotlightContent.artisanName}</h2>
          <span className="text-[11px] tracking-widest uppercase text-neutral-500 mb-6 font-sans italic">{artisanSpotlightContent.location}</span>
          <p className="text-xs md:text-sm text-[#444444] tracking-wide leading-relaxed font-light mb-4 text-justify">{artisanSpotlightContent.storyText}</p>
          <p className="text-xs md:text-sm text-[#555555] tracking-wide leading-relaxed font-light italic border-l border-[#C5A880] pl-4">{artisanSpotlightContent.craftDetails}</p>
        </div>
      </div>
    </section>
  );
}