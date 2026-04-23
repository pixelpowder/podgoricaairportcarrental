import { buildAlternates } from '../../metadata';
import TgdToAlbaniaViaTuzi from '@/src/components/pages/blog/TgdToAlbaniaViaTuzi';

const TITLE = "Crossing into Albania from Podgorica Airport — The Tuzi Border Route";
const DESC = "Driving from Podgorica Airport (TGD) across the Albanian border at Hani i Hotit: the Tuzi approach, paperwork, Green Card insurance, fuel differences, and the first half hour into Albania.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Podgorica Airport Car Rental',
    description: DESC,
    alternates: buildAlternates('blog/tgd-to-albania-via-tuzi'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function TgdToAlbaniaViaTuziRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.podgoricaairportcarrental.com/img/blog-tgd-to-albania-via-tuzi.webp",
    "datePublished": "2026-04-23",
    "dateModified": "2026-04-23",
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
