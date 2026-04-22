import { buildAlternates } from '../../metadata';
import TgdToBudvaDrive from '@/src/components/pages/blog/TgdToBudvaDrive';

const TITLE = "TGD to Budva — The Sozina Tunnel Drive from Podgorica Airport";
const DESC = "A driving guide from Podgorica Airport (TGD) to Budva: distance, time, the Sozina tunnel route vs. the old Cetinje road, toll info, and fuel stops.";
const SLUG = 'blog/tgd-to-budva-drive';
const IMG = 'https://www.podgoricaairportcarrental.com/img/blog-tgd-to-budva-drive.webp';

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
      <TgdToBudvaDrive />
    </>
  );
}
