import { headings } from "@/data/blogs/heroSection";
import { HeroHighlight } from "../ui/hero-highlight";
import { BoxesCore } from "../ui/background-boxes";
import Headings from "../ui/Heading";
import { SparklesCore } from "../ui/sparkles";

export default function BlogHero() {
  return (
    <section>
      {/* <HeroHighlight
        containerClassName="banner-blue"
        dottedColor="bg-dot-thick-gray-400"
        hoverColor="bg-dot-thick-slate-50"
        title={headings.title}
        subtitle={headings.subtitle}
      ></HeroHighlight> */}
      <div className="relative h-[23rem] flex items-center justify-center w-full group overflow-hidden banner-blue">
        {/* Sparkles Background */}
        <div className="absolute inset-0">
          <SparklesCore background="#4a5fe5" />
        </div>

        {/* Centered Headings */}
        <div className="relative z-10 text-white flex items-center justify-center text-center">
          <Headings
            title={headings.title}
            subtitle={headings.subtitle}
            alignment="center"
          />
        </div>
      </div>
    </section>
  );
}
