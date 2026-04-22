'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TgdAirportArrivalGuide() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="TGD Airport Arrival Guide — From Landing to Driving Out"
      subtitle="A practical walk-through of Podgorica Airport arrivals: terminal layout, passport, baggage, rental car desks, and the first turn onto the E762"
      description="What to expect when you land at Podgorica Airport (TGD): passport control, baggage, SIM cards, rental pickup, and the first drive out of the airport access road."
      image="/img/blog-tgd-airport-arrival-guide.webp"
    >
      <h2>Where you are when you land</h2>
      <p>Podgorica Airport carries the IATA code TGD and the ICAO code LYPG. It sits roughly 11 kilometres south of central Podgorica, on the flat Zeta plain near the village of Golubovci. The airport is small by European standards — a single passenger terminal, one runway, and a compact apron. For most arriving passengers, the walk from aircraft door to kerbside is shorter than at larger hubs.</p>
      <p>Unlike Tivat Airport on the coast, TGD is an inland airport. You do not see the sea when you step off the plane. You see a wide river valley flanked by the foothills of the Dinaric Alps to the north. The terrain matters: almost every interesting destination from here requires either a drive south to the coast through the Sozina tunnel, east toward Albania, or a climb north into the mountains.</p>

      <h2>Passport control</h2>
      <p>Montenegro is not in the Schengen Area and not in the EU. You will clear passport control regardless of where you flew in from. Holders of EU, UK, US, Canadian, Australian, and many other passports do not need a visa for short tourist stays — check current rules before you travel.</p>
      <p>In quieter months the passport hall clears quickly. When two or three flights land together, queues can build. There are separate lanes for Montenegrin and foreign passports. Officers usually stamp, occasionally ask the standard length-of-stay and accommodation questions, and wave you through.</p>

      <h2>Baggage reclaim</h2>
      <p>The baggage hall is directly after passport control. There are only a handful of belts. Your flight number is shown above the belt you need. Bags typically arrive within 10-20 minutes of landing, though this varies by handler and aircraft type.</p>
      <p>Trolleys are usually available free of charge near the belts. If you have skis, a bike, or oversize items, there is a separate oversize counter in the same hall.</p>

      <img src="/img/blog-tgd-airport-arrival-guide.webp" alt="Podgorica Airport arrivals hall" loading="lazy" />

      <h2>The arrivals hall</h2>
      <p>Once through customs (usually a walk-through green channel for most passengers), you emerge into a single modest arrivals hall. Everything you might need on arrival is within sight: rental car desks, a small café area, an ATM or two, and a currency exchange. Taxis and transfer drivers wait immediately outside the glass doors.</p>
      <p>Look for the sign with your name if you have pre-booked a rental car with meet-and-greet. Our agents hold a printed board with the lead driver's surname. If you do not see your name immediately, step just outside — the greeting point can shift slightly depending on which flights are arriving simultaneously.</p>

      <h2>Cash, cards, SIM</h2>
      <p>The official currency is the Euro, despite Montenegro not being in the eurozone. ATMs in the arrivals hall dispense Euros. Most fuel stations and restaurants take cards, but small village shops and some rural parking attendants are cash-only — it is worth leaving the airport with at least 50 Euros in small notes.</p>
      <p>There are usually SIM or eSIM options from local operators (MTel, M:tel, One, Telenor) available at small counters or through self-service vending. EU roaming plans work in Montenegro only if your operator explicitly includes it — do not assume your standard EU plan will work for free.</p>

      <h2>Picking up your rental</h2>
      <p>The rental desks are along the wall opposite the exit doors. Meet-and-greet pickups simplify this: your agent takes you directly to the car, which is parked in the designated rental spaces a short walk from the terminal. The paperwork — driver's licence, passport, credit card for the security hold — typically takes 5-10 minutes. The car inspection follows. Photograph any existing damage with a timestamp before you sign.</p>
      <p>Keep the rental agreement in the glovebox. Montenegrin police occasionally stop cars for routine checks, and the agreement proves you are the authorised driver.</p>

      <h2>The first drive out</h2>
      <p>The airport access road is a single loop leading to a T-junction with the main road. From there you can head north toward Podgorica, south toward Bar and the Sozina tunnel, or east toward the Albanian border. The main signs are in Cyrillic and Latin scripts. Satellite navigation works normally from the moment you switch on the car.</p>
      <p>Fuel stations line the airport road and the edge of Golubovci. If your tank is not full on collection, it is worth topping up here before heading further. Coastal and mountain fuel prices are similar, but rural stations can be sparse on the longer routes north.</p>

      <h2>Where to next</h2>
      <p>The most common first drives from TGD are the run down to Budva (~60 km, Sozina tunnel), the longer loop to Kotor (~90 km), and the push north to Ostrog Monastery or Žabljak. See our route notes for <a href={localePath('/blog/tgd-to-budva-drive')}>TGD to Budva</a>, <a href={localePath('/blog/tgd-to-kotor-drive')}>TGD to Kotor</a>, and <a href={localePath('/blog/tgd-to-ostrog-monastery-drive')}>TGD to Ostrog</a>.</p>
      <p>If your flight lands after dark, the <a href={localePath('/blog/tgd-night-arrivals-guide')}>night arrivals guide</a> covers which routes are safe to tackle straight away and which are better left for morning.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>IATA code</strong>TGD</div>
          <div className="route-info__item"><strong>Distance to city</strong>~11 km north</div>
          <div className="route-info__item"><strong>Currency</strong>Euro (EUR)</div>
          <div className="route-info__item"><strong>EU / Schengen</strong>Neither — passport control applies</div>
        </div>
      </div>
    </ContentPage>
  );
}
