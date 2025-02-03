import { headings } from '@/data/blogs/heroSection';
import Headings from '../ui/Heading';

export default function BlogHero() {
  return (
    <section className="blog-hero relative py-24 bg-gradient-to-br from-[#1f72b7] to-[#6366F1]">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <Headings title={headings.title} subtitle={headings.subtitle} />
      </div>
    </section>
  );
}
