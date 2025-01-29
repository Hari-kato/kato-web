"use client";

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Works from '@/components/Works';
import Testimonials from '@/components/Testimonials';
import Blogs from '@/components/Blogs';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Clients />
      <Works />
      <Testimonials />
      <Blogs />
      <FAQ />
      <Contact />
    </div>
  );
}