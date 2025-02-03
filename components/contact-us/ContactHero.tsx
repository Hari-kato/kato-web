import Headings from '../ui/Heading';
import { backgroundImage, headings } from '@/data/about-us/heroSection';

export default function ContactHero() {
  return (
    <section className="contact-hero relative py-24 bg-gradient-to-br from-[#1f72b7] to-[#6366F1]">
      <div
        className="absolute inset-0  bg-cover bg-center opacity-10"
        style={{ backgroundColor: backgroundImage.imageUrl }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <Headings
          title={headings.title}
          subtitle={headings.subtitle}
          alignment="center"
        />
      </div>
    </section>
  );
}
