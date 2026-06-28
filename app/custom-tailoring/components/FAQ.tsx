"use client";
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { faqItems } from '../data/customTailoringData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const list = faqItems || [];

  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 max-w-[1000px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase font-light text-black">Atelier Inquiries</h2>
      </div>

      <div className="space-y-4">
        {list.map((faq: any, idx: number) => {
          const isOpen = openIndex === idx;
          return (
            <div key={faq.id || idx} className="border-b border-[#EAE6DF] pb-4">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between items-center text-left py-3 text-sm tracking-wide font-serif text-black uppercase"
              >
                <span>{faq.question}</span>
                <span className="text-xs ml-4">{isOpen ? "—" : "+"}</span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-neutral-500 font-light leading-relaxed tracking-wide pt-2 pr-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}