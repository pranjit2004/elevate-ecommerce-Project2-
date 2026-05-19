import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Star, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import AddToCartButton from '../AddToCartButton'; // <-- Import your new interactive button!

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));

  if (!product) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Product Image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white border border-neutral-100 dark:border-neutral-800 p-8 sm:p-12 shadow-sm">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
            />
          </div>

          {/* Product Info & Cart Section */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-3 block">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 fill-black dark:fill-white text-black dark:text-white" />
                  {product.rating.rate} ({product.rating.count} reviews)
                </div>
              </div>

              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Replaced the old static button with your new Client Component */}
            <div className="mt-auto md:mt-8">
              <AddToCartButton product={product} /> 
              <p className="text-sm text-neutral-500 mt-4">
                Free shipping on orders over $50. Secure checkout.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}