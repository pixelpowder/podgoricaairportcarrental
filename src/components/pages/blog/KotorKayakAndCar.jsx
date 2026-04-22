'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function KotorKayakAndCar() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogKotorKayakAndCar.title')}
      subtitle={t('blogKotorKayakAndCar.subtitle')}
      description={t('blogKotorKayakAndCar.description')}
      image="/img/blog-cruise-port.webp"
    >
      <h2>{t('blogKotorKayakAndCar.h2Intro')}</h2>
      <p>{t('blogKotorKayakAndCar.introP1')}</p>
      <p>{t('blogKotorKayakAndCar.introP2')}</p>

      <h2>{t('blogKotorKayakAndCar.h2Launch1')}</h2>
      <p>{t('blogKotorKayakAndCar.launch1P1')}</p>
      <p>{t('blogKotorKayakAndCar.launch1P2')}</p>

      <img src="/img/blog-bay-kayak.webp" alt={t('blogKotorKayakAndCar.altKayak')} loading="lazy" />

      <h2>{t('blogKotorKayakAndCar.h2Launch2')}</h2>
      <p>{t('blogKotorKayakAndCar.launch2P1')}</p>
      <p>{t('blogKotorKayakAndCar.launch2P2')}</p>

      <h2>{t('blogKotorKayakAndCar.h2Launch3')}</h2>
      <p>{t('blogKotorKayakAndCar.launch3P1')}</p>
      <p>{t('blogKotorKayakAndCar.launch3P2')}</p>

      <h2>{t('blogKotorKayakAndCar.h2Launch4')}</h2>
      <p>{t('blogKotorKayakAndCar.launch4P1')}</p>
      <p>{t('blogKotorKayakAndCar.launch4P2')}</p>

      <h2>{t('blogKotorKayakAndCar.h2WhatToSee')}</h2>
      <p>{t('blogKotorKayakAndCar.whatToSeeP1')}</p>
      <p>{t('blogKotorKayakAndCar.whatToSeeP2')}</p>

      <h2>{t('blogKotorKayakAndCar.h2Rental')}</h2>
      <p>{t('blogKotorKayakAndCar.rentalP')}</p>

      <h2>{t('blogKotorKayakAndCar.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogKotorKayakAndCar.tip1Label')}</strong> {t('blogKotorKayakAndCar.tip1Val')}</li>
        <li><strong>{t('blogKotorKayakAndCar.tip2Label')}</strong> {t('blogKotorKayakAndCar.tip2Val')}</li>
        <li><strong>{t('blogKotorKayakAndCar.tip3Label')}</strong> {t('blogKotorKayakAndCar.tip3Val')}</li>
        <li><strong>{t('blogKotorKayakAndCar.tip4Label')}</strong> {t('blogKotorKayakAndCar.tip4Val')}</li>
        <li><strong>{t('blogKotorKayakAndCar.tip5Label')}</strong> {t('blogKotorKayakAndCar.tip5Val')}</li>
      </ul>

      <h2>{t('blogKotorKayakAndCar.h2Combine')}</h2>
      <p>{t('blogKotorKayakAndCar.combineP')} <a href={localePath('/blog/bay-of-kotor-swimming')}>{t('blogKotorKayakAndCar.combineLink')}</a> {t('blogKotorKayakAndCar.combineP2')}</p>

      <div className="route-info">
        <h3>{t('blogKotorKayakAndCar.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogKotorKayakAndCar.glanceLaunch')}</strong>
            {t('blogKotorKayakAndCar.glanceLaunchVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotorKayakAndCar.glanceDuration')}</strong>
            {t('blogKotorKayakAndCar.glanceDurationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotorKayakAndCar.glanceBestTime')}</strong>
            {t('blogKotorKayakAndCar.glanceBestTimeVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotorKayakAndCar.glanceCost')}</strong>
            {t('blogKotorKayakAndCar.glanceCostVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
