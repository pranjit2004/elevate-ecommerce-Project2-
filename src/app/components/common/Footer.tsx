"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { FaInstagram, FaXTwitter, FaFacebook, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Top Section: Newsletter */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-neutral-800/60">
          <div className="max-w-md w-full text-center lg:text-left">
            <h3 className="text-white text-xl font-semibold tracking-tight mb-2">
              Join our newsletter
            </h3>
            <p className="text-neutral-400 text-sm">
              Get weekly updates on new arrivals, exclusive discounts, and behind-the-scenes content.
            </p>
          </div>
          <form className="w-full lg:max-w-md relative flex items-center" onSubmit={(e) => e.preventDefault()}>
            <Mail className="absolute left-4 h-5 w-5 text-neutral-500" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-neutral-900/50 border border-neutral-800 rounded-full py-3 pl-12 pr-32 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-5 bg-white text-black font-medium text-sm rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2 group"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-12 border-b border-neutral-800/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-black font-bold text-xl leading-none">E</span>
              </div>
              <span className="font-semibold text-xl tracking-tight text-white">
                Elevate
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6">
              Redefining premium commerce. We build exceptional products for exceptional people, crafted with uncompromising quality and modern design.
            </p>
            {/* Socials - Desktop */}
            <div className="flex items-center gap-4 hidden lg:flex">
              <SocialLink href="#" icon={<FaInstagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="#" icon={<FaXTwitter className="h-5 w-5" />} label="Twitter" />
              <SocialLink href="#" icon={<FaFacebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="#" icon={<FaYoutube className="h-5 w-5" />} label="YouTube" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-medium mb-6">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="/shop/new">New Arrivals</FooterLink></li>
              <li><FooterLink href="/shop/bestsellers">Bestsellers</FooterLink></li>
              <li><FooterLink href="/shop/men">Men's Collection</FooterLink></li>
              <li><FooterLink href="/shop/women">Women's Collection</FooterLink></li>
              <li><FooterLink href="/shop/accessories">Accessories</FooterLink></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-medium mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="/help">Help Center</FooterLink></li>
              <li><FooterLink href="/shipping">Shipping Information</FooterLink></li>
              <li><FooterLink href="/returns">Returns & Exchanges</FooterLink></li>
              <li><FooterLink href="/track-order">Track Order</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="/about">About</FooterLink></li>
              <li><FooterLink href="/careers">Careers</FooterLink></li>
              <li><FooterLink href="/sustainability">Sustainability</FooterLink></li>
              <li><FooterLink href="/press">Press</FooterLink></li>
              <li><FooterLink href="/affiliates">Affiliates</FooterLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Elevate Commerce Inc. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>

          {/* Socials - Mobile */}
          <div className="flex items-center gap-4 lg:hidden mt-4 md:mt-0">
            <SocialLink href="#" icon={<FaInstagram className="h-5 w-5" />} label="Instagram" />
            <SocialLink href="#" icon={<FaXTwitter className="h-5 w-5" />} label="Twitter" />
            <SocialLink href="#" icon={<FaFacebook className="h-5 w-5" />} label="Facebook" />
            <SocialLink href="#" icon={<FaYoutube className="h-5 w-5" />} label="YouTube" />
          </div>
        </div>

      </div>
    </footer>
  );
};

// Reusable micro-components
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-neutral-400 hover:text-white transition-colors inline-block"
  >
    {children}
  </Link>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;