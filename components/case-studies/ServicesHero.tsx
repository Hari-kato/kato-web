import { headings } from "@/data/caseStudies/heroSection";
import { HeroHighlight } from "../ui/hero-highlight";
export default function ServicesHero() {
  return (
    <section className="mb-4">
      <HeroHighlight
        containerClassName="bg-gradient-case-study"
        dottedColor="bg-dot-thick-gray-400"
        hoverColor="bg-dot-thick-slate-50"
        title={headings.title}
        subtitle={headings.subtitle}
      ></HeroHighlight>
    </section>
  );
}
