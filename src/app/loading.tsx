import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-transparent px-4">
      
      {/* Premium Logo Animation */}
      <div className="relative flex items-center justify-center h-20 w-20 mb-8">
        {/* Outer expanding ring (ping effect) */}
        <div className="absolute inset-0 rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75" />
        
        {/* Inner solid logo box (pulse effect) */}
        <div className="relative h-12 w-12 rounded-xl bg-black dark:bg-white flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-white dark:text-black font-bold text-2xl leading-none">E</span>
        </div>
      </div>

      {/* Elegant Loading Text with Bouncing Dots */}
      <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
        <span className="text-sm font-medium uppercase tracking-widest">
          Preparing
        </span>
        <div className="flex items-center gap-1 pt-1">
          <span 
            className="h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-bounce" 
            style={{ animationDelay: '0ms' }} 
          />
          <span 
            className="h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-bounce" 
            style={{ animationDelay: '150ms' }} 
          />
          <span 
            className="h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-bounce" 
            style={{ animationDelay: '300ms' }} 
          />
        </div>
      </div>

    </div>
  );
}