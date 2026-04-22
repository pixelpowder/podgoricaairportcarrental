'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Budva() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage title={t("budva.title")} subtitle={t("budva.subtitle")} description={t("budva.seoDesc")} image="/img/budva-from-kotor.webp">
      <img src="/img/pexels-28986995.jpg" alt="Budva Old Town peninsula from above" loading="lazy" />
      <h2>{t('budvaBody.h1')}</h2>
      <p>{t('budvaBody.p1')}</p>
      <p>{t('budvaBody.p2')}</p>

      <h2>{t('budvaBody.beachesTitle')}</h2>
      <p>{t('budvaBody.beachesIntro')}</p>
      <ul>
        <li><strong>Mogren:</strong> {t('budvaBody.mogren')}</li>
        <li><strong>Jaz:</strong> {t('budvaBody.jaz')}</li>
        <li><strong>Sveti Stefan:</strong> {t('budvaBody.svetiStefan')}</li>
        <li><strong>Bečići:</strong> {t('budvaBody.becici')}</li>
      </ul>

      <h2>{t('budvaBody.oldTownTitle')}</h2>
      <p>{t('budvaBody.oldTownText')}</p>

      <h2>{t('budvaBody.parkingDetailsTitle')}</h2>
      <p>{t('budvaBody.parkingDetailsP1')}</p>
      <p>{t('budvaBody.parkingDetailsP2')} {t('budvaBody.parkingLink').split('{{link}}')[0]} <a href={localePath('/tivat-airport')}>{t('budvaBody.parkingLinkText')}</a> {t('budvaBody.parkingLink').split('{{link}}')[1]}</p>

      <img src="/img/pexels-34061605.jpg" alt="Sveti Stefan islet from the coastal highway" loading="lazy" />

      <h2>{t('budvaBody.nightlifeTitle')}</h2>
      <p>{t('budvaBody.nightlifeP')}</p>

      <h2>{t('budvaBody.whereToEatTitle')}</h2>
      <p>{t('budvaBody.whereToEatP1')}</p>
      <p>{t('budvaBody.whereToEatP2')}</p>

      <h2>{t('budvaBody.drivingTipsTitle')}</h2>
      <p>{t('budvaBody.drivingTipsP1')}</p>
      <p>{t('budvaBody.drivingTipsP2')}</p>
      <p>{t('budvaBody.drivingTipsP3')}</p>

      <h2>{t('budvaBody.dayTripsTitle')}</h2>
      <p>{t('budvaBody.svetiStefanTrip')}</p>
      <p>{t('budvaBody.kotorTrip')}</p>
      <p>{t('budvaBody.lovcenTrip')}</p>

      <h2>{t('budvaBody.seasonalTitle')}</h2>
      <p>{t('budvaBody.seasonalP1')}</p>
      <p>{t('budvaBody.seasonalP2')}</p>
      <p>{t('budvaBody.seasonalP3')}</p>
    </ContentPage>
  );
}
