"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { products, Product } from '@/data/products';

export default function BannerSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }; 

  const latestProducts = products.slice(0, 6);
  const scrollingProducts = [...latestProducts, ...latestProducts, ...latestProducts];

  return (
    <div className="relative overflow-hidden bg-neutral-50 dark:bg-neutral-900/50 pt-24 pb-32 lg:min-h-[85vh] flex items-center">
      
      {/* Main Layout Grid 
        - max-w-screen-2xl: Widens the entire container so text sits further left.
        - lg:grid-cols-12: Switched to a 12-column grid for precise width control.
      */}
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* === LEFT COLUMN: HERO TEXT (Spans 5 columns) === */}
        <motion.div 
          className="max-w-2xl lg:col-span-5 lg:pr-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight">
            Redefining <br className="hidden xl:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-black dark:from-neutral-400 dark:to-white">
              Premium Commerce.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl">
            Discover our curated collection of exceptional products. Crafted with uncompromising quality and modern design for the modern shopper.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/products" 
              className="flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              Shop Collection <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/about" 
              className="flex items-center justify-center px-8 py-4 rounded-full font-semibold text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-300"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        {/* === RIGHT COLUMN: PRODUCT MARQUEE (Spans 7 columns) === */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative w-full overflow-hidden mt-16 lg:mt-0 lg:col-span-7"
        >
          {/* Fading Edges (Widened slightly to w-24 for a smoother fade in the larger space) */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-neutral-50 dark:from-[#111111] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-neutral-50 dark:from-[#111111] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track Container */}
          <div className="flex w-max animate-marquee gap-6 px-4 py-4 hover:[animation-play-state:paused]">
            {scrollingProducts.map((product: Product, index: number) => (
              <Link 
                key={`${product.id}-${index}`}
                href={`/products/${product.id}`}
                // Increased width from 240px to 280px to utilize the expanded 7-column layout
                className="group flex flex-col cursor-pointer h-full w-[280px] shrink-0"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white border border-neutral-100 dark:border-neutral-800 p-6 mb-4 transition-all duration-300 group-hover:shadow-xl dark:bg-neutral-900/50">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 mix-blend-multiply dark:mix-blend-normal"
                  />
                </div>
                <div className="flex flex-col space-y-1 grow px-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">{product.category}</span>
                    <div className="flex items-center gap-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      <Star className="h-3.5 w-3.5 fill-black dark:fill-white text-black dark:text-white" />
                      {product.rating.rate}
                    </div>
                  </div>
                  <h3 className="text-[15px] font-semibold text-neutral-900 dark:text-white line-clamp-1 group-hover:underline underline-offset-4 decoration-neutral-300">{product.title}</h3>
                  <div className="mt-auto pt-1">
                    <span className="text-lg font-bold text-neutral-900 dark:text-white">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
      
      {/* Decorative Background Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 -z-10"
      >
        <div className="w-[800px] h-[800px] bg-neutral-200/50 dark:bg-neutral-800/40 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay"></div>
      </motion.div>
    </div>
  );
}