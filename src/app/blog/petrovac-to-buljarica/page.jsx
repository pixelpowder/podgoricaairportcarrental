import { t, buildAlternates } from '../../metadata';
import PetrovacToBuljarica from '@/src/components/pages/blog/PetrovacToBuljarica';

export async function generateMetadata() {
  return {
    title: t('en', 'blogPetrovac.title') + ' | Podgorica Airport Car Rental',
    description: t('en', 'blogPetrovac.description'),
    alternates: buildAlternates('blog/petrovac-to-buljarica'),
  };
}

export default function PetrovacToBuljaricaRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogPetrovac.title'),
    "description": t('en', 'blogPetrovac.description'),
    "image": "https://www.podgoricaairportcarrental.com/img/blog-petrovac-to-buljarica.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PetrovacToBuljarica />
    </>
  );
}
