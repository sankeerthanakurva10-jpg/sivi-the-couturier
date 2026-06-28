"use client";
import React from 'react';
import { footerConfig } from '../data/homepageData';

export default function CustomTailoringCTA() {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 px-4 md:px-8 border-t border-[#EAE6DF]">
      <div className="max-w-4xl mx-auto bg-white border border-[#EAE6DF] rounded-2xl p-8 md:p-16 text-center space-y-6">
        <span className="text-[10px] tracking-[0.3em] font-bold text-[#C5A880] uppercase font-sans block">
          Atelier Consultation Suite
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-light tracking-wide text-black uppercase">
          Need a Custom Outfit?
        </h2>
        <p className="text-xs md:text-sm text-[#666666] font-light max-w-xl mx-auto leading-relaxed font-sans">
          Our master tailoring team creates unique silhouettes customized specifically to your style parameters, fabric selections, and measurements.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center font-sans">
          <a 
            href={`https://wa.me/${footerConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-white text-[11px] tracking-widest uppercase font-medium hover:bg-[#20ba59] transition-colors text-center"
          >
            CHAT ON WHATSAPP
          </a>
          <a 
            href="#"
            className="w-full sm:w-auto px-6 py-3 bg-black text-white text-[11px] tracking-widest uppercase font-medium hover:bg-[#C5A880] transition-colors text-center"
          >
            BOOK CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}