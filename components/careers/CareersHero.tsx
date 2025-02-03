'use client';

import Link from 'next/link';
import Headings from '../ui/Heading';
import { headings, backgroundImage } from '@/data/carrers/heroSection';
export default function CareersHero() {
  return (
    <section className="careers-hero relative flex items-center">
      <div
        className="absolute inset-0  bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage.imageUrl})` }}
      ></div>
      <div className="absolute inset-0 careers-gradient opacity-95"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <Headings
            title={headings.title}
            subtitle={headings.subtitle}
            alignment="left"
          />

          <Link
            href="#opportunities"
            className="inline-flex items-center px-8 py-4 bg-[#1f72b7] text-white rounded-full text-lg font-semibold hover:bg-[#1f72b7] transition-all duration-300 hover:shadow-lg"
          >
            Explore Job Opportunities
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
