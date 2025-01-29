"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function CareersHero() {
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section className="careers-hero relative flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 careers-gradient opacity-95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Become the next version
            <br />
            of <span ref={headingRef} className="heading-highlight">"you"</span>
          </h1>
          
          <h2 className="text-4xl font-bold text-[#4CAF50] mb-8">
            By working with us
          </h2>
          
          <p ref={contentRef} className="text-xl text-white/90 mb-12 fade-up-element">
            Explore your passion, unleash your creativity, unbox your potential and 
            become the innovator your bright future deserves.
          </p>
          
          <Link
            href="#opportunities"
            className="inline-flex items-center px-8 py-4 bg-[#4CAF50] text-white rounded-full text-lg font-semibold hover:bg-[#45a049] transition-all duration-300 hover:shadow-lg"
          >
            Explore Job Opportunities
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}