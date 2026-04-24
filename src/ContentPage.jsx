'use client';
import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Footer from './Footer';
import useTranslation from './i18n/useTranslation';
import './ContentPage.css';

export default function ContentPage({ title, subtitle, image, description, children }) {
  const pathname = usePathname();
  const { t, localePath } = useTranslation();

  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>{title}</span>
          </nav>
          <h1 className="content-hero__title">{title}</h1>
          {subtitle && <p className="content-hero__subtitle">{subtitle}</p>}
        </div>
      </div>
      <div className="content-body">
        <div className="content-body__inner">
          {children}
        </div>
        <aside className="content-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-card__title">{t('sidebar.bookTitle')}</h3>
            <p className="sidebar-card__text">{t('sidebar.bookText')}</p>
            <a href={localePath('/book')} className="sidebar-card__btn">{t('common.searchCars')}</a>
          </div>
          <div className="sidebar-card">
            <h3 className="sidebar-card__title">{t('sidebar.helpTitle')}</h3>
            <p className="sidebar-card__text">{t('sidebar.helpText')}</p>
            <a href="mailto:info@podgoricaairportcarrental.com" className="sidebar-card__btn sidebar-card__btn--outline">{t('common.emailUs') || 'Email Us'}</a>
          </div>
          <div className="sidebar-card">
            <h3 className="sidebar-card__title">{t('sidebar.popularDest')}</h3>
            <ul className="sidebar-links">
              <li><a href={localePath('/tivat-airport')}>{t('sidebar.tivatAirport')}</a></li>
              <li><a href={localePath('/kotor')}>Kotor</a></li>
              <li><a href={localePath('/budva')}>Budva</a></li>
              <li><a href={localePath('/perast')}>Perast</a></li>
              <li><a href={localePath('/podgorica')}>Podgorica</a></li>
              <li><a href={localePath('/dubrovnik-airport')}>{t('sidebar.dubrovnikAirport')}</a></li>
              <li><a href={localePath('/border-crossing-guide')}>{t('footer.borderGuide')}</a></li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Related Guides */}
      <div className="related-guides">
        <div className="related-guides__inner">
          <h2 className="related-guides__title">{t('contentPage.youMightAlsoLike')}</h2>
          <div className="related-guides__cards">
            <a href={localePath('/blog/first-hour-tgd-arrivals')} className="related-card">
              <img src="/img/blog-tgd-airport-arrival-guide.webp" alt="First Hour at Podgorica Airport" loading="lazy" />
              <span>First Hour at Podgorica Airport</span>
            </a>
            <a href={localePath('/blog/tgd-to-ostrog-monastery-drive')} className="related-card">
              <img src="/img/blog-tgd-to-ostrog-monastery-drive.webp" alt="TGD to Ostrog Monastery" loading="lazy" />
              <span>TGD to Ostrog Monastery</span>
            </a>
            <a href={localePath('/blog/tgd-to-zabljak-durmitor-drive')} className="related-card">
              <img src="/img/blog-tgd-to-zabljak-durmitor-drive.webp" alt="TGD to Žabljak and Durmitor" loading="lazy" />
              <span>TGD to Žabljak and Durmitor</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="content-cta">
        <div className="content-cta__inner">
          <h2>{t('contentPage.readyCta')}</h2>
          <a href={localePath('/book')} className="content-cta__btn">{t('contentPage.searchCars')} →</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
