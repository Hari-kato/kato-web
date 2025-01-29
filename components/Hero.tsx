"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Transforming Ideas Into<br />Digital Reality
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-blue-100">
            We craft custom software solutions that drive innovation and business growth
          </p>
          <Link href="#contact" 
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-secondary-blue rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}