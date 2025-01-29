"use client";

import { useState } from "react";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const blogs = [
  {
    title:
      "Node.js vs Java: Choosing the right backend tech stack for your project",
    date: "January 24, 2025",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    title: "Nodejs Vs. Go – Settling the debate once and for all!",
    date: "January 23, 2025",
    image:
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    title: "React.js benefits: Why It's perfect for your business applications",
    date: "January 23, 2025",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    title: "The Future of AI in Software Development",
    date: "January 22, 2025",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    title: "Microservices vs Monolithic Architecture: A Comprehensive Guide",
    date: "January 21, 2025",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    title: "DevOps Best Practices for 2025",
    date: "January 20, 2025",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
];

function ArticleCard({ study }: { study: any }) {
  return (
    <div className="transform transition-all duration-500 scale-105 shadow-xl">
      <Link
        href={study.link}
        className="block bg-white rounded-xl overflow-hidden group"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-500 text-sm mb-3">{study.date}</p>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#4361EE] transition-colors duration-300">
            {study.title}
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default function Blogs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-[#4361EE]">blogs</span>
          </h2>
          <p className="text-gray-600">
            Stay ahead of the curve by reading our latest blogs based on real
            experience and the latest technology.
          </p>
        </div>

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
              type: "bullets",
              el: ".swiper-pagination",
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
            onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
          >
            {blogs.map((study, index) => (
              <SwiperSlide key={index}>
                <ArticleCard study={study} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: blogs.length }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-[#4361EE]"
                    : "bg-gray-300 hover:bg-[#4361EE]/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center text-[#4361EE] hover:text-[#3730A3] font-semibold group transition-colors duration-300"
          >
            View more blogs
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}