import { t, buildAlternates } from '../../metadata';
import KotorToCetinjeDrive from '@/src/components/pages/blog/KotorToCetinjeDrive';

export async function generateMetadata() {
  const title = t('en', 'blogKotorToCetinjeDrive.title') + ' | Kotor Car Rental';
  const description = t('en', 'blogKotorToCetinjeDrive.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/kotor-to-cetinje-drive'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function KotorToCetinjeDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogKotorToCetinjeDrive.title'),
    "description": t('en', 'blogKotorToCetinjeDrive.description'),
    "image": "https://www.kotorcarrental.com/img/blog-kotor-winter.webp",
    "datePublished": "2026-04-09",
    "dateModified": "2026-04-09",
    "author": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <KotorToCetinjeDrive />
    </>
  );
}
