import Headings from '../ui/Heading';
import { backgroundImage, headings } from '@/data/about-us/heroSection';

export default function AboutHero() {
  return (
    <section className="about-hero relative py-24 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E]">
      <div
        className="absolute inset-0  bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${backgroundImage.imageUrl})` }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <Headings title={headings.title} subtitle={headings.subtitle} />
      </div>
    </section>
  );
}
