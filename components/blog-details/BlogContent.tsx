"use client";

export default function BlogContent({ content }) {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-lg leading-relaxed text-gray-600 mb-8">
        {content.intro}
      </p>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {content.title}
      </h1>

      {content.sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            {section.content}
          </p>
        </div>
      ))}
    </article>
  );
}