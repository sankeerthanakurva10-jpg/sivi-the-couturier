"use client";
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import TopBar from './components/TopBar';
import Header from './components/Header';
import CollectionSection from './components/CollectionSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function Home() {
  const [isSplashActive, setIsSplashActive] = useState(true);

  useEffect(() => {
    // Quickly check session storage right away
    if (sessionStorage.getItem("sivi_splash_viewed")) {
      setIsSplashActive(false);
    }
  }, []);

  return (
    <>
      {/* The splash screen sits cleanly over the homepage layout if active */}
      {isSplashActive && (
        <SplashScreen onAnimationComplete={() => setIsSplashActive(false)} />
      )}

      {/* The homepage elements load instantly without waiting hooks */}
      <div className="min-h-screen bg-[#FAF9F6]">
        <TopBar />
        <Header />
        <CollectionSection />
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
}