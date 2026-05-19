"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

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


  return (
    <div className="relative overflow-hidden bg-neutral-50 dark:bg-neutral-900/50 pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight">
            Redefining <br className="hidden sm:block" />
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
      </div>
      
      {/* Decorative Background Element (Fades in slowly) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 -translate-y-12 translate-x-1/3"
      >
        <div className="w-[600px] h-[600px] bg-neutral-200/50 dark:bg-neutral-800/50 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay"></div>
      </motion.div>
    </div>
  );
}