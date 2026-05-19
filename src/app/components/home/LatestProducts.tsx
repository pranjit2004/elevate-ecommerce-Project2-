import React from 'react';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal'; // Import our new wrapper!

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number };
}

async function getLatestProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products?limit=4', {
    next: { revalidate: 3600 } 
  });
  if (!res.ok) return [];
  return res.json();
}

export default async function LatestProducts() {
  const products = await getLatestProducts();

  return (
    <div className="py-24 bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">New Arrivals</h2>
              <p className="text-neutral-500 dark:text-neutral-400">The latest additions to our premium collection.</p>
            </div>
            <Link 
              href="/products" 
              className="group flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white hover:opacity-70 transition-opacity"
            >
              View all products 
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Product Grid - Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            // We multiply the index by 0.15 to stagger the animations!
            <ScrollReveal key={product.id} delay={0.15 * index}>
              <Link 
                href={`/products/${product.id}`}
                className="group flex flex-col cursor-pointer h-full"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white border border-neutral-100 dark:border-neutral-800 p-6 mb-4 transition-all duration-300 group-hover:shadow-lg dark:bg-neutral-900/50">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 mix-blend-multiply dark:mix-blend-normal"
                  />
                </div>
                <div className="flex flex-col space-y-2 flex-grow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">{product.category}</span>
                    <div className="flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      <Star className="h-3.5 w-3.5 fill-black dark:fill-white text-black dark:text-white" />
                      {product.rating.rate}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white line-clamp-2 leading-snug group-hover:underline underline-offset-4 decoration-neutral-300">{product.title}</h3>
                  <div className="mt-auto pt-2">
                    <span className="text-lg font-bold text-neutral-900 dark:text-white">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </div>
  );
}     