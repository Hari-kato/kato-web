import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { featuredPost } from '@/data/blogs';
import AnimateOnScroll from '../ui/animateOnScroll';

export default function FeaturedPost() {
  // Convert the link to a slug format
  const slug = featuredPost.link.split('/').pop();
  const blogUrl = `/blogs/${slug}`;

  return (
    <AnimateOnScroll>
      <Link href={blogUrl} className="block blog-list-card group">
        <article className="mb-12">
        <div className="rounded-2xl overflow-hidden bg-white border shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
  <div className="aspect-[16/9] overflow-hidden">
    <img
      src={featuredPost.image}
      alt={featuredPost.title}
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-8 min-h-[300px] flex flex-col">
  <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
        {featuredPost.category}
      </span>
      <span className="text-gray-500 text-sm">
        {featuredPost.date}
      </span>
    </div>
    <h2 className="text-2xl blog-title font-bold mb-4">
      {featuredPost.title}
    </h2>
    <p className="text-gray-600 mb-6 flex-grow">{featuredPost.excerpt}</p>
    <span className="inline-flex items-center text-[#2563eb] font-medium transition-colors mt-auto">
      Read More <ArrowRight className="ml-2 w-4 h-4" />
    </span>
  </div>
</div>

        </article>
      </Link>
    </AnimateOnScroll>
  );
}
