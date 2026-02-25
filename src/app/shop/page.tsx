'use client';

import { Suspense } from 'react';
import Link from 'next/link';

const bookingCards = [
  {
    id: 'trackman',
    title: 'TrackMan Sim Rooms',
    description: 'Reserve private bays with wall-to-wall TrackMan 4 data, playlist control, and concierge service.',
    duration: '60 or 90 min slots',
    price: 'Starting ฿1,200 / hr'
  },
  {
    id: 'coaching',
    title: 'Golf Coaching',
    description: 'One-on-one sessions with Chiang Mai’s top coaches. Includes TrackMan reports and video notes.',
    duration: '45 / 60 / 90 min',
    price: 'From ฿1,900'
  },
  {
    id: 'membership',
    title: 'Msport Membership Card',
    description: 'Unlock priority bookings, TrackMan hours, events, and concierge perks tailored to your goals.',
    duration: 'Seasonal access',
    price: 'From ฿8,900 / season'
  }
];

const addOns = [
  {
    id: 'events',
    title: 'Corporate Events & Leagues',
    description: 'Dedicated hosts, live leaderboards, and F&B partners for 10–80 guests.',
    price: 'Custom packages'
  },
  {
    id: 'practice',
    title: 'Practice Bundles',
    description: 'Prepaid TrackMan and range credits with concierge scheduling.',
    price: 'Save up to 15%'
  },
  {
    id: 'gift',
    title: 'Gift Cards',
    description: 'Digital or physical cards for TrackMan sessions, coaching, or merch.',
    price: 'Any amount'
  }
];

function BookingPage() {
  return (
    <main className="section-cream min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 space-y-16">
        <header className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">Msport Shop</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">Book Your Time on the Range</h1>
          <p className="serif-subtext">Select a TrackMan bay, lock in a coach, or activate your membership.</p>
        </header>

        <section className="grid gap-8 lg:grid-cols-3">
          {bookingCards.map(card => (
            <article key={card.id} id={card.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(34,34,34,0.15)] flex flex-col">
              <div className="h-48 bg-gradient-to-br from-[#1B1B1A] to-[var(--accent)]/70" />
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">{card.duration}</p>
                  <h2 className="text-2xl font-black mt-2">{card.title}</h2>
                  <p className="text-sm text-[#4A4A44] mt-2 leading-relaxed">{card.description}</p>
                </div>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-[#4A4A44]">{card.price}</p>
                  <Link
                    href={`mailto:hello@msportdrivingrange.com?subject=${encodeURIComponent(card.title + ' Booking')}`}
                    className="mt-3 inline-flex items-center justify-center w-full accent-bg py-3 rounded-xl font-bold"
                  >
                    Reserve now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="bg-[#1B1B1A] text-white rounded-3xl p-8 space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">Need extras?</p>
              <h3 className="text-3xl font-black">Concierge add-ons</h3>
            </div>
            <Link href="mailto:hello@msportdrivingrange.com" className="px-6 py-3 rounded-xl font-semibold bg-white text-[#1B1B1A]">
              Plan with us
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {addOns.map(addOn => (
              <div key={addOn.id} className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-bold">{addOn.title}</h4>
                <p className="text-sm text-white/80 mt-2 leading-relaxed">{addOn.description}</p>
                <p className="text-sm font-semibold mt-4 text-white">{addOn.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">Still browsing?</p>
          <h3 className="text-3xl font-black">Visit the range store in Chiang Mai</h3>
          <p className="text-[#4A4A44]">Walk-ins welcome 8:00 AM – 8:00 PM daily. Members and bookings receive priority lanes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:hello@msportdrivingrange.com" className="accent-bg px-8 py-3 rounded-xl font-bold">
              Email concierge
            </Link>
            <Link href="/" className="border border-[#706C61] px-8 py-3 rounded-xl font-semibold">
              Back to home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="section-cream min-h-screen flex items-center justify-center">Loading…</div>}>
      <BookingPage />
    </Suspense>
  );
}
