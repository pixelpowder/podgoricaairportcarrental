'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function DobrotaWaterfrontWalk() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogDobrotaWaterfrontWalk.title')}
      subtitle={t('blogDobrotaWaterfrontWalk.subtitle')}
      description={t('blogDobrotaWaterfrontWalk.description')}
      image="/img/blog-kotor-photo.webp"
    >
      <h2>{t('blogDobrotaWaterfrontWalk.h2Intro')}</h2>
      <p>{t('blogDobrotaWaterfrontWalk.introP1')}</p>
      <p>{t('blogDobrotaWaterfrontWalk.introP2')}</p>

      <h2>{t('blogDobrotaWaterfrontWalk.h2Palazzi')}</h2>
      <p>{t('blogDobrotaWaterfrontWalk.palazziP1')}</p>
      <p>{t('blogDobrotaWaterfrontWalk.palazziP2')}</p>

      <img src="/img/blog-dobrota-waterfront.webp" alt={t('blogDobrotaWaterfrontWalk.altWaterfront')} loading="lazy" />

      <h2>{t('blogDobrotaWaterfrontWalk.h2Churches')}</h2>
      <p>{t('blogDobrotaWaterfrontWalk.churchesP1')}</p>
      <p>{t('blogDobrotaWaterfrontWalk.churchesP2')}</p>

      <h2>{t('blogDobrotaWaterfrontWalk.h2Dining')}</h2>
      <p>{t('blogDobrotaWaterfrontWalk.diningP1')}</p>
      <p>{t('blogDobrotaWaterfrontWalk.diningP2')}</p>

      <h2>{t('blogDobrotaWaterfrontWalk.h2History')}</h2>
      <p>{t('blogDobrotaWaterfrontWalk.historyP')}</p>

      <h2>{t('blogDobrotaWaterfrontWalk.h2Swimming')}</h2>
      <p>{t('blogDobrotaWaterfrontWalk.swimmingP')}</p>

      <h2>{t('blogDobrotaWaterfrontWalk.h2Sunset')}</h2>
      <p>{t('blogDobrotaWaterfrontWalk.sunsetP')}</p>

      <h2>{t('blogDobrotaWaterfrontWalk.h2Seasonal')}</h2>
      <p>{t('blogDobrotaWaterfrontWalk.seasonalP1')}</p>
      <p>{t('blogDobrotaWaterfrontWalk.seasonalP2')}</p>

      <h2>{t('blogDobrotaWaterfrontWalk.h2Getting')}</h2>
      <p>{t('blogDobrotaWaterfrontWalk.gettingP1')}</p>
      <p>{t('blogDobrotaWaterfrontWalk.gettingP2')} <a href={localePath('/blog/kotor-spring-wildflowers')}>{t('blogDobrotaWaterfrontWalk.gettingLink')}</a>.</p>

      <div className="route-info">
        <h3>{t('blogDobrotaWaterfrontWalk.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogDobrotaWaterfrontWalk.glanceDistance')}</strong>
            {t('blogDobrotaWaterfrontWalk.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogDobrotaWaterfrontWalk.glanceLength')}</strong>
            {t('blogDobrotaWaterfrontWalk.glanceLengthVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogDobrotaWaterfrontWalk.glanceBestFor')}</strong>
            {t('blogDobrotaWaterfrontWalk.glanceBestForVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogDobrotaWaterfrontWalk.glanceParking')}</strong>
            {t('blogDobrotaWaterfrontWalk.glanceParkingVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
