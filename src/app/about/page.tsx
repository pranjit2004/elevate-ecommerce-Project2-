import React from 'react';
import { Target, Shield, Zap, Globe } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';

export default function AboutPage() {
  const stats = [
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Countries Served', value: '32' },
    { label: 'Premium Products', value: '1,000+' },
    { label: 'Customer Support', value: '24/7' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Uncompromising Quality',
      description: 'We obsess over every detail. From the initial sketch to the final stitch, we ensure our products meet the highest possible standards.'
    },
    {
      icon: Shield,
      title: 'Sustainable Practices',
      description: 'Great design shouldn\'t cost the earth. We are committed to ethical sourcing, sustainable materials, and carbon-neutral shipping.'
    },
    {
      icon: Zap,
      title: 'Modern Innovation',
      description: 'We blend traditional craftsmanship with cutting-edge technology to create products that are truly built for the modern world.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pt-24 pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <ScrollReveal>
          <div className="max-w-3xl mb-24">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight">
              We build exceptional products for exceptional people.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
              Elevate was founded on a simple principle: modern life requires modern solutions. We create premium essentials that seamlessly blend into your daily routine, empowering you to do your best work.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-neutral-200 dark:border-neutral-800 py-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1} direction="up">
              <div className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2">{stat.value}</p>
                <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* The Story / Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <ScrollReveal direction="right">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              {/* Using a placeholder aesthetic image, or a nice gradient block if the image fails to load */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Modern office space" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                <p>
                  It started in a small studio in 2026. We were frustrated by the lack of beautifully designed, functional products that didn't scream for attention. Everything was either too flashy or too boring.
                </p>
                <p>
                  We decided to change that. We spent two years sourcing the best materials, testing hundreds of prototypes, and working with master craftsmen to bring our vision to life.
                </p>
                <p>
                  Today, Elevate is a global community of designers, engineers, and creators who believe that the tools you use every day should inspire you. We are just getting started.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Values */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Our Core Values</h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl">The principles that guide everything we do, from product design to customer support.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 0.15}>
              <div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl h-full transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900">
                <div className="h-12 w-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}