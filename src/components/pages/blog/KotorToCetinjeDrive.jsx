'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function KotorToCetinjeDrive() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogKotorToCetinjeDrive.title')}
      subtitle={t('blogKotorToCetinjeDrive.subtitle')}
      description={t('blogKotorToCetinjeDrive.description')}
      image="/img/blog-kotor-winter.webp"
    >
      <h2>{t('blogKotorToCetinjeDrive.h2Intro')}</h2>
      <p>{t('blogKotorToCetinjeDrive.introP1')}</p>
      <p>{t('blogKotorToCetinjeDrive.introP2')}</p>

      <h2>{t('blogKotorToCetinjeDrive.h2Ascent')}</h2>
      <p>{t('blogKotorToCetinjeDrive.ascentP1')}</p>
      <p>{t('blogKotorToCetinjeDrive.ascentP2')}</p>

      <img src="/img/blog-lovcen-hairpins.webp" alt={t('blogKotorToCetinjeDrive.altMountain')} loading="lazy" />

      <h2>{t('blogKotorToCetinjeDrive.h2Njeguski')}</h2>
      <p>{t('blogKotorToCetinjeDrive.njeguskiP1')}</p>
      <p>{t('blogKotorToCetinjeDrive.njeguskiP2')}</p>

      <h2>{t('blogKotorToCetinjeDrive.h2Descent')}</h2>
      <p>{t('blogKotorToCetinjeDrive.descentP1')}</p>
      <p>{t('blogKotorToCetinjeDrive.descentP2')}</p>

      <h2>{t('blogKotorToCetinjeDrive.h2Cetinje')}</h2>
      <p>{t('blogKotorToCetinjeDrive.cetinjeP1')}</p>
      <p>{t('blogKotorToCetinjeDrive.cetinjeP2')}</p>

      <h2>{t('blogKotorToCetinjeDrive.h2WhereToEat')}</h2>
      <p>{t('blogKotorToCetinjeDrive.whereToEatP')}</p>

      <h2>{t('blogKotorToCetinjeDrive.h2Return')}</h2>
      <p>{t('blogKotorToCetinjeDrive.returnP1')}</p>
      <p>{t('blogKotorToCetinjeDrive.returnP2')}</p>

      <h2>{t('blogKotorToCetinjeDrive.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogKotorToCetinjeDrive.tip1Label')}</strong> {t('blogKotorToCetinjeDrive.tip1Val')}</li>
        <li><strong>{t('blogKotorToCetinjeDrive.tip2Label')}</strong> {t('blogKotorToCetinjeDrive.tip2Val')}</li>
        <li><strong>{t('blogKotorToCetinjeDrive.tip3Label')}</strong> {t('blogKotorToCetinjeDrive.tip3Val')}</li>
        <li><strong>{t('blogKotorToCetinjeDrive.tip4Label')}</strong> {t('blogKotorToCetinjeDrive.tip4Val')}</li>
        <li><strong>{t('blogKotorToCetinjeDrive.tip5Label')}</strong> {t('blogKotorToCetinjeDrive.tip5Val')}</li>
      </ul>

      <h2>{t('blogKotorToCetinjeDrive.h2Also')}</h2>
      <p>{t('blogKotorToCetinjeDrive.alsoP')} <a href={localePath('/blog/kotor-food-markets')}>{t('blogKotorToCetinjeDrive.alsoLink')}</a>.</p>

      <div className="route-info">
        <h3>{t('blogKotorToCetinjeDrive.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogKotorToCetinjeDrive.glanceDistance')}</strong>
            {t('blogKotorToCetinjeDrive.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotorToCetinjeDrive.glanceDrive')}</strong>
            {t('blogKotorToCetinjeDrive.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotorToCetinjeDrive.glanceMustStop')}</strong>
            {t('blogKotorToCetinjeDrive.glanceMustStopVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotorToCetinjeDrive.glanceBestSeason')}</strong>
            {t('blogKotorToCetinjeDrive.glanceBestSeasonVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
