import { generateProducts } from './generateProducts';

export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Generate exactly 30 products
export const products: Product[] = generateProducts(30);