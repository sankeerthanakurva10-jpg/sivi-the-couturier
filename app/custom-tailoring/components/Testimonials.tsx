"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { customTailoringData } from '../data/customTailoringData';

export default function Testimonials() {
  const data = customTailoringData || {};

  // FIXED: Provide elegant fallback client reviews if data.testimonials is missing
  const testimonials = data.testimonials || [
    { id: "t1", name: "Malini K.", location: "Mumbai", quote: "The measurement consultation was incredibly thorough. The fit of my bespoke jacket is pristine." },
    { id: "t2", name: "Rohan D.", location: "Bangalore", quote: "Absolute perfection in handloom structuring. It drapes naturally while feeling robust." }
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 border-t border-[#EAE6DF]">
      <div className="max-w-[1400px] mx-auto text-center">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-bold block mb-2">Patron Curation</span>
        <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase font-light text-black mb-12">
          {data.testimonialsTitle || "Atelier Voices"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item: any) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white border border-[#EAE6DF] rounded-sm text-center shadow-xs flex flex-col justify-between"
            >
              <p className="text-xs md:text-sm italic font-serif text-neutral-600 tracking-wide leading-relaxed mb-6">
                "{item.quote}"
              </p>
              <div>
                <h4 className="text-[11px] font-sans tracking-widest uppercase font-semibold text-black">{item.name}</h4>
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-light">— {item.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}