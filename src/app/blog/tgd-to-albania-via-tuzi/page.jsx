import { buildAlternates } from '../../metadata';
import TgdToAlbaniaViaTuzi from '@/src/components/pages/blog/TgdToAlbaniaViaTuzi';

const TITLE = "TGD to Albania via Tuzi — The Short Road South to Shkodër and Tirana";
const DESC = "Driving from Podgorica Airport (TGD) into Albania via the Tuzi / Hani i Hotit border crossing: route, documents, Green Card, and approximate times to Shkodër and Tirana.";
const SLUG = 'blog/tgd-to-albania-via-tuzi';
const IMG = 'https://www.podgoricaairportcarrental.com/img/blog-tgd-to-albania-via-tuzi.webp';

export async function generateMetadata() {
  return {
    title: TITLE + ' | Podgorica Airport Car Rental',
    description: DESC,
    alternates: buildAlternates(SLUG),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function Route() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": IMG,
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TgdToAlbaniaViaTuzi />
    </>
  );
}
