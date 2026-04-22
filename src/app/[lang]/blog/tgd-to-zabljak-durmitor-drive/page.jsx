import { buildAlternates } from '../../../metadata';
import TgdToZabljakDurmitorDrive from '@/src/components/pages/blog/TgdToZabljakDurmitorDrive';

const TITLE = "TGD to Žabljak — The Mountain Drive to Durmitor National Park";
const DESC = "Driving from Podgorica Airport (TGD) to Žabljak and Durmitor National Park: the Morača Canyon climb, approximate timing, and winter considerations.";
const SLUG = 'blog/tgd-to-zabljak-durmitor-drive';
const IMG = 'https://www.podgoricaairportcarrental.com/img/blog-tgd-to-zabljak-durmitor-drive.webp';

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
      <TgdToZabljakDurmitorDrive />
    </>
  );
}
