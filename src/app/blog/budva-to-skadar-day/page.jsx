import { t, buildAlternates } from '../../metadata';
import BudvaToSkadarDay from '@/src/components/pages/blog/BudvaToSkadarDay';

export async function generateMetadata() {
  return {
    title: t('en', 'blogSkadar.title') + ' | Podgorica Airport Car Rental',
    description: t('en', 'blogSkadar.description'),
    alternates: buildAlternates('blog/budva-to-skadar-day'),
  };
}

export default function BudvaToSkadarDayRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogSkadar.title'),
    "description": t('en', 'blogSkadar.description'),
    "image": "https://www.podgoricaairportcarrental.com/img/blog-budva-to-skadar-day.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaToSkadarDay />
    </>
  );
}
