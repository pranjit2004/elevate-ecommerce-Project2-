import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react'; // <-- Added the missing Star icon
import { products, Product } from '@/data/products'; // <-- Importing your central data!

export default function ProductServerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 selection:bg-neutral-200 dark:selection:bg-neutral-800 pb-24">
      
      {/* Header Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
          Discover Products
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Carefully selected fashion and lifestyle products for modern shoppers.
        </p>
      </div>

      {/* Product Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product: Product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white border border-neutral-100 dark:border-neutral-800 p-6 mb-4 transition-all duration-300 group-hover:shadow-lg dark:bg-neutral-900/50">
                <img 
                  src={product.image} 
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 mix-blend-multiply dark:mix-blend-normal"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col space-y-2 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    <Star className="h-3.5 w-3.5 fill-black dark:fill-white text-black dark:text-white" />
                    {product.rating.rate}
                  </div>
                </div>
                
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white line-clamp-2 leading-snug group-hover:underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">
                  {product.title}
                </h3>
                
                <div className="mt-auto pt-2">
                  <span className="text-lg font-bold text-neutral-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}