'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function PodgoricaAirport() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage title={t("podgorica-airport.title")} subtitle={t("podgorica-airport.subtitle")} description={t("podgorica-airport.seoDesc")} image="/img/lovcen-mountain.webp">
      <img src="/img/pexels-4264818.jpg" alt="Podgorica" loading="lazy" />
      <h2>{t('podgoricaAirportBody.h1')}</h2>
      <p>{t('podgoricaAirportBody.p1')}</p>
      <p>{t('podgoricaAirportBody.p2')}</p>

      <h2>{t('podgoricaAirportBody.distancesTitle')}</h2>
      <p>{t('podgoricaAirportBody.distIntro')}</p>
      <ul>
        <li>{t('podgoricaAirportBody.dist1')}</li>
        <li>{t('podgoricaAirportBody.dist2')}</li>
        <li>{t('podgoricaAirportBody.dist3')}</li>
        <li>{t('podgoricaAirportBody.dist4')}</li>
      </ul>

      <h2>{t('podgoricaAirportBody.flightsTitle')}</h2>
      <p>{t('podgoricaAirportBody.flightsText')}</p>

      <h2>{t('podgoricaAirportBody.facilitiesTitle')}</h2>
      <p>{t('podgoricaAirportBody.facilitiesText')}</p>
      <p>{t('podgoricaAirportBody.awardText')}</p>

      <h2>{t('podgoricaAirportBody.rentalTitle')}</h2>
      <p>{t('podgoricaAirportBody.rentalText')} {t('podgoricaAirportBody.rentalLink').split('{{link}}')[0]} <a href={localePath('/kotor')}>{t('podgoricaAirportBody.kotorUnescoLinkText')}</a> {t('podgoricaAirportBody.rentalLink').split('{{link}}')[1]}</p>

      <h2>{t('podgoricaAirportBody.driveToKotorTitle')}</h2>
      <p>{t('podgoricaAirportBody.driveToKotorP1')}</p>
      <p>{t('podgoricaAirportBody.driveToKotorP2')}</p>
      <p>{t('podgoricaAirportBody.driveToKotorP3')}</p>

      <h2>{t('podgoricaAirportBody.fuelTitle')}</h2>
      <p>{t('podgoricaAirportBody.fuelP')}</p>

      <h2>{t('podgoricaAirportBody.winterTitle')}</h2>
      <p>{t('podgoricaAirportBody.winterP1')} {t('podgoricaAirportBody.winterLink').split('{{link}}')[0]} <a href={localePath('/tivat-airport')}>{t('podgoricaAirportBody.tivatAirportLinkText')}</a> {t('podgoricaAirportBody.winterLink').split('{{link}}')[1]}</p>
      <p>{t('podgoricaAirportBody.winterP2')}</p>

      <h2>{t('podgoricaAirportBody.tipsTitle')}</h2>
      <p>{t('podgoricaAirportBody.tipsP1')}</p>
      <p>{t('podgoricaAirportBody.tipsP2')}</p>

      <h2>{t('podgoricaAirportBody.returnTitle')}</h2>
      <p>{t('podgoricaAirportBody.returnP')}</p>
    </ContentPage>
  );
}
