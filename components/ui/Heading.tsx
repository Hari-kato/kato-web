'use client';

import { useEffect } from 'react';

interface HeadingsProps {
  tag?: string;
  title: string[];
  subtitle: string;
  alignment?: 'center' | 'left';
}

export default function Headings({
  tag,
  title,
  subtitle,
  alignment,
}: HeadingsProps) {
  const [heading1 = '', heading2 = '', heading3 = ''] = title;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.heading-highlight');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={`mb-16 ${alignment ? `text-${alignment}` : ''}`}>
      {tag && (
        <div className="inline-block px-4 py-2 bg-[#F0F1FF] rounded-full mb-4">
          <span className="text-sm font-medium text-[#6366F1]">{tag}</span>
        </div>
      )}

      <h2 className="text-[2.71rem] font-bold mb-4">
        {heading1 && <span>{heading1} </span>}
        {heading2 && <span className="heading-highlight">{heading2}</span>}
        {heading3 && <span> {heading3}</span>}
      </h2>

      <p className={`mb-16 ${alignment ? `text-${alignment}` : ''}`}>
        {subtitle}
      </p>
    </div>
  );
}
