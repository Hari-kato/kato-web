interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

export default function SectionHeading({ badge, title, highlight, description }: SectionHeadingProps) {
  return (
    <div>
      <div className="inline-block px-4 py-2 bg-[#F0F1FF] rounded-full mb-4">
        <span className="text-sm font-medium text-[#6366F1]">{badge}</span>
      </div>
      <h2 className="text-[2.71rem] font-bold">
        {title} <span className="heading-highlight">{highlight}</span>
      </h2>
      <p className="text-gray-600 text-lg mt-4 max-w-2xl">
        {description}
      </p>
    </div>
  );
}