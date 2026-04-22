'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Podgorica() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage title={t("podgorica.title")} subtitle={t("podgorica.subtitle")} description={t("podgorica.seoDesc")} image="/img/lovcen-mountain.webp">
      <img src="/img/pexels-4264818.jpg" alt="Podgorica" loading="lazy" />
      <h2>{t('podgoricaBody.h1')}</h2>
      <p>{t('podgoricaBody.p1')}</p>
      <p>{t('podgoricaBody.p2')}</p>
      <p>{t('podgoricaBody.p3')}</p>

      <h2>{t('podgoricaBody.seeTitle')}</h2>
      <p>{t('podgoricaBody.seeText')}</p>

      <h2>{t('podgoricaBody.parkingTitle')}</h2>
      <p>{t('podgoricaBody.parkingP1')}</p>
      <p>{t('podgoricaBody.parkingP2')} {t('podgoricaBody.parkingLink').split('{{link}}')[0]} <a href={localePath('/podgorica-airport')}>{t('podgoricaBody.podgoricaAirportLinkText')}</a> {t('podgoricaBody.parkingLink').split('{{link}}')[1]}</p>

      <img src="/img/pexels-9526646.jpg" alt="Podgorica cityscape" loading="lazy" />

      <h2>{t('podgoricaBody.whereToEatTitle')}</h2>
      <p>{t('podgoricaBody.whereToEatP1')}</p>
      <p>{t('podgoricaBody.whereToEatP2')}</p>

      <h2>{t('podgoricaBody.dayTripsTitle')}</h2>
      <h3>{t('podgoricaBody.skadarTitle')}</h3>
      <p>{t('podgoricaBody.skadarText')}</p>
      <h3>{t('podgoricaBody.danilovgradTitle')}</h3>
      <p>{t('podgoricaBody.danilovgradText')}</p>
      <h3>{t('podgoricaBody.zabljakTitle')}</h3>
      <p>{t('podgoricaBody.zabljak')}</p>

      <h2>{t('podgoricaBody.drivingTipsTitle')}</h2>
      <p>{t('podgoricaBody.drivingTipsP1')}</p>
      <p>{t('podgoricaBody.drivingTipsP2')} {t('podgoricaBody.drivingLink').split('{{link}}')[0]} <a href={localePath('/kotor')}>{t('podgoricaBody.kotorOldTownLinkText')}</a> {t('podgoricaBody.drivingLink').split('{{link}}')[1]}</p>

      <h2>{t('podgoricaBody.seasonalTitle')}</h2>
      <p>{t('podgoricaBody.seasonalP1')}</p>
      <p>{t('podgoricaBody.seasonalP2')}</p>
    </ContentPage>
  );
}
