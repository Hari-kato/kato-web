import { blogPosts, featuredPost } from '@/data/blogs';
import BlogDetailsContent from '@/components/blog-details/BlogDetailsContent';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // Find the blog post from either featured or regular posts
  const allPosts = [featuredPost, ...blogPosts];
  const post = allPosts.find((post) => {
    const postSlug = post.link.split('/').pop();
    return postSlug === slug;
  });

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <div className="h-20 bg-gradient-to-br from-[#1f72b7] to-[#6366F1]" />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div>Post not found</div>
        </div>
      </main>
    );
  }

  // Get related posts from the same category
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p !== post)
    .slice(0, 3);

  return <BlogDetailsContent post={post} relatedPosts={relatedPosts} />;
}
export function generateStaticParams() {
  const allPosts = [featuredPost, ...blogPosts];

  return allPosts.map((post) => {
    const postSlug = post.link.split('/').pop();
    return { slug: postSlug };
  });
}
