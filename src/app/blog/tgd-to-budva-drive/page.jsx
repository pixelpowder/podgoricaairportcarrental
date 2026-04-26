import { buildAlternates } from '../../metadata';
import TgdToBudvaDrive from '@/src/components/pages/blog/TgdToBudvaDrive';

const TITLE = "TGD to Budva, the 70 km Drive";
const DESC = "Driving from Podgorica Airport to Budva: the Sozina tunnel toll, which petrol station to use, the E80 vs E762 split, and the descent into Paštrovska riviera.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Podgorica Airport Car Rental',
    description: DESC,
    alternates: buildAlternates('blog/tgd-to-budva-drive'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function TgdToBudvaDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.podgoricaairportcarrental.com/img/blog-tgd-to-budva-drive.webp",
    "datePublished": "2026-04-23",
    "dateModified": "2026-04-23",
    "author": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Airport Car Rental", "url": "https://www.podgoricaairportcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TgdToBudvaDrive />
    </>
  );
}
