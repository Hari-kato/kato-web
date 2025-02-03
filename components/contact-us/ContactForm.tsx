'use client';

import { ChevronDown } from 'lucide-react';
import { headings } from '@/data/home/contact';
import { services } from '@/data/contact-us/services';
import Headings from '../ui/Heading';
import AnimateOnScroll from '../ui/animateOnScroll';

export default function ContactForm() {
  let selectedService = '';
  let isDropdownOpen = false;

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    isDropdownOpen = !isDropdownOpen;
    const dropdown = document.querySelector('.dropdown-menu') as HTMLElement;
    if (dropdown) {
      dropdown.style.display = isDropdownOpen ? 'block' : 'none';
    }

    // Toggle Chevron icon rotation
    const chevron = event.currentTarget.querySelector(
      '.chevron'
    ) as HTMLElement;
    if (chevron) {
      chevron.style.transform = isDropdownOpen
        ? 'rotate(180deg)'
        : 'rotate(0deg)';
    }
  };

  const selectService = (service: string) => {
    selectedService = service;
    isDropdownOpen = false;
    const dropdown = document.querySelector('.dropdown-menu') as HTMLElement;
    if (dropdown) {
      dropdown.style.display = 'none';
    }

    const serviceButton = document.querySelector(
      '.service-button'
    ) as HTMLElement;
    if (serviceButton) {
      serviceButton.textContent = service;
    }
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <Headings
              tag={headings.tag}
              title={headings.title}
              subtitle={headings.subtitle}
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <form className="flex flex-col md:flex-row gap-8">
            <div className="space-y-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[#1A1B1E] text-base mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name *"
                    className="w-full px-4 py-5 rounded-lg border border-[#E5E7EB] text-[#1A1B1E] placeholder-[#9CA3AF] focus:border-[#1f72b7] focus:ring-1 focus:ring-[#1f72b7] transition-all duration-200 bg-white text-base"
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
                    className="w-full px-4 py-5 rounded-lg border border-[#E5E7EB] text-[#1A1B1E] placeholder-[#9CA3AF] focus:border-[#1f72b7] focus:ring-1 focus:ring-[#1f72b7] transition-all duration-200 bg-white text-base"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[#1A1B1E] text-base mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your company name"
                    className="w-full px-4 py-5 rounded-lg border border-[#E5E7EB] text-[#1A1B1E] placeholder-[#9CA3AF] focus:border-[#1f72b7] focus:ring-1 focus:ring-[#1f72b7] transition-all duration-200 bg-white text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[#1A1B1E] text-base mb-3.5">
                    Your Phone
                  </label>
                  <div className="flex w-full">
                    <div className="flex items-center justify-center w-20 px-3 border border-[#E5E7EB] border-r-0 rounded-l-lg bg-white">
                      <span className="text-base">🇮🇳</span>
                      <span className="ml-2 text-[#1A1B1E] text-base">+91</span>
                    </div>
                    <input
                      type="tel"
                      className="w-full px-4 py-5 rounded-r-lg border border-[#E5E7EB] text-[#1A1B1E] placeholder-[#9CA3AF] focus:border-[#1f72b7] focus:ring-1 focus:ring-[#1f72b7] transition-all duration-200 bg-white text-base"
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
                    className="service-button w-full px-4 py-5 rounded-lg border border-[#E5E7EB] text-left flex items-center justify-between bg-white focus:border-[#1f72b7] focus:ring-1 focus:ring-[#1f72b7] transition-all duration-200"
                    onClick={toggleDropdown}
                  >
                    <span className="service-text text-[#9CA3AF]">
                      {selectedService || 'Select your service *'}
                    </span>
                    <ChevronDown className="chevron w-5 h-5 text-[#9CA3AF] transition-transform duration-200" />
                  </button>

                  <div
                    className="dropdown-menu absolute z-10 w-full mt-1 bg-white border border-[#E5E7EB] rounded-lg shadow-lg"
                    style={{ display: 'none' }}
                  >
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => selectService(service)}
                        className="w-full px-4 py-3 text-left text-[#1A1B1E] hover:bg-[#F9FAFB] transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side (Help Section) */}
            <div className="space-y-2 flex-1 md:pl-8">
              <label className="block text-[#1A1B1E] text-base mb-1.5">
                How can we help? <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Message *"
                rows={12}
                className="w-full px-4 py-4 rounded-lg border border-[#E5E7EB] text-[#1A1B1E] placeholder-[#9CA3AF] focus:border-[#1f72b7] focus:ring-1 focus:ring-[#1f72b7] transition-all duration-200 bg-white text-base resize-none"
                required
              ></textarea>
            </div>
          </form>
        </AnimateOnScroll>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="px-16 py-4 rounded-full font-semibold text-white text-lg transition-colors duration-200 bg-[#1f72b7] hover:bg-[#3b56e0] hover:shadow-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
