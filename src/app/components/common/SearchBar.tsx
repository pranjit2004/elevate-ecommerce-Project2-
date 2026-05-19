"use client";

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'; 
import { Search } from 'lucide-react';

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [text, setText] = useState(searchParams.get('q') || '');
  
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    
    // THE FIX: Use replace, add scroll: false, and remove router.refresh()
    router.replace(`/products?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <div className="hidden sm:flex items-center relative group">
      <Search className="absolute left-3 h-4 w-4 text-neutral-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" />
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value); 
          handleSearch(e.target.value); 
        }}
        placeholder="Search products..."
        className="w-full sm:w-48 lg:w-64 pl-9 pr-4 py-2 text-sm bg-neutral-100 dark:bg-neutral-900 border-transparent rounded-full focus:bg-white dark:focus:bg-neutral-950 focus:border-neutral-300 dark:focus:border-neutral-700 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-neutral-900 dark:text-neutral-100"
      />
    </div>
  );
}

export default function SearchBar() {
  return (
    <Suspense fallback={<div className="hidden sm:block w-48 lg:w-64 h-9 rounded-full bg-neutral-100 dark:bg-neutral-900 animate-pulse" />}>
      <SearchInput />
    </Suspense>
  );
}