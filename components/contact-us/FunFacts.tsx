import {
  Coffee,
  Dog,
  Rocket,
  Leaf,
  Target,
  Cookie,
  Award,
  Code2,
} from "lucide-react";
import { funFacts, headings } from "@/data/contact-us/fun-facts";
import Headings from "../ui/Heading";
import AnimateOnScroll from "../ui/animateOnScroll";
import Image from "next/image";

const iconComponents = {
  Coffee,
  Dog,
  Rocket,
  Leaf,
  Target,
  Cookie,
  Award,
  Code2,
};

export default function FunFacts() {
  return (
    <section className="relative py-24 bg-gray-50 min-h-[80vh] sm:min-h-[60vh]">
      <div className="absolute inset-0 bg-[url('/buildings4.jpg')] bg-cover bg-center bg-no-repeat opacity-50 "></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <Headings
              tag={headings.tag}
              title={headings.title}
              subtitle={headings.subtitle}
            />
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {funFacts.map((fact, index) => {
            const IconComponent =
              iconComponents[fact.icon as keyof typeof iconComponents];
            return (
              <AnimateOnScroll key={index}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 fade-up-element h-full flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-lg ${fact.bgColor} flex items-center justify-center mb-4`}
                  >
                    <IconComponent className={`w-6 h-6 ${fact.color}`} />
                  </div>
                  <p className="text-gray-600 flex-grow">{fact.text}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

