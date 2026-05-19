import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const revalidate = 0;

// 1. Define the TypeScript Interface based on the Fake Store API
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// 2. Fetch all products from the API
async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

// 3. Main Page Component (UPDATED FOR NEXT.JS 14)
export default async function ProductsPage({
  searchParams,
}: {
  // FIX 1: In Next 14, searchParams is a standard object, not a Promise
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // FIX 2: Read the 'q' parameter directly (no await needed)
  const q = searchParams.q;
  // Safely ensure it's a string (handles cases where it might be undefined or an array)
  const rawQuery = typeof q === 'string' ? q : '';
  const searchQuery = rawQuery.toLowerCase();

  // Fetch all products
  const allProducts = await getProducts();

  // Filter the products based on the search query
  const filteredProducts = allProducts.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 selection:bg-neutral-200 dark:selection:bg-neutral-800 pb-24">
      
      {/* Header Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
          Live API Products
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Search and filter through our live database of products. Powered by Next.js Server Components.
        </p>
      </div>

      {/* Product Grid Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Empty State Check */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">No products found</h2>
            <p className="text-neutral-500">We couldn't find anything matching "{rawQuery}"</p>
            <Link href="/products" className="inline-block mt-6 text-sm font-medium bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
              Clear Search
            </Link>
          </div>
        ) : (
          /* Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
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
        )}
      </div>
    </div>
  );
}