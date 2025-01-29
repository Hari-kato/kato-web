import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface Work {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-[500px]">
      <Link href={work.link} className="block group h-full">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center text-white font-semibold">
              Explore Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
        <div className="p-8">
          <span className="text-sm text-[#6366F1] font-medium">
            {work.category}
          </span>
          <h3 className="text-xl font-bold mt-2 mb-4 text-gray-900 group-hover:text-[#4361EE] transition-colors duration-300">
            {work.title}
          </h3>
          <p className="text-gray-600 text-base">
            {work.description}
          </p>
        </div>
      </Link>
    </div>
  );
}