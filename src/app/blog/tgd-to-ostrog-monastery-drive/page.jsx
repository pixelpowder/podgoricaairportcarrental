import { buildAlternates } from '../../metadata';
import TgdToOstrogMonasteryDrive from '@/src/components/pages/blog/TgdToOstrogMonasteryDrive';

const TITLE = "Podgorica Airport to Ostrog Monastery — The 45-Minute Airport Pilgrimage";
const DESC = "Driving from Podgorica Airport (TGD) to Ostrog Monastery: the E80 motorway exit, the Bogetići turnoff, the Lower Monastery fork, and the steep switchback road to the Upper Monastery carved into the cliff.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Podgorica Airport Car Rental',
    description: DESC,
    alternates: buildAlternates('blog/tgd-to-ostrog-monastery-drive'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function TgdToOstrogMonasteryDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.podgoricaairportcarrental.com/img/blog-tgd-to-ostrog-monastery-drive.webp",
    "datePublished": "2026-04-23",
    "dateModified": "2026-04-23",
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
