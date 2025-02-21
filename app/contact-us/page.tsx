import ContactHero from '@/components/contact-us/ContactHero';
import AddressBlock from '@/components/contact-us/AddressBlock';
import FunFacts from '@/components/contact-us/FunFacts';
import ContactDetails from '@/components/contact-us/ContactDetails';
import GoogleMap from '@/components/contact-us/GoogleMap';
import Contact from '@/components/Contact';
export const metadata={
  title: 'Contact Us',
  description: 'Discover mission, services, and contact information.',
 
}
export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ContactHero />
      {/* <ContactDetails /> */}
      <AddressBlock />
      <FunFacts />
      <Contact />
      <GoogleMap />
    </main>
  );
}