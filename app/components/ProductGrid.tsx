"use client";
import React, { useState } from 'react';
import { Product } from '../types/collection';

interface ProductGridProps {
  products: Product[];
  sortBy: string;
}

export default function ProductGrid({ products, sortBy }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sorting Algorithm Processing Engine
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0; // Natural array index order fallback
  });

  return (
    <div className="w-full lg:col-span-9">
      
      {/* Dynamic Count Feedback Indicator */}
      <div className="hidden lg:flex justify-between items-center border-b border-[#EAE6DF] pb-4 mb-6 font-sans">
        <span className="text-xs text-[#777777] tracking-widest font-light">
          Showing {sortedProducts.length} curated creations
        </span>
      </div>

      {/* 3-Column Luxury Product Display Grid */}
      {sortedProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-[#EAE6DF]">
          <p className="text-sm font-serif italic text-neutral-500 tracking-wider">
            No dynamic combinations found matching criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
          {sortedProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col bg-white border border-[#EAE6DF] p-3 rounded-xl transition-all duration-300">
              
              {/* Luxury Frame Image Container Wrapper */}
              <div className="aspect-[3/4] w-full bg-[#FAF9F6] relative overflow-hidden rounded-lg">
                
                {/* Primary Image View Layer */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={product.primaryImage} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-102"
                />

                {/* Secondary Hover Flip Image Layer */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={product.hoverImage} 
                  alt={`${product.name} Alternative Detail`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                {/* Stock Inventory Flag Overlay Indicators */}
                {!product.inStock && (
                  <span className="absolute top-3 left-3 bg-[#111111]/80 text-white font-sans text-[9px] tracking-[0.2em] uppercase py-1 px-2.5 backdrop-blur-sm">
                    Sold Out
                  </span>
                )}
                {product.isSale && product.inStock && (
                  <span className="absolute top-3 left-3 bg-red-800 text-white font-sans text-[9px] tracking-[0.2em] uppercase py-1 px-2.5">
                    Special Edit
                  </span>
                )}

                {/* Hover Quick View Trigger Overlay Panel Button */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="px-5 py-2.5 bg-white text-black text-[10px] tracking-[0.2em] uppercase font-medium shadow-md hover:bg-black hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0 duration-500 font-sans"
                  >
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Metadata Copy Blocks */}
              <div className="pt-4 pb-2 px-1 flex flex-col items-center text-center space-y-1">
                <h3 className="text-xs tracking-[0.15em] font-serif text-[#111111] uppercase font-medium leading-relaxed max-w-[220px]">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 font-sans text-xs tracking-wider">
                  {product.originalPrice ? (
                    <>
                      <span className="text-neutral-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                      <span className="text-red-800 font-medium">₹{product.price.toLocaleString('en-IN')}</span>
                    </>
                  ) : (
                    <span className="text-[#555555] font-light">₹{product.price.toLocaleString('en-IN')}</span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Interactive Quick View Drawer Modal Window Component */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs font-sans">
          <div className="bg-[#FAF9F6] w-full max-w-3xl rounded-2xl overflow-hidden p-6 relative grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xl">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black z-10 text-lg font-light"
            >
              ✕
            </button>
            <div className="aspect-[3/4] w-full bg-neutral-200 rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedProduct.primaryImage} alt={selectedProduct.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-between py-2">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-bold">{selectedProduct.fabric}</span>
                <h2 className="text-xl font-serif tracking-wide text-black uppercase">{selectedProduct.name}</h2>
                <p className="text-sm font-medium text-neutral-800">₹{selectedProduct.price.toLocaleString('en-IN')}</p>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">{selectedProduct.description}</p>
                <div className="space-y-2">
                  <span className="text-[10px] tracking-wider text-neutral-400 uppercase block">Available Sizes</span>
                  <div className="flex gap-2">
                    {selectedProduct.sizes.map(s => (
                      <span key={s} className="border border-[#EAE6DF] bg-white px-2.5 py-1 text-[11px] text-black font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <button 
                disabled={!selectedProduct.inStock}
                onClick={() => { alert("Item added to cart."); setSelectedProduct(null); }}
                className={`w-full py-3 text-xs tracking-[0.2em] font-medium uppercase text-center mt-6 transition-colors ${
                  selectedProduct.inStock ? 'bg-black text-white hover:bg-[#C5A880]' : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                }`}
              >
                {selectedProduct.inStock ? "ADD TO SHOPPING BAG" : "SOLD OUT"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}