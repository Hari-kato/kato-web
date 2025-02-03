'use client';
import { Plus, Minus } from 'lucide-react';
import Headings from './ui/Heading';
import { headings } from '@/data/home/faqs';
import AnimateOnScroll from './ui/animateOnScroll';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQ[];
}

export default function FAQ({ faqs = [] }: FAQProps) {
  const toggleFaq = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const content = button.nextElementSibling as HTMLElement;
    const plusIcon = button.querySelector('.icon-plus') as HTMLElement;
    const minusIcon = button.querySelector('.icon-minus') as HTMLElement;

    const isOpen = button.getAttribute('data-open') === 'true';

    if (isOpen) {
      button.setAttribute('data-open', 'false');
      content.style.maxHeight = '0px';
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    } else {
      button.setAttribute('data-open', 'true');
      content.style.maxHeight = `${content.scrollHeight}px`;
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    }
  };

  return (
    <section className="py-24 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Headings
            tag={headings.tag}
            title={headings.title}
            subtitle={headings.subtitle}
          />
        </div>

        <div className="w-full">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {faqs.map((faq, index) => {
                const isFirst = index === 0;
                return (
                  <AnimateOnScroll key={index}>
                    <div
                      className="faq-item bg-white rounded-lg shadow-sm overflow-hidden animate-on-scroll"
                      style={{ alignSelf: 'start' }}
                    >
                      <button
                        onClick={toggleFaq}
                        data-open={isFirst ? 'true' : 'false'}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-8">
                          {faq.question}
                        </h3>
                        <div className="ml-4 flex-shrink-0">
                          <Plus
                            className={`w-6 h-6 text-[#FF6B6B] icon-plus ${
                              isFirst ? 'hidden' : ''
                            }`}
                          />
                          <Minus
                            className={`w-6 h-6 text-[#FF6B6B] icon-minus ${
                              isFirst ? '' : 'hidden'
                            }`}
                          />
                        </div>
                      </button>
                      <div
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                          isFirst ? 'max-h-screen' : 'max-h-0'
                        }`}
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
