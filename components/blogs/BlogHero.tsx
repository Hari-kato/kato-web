"use client";

import { useEffect, useRef } from 'react';

export default function BlogHero() {
  const headingRef = useRef(null);

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

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <section className="blog-hero relative py-24 bg-gradient-to-br from-[#4361EE] to-[#6366F1]">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Insights & <span ref={headingRef} className="heading-highlight">Resources</span>
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Stay updated with the latest trends, insights, and best practices in software development and technology.
        </p>
      </div>
    </section>
  );
}