'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BayOfKotorSwimming() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogBayOfKotorSwimming.title')}
      subtitle={t('blogBayOfKotorSwimming.subtitle')}
      description={t('blogBayOfKotorSwimming.description')}
      image="/img/blog-bay-boat.webp"
    >
      <h2>{t('blogBayOfKotorSwimming.h2Intro')}</h2>
      <p>{t('blogBayOfKotorSwimming.introP1')}</p>
      <p>{t('blogBayOfKotorSwimming.introP2')}</p>
      <p>{t('blogBayOfKotorSwimming.introP3')}</p>

      <h2>{t('blogBayOfKotorSwimming.h2Spot1')}</h2>
      <p>{t('blogBayOfKotorSwimming.spot1P1')}</p>
      <p>{t('blogBayOfKotorSwimming.spot1P2')}</p>

      <img src="/img/blog-bay-swimming.webp" alt={t('blogBayOfKotorSwimming.altSwim')} loading="lazy" />

      <h2>{t('blogBayOfKotorSwimming.h2Spot2')}</h2>
      <p>{t('blogBayOfKotorSwimming.spot2P')}</p>

      <h2>{t('blogBayOfKotorSwimming.h2Spot3')}</h2>
      <p>{t('blogBayOfKotorSwimming.spot3P')}</p>

      <h2>{t('blogBayOfKotorSwimming.h2Spot4')}</h2>
      <p>{t('blogBayOfKotorSwimming.spot4P')}</p>

      <h2>{t('blogBayOfKotorSwimming.h2Spot5')}</h2>
      <p>{t('blogBayOfKotorSwimming.spot5P')}</p>

      <h2>{t('blogBayOfKotorSwimming.h2Spot6')}</h2>
      <p>{t('blogBayOfKotorSwimming.spot6P1')}</p>
      <p>{t('blogBayOfKotorSwimming.spot6P2')}</p>

      <h2>{t('blogBayOfKotorSwimming.h2Spot7')}</h2>
      <p>{t('blogBayOfKotorSwimming.spot7P')}</p>

      <h2>{t('blogBayOfKotorSwimming.h2Spot8')}</h2>
      <p>{t('blogBayOfKotorSwimming.spot8P')}</p>

      <h2>{t('blogBayOfKotorSwimming.h2Spot9')}</h2>
      <p>{t('blogBayOfKotorSwimming.spot9P')}</p>

      <h2>{t('blogBayOfKotorSwimming.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogBayOfKotorSwimming.tip1Label')}</strong> {t('blogBayOfKotorSwimming.tip1Val')}</li>
        <li><strong>{t('blogBayOfKotorSwimming.tip2Label')}</strong> {t('blogBayOfKotorSwimming.tip2Val')}</li>
        <li><strong>{t('blogBayOfKotorSwimming.tip3Label')}</strong> {t('blogBayOfKotorSwimming.tip3Val')}</li>
        <li><strong>{t('blogBayOfKotorSwimming.tip4Label')}</strong> {t('blogBayOfKotorSwimming.tip4Val')}</li>
        <li><strong>{t('blogBayOfKotorSwimming.tip5Label')}</strong> {t('blogBayOfKotorSwimming.tip5Val')}</li>
      </ul>

      <h2>{t('blogBayOfKotorSwimming.h2FullDay')}</h2>
      <p>{t('blogBayOfKotorSwimming.fullDayP')}</p>

      <h2>{t('blogBayOfKotorSwimming.h2Drive')}</h2>
      <p>{t('blogBayOfKotorSwimming.driveP')} <a href={localePath('/blog/vrmac-ridge-trail')}>{t('blogBayOfKotorSwimming.driveLink')}</a>.</p>

      <div className="route-info">
        <h3>{t('blogBayOfKotorSwimming.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogBayOfKotorSwimming.glanceSpots')}</strong>
            {t('blogBayOfKotorSwimming.glanceSpotsVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogBayOfKotorSwimming.glanceBestFor')}</strong>
            {t('blogBayOfKotorSwimming.glanceBestForVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogBayOfKotorSwimming.glanceNeeded')}</strong>
            {t('blogBayOfKotorSwimming.glanceNeededVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogBayOfKotorSwimming.glanceSeason')}</strong>
            {t('blogBayOfKotorSwimming.glanceSeasonVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
