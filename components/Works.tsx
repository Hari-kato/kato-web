"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import WorkCard from "@/components/ui/work-card";
import { works, headings } from "@/data/home/works";
import Headings from "./ui/Heading";
import AnimateOnScroll from "./ui/animateOnScroll";
import AnimatedButton from "./ui/AnimatedButton";

export default function Works() {
  return (
    <section className="py-14 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 min-w-0 md:max-w-[600px]">
            <Headings
              tag={headings.tag}
              title={headings.title}
              subtitle={headings.subtitle}
              alignment="left"
            />
          </div>

          <div className="hidden md:inline-flex items-center">
            <AnimatedButton
              href="/case-studies"
              label="View All Works"
              customClass="px-8 py-4"
              icon={<ArrowRight />}
            />
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden px-8">
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
            el: ".works-pagination",
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
            },
          }}
          className="pb-12 !overflow-visible px-4"
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <AnimateOnScroll>
                <div>
                  <WorkCard work={work} />
                </div>
              </AnimateOnScroll>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="works-pagination flex justify-center mt-8" />
      </div>

      {/* Show Button Only on Mobile */}
      <div className="mt-8 text-center md:hidden">
        <Link
          href="/case-studies"
          className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark hover:shadow-lg text-white rounded-full font-medium transition-colors duration-200"
        >
          View ALL WORKS
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
