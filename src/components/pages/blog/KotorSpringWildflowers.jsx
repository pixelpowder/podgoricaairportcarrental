'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function KotorSpringWildflowers() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogKotorSpringWildflowers.title')}
      subtitle={t('blogKotorSpringWildflowers.subtitle')}
      description={t('blogKotorSpringWildflowers.description')}
      image="/img/blog-kotor-cats.webp"
    >
      <h2>{t('blogKotorSpringWildflowers.h2Intro')}</h2>
      <p>{t('blogKotorSpringWildflowers.introP1')}</p>
      <p>{t('blogKotorSpringWildflowers.introP2')}</p>
      <p>{t('blogKotorSpringWildflowers.introP3')}</p>

      <h2>{t('blogKotorSpringWildflowers.h2Route1')}</h2>
      <p>{t('blogKotorSpringWildflowers.route1P1')}</p>
      <p>{t('blogKotorSpringWildflowers.route1P2')}</p>

      <img src="/img/blog-spring-flowers.webp" alt={t('blogKotorSpringWildflowers.altFlowers')} loading="lazy" />

      <h2>{t('blogKotorSpringWildflowers.h2Route2')}</h2>
      <p>{t('blogKotorSpringWildflowers.route2P1')}</p>
      <p>{t('blogKotorSpringWildflowers.route2P2')}</p>

      <h2>{t('blogKotorSpringWildflowers.h2Route3')}</h2>
      <p>{t('blogKotorSpringWildflowers.route3P1')}</p>
      <p>{t('blogKotorSpringWildflowers.route3P2')}</p>

      <h2>{t('blogKotorSpringWildflowers.h2Species')}</h2>
      <ul>
        <li><strong>{t('blogKotorSpringWildflowers.species1Label')}</strong> {t('blogKotorSpringWildflowers.species1Val')}</li>
        <li><strong>{t('blogKotorSpringWildflowers.species2Label')}</strong> {t('blogKotorSpringWildflowers.species2Val')}</li>
        <li><strong>{t('blogKotorSpringWildflowers.species3Label')}</strong> {t('blogKotorSpringWildflowers.species3Val')}</li>
        <li><strong>{t('blogKotorSpringWildflowers.species4Label')}</strong> {t('blogKotorSpringWildflowers.species4Val')}</li>
        <li><strong>{t('blogKotorSpringWildflowers.species5Label')}</strong> {t('blogKotorSpringWildflowers.species5Val')}</li>
        <li><strong>{t('blogKotorSpringWildflowers.species6Label')}</strong> {t('blogKotorSpringWildflowers.species6Val')}</li>
        <li><strong>{t('blogKotorSpringWildflowers.species7Label')}</strong> {t('blogKotorSpringWildflowers.species7Val')}</li>
      </ul>

      <h2>{t('blogKotorSpringWildflowers.h2Photography')}</h2>
      <p>{t('blogKotorSpringWildflowers.photographyP')}</p>

      <h2>{t('blogKotorSpringWildflowers.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogKotorSpringWildflowers.tip1Label')}</strong> {t('blogKotorSpringWildflowers.tip1Val')}</li>
        <li><strong>{t('blogKotorSpringWildflowers.tip2Label')}</strong> {t('blogKotorSpringWildflowers.tip2Val')}</li>
        <li><strong>{t('blogKotorSpringWildflowers.tip3Label')}</strong> {t('blogKotorSpringWildflowers.tip3Val')}</li>
        <li><strong>{t('blogKotorSpringWildflowers.tip4Label')}</strong> {t('blogKotorSpringWildflowers.tip4Val')}</li>
        <li><strong>{t('blogKotorSpringWildflowers.tip5Label')}</strong> {t('blogKotorSpringWildflowers.tip5Val')}</li>
      </ul>

      <h2>{t('blogKotorSpringWildflowers.h2Also')}</h2>
      <p>{t('blogKotorSpringWildflowers.alsoP')} <a href={localePath('/blog/dobrota-waterfront-walk')}>{t('blogKotorSpringWildflowers.alsoLink')}</a>.</p>

      <div className="route-info">
        <h3>{t('blogKotorSpringWildflowers.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogKotorSpringWildflowers.glanceSeason')}</strong>
            {t('blogKotorSpringWildflowers.glanceSeasonVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotorSpringWildflowers.glanceRoutes')}</strong>
            {t('blogKotorSpringWildflowers.glanceRoutesVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotorSpringWildflowers.glanceBestMonth')}</strong>
            {t('blogKotorSpringWildflowers.glanceBestMonthVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotorSpringWildflowers.glanceNeeded')}</strong>
            {t('blogKotorSpringWildflowers.glanceNeededVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
