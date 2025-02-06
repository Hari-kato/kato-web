import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '../ui/animateOnScroll';

export interface CaseStudy {
  title: string;
  description: string;
  image: string;
  category: string;
  technology: string;
  readMoreLink: string;
}

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <AnimateOnScroll>
      <div className="case-study-card grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl overflow-hidden border border-gray-100 animate-on-scroll">
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">{study.title}</h2>
          <p className="text-gray-600 mb-6">{study.description}</p>
          <div className="space-y-3 mb-6">
            <div>
              <span className="font-semibold">Core Technology:</span>
              <span className="ml-2 text-gray-600">{study.technology}</span>
            </div>
            <div>
              <span className="font-semibold">Category:</span>
              <span className="ml-2 text-gray-600">{study.category}</span>
            </div>
          </div>
          <Link
            href={study.readMoreLink}
            className="inline-flex items-center text-primary  font-semibold group"
          >
            Read More
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
