"use client";

import React from 'react';
import Link from 'next/link';
import { Monitor, Gem, Shirt, ShoppingBag, ArrowRight } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import { categories } from '@/data/catagories';



export default function CategorySection() {
  return (
    <div className="py-24 bg-neutral-950 overflow-hidden border-t border-neutral-900">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Shop by Category</h2>
              <p className="text-neutral-400">Find exactly what you're looking for.</p>
            </div>
            <Link 
              href="/products" 
              className="group flex items-center gap-2 text-sm font-semibold text-white hover:text-neutral-300 transition-colors"
            >
              Browse all categories 
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Category Grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link 
                  key={category.id}
                  href={`/products#${category.id}`}
                  className="group relative flex flex-col p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 transition-all duration-300 hover:bg-neutral-800/80 hover:border-neutral-700"
                >
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-black text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-sm text-neutral-400 mb-8 flex-grow">{category.description}</p>
                  
                  <div className="mt-auto flex items-center font-semibold text-sm text-white">
                    <span className="group-hover:mr-2 transition-all duration-300 text-neutral-300 group-hover:text-white">Explore</span>
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}