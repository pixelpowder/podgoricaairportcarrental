import { t, buildAlternates } from '../../../metadata';
import BudvaRainyDay from '@/src/components/pages/blog/BudvaRainyDay';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogRainy.title') + ' | Podgorica Airport Car Rental',
    description: t(lang, 'blogRainy.description'),
    alternates: buildAlternates('blog/budva-rainy-day'),
  };
}

export default function LangBudvaRainyDayRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogRainy.title'),
    "description": t('en', 'blogRainy.description'),
    "image": "https://www.podgoricaairportcarrental.com/img/blog-budva-rainy-day.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaRainyDay />
    </>
  );
}
