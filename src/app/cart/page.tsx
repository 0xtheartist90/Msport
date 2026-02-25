'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/lib/cart';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="section-cream min-h-screen py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="mb-8 opacity-70">Start adding items to reserve them in store.</p>
          <Link
            href="/shop"
            className="inline-block accent-bg px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300"
          >
            Shop Now
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section-cream min-h-screen py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h1 className="section-title mb-12">YOUR CART</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                className="flex gap-6 p-6 bg-white/50 rounded-2xl"
              >
                <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-[#706C61]/10">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <Link
                      href={`/product/${item.product.slug}`}
                      className="font-bold text-lg hover:opacity-70 transition-opacity"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm opacity-60 uppercase">
                      {item.product.category}
                    </p>
                  </div>

                  {item.selectedSize && (
                    <p className="text-sm">
                      <span className="font-semibold">Size:</span> {item.selectedSize}
                    </p>
                  )}

                  {item.selectedColor && (
                    <p className="text-sm">
                      <span className="font-semibold">Color:</span> {item.selectedColor}
                    </p>
                  )}

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 border-2 border-[#706C61]/20 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-[#706C61]/10 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-[#706C61]/10 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-600"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-lg">
                    ฿{(item.product.price * item.quantity).toLocaleString()}
                  </p>
                  <p className="text-sm opacity-60">
                    ฿{item.product.price.toLocaleString()} each
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white/50 rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-bold">Order Summary</h2>

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

              <Link
                href="/checkout"
                className="block w-full accent-bg py-4 rounded-xl font-bold text-center hover:scale-[1.02] transition-transform duration-300"
              >
                Proceed to Reserve
              </Link>

              <Link
                href="/shop"
                className="block w-full text-center py-3 font-semibold hover:opacity-70 transition-opacity"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
