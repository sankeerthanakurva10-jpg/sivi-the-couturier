"use client";
import React from 'react';
import { motion } from 'framer-motion';
// Safeguard your data import path
import { customTailoringData } from '../data/customTailoringData';

export default function FabricCollections() {
  const data = customTailoringData || {};

  // FIXED: Fallback to a structured placeholder array if data.collections isn't mapped out yet
  const collections = data.collections || [
    { id: "f1", name: "Organic Mulberry Silk", description: "Premium weight carrying an authentic structural sheen.", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop" },
    { id: "f2", name: "Fine Hand-spun Khadi", description: "Breathable texture spun by local artisanal home clusters.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop" },
    { id: "f3", name: "Zari Inlaid Cotton", description: "Classic fine weave matrices intersecting metallic thread runs.", image: "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="mb-12">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-bold block mb-2">The Swatch Vault</span>
        <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase font-light text-black">
          {data.fabricsTitle || "Premium Fabric Selections"}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((fabric: any) => (
          <motion.div
            key={fabric.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col bg-white border border-[#EAE6DF] p-6 rounded-sm"
          >
            <div className="w-full aspect-[4/3] overflow-hidden mb-4 bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={fabric.image} 
                alt={fabric.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
            </div>
            <h3 className="text-sm tracking-wider font-serif uppercase font-medium text-black mb-2">
              {fabric.name}
            </h3>
            <p className="text-xs text-neutral-500 font-light leading-relaxed tracking-wide">
              {fabric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}