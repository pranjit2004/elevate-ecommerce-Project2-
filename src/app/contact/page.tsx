"use client";

import React, { useState } from 'react';
// Added 'Globe' and 'ArrowUpRight' to the imports
import { Mail, Phone, MapPin, Send, Globe, ArrowUpRight } from 'lucide-react';
import toast from 'react-hot-toast';
import ScrollReveal from '../components/common/ScrollReveal';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-6">
              Let's start a conversation.
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Have a question about our products, premium services, or just want to say hello? Our team is ready to help.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
                Get in touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-xl">
                    <Mail className="h-6 w-6 text-neutral-900 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">Email</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1">Our friendly team is here to help.</p>
                    <a href="mailto:hello@elevate.com" className="font-medium text-black dark:text-white mt-2 inline-block hover:underline">
                      hello@elevate.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-xl">
                    <MapPin className="h-6 w-6 text-neutral-900 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">Office</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1">Come say hello at our headquarters.</p>
                    <p className="font-medium text-black dark:text-white mt-2">
                      100 Innovation Drive<br />
                      Tech District, CA 94103
                    </p>
                  </div>
                </div>

                {/* Developer Portfolio Link Block */}
                <div className="flex items-start gap-4 pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="p-3 bg-black dark:bg-white rounded-xl shadow-md transition-transform hover:scale-105">
                    <Globe className="h-6 w-6 text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">Developer Portfolio</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1">This project was built by a specialized Frontend Developer.</p>
                    
                    {/* CHANGE THIS LINK TO YOUR ACTUAL PORTFOLIO OR FIVERR URL */}
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium text-black dark:text-white mt-2 inline-flex items-center gap-1 hover:underline group"
                    >
                      View all my projects 
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Form */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-neutral-900 dark:text-white">First name</label>
                    <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all text-neutral-900 dark:text-white" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-neutral-900 dark:text-white">Last name</label>
                    <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all text-neutral-900 dark:text-white" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-900 dark:text-white">Email</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all text-neutral-900 dark:text-white" placeholder="jane@company.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-neutral-900 dark:text-white">Message</label>
                  <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all resize-none text-neutral-900 dark:text-white" placeholder="How can we help you?"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>Send message <Send className="h-4 w-4" /></>
                  )}
                </button>
                
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}