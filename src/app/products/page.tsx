import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';



// 1. Define the TypeScript Interface based on the Fake Store API response
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

// 1. Create a bulletproof fallback array
const fallbackProducts = [
  {
    id: 1,
    title: "Premium Foldsack Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 2,
    title: "Minimalist Casual Slim T-Shirt",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan sleeve, henley placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 3,
    title: "Essential Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtl-L._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 4,
    title: "Solid Gold Petite Micropave",
    price: 168.00,
    description: "Satisfaction Guaranteed. Return or exchange any order.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 }
  }
];

// 2. The new robust fetch function
async function getProducts() {
  try {
    // Adding { cache: 'no-store' } tells Next.js NOT to save the empty array forever!
    const res = await fetch('https://fakestoreapi.com/products', { 
      cache: 'no-store' 
    });
    
    // If the API throws a tantrum, use our fallback data
    if (!res.ok) {
      return fallbackProducts;
    }
    
    return res.json();
  } catch (error) {
    // If the API completely times out, use our fallback data
    return fallbackProducts;
  }
}

// 3. The Page Component MUST be async to await the data
export default async function ProductServerPage() {
  // Fetch the data directly in the component!
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 selection:bg-neutral-200 dark:selection:bg-neutral-800 pb-24">
      
      {/* Header Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
          Discover Products
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Carefully selected fashion and lifestyle products for modern shoppers.
        </p>
      </div>

      {/* Product Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product: Product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white border border-neutral-100 dark:border-neutral-800 p-6 mb-4 transition-all duration-300 group-hover:shadow-lg dark:bg-neutral-900/50">
                {/* Note: We use standard <img> here for simplicity with external APIs.
                  To use Next.js <Image>, you must configure remotePatterns in next.config.ts 
                */}
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
      </div>

    </div>
  );
}