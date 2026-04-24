import { buildAlternates } from '../../metadata';
import TgdToAlbaniaViaTuzi from '@/src/components/pages/blog/TgdToAlbaniaViaTuzi';

const TITLE = "TGD to Albania via Tuzi Border";
const DESC = "Driving from Podgorica Airport across the Albanian border at Hani i Hotit: the Tuzi approach, paperwork, Green Card insurance, fuel, and the first half hour in.";

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
