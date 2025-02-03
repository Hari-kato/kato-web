'use client';

import { MapPin } from 'lucide-react';
import Headings from '../ui/Heading';
import { officeLocation, headings } from '@/data/contact-us/locations';
import AnimateOnScroll from '../ui/animateOnScroll';

export default function AddressBlock() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <Headings title={headings.title} subtitle={headings.subtitle} />
          </div>
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 fade-up-element border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-[#1f72b7]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#1f72b7]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {officeLocation.city}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {officeLocation.address}
                  </p>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      <span className="font-medium">Working Hours:</span>{' '}
                      <span className="text-[#1f72b7]">
                        {officeLocation.workingHours}
                      </span>
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Time Zone:</span>{' '}
                      {officeLocation.timeZone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
