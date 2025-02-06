import { Target, Compass, Award, Users } from "lucide-react";
import { headings, visionMissionData } from "@/data/about-us/vision-mission";
import AnimateOnScroll from "../ui/animateOnScroll";
import Headings from "../ui/Heading";

export default function VisionMission() {
  const icons = {
    target: Target,
    compass: Compass,
    award: Award,
    users: Users,
  };

  return (
    <section className="py-14 bg-gray-50">
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <AnimateOnScroll>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative">
              <div className="relative mb-8">
                <div className="absolute -bottom-2 md:-bottom-0 left-6 w-16 h-16 rounded-lg bg-primary flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {visionMissionData.vision.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {visionMissionData.vision.description}
              </p>
              <ul className="space-y-3">
                {visionMissionData.vision.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Mission */}
          <AnimateOnScroll>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative">
              <div className="relative mb-8">
                <div className="absolute -bottom-2 md:-bottom-1 left-6 w-16 h-16 rounded-lg bg-primary flex items-center justify-center">
                  <Compass className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {visionMissionData.mission.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {visionMissionData.mission.description}
              </p>
              <ul className="space-y-3">
                {visionMissionData.mission.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {visionMissionData.values.map((value, index) => {
            const IconComponent = icons[value.icon as keyof typeof icons];
            return (
              <AnimateOnScroll key={index}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
