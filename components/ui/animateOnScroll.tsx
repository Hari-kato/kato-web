'use client';

import { useEffect } from 'react';

const AnimateOnScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Element is in view');
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing after animation is done
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return <div className="animate-on-scroll">{children}</div>;
};

export default AnimateOnScroll;
