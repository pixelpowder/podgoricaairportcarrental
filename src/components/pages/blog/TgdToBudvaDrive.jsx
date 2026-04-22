'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TgdToBudvaDrive() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="TGD to Budva — The Sozina Tunnel Drive from Podgorica Airport"
      subtitle="Route options, the tunnel toll, traffic to avoid in summer, and turning off for Virpazar on the way"
      description="A driving guide from Podgorica Airport (TGD) to Budva: distance, time, the Sozina tunnel route vs. the old Cetinje road, toll info, and fuel stops."
      image="/img/blog-tgd-to-budva-drive.webp"
    >
      <h2>The basics of this drive</h2>
      <p>Budva sits on the central Adriatic coast roughly 60-70 kilometres south-west of Podgorica Airport. The practical default is the Sozina tunnel route: TGD → Podgorica bypass → E80/E65 south → Sozina tunnel → Petrovac → Budva. Allow roughly 60-75 minutes outside peak summer; budget longer in July and August when coastal traffic thickens.</p>
      <p>There is an alternative via Cetinje over the Lovćen massif, but that road is slow, narrow, and best treated as a sightseeing drive rather than an airport transfer. For pure airport-to-beach efficiency, take the tunnel.</p>

      <h2>Leaving the airport</h2>
      <p>Exit the airport access road and join the main road heading north toward Podgorica. You do not drive into the city — you take the southbound bypass (signed for Bar and the coast) which loops around Podgorica's eastern edge. From there the road becomes the E80/E65 dual carriageway for much of the way south, running along the eastern shore of Lake Skadar before cutting west.</p>

      <h2>The Sozina tunnel</h2>
      <p>Sozina is the major tunnel that slices through the coastal mountains between the Skadar plain and the Adriatic. It is over 4 kilometres long — the longest road tunnel in Montenegro. There is a toll, collected at a booth on the southbound side; pay in Euro cash or by card. Rates are modest for a standard passenger car; check posted fares at the booth as rates do change.</p>
      <p>Inside the tunnel: keep headlights on (most modern rentals do this automatically), maintain the posted speed limit, and do not stop. The tunnel is well-ventilated and lit but has no emergency lay-bys suitable for casual stops.</p>

      <img src="/img/blog-tgd-to-budva-drive.webp" alt="Sozina tunnel approach on the TGD to Budva drive" loading="lazy" />

      <h2>From tunnel to coast</h2>
      <p>Emerging from Sozina you descend through pine and olive country toward the sea. The first glimpse of the Adriatic usually comes near Sutomore. Join the main coastal road (M2/E65) and turn north-west toward Petrovac. Petrovac itself is a small beach town worth knowing about for a later day trip but is usually driven straight through on the way to Budva.</p>
      <p>From Petrovac to Budva is a further 15-20 minutes along a winding coastal road with several sea viewpoints. Sveti Stefan appears on the left as a famous silhouette — pull-offs are marked but often crowded.</p>

      <h2>Summer traffic reality</h2>
      <p>In July and August the coastal road from Petrovac to Budva can crawl. If you land late afternoon on a Saturday, expect the last stretch to take twice as long as it would in April. Leaving the airport earlier in the day, before resort check-ins cluster, helps.</p>
      <p>The bottleneck is almost always the last few kilometres into Budva itself, where the coastal road squeezes into the town approach. Parking in Budva old-town-adjacent lots is limited and paid; if your accommodation is in Bečići or further south, approach from that side instead.</p>

      <h2>Optional detour — Virpazar</h2>
      <p>If you have an hour spare and want to break the drive, turn off at the Virpazar exit on the way south. Virpazar is a small village on the edge of Lake Skadar with a handful of riverside restaurants. It adds perhaps 40 minutes to your total journey and makes an excellent first-day stop if you landed before lunch.</p>

      <h2>Fuel and stops</h2>
      <p>Fuel stations are plentiful along the bypass around Podgorica and on the E80 approach to Sozina. South of the tunnel, stations thin out slightly but are still regular. If you took over a car with a half tank, fill up at the Podgorica bypass — this is the cheapest and most convenient point.</p>

      <h2>Cross-links</h2>
      <p>If you are continuing from Budva further north to Kotor, see our <a href={localePath('/blog/tgd-to-kotor-drive')}>TGD to Kotor</a> notes for the options. For the opposite direction — down into Ulcinj and the Albanian border — see <a href={localePath('/blog/tgd-to-ulcinj-drive')}>TGD to Ulcinj</a>.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance</strong>~60-70 km</div>
          <div className="route-info__item"><strong>Time (off-peak)</strong>~60-75 min</div>
          <div className="route-info__item"><strong>Key tunnel</strong>Sozina (tolled, paid in Euro)</div>
          <div className="route-info__item"><strong>Main road</strong>E80 / E65 → M2 coastal</div>
        </div>
      </div>
    </ContentPage>
  );
}
