import { buildAlternates } from '../../metadata';
import TgdToZabljakDurmitorDrive from '@/src/components/pages/blog/TgdToZabljakDurmitorDrive';

const TITLE = "TGD to Žabljak & Durmitor";
const DESC = "Driving from Podgorica Airport to Žabljak: the new Bar–Boljare motorway section, the Morača canyon alternative, and the descent onto the Durmitor plateau.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Podgorica Airport Car Rental',
    description: DESC,
    alternates: buildAlternates('blog/tgd-to-zabljak-durmitor-drive'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function TgdToZabljakDurmitorDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.podgoricaairportcarrental.com/img/blog-tgd-to-zabljak-durmitor-drive.webp",
    "datePublished": "2026-04-23",
    "dateModified": "2026-04-23",
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
