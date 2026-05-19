"use client";

import React from "react";
import { useAppDispatch } from "@/store/hooks";
import { addToCart, toggleCart } from "@/store/cartSlice"; // <-- Import toggleCart!
import { ShoppingCart } from "lucide-react"; // <-- Add a nice icon
import toast from "react-hot-toast";

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

  const handleAddToCart = () => {
    // 1. Send the strictly formatted item to Redux
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }),
    );

    // 3. Fire the elegant toast
    toast.success(`Added ${product.title.substring(0, 15)}... to cart`, {
      icon: "🛍️",
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      // Fixed the sizing: changed py-4 to py-3.5, removed flex-1, added w-full sm:w-auto
      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-10 py-3.5 rounded-full font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-black/10 dark:shadow-white/10"
    >
      <ShoppingCart className="h-5 w-5" />
      Add to Cart
    </button>
  );
}
