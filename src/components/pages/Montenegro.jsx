'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Montenegro() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage title={t("montenegro.title")} subtitle={t("montenegro.subtitle")} description={t("montenegro.seoDesc")} image="/img/montenegro-coast-road.webp">
      <img src="/img/podgorica-bay-aerial.webp" alt="Podgorica region aerial" loading="lazy" />
      <h2>{t('montenegroBody.h1')}</h2>
      <p>{t('montenegroBody.p1')}</p>
      <p>{t('montenegroBody.p2')}</p>

      <h2>{t('montenegroBody.startTitle')}</h2>
      <p>{t('montenegroBody.startText')} {t('montenegroBody.startLink').split('{{link}}')[0]} <a href={localePath('/tivat-airport')}>{t('montenegroBody.startLinkText')}</a> {t('montenegroBody.startLink').split('{{link}}')[1]}</p>

      <h2>{t('montenegroBody.timesTitle')}</h2>
      <p>{t('montenegroBody.timesText1')}</p>
      <p>{t('montenegroBody.timesText2')}</p>

      <h2>{t('montenegroBody.rulesTitle')}</h2>
      <p>{t('montenegroBody.rulesIntro')}</p>
      <ul>
        <li>{t('montenegroBody.rule1')}</li>
        <li>{t('montenegroBody.rule2')}</li>
        <li>{t('montenegroBody.rule3')}</li>
        <li>{t('montenegroBody.rule4')}</li>
      </ul>

      <h3>{t('montenegroBody.keyRulesTitle')}</h3>
      <ul>
        <li>{t('montenegroBody.keyRule1')}</li>
        <li>{t('montenegroBody.keyRule2')}</li>
        <li>{t('montenegroBody.keyRule3')}</li>
        <li>{t('montenegroBody.keyRule4')}</li>
      </ul>

      <img src="/img/montenegro-coast-road.webp" alt="Montenegro coastal road" loading="lazy" />

      <h2>{t('montenegroBody.conditionsTitle')}</h2>
      <p>{t('montenegroBody.conditionsText')}</p>

      <h2>{t('montenegroBody.fuelTitle')}</h2>
      <p>{t('montenegroBody.fuelP1')}</p>
      <p>{t('montenegroBody.fuelP2')}</p>

      <h2>{t('montenegroBody.speedTitle')}</h2>
      <p>{t('montenegroBody.speedP1')}</p>
      <p>{t('montenegroBody.speedP2')}</p>

      <h2>{t('montenegroBody.routesTitle')}</h2>
      <h3>{t('montenegroBody.e65Title')}</h3>
      <p>{t('montenegroBody.e65Text')}</p>
      <h3>{t('montenegroBody.e762Title')}</h3>
      <p>{t('montenegroBody.e762Text')}</p>

      <h2>{t('montenegroBody.mountainTitle')}</h2>
      <p>{t('montenegroBody.mountainP1')}</p>
      <p>{t('montenegroBody.mountainP2')}</p>

      <h2>{t('montenegroBody.borderTitle')}</h2>
      <p>{t('montenegroBody.borderText')}</p>

      <h2>{t('montenegroBody.nationTitle')}</h2>
      <p>{t('montenegroBody.nationText')}</p>
    </ContentPage>
  );
}
