'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/lib/cart';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupTime: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted && items.length === 0) {
      router.replace('/cart');
    }
  }, [items.length, router, submitted]);

  if (items.length === 0 && !submitted) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <main className="section-cream min-h-screen py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="bg-white/50 rounded-2xl p-12 space-y-6">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-black">Reservation Confirmed!</h1>
            
            <div className="space-y-4 text-lg">
              <p className="serif-subtext">
                Thank you, {formData.name}!
              </p>
              <p className="opacity-80">
                Your items are reserved and ready for pickup at MSport Driving Range.
              </p>
              <div className="bg-[#C2D8C4] rounded-xl p-6 text-left space-y-2">
                <p><span className="font-semibold">Pickup Time:</span> {formData.pickupTime}</p>
                <p><span className="font-semibold">Contact:</span> {formData.phone}</p>
                <p><span className="font-semibold">Total:</span> ฿{getTotalPrice().toLocaleString()}</p>
              </div>
              <p className="text-sm opacity-70">
                We'll contact you shortly to confirm your reservation.
              </p>
            </div>

            <button
              onClick={() => router.push('/shop')}
              className="accent-bg px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section-cream min-h-screen py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h1 className="section-title mb-12">RESERVE YOUR ITEMS</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white/50 rounded-2xl p-8 space-y-6">
              <div className="bg-[#C2D8C4] rounded-xl p-6 space-y-3">
                <h2 className="text-xl font-bold">Pick Up In Store</h2>
                <p className="opacity-80">
                  Reserve your items and pick them up at MSport Driving Range. Payment will be collected in person.
                </p>
                <div className="text-sm opacity-70">
                  <p>MSport Driving Range</p>
                  <p>Chiang Mai, Thailand</p>
                  <p>Open Daily: 8:00 AM - 8:00 PM</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#706C61]/20 focus:border-[#222222] outline-none transition-colors bg-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#706C61]/20 focus:border-[#222222] outline-none transition-colors bg-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="pickupTime" className="block font-semibold mb-2">
                    Preferred Pickup Time *
                  </label>
                  <select
                    id="pickupTime"
                    required
                    value={formData.pickupTime}
                    onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#706C61]/20 focus:border-[#222222] outline-none transition-colors bg-white"
                  >
                    <option value="">Select a time</option>
                    <option value="Today (2-4 PM)">Today (2-4 PM)</option>
                    <option value="Today (4-6 PM)">Today (4-6 PM)</option>
                    <option value="Tomorrow (10 AM-12 PM)">Tomorrow (10 AM-12 PM)</option>
                    <option value="Tomorrow (2-4 PM)">Tomorrow (2-4 PM)</option>
                    <option value="Tomorrow (4-6 PM)">Tomorrow (4-6 PM)</option>
                    <option value="This Weekend">This Weekend</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full accent-bg py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform duration-300"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="sticky top-24 bg-white/50 rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-bold">Order Summary</h2>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="flex gap-4"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-[#706C61]/10">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{item.product.name}</p>
                      <p className="text-sm opacity-60">
                        {item.selectedSize && `Size: ${item.selectedSize}`}
                        {item.selectedSize && item.selectedColor && ' • '}
                        {item.selectedColor && `Color: ${item.selectedColor}`}
                      </p>
                      <p className="text-sm">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        ฿{(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 py-6 border-y border-[#706C61]/20">
                <div className="flex justify-between">
                  <span className="opacity-70">Subtotal</span>
                  <span className="font-semibold">฿{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Items</span>
                  <span className="font-semibold">{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>฿{getTotalPrice().toLocaleString()}</span>
              </div>

              <p className="text-sm opacity-70 text-center">
                Payment will be collected when you pick up your items in store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
