"use client";
import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import HandloomHero from './components/HandloomHero';
import BrandStory from './components/BrandStory';
import ArtisanSpotlight from './components/ArtisanSpotlight';
import WeavingProcess from './components/WeavingProcess';
import HandloomCollections from './components/HandloomCollections';
import ProductShowcase from './components/ProductShowcase';
import FabricEducation from './components/FabricEducation';
import CustomerExperience from './components/CustomerExperience';
import SustainabilitySection from './components/SustainabilitySection';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

export default function HandloomEditPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] antialiased selection:bg-[#C5A880]/20 overflow-x-hidden">
      {/* Structural Website Headers */}
      <TopBar />
      <Header />

      {/* Narrative Handloom Execution Streams */}
      <HandloomHero />
      <BrandStory />
      <ArtisanSpotlight />
      <WeavingProcess />
      <HandloomCollections />
      <ProductShowcase />
      <FabricEducation />
      <CustomerExperience />
      <SustainabilitySection />

      {/* Structural Website Footers */}
      <Footer />
      <FloatingButtons />
    </main>
  );
}