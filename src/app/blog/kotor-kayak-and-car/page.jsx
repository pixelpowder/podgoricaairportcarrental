import { t, buildAlternates } from '../../metadata';
import KotorKayakAndCar from '@/src/components/pages/blog/KotorKayakAndCar';

export async function generateMetadata() {
  const title = t('en', 'blogKotorKayakAndCar.title') + ' | Kotor Car Rental';
  const description = t('en', 'blogKotorKayakAndCar.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/kotor-kayak-and-car'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function KotorKayakAndCarRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogKotorKayakAndCar.title'),
    "description": t('en', 'blogKotorKayakAndCar.description'),
    "image": "https://www.kotorcarrental.com/img/blog-cruise-port.webp",
    "datePublished": "2026-04-09",
    "dateModified": "2026-04-09",
    "author": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <KotorKayakAndCar />
    </>
  );
}
