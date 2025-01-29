"use client";

import CareersHero from '@/components/careers/CareersHero';
import Benefits from '@/components/careers/Benefits';
import Openings from '@/components/careers/Openings';
import LifeAtTesla from '@/components/careers/LifeAtTesla';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <CareersHero />
      <Benefits />
      <Openings />
      <LifeAtTesla />
    </main>
  );
}