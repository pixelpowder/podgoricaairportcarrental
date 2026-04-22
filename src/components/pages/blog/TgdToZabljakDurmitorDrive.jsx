'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TgdToZabljakDurmitorDrive() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="TGD to Žabljak — The Mountain Drive to Durmitor National Park"
      subtitle="Through the Morača Canyon to the highest town in the Balkans, gateway to the Black Lake and Tara Canyon"
      description="Driving from Podgorica Airport (TGD) to Žabljak and Durmitor National Park: the Morača Canyon climb, approximate timing, and winter considerations."
      image="/img/blog-tgd-to-zabljak-durmitor-drive.webp"
    >
      <h2>The drive in one line</h2>
      <p>Podgorica Airport to Žabljak is a north-bound mountain drive of roughly 150 kilometres, climbing from near sea level on the Zeta plain to about 1,450 metres at Žabljak itself — one of the highest towns in the Balkans. Allow around 2.5 to 3 hours in clear summer conditions, longer in winter or if you stop in the Morača Canyon.</p>
      <p>This is one of the most rewarding drives in the country. You leave behind Mediterranean light and warm air at TGD, and arrive in alpine surroundings: pine forest, stone chalets, and often a cold wind even in June.</p>

      <h2>The Morača Canyon climb</h2>
      <p>From Podgorica head north on the main road (E65/E80 corridor, then onto the road toward Kolašin). The route follows the Morača river into a steep-sided canyon. For long stretches the road is cut into the rock wall above the river; there are several short tunnels and galleries. Driving discipline matters here — no overtaking in tunnels, no stopping in the road for photos, use the marked pull-offs.</p>
      <p>Midway through the canyon a signed turnoff leads to the Morača Monastery (13th-century). If you have spare time, it is a 10-minute detour down to the monastery car park and well worth it.</p>

      <img src="/img/blog-tgd-to-zabljak-durmitor-drive.webp" alt="Morača Canyon on the route to Žabljak" loading="lazy" />

      <h2>Kolašin and the turnoff to Durmitor</h2>
      <p>After the canyon the road climbs onto a plateau and reaches Kolašin, a small mountain town with ski infrastructure and hotels. Kolašin makes a reasonable break point — coffee, fuel, bathrooms. Beyond Kolašin you leave the main E65 corridor and take the west-bound road toward Mojkovac, then north-west into the Tara Valley and up to Žabljak.</p>
      <p>This final section is slower. The road winds through forest, crosses the Tara near Đurđevića Tara (the famous arched road bridge over the canyon), and climbs onto the Durmitor plateau. Traffic is light outside ski season but the road has plenty of bends — an average speed in the 50s km/h is realistic.</p>

      <h2>Đurđevića Tara Bridge</h2>
      <p>The Tara Bridge is one of the standard stops on this drive. Stone-arched, tall, with a deep view straight down into the Tara Canyon — the deepest river canyon in Europe. There is a small parking area at each end. In summer a zipline operates across the canyon from near the bridge.</p>

      <h2>Arriving in Žabljak</h2>
      <p>Žabljak itself is small: a compact centre, several hotels and pensions, supermarkets, restaurants, and the entrance road to Durmitor National Park. The Black Lake (Crno Jezero) is the most-visited spot inside the park — a 3-kilometre drive plus a short walk from town. Entry to the national park is via a small ticket fee.</p>
      <p>In winter Žabljak is a ski town. The ski area is modest but the town is lively with Montenegrin winter tourism. In summer it is a trekking and mountain-biking base.</p>

      <h2>Winter caveat</h2>
      <p>From roughly November through April, parts of this route can see snow, ice, and chain requirements. The climb from Kolašin up toward the Durmitor plateau is the most weather-sensitive section. If you are driving in winter, read the <a href={localePath('/blog/tgd-winter-driving-from-airport')}>winter driving from the airport</a> notes before setting out. Cars rented in winter months come fitted with winter tyres as required by Montenegrin law.</p>

      <h2>Cross-links</h2>
      <p>If you are planning a loop that includes both the mountains and the monasteries, the <a href={localePath('/blog/tgd-to-ostrog-monastery-drive')}>TGD to Ostrog drive</a> is a natural pair — Ostrog sits roughly on the route back from Žabljak toward the airport if you return via Nikšić.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance</strong>~150 km</div>
          <div className="route-info__item"><strong>Time</strong>~2.5-3 hours</div>
          <div className="route-info__item"><strong>Elevation gain</strong>Sea level → ~1,450 m</div>
          <div className="route-info__item"><strong>Main stop</strong>Morača Canyon, Tara Bridge</div>
        </div>
      </div>
    </ContentPage>
  );
}
