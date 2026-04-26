'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import config from '../../siteConfig';
import { carArticles as carArticlesEn } from '../../data/carArticles';
import { carArticles as carArticlesDe } from '../../data/carArticles.de';
import { carArticles as carArticlesRu } from '../../data/carArticles.ru';
import { carArticles as carArticlesIt } from '../../data/carArticles.it';
import { carArticles as carArticlesFr } from '../../data/carArticles.fr';
import { carArticles as carArticlesMe } from '../../data/carArticles.me';
import { carImages } from '../../data/carImages';
import CarGallery from '../CarGallery';

const CAR_ARTICLES_BY_LANG = {
  en: carArticlesEn,
  de: carArticlesDe,
  ru: carArticlesRu,
  it: carArticlesIt,
  fr: carArticlesFr,
  me: carArticlesMe,
};
import {
  Users, Fuel, Settings, Briefcase, CheckCircle, ArrowRight,
  Droplet, Package,
} from 'lucide-react';

// Podgorica-rental inline photo per car — motorway, Ostrog, motorway, cross-border feel.
const INLINE_PHOTOS = {
  'vw-polo':   { src: '/img/fleet-inline/coastal-road.jpg',      alt: 'Podgorica region coastal road near Zabjelo',       caption: 'The Zabjelo–Tuzi stretch at a steady 50 km/h, the Clio\u2019s natural cruising pace on a multi-day bay stay.' },
  'peugeot-308':    { src: '/img/fleet-inline/mountain-highway.jpg',  alt: 'Smokovac–Mateševo motorway inland from Podgorica',  caption: 'The Smokovac motorway toward Podgorica, the 308\u2019s BlueHDi settles into a steady 1,800 rpm cruise here.' },
  'renault-megane': { src: '/img/fleet-inline/sea-road.jpg',          alt: 'Old motorway from Podgorica toward Danilovgrad',          caption: 'The patched tarmac out to Danilovgrad\u2019s Roman mosaics, where the Megane\u2019s soft damping actually earns its rental premium.' },
  'kia-stonic':     { src: '/img/fleet-inline/rocky-road.jpg',        alt: 'Rutted spur road up to Kolašin above Podgorica',    caption: 'The Kolašin approach above the capital, a little extra ground clearance keeps the Stonic composed where a Clio scrapes.' },
  'vw-golf':        { src: '/img/fleet-inline/forest-road.jpg',       alt: 'Wooded Ostrog serpentine above Podgorica',          caption: 'The Podgorica–Kolašin climb in third gear, the DSG reads the hairpins, the cabin stays silent.' },
  'toyota-yaris':       { src: '/img/fleet-inline/seaside-road.jpg',      alt: 'Narrow Cijevna waterfront lane in Podgorica',           caption: 'The Cijevna waterfront past the ferry dock, the 500 slots into gaps the rest of the fleet drives past.' },
  'citroen-c3':     { src: '/img/fleet-inline/village-trees.jpg',     alt: 'Back road through Gornja Lastva above Podgorica',   caption: 'The Gornja Lastva spur above the capital, the C3\u2019s Advanced Comfort turns the patched bitumen into distant thumps.' },
  _default:         { src: '/img/fleet-inline/podgorica-bay.jpg',         alt: 'Aerial view of the Podgorica region',               caption: 'A week based in Podgorica puts Kolašin, Kolašin, Danilovgrad, Skadar Lake and Dubrovnik all inside day-trip range.' },
};

