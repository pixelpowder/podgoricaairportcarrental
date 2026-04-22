'use client';
import Nav from '../../../Nav';
import Footer from '../../../Footer';
import useTranslation from '../../../i18n/useTranslation';
import '../../../ContentPage.css';

const cardStyle = {
  background: '#fff',
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid var(--gray-200, #e9ecef)',
  boxShadow: 'var(--shadow-sm)',
  transition: 'box-shadow 0.2s, transform 0.2s',
  display: 'flex',
  flexDirection: 'column',
};

const cardImageStyle = {
  width: '100%',
  height: '220px',
  objectFit: 'cover',
  display: 'block',
};

const cardBodyStyle = {
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
};

const cardTitleStyle = {
  fontSize: '18px',
  fontWeight: 800,
  color: 'var(--navy, #05203c)',
  lineHeight: 1.3,
  marginBottom: '10px',
};

const cardExcerptStyle = {
  fontSize: '15px',
  color: 'var(--gray-600, #6c757d)',
  lineHeight: 1.65,
  marginBottom: '20px',
  flex: 1,
};

const cardLinkStyle = {
  fontSize: '14px',
  fontWeight: 700,
  color: 'var(--blue, #0770e3)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
};

const articles = [
  {
    image: '/img/blog-tgd-airport-arrival-guide.webp',
    href: '/blog/tgd-airport-arrival-guide',
    title: 'TGD Airport Arrival Guide — From Landing to Driving Out',
    excerpt: 'The first-hour walkthrough: passport, baggage, SIM cards, rental desks, and the first turn onto the E762.',
  },
  {
    image: '/img/blog-tgd-to-budva-drive.webp',
    href: '/blog/tgd-to-budva-drive',
    title: 'TGD to Budva — The Sozina Tunnel Drive',
    excerpt: 'Route options, the tunnel toll, summer traffic, and the optional Virpazar detour on the way south.',
  },
  {
    image: '/img/blog-tgd-to-kotor-drive.webp',
    href: '/blog/tgd-to-kotor-drive',
    title: 'TGD to Kotor — Two Routes from the Airport',
    excerpt: 'The fast coastal route via Budva vs. the scenic Lovćen serpentine — which to take and when.',
  },
  {
    image: '/img/blog-tgd-to-ulcinj-drive.webp',
    href: '/blog/tgd-to-ulcinj-drive',
    title: "TGD to Ulcinj — South to the Albanian-Coast Edge",
    excerpt: 'The drive via Bar, Velika Plaža, and proximity to the quiet Sukobin border for onward Albania travel.',
  },
  {
    image: '/img/blog-tgd-to-zabljak-durmitor-drive.webp',
    href: '/blog/tgd-to-zabljak-durmitor-drive',
    title: 'TGD to Žabljak — The Durmitor Mountain Drive',
    excerpt: 'Through the Morača Canyon, over the Tara Bridge, and up to one of the highest towns in the Balkans.',
  },
  {
    image: '/img/blog-tgd-to-ostrog-monastery-drive.webp',
    href: '/blog/tgd-to-ostrog-monastery-drive',
    title: 'TGD to Ostrog — The Cliffside Monastery Drive',
    excerpt: 'Across the Bjelopavlići plain and up the switchback climb to the white monastery carved in the rock.',
  },
  {
    image: '/img/blog-tgd-night-arrivals-guide.webp',
    href: '/blog/tgd-night-arrivals-guide',
    title: 'TGD Night Arrivals — Handling a Late Landing',
    excerpt: 'After-hours rental pickup, which drives are reasonable in the dark, and where to overnight near the airport.',
  },
  {
    image: '/img/blog-tgd-to-albania-via-tuzi.webp',
    href: '/blog/tgd-to-albania-via-tuzi',
    title: 'TGD to Albania via Tuzi — Hani i Hotit Crossing',
    excerpt: 'The short road south-east into Albania for Shkodër and Tirana: paperwork, Green Card, and timing.',
  },
  {
    image: '/img/blog-tgd-winter-driving-from-airport.webp',
    href: '/blog/tgd-winter-driving-from-airport',
    title: 'TGD Winter Driving — Snow, Ice, and Which Routes Stay Open',
    excerpt: 'Winter tyres, chain rules, mountain pass status, and the safe default route out of the airport.',
  },
];

export default function BlogIndex() {
  const { t, localePath } = useTranslation();

  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: 'url(/img/blog-tgd-airport-arrival-guide.webp)' }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>{t('blogIndex.breadcrumbBlog')}</span>
          </nav>
          <h1 className="content-hero__title">Driving Guides from Podgorica Airport</h1>
          <p className="content-hero__subtitle">Airport-pickup focused route notes from TGD to the coast, the mountains, Ostrog, and across the Albanian border.</p>
        </div>
      </div>

      <div style={{
        maxWidth: '1220px',
        margin: '0 auto',
        padding: '48px 24px 80px',
        width: '100%',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '28px',
        }}>
          {articles.map((article) => (
            <a
              key={article.href}
              href={localePath(article.href)}
              style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img
                src={article.image}
                alt={article.title}
                style={cardImageStyle}
                loading="lazy"
              />
              <div style={cardBodyStyle}>
                <h2 style={cardTitleStyle}>{article.title}</h2>
                <p style={cardExcerptStyle}>{article.excerpt}</p>
                <span style={cardLinkStyle}>
                  {t('blogIndex.readGuide')} &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
