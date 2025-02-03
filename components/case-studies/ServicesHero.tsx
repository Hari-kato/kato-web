import Headings from '../ui/Heading';
import { headings, backgroundImage } from '@/data/caseStudies/heroSection';
export default function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1f72b7] to-[#6366F1]">
      <div
        className="absolute inset-0  bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${backgroundImage.imageUrl})` }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center text-white">
        <Headings
          tag={headings.tag}
          title={headings.title}
          subtitle={headings.subtitle}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
