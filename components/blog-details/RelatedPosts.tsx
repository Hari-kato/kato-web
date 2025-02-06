import Link from 'next/link';

interface RelatedPostsProps {
  posts: any[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  // // Check if there are no posts, return null if true
  // if (!posts || posts.length === 0) {
  //   return null;
  // }

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-6">Related Articles</h3>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <article key={index} className="flex gap-4">
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium mb-2 line-clamp-2">
                <Link
                  href={post.link}
                  className="hover:text-[#1f72b7] transition-colors"
                >
                  {post.title}
                </Link>
              </h4>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
