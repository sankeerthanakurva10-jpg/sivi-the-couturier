"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { customTailoringData } from '../data/customTailoringData';

export default function FAQ() {
  const data = customTailoringData || {};
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FIXED: Provide elegant default accordion data if data.faqs is missing
  const faqs = data.faqs || [
    { question: "How long does the custom tailoring process take?", answer: "Typically, it takes 3 to 4 weeks from initial consultation to final delivery, ensuring artisanal perfection." },
    { question: "Can I submit my own custom measurements online?", answer: "Yes, you can input your details through our secure digital form, or book a step-by-step virtual sizing session." },
    { question: "Do you ship bespoke items internationally?", answer: "Absolutely. We ship worldwide using fully insured premium logistics corridors." }
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 max-w-[1000px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase font-light text-black">
          {data.faqTitle || "Atelier Inquiries"}
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq: any, idx: number) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border-b border-[#EAE6DF] pb-4">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between items-center text-left py-3 text-sm tracking-wide font-serif text-black uppercase hover:opacity-70 transition-opacity"
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
                    transition={{ duration: 0.3 }}
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