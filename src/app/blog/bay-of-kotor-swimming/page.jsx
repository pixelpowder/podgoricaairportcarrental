import { t, buildAlternates } from '../../metadata';
import BayOfKotorSwimming from '@/src/components/pages/blog/BayOfKotorSwimming';

export async function generateMetadata() {
  const title = t('en', 'blogBayOfKotorSwimming.title') + ' | Kotor Car Rental';
  const description = t('en', 'blogBayOfKotorSwimming.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/bay-of-kotor-swimming'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function BayOfKotorSwimmingRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogBayOfKotorSwimming.title'),
    "description": t('en', 'blogBayOfKotorSwimming.description'),
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
