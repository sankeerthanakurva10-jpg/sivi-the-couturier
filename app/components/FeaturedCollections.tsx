"use client";
import React from 'react';
import { featuredCollectionsList } from '../data/collectionsData';

export default function FeaturedCollections() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-4 md:px-12 border-b border-[#EAE6DF]">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-[11px] tracking-[0.3em] font-medium text-[#888888] uppercase font-sans">
            Explore Tiers
          </h3>
          <h2 className="text-2xl md:text-3xl font-serif font-light tracking-widest text-[#111111] mt-2 uppercase">
            DESIGNER EDITS
          </h2>
          <div className="w-8 h-[1px] bg-[#C5A880] mx-auto mt-4" />
        </div>

        {/* 4-Column Luxury Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCollectionsList.map((collection) => (
            <div 
              key={collection.id} 
              className="group relative block overflow-hidden bg-white border border-[#EAE6DF] rounded-xl p-3 transition-all duration-500 hover:shadow-sm"
            >
              <div className="aspect-[3/4] w-full overflow-hidden relative bg-[#FAF9F6] rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={collection.imageUrl} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="pt-5 pb-3 px-2 text-center space-y-2">
                <h3 className="text-sm tracking-[0.15em] font-serif font-medium text-[#111111] uppercase">
                  {collection.title}
                </h3>
                <p className="text-[11px] text-[#666666] font-light leading-relaxed font-sans max-w-xs mx-auto min-h-[32px]">
                  {collection.description}
                </p>
                <div className="pt-2">
                  <span className="inline-block text-[10px] tracking-[0.25em] font-medium text-[#111111] uppercase border-b border-black/30 pb-0.5 group-hover:border-black transition-all group-hover:text-[#C5A880]">
                    EXPLORE EDIT
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}