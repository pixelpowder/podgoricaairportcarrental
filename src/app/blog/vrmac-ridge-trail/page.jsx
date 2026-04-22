import { t, buildAlternates } from '../../metadata';
import VrmacRidgeTrail from '@/src/components/pages/blog/VrmacRidgeTrail';

export async function generateMetadata() {
  const title = t('en', 'blogVrmacRidgeTrail.title') + ' | Kotor Car Rental';
  const description = t('en', 'blogVrmacRidgeTrail.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/vrmac-ridge-trail'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function VrmacRidgeTrailRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogVrmacRidgeTrail.title'),
    "description": t('en', 'blogVrmacRidgeTrail.description'),
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
