'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '../ui/animateOnScroll';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  link: string;
}

interface BlogCardProps {
  post: BlogPost;
  compact?: boolean;
}

function BlogCard({ post, compact = false }: BlogCardProps) {
  // Convert the link to a slug format
  const slug = post.link.split('/').pop();
  const blogUrl = `/blogs/${slug}`;

  return (
    <AnimateOnScroll>
      <Link href={blogUrl} className="block blog-list-card group">
        <article className="rounded-xl overflow-hidden bg-white border h-full transition-all duration-300 hover:shadow-lg">
          <div
            className={`${
              compact ? 'hidden' : 'block'
            } aspect-[16/9] overflow-hidden`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 blog-title text-gray-900">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-4 flex-1">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center text-[#2563eb] font-medium transition-colors mt-auto">
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>
        </article>
      </Link>
    </AnimateOnScroll>
  );
}

function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  );
}

BlogGrid.Card = BlogCard;

export default BlogGrid;
