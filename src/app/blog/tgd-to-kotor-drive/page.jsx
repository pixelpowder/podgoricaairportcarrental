import { buildAlternates } from '../../metadata';
import TgdToKotorDrive from '@/src/components/pages/blog/TgdToKotorDrive';

const TITLE = "TGD to Kotor, 85 km Inland Drive";
const DESC = "A driving guide from Podgorica Airport to Kotor: the Sozina tunnel, the Budva bypass, the Vrmac ridge descent, and where to park at the UNESCO Old Town.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Podgorica Airport Car Rental',
    description: DESC,
    alternates: buildAlternates('blog/tgd-to-kotor-drive'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function TgdToKotorDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.podgoricaairportcarrental.com/img/blog-tgd-to-kotor-drive.webp",
    "datePublished": "2026-04-23",
    "dateModified": "2026-04-23",
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
