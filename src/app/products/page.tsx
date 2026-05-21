"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { products, Product } from '@/data/products';

export default function ProductsPage() {
  
  const groupedProducts = useMemo(() => {
    return products.reduce((acc: Record<string, Product[]>, product) => {
      const categoryId = product.category.toLowerCase().replace(/['\s]+/g, '-');
      if (!acc[categoryId]) acc[categoryId] = [];
      acc[categoryId].push(product);
      return acc;
    }, {});
  }, []);

  const formatTitle = (id: string) => {
    return id.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <div className="bg-neutral-950 min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Explore our premium selection of carefully curated products, organized by category for your convenience.
          </p>
        </div>

        {/* Dynamic Category Sections */}
        <div className="space-y-24">
          {Object.entries(groupedProducts).map(([categoryId, categoryProducts]) => (
            
            <section key={categoryId} id={categoryId} className="scroll-mt-32">
              
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8 border-b border-neutral-800 pb-4">
                <h2 className="text-3xl font-bold text-white capitalize">
                  {formatTitle(categoryId)}
                </h2>
                <span className="text-sm font-medium text-neutral-300 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                  {categoryProducts.length} Items
                </span>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {categoryProducts.map((product) => (
                  <Link 
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group flex flex-col cursor-pointer bg-neutral-900/50 rounded-3xl p-6 border border-neutral-800 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-900 relative"
                  >
                    {/* Add to Cart Quick Action */}
                    <button className="absolute top-8 right-8 z-10 bg-black/50 hover:bg-white hover:text-black text-white p-2.5 rounded-full backdrop-blur-md opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ShoppingCart className="h-5 w-5" />
                    </button>

                    {/* Image Container - Kept white so product images render cleanly */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl mb-6 bg-white p-6">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="flex flex-col grow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 line-clamp-1">
                          {product.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm font-medium text-neutral-300">
                          <Star className="h-4 w-4 fill-neutral-500 text-neutral-500" />
                          {product.rating.rate}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white line-clamp-2 mb-4 group-hover:underline underline-offset-4 decoration-neutral-500">
                        {product.title}
                      </h3>
                      
                      <div className="mt-auto">
                        <span className="text-2xl font-bold text-white">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}