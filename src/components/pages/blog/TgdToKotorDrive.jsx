'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TgdToKotorDrive() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="TGD to Kotor — Two Routes from Podgorica Airport"
      subtitle="The fast coastal route via Budva and the scenic mountain route over Lovćen — which to take and when"
      description="Driving from Podgorica Airport (TGD) to Kotor: the practical route via Sozina and Budva vs. the slower mountain descent via Cetinje and Lovćen."
      image="/img/blog-tgd-to-kotor-drive.webp"
    >
      <h2>Two real options</h2>
      <p>Kotor sits at the southern end of the Bay of Kotor, about 90 kilometres from Podgorica Airport by road. There are two meaningfully different routes. Option A goes south through the Sozina tunnel to the coast, then follows the shoreline north through Budva, Tivat, and around the bay. Option B climbs west over the Lovćen massif via Cetinje and descends the famous switchback road into Kotor from above.</p>
      <p>Option A is faster, smoother, and works for any season and any driver. Option B is one of the most spectacular drives in the Balkans but is slow, narrow, demands a confident driver, and is best in daylight with clear weather.</p>

      <h2>Option A — via Sozina and the coast</h2>
      <p>Follow the same route as the TGD–Budva drive: airport → Podgorica bypass → E80 south → Sozina tunnel → coastal road. From Budva continue north through Tivat. You can either take the Verige strait car ferry (Kamenari-Lepetani) to cut the bay in half, or drive the full loop around the bay through Perast. The ferry runs frequently with short waits and usually saves 30+ minutes.</p>
      <p>Approximate total time: around 1 hour 45 minutes with the ferry, around 2 hours 15 minutes driving the full bay loop. In peak summer, coastal sections around Budva and Tivat can add significant time.</p>

      <img src="/img/blog-tgd-to-kotor-drive.webp" alt="Bay of Kotor approach from Tivat" loading="lazy" />

      <h2>Option B — via Cetinje and Lovćen</h2>
      <p>Head west from Podgorica up to Cetinje, Montenegro's old royal capital. From Cetinje the road climbs onto the Lovćen massif, then descends the <em>Kotor Serpentine</em> — a hairpin road of many switchbacks carved into the western flank of the mountain — dropping dramatically into the Bay of Kotor.</p>
      <p>The serpentine is narrow. Two buses cannot pass each other in places. If you are meeting a coach coming the other way, one of you will have to reverse to a wider section. The views as you descend — the bay opening below, Kotor's terracotta roofs on the shore — are exceptional, but keep your eyes on the road and use pull-offs for photos.</p>
      <p>Allow 2.5 to 3 hours for this route, longer if you stop in Cetinje or at Lovćen National Park.</p>

      <h2>Which to choose</h2>
      <p>Straight from the airport with luggage and tired passengers — take Option A. Driving in daylight, confident on narrow roads, want the views — take Option B, or better, take Option A to Kotor and drive Option B in reverse as a day trip later.</p>
      <p>In winter, or after heavy rain, the Lovćen descent can be wet, foggy, and sometimes icy at altitude. Default to Option A in any doubtful weather.</p>

      <h2>Arriving in Kotor</h2>
      <p>The old town of Kotor is pedestrian-only inside its walls. You cannot drive in. Parking is arranged in paid lots along the waterfront and just outside the main Sea Gate. In summer these fill; the garage on the north side of town (near the Škurda river) is usually the most reliable option for longer stays.</p>

      <h2>Cross-links</h2>
      <p>If you are coming to Kotor from Podgorica, the coastal route first passes the Budva turnoff — see our <a href={localePath('/blog/tgd-to-budva-drive')}>TGD to Budva</a> notes for the common first stretch. If Kotor is only a stop on the way elsewhere, our <a href={localePath('/blog/tgd-airport-arrival-guide')}>airport arrival guide</a> covers the paperwork and first-hour logistics.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance (coastal)</strong>~90 km</div>
          <div className="route-info__item"><strong>Time (coastal + ferry)</strong>~1h 45min</div>
          <div className="route-info__item"><strong>Time (Lovćen)</strong>~2h 30min-3h</div>
          <div className="route-info__item"><strong>Best in winter</strong>Coastal via Sozina</div>
        </div>
      </div>
    </ContentPage>
  );
}
