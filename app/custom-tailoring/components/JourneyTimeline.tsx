"use client";
import React from 'react';
import { motion } from 'framer-motion';
// Make sure this path points to where your data configuration lives
import { customTailoringData } from '../data/customTailoringData';

export default function JourneyTimeline() {
  const data = customTailoringData || {};
  
  // FIXED: If data.steps doesn't exist yet, we fall back to an empty array [] so .map() doesn't crash
  const steps = data.steps || [
    { title: "Consultation", description: "Discuss your silhouette preferences and choices." },
    { title: "Measurements", description: "Submit measurements or schedule an online fitting session." },
    { title: "Crafting", description: "Our artisans meticulously hand-weave and cut your design." },
    { title: "Fitting Check", description: "Reviewing sub-pixel lines before ultimate finish pressing." },
    { title: "Delivery", description: "Your bespoke creation arrives encased in our signature box." }
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif tracking-widest uppercase font-light">
          {data.timelineTitle || "The Custom Journey"}
        </h2>
      </div>

      <div className="relative w-full">
        {/* Decorative center timeline track line */}
        <div className="absolute top-[28px] left-0 w-full h-[1px] bg-neutral-200 z-0 hidden md:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {steps.map((step: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left bg-white md:bg-transparent p-6 md:p-0 border border-neutral-100 md:border-none rounded-sm"
            >
              {/* Timeline marker ball node */}
              <div className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-[#C5A880] text-[#111111] flex items-center justify-center font-serif text-lg mb-4 shadow-xs">
                {idx + 1}
              </div>
              <h3 className="text-sm tracking-wider font-serif uppercase font-medium text-black mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed tracking-wide">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}