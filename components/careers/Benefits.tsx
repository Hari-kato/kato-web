import { benefits } from '@/data/carrers/Benefits';
import AnimateOnScroll from '../ui/animateOnScroll';

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <h2 className="text-4xl font-bold mb-4">
              Benefits and <span className="text-[#1f72b7]">Perks</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Our employees are the pillars of our company and here's how we
              take care of their well-being!
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={index}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 fade-up-element">
                <div className="w-16 h-16 rounded-lg bg-[#1f72b7]/10 flex items-center justify-center mb-6">
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
