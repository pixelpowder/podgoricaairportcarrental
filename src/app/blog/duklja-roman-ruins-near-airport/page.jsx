import { buildAlternates } from '../../metadata';
import DukljaRomanRuinsNearAirport from '@/src/components/pages/blog/DukljaRomanRuinsNearAirport';

const TITLE = "Duklja Roman Ruins near TGD Airport";
const DESC = "A driving guide to Duklja/Doclea Roman ruins near Podgorica Airport: the forum, basilica, thermal baths, and how to reach the site in under ten minutes.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Podgorica Airport Car Rental',
    description: DESC,
    alternates: buildAlternates('blog/duklja-roman-ruins-near-airport'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function DukljaRomanRuinsNearAirportRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.podgoricaairportcarrental.com/img/blog-duklja-roman-ruins.webp",
    "datePublished": "2026-04-23",
    "dateModified": "2026-04-23",
    "author": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <DukljaRomanRuinsNearAirport />
    </>
  );
}
