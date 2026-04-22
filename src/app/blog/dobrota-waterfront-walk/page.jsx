import { t, buildAlternates } from '../../metadata';
import DobrotaWaterfrontWalk from '@/src/components/pages/blog/DobrotaWaterfrontWalk';

export async function generateMetadata() {
  const title = t('en', 'blogDobrotaWaterfrontWalk.title') + ' | Kotor Car Rental';
  const description = t('en', 'blogDobrotaWaterfrontWalk.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/dobrota-waterfront-walk'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function DobrotaWaterfrontWalkRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogDobrotaWaterfrontWalk.title'),
    "description": t('en', 'blogDobrotaWaterfrontWalk.description'),
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
