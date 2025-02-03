import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Works from '@/components/Works';
import Testimonials from '@/components/Testimonials';
import Blogs from '@/components/Blogs';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import { faqs } from '@/data/home/faqs';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <Hero />
      </div>
      <Services />
      <Clients />
      <Works />
      <Testimonials />
      <Blogs />
      <FAQ faqs={faqs} />
      <Contact />
    </div>
  );
}
