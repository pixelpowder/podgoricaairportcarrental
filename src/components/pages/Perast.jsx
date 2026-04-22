'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Perast() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage title={t("perast.title")} subtitle={t("perast.subtitle")} description={t("perast.seoDesc")} image="/img/perast-village.webp">
      <img src="/img/our-lady-rocks.webp" alt="Perast waterfront with the two islands in the bay beyond" loading="lazy" />
      <h2>{t('perastBody.h1')}</h2>
      <p>{t('perastBody.p1')}</p>
      <p>{t('perastBody.p2')}</p>

      <h2>{t('perastBody.islandsTitle')}</h2>
      <h3>{t('perastBody.stGeorgeTitle')}</h3>
      <p>{t('perastBody.stGeorgeText')}</p>

      <h3>{t('perastBody.ladyOfRocksTitle')}</h3>
      <p>{t('perastBody.ladyOfRocksText')}</p>

      <h2>{t('perastBody.parkingTitle')}</h2>
      <p>{t('perastBody.parkingP1')}</p>
      <p>{t('perastBody.parkingP2')} {t('perastBody.parkingLink').split('{{link}}')[0]} <a href={localePath('/montenegro')}>{t('perastBody.parkingLinkText')}</a> {t('perastBody.parkingLink').split('{{link}}')[1]}</p>

      <img src="/img/pexels-7510133.jpg" alt="Bay of Kotor landscape near Perast" loading="lazy" />

      <h2>{t('perastBody.historicTitle')}</h2>
      <p>{t('perastBody.historicText')}</p>

      <h2>{t('perastBody.whereToEatTitle')}</h2>
      <p>{t('perastBody.whereToEatP1')}</p>
      <p>{t('perastBody.whereToEatP2')}</p>

      <h2>{t('perastBody.drivingTipsTitle')}</h2>
      <p>{t('perastBody.drivingTipsP1')}</p>
      <p>{t('perastBody.drivingTipsP2')}</p>

      <h3>{t('perastBody.monasteryTitle')}</h3>
      <p>{t('perastBody.monasteryText')}</p>

      <h2>{t('perastBody.beyondTitle')}</h2>
      <p>{t('perastBody.beyondP')}</p>

      <h2>{t('perastBody.seasonalTitle')}</h2>
      <p>{t('perastBody.seasonalP1')}</p>
      <p>{t('perastBody.seasonalP2')}</p>
    </ContentPage>
  );
}
