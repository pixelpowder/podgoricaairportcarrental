import { buildAlternates } from '../../metadata';
import TgdAirportArrivalGuide from '@/src/components/pages/blog/TgdAirportArrivalGuide';

const TITLE = "TGD Airport Arrival Guide — From Landing to Driving Out";
const DESC = "What to expect when you land at Podgorica Airport (TGD): passport control, baggage, SIM cards, rental pickup, and the first drive out of the airport access road.";
const SLUG = 'blog/tgd-airport-arrival-guide';
const IMG = 'https://www.podgoricaairportcarrental.com/img/blog-tgd-airport-arrival-guide.webp';

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
      <TgdAirportArrivalGuide />
    </>
  );
}
