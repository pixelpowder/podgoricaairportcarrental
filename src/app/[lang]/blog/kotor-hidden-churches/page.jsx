import { t, buildAlternates } from '../../../metadata';
import KotorHiddenChurches from '@/src/components/pages/blog/KotorHiddenChurches';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogHiddenChurches.title') + ' | Kotor Car Rental',
    description: t(lang, 'blogHiddenChurches.description'),
    alternates: buildAlternates('blog/kotor-hidden-churches', lang),
  };
}

export default async function LangKotorHiddenChurchesRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogHiddenChurches.title'),
    "description": t(lang, 'blogHiddenChurches.description'),
    "image": "https://www.kotorcarrental.com/img/blog-kotor-walls.webp",
    "datePublished": "2026-04-09",
    "dateModified": "2026-04-09",
    "author": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <KotorHiddenChurches />
    </>
  );
}
