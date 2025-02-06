import { benefits, headings } from '@/data/carrers/Benefits';
import AnimateOnScroll from '../ui/animateOnScroll';
import Headings from '../ui/Heading';

export default function Benefits() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <AnimateOnScroll>
          <Headings tag={headings.tag} title={headings.title} subtitle={headings.subtitle} />
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={index}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 fade-up-element">
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
