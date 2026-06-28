"use client";
import React, { useState, useEffect } from 'react';
import { footerConfig } from '../data/homepageData';

export default function FloatingButtons() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center justify-end w-12 select-none pointer-events-none">
      <div className="flex flex-col items-center space-y-3 pointer-events-auto">
        
        {/* 1. Back to Top Arrow Button */}
        <button
          onClick={scrollToTop}
          className={`w-12 h-12 bg-[#FAF9F6] border border-[#EAE6DF] text-[#111111] rounded-full flex items-center justify-center shadow-md hover:bg-[#111111] hover:text-white transition-all duration-500 transform ${
            showArrow 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 translate-y-4 invisible pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </button>

        {/* 2. WhatsApp Message Floating Action Link */}
        <a
          href={`https://wa.me/${footerConfig?.whatsappNumber || '919999999999'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#20ba5a] transition-all duration-300 overflow-hidden"
          aria-label="Chat on WhatsApp"
        >
          {/* FIXED: Swapped path layout to a standard 448x512 matrix grid box with internal padding sizing rules */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512" 
            fill="currentColor"
            className="w-6 h-6 block"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </a>

      </div>
    </div>
  );
}