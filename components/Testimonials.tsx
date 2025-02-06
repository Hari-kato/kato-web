import { testimonials, headings } from "@/data/home/testimonials";
import Headings from "./ui/Heading";
import AnimateOnScroll from "./ui/animateOnScroll";

export default function Testimonials() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Headings
            tag={headings.tag}
            title={headings.title}
            subtitle={headings.subtitle}
          />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance] mb-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index}>
              <div className="testimonial-card break-inside-avoid mb-8 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll">
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
