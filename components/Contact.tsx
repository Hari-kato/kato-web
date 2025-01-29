"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const services = [
  "Custom Software Development",
  "Digital Transformation",
  "Cloud Solutions",
  "Cybersecurity",
  "Data Analytics",
  "IoT Solutions",
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#F0F1FF] rounded-full mb-4">
            <span className="text-sm font-medium text-[#6366F1]">GET IN TOUCH</span>
          </div>
          <h2 className="text-[2.71rem] font-bold mb-4">
            Start your <span ref={headingRef} className="heading-highlight">journey</span> with us
          </h2>
          <p className="text-gray-600 text-lg">
            Let's discuss how we can help transform your business
          </p>
        </div>

        <form className="grid md:grid-cols-2 gap-8">
          {/* Left Side (Form Fields) */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[#1A1B1E] text-base mb-1.5">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name *"
                  className="w-full px-4 py-5 rounded-lg border border-[#E5E7EB] text-[#1A1B1E] placeholder-[#9CA3AF] focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all duration-200 bg-white text-base"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[#1A1B1E] text-base mb-1.5">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address *"
                  className="w-full px-4 py-5 rounded-lg border border-[#E5E7EB] text-[#1A1B1E] placeholder-[#9CA3AF] focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all duration-200 bg-white text-base"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[#1A1B1E] text-base mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full px-4 py-5 rounded-lg border border-[#E5E7EB] text-[#1A1B1E] placeholder-[#9CA3AF] focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all duration-200 bg-white text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[#1A1B1E] text-base mb-3.5">
                  Your Phone
                </label>
                <div className="flex">
                  <div className="flex items-center justify-center w-20 px-3 border border-[#E5E7EB] border-r-0 rounded-l-lg bg-white">
                    <span className="text-base">🇮🇳</span>
                    <span className="ml-2 text-[#1A1B1E] text-base">+91</span>
                  </div>
                  <input
                    type="tel"
                    className="w-full px-4 py-5 rounded-r-lg border border-[#E5E7EB] text-[#1A1B1E] placeholder-[#9CA3AF] focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all duration-200 bg-white text-base"
                  />
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="space-y-2">
              <label className="block text-[#1A1B1E] text-base mb-1.5">
                Services <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-5 rounded-lg border border-[#E5E7EB] text-left flex items-center justify-between bg-white focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all duration-200"
                >
                  <span
                    className={
                      selectedService ? "text-[#1A1B1E]" : "text-[#9CA3AF]"
                    }
                  >
                    {selectedService || "Select your service *"}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9CA3AF] transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-[#E5E7EB] rounded-lg shadow-lg">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => {
                          setSelectedService(service);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left text-[#1A1B1E] hover:bg-[#F9FAFB] transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side  */}
          <div className="flex flex-col">
            <div className="space-y-2 flex-1">
              <label className="block text-[#1A1B1E] text-base mb-1.5">
                How can we help? <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Message *"
                rows={12}
                className="w-full px-4 py-4 rounded-lg border border-[#E5E7EB] text-[#1A1B1E] placeholder-[#9CA3AF] focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all duration-200 bg-white text-base resize-none"
                required
              ></textarea>
            </div>
          </div>

          <div className="col-span-2 flex justify-center pt-4">
            <button
              type="submit"
              className="px-16 py-4 bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold rounded-full text-lg transition-all duration-300 hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}