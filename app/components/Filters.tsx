"use client";
import React from 'react';

interface FiltersProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedFabric: string;
  setSelectedFabric: (fab: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

const categories = ["All Products", "Anarkalis", "Sarees", "Dresses", "Tailoring"];
const fabrics = ["All Fabrics", "Raw Silk", "Katan Silk", "Handloom Linen", "Khadi Silk", "Tussar Silk"];
const sortOptions = [
  { label: "Featured Curation", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" }
];

export default function Filters({
  selectedCategory, setSelectedCategory,
  selectedFabric, setSelectedFabric,
  sortBy, setSortBy,
  isMobileOpen, setIsMobileOpen
}: FiltersProps) {

  const FilterContent = () => (
    <div className="space-y-8 font-sans">
      {/* Category Selection Filter Block */}
      <div className="space-y-3">
        <h4 className="text-[11px] tracking-[0.2em] font-semibold text-[#111111] uppercase">Category</h4>
        <div className="flex flex-col space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-left text-xs tracking-wider transition-colors ${
                selectedCategory === cat ? 'text-[#C5A880] font-medium' : 'text-[#555555] hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Fabric Material Selection Filter Block */}
      <div className="space-y-3">
        <h4 className="text-[11px] tracking-[0.2em] font-semibold text-[#111111] uppercase">Fabric Heritage</h4>
        <div className="flex flex-col space-y-2">
          {fabrics.map((fab) => (
            <button
              key={fab}
              onClick={() => setSelectedFabric(fab)}
              className={`text-left text-xs tracking-wider transition-colors ${
                selectedFabric === fab ? 'text-[#C5A880] font-medium' : 'text-[#555555] hover:text-black'
              }`}
            >
              {fab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Permanent Left Sidebar Panel */}
      <aside className="hidden lg:block lg:col-span-3 pr-8 sticky top-32 h-fit">
        <div className="border-b border-[#EAE6DF] pb-4 mb-6">
          <h3 className="text-xs tracking-[0.25em] font-bold text-[#111111] uppercase">Filter Catalog</h3>
        </div>
        <FilterContent />
      </aside>

      {/* Mobile Sorting & Filter Bar Trigger */}
      <div className="lg:hidden w-full flex items-center justify-between border-y border-[#EAE6DF] py-3 bg-white px-2 mb-8 font-sans">
        <button 
          onClick={() => setIsMobileOpen(true)}
          className="text-xs tracking-widest font-medium uppercase text-[#111111] flex items-center gap-2"
        >
          <span>Filter Criteria</span>
          <span className="text-[10px] text-[#888888]">▼</span>
        </button>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-xs tracking-wider font-light bg-transparent outline-none border-none text-right text-[#555555]"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Mobile Filter Drawer Overlay Drawer Modal Panel */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 lg:hidden flex justify-end">
          <div className="w-80 h-full bg-[#FAF9F6] p-6 shadow-2xl overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-[#EAE6DF] pb-4 mb-6">
                <h3 className="text-xs tracking-widest font-bold uppercase text-black">Filter By</h3>
                <button onClick={() => setIsMobileOpen(false)} className="text-sm font-light text-neutral-500">✕</button>
              </div>
              <FilterContent />
            </div>
            <button 
              onClick={() => setIsMobileOpen(false)}
              className="w-full py-3 bg-[#111111] text-white text-xs tracking-widest uppercase font-medium mt-8 hover:bg-[#C5A880] transition-colors"
            >
              Apply Filter Settings
            </button>
          </div>
        </div>
      )}
    </>
  );
}