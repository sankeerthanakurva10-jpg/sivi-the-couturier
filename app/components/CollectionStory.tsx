"use client";
import React from 'react';
import { mainCollectionMeta } from '../data/collectionsData';

export default function CollectionStory() {
  return (
    <section className="w-full bg-[#FAF9F6] py-24 px-6 md:px-12 lg:px-20 border-t border-[#EAE6DF]">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Informational Copy Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <span className="text-[10px] tracking-[0.35em] font-bold text-[#C5A880] uppercase font-sans">
            Craftsmanship Story
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-light tracking-wide text-[#111111] leading-tight uppercase">
            {mainCollectionMeta.storyTitle}
          </h2>
          <p className="text-sm text-[#555555] font-light leading-relaxed tracking-wide font-sans">
            {mainCollectionMeta.storyDescription}
          </p>
          <div className="pt-4">
            <button className="px-8 py-3.5 bg-[#111111] text-white text-[10px] tracking-[0.25em] font-medium uppercase hover:bg-[#C5A880] transition-colors font-sans">
              DISCOVER THE CRAFT
            </button>
          </div>
        </div>

        {/* Right Asymmetrical Full Frame Graphic Image Layout Card */}
        <div className="lg:col-span-7 h-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-xs">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={mainCollectionMeta.storyImage} 
            alt="Handloom Weaving Craft Artisans"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}