import React from "react";

interface Section {
  title: string;
  content: string; 
  lists?: {
    type: "ul" | "ol";
    items: string[];
  }[];
  images?: {
    url: string;
    caption: string;
  }[];
}

export interface Content {
  intro: string;
  title: string;
  sections: Section[]; 
}

interface BlogContentProps {
  content: Content;
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
    {/* Title Handling for Line Breaks */}
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      {section.title.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </h2>

          <div className="text-lg leading-relaxed text-gray-600 mb-6 whitespace-pre-wrap">
            {section.content}
          </div>

          {section.lists?.map((list, listIndex) => (
            <div key={listIndex} className="mb-6">
              {list.type === "ul" ? (
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
                className="w-full h-[300px] object-cover rounded-lg shadow-md"
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
