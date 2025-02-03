'use client';
import Link from 'next/link';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Swiper as SwiperClass } from 'swiper';
import { blogs } from '@/data/home/blogs';
import AnimateOnScroll from './ui/animateOnScroll';

function ArticleCard({ study }: { study: any }) {
  return (
    <div className="transform transition-all duration-500 scale-105 shadow-xl">
      <Link
        href={study.link}
        className="block bg-white rounded-2xl overflow-hidden group"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-500 text-sm mb-3">{study.date}</p>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#1f72b7] transition-colors duration-300">
            {study.title}
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default function Blogs() {
  let activeIndex = 0;

  const handleSlideChange = (swiper: SwiperClass) => {
    activeIndex = swiper.activeIndex;
    document.querySelectorAll('.dot-indicator').forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add('w-8', 'bg-[#1f72b7]');
        dot.classList.remove('bg-gray-300');
      } else {
        dot.classList.remove('w-8', 'bg-[#1f72b7]');
        dot.classList.add('bg-gray-300');
      }
    });
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-[#1f72b7]">blogs</span>
            </h2>
            <p className="text-gray-600">
              Stay ahead of the curve by reading our latest blogs based on real
              experience and the latest technology.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              type: 'bullets',
              el: '.swiper-pagination',
            }}
            effect="slide"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={handleSlideChange}
          >
            {blogs.map((study, index) => (
              <SwiperSlide key={index} className="rounded-2xl overflow-hidden">
                <ArticleCard study={study} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: blogs.length }).map((_, index) => (
              <button
                key={index}
                className="dot-indicator w-2 h-2 rounded-full bg-gray-300 hover:bg-[#1f72b7]/50 transition-all duration-300"
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center text-[#1f72b7] hover:text-[#3730A3] font-semibold group transition-colors duration-300"
          >
            View more blogs
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
