'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function TivatAirport() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage title={t("tivat-airport.title")} subtitle={t("tivat-airport.subtitle")} description={t("tivat-airport.seoDesc")} image="/img/tivat-airport.webp">
      <img src="/img/pexels-28609588.jpg" alt="Tivat Airport runway" loading="lazy" />
      <h2>{t('tivatAirportBody.h1')}</h2>
      <p>{t('tivatAirportBody.p1')}</p>
      <p>{t('tivatAirportBody.p2')}</p>

      <h2>{t('tivatAirportBody.distancesTitle')}</h2>
      <ul>
        <li>{t('tivatAirportBody.dist1')}</li>
        <li>{t('tivatAirportBody.dist2')}</li>
        <li>{t('tivatAirportBody.dist3')}</li>
        <li>{t('tivatAirportBody.dist4')}</li>
      </ul>

      <h2>{t('tivatAirportBody.facilitiesTitle')}</h2>
      <p>{t('tivatAirportBody.facilitiesText')}</p>

      <h2>{t('tivatAirportBody.whyTitle')}</h2>
      <p>{t('tivatAirportBody.whyText')} {t('tivatAirportBody.whyLink').split('{{link}}')[0]} <a href={localePath('/budva')}>{t('tivatAirportBody.budvaLinkText')}</a> {t('tivatAirportBody.whyLink').split('{{link}}')[1]}</p>
      <p>{t('tivatAirportBody.meetText')}</p>

      <h2>{t('tivatAirportBody.firstDriveTitle')}</h2>
      <p>{t('tivatAirportBody.firstDriveP1')}</p>
      <p>{t('tivatAirportBody.firstDriveP2')}</p>
      <p>{t('tivatAirportBody.firstDriveP3')}</p>

      <h2>{t('tivatAirportBody.flightsTitle')}</h2>
      <p>{t('tivatAirportBody.flightsP1')}</p>
      <p>{t('tivatAirportBody.flightsP2')} {t('tivatAirportBody.flightsLink').split('{{link}}')[0]} <a href={localePath('/podgorica-airport')}>{t('tivatAirportBody.podgoricaGuideLinkText')}</a> {t('tivatAirportBody.flightsLink').split('{{link}}')[1]}</p>

      <h2>{t('tivatAirportBody.fuelTitle')}</h2>
      <p>{t('tivatAirportBody.fuelP')}</p>

      <h2>{t('tivatAirportBody.tipsTitle')}</h2>
      <p>{t('tivatAirportBody.tipsP1')}</p>
      <p>{t('tivatAirportBody.tipsP2')}</p>
      <p>{t('tivatAirportBody.tipsP3')}</p>

      <h2>{t('tivatAirportBody.seasonalTitle')}</h2>
      <p>{t('tivatAirportBody.seasonalP1')}</p>
      <p>{t('tivatAirportBody.seasonalP2')}</p>

      <h2>{t('tivatAirportBody.returnTitle')}</h2>
      <p>{t('tivatAirportBody.returnP')}</p>
    </ContentPage>
  );
}
