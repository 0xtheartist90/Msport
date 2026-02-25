'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getProductBySlug } from '@/lib/products';
import { useCart } from '@/lib/cart';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const addItem = useCart(state => state.addItem);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="section-cream min-h-screen py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-[#222222] underline">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size');

      return;
    }
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      alert('Please select a color');

      return;
    }

    addItem(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="section-cream min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="font-semibold">Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#706C61]/10">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden ${
                      selectedImage === idx ? 'ring-2 ring-[#222222]' : ''
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-wide opacity-60 mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-black mb-2">{product.name}</h1>
              <p className="text-base md:text-lg text-[#4A4A44] leading-relaxed opacity-90">{product.description}</p>
            </div>

            <div className="text-3xl font-bold">
              ฿{product.price.toLocaleString()}
            </div>

            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block font-semibold mb-3">Size</label>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
                        selectedSize === size
                          ? 'accent-bg accent-border'
                          : 'border-[#706C61]/20 hover:border-[#706C61]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block font-semibold mb-3">Color</label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 rounded-xl border-2 font-semibold transition-all ${
                        selectedColor === color
                          ? 'accent-bg accent-border'
                          : 'border-[#706C61]/20 hover:border-[#706C61]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="font-semibold">
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                product.stock > 0
                  ? 'accent-bg hover:scale-[1.02]'
                  : 'bg-[#706C61]/30 text-[#706C61] cursor-not-allowed'
              } ${added ? 'bg-green-600' : ''}`}
            >
              {added ? 'Added to Cart!' : 'Reserve In Store'}
            </button>

            <div className="space-y-6 pt-6 border-t border-[#706C61]/20">
              <div>
                <h3 className="font-bold text-lg mb-3">Description</h3>
                <p className="leading-relaxed opacity-80">{product.description}</p>
              </div>

              {product.details && product.details.length > 0 && (
                <div>
                  <h3 className="font-bold text-lg mb-3">Details</h3>
                  <ul className="space-y-2">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 opacity-80">
                        <span className="text-[#222222] mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.care && product.care.length > 0 && (
                <div>
                  <h3 className="font-bold text-lg mb-3">Care Instructions</h3>
                  <ul className="space-y-2">
                    {product.care.map((instruction, idx) => (
                      <li key={idx} className="flex items-start gap-2 opacity-80">
                        <span className="text-[#222222] mt-1">•</span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
