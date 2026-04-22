import { t, buildAlternates } from '../../../metadata';
import KotorSpringWildflowers from '@/src/components/pages/blog/KotorSpringWildflowers';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogKotorSpringWildflowers.title') + ' | Kotor Car Rental',
    description: t(lang, 'blogKotorSpringWildflowers.description'),
    alternates: buildAlternates('blog/kotor-spring-wildflowers', lang),
  };
}

export default async function LangKotorSpringWildflowersRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogKotorSpringWildflowers.title'),
    "description": t(lang, 'blogKotorSpringWildflowers.description'),
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
