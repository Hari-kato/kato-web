"use client";

import { useEffect, useRef } from 'react';

export default function ServicesHero() {
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
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4361EE] to-[#6366F1]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center text-white">
        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
          <span className="text-sm font-medium text-white">OUR WORK</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Transforming Ideas into
          <br />
          <span ref={headingRef} className="heading-highlight">Digital Excellence</span>
        </h1>
        <p ref={contentRef} className="text-xl text-white/90 max-w-3xl mx-auto fade-up-element">
          Explore our portfolio of innovative solutions that have helped businesses 
          across industries achieve their digital transformation goals.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}