// Related cards per car — using the actual blog + destination pages that exist on podgoricaairportcarrental.
// Per-car destination cards. Each car gets a unique triple; each slug is
// paired to a distinct image so the grid never shows two cards with the
// same photo.
const RELATED = {
  'vw-polo': [
    { href: '/blog/first-hour-tgd-arrivals',      img: '/img/blog-tgd-airport-arrival-guide.webp', title: 'First Hour at Podgorica Airport' },
    { href: '/blog/late-night-tgd-arrival',       img: '/img/blog-tgd-night-arrivals-guide.webp',  title: 'Late-Night Arrivals at TGD' },
    { href: '/blog/tgd-winter-driving',           img: '/img/blog-tgd-winter-driving-from-airport.webp', title: 'Winter Driving from TGD' },
  ],
  'peugeot-308': [
    { href: '/blog/tgd-to-budva-drive',           img: '/img/blog-tgd-to-budva-drive.webp',        title: 'TGD to Budva, the 70 km drive' },
    { href: '/blog/tgd-to-zabljak-durmitor-drive',img: '/img/blog-tgd-to-zabljak-durmitor-drive.webp', title: 'TGD to Žabljak and Durmitor' },
    { href: '/blog/tgd-to-albania-via-tuzi',      img: '/img/blog-tgd-to-albania-via-tuzi.webp',   title: 'Crossing to Albania from TGD' },
  ],
  'renault-megane': [
    { href: '/blog/tgd-to-kotor-drive',           img: '/img/blog-tgd-to-kotor-drive.webp',        title: 'TGD to Kotor, the 85 km drive' },
    { href: '/blog/tgd-to-ostrog-monastery-drive',img: '/img/blog-tgd-to-ostrog-monastery-drive.webp', title: 'TGD to Ostrog Monastery' },
    { href: '/blog/tgd-to-budva-drive',           img: '/img/blog-tgd-to-budva-drive.webp',        title: 'TGD to Budva' },
  ],
  'kia-stonic': [
    { href: '/blog/tgd-to-zabljak-durmitor-drive',img: '/img/blog-tgd-to-zabljak-durmitor-drive.webp', title: 'TGD to Durmitor' },
    { href: '/blog/tgd-winter-driving',           img: '/img/blog-tgd-winter-driving-from-airport.webp', title: 'Winter Driving from TGD' },
    { href: '/blog/tgd-to-ostrog-monastery-drive',img: '/img/blog-tgd-to-ostrog-monastery-drive.webp', title: 'TGD to Ostrog' },
  ],
  'vw-golf': [
    { href: '/blog/tgd-to-kotor-drive',           img: '/img/blog-tgd-to-kotor-drive.webp',        title: 'TGD to Kotor' },
    { href: '/blog/tgd-to-albania-via-tuzi',      img: '/img/blog-tgd-to-albania-via-tuzi.webp',   title: 'Crossing to Albania' },
    { href: '/blog/duklja-roman-ruins-near-airport', img: '/img/blog-duklja-roman-ruins.webp',     title: 'Duklja Roman ruins' },
  ],
  'toyota-yaris': [
    { href: '/blog/first-hour-tgd-arrivals',      img: '/img/blog-tgd-airport-arrival-guide.webp', title: 'First Hour at TGD' },
    { href: '/blog/duklja-roman-ruins-near-airport', img: '/img/blog-duklja-roman-ruins.webp',     title: 'Duklja Roman ruins near the airport' },
    { href: '/blog/late-night-tgd-arrival',       img: '/img/blog-tgd-night-arrivals-guide.webp',  title: 'Late-night arrivals at TGD' },
  ],
  'citroen-c3': [
    { href: '/blog/first-hour-tgd-arrivals',      img: '/img/blog-tgd-airport-arrival-guide.webp', title: 'First Hour at TGD' },
    { href: '/blog/tgd-to-ostrog-monastery-drive',img: '/img/blog-tgd-to-ostrog-monastery-drive.webp', title: 'TGD to Ostrog' },
    { href: '/blog/duklja-roman-ruins-near-airport', img: '/img/blog-duklja-roman-ruins.webp',     title: 'Duklja Roman ruins' },
  ],
};

