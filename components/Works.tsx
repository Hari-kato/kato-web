"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { works } from '@/data/works';
import WorkCard from '@/components/ui/work-card';
import SectionHeading from '@/components/ui/section-heading';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Works() {
  const headingRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.classList.add('fade-right');
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section className="py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-end">
          <SectionHeading
            badge="FEATURED WORKS"
            title="Our Recent"
            highlight="Best Works"
            description="Our recent projects highlight our expertise in delivering tailored solutions that meet the unique needs and objectives of our clients."
          />
          <Link
            href="/case-studies"
            className="hidden md:inline-flex items-center px-8 py-4 bg-[#4361EE] text-white rounded-full font-medium hover:bg-[#3730A3] transition-colors duration-200"
          >
            View All Works
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.works-pagination',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }}
          className="pb-12 !overflow-visible px-4"
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <div ref={(el) => (cardsRef.current[index] = el)} className="fade-right-element">
                <WorkCard work={work} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="works-pagination flex justify-center mt-8" />
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link
          href="/case-studies"
          className="inline-flex items-center px-8 py-4 bg-[#4361EE] text-white rounded-full font-medium hover:bg-[#3730A3] transition-colors duration-200"
        >
          View ALL WORKS
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}