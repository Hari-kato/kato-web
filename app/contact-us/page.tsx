"use client";

import ContactHero from '@/components/contact-us/ContactHero';
import AddressBlock from '@/components/contact-us/AddressBlock';
import FunFacts from '@/components/contact-us/FunFacts';
import ContactDetails from '@/components/contact-us/ContactDetails';
import ContactForm from '@/components/contact-us/ContactForm';
import GoogleMap from '@/components/contact-us/GoogleMap';

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ContactHero />
      <AddressBlock />
      <FunFacts />
      <ContactDetails />
      <ContactForm />
      <GoogleMap />
    </main>
  );
}