const ARTICLE_LINKS = {
  'vw-polo':        { paraIndex: 1, candidates: ['airport', 'Podgorica', 'TGD', 'Danilovgrad'],            href: '/blog/first-hour-tgd-arrivals' },
  'peugeot-308':    { paraIndex: 1, candidates: ['Smokovac', 'motorway', 'Budva', 'Sozina'],               href: '/blog/tgd-to-budva-drive' },
  'renault-megane': { paraIndex: 1, candidates: ['Kotor', 'Vrmac', 'Sozina', 'motorway'],                  href: '/blog/tgd-to-kotor-drive' },
  'kia-stonic':     { paraIndex: 1, candidates: ['Durmitor', 'Kolašin', 'Žabljak', 'Ostrog'],              href: '/blog/tgd-to-zabljak-durmitor-drive' },
  'vw-golf':        { paraIndex: 1, candidates: ['Ostrog', 'Kolašin', 'Žabljak', 'Dubrovnik'],             href: '/blog/tgd-to-ostrog-monastery-drive' },
  'toyota-yaris':   { paraIndex: 1, candidates: ['Duklja', 'city centre', 'Virpazar', 'Tuzi'],             href: '/blog/duklja-roman-ruins-near-airport' },
  'citroen-c3':     { paraIndex: 1, candidates: ['Danilovgrad', 'Virpazar', 'Ostrog', 'Bogetići'],         href: '/blog/tgd-to-ostrog-monastery-drive' },
};

function renderParagraphWithLink(paragraph, rule, localePath, linkLabel) {
  if (!rule) return paragraph;
  for (const phrase of rule.candidates) {
    const idx = paragraph.indexOf(phrase);
    if (idx === -1) continue;
    const before = paragraph.slice(0, idx);
    const linkText = paragraph.slice(idx, idx + phrase.length);
    const after = paragraph.slice(idx + phrase.length);
    return (
      <>
        {before}
        <a href={localePath(rule.href)} title={linkLabel}>{linkText}</a>
        {after}
      </>
    );
  }
  return paragraph;
}

