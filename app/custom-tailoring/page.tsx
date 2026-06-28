"use client";
import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

// 🔗 Imported local custom tailoring blocks based on your explorer panel tree
import TailoringHero from './components/TailoringHero';
import TailoringIntro from './components/TailoringIntro';
import JourneyTimeline from './components/JourneyTimeline';
import FabricCollections from './components/FabricCollections';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ConsultationForm from './components/ConsultationForm';
import StartJourneyCTA from './components/StartJourneyCTA';

export default function CustomTailoringPage() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Shop", href: "/shop", isSale: false },
    { label: "Collection", href: "/collections", isSale: false },
    { label: "Handloom Edit", href: "/handloom-edit", isSale: false },
    { label: "Custom Tailoring", href: "/custom-tailoring", isSale: false },
    { label: "About Us", href: "/about", isSale: false },
    { label: "Contact", href: "/contact", isSale: false },
    { label: "Sale", href: "/sale", isSale: true }
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] antialiased overflow-x-hidden relative font-sans text-black">
      
      {/* 1. Global Announcement Row */}
      <TopBar />

      {/* 2. Page-Specific Isolated Header Fix */}
      <header 
        className={`fixed top-[37px] inset-x-0 z-[999] w-full transition-all duration-500 bg-[#FAF9F6]/95 border-b select-none ${
          isSticky 
            ? 'border-[#EAE6DF] shadow-xs py-4 !top-0' 
            : 'border-transparent py-6'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          <div className="flex-none">
            <a href="/" className="text-base md:text-xl font-serif tracking-[0.25em] uppercase font-light text-black">
              Sivi The Couturier
            </a>
          </div>

          <nav className="hidden xl:flex items-center space-x-8 text-[11px] tracking-[0.2em] uppercase font-medium">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className={`relative py-1 transition-colors duration-300 ${
                  link.isSale ? 'text-[#D9383A]' : 'text-neutral-800 hover:text-black'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-5 md:space-x-6 justify-end flex-none text-black">
            <button aria-label="Search">
              <svg className="w-[17px] h-[17px] stroke-[1.3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button aria-label="Account">
              <svg className="w-[17px] h-[17px] stroke-[1.3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button aria-label="Wishlist">
              <svg className="w-[17px] h-[17px] stroke-[1.3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex items-center space-x-1.5" aria-label="Cart">
              <svg className="w-[17px] h-[17px] stroke-[1.3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-[10px] tracking-widest font-sans font-light text-neutral-600">(0)</span>
            </button>
          </div>

        </div>
      </header>

      {/* 3. Fully Restored Content Layout Stream */}
      {/* The pt margin handles the precise header height gap layout safely */}
      <div className="w-full pt-[100px]">
        <TailoringHero />
        <TailoringIntro />
        <JourneyTimeline />
        <FabricCollections />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ConsultationForm />
        <StartJourneyCTA />
      </div>

      {/* 4. Global Structural Footer Assemblies */}
      <Footer />
      <FloatingButtons />
    </main>
  );
}