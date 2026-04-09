import '@/src/index.css';
import '@/src/App.css';
import '@/src/ContentPage.css';
import '@/src/BookPage.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import CookieBanner from '@/src/CookieBanner';
import { LanguageContext } from '@/src/i18n/LanguageContext';
import { DEFAULT_LANG } from '@/src/i18n/languages';

export const metadata = {
  title: 'Podgorica Airport Car Rental \u2014 TGD Montenegro',
  description:
    'Collect your rental car at Podgorica Airport (TGD) arrivals. Drive to Durmitor, Lake Skadar, and Montenegro\u2019s Adriatic coast from \u20ac13/day. Full insurance, free cancellation.',
  metadataBase: new URL('https://www.podgoricaairportcarrental.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRental",
            "name": "Podgorica Airport Car Rental",
            "url": "https://www.podgoricaairportcarrental.com",
            "description": "Rent a car at Podgorica Airport (TGD) from trusted local providers with free cancellation, full insurance, and meet-and-greet at arrivals.",
            "email": "info@podgoricaairportcarrental.com",
            "image": "https://www.podgoricaairportcarrental.com/img/schema-car.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Podgorica Airport (TGD)",
              "addressLocality": "Podgorica",
              "postalCode": "81000",
              "addressCountry": "ME"
            },
            "areaServed": [
              { "@type": "City", "name": "Podgorica" },
              { "@type": "City", "name": "Cetinje" },
              { "@type": "City", "name": "Budva" },
              { "@type": "City", "name": "Kotor" },
              { "@type": "City", "name": "Nik\u0161i\u0107" }
            ],
            "priceRange": "€25–€120",
            "currenciesAccepted": "EUR",
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday"], "opens": "00:00", "closes": "23:59" }
            ],
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "3", "bestRating": "5" }
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What documents do I need?", "acceptedAnswer": { "@type": "Answer", "text": "Bring your driving licence, passport, and a physical credit card in the main driver\u2019s name. If your licence doesn\u2019t display Latin-script details, an International Driving Permit is also required." } },
              { "@type": "Question", "name": "Can I drive to Albania or Croatia?", "acceptedAnswer": { "@type": "Answer", "text": "Albania is under an hour south via the Hani i Hotit crossing. Croatia is reachable via the coast or through Bosnia. We prepare the Green Card at booking for all neighbouring countries." } },
              { "@type": "Question", "name": "Is there a minimum age?", "acceptedAnswer": { "@type": "Answer", "text": "Drivers must be at least 21 with a minimum of 2 years\u2019 experience. A young driver supplement applies for those under 25 \u2014 the exact amount varies by vehicle and is shown in the search results." } },
              { "@type": "Question", "name": "What is included in the price?", "acceptedAnswer": { "@type": "Answer", "text": "Third Party Liability and CDW insurance are included in the base price for all vehicles, along with VAT and the mandatory safety kit. Unlimited mileage is available on most cars \u2014 check the vehicle card before booking." } },
              { "@type": "Question", "name": "How does pickup work at Podgorica Airport?", "acceptedAnswer": { "@type": "Answer", "text": "Your agent meets you in the TGD arrivals hall holding a sign with your name. The car is parked directly outside the terminal. From the airport to the city centre takes around 15 minutes." } },
              { "@type": "Question", "name": "Can I drop off at a different location?", "acceptedAnswer": { "@type": "Answer", "text": "One-way rentals are available across 28 pickup and dropoff points in Montenegro, including coastal towns. Select different locations at the booking stage and a one-way fee may apply depending on the distance." } },
              { "@type": "Question", "name": "What is the cancellation policy?", "acceptedAnswer": { "@type": "Answer", "text": "Free cancellation is available up to 7 days before the rental start date. Luxury cars and convertibles require 30 days\u2019 notice. A 6% payment processing fee is applied to all cancellations regardless of timing." } },
              { "@type": "Question", "name": "Is a deposit required?", "acceptedAnswer": { "@type": "Answer", "text": "Most vehicles require a deposit of 100\u2013350 EUR held on a physical credit card in the driver\u2019s name. Some budget cars are available with no deposit \u2014 these are clearly flagged in the search results. The hold is released when the vehicle is returned undamaged." } },
              { "@type": "Question", "name": "How long does it take to reach the coast?", "acceptedAnswer": { "@type": "Answer", "text": "Budva is roughly 60 minutes via the Sozina tunnel. Kotor is about 90 minutes through the mountains via Cetinje, or 2 hours via the highway. Bar is around 50 minutes south." } },
              { "@type": "Question", "name": "Are there hidden costs?", "acceptedAnswer": { "@type": "Answer", "text": "No. The price shown includes all taxes and fees. There are no airport surcharges, no fuel-policy surprises, and nothing added at the desk." } },
              { "@type": "Question", "name": "How much is the down payment?", "acceptedAnswer": { "@type": "Answer", "text": "A deposit of 15\u201320% of the total rental cost is required to confirm your booking. The remaining balance is settled directly with the rental agent when you collect the car." } },
              { "@type": "Question", "name": "Can I rent without a credit card?", "acceptedAnswer": { "@type": "Answer", "text": "A small number of vehicles in the fleet are available without a credit card. These options are clearly marked in the search results when you filter by pickup location." } }
            ]
          }) }}
        />
      </head>
      <body>
        <LanguageContext value={DEFAULT_LANG}>
          {children}
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </LanguageContext>
      </body>
    </html>
  );
}