export default function CarDetail({ slug }) {
  const { t, lang, localePath } = useTranslation();
  const localisedArticles = CAR_ARTICLES_BY_LANG[lang] || CAR_ARTICLES_BY_LANG.en;
  const carArticles = localisedArticles[slug] ? localisedArticles : CAR_ARTICLES_BY_LANG.en;
  const car = config.cars.find(c => c.slug === slug);
  if (!car) return null;

  const k = (sub) => `cars.${slug}.${sub}`;
  const tk = (sub, fallback) => {
    const val = t(k(sub));
    return val && val !== k(sub) ? val : fallback;
  };
  const tf = (key, fallback) => {
    const val = t(key);
    return val && val !== key ? val : fallback;
  };

  const name = tk('name', car.name);
  const tagline = tk('tagline', car.tagline);
  const lede = tk('lede', car.lede);
  const suitability = tk('suitability', car.suitability);
  const regional = tk('regional', car.regional);
  const category = tk('category', car.category);
  const details = car.details || {};

  const idx = config.cars.findIndex(c => c.slug === slug);
  const next = config.cars[(idx + 1) % config.cars.length];

  const toMpg = (consumption) => {
    if (!consumption) return null;
    const m = consumption.match(/([\d.]+)\s*L\/100/);
    if (!m) return null;
    const l100 = parseFloat(m[1]);
    if (!l100) return null;
    return `${Math.round(282.48 / l100)} mpg`;
  };
  const mpg = toMpg(details.consumption);

  const quickRow = [
    { icon: <Users size={16} />,     label: tf('carSpecs.seats', 'Seats'),         value: car.seats },
    { icon: <Settings size={16} />,  label: tf('carSpecs.transmission', 'Gearbox'), value: car.transmission },
    { icon: <Fuel size={16} />,      label: tf('carSpecs.fuel', 'Fuel'),           value: car.fuel },
    { icon: <Briefcase size={16} />, label: tf('carSpecs.luggage', 'Luggage'),     value: `${car.luggage} bags` },
    { icon: <Package size={16} />,   label: tf('carSpecs.bootSize', 'Boot'),       value: details.bootSize },
    { icon: <Droplet size={16} />,   label: tf('carSpecs.mpg', 'Economy'),         value: mpg || details.consumption },
  ].filter(r => r.value);

  return (
    <ContentPage
      title={name}
      subtitle={tagline}
      description={suitability}
      image={car.image}
      heroPosition="center"
    >
      <div className="car-detail-hero-card">
        <div className="car-detail-category-tag">{category}</div>
        <p className="car-detail-lede">{lede}</p>
      </div>

      <CarGallery images={carImages[slug] || [car.image]} alt={name} />

      <h2>{tf('cars.overviewTitle', 'At a glance')}</h2>
      <div className="car-detail-specs car-detail-specs--quick">
        {quickRow.map((s) => (
          <div key={s.label} className="car-detail-spec">
            <div className="car-detail-spec__icon">{s.icon}</div>
            <div className="car-detail-spec__label">{s.label}</div>
            <div className="car-detail-spec__value">{s.value}</div>
          </div>
        ))}
      </div>

      <h2>{tf('cars.whoForTitle', `Who is the ${car.name} for?`)}</h2>
      <p>{suitability}</p>
      {Array.isArray(car.bestFor) && (
        <ul className="car-detail-bestfor">
          {car.bestFor.map((b, i) => (
            <li key={i}><CheckCircle size={14} /> {tk(`bestFor.${i}`, b)}</li>
          ))}
        </ul>
      )}

      <div className="car-detail-regional">
        <h2>{tf('cars.regionalTitle', 'Best regional use')}</h2>
        <p>{regional}</p>
      </div>

      {carArticles[slug] && (
        <div className="car-detail-article">
          <h2>{tf('cars.articleTitle', `The ${car.name} on Podgorica roads`)}</h2>
          {carArticles[slug].paragraphs.map((para, i) => {
            const rule = ARTICLE_LINKS[slug];
            const applyRuleHere = rule && rule.paraIndex === i;
            const sectionKeys = [
              'behindWheel', 'onRoads', 'spaceLoad', 'bestFor', 'practical', 'verdict',
            ];
            const sectionFallbacks = [
              'Behind the wheel',
              'On Podgorica roads',
              'Space and load',
              'Best journeys for this car',
              'Practical notes',
              'The verdict',
            ];
            return (
              <>
                <section key={i} className="car-detail-article__section">
                  <h3>{tf(`cars.sections.${sectionKeys[i]}`, sectionFallbacks[i])}</h3>
                  <p>{applyRuleHere ? renderParagraphWithLink(para, rule, localePath, car.name) : para}</p>
                </section>
                {i === 2 && (() => {
                  const inline = INLINE_PHOTOS[slug] || INLINE_PHOTOS._default;
                  return (
                    <figure key={`inline-${i}`} className="car-detail-article__figure">
                      <img src={inline.src} alt={inline.alt} loading="lazy" />
                      <figcaption>{inline.caption}</figcaption>
                    </figure>
                  );
                })()}
              </>
            );
          })}
        </div>
      )}

      <h2>{tf('cars.featuresTitle', 'Inside the car')}</h2>
      <ul className="car-detail-feature-list">
        {car.features.map((f, i) => {
          const translated = tk(`features.${i}`, f);
          return <li key={i}><CheckCircle size={14} /> {translated}</li>;
        })}
      </ul>

      {RELATED[slug] && (
        <div className="car-detail-related">
          <h2>{tf('cars.relatedTitle', 'Where this car takes you')}</h2>
          <div className="car-detail-related__grid">
            {RELATED[slug].map((card) => (
              <a key={card.href} href={localePath(card.href)} className="car-detail-related__card">
                <div className="car-detail-related__img" style={{ backgroundImage: `url(${card.img})` }} />
                <div className="car-detail-related__body">
                  <span className="car-detail-related__title">{card.title}</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="car-detail-cta">
        <a href={localePath('/book')} className="car-detail-cta__btn">
          {tf('cars.checkAvailability', 'Check availability & live pricing')} <ArrowRight size={16} />
        </a>
        <a href={localePath(`/cars/${next.slug}`)} className="car-detail-cta__next">
          {tf('cars.nextBtn', `Next in fleet: ${next.name}`)} →
        </a>
      </div>
    </ContentPage>
  );
}
