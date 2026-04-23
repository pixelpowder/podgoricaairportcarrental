import { buildAlternates } from '../../metadata';
import FirstHourTgdArrivals from '@/src/components/pages/blog/FirstHourTgdArrivals';

const TITLE = "The First Hour After Landing at Podgorica Airport (TGD)";
const DESC = "A minute-by-minute walk-through of arrival at Podgorica Airport (TGD), from cabin-door to the first fuel station on the motorway — what to expect, what to carry in your phone, and what to skip.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Podgorica Airport Car Rental',
    description: DESC,
    alternates: buildAlternates('blog/first-hour-tgd-arrivals'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function FirstHourTgdArrivalsRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.podgoricaairportcarrental.com/img/blog-tgd-airport-arrival-guide.webp",
    "datePublished": "2026-04-23",
    "dateModified": "2026-04-23",
    "author": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <FirstHourTgdArrivals />
    </>
  );
}
