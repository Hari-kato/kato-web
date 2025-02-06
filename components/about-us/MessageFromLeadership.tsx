import { Quote } from "lucide-react";
import { headings, leadershipMessage } from "@/data/about-us/leadership";
import AnimateOnScroll from "../ui/animateOnScroll";
import Headings from "../ui/Heading";

export default function MessageFromLeadership() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <Headings
              tag={headings.tag}
              title={headings.title}
              subtitle={headings.subtitle}
            />
          </AnimateOnScroll>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Leadership Image Section */}
          <AnimateOnScroll>
            <div className="relative">
              <img
                src={leadershipMessage.image}
                alt={leadershipMessage.name}
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary rounded-lg flex items-center justify-center">
                <Quote className="w-10 h-10 text-white" />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Leadership Message Section */}
          <AnimateOnScroll>
            <div>
              <blockquote className="text-xl text-gray-600 mb-8 italic">
                "{leadershipMessage.message}"
              </blockquote>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {leadershipMessage.name}
                </h3>
                <p className="text-gray-600">{leadershipMessage.position}</p>
              </div>

              <div className="mt-8 space-y-4">
                {leadershipMessage.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
