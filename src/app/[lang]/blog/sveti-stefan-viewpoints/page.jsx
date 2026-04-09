import { t, buildAlternates } from '../../../metadata';
import SvetiStefanViewpoints from '@/src/components/pages/blog/SvetiStefanViewpoints';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogStefan.title') + ' | Podgorica Airport Car Rental',
    description: t(lang, 'blogStefan.description'),
    alternates: buildAlternates('blog/sveti-stefan-viewpoints'),
  };
}

export default function LangSvetiStefanViewpointsRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogStefan.title'),
    "description": t('en', 'blogStefan.description'),
    "image": "https://www.podgoricaairportcarrental.com/img/blog-sveti-stefan-viewpoints.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SvetiStefanViewpoints />
    </>
  );
}
