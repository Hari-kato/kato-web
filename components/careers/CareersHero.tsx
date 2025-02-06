import { headings } from "@/data/carrers/heroSection";
import { HeroHighlight } from "../ui/hero-highlight";
export default function CareersHero() {
  return (
    <section className=''>
      <div>
        <HeroHighlight
          containerClassName="bg-gradient-careers-light" 
          dottedColor="bg-dot-thick-gray-400"
          hoverColor="bg-dot-thick-slate-50"
          title={headings.title}
          subtitle={headings.subtitle}
        >
          
        </HeroHighlight>
      </div>{" "}
    </section>
  );
}
