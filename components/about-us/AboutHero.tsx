import { headings } from "@/data/about-us/heroSection";
import { HeroHighlight } from "../ui/hero-highlight";
import { BoxesCore } from "../ui/background-boxes";
import Headings from "../ui/Heading";

export default function AboutHero() {
  return (
    <section>
      {/* <HeroHighlight
        containerClassName=" banner-about"k
        dottedColor="bg-dot-thick-gray-400"
        hoverColor="bg-dot-thick-slate-50"
        title={headings.title}
        subtitle={headings.subtitle}
      ></HeroHighlight> */}
      <div className="relative h-[23rem] flex items-center  justify-center w-full group overflow-hidden banner-about">
        <div className="text-white items-center justify-center flex z-10">
          <Headings
            title={headings.title}
            subtitle={headings.subtitle}
            alignment="center"
          />
        </div>
        <BoxesCore />
      </div>
    </section>
  );
}
