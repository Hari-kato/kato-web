'use client';

// Define the Section type with `content` as a required string
interface Section {
  title: string;
  content: string; // Make content required here
  lists?: {
    // Optional lists
    type: 'ul' | 'ol';
    items: string[];
  }[];
  images?: {
    // Optional images
    url: string;
    caption: string;
  }[];
}

export interface Content {
  intro: string;
  title: string;
  sections: Section[]; // Array of Section objects
}

interface BlogContentProps {
  content: Content; // Expecting content to always match the Content interface
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-lg leading-relaxed text-gray-600 mb-8">
        {content.intro}
      </p>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">{content.title}</h1>

      {content.sections.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>

          <div className="text-lg leading-relaxed text-gray-600 mb-6 whitespace-pre-wrap">
            {section.content} {/* content is now required */}
          </div>

          {section.lists?.map((list, listIndex) => (
            <div key={listIndex} className="mb-6">
              {list.type === 'ul' ? (
                <ul className="list-disc pl-6 space-y-2">
                  {list.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <ol className="list-decimal pl-6 space-y-2">
                  {list.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}

          {section.images?.map((image, imageIndex) => (
            <figure key={imageIndex} className="mb-6">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full rounded-lg shadow-md"
              />
              {image.caption && (
                <figcaption className="mt-2 text-center text-sm text-gray-500">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      ))}
    </article>
  );
}
