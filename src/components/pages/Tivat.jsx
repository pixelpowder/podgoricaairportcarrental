'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Tivat() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage title={t("tivat.title")} subtitle={t("tivat.subtitle")} description={t("tivat.seoDesc")} image="/img/kotor-marina.webp">
      <img src="/img/pexels-6216520.jpg" alt="Porto Montenegro marina with superyachts at berth" loading="lazy" />
      <h2>{t('tivatBody.h1')}</h2>
      <p>{t('tivatBody.p1')}</p>
      <p>{t('tivatBody.p2')}</p>

      <h2>{t('tivatBody.beachesTitle')}</h2>
      <p>{t('tivatBody.beachesText')}</p>
      <ul>
        <li>{t('tivatBody.beach1')}</li>
        <li>{t('tivatBody.beach2')}</li>
      </ul>

      <h2>{t('tivatBody.portoTitle')}</h2>
      <p>{t('tivatBody.portoText')}</p>

      <h2>{t('tivatBody.parkingTitle')}</h2>
      <p>{t('tivatBody.parkingP1')}</p>
      <p>{t('tivatBody.parkingP2')} {t('tivatBody.parkingLink').split('{{link}}')[0]} <a href={localePath('/tivat-airport')}>{t('tivatBody.tivatAirportLinkText')}</a> {t('tivatBody.parkingLink').split('{{link}}')[1]}</p>

      <img src="/img/pexels-28407768.jpg" alt="Tivat waterfront promenade at dusk" loading="lazy" />

      <h2>{t('tivatBody.whereToEatTitle')}</h2>
      <p>{t('tivatBody.whereToEatP1')}</p>
      <p>{t('tivatBody.whereToEatP2')}</p>

      <h2>{t('tivatBody.culturalTitle')}</h2>
      <h3>{t('tivatBody.monasteryTitle')}</h3>
      <p>{t('tivatBody.monasteryText')}</p>

      <h3>{t('tivatBody.churchTitle')}</h3>
      <p>{t('tivatBody.churchText')}</p>
      <p>{t('tivatBody.museumText')}</p>

      <h2>{t('tivatBody.drivingTipsTitle')}</h2>
      <p>{t('tivatBody.drivingTipsP1')}</p>
      <p>{t('tivatBody.drivingTipsP2')}</p>

      <h2>{t('tivatBody.lustitcaTitle')}</h2>
      <p>{t('tivatBody.lusticaP')} {t('tivatBody.lusticaLink').split('{{link}}')[0]} <a href={localePath('/kotor')}>{t('tivatBody.nearbyKotorLinkText')}</a> {t('tivatBody.lusticaLink').split('{{link}}')[1]}</p>

      <h2>{t('tivatBody.seasonalTitle')}</h2>
      <p>{t('tivatBody.seasonalP1')}</p>
      <p>{t('tivatBody.seasonalP2')}</p>
    </ContentPage>
  );
}
