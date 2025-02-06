import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import BlogContent from './BlogContent';
import BlogAuthor from './BlogAuthor';
import RelatedPosts from './RelatedPosts';

interface Section {
  title: string;
  content: string;
}

interface BlogContentData {
  intro: string;
  title: string;
  sections: Section[];
}

interface BlogPost {
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  link: string;
  color?: string;
  content?: BlogContentData;
}

interface BlogDetailsContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogDetailsContent({
  post,
  relatedPosts,
}: BlogDetailsContentProps) {
  const content = post.content;

  const defaultGradient = {
    from: '#4361EE',
    to: '#6366F1',
  };

  const gradientColors = post.color
    ? {
        from: post.color,
        to: `${post.color}dd`,
      }
    : defaultGradient;

  const gradientStyle = {
    background: `linear-gradient(to bottom right, ${gradientColors.from}, ${gradientColors.to})`,
  };

  if (!content) {
    return <div>Blog content not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="h-20" style={gradientStyle} />

      {/* Hero Section */}
      <section className="relative py-20" style={gradientStyle}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
              {post.category}
            </span>
            <span className="text-white/80">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-8">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blogs" className="hover:text-white">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{post.title}</span>
          </nav>

          <BlogAuthor author={post.author} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div
          className={`grid gap-12 lg:grid-cols-3`}
        >
          {/* Main Content */}
          <div
            className={`lg:col-span-2 mx-auto`}
          >
            <BlogContent content={content} />
          </div>

          {/* {relatedPosts.length > 0 && ( */}
            <aside className="space-y-8">
              <RelatedPosts posts={relatedPosts} />
            </aside>
          {/* )} */}
        </div>
      </div>
    </main>
  );
}
