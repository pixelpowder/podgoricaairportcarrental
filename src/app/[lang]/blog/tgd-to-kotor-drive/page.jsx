import { buildAlternates } from '../../../metadata';
import TgdToKotorDrive from '@/src/components/pages/blog/TgdToKotorDrive';

const TITLE = "TGD to Kotor — Two Routes from Podgorica Airport";
const DESC = "Driving from Podgorica Airport (TGD) to Kotor: the practical route via Sozina and Budva vs. the slower mountain descent via Cetinje and Lovćen.";
const SLUG = 'blog/tgd-to-kotor-drive';
const IMG = 'https://www.podgoricaairportcarrental.com/img/blog-tgd-to-kotor-drive.webp';

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
      <TgdToKotorDrive />
    </>
  );
}
