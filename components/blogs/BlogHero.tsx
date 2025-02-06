import { headings } from "@/data/blogs/heroSection";
import { HeroHighlight } from "../ui/hero-highlight";

export default function BlogHero() {
  return (
    <section>
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
