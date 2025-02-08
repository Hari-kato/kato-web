import { headings } from "@/data/carrers/heroSection";
import { HeroHighlight } from "../ui/hero-highlight";
import Headings from "../ui/Heading";
export default function CareersHero() {
  return (
    <section className="">
      {/* <div>
        <HeroHighlight
          containerClassName=" bg-gradient-careers" 
          dottedColor="bg-dot-thick-gray-400"
          hoverColor="bg-dot-thick-slate-50"
          title={headings.title}
          subtitle={headings.subtitle}
        > 
        </HeroHighlight>
        
      </div> */}
      <header
        className="light relative flex items-center justify-center text-white bg-cover bg-center bg-no-repeat h-auto md:h-[38vh]"
        style={{
          backgroundImage:
            "url(https://cdn.easyfrontend.com/pictures/contact/contact13.jpg)",
            // https://cdn.easyfrontend.com/pictures/subscription/subscription_1.png
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(145deg, #4caf50 0%, #45a049 100%)",
          }}
        ></div>

        <div className="relative z-10 text-center">
          <Headings title={headings.title} subtitle={headings.subtitle} />
        </div>
      </header>
    </section>
  );
}
