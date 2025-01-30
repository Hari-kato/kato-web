"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { featuredPost } from '@/data/blogs';

export default function FeaturedPost() {
  return (
    <Link href={featuredPost.link} className="block blog-list-card group">
      <article className="mb-12">
        <div className="rounded-2xl overflow-hidden bg-white border">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                {featuredPost.category}
              </span>
              <span className="text-gray-500 text-sm">{featuredPost.date}</span>
            </div>
            <h2 className="text-2xl blog-title font-bold mb-4">
              {featuredPost.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {featuredPost.excerpt}
            </p>
            <span className="inline-flex items-center text-[#2563eb] font-medium transition-colors mt-auto">
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}