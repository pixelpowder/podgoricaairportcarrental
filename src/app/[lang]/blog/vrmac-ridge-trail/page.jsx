import { t, buildAlternates } from '../../../metadata';
import VrmacRidgeTrail from '@/src/components/pages/blog/VrmacRidgeTrail';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogVrmacRidgeTrail.title') + ' | Kotor Car Rental',
    description: t(lang, 'blogVrmacRidgeTrail.description'),
    alternates: buildAlternates('blog/vrmac-ridge-trail', lang),
  };
}

export default async function LangVrmacRidgeTrailRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogVrmacRidgeTrail.title'),
    "description": t(lang, 'blogVrmacRidgeTrail.description'),
    "image": "https://www.kotorcarrental.com/img/blog-lovcen-road.webp",
    "datePublished": "2026-04-09",
    "dateModified": "2026-04-09",
    "author": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <VrmacRidgeTrail />
    </>
  );
}
