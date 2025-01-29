"use client";

import { useEffect, useRef } from 'react';
import { 
  Home, 
  UtensilsCrossed, 
  Heart, 
  Calendar, 
  Award, 
  Umbrella 
} from 'lucide-react';

const benefits = [
  {
    icon: <Home className="w-12 h-12 text-[#4361EE]" />,
    title: "Free accommodation with all benefits",
    description: "Enjoy free stay near our office with all the benefits and experience a stress free commute."
  },
  {
    icon: <UtensilsCrossed className="w-12 h-12 text-[#4361EE]" />,
    title: "Access to free food from our kitchen",
    description: "Have a delightful breakfast, lunch, dinner, tea/coffee from our hygienic kitchen."
  },
  {
    icon: <Heart className="w-12 h-12 text-[#4361EE]" />,
    title: "Health insurance for you and your family",
    description: "Your health comes first and we got you covered with a comprehensive package to support you."
  },
  {
    icon: <Calendar className="w-12 h-12 text-[#4361EE]" />,
    title: "Pre approved leaves by default",
    description: "Sick leave? Time to relax, rejuvenate? All your leaves are pre approved so that you can come back refreshed."
  },
  {
    icon: <Award className="w-12 h-12 text-[#4361EE]" />,
    title: "Instant reward for your performance",
    description: "We recognize the works of our employees immediately and effectively."
  },
  {
    icon: <Umbrella className="w-12 h-12 text-[#4361EE]" />,
    title: "Well protected term insurance",
    description: "We provide a great backup for your loved ones and their future."
  }
];

export default function Benefits() {
  const headingRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Benefits and <span className="text-[#4361EE]">Perks</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our employees are the pillars of our company and here's how we take care of their well-being!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 fade-up-element"
            >
              <div className="w-16 h-16 rounded-lg bg-[#4361EE]/10 flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}