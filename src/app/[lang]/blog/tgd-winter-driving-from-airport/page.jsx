import { buildAlternates } from '../../../metadata';
import TgdWinterDrivingFromAirport from '@/src/components/pages/blog/TgdWinterDrivingFromAirport';

const TITLE = "TGD Winter Driving — Leaving the Airport in Snow, Ice, and Rain";
const DESC = "Winter driving tips from Podgorica Airport (TGD): tyre requirements, chain rules, route closures at altitude, and safe options from the airport in poor weather.";
const SLUG = 'blog/tgd-winter-driving-from-airport';
const IMG = 'https://www.podgoricaairportcarrental.com/img/blog-tgd-winter-driving-from-airport.webp';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: TITLE + ' | Podgorica Airport Car Rental',
    description: DESC,
    alternates: buildAlternates(SLUG, lang),
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
      <TgdWinterDrivingFromAirport />
    </>
  );
}
