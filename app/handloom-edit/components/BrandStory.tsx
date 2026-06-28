"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { brandStoryContent } from '../data/handloomData';

export default function BrandStory() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 lg:py-32 px-6 md:px-12 text-[#111111]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-2xl md:text-4xl font-serif font-light tracking-wide leading-relaxed mb-12 italic text-neutral-800">
          "{brandStoryContent.quote}"
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px] md:text-sm tracking-wide leading-relaxed font-light text-[#444444] text-justify">
          <p>{brandStoryContent.paragraphOne}</p>
          <p>{brandStoryContent.paragraphTwo}</p>
        </div>
      </div>
    </section>
  );
}