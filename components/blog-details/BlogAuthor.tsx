"use client";

interface BlogAuthorProps {
  author: string;
}

export default function BlogAuthor({ author }: BlogAuthorProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
          alt={author}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-white font-medium">{author}</h3>
        <p className="text-white/80 text-sm">Technical Content Writer</p>
      </div>
    </div>
  );
}