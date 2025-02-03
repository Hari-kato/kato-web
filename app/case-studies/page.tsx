'use client';

import { useState } from 'react';
import ServicesHero from '@/components/case-studies/ServicesHero';
import FilterTabs from '@/components/case-studies/FilterTabs';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import { categories, caseStudies } from '@/data/caseStudies/case-studies';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filteredCaseStudies =
    selectedCategory === 'All Projects'
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white pt-20">
      <ServicesHero />

      <FilterTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8">
            {filteredCaseStudies.map((study, index) => (
              <CaseStudyCard key={index} study={study} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
