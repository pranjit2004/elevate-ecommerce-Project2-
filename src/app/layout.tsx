import type { Metadata } from 'next';
import './globals.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CartDrawer from './components/common/CartDrawer';
import StoreProvider from '@/store/StoreProvider';
import AuthProvider from './components/common/AuthProvider';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Elevate | Premium E-commerce',
  description: 'Carefully selected fashion and lifestyle products for modern shoppers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
        <StoreProvider>
          {/* AuthProvider must wrap Header, Cart, and Main Content */}
          <AuthProvider>
            <Toaster 
              position="bottom-right" 
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#333',
                  color: '#fff',
                },
              }} 
            />
            <Header />
            <CartDrawer />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}