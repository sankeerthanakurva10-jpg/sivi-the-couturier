"use client";
import React from 'react';
import { mainCollectionMeta } from '../data/collectionsData';

export default function CollectionHero() {
  return (
    /* REMOVED mt-[77px] so the media goes perfectly full screen up to the top bar */
    <section className="relative w-full h-[70vh] min-h-[500px] bg-[#FAF9F6] overflow-hidden">
      <div className="w-full h-full relative">
        {/* Full Viewport Widescreen Scaled Editorial Imagery Background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={mainCollectionMeta.heroImage} 
          alt={mainCollectionMeta.title}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Shadow Overlay Mask Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
        
        {/* Centered Editorial Copy Layout Container Block */}
        <div className="absolute inset-x-0 bottom-16 md:bottom-24 z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto text-white">
          <span className="text-[10px] md:text-xs tracking-[0.4em] font-medium uppercase text-neutral-200 mb-3 font-sans">
            Couturier Curations
          </span>
          <h1 className="text-3xl md:text-6xl font-light tracking-[0.2em] mb-4 font-serif uppercase">
            {mainCollectionMeta.title}
          </h1>
          <p className="text-xs md:text-sm tracking-[0.15em] font-light font-serif text-neutral-200 max-w-xl italic mb-6">
            {mainCollectionMeta.tagline}
          </p>
          <div className="w-8 h-[1px] bg-white/60" />
        </div>
      </div>
    </section>
  );
}