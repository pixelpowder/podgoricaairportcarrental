'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function KotorHiddenChurches() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogHiddenChurches.title')}
      subtitle={t('blogHiddenChurches.subtitle')}
      description={t('blogHiddenChurches.description')}
      image="/img/blog-kotor-walls.webp"
    >
      <h2>{t('blogHiddenChurches.h2Intro')}</h2>
      <p>{t('blogHiddenChurches.introP1')}</p>
      <p>{t('blogHiddenChurches.introP2')}</p>

      <h2>{t('blogHiddenChurches.h2StLuke')}</h2>
      <p>{t('blogHiddenChurches.stLukeP1')}</p>
      <p>{t('blogHiddenChurches.stLukeP2')}</p>

      <img src="/img/blog-walls-steps.webp" alt={t('blogHiddenChurches.altChapel')} loading="lazy" />

      <h2>{t('blogHiddenChurches.h2StMary')}</h2>
      <p>{t('blogHiddenChurches.stMaryP1')}</p>
      <p>{t('blogHiddenChurches.stMaryP2')}</p>

      <h2>{t('blogHiddenChurches.h2StAnna')}</h2>
      <p>{t('blogHiddenChurches.stAnnaP1')}</p>
      <p>{t('blogHiddenChurches.stAnnaP2')}</p>

      <h2>{t('blogHiddenChurches.h2StMichael')}</h2>
      <p>{t('blogHiddenChurches.stMichaelP1')}</p>
      <p>{t('blogHiddenChurches.stMichaelP2')}</p>

      <h2>{t('blogHiddenChurches.h2StPaul')}</h2>
      <p>{t('blogHiddenChurches.stPaulP')} <a href={localePath('/blog/dobrota-waterfront-walk')}>{t('blogHiddenChurches.internalLink')}</a>.</p>

      <h2>{t('blogHiddenChurches.h2StNicholas')}</h2>
      <p>{t('blogHiddenChurches.stNicholasP1')}</p>
      <p>{t('blogHiddenChurches.stNicholasP2')}</p>

      <h2>{t('blogHiddenChurches.h2Walking')}</h2>
      <p>{t('blogHiddenChurches.walkingP1')}</p>
      <p>{t('blogHiddenChurches.walkingP2')}</p>

      <h2>{t('blogHiddenChurches.h2Parking')}</h2>
      <p>{t('blogHiddenChurches.parkingP')}</p>

      <h2>{t('blogHiddenChurches.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogHiddenChurches.tip1Label')}</strong> {t('blogHiddenChurches.tip1Val')}</li>
        <li><strong>{t('blogHiddenChurches.tip2Label')}</strong> {t('blogHiddenChurches.tip2Val')}</li>
        <li><strong>{t('blogHiddenChurches.tip3Label')}</strong> {t('blogHiddenChurches.tip3Val')}</li>
        <li><strong>{t('blogHiddenChurches.tip4Label')}</strong> {t('blogHiddenChurches.tip4Val')}</li>
        <li><strong>{t('blogHiddenChurches.tip5Label')}</strong> {t('blogHiddenChurches.tip5Val')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogHiddenChurches.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogHiddenChurches.glanceChurches')}</strong>
            {t('blogHiddenChurches.glanceChurchesVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogHiddenChurches.glanceDuration')}</strong>
            {t('blogHiddenChurches.glanceDurationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogHiddenChurches.glanceEntry')}</strong>
            {t('blogHiddenChurches.glanceEntryVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogHiddenChurches.glanceBestTime')}</strong>
            {t('blogHiddenChurches.glanceBestTimeVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
