import { headings } from "@/data/caseStudies/heroSection";
import { HeroHighlight } from "../ui/hero-highlight";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";
export default function ServicesHero() {
  return (
    <section className="mb-4">
      {/* <HeroHighlight
        containerClassName="banner-blue"
        dottedColor="bg-dot-thick-gray-400"
        hoverColor="bg-dot-thick-slate-50"
        title={headings.title}
        subtitle={headings.subtitle}
      ></HeroHighlight> */}
      <div className="relative h-[23rem] flex items-center  justify-center w-full group banner-blue">
      <AnimatedGridPattern color="#5a8bff" /> 
      </div>
    </section>
  );
}
