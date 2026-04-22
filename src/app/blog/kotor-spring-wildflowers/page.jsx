import { t, buildAlternates } from '../../metadata';
import KotorSpringWildflowers from '@/src/components/pages/blog/KotorSpringWildflowers';

export async function generateMetadata() {
  const title = t('en', 'blogKotorSpringWildflowers.title') + ' | Kotor Car Rental';
  const description = t('en', 'blogKotorSpringWildflowers.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/kotor-spring-wildflowers'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function KotorSpringWildflowersRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogKotorSpringWildflowers.title'),
    "description": t('en', 'blogKotorSpringWildflowers.description'),
    "image": "https://www.kotorcarrental.com/img/blog-kotor-cats.webp",
    "datePublished": "2026-04-09",
    "dateModified": "2026-04-09",
    "author": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <KotorSpringWildflowers />
    </>
  );
}
