"use client";

import { useEffect, useRef } from 'react';
import { 
  Users, Clock, ArrowUpRight, Target, 
  Award, Briefcase, GraduationCap, Users2, 
  Heart, Medal 
} from 'lucide-react';

const benefits = [
  {
    icon: <Target className="w-6 h-6 text-[#4361EE]" />,
    title: "Growth-centric work",
  },
  {
    icon: <Heart className="w-6 h-6 text-[#4361EE]" />,
    title: "Work-life balance",
  },
  {
    icon: <Users className="w-6 h-6 text-[#4361EE]" />,
    title: "Supportive culture",
  },
  {
    icon: <ArrowUpRight className="w-6 h-6 text-[#4361EE]" />,
    title: "Career advancement",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#4361EE]" />,
    title: "Innovative projects",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#4361EE]" />,
    title: "Flexible hours",
  },
  {
    icon: <Users2 className="w-6 h-6 text-[#4361EE]" />,
    title: "Diversity & inclusion",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-[#4361EE]" />,
    title: "Mentorship opportunities",
  },
  {
    icon: <Award className="w-6 h-6 text-[#4361EE]" />,
    title: "Recognition programs",
  },
  {
    icon: <Medal className="w-6 h-6 text-[#4361EE]" />,
    title: "Community engagement",
  }
];

export default function WhyUs() {
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Join Us for a{' '}
              <span className="text-[#4361EE]">Journey of Growth</span>
            </h2>
            <p ref={contentRef} className="text-gray-600 text-lg fade-up-element">
              We care deeply about your growth and success. Our programs focus on 
              enhancing your knowledge and capabilities. At Tesla, you can be 
              assured of a fulfilling career, all while supporting your personal 
              well-being.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#4361EE]/10 flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="font-medium text-gray-900">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}