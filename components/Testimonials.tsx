"use client";

import { useEffect, useRef } from 'react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const headingRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.5 }
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate', 'stagger-animation');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headingRef.current) {
      headingObserver.observe(headingRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) {
        cardObserver.observe(card);
      }
    });

    return () => {
      if (headingRef.current) {
        headingObserver.unobserve(headingRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) {
          cardObserver.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#F0F1FF] rounded-full mb-4">
            <span className="text-sm font-medium text-[#6366F1]">CLIENT FEEDBACK</span>
          </div>
          <h2 className="text-[2.71rem] font-bold mb-4">
            What our <span ref={headingRef} className="heading-highlight">clients</span> say
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories from businesses we've helped transform
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance] mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="testimonial-card break-inside-avoid mb-8 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}