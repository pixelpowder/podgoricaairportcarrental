import { buildAlternates } from '../../metadata';
import LateNightTgdArrival from '@/src/components/pages/blog/LateNightTgdArrival';

const TITLE = "Landing at Podgorica Airport After Dark — The Post-23:00 Handbook";
const DESC = "Handling a late-night arrival at TGD: what is open after 23:00, whether to push on to the coast, mountain routes after dark, and overnight options in Golubovci and Tuzi when you want to crash near the airport.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Podgorica Airport Car Rental',
    description: DESC,
    alternates: buildAlternates('blog/late-night-tgd-arrival'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function LateNightTgdArrivalRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.podgoricaairportcarrental.com/img/blog-tgd-night-arrivals-guide.webp",
    "datePublished": "2026-04-23",
    "dateModified": "2026-04-23",
    "author": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <LateNightTgdArrival />
    </>
  );
}
