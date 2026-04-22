import { buildAlternates } from '../../../metadata';
import TgdToOstrogMonasteryDrive from '@/src/components/pages/blog/TgdToOstrogMonasteryDrive';

const TITLE = "TGD to Ostrog Monastery — The Cliffside Drive from Podgorica Airport";
const DESC = "Driving from Podgorica Airport (TGD) to Ostrog Monastery: the route via the Bjelopavlići plain, the switchback climb to the Upper Monastery, and parking notes.";
const SLUG = 'blog/tgd-to-ostrog-monastery-drive';
const IMG = 'https://www.podgoricaairportcarrental.com/img/blog-tgd-to-ostrog-monastery-drive.webp';

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
      <TgdToOstrogMonasteryDrive />
    </>
  );
}
