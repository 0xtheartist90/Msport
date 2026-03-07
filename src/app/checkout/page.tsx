'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/lib/cart';
import { useLanguage } from '@/context/LanguageContext';

const checkoutCopy = {
  EN: {
    submitted: {
      title: 'Reservation Confirmed!',
      thanks: 'Thank you,',
      description: 'Your items are reserved and ready for pickup at MSport Driving Range.',
      pickupTime: 'Pickup Time',
      contact: 'Contact',
      total: 'Total',
      note: "We'll contact you shortly to confirm your reservation.",
      cta: 'Book Another Session'
    },
    form: {
      title: 'RESERVE YOUR ITEMS',
      storeTitle: 'Pick Up In Store',
      storeDescription: 'Reserve your items and pick them up at MSport Driving Range. Payment will be collected in person.',
      storeHours: 'Open Daily: 8:00 AM - 8:00 PM',
      name: 'Full Name *',
      namePlaceholder: 'Enter your name',
      phone: 'Phone Number *',
      phonePlaceholder: 'Enter your phone number',
      pickup: 'Preferred Pickup Time *',
      pickupPlaceholder: 'Select a time',
      confirm: 'Confirm Reservation',
      summary: 'Order Summary',
      subtotal: 'Subtotal',
      items: 'Items',
      total: 'Total',
      paymentNote: 'Payment will be collected when you pick up your items in store.',
      quantity: 'Qty',
      size: 'Size',
      color: 'Color',
      options: ['Today (2-4 PM)', 'Today (4-6 PM)', 'Tomorrow (10 AM-12 PM)', 'Tomorrow (2-4 PM)', 'Tomorrow (4-6 PM)', 'This Weekend']
    }
  },
  TH: {
    submitted: {
      title: 'ยืนยันการจองเรียบร้อย',
      thanks: 'ขอบคุณ,',
      description: 'สินค้าของคุณถูกจองไว้เรียบร้อยและพร้อมรับที่ MSport Driving Range',
      pickupTime: 'เวลารับสินค้า',
      contact: 'ข้อมูลติดต่อ',
      total: 'ยอดรวม',
      note: 'ทีมงานจะติดต่อกลับเพื่อยืนยันการจองอีกครั้งในไม่ช้า',
      cta: 'จองเซสชันอื่นต่อ'
    },
    form: {
      title: 'จองสินค้าของคุณ',
      storeTitle: 'รับสินค้าที่ร้าน',
      storeDescription: 'จองสินค้าไว้ล่วงหน้าและมารับที่ MSport Driving Range โดยชำระเงินเมื่อมารับสินค้า',
      storeHours: 'เปิดทุกวัน: 8:00 AM - 8:00 PM',
      name: 'ชื่อ - นามสกุล *',
      namePlaceholder: 'กรอกชื่อของคุณ',
      phone: 'เบอร์โทรศัพท์ *',
      phonePlaceholder: 'กรอกเบอร์โทรศัพท์',
      pickup: 'เวลาที่ต้องการรับสินค้า *',
      pickupPlaceholder: 'เลือกเวลา',
      confirm: 'ยืนยันการจอง',
      summary: 'สรุปรายการ',
      subtotal: 'ยอดย่อย',
      items: 'จำนวนชิ้น',
      total: 'รวมทั้งหมด',
      paymentNote: 'ชำระเงินเมื่อมารับสินค้าที่ร้าน',
      quantity: 'จำนวน',
      size: 'ไซซ์',
      color: 'สี',
      options: ['วันนี้ (2-4 PM)', 'วันนี้ (4-6 PM)', 'พรุ่งนี้ (10 AM-12 PM)', 'พรุ่งนี้ (2-4 PM)', 'พรุ่งนี้ (4-6 PM)', 'สุดสัปดาห์นี้']
    }
  },
  KO: {
    submitted: {
      title: '예약이 완료되었습니다',
      thanks: '감사합니다,',
      description: '상품 예약이 완료되었으며 MSport Driving Range에서 픽업하실 수 있습니다.',
      pickupTime: '픽업 시간',
      contact: '연락처',
      total: '합계',
      note: '예약 확인을 위해 곧 연락드리겠습니다.',
      cta: '다른 세션 예약하기'
    },
    form: {
      title: '상품 예약',
      storeTitle: '매장 픽업',
      storeDescription: '상품을 미리 예약하고 MSport Driving Range에서 직접 픽업하세요. 결제는 현장에서 진행됩니다.',
      storeHours: '매일 운영: 8:00 AM - 8:00 PM',
      name: '이름 *',
      namePlaceholder: '이름을 입력하세요',
      phone: '전화번호 *',
      phonePlaceholder: '전화번호를 입력하세요',
      pickup: '희망 픽업 시간 *',
      pickupPlaceholder: '시간 선택',
      confirm: '예약 확정',
      summary: '주문 요약',
      subtotal: '소계',
      items: '수량',
      total: '총액',
      paymentNote: '결제는 매장에서 상품 픽업 시 진행됩니다.',
      quantity: '수량',
      size: '사이즈',
      color: '색상',
      options: ['오늘 (2-4 PM)', '오늘 (4-6 PM)', '내일 (10 AM-12 PM)', '내일 (2-4 PM)', '내일 (4-6 PM)', '이번 주말']
    }
  },
  ZH: {
    submitted: {
      title: '预约已确认',
      thanks: '谢谢你，',
      description: '你的商品已预留，可前往 MSport Driving Range 取货。',
      pickupTime: '取货时间',
      contact: '联系方式',
      total: '总计',
      note: '我们会尽快联系你确认预约。',
      cta: '继续预订其他时段'
    },
    form: {
      title: '预留商品',
      storeTitle: '到店取货',
      storeDescription: '提前预留商品，并前往 MSport Driving Range 取货。付款将在现场完成。',
      storeHours: '每日营业: 8:00 AM - 8:00 PM',
      name: '姓名 *',
      namePlaceholder: '请输入姓名',
      phone: '电话号码 *',
      phonePlaceholder: '请输入电话号码',
      pickup: '希望取货时间 *',
      pickupPlaceholder: '选择时间',
      confirm: '确认预订',
      summary: '订单摘要',
      subtotal: '小计',
      items: '件数',
      total: '总计',
      paymentNote: '付款将在到店取货时完成。',
      quantity: '数量',
      size: '尺码',
      color: '颜色',
      options: ['今天 (2-4 PM)', '今天 (4-6 PM)', '明天 (10 AM-12 PM)', '明天 (2-4 PM)', '明天 (4-6 PM)', '本周末']
    }
  },
  JA: {
    submitted: {
      title: '予約が確定しました',
      thanks: 'ありがとうございます、',
      description: '商品は確保され、MSport Driving Range にて受け取り可能です。',
      pickupTime: '受け取り時間',
      contact: '連絡先',
      total: '合計',
      note: '確認のため、まもなくご連絡いたします。',
      cta: '別のセッションを予約する'
    },
    form: {
      title: '商品を予約する',
      storeTitle: '店頭受け取り',
      storeDescription: '商品を事前予約し、MSport Driving Range で受け取れます。お支払いは現地で行います。',
      storeHours: '毎日営業: 8:00 AM - 8:00 PM',
      name: '氏名 *',
      namePlaceholder: '氏名を入力してください',
      phone: '電話番号 *',
      phonePlaceholder: '電話番号を入力してください',
      pickup: '希望受け取り時間 *',
      pickupPlaceholder: '時間を選択',
      confirm: '予約を確定',
      summary: '注文概要',
      subtotal: '小計',
      items: '点数',
      total: '合計',
      paymentNote: 'お支払いは店頭受け取り時に行われます。',
      quantity: '数量',
      size: 'サイズ',
      color: 'カラー',
      options: ['今日 (2-4 PM)', '今日 (4-6 PM)', '明日 (10 AM-12 PM)', '明日 (2-4 PM)', '明日 (4-6 PM)', '今週末']
    }
  }
} as const;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCart();
  const { language } = useLanguage();
  const copy = checkoutCopy[language];
  const [submittedTotal, setSubmittedTotal] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupTime: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted && items.length === 0) {
      router.replace('/simulators');
    }
  }, [items.length, router, submitted]);

  if (items.length === 0 && !submitted) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedTotal(getTotalPrice());
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
            
            <h1 className="text-4xl font-black">{copy.submitted.title}</h1>
            
            <div className="space-y-4 text-lg">
              <p className="serif-subtext">
                {copy.submitted.thanks} {formData.name}!
              </p>
              <p className="opacity-80">
                {copy.submitted.description}
              </p>
              <div className="bg-[#C2D8C4] rounded-xl p-6 text-left space-y-2">
                <p><span className="font-semibold">{copy.submitted.pickupTime}:</span> {formData.pickupTime}</p>
                <p><span className="font-semibold">{copy.submitted.contact}:</span> {formData.phone}</p>
                <p><span className="font-semibold">{copy.submitted.total}:</span> ฿{submittedTotal.toLocaleString()}</p>
              </div>
              <p className="text-sm opacity-70">
                {copy.submitted.note}
              </p>
            </div>

            <button
              onClick={() => router.push('/simulators')}
              className="accent-bg px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300"
            >
              {copy.submitted.cta}
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section-cream min-h-screen py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h1 className="section-title mb-12">{copy.form.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white/50 rounded-2xl p-8 space-y-6">
              <div className="bg-[#C2D8C4] rounded-xl p-6 space-y-3">
                <h2 className="text-xl font-bold">{copy.form.storeTitle}</h2>
                <p className="opacity-80">
                  {copy.form.storeDescription}
                </p>
                <div className="text-sm opacity-70">
                  <p>MSport Driving Range</p>
                  <p>Chiang Mai, Thailand</p>
                  <p>{copy.form.storeHours}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-2">
                    {copy.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#706C61]/20 focus:border-[#222222] outline-none transition-colors bg-white"
                    placeholder={copy.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-semibold mb-2">
                    {copy.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#706C61]/20 focus:border-[#222222] outline-none transition-colors bg-white"
                    placeholder={copy.form.phonePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="pickupTime" className="block font-semibold mb-2">
                    {copy.form.pickup}
                  </label>
                  <select
                    id="pickupTime"
                    required
                    value={formData.pickupTime}
                    onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#706C61]/20 focus:border-[#222222] outline-none transition-colors bg-white"
                  >
                    <option value="">{copy.form.pickupPlaceholder}</option>
                    {copy.form.options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full accent-bg py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform duration-300"
                >
                  {copy.form.confirm}
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="sticky top-24 bg-white/50 rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-bold">{copy.form.summary}</h2>

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
                        {item.selectedSize && `${copy.form.size}: ${item.selectedSize}`}
                        {item.selectedSize && item.selectedColor && ' • '}
                        {item.selectedColor && `${copy.form.color}: ${item.selectedColor}`}
                      </p>
                      <p className="text-sm">{copy.form.quantity}: {item.quantity}</p>
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
                  <span className="opacity-70">{copy.form.subtotal}</span>
                  <span className="font-semibold">฿{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">{copy.form.items}</span>
                  <span className="font-semibold">{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold">
                <span>{copy.form.total}</span>
                <span>฿{getTotalPrice().toLocaleString()}</span>
              </div>

              <p className="text-sm opacity-70 text-center">
                {copy.form.paymentNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
