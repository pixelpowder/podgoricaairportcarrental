'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TgdToUlcinjDrive() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="TGD to Ulcinj — Driving South to Montenegro's Albanian-Coast Edge"
      subtitle="The route through Bar, the long-beach stretch, and proximity to the Sukobin border crossing"
      description="Driving from Podgorica Airport (TGD) to Ulcinj, Montenegro's southernmost coastal town: the Bar route, timing, and the Sukobin border for onward travel to Albania."
      image="/img/blog-tgd-to-ulcinj-drive.webp"
    >
      <h2>Why Ulcinj is a distinct drive</h2>
      <p>Ulcinj is Montenegro's southernmost town of any size, sitting on a rocky promontory with a long sandy beach (Velika Plaža) stretching south toward the Albanian border. From Podgorica Airport it is roughly 70 kilometres, with a drive of around 1 hour 15 minutes to 1 hour 30 minutes in normal conditions.</p>
      <p>The culture shifts noticeably as you head south. Ulcinj has a large Albanian-speaking population. Mosques and minarets appear in the townscape, menus include Albanian dishes alongside Montenegrin ones, and many road signs and shopfronts carry Albanian text alongside Montenegrin.</p>

      <h2>The drive itself</h2>
      <p>From TGD, join the southbound E80/E65 — the same road as for Budva — but stay on it past the Sozina tunnel turnoff and continue south through Sutomore and Bar. Bar is the country's main port city and has a well-organised town centre worth a short stop if you have time. From Bar the coastal road continues south, winding through olive groves and over a final ridge before dropping into Ulcinj.</p>
      <p>The last stretch into Ulcinj is narrow and slow in summer when traffic backs up along the beach approach. If your accommodation is on Velika Plaža itself (south of the old town), there is a turnoff before Ulcinj centre that avoids the old-town bottleneck.</p>

      <img src="/img/blog-tgd-to-ulcinj-drive.webp" alt="Ulcinj coastline view" loading="lazy" />

      <h2>Virpazar and Lake Skadar alternative</h2>
      <p>Instead of sticking to the E80 to Bar, you can turn off toward Virpazar and take the Lake Skadar scenic road around the southern end of the lake, rejoining the coast further south. This is a longer, slower drive — add significant time — and the road has narrow sections, but the lake scenery is among the best in Montenegro. Treat it as a sightseeing detour, not a transfer shortcut.</p>

      <h2>The Sukobin crossing</h2>
      <p>Ulcinj sits very close to the Sukobin/Muriqan border with Albania. The crossing is a small, generally quiet checkpoint on the road that continues south toward Shkodër. If you intend to cross into Albania with the rental, check that your rental agreement covers Albania and that your Green Card paperwork lists Albania specifically. We prepare this at booking if you flag it in advance.</p>
      <p>There is a second, busier crossing into Albania further inland — see our <a href={localePath('/blog/tgd-to-albania-via-tuzi')}>Hani i Hotit via Tuzi</a> notes for that option.</p>

      <h2>Practical notes</h2>
      <p>Fuel stations are regular all the way from Podgorica to Bar, then thin out slightly between Bar and Ulcinj. Top up in Bar if you are running low — Ulcinj's stations are fine but fewer. The roads are paved, generally well-maintained, and suitable for any standard rental car. No 4x4 needed unless you plan to explore the unpaved tracks behind Velika Plaža.</p>

      <h2>Cross-links</h2>
      <p>If Ulcinj is part of a wider coast-to-coast trip, the <a href={localePath('/blog/tgd-to-budva-drive')}>TGD to Budva drive</a> covers the northern coastal towns. For a complete overview of the airport arrival itself, see the <a href={localePath('/blog/tgd-airport-arrival-guide')}>TGD arrival guide</a>.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance</strong>~70 km</div>
          <div className="route-info__item"><strong>Time</strong>~1h 15min-1h 30min</div>
          <div className="route-info__item"><strong>Nearest border</strong>Sukobin / Muriqan (Albania)</div>
          <div className="route-info__item"><strong>Main route</strong>E80 south via Bar</div>
        </div>
      </div>
    </ContentPage>
  );
}
