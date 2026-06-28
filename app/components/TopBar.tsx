"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { announcementData } from '../data/homepageData';

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if the current page is strictly the homepage
  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine background and text color based on page type and scroll position
  const showTransparent = isHomepage && !isScrolled;

  return (
    <div className={`fixed top-0 left-0 w-full h-9 border-b text-[10px] tracking-[0.2em] font-light py-2 px-4 md:px-12 flex justify-between items-center z-50 select-none font-sans transition-all duration-300 ${
      showTransparent 
        ? 'bg-transparent border-transparent text-white' 
        : 'bg-[#FAF9F6] border-[#EAE6DF] text-[#111111]'
    }`}>
      <div className="hidden md:block uppercase font-medium">{announcementData.leftText}</div>
      <div className={`mx-auto md:mx-0 uppercase tracking-[0.25em] font-semibold ${
        showTransparent ? 'text-white' : 'text-[#C5A880]'
      }`}>{announcementData.centerText}</div>
      <div className="hidden sm:flex items-center gap-1 opacity-80 cursor-pointer hover:opacity-100">
        <span>{announcementData.currencyOptions[0]}</span>
        <span className="text-[7px]">▼</span>
      </div>
    </div>
  );
}