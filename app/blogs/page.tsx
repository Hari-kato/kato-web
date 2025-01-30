"use client";

import BlogHero from '@/components/blogs/BlogHero';
import FeaturedPost from '@/components/blogs/FeaturedPost';
import BlogGrid from '@/components/blogs/BlogGrid';
import Newsletter from '@/components/blogs/Newsletter';
import { blogPosts } from '@/data/blogs';

export default function BlogsPage() {
  const firstPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-white pt-20">
      <BlogHero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FeaturedPost />
          </div>
          <div className="hidden lg:block">
            <Newsletter />
            <BlogGrid.Card post={firstPost} compact/>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map((post, index) => (
            <BlogGrid.Card key={index} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}