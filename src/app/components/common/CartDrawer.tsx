"use client";

import React, { useEffect, useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleCart, removeFromCart, updateQuantity } from '@/store/cartSlice';

export default function CartDrawer() {
  // Use our custom typed Redux hooks
  const dispatch = useAppDispatch();
  const { items, isOpen } = useAppSelector((state) => state.cart);
  
  // Hydration fix: Prevent rendering until mounted on client
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => dispatch(toggleCart())}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[400px] bg-white dark:bg-neutral-950 shadow-2xl transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-neutral-900 dark:text-white" />
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Your Cart</h2>
          </div>
          <button 
            onClick={() => dispatch(toggleCart())} 
            className="p-2 -mr-2 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-neutral-500">
              <ShoppingBag className="h-12 w-12 opacity-20" />
              <p>Your cart is empty.</p>
              <button 
                onClick={() => dispatch(toggleCart())}
                className="text-black dark:text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                {/* Item Image */}
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-2">
                  <img src={item.image} alt={item.title} className="h-full w-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                </div>
                
                {/* Item Details */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-900 dark:text-white line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-full">
                      <button 
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                        className="px-3 py-1 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center text-neutral-900 dark:text-white">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                        className="px-3 py-1 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Footer */}
        {items.length > 0 && (
          <div className="border-t border-neutral-200 dark:border-neutral-800 p-6 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-base font-medium text-neutral-900 dark:text-white">Subtotal</span>
              <span className="text-xl font-bold text-neutral-900 dark:text-white">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            <p className="text-sm text-neutral-500 mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-full font-semibold hover:scale-[1.02] transition-transform duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}