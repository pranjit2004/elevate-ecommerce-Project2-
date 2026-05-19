"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCart } from "@/store/cartSlice";
import { useSession } from "next-auth/react"; // 1. Import NextAuth hook
import SearchBar from "./SearchBar";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  // 2. Grab the current user session
  const { data: session, status } = useSession();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 ${
        isScrolled
          ? "border-b border-neutral-200 dark:border-neutral-800 shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-5 lg:px-6">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-xl leading-none">
                  E
                </span>
              </div>
              <span className="font-semibold text-lg tracking-tight text-neutral-900 dark:text-white hidden sm:block">
                Elevate
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center justify-end gap-4 md:gap-6 shrink-0">
            <SearchBar />

            <button className="sm:hidden p-2 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={() => dispatch(toggleCart())}
              className="relative p-2 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              <ShoppingBag className="h-5 w-5" />
              {isMounted && cartItemCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-white text-[10px] font-bold text-white dark:text-black">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* 3. Dynamic Auth Buttons (Desktop) */}
            <div className="hidden md:flex items-center border-l border-neutral-200 dark:border-neutral-800 pl-6">
              {status === "loading" ? (
                <div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
              ) : status === "authenticated" ? (
                <Link
                  href="/dashboard"
                  className="h-8 w-8 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:ring-2 hover:ring-black dark:hover:ring-white transition-all"
                >
                  <img
                    src={session?.user?.image || ""}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </Link>
              ) : (
                <div className="flex items-center gap-4">
                  <Link
                    href="/api/auth/signin"
                    className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/api/auth/signin"
                    className="text-sm font-medium bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -mr-2 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 border-t border-neutral-200 dark:border-neutral-800 opacity-100"
            : "max-h-0 opacity-0"
        } bg-white dark:bg-neutral-950`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 4. Dynamic Auth Buttons (Mobile) */}
          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-3">
            {status === "authenticated" ? (
              <Link
                href="/dashboard"
                className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-4 w-4" /> Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/api/auth/signin"
                  className="w-full text-center py-2 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/api/auth/signin"
                  className="w-full text-center py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
