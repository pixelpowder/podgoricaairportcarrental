'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function KotorFoodMarkets() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogKotorFoodMarkets.title')}
      subtitle={t('blogKotorFoodMarkets.subtitle')}
      description={t('blogKotorFoodMarkets.description')}
      image="/img/blog-kotor-dining.webp"
    >
      <h2>{t('blogKotorFoodMarkets.h2Intro')}</h2>
      <p>{t('blogKotorFoodMarkets.introP1')}</p>
      <p>{t('blogKotorFoodMarkets.introP2')}</p>

      <h2>{t('blogKotorFoodMarkets.h2GreenMarket')}</h2>
      <p>{t('blogKotorFoodMarkets.greenMarketP1')}</p>
      <p>{t('blogKotorFoodMarkets.greenMarketP2')}</p>

      <img src="/img/blog-kotor-market.webp" alt={t('blogKotorFoodMarkets.altMarket')} loading="lazy" />

      <h2>{t('blogKotorFoodMarkets.h2Fish')}</h2>
      <p>{t('blogKotorFoodMarkets.fishP1')}</p>
      <p>{t('blogKotorFoodMarkets.fishP2')}</p>

      <h2>{t('blogKotorFoodMarkets.h2Cheese')}</h2>
      <p>{t('blogKotorFoodMarkets.cheeseP1')}</p>
      <p>{t('blogKotorFoodMarkets.cheeseP2')}</p>

      <h2>{t('blogKotorFoodMarkets.h2Wine')}</h2>
      <p>{t('blogKotorFoodMarkets.wineP1')}</p>
      <p>{t('blogKotorFoodMarkets.wineP2')}</p>

      <h2>{t('blogKotorFoodMarkets.h2OliveOil')}</h2>
      <p>{t('blogKotorFoodMarkets.oliveOilP')}</p>

      <h2>{t('blogKotorFoodMarkets.h2Honey')}</h2>
      <p>{t('blogKotorFoodMarkets.honeyP')}</p>

      <h2>{t('blogKotorFoodMarkets.h2Route')}</h2>
      <ul>
        <li><strong>{t('blogKotorFoodMarkets.routeMorningLabel')}</strong> {t('blogKotorFoodMarkets.routeMorningVal')}</li>
        <li><strong>{t('blogKotorFoodMarkets.routeMidLabel')}</strong> {t('blogKotorFoodMarkets.routeMidVal')}</li>
        <li><strong>{t('blogKotorFoodMarkets.routeLateLabel')}</strong> {t('blogKotorFoodMarkets.routeLateVal')}</li>
        <li><strong>{t('blogKotorFoodMarkets.routeNoonLabel')}</strong> {t('blogKotorFoodMarkets.routeNoonVal')}</li>
        <li><strong>{t('blogKotorFoodMarkets.routeAfternoonLabel')}</strong> {t('blogKotorFoodMarkets.routeAfternoonVal')}</li>
      </ul>

      <h2>{t('blogKotorFoodMarkets.h2WhereToEat')}</h2>
      <p>{t('blogKotorFoodMarkets.whereToEatP')}</p>

      <h2>{t('blogKotorFoodMarkets.h2Also')}</h2>
      <p>{t('blogKotorFoodMarkets.alsoP')} <a href={localePath('/blog/dobrota-waterfront-walk')}>{t('blogKotorFoodMarkets.alsoLink')}</a>.</p>

      <div className="route-info">
        <h3>{t('blogKotorFoodMarkets.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogKotorFoodMarkets.glanceMarketHours')}</strong>
            {t('blogKotorFoodMarkets.glanceMarketHoursVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotorFoodMarkets.glanceParking')}</strong>
            {t('blogKotorFoodMarkets.glanceParkingVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotorFoodMarkets.glanceBestDay')}</strong>
            {t('blogKotorFoodMarkets.glanceBestDayVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogKotorFoodMarkets.glanceMustBuy')}</strong>
            {t('blogKotorFoodMarkets.glanceMustBuyVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
