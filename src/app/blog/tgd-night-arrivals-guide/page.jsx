import { buildAlternates } from '../../metadata';
import TgdNightArrivalsGuide from '@/src/components/pages/blog/TgdNightArrivalsGuide';

const TITLE = "TGD Night Arrivals — Handling a Late Landing at Podgorica Airport";
const DESC = "A guide to arriving at Podgorica Airport (TGD) late at night: car pickup after-hours, which routes are safe in the dark, and overnight options near the airport.";
const SLUG = 'blog/tgd-night-arrivals-guide';
const IMG = 'https://www.podgoricaairportcarrental.com/img/blog-tgd-night-arrivals-guide.webp';

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
      <TgdNightArrivalsGuide />
    </>
  );
}
