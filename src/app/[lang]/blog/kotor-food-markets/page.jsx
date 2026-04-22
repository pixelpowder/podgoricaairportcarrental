import { t, buildAlternates } from '../../../metadata';
import KotorFoodMarkets from '@/src/components/pages/blog/KotorFoodMarkets';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogKotorFoodMarkets.title') + ' | Kotor Car Rental',
    description: t(lang, 'blogKotorFoodMarkets.description'),
    alternates: buildAlternates('blog/kotor-food-markets', lang),
  };
}

export default async function LangKotorFoodMarketsRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogKotorFoodMarkets.title'),
    "description": t(lang, 'blogKotorFoodMarkets.description'),
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
