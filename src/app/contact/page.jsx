import Contact from '@/src/components/pages/Contact';
import { buildAlternates } from '@/src/app/metadata';

export function generateMetadata() {
  const title = 'Contact Us | Podgorica Airport Car Rental';
  const description = 'Get in touch with Podgorica Airport Car Rental. Email, phone, or WhatsApp — we\'re here to help you find the perfect rental car.';
  return {
    title: title,
    description: description,
    alternates: buildAlternates('contact'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function ContactPage() {
  return <Contact />;
}
