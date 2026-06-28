"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '../data/homepageData';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showTransparent = isHomepage && !isScrolled;

  return (
    <header className={`fixed left-0 w-full z-40 transition-all duration-300 ${
      showTransparent 
        ? 'top-9 bg-transparent border-b border-transparent text-white' 
        : 'top-9 bg-[#FAF9F6] border-b border-[#EAE6DF] text-[#111111]'
    }`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        
        {/* Brand Logo Identity */}
        <a href="/" className="text-lg md:text-xl font-serif font-light tracking-[0.25em] uppercase hover:opacity-80 transition-opacity">
          SIVI THE COUTURIER
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                link.label === 'SALE' 
                  ? 'text-red-500 font-semibold' 
                  : showTransparent ? 'text-neutral-200 hover:text-white' : 'text-[#555555] hover:text-black'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Utilities Buttons */}
        <div className="flex items-center space-x-5">
          <button aria-label="Search" className="hover:opacity-70 transition-opacity hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px]"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.601Z" /></svg>
          </button>
          <button aria-label="Profile" className="hover:opacity-70 transition-opacity hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px]"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
          </button>
          <button aria-label="Favorites" className="hover:opacity-70 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
          </button>
          <button aria-label="Cart" className="hover:opacity-70 transition-opacity flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px]"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
            <span className="text-[9px] font-sans font-medium">(0)</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-1" aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-t border-[#EAE6DF] text-black px-6 py-6 space-y-4 shadow-xl font-sans">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-xs tracking-widest uppercase font-medium text-[#444444] hover:text-black">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}