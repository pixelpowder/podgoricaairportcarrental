'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Kotor() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage title={t("kotor.title")} subtitle={t("kotor.subtitle")} description={t("kotor.seoDesc")} image="/img/kotor-fortress.webp">
      <img src="/img/kotor-old-town.webp" alt="Kotor Old Town viewed from the fortress steps" loading="lazy" />
      <h2>{t('kotorBody.h1')}</h2>
      <p>{t('kotorBody.p1')}</p>
      <p>{t('kotorBody.p2')}</p>

      <h2>{t('kotorBody.landmarksTitle')}</h2>
      <h3>{t('kotorBody.stJohnTitle')}</h3>
      <p>{t('kotorBody.stJohnText')}</p>

      <h3>{t('kotorBody.cathedralTitle')}</h3>
      <p>{t('kotorBody.cathedralText')}</p>

      <img src="/img/pexels-22034286.jpg" alt="Kotor fortress walls climbing the mountain above the Old Town" loading="lazy" />

      <h2>{t('kotorBody.parkingTitle')}</h2>
      <p>{t('kotorBody.parkingP1')}</p>
      <p>{t('kotorBody.parkingP2')}</p>
      <p>{t('kotorBody.parkingP3')}</p>

      <h2>{t('kotorBody.whereToEatTitle')}</h2>
      <p>{t('kotorBody.whereToEatP1')}</p>
      <p>{t('kotorBody.whereToEatP2')} {t('kotorBody.whereToEatLink').split('{{link}}')[0]} <a href={localePath('/perast')}>{t('kotorBody.perastLinkText')}</a> {t('kotorBody.whereToEatLink').split('{{link}}')[1]}</p>

      <h2>{t('kotorBody.drivingTipsTitle')}</h2>
      <p>{t('kotorBody.drivingTipsP1')}</p>
      <p>{t('kotorBody.drivingTipsP2')}</p>
      <p>{t('kotorBody.drivingTipsP3')}</p>

      <h2>{t('kotorBody.dayTripsTitle')}</h2>
      <p>{t('kotorBody.perastTrip')}</p>
      <p>{t('kotorBody.cetinjeTrip')}</p>
      <p>{t('kotorBody.royalCourtText')}</p>

      <h2>{t('kotorBody.seasonalTitle')}</h2>
      <p>{t('kotorBody.seasonalP1')}</p>
      <p>{t('kotorBody.seasonalP2')}</p>
      <p>{t('kotorBody.seasonalP3')}</p>
      <p>{t('kotorBody.seasonalP4')}</p>
    </ContentPage>
  );
}
