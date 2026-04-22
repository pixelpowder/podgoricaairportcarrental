import { buildAlternates } from '../../metadata';
import TgdToUlcinjDrive from '@/src/components/pages/blog/TgdToUlcinjDrive';

const TITLE = "TGD to Ulcinj — Driving South to Montenegro's Albanian-Coast Edge";
const DESC = "Driving from Podgorica Airport (TGD) to Ulcinj, Montenegro's southernmost coastal town: the Bar route, timing, and the Sukobin border for onward travel to Albania.";
const SLUG = 'blog/tgd-to-ulcinj-drive';
const IMG = 'https://www.podgoricaairportcarrental.com/img/blog-tgd-to-ulcinj-drive.webp';

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
      <TgdToUlcinjDrive />
    </>
  );
}
