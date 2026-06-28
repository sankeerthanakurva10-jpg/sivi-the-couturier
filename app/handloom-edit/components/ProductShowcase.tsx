"use client";
import React from 'react';
import { handloomProductsList } from '../data/handloomData';

export default function ProductShowcase() {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 px-4 md:px-12 border-t border-[#EAE6DF]">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-light tracking-[0.2em] text-black uppercase">THE CURATED INVENTORY</h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {handloomProductsList.map((product) => (
            <div key={product.id} className="group relative flex flex-col bg-transparent">
              <div className="relative w-full h-[50vh] overflow-hidden bg-white border border-[#EAE6DF]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-102" />
                {product.isSoldOut && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-2xs flex items-center justify-center">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-black border border-black px-4 py-2 bg-white">SOLD OUT</span>
                  </div>
                )}
                {!product.isSoldOut && (
                  <div className="absolute inset-x-0 bottom-0 bg-[#FAF9F6]/90 backdrop-blur-xs border-t border-[#EAE6DF] py-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] tracking-widest uppercase font-medium text-black cursor-pointer">QUICK VIEW</span>
                  </div>
                )}
              </div>
              <div className="mt-4 flex flex-col items-center text-center px-2">
                <h3 className="text-xs md:text-sm font-serif tracking-widest uppercase text-[#111111] mb-1 truncate w-full">{product.name}</h3>
                <span className="text-xs text-[#C5A880] tracking-widest font-medium font-sans">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}