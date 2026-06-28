"use client";
import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { productsDatabase } from '../data/productsData';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedFabric, setSelectedFabric] = useState("All Fabrics");
  const [sortBy, setSortBy] = useState("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProducts = productsDatabase.filter((product) => {
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesFabric = selectedFabric === "All Fabrics" || product.fabric === selectedFabric;
    return matchesCategory && matchesFabric;
  });

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#111111] antialiased pt-[120px]">
      <TopBar />
      <Header />
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-8 text-center sm:text-left">
        <h1 className="text-3xl font-serif tracking-widest uppercase text-black">SHOP ALL CREATIONS</h1>
        <div className="w-12 h-[1px] bg-[#C5A880] mt-4 mx-auto sm:mx-0" />
      </div>

      <section className="w-full max-w-[1800px] mx-auto px-4 md:px-12 py-12">
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

      <Footer />
      <FloatingButtons />
    </main>
  );
}