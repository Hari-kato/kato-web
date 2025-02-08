"use client";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperClass } from "swiper";
import { blogs, headings } from "@/data/home/blogs";
import AnimateOnScroll from "./ui/animateOnScroll";
import Headings from "./ui/Heading";

function ArticleCard({ study }: { study: any }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
    <Link href={study.link} className="block group h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center text-white font-semibold">
            Explore Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
         
          <h3 className="text-xl font-bold mt-2 mb-4 line-clamp-1 text-gray-900 group-hover:text-[#4361EE] transition-colors duration-300">
            {study.date}
          </h3>
        </div>
        <p className="text-gray-600 text-base line-clamp-2 min-h-[3rem]">
          {study.title}
        </p>
      </div>
    </Link>
  </div>
  
  );
}

export default function Blogs() {
  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Headings
              tag={headings.tag}
              title={headings.title}
              subtitle={headings.subtitle}
            />
          </div>
        </AnimateOnScroll>

        <div className="w-full overflow-hidden px-0 md:px-5">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".blogs-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-12 !overflow-visible px-4"
          >
            {blogs.map((study, index) => (
              <SwiperSlide
                key={index}
                className="h-full flex flex-col rounded-lg shadow-lg"
              >
                <ArticleCard study={study} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="blogs-pagination flex justify-center mt-8" />
        </div>

        {/* Mobile Button */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group transition-colors duration-300"
          >
            View more blogs
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
