import { t, buildAlternates } from '../../../metadata';
import KotorKayakAndCar from '@/src/components/pages/blog/KotorKayakAndCar';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogKotorKayakAndCar.title') + ' | Kotor Car Rental',
    description: t(lang, 'blogKotorKayakAndCar.description'),
    alternates: buildAlternates('blog/kotor-kayak-and-car', lang),
  };
}

export default async function LangKotorKayakAndCarRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogKotorKayakAndCar.title'),
    "description": t(lang, 'blogKotorKayakAndCar.description'),
    "image": "https://www.kotorcarrental.com/img/blog-cruise-port.webp",
    "datePublished": "2026-04-09",
    "dateModified": "2026-04-09",
    "author": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" },
    "publisher": { "@type": "Organization", "name": "Kotor Car Rental", "url": "https://www.kotorcarrental.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <KotorKayakAndCar />
    </>
  );
}
