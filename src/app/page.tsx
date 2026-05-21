import BannerSection from './components/home/Hero';
import LatestProducts from './components/home/LatestProducts';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Banner */}
      <BannerSection />

      {/* 2. Featured Products */}
      <LatestProducts />
      
      {/* You can add more sections here later! 
        e.g., <CategoriesSection />, <TestimonialsSection /> 
      */}
    </div>
  );
}