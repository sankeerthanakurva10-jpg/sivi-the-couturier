"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { customTailoringData } from '../data/customTailoringData';

export default function Gallery() {
  const data = customTailoringData || {};

  // FIXED: Fallback to high-end placeholder images if data.galleryItems is undefined
  const galleryItems = data.galleryItems || [
    { id: "g1", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600" },
    { id: "g2", url: "https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=600" },
    { id: "g3", url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600" }
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase font-light text-black">
          {data.galleryTitle || "Atelier Creations"}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item: any) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full aspect-[3/4] overflow-hidden bg-neutral-100 border border-[#EAE6DF] rounded-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={item.url} 
              alt="Atelier Gallery piece" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}