"use client";

import { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);
  const headingRef = useRef(null);
  const faqItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.5 }
    );

    const itemObserver = new IntersectionObserver(
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

    faqItemsRef.current.forEach((item) => {
      if (item) {
        itemObserver.observe(item);
      }
    });

    return () => {
      if (headingRef.current) {
        headingObserver.unobserve(headingRef.current);
      }
      faqItemsRef.current.forEach((item) => {
        if (item) {
          itemObserver.unobserve(item);
        }
      });
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndexes(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-[#F0F1FF] rounded-full mb-4">
          <span className="text-sm font-medium text-[#6366F1]">COMMON QUESTIONS</span>
        </div>
        <h2 className="text-[2.71rem] font-bold mb-4">
          Need more <span ref={headingRef} className="heading-highlight">information</span>?
        </h2>
        <p className="text-gray-600 text-lg">
          Find answers to frequently asked questions about our services
        </p>
      </div>

      <div className="w-full">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (faqItemsRef.current[index] = el)}
                className="faq-item bg-white rounded-lg shadow-sm overflow-hidden"
                style={{ alignSelf: 'start' }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    {openIndexes.includes(index) ? (
                      <Minus className="w-6 h-6 text-[#4CAF50]" />
                    ) : (
                      <Plus className="w-6 h-6 text-[#4CAF50]" />
                    )}
                  </div>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndexes.includes(index) ? 'max-h-[1000px] py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}