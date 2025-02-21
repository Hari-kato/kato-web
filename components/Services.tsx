import { services, headings } from "@/data/home/services";
import Link from "next/link";
import AnimateOnScroll from "./ui/animateOnScroll";
import Headings from "./ui/Heading";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section className="py-9 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-4">
        <Headings
          tag={headings.tag}
          title={headings.title}
          subtitle={headings.subtitle}
          alignment="center"
        />
        <AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white shadow rounded-xl p-8 transition-all duration-300 hover:shadow-lg group flex flex-col h-full min-h-[400px] opacity-0 transform translate-y-10 animate-on-scroll"
              >
                <Link href={service.url}>
                  <div
                    className={`w-16 h-16 rounded-lg ${service.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 blog-title">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div
                    className="text-primary font-semibold hover:text-primary-dark transition-colors duration-300 flex items-center group"
                  >
                    Learn more
                    <ArrowRight className="ml-1 mt-1 w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-[-5px] group-hover:translate-x-1 transition-transform duration-500" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
