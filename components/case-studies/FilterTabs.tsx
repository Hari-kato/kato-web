'use client';

interface FilterTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterTabs({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterTabsProps) {
  return (
    <section className="mb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-8 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#1f72b7] text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
