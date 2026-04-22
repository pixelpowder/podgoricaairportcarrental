import { t, buildAlternates } from '../../../metadata';
import KotorToCetinjeDrive from '@/src/components/pages/blog/KotorToCetinjeDrive';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogKotorToCetinjeDrive.title') + ' | Kotor Car Rental',
    description: t(lang, 'blogKotorToCetinjeDrive.description'),
    alternates: buildAlternates('blog/kotor-to-cetinje-drive', lang),
  };
}

export default async function LangKotorToCetinjeDriveRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogKotorToCetinjeDrive.title'),
    "description": t(lang, 'blogKotorToCetinjeDrive.description'),
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
