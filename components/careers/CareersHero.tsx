import { headings } from "@/data/carrers/heroSection";
import { HeroHighlight } from "../ui/hero-highlight";
import Headings from "../ui/Heading";
export default function CareersHero() {
  return (
    <section className="">
      <div>
        <HeroHighlight
          containerClassName=" bg-gradient-careers"
          dottedColor="bg-dot-thick-gray-400"
          hoverColor="bg-dot-thick-slate-50"
          title={headings.title}
          subtitle={headings.subtitle}
        ></HeroHighlight>
      </div>
      {/* <header
  className="light relative flex items-center justify-center text-white bg-cover bg-center bg-no-repeat h-auto md:h-[38vh]"
  style={{
    backgroundImage:
      "url(https://cdn.easyfrontend.com/pictures/contact/contact13.jpg)",
  }}
>
  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-careers"></div>

  <div className="relative z-10 text-center">
    <Headings title={headings.title} subtitle={headings.subtitle} />
  </div>
</header> */}
    </section>
  );
}
