'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getProductBySlug } from '@/lib/products';
import { useCart } from '@/lib/cart';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedProductCategoryLabel } from '@/lib/localized-content';

const productPageCopy = {
  EN: {
    missingTitle: 'Product Not Found',
    missingCta: 'Back to Simulators',
    alerts: {
      size: 'Please select a size',
      color: 'Please select a color'
    },
    back: 'Back',
    size: 'Size',
    color: 'Color',
    inStock: 'in stock',
    outOfStock: 'Out of stock',
    reserve: 'Reserve In Store',
    added: 'Added to Cart!',
    description: 'Description',
    details: 'Details',
    care: 'Care Instructions'
  },
  TH: {
    missingTitle: 'ไม่พบสินค้า',
    missingCta: 'กลับไปหน้าซิมูเลเตอร์',
    alerts: {
      size: 'กรุณาเลือกไซซ์',
      color: 'กรุณาเลือกสี'
    },
    back: 'กลับ',
    size: 'ไซซ์',
    color: 'สี',
    inStock: 'ชิ้นพร้อมขาย',
    outOfStock: 'สินค้าหมด',
    reserve: 'จองไว้รับที่ร้าน',
    added: 'เพิ่มลงรายการแล้ว',
    description: 'รายละเอียด',
    details: 'ข้อมูลสินค้า',
    care: 'วิธีดูแล'
  },
  KO: {
    missingTitle: '상품을 찾을 수 없습니다',
    missingCta: '시뮬레이터로 돌아가기',
    alerts: {
      size: '사이즈를 선택해 주세요',
      color: '색상을 선택해 주세요'
    },
    back: '뒤로',
    size: '사이즈',
    color: '색상',
    inStock: '재고 있음',
    outOfStock: '품절',
    reserve: '매장 예약',
    added: '장바구니에 추가됨',
    description: '설명',
    details: '세부 정보',
    care: '관리 방법'
  },
  ZH: {
    missingTitle: '未找到商品',
    missingCta: '返回模拟器页面',
    alerts: {
      size: '请选择尺码',
      color: '请选择颜色'
    },
    back: '返回',
    size: '尺码',
    color: '颜色',
    inStock: '有库存',
    outOfStock: '缺货',
    reserve: '到店预留',
    added: '已加入购物车',
    description: '描述',
    details: '详情',
    care: '保养说明'
  },
  JA: {
    missingTitle: '商品が見つかりません',
    missingCta: 'シミュレーターへ戻る',
    alerts: {
      size: 'サイズを選択してください',
      color: 'カラーを選択してください'
    },
    back: '戻る',
    size: 'サイズ',
    color: 'カラー',
    inStock: '在庫あり',
    outOfStock: '在庫切れ',
    reserve: '店頭で予約',
    added: 'カートに追加しました',
    description: '説明',
    details: '詳細',
    care: 'お手入れ方法'
  }
} as const;

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const addItem = useCart(state => state.addItem);
  const { language } = useLanguage();
  const copy = productPageCopy[language];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="section-cream min-h-screen py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">{copy.missingTitle}</h1>
          <Link href="/simulators" className="text-[#222222] underline">
            {copy.missingCta}
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert(copy.alerts.size);

      return;
    }
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      alert(copy.alerts.color);

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
          <span className="font-semibold">{copy.back}</span>
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
                {getLocalizedProductCategoryLabel(language, product.category)}
              </p>
              <h1 className="text-4xl font-black mb-2">{product.name}</h1>
              <p className="text-base md:text-lg text-[#4A4A44] leading-relaxed opacity-90">{product.description}</p>
            </div>

            <div className="text-3xl font-bold">
              ฿{product.price.toLocaleString()}
            </div>

            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block font-semibold mb-3">{copy.size}</label>
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
                <label className="block font-semibold mb-3">{copy.color}</label>
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
                {product.stock > 0 ? `${product.stock} ${copy.inStock}` : copy.outOfStock}
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
              {added ? copy.added : copy.reserve}
            </button>

            <div className="space-y-6 pt-6 border-t border-[#706C61]/20">
              <div>
                <h3 className="font-bold text-lg mb-3">{copy.description}</h3>
                <p className="leading-relaxed opacity-80">{product.description}</p>
              </div>

              {product.details && product.details.length > 0 && (
                <div>
                  <h3 className="font-bold text-lg mb-3">{copy.details}</h3>
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
                  <h3 className="font-bold text-lg mb-3">{copy.care}</h3>
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
