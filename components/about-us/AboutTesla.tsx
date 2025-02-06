import { aboutData, aboutImage } from "@/data/about-us/about";
import { LightbulbIcon, Zap } from "lucide-react";
import AnimateOnScroll from "../ui/animateOnScroll";

export default function AboutTesla() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={aboutImage.imageurl}
              alt="Business professionals discussing strategy"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <AnimateOnScroll>
            <div className="about-card fade-up-element animate-on-scroll">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                {aboutData.title}
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                {aboutData.description}
              </p>
              <div className="grid gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <LightbulbIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {aboutData.solutions.title}
                    </h3>
                    <p className="text-gray-600">
                      {aboutData.solutions.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {aboutData.response.title}
                    </h3>
                    <p className="text-gray-600">
                      {aboutData.response.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>{" "}
          {/* End wrapping with AnimateOnScroll */}
        </div>
      </div>
    </section>
  );
}
