import { t, buildAlternates } from '../../../metadata';
import StolivAbandonedVillage from '@/src/components/pages/blog/StolivAbandonedVillage';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogStolivAbandonedVillage.title') + ' | Kotor Car Rental',
    description: t(lang, 'blogStolivAbandonedVillage.description'),
    alternates: buildAlternates('blog/stoliv-abandoned-village', lang),
  };
}

export default async function LangStolivAbandonedVillageRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogStolivAbandonedVillage.title'),
    "description": t(lang, 'blogStolivAbandonedVillage.description'),
    "image": "https://www.kotorcarrental.com/img/blog-risan-mosaics.webp",
    "datePublished": "2026-04-09",
    "dateModified": "2026-04-09",
    "author": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <StolivAbandonedVillage />
    </>
  );
}
