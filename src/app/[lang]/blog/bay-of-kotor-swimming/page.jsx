import { t, buildAlternates } from '../../../metadata';
import BayOfKotorSwimming from '@/src/components/pages/blog/BayOfKotorSwimming';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogBayOfKotorSwimming.title') + ' | Kotor Car Rental',
    description: t(lang, 'blogBayOfKotorSwimming.description'),
    alternates: buildAlternates('blog/bay-of-kotor-swimming', lang),
  };
}

export default async function LangBayOfKotorSwimmingRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogBayOfKotorSwimming.title'),
    "description": t(lang, 'blogBayOfKotorSwimming.description'),
    "image": "https://www.kotorcarrental.com/img/blog-bay-boat.webp",
    "datePublished": "2026-04-09",
    "dateModified": "2026-04-09",
    "author": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BayOfKotorSwimming />
    </>
  );
}
