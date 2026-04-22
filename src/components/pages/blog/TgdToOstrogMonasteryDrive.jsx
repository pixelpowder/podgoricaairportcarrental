'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TgdToOstrogMonasteryDrive() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="TGD to Ostrog Monastery — The Cliffside Drive from Podgorica Airport"
      subtitle="Heading north-west toward Nikšić, then up the access road to the white monastery carved into the rock face"
      description="Driving from Podgorica Airport (TGD) to Ostrog Monastery: the route via the Bjelopavlići plain, the switchback climb to the Upper Monastery, and parking notes."
      image="/img/blog-tgd-to-ostrog-monastery-drive.webp"
    >
      <h2>What Ostrog is</h2>
      <p>Ostrog is a Serbian Orthodox monastery built into a near-vertical cliff face on the western slope of the Ostroška Greda ridge. The white buildings appear almost embedded in the rock. It is one of the most visited pilgrimage sites in the Orthodox world and a striking place to visit regardless of faith — quiet, high, and with wide views over the Bjelopavlići plain below.</p>
      <p>There are two monastery complexes: the Lower Monastery (down in the valley, near the main access road) and the Upper Monastery (the famous cliffside site). Most visitors drive all the way up to the Upper Monastery; some walk the pilgrimage path between the two.</p>

      <h2>The drive from TGD</h2>
      <p>From Podgorica Airport, head north through the Podgorica bypass and take the main road north-west toward Nikšić. This road runs through the Bjelopavlići plain — flat, fertile, and lined with small villages and vineyards. After roughly 30-40 kilometres you reach the signed turnoff for Ostrog on the right (when heading from Podgorica).</p>
      <p>From TGD to the monastery access turnoff is approximately an hour. From the turnoff, the climb up to the Upper Monastery takes a further 20-30 minutes on a narrow, winding mountain road.</p>

      <img src="/img/blog-tgd-to-ostrog-monastery-drive.webp" alt="Ostrog Monastery cliffside" loading="lazy" />

      <h2>The climb to the Upper Monastery</h2>
      <p>The access road is single-track in places and has a steep gradient with multiple hairpins. Tour buses use it regularly. Two buses cannot pass; passenger cars will sometimes need to tuck into a pull-off to let a bus through. This is not a difficult road for any standard rental car, but it rewards a slow, patient approach.</p>
      <p>Near the top there are two main car park levels. The upper car park is closer to the monastery and fills first. In peak summer and on major Orthodox feast days, expect the lot to be full and the road itself to queue. Early morning and late afternoon are the quietest times.</p>

      <h2>Visiting the monastery</h2>
      <p>Entry to the Upper Monastery is free. Modest dress is required — covered shoulders, long skirts or trousers, no shorts. Wraps are available at the entrance for those not appropriately dressed. Photography rules vary by area; signs indicate where photos are not permitted (generally inside the chapels).</p>
      <p>Inside the rock chapels the ceilings are low and the spaces compact. Queues form quietly. There is no set time limit but 30-45 minutes usually covers the main chapel, the small rock cave, and the viewing terrace.</p>

      <h2>Pairing with other drives</h2>
      <p>Ostrog sits naturally on the route between Podgorica and Nikšić, and on the return route from Žabljak via Nikšić. If you are doing the <a href={localePath('/blog/tgd-to-zabljak-durmitor-drive')}>Durmitor drive</a>, consider driving back via Nikšić and Ostrog to make a loop rather than retracing the Morača Canyon in both directions.</p>
      <p>If you are short on time and only have a half-day from the airport, Ostrog plus a drink in Podgorica on the way back is a realistic round trip of 3-4 hours total. For other first-day half-day ideas from the airport, see the <a href={localePath('/blog/tgd-airport-arrival-guide')}>TGD arrival guide</a>.</p>

      <h2>Practical notes</h2>
      <p>Fuel stations are available on the main Podgorica-Nikšić road. There are small kiosks selling water, candles, and icons near the monastery car parks, but no full-service shops at the top. Bring your own water on hot days — the climb in summer sun is warm even though you are at altitude.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance from TGD</strong>~60-70 km</div>
          <div className="route-info__item"><strong>Time</strong>~1h 15min-1h 30min (one way)</div>
          <div className="route-info__item"><strong>Entry fee</strong>Free (donations welcomed)</div>
          <div className="route-info__item"><strong>Dress code</strong>Modest, covered shoulders</div>
        </div>
      </div>
    </ContentPage>
  );
}
