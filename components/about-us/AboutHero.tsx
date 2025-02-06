import { headings } from "@/data/about-us/heroSection";
import { HeroHighlight } from "../ui/hero-highlight";

export default function AboutHero() {
  return (
    <section>
      <HeroHighlight
        containerClassName="bg-gradient-about"
        dottedColor="bg-dot-thick-gray-400"
        hoverColor="bg-dot-thick-slate-50"
        title={headings.title}
        subtitle={headings.subtitle}
      ></HeroHighlight>
    </section>
  );
}
