import { t, buildAlternates } from '../../metadata';
import KotorFoodMarkets from '@/src/components/pages/blog/KotorFoodMarkets';

export async function generateMetadata() {
  const title = t('en', 'blogKotorFoodMarkets.title') + ' | Kotor Car Rental';
  const description = t('en', 'blogKotorFoodMarkets.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/kotor-food-markets'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function KotorFoodMarketsRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogKotorFoodMarkets.title'),
    "description": t('en', 'blogKotorFoodMarkets.description'),
    "image": "https://www.kotorcarrental.com/img/blog-kotor-dining.webp",
    "datePublished": "2026-04-09",
    "dateModified": "2026-04-09",
    "author": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <KotorFoodMarkets />
    </>
  );
}
