// app/custom-tailoring/components/Header.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Nav items from your exact design layout
  const navLinks = [
    { label: "SHOP", href: "/shop" },
    { label: "COLLECTION", href: "/collection" },
    { label: "HANDLOOM EDIT", href: "/handloom-edit" },
    { label: "CUSTOM TAILORING", href: "/custom-tailoring" },
    { label: "ABOUT US", href: "/story" },
    { label: "CONTACT", href: "/contact" },
    { label: "SALE", href: "/sale", isSale: true }
  ];

  return (
    <header className="w-full bg-[#fcfbfa] border-b border-neutral-200/60 font-sans sticky top-0 z-50">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="w-full border-b border-neutral-200/40 py-2 px-6 md:px-12 flex justify-between items-center text-[10px] tracking-[0.2em] text-neutral-800 font-light">
        <div className="uppercase">WORLDWIDE SHIPPING</div>
        <div className="text-[#c5a880] uppercase font-normal tracking-[0.25em]">SUMMER SALE 2026</div>
        <div className="flex items-center cursor-pointer hover:opacity-70 transition-opacity uppercase">
          INR <span className="text-[8px] ml-1">▼</span>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        
        {/* Brand Typography Identity */}
        <Link href="/" className="flex-shrink-0">
          <h1 
            className="text-black text-xl md:text-2xl tracking-[0.2em] uppercase font-light cursor-pointer select-none"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            SIVI THE COUTURIER
          </h1>
        </Link>

        {/* Center Linked Navigation Streams (Desktop) */}
        <div className="hidden xl:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href}
              className={`text-[11px] tracking-[0.2em] font-light uppercase relative py-1 transition-colors duration-300 ${
                link.isSale ? 'text-red-500 font-normal tracking-[0.25em]' : 'text-neutral-700 hover:text-black'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Utilities Action Group */}
        <div className="hidden lg:flex items-center space-x-6 text-neutral-800">
          {/* Search */}
          <button className="hover:opacity-60 transition-opacity">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Profile / Account */}
          <button className="hover:opacity-60 transition-opacity">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </button>

          {/* Wishlist / Heart */}
          <button className="hover:opacity-60 transition-opacity">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.501-4.688-4.501-1.686 0-3.17.83-4.062 2.096-.892-1.265-2.376-2.096-4.062-2.096C5.501 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>

          {/* Cart Bag */}
          <button className="flex items-center space-x-1 hover:opacity-60 transition-opacity">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 11-7.5 0v4m-3 0h11.25a2.25 2.25 0 012.25 2.25v6.75a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-6.75a2.25 2.25 0 012.25-2.25z" />
            </svg>
            <span className="text-[10px] font-light tracking-widest text-neutral-500">(0)</span>
          </button>
        </div>

        {/* Hamburger Mobile Trigger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden flex flex-col justify-center items-end w-6 h-5 space-y-1.5 focus:outline-none text-black"
        >
          <span className={`h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 w-6' : 'w-6'}`} />
          <span className={`h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
          <span className={`h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5 w-6' : 'w-5'}`} />
        </button>

      </div>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-[#fcfbfa] border-b border-neutral-200 p-8 flex flex-col space-y-4 xl:hidden shadow-md"
          >
            {navLinks.map((link, idx) => (
              <Link 
                key={idx} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm tracking-[0.15em] uppercase font-light block ${
                  link.isSale ? 'text-red-500 font-normal' : 'text-neutral-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}