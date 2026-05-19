"use client";

import React from 'react';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cartSlice';
import toast from 'react-hot-toast'; // <--- 1. Import toast

interface AddToCartButtonProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();

  // 2. Create a handler function
  const handleAddToCart = () => {
    // Send to Redux
    dispatch(addToCart(product));
    
    // Fire the elegant toast!
    toast.success(`Added ${product.title.substring(0, 15)}... to cart`, {
      icon: '🛍️', // Custom shopping bag icon instead of default checkmark
    });
  };

  return (
    <button 
      onClick={handleAddToCart} // <--- 3. Use the new handler
      className="flex-1 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-300 active:scale-95"
    >
      Add to Cart
    </button>
  );
}