"use client";

import AboutHero from '@/components/about-us/AboutHero';
import AboutTesla from '@/components/about-us/AboutTesla';
import VisionMission from '@/components/about-us/VisionMission';
import MessageFromLeadership from '@/components/about-us/MessageFromLeadership';
import LifeAtTesla from '@/components/careers/LifeAtTesla';
import FAQ from '@/components/FAQ';
import { aboutUsFaqs } from '@/data/about-us/faqs';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AboutHero />
      <AboutTesla />
      <VisionMission />
      <MessageFromLeadership />
      <LifeAtTesla />
      <FAQ faqs={aboutUsFaqs} />
    </main>
  );
}