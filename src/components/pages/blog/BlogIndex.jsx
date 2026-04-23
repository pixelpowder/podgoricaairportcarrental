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
  color: '#E31937',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
};

const articles = [
  {
    href: '/blog/first-hour-tgd-arrivals',
    image: '/img/blog-tgd-airport-arrival-guide.webp',
    title: 'The First Hour After Landing at Podgorica Airport (TGD)',
    excerpt: 'A minute-by-minute run-through of the sixty minutes between touchdown and merging onto the M2 — passport control, the rental desk, the ATM, a SIM card, and the exit roundabout.',
  },
  {
    href: '/blog/late-night-tgd-arrival',
    image: '/img/blog-tgd-night-arrivals-guide.webp',
    title: 'Landing at Podgorica Airport After Dark',
    excerpt: 'Ryanair and Wizz Air schedule many arrivals after 22:00. What is open in the terminal, whether to push on or sleep nearby, and where the 24-hour petrol stations are.',
  },
  {
    href: '/blog/tgd-to-albania-via-tuzi',
    image: '/img/blog-tgd-to-albania-via-tuzi.webp',
    title: 'Crossing into Albania from Podgorica Airport — The Tuzi Route',
    excerpt: 'The Hani i Hotit border is thirty-five kilometres from TGD — an hour to Shkodër with an interesting back-country drive through Tuzi on the way.',
  },
  {
    href: '/blog/tgd-to-budva-drive',
    image: '/img/blog-tgd-to-budva-drive.webp',
    title: 'Podgorica Airport to Budva — The 70 km Drive via Sozina',
    excerpt: 'The inland approach to Budva through the Sozina tunnel — an hour of motorway and coast road that most first-time renters do not realise is faster than Tivat.',
  },
  {
    href: '/blog/tgd-to-kotor-drive',
    image: '/img/blog-tgd-to-kotor-drive.webp',
    title: 'Podgorica Airport to Kotor — The 85 km Drive Inland',
    excerpt: 'From TGD to the Bay of Kotor via Sozina, Budva and the Vrmac ridge. An hour and twenty minutes, one toll, two viewpoints.',
  },
  {
    href: '/blog/tgd-to-ostrog-monastery-drive',
    image: '/img/blog-tgd-to-ostrog-monastery-drive.webp',
    title: 'Podgorica Airport to Ostrog Monastery',
    excerpt: 'The clifftop pilgrimage monastery is astonishingly close to TGD. A guide to the drive, the Lower Monastery fork, and the hairpin climb to the Upper Monastery carved into the cliff.',
  },
  {
    href: '/blog/tgd-to-zabljak-durmitor-drive',
    image: '/img/blog-tgd-to-zabljak-durmitor-drive.webp',
    title: 'Podgorica Airport to Žabljak and Durmitor',
    excerpt: 'The new Bar–Boljare motorway section cuts an hour off the old Morača canyon road to Žabljak. TGD to Durmitor in two hours flat.',
  },
  {
    href: '/blog/tgd-winter-driving',
    image: '/img/blog-tgd-winter-driving-from-airport.webp',
    title: 'Winter Driving from Podgorica Airport',
    excerpt: 'From November to April, winter tyres or chains are legally required north of TGD. A seasonal guide to which routes stay open and which close after serious snowfall.',
  },
  {
    href: '/blog/duklja-roman-ruins-near-airport',
    image: '/img/blog-duklja-roman-ruins.webp',
    title: 'Duklja (Doclea) — The Roman City Five Kilometres from Your Runway',
    excerpt: 'A 2,000-year-old Roman colonia at the confluence of the Morača and Zeta rivers. The most overlooked archaeological site in Montenegro, fifteen minutes from TGD.',
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
            <span>{t('blogIndex.breadcrumbBlog') || 'Blog'}</span>
          </nav>
          <h1 className="content-hero__title">Driving Montenegro from Podgorica Airport</h1>
          <p className="content-hero__subtitle">Practical guides, route notes and arrival-hour tips for renters landing at TGD.</p>
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
                  {t('blogIndex.readGuide') || 'Read guide'} &rarr;
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
