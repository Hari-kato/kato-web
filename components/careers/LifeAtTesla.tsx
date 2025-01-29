"use client";

import { useEffect, useRef } from 'react';
import { lifeAtTeslaImages } from '@/data/lifeAtTesla';

export default function LifeAtTesla() {
  const headingRef = useRef(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;
    if (!topRow || !bottomRow) return;

    let topScrollInterval: NodeJS.Timeout;
    let bottomScrollInterval: NodeJS.Timeout;

    const startScroll = () => {
      // Top row scrolls right
      topScrollInterval = setInterval(() => {
        if (topRow) {
          topRow.scrollLeft += 1;
          if (topRow.scrollLeft >= (topRow.scrollWidth - topRow.clientWidth)) {
            topRow.scrollLeft = 0;
          }
        }
      }, 20);

      // Bottom row scrolls left
      bottomScrollInterval = setInterval(() => {
        if (bottomRow) {
          bottomRow.scrollLeft -= 1;
          if (bottomRow.scrollLeft <= 0) {
            bottomRow.scrollLeft = bottomRow.scrollWidth - bottomRow.clientWidth;
          }
        }
      }, 20);
    };

    startScroll();

    return () => {
      if (topScrollInterval) clearInterval(topScrollInterval);
      if (bottomScrollInterval) clearInterval(bottomScrollInterval);
    };
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Life at <span className="text-[#4361EE]">Tesla</span>
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        {/* Top Row */}
        <div 
          ref={topRowRef}
          className="w-full overflow-x-hidden whitespace-nowrap"
        >
          <div className="inline-flex gap-4 min-w-full">
            {[...lifeAtTeslaImages, ...lifeAtTeslaImages].map((image, index) => (
              <div
                key={`top-${index}`}
                className={`relative h-[300px] ${
                  index % 2 === 0 ? 'w-[250px]' : 'w-[400px]'
                } flex-shrink-0 overflow-hidden rounded-lg`}
              >
                <img
                  src={image}
                  alt={`Life at Tesla ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div 
          ref={bottomRowRef}
          className="w-full overflow-x-hidden whitespace-nowrap"
        >
          <div className="inline-flex gap-4 min-w-full">
            {[...lifeAtTeslaImages.reverse(), ...lifeAtTeslaImages].map((image, index) => (
              <div
                key={`bottom-${index}`}
                className={`relative h-[300px] ${
                  index % 2 === 0 ? 'w-[400px]' : 'w-[250px]'
                } flex-shrink-0 overflow-hidden rounded-lg`}
              >
                <img
                  src={image}
                  alt={`Life at Tesla ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}