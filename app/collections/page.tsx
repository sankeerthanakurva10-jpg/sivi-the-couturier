"use client";
import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import CollectionHero from '../components/CollectionHero';
import CollectionIntro from '../components/CollectionIntro';
import FeaturedCollections from '../components/FeaturedCollections';
import Filters from '../components/Filters';
import ProductGrid from '../components/ProductGrid';
import CollectionStory from '../components/CollectionStory';
import CustomTailoringCTA from '../components/CustomTailoringCTA';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { productsDatabase } from '../data/productsData';

export default function CollectionsPage() {
  // Global Shared States for Filtering Engine Coordination
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedFabric, setSelectedFabric] = useState("All Fabrics");
  const [sortBy, setSortBy] = useState("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter Algorithm Array Processing
  const filteredProducts = productsDatabase.filter((product) => {
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesFabric = selectedFabric === "All Fabrics" || product.fabric === selectedFabric;
    return matchesCategory && matchesFabric;
  });

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#111111] antialiased selection:bg-[#C5A880]/20">
      {/* Structural Headers Layout Modules */}
      <TopBar />
      <Header />
      
      {/* Editorial Content Presentation Stream */}
      <CollectionHero />
      <CollectionIntro />
      <FeaturedCollections />

      {/* Main Dynamic Product Grid Section Block */}
      <section className="w-full max-w-[1800px] mx-auto px-4 md:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          <Filters 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedFabric={selectedFabric}
            setSelectedFabric={setSelectedFabric}
            sortBy={sortBy}
            setSortBy={setSortBy}
            isMobileOpen={isMobileFilterOpen}
            setIsMobileOpen={setIsMobileFilterOpen}
          />
          
          <ProductGrid 
            products={filteredProducts}
            sortBy={sortBy}
          />

        </div>
      </section>

      {/* Storytelling & Bottom Conversion Actions Elements */}
      <CollectionStory />
      <CustomTailoringCTA />
      
      {/* Global Footers */}
      <Footer />
      <FloatingButtons />
    </main>
  );
}