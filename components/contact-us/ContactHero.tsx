import {  headings } from '@/data/about-us/heroSection';
import { HeroHighlight } from '../ui/hero-highlight';
import { Meteors } from '../magicui/meteors';

export default function ContactHero() {
  return (
    // <section>
    //      <HeroHighlight
    //        containerClassName="banner-blue"
    //        dottedColor="bg-dot-thick-gray-400"
    //        hoverColor="bg-dot-thick-slate-50"
    //        title={headings.title}
    //        subtitle={headings.subtitle}
    //      ></HeroHighlight>
    //    </section>
    <div className="relative h-[23rem] flex items-center  justify-center group overflow-hidden banner-blue">
    
      <Meteors gradientColor="white" />  
          </div>

  );
}
