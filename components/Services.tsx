"use client";

import { useEffect, useRef } from 'react';
import { Cpu, Camera, Smartphone, Globe, BrainCircuit as Circuit, Palette } from 'lucide-react';

const services = [
  {
    icon: <Cpu className="w-12 h-12 text-[#4285F4]" />,
    title: "Generative AI",
    description: "Harness the power of cutting-edge AI models for your business needs. Create intelligent solutions that automate complex tasks and generate innovative content. Transform your operations with AI-driven decision making.",
    learnMoreLink: "#",
    iconBg: "bg-blue-50"
  },
  {
    icon: <Camera className="w-12 h-12 text-[#FF5252]" />,
    title: "Video Analytics",
    description: "Advanced video processing and real-time analytics for actionable insights. Implement intelligent surveillance and monitoring solutions. Extract valuable data from video streams with machine learning.",
    learnMoreLink: "#",
    iconBg: "bg-red-50"
  },
  {
    icon: <Smartphone className="w-12 h-12 text-[#34A853]" />,
    title: "Mobile App Development",
    description: "Create stunning native and cross-platform mobile applications. Deliver seamless user experiences across iOS and Android platforms. Build scalable and performance-optimized mobile solutions.",
    learnMoreLink: "#",
    iconBg: "bg-green-50"
  },
  {
    icon: <Globe className="w-12 h-12 text-[#4A90E2]" />,
    title: "Web App Development",
    description: "Develop modern, responsive web applications using cutting-edge technologies. Create scalable solutions that work across all devices and browsers. Implement robust security and performance optimization.",
    learnMoreLink: "#",
    iconBg: "bg-indigo-50"
  },
  {
    icon: <Circuit className="w-12 h-12 text-[#FF6B3D]" />,
    title: "IoT Development",
    description: "Connect and manage smart devices with custom IoT solutions. Implement secure data collection and real-time monitoring systems. Create scalable IoT infrastructure for enterprise applications.",
    learnMoreLink: "#",
    iconBg: "bg-orange-50"
  },
  {
    icon: <Palette className="w-12 h-12 text-[#2196F3]" />,
    title: "UI/UX Design",
    description: "Create intuitive and engaging user interfaces for digital products. Design seamless user experiences based on research and best practices. Develop consistent design systems and brand guidelines.",
    learnMoreLink: "#",
    iconBg: "bg-blue-50"
  }
];

export default function Services() {
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
            entry.target.classList.add('animate');
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
    <section className="py-24 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#F0F1FF] rounded-full mb-4">
            <span className="text-sm font-medium text-[#6366F1]">HOW WE DELIVER</span>
          </div>
          <h2 className="text-[2.71rem] font-bold mb-4">
            Innovative <span ref={headingRef} className="heading-highlight">solutions</span> for tomorrow
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-lg group"
            >
              <div className={`w-16 h-16 rounded-lg ${service.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a 
                href={service.learnMoreLink}
                className="text-[#4CAF50] font-semibold hover:text-[#45a049] transition-colors duration-300"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}