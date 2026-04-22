import { t, buildAlternates } from '../../../metadata';
import DobrotaWaterfrontWalk from '@/src/components/pages/blog/DobrotaWaterfrontWalk';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogDobrotaWaterfrontWalk.title') + ' | Kotor Car Rental',
    description: t(lang, 'blogDobrotaWaterfrontWalk.description'),
    alternates: buildAlternates('blog/dobrota-waterfront-walk', lang),
  };
}

export default async function LangDobrotaWaterfrontWalkRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogDobrotaWaterfrontWalk.title'),
    "description": t(lang, 'blogDobrotaWaterfrontWalk.description'),
    "image": "https://www.kotorcarrental.com/img/blog-kotor-photo.webp",
    "datePublished": "2026-04-09",
    "dateModified": "2026-04-09",
    "author": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <DobrotaWaterfrontWalk />
    </>
  );
}
