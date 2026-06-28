"use client";
import React from 'react';
import { footerConfig } from '../data/homepageData';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF9F6] border-t border-[#EAE6DF] text-[#111111] font-sans pt-16 pb-8 px-6 md:px-12 select-none">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Information Column */}
        <div>
          <h3 className="text-xs tracking-[0.2em] font-serif uppercase font-semibold mb-4">SIVI THE COUTURIER</h3>
          <p className="text-[11px] text-[#555555] tracking-wider leading-relaxed max-w-xs">
            Indian handloom textile studio specializing in contemporary dresses, modern outfits, and traditional sarees from Hyderabad.
          </p>
          <div className="flex items-center space-x-4 mt-6 text-[#555555]">
            <a href={footerConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              <span className="text-xs tracking-widest uppercase font-medium">IG</span>
            </a>
            <a href={footerConfig.pinterestUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              <span className="text-xs tracking-widest uppercase font-medium">PT</span>
            </a>
          </div>
        </div>

        {/* Shop Category Navigation Links */}
        <div>
          <h3 className="text-xs tracking-[0.2em] font-medium uppercase text-[#888888] mb-4">SHOP</h3>
          <ul className="space-y-2.5 text-[11px] text-[#333333] tracking-wide">
            <li><a href="/shop" className="hover:text-black transition-colors">Handloom Sarees</a></li>
            <li><a href="/shop" className="hover:text-black transition-colors">Mangalagiri Kurtas</a></li>
            <li><a href="/shop" className="hover:text-black transition-colors">Kalamkari Dupattas</a></li>
            <li><a href="/shop" className="hover:text-black transition-colors">Bespoke Tailoring</a></li>
            <li><a href="/shop" className="hover:text-black transition-colors">All Collections</a></li>
          </ul>
        </div>

        {/* Corporate Studio Columns */}
        <div>
          <h3 className="text-xs tracking-[0.2em] font-medium uppercase text-[#888888] mb-4">STUDIO</h3>
          <ul className="space-y-2.5 text-[11px] text-[#333333] tracking-wide">
            <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
            <li><a href="/collections" className="hover:text-black transition-colors">Collection</a></li>
            <li><a href="/handloom-edit" className="hover:text-black transition-colors">Handloom Edit</a></li>
            <li><a href="/custom-tailoring" className="hover:text-black transition-colors">Custom Tailoring</a></li>
            <li><a href="/about" className="hover:text-black transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-black transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter Ingestion Column */}
        <div>
          <h3 className="text-xs tracking-[0.2em] font-medium uppercase text-[#888888] mb-4">NEWSLETTER</h3>
          <p className="text-[11px] text-[#555555] tracking-wider mb-4">
            Receive curated insights on craft, culture, and conscious living.
          </p>
          <div className="flex border-b border-black/30 pb-1 pt-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-transparent text-[11px] placeholder:text-[#999999] focus:outline-none tracking-wide"
            />
            <button className="text-[10px] tracking-[0.2em] uppercase font-semibold hover:opacity-70 transition-opacity">JOIN</button>
          </div>
        </div>

      </div>

      {/* Copyright Row — PERMANENT ARROW BUTTON REMOVED */}
      <div className="max-w-[1800px] mx-auto pt-8 border-t border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-[0.15em] text-[#777777]">
        <div className="mb-4 sm:mb-0">
          © {new Date().getFullYear()} Sivi The Couturier. All Rights Reserved.
        </div>
        <div className="italic text-[#555555]">
          Designed in Hyderabad, India.
        </div>
      </div>
    </footer>
  );
}