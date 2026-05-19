import { faker } from '@faker-js/faker';

export const generateProducts = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const rawCategory = faker.commerce.department();
    
    // 1. Force the key to lowercase
    const key = rawCategory.toLowerCase();
    console.log('Category:', rawCategory, '| Key:', key);
    
    // 2. Ensure your dictionary keys are ALL lowercase
const categoryImages: Record<string, string> = {
  'electronics': 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=400',
  'clothing': 'https://images.unsplash.com/photo-1523381294911-8d3cead1b475?auto=format&fit=crop&q=80&w=400',
  'home': 'https://images.unsplash.com/photo-1583847268964-b28dc88514b8?auto=format&fit=crop&q=80&w=400',
  'books': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400',
  'shoes': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400',
  'tools': 'https://images.unsplash.com/photo-1581783330263-d17e63b631d8?auto=format&fit=crop&q=80&w=400',
  'automotive': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400',
  'movies': 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400',
  'toys': 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=400',
  'beauty': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400',
  'jewelry': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400',
  'music': 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=400',
  'baby': 'https://images.unsplash.com/photo-1515488764276-be507de6c930?auto=format&fit=crop&q=80&w=400',
  'garden': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=400',
  'grocery': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400',
  'outdoors': 'https://images.unsplash.com/photo-1504280390367-361c6d9d38f4?auto=format&fit=crop&q=80&w=400',
  'computers': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400',
  'kids': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400',
  'industrial': 'https://images.unsplash.com/photo-1581092160607-ee22532079d3?auto=format&fit=crop&q=80&w=400',
  'default': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400'
};

    return {
      id: i + 1,
      title: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      category: rawCategory,
      // 3. This lookup will now match 'shoes' even if faker returns 'Shoes'
      image: categoryImages[key] || categoryImages['default'], 
      rating: {
        rate: parseFloat(faker.number.float({ min: 1, max: 5, fractionDigits: 1 }).toFixed(1)),
        count: faker.number.int({ min: 10, max: 500 })
      }
    };
  });
};