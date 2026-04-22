'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function VrmacRidgeTrail() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogVrmacRidgeTrail.title')}
      subtitle={t('blogVrmacRidgeTrail.subtitle')}
      description={t('blogVrmacRidgeTrail.description')}
      image="/img/blog-lovcen-road.webp"
    >
      <h2>{t('blogVrmacRidgeTrail.h2Intro')}</h2>
      <p>{t('blogVrmacRidgeTrail.introP1')}</p>
      <p>{t('blogVrmacRidgeTrail.introP2')}</p>

      <h2>{t('blogVrmacRidgeTrail.h2Trailhead')}</h2>
      <p>{t('blogVrmacRidgeTrail.trailheadP1')}</p>
      <p>{t('blogVrmacRidgeTrail.trailheadP2')}</p>

      <img src="/img/blog-lovcen-hairpins.webp" alt={t('blogVrmacRidgeTrail.altRidge')} loading="lazy" />

      <h2>{t('blogVrmacRidgeTrail.h2Route')}</h2>
      <p>{t('blogVrmacRidgeTrail.routeP1')}</p>
      <p>{t('blogVrmacRidgeTrail.routeP2')}</p>
      <p>{t('blogVrmacRidgeTrail.routeP3')}</p>

      <h2>{t('blogVrmacRidgeTrail.h2Fort')}</h2>
      <p>{t('blogVrmacRidgeTrail.fortP1')}</p>
      <p>{t('blogVrmacRidgeTrail.fortP2')}</p>

      <h2>{t('blogVrmacRidgeTrail.h2Wildlife')}</h2>
      <p>{t('blogVrmacRidgeTrail.wildlifeP')}</p>

      <h2>{t('blogVrmacRidgeTrail.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogVrmacRidgeTrail.tip1Label')}</strong> {t('blogVrmacRidgeTrail.tip1Val')}</li>
        <li><strong>{t('blogVrmacRidgeTrail.tip2Label')}</strong> {t('blogVrmacRidgeTrail.tip2Val')}</li>
        <li><strong>{t('blogVrmacRidgeTrail.tip3Label')}</strong> {t('blogVrmacRidgeTrail.tip3Val')}</li>
        <li><strong>{t('blogVrmacRidgeTrail.tip4Label')}</strong> {t('blogVrmacRidgeTrail.tip4Val')}</li>
        <li><strong>{t('blogVrmacRidgeTrail.tip5Label')}</strong> {t('blogVrmacRidgeTrail.tip5Val')}</li>
        <li><strong>{t('blogVrmacRidgeTrail.tip6Label')}</strong> {t('blogVrmacRidgeTrail.tip6Val')}</li>
      </ul>

      <h2>{t('blogVrmacRidgeTrail.h2Seasonal')}</h2>
      <p>{t('blogVrmacRidgeTrail.seasonalP1')}</p>
      <p>{t('blogVrmacRidgeTrail.seasonalP2')}</p>
      <p>{t('blogVrmacRidgeTrail.seasonalP3')}</p>

      <h2>{t('blogVrmacRidgeTrail.h2Combine')}</h2>
      <p>{t('blogVrmacRidgeTrail.combineP1')} <a href={localePath('/blog/bay-of-kotor-swimming')}>{t('blogVrmacRidgeTrail.combineLink')}</a> {t('blogVrmacRidgeTrail.combineP2')}</p>

      <h2>{t('blogVrmacRidgeTrail.h2Parking')}</h2>
      <p>{t('blogVrmacRidgeTrail.parkingP')}</p>

      <div className="route-info">
        <h3>{t('blogVrmacRidgeTrail.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogVrmacRidgeTrail.glanceElevation')}</strong>
            {t('blogVrmacRidgeTrail.glanceElevationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogVrmacRidgeTrail.glanceDuration')}</strong>
            {t('blogVrmacRidgeTrail.glanceDurationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogVrmacRidgeTrail.glanceTrailhead')}</strong>
            {t('blogVrmacRidgeTrail.glanceTrailheadVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogVrmacRidgeTrail.glanceBestSeason')}</strong>
            {t('blogVrmacRidgeTrail.glanceBestSeasonVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
