import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-white dark:bg-neutral-950 selection:bg-neutral-200 dark:selection:bg-neutral-800 px-4 sm:px-6 lg:px-8">
      
      {/* Subtle Background Glows (matches the About page aesthetic) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-transparent dark:from-neutral-800 blur-3xl rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* Massive Faded '404' Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span className="text-[20rem] sm:text-[30rem] font-bold text-neutral-50 dark:text-neutral-900/30 tracking-tighter">
          404
        </span>
      </div>

      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">
        
        {/* Icon & Badge */}
        <div className="h-16 w-16 rounded-2xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center mb-8 border border-neutral-200 dark:border-neutral-800">
          <span className="text-xl font-bold text-neutral-900 dark:text-white">?</span>
        </div>
        
        {/* Typography */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
          Page not found
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-10 text-lg">
          We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Link 
            href="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full font-medium hover:scale-105 transition-transform duration-300"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          
          <Link 
            href="/products" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-neutral-900 dark:text-white px-8 py-3.5 rounded-full font-medium border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300"
          >
            <ShoppingBag className="h-4 w-4" />
            Shop Products
          </Link>
        </div>

      </div>
    </div>
  );
}