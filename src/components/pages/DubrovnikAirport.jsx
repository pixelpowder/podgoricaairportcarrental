'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function DubrovnikAirport() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t("dubrovnik-airport.title")}
      subtitle={t("dubrovnik-airport.subtitle")}
      description={t("dubrovnik-airport.seoDesc")}
      image="/img/dubrovnik-airport.webp"
    >
      <h2>{t('dubrovnikAirportBody.h1')}</h2>
      <p>{t('dubrovnikAirportBody.p1')}</p>
      <p>{t('dubrovnikAirportBody.p2')}</p>

      <img src="/img/dubrovnik-airport.webp" alt="Adriatic coast road" loading="lazy" />
      <p>{t('dubrovnikAirportBody.p3')}</p>

      <h2>{t('dubrovnikAirportBody.gettingTitle')}</h2>
      <p>{t('dubrovnikAirportBody.gettingText1')}</p>
      <p>{t('dubrovnikAirportBody.gettingText2')}</p>

      <h2>{t('dubrovnikAirportBody.borderTitle')}</h2>
      <p>{t('dubrovnikAirportBody.borderText')} Check our <a href={localePath('/border-crossing-guide')}>rental car border crossing checklist</a> before you go.</p>

      <h2>{t('dubrovnikAirportBody.facilitiesTitle')}</h2>
      <p>{t('dubrovnikAirportBody.facilitiesText1')}</p>
      <p>{t('dubrovnikAirportBody.facilitiesText2')}</p>
    </ContentPage>
  );
}
