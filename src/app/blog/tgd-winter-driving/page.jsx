import { buildAlternates } from '../../metadata';
import TgdWinterDriving from '@/src/components/pages/blog/TgdWinterDriving';

const TITLE = "Winter Driving from Podgorica Airport — November to April";
const DESC = "Winter driving from Podgorica Airport: mandatory winter tyres/chains dates, which mountain roads close after snowfall, coast versus interior temperature split, and what TGDs winter rental kit includes.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Podgorica Airport Car Rental',
    description: DESC,
    alternates: buildAlternates('blog/tgd-winter-driving'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function TgdWinterDrivingRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.podgoricaairportcarrental.com/img/blog-tgd-winter-driving-from-airport.webp",
    "datePublished": "2026-04-23",
    "dateModified": "2026-04-23",
    "author": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TgdWinterDriving />
    </>
  );
}
