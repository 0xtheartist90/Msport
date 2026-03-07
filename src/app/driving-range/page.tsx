import Image from 'next/image';
import Link from 'next/link';

import { getServerLanguage } from '@/lib/i18n';

const heroVideo = '/images/drivingrangeMSPORT.mp4';
const rangeGallery = ['/images/twostorey.jpg', '/images/the expansion.mp4', '/images/lifestyle imagery.jpg'];

const drivingRangeCopy = {
  EN: {
    hero: {
      label: 'Msport Flagship',
      title: ['Msport Driving Range', 'Chiang Mai'],
      description: 'The flagship range built around long fairway views, fast service, and year-round performance practice.'
    },
    schedule: {
      label: 'Flagship Schedule',
      detail: 'Daily • 08:00 – 22:00 · 188 Moo 3, San Klang, Chiang Mai'
    },
    highlights: [
      {
        stat: 'COMING SOON',
        title: 'New driving range expansion',
        description: 'Preview the next Msport build, an extended driving arena under construction now, with the full story on our news page.',
        href: '/news/new-driving-range-expansion'
      },
      {
        stat: '68 BAYS',
        title: 'Two-level layout',
        description: 'Practice from 68 spacious, ventilated bays across two levels with real course sightlines.'
      },
      {
        stat: 'SIM ROOMS',
        title: 'TrackMan simulators on site',
        description: 'Reserve private suites with concierge service and real-course visuals before you step onto the range.',
        href: '/simulators'
      },
      {
        stat: 'THAI PGA',
        title: 'Certified guidance daily',
        description: 'Thailand PGA professionals are on-site for scheduled lessons or quick walk-up coaching.'
      }
    ],
    layout: {
      label: 'Range Layout',
      title: 'Two levels · 68 bays · TrackMan labs',
      description:
        'Practice under Chiang Mai’s skyline from spacious, ventilated bays with uninterrupted fairway views. Upstairs TrackMan simulators, academy studios, and pro services keep players tuned year-round.',
      primaryCta: 'Call range concierge',
      secondaryCta: 'Book a bay'
    },
    services: {
      label: 'Services on site',
      title: 'Beyond the bays',
      items: [
        { title: 'TrackMan analysis room', description: 'Step into the lab to capture every club and ball metric before you tee it up outside.' },
        { title: 'Professional club fitting', description: 'Dial in heads, shafts, and grips with launch data and on-staff fitters.' },
        { title: 'Multiple pro shops', description: 'Stock up on apparel, equipment, and accessories without leaving the range.' },
        { title: 'Food & beverage service', description: 'Keep sessions going with coffee, Thai bites, and evening refreshments.' },
        { title: 'Thai massage & spa', description: 'Recharge between sessions with in-house therapists and spa rooms.' },
        { title: 'M Car Spa + parking', description: 'Park over 200 vehicles or book a detailing while you practice.' }
      ]
    },
    visit: {
      label: 'Visit Msport',
      title: 'Experience the flagship',
      detail: '188 Moo 3, San Klang, San Kamphaeng · Chiang Mai 50130 · Daily 8:00 – 22:00',
      primaryCta: 'Open in Google Maps',
      secondaryCta: 'Call +66 87 419 9199'
    }
  },
  TH: {
    hero: {
      label: 'แฟลกชิปของ Msport',
      title: ['Msport Driving Range', 'เชียงใหม่'],
      description: 'สนามหลักของ Msport ที่ออกแบบเพื่อมุมมองแฟร์เวย์ยาว บริการรวดเร็ว และการซ้อมอย่างจริงจังตลอดทั้งปี'
    },
    schedule: {
      label: 'เวลาเปิดบริการ',
      detail: 'ทุกวัน • 08:00 – 22:00 · 188 หมู่ 3 สันกลาง เชียงใหม่'
    },
    highlights: [
      {
        stat: 'เร็ว ๆ นี้',
        title: 'โครงการขยายสนามใหม่',
        description: 'อัปเดตความคืบหน้าของสนามส่วนขยาย Msport พร้อมติดตามรายละเอียดเพิ่มเติมได้ทางหน้าข่าวสาร',
        href: '/news/new-driving-range-expansion'
      },
      {
        stat: '68 ช่องตี',
        title: 'เลย์เอาต์สองชั้น',
        description: 'ซ้อมได้จาก 68 ช่องตีที่กว้าง โปร่ง และมองเห็นแฟร์เวย์เต็มระยะ'
      },
      {
        stat: 'SIM ROOMS',
        title: 'มี TrackMan อยู่ในพื้นที่',
        description: 'จองห้องซิมูเลเตอร์ส่วนตัว พร้อมบริการและภาพสนามจริงก่อนออกไปซ้อมด้านนอก',
        href: '/simulators'
      },
      {
        stat: 'THAI PGA',
        title: 'มีโค้ชรับรองทุกวัน',
        description: 'โปรจาก Thailand PGA พร้อมสำหรับบทเรียนแบบนัดหมายหรือคำแนะนำระหว่างวัน'
      }
    ],
    layout: {
      label: 'เลย์เอาต์สนาม',
      title: 'สองชั้น · 68 ช่องตี · ห้อง TrackMan',
      description:
        'ซ้อมท่ามกลางวิวเปิดกว้างของเชียงใหม่จากช่องตีที่โปร่งสบายและมองเห็นแฟร์เวย์เต็มตา ชั้นบนมีห้องซิมูเลเตอร์ สตูดิโออะคาเดมี และบริการโปรที่ช่วยให้ผู้เล่นพัฒนาได้ตลอดปี',
      primaryCta: 'โทรหาคอนเซียร์จสนาม',
      secondaryCta: 'จองช่องตี'
    },
    services: {
      label: 'บริการในคอมเพล็กซ์',
      title: 'มากกว่าการซ้อม',
      items: [
        { title: 'ห้องวิเคราะห์ TrackMan', description: 'ดูข้อมูลไม้และลูกแบบละเอียดก่อนออกไปตีที่สนามจริง' },
        { title: 'คัสตอมฟิตติ้ง', description: 'เลือกหัวไม้ ก้าน และกริปด้วยข้อมูล launch และทีมฟิตติ้งในพื้นที่' },
        { title: 'หลายโปรช็อปในที่เดียว', description: 'เลือกซื้อเสื้อผ้า อุปกรณ์ และแอคเซสซอรีได้โดยไม่ต้องออกจากคอมเพล็กซ์' },
        { title: 'อาหารและเครื่องดื่ม', description: 'ต่อเนื่องทั้งวันด้วยกาแฟ ของทานเล่น และอาหารหลังซ้อม' },
        { title: 'นวดไทยและสปา', description: 'ฟื้นตัวระหว่างเซสชันด้วยบริการนวดและห้องสปาในพื้นที่' },
        { title: 'M Car Spa และที่จอดรถ', description: 'จอดรถหรือดูแลรถไปพร้อมกับการซ้อมของคุณ' }
      ]
    },
    visit: {
      label: 'มาเยือน Msport',
      title: 'สัมผัสแฟลกชิปของเรา',
      detail: '188 หมู่ 3 สันกลาง สันกำแพง · เชียงใหม่ 50130 · ทุกวัน 8:00 – 22:00',
      primaryCta: 'เปิดใน Google Maps',
      secondaryCta: 'โทร +66 87 419 9199'
    }
  },
  KO: {
    hero: {
      label: 'Msport 플래그십',
      title: ['Msport Driving Range', 'Chiang Mai'],
      description: '긴 페어웨이 시야와 빠른 서비스, 연중 퍼포먼스 연습을 위해 설계된 플래그십 레인지입니다.'
    },
    schedule: {
      label: '운영 시간',
      detail: '매일 • 08:00 – 22:00 · 188 Moo 3, San Klang, Chiang Mai'
    },
    highlights: [
      {
        stat: 'COMING SOON',
        title: '새 드라이빙 레인지 확장',
        description: '현재 공사 중인 Msport 확장 프로젝트를 확인하고, 자세한 내용은 뉴스 페이지에서 보실 수 있습니다.',
        href: '/news/new-driving-range-expansion'
      },
      { stat: '68 BAYS', title: '2층 레이아웃', description: '넓고 통풍이 좋은 68개 타석에서 실제 코스 시야로 연습할 수 있습니다.' },
      { stat: 'SIM ROOMS', title: '현장 TrackMan 시뮬레이터', description: '실제 코스 비주얼과 함께 프라이빗 스위트를 예약할 수 있습니다.', href: '/simulators' },
      { stat: 'THAI PGA', title: '매일 상주하는 인증 코치', description: 'Thailand PGA 프로들이 예약 레슨과 현장 코칭을 제공합니다.' }
    ],
    layout: {
      label: '레인지 레이아웃',
      title: '2개 층 · 68개 타석 · TrackMan 랩',
      description:
        '치앙마이 스카이라인을 바라보며 넓고 통풍이 좋은 타석에서 연습하세요. 상층에는 TrackMan 시뮬레이터, 아카데미 스튜디오, 프로 서비스가 마련되어 있습니다.',
      primaryCta: '레인지 컨시어지에 전화',
      secondaryCta: '타석 예약'
    },
    services: {
      label: '현장 서비스',
      title: '타석 그 이상',
      items: [
        { title: 'TrackMan 분석실', description: '야외로 나가기 전에 클럽과 볼 데이터를 세밀하게 확인하세요.' },
        { title: '프로 클럽 피팅', description: '런치 데이터와 스태프 피터를 통해 헤드, 샤프트, 그립을 맞출 수 있습니다.' },
        { title: '다양한 프로숍', description: '의류와 장비, 액세서리를 모두 현장에서 바로 구매할 수 있습니다.' },
        { title: '식음료 서비스', description: '커피와 식사로 세션을 길게 이어갈 수 있습니다.' },
        { title: '타이 마사지 & 스파', description: '세션 사이에 회복할 수 있는 마사지와 스파 공간이 있습니다.' },
        { title: 'M Car Spa + 주차', description: '연습하는 동안 차량 디테일링이나 주차를 이용할 수 있습니다.' }
      ]
    },
    visit: {
      label: 'Msport 방문',
      title: '플래그십을 경험하세요',
      detail: '188 Moo 3, San Klang, San Kamphaeng · Chiang Mai 50130 · 매일 8:00 – 22:00',
      primaryCta: 'Google Maps 열기',
      secondaryCta: '전화 +66 87 419 9199'
    }
  },
  ZH: {
    hero: {
      label: 'Msport 旗舰场',
      title: ['Msport Driving Range', 'Chiang Mai'],
      description: '以超长视野、快速服务与全年高质量练习为核心打造的旗舰练习场。'
    },
    schedule: {
      label: '营业时间',
      detail: '每日 • 08:00 – 22:00 · 188 Moo 3, San Klang, Chiang Mai'
    },
    highlights: [
      {
        stat: '即将推出',
        title: '新练习场扩建项目',
        description: '查看 Msport 新扩建场地的进展，完整内容可在新闻页查看。',
        href: '/news/new-driving-range-expansion'
      },
      { stat: '68 个打位', title: '双层布局', description: '在 68 个宽敞通风的打位上，以真实球道视野完成练习。' },
      { stat: 'SIM ROOMS', title: '现场 TrackMan 模拟器', description: '可预订私密模拟器房间，享受真实球场视觉体验。', href: '/simulators' },
      { stat: 'THAI PGA', title: '每日认证教练', description: 'Thailand PGA 教练可提供预约课程与现场指导。' }
    ],
    layout: {
      label: '练习场布局',
      title: '双层 · 68 打位 · TrackMan 实验室',
      description:
        '在清迈天际线下，从通风宽敞、视野开阔的打位中练习。楼上还设有 TrackMan 模拟器、学院教室与专业服务。',
      primaryCta: '致电礼宾团队',
      secondaryCta: '预订打位'
    },
    services: {
      label: '现场服务',
      title: '不止是打位',
      items: [
        { title: 'TrackMan 分析室', description: '在走上外场之前，先完整查看球与球杆数据。' },
        { title: '专业配杆', description: '通过弹道数据与现场 fitter 调整杆头、杆身与握把。' },
        { title: '多个专业商店', description: '无需离开练习场即可购买服饰、装备与配件。' },
        { title: '餐饮服务', description: '咖啡、轻食与晚间餐饮让训练更完整。' },
        { title: '泰式按摩与水疗', description: '在训练间隙通过按摩与恢复空间进行放松。' },
        { title: 'M Car Spa + 停车', description: '练球期间可同时安排停车或车辆美容。' }
      ]
    },
    visit: {
      label: '来访 Msport',
      title: '体验我们的旗舰场',
      detail: '188 Moo 3, San Klang, San Kamphaeng · Chiang Mai 50130 · 每日 8:00 – 22:00',
      primaryCta: '在 Google Maps 中打开',
      secondaryCta: '拨打 +66 87 419 9199'
    }
  },
  JA: {
    hero: {
      label: 'Msport フラッグシップ',
      title: ['Msport Driving Range', 'Chiang Mai'],
      description: '長いフェアウェイビュー、スピーディーなサービス、年間を通した本格練習のために設計された旗艦レンジです。'
    },
    schedule: {
      label: '営業時間',
      detail: '毎日 • 08:00 – 22:00 · 188 Moo 3, San Klang, Chiang Mai'
    },
    highlights: [
      {
        stat: 'COMING SOON',
        title: '新ドライビングレンジ拡張',
        description: '現在建設中の Msport 拡張プロジェクトを確認し、詳細はニュースページでご覧いただけます。',
        href: '/news/new-driving-range-expansion'
      },
      { stat: '68 BAYS', title: '2階建てレイアウト', description: '広く風通しの良い 68 打席で、実際のコース感覚に近い視界の中で練習できます。' },
      { stat: 'SIM ROOMS', title: 'TrackMan シミュレーター併設', description: 'リアルなコース映像とともにプライベートスイートを予約できます。', href: '/simulators' },
      { stat: 'THAI PGA', title: '毎日対応の認定コーチ', description: 'Thailand PGA のプロが予約制レッスンや現地コーチングを提供します。' }
    ],
    layout: {
      label: 'レンジレイアウト',
      title: '2フロア · 68打席 · TrackMan ラボ',
      description:
        'チェンマイの空を眺めながら、開放感のある打席で練習できます。上階には TrackMan シミュレーター、アカデミースタジオ、各種プロサービスも整っています。',
      primaryCta: 'レンジコンシェルジュに電話',
      secondaryCta: '打席を予約'
    },
    services: {
      label: '現地サービス',
      title: '打席だけではない魅力',
      items: [
        { title: 'TrackMan 分析ルーム', description: '外のレンジに出る前に、クラブとボールのデータを詳細に確認できます。' },
        { title: 'プロによるフィッティング', description: '弾道データとスタッフのサポートでヘッド、シャフト、グリップを最適化します。' },
        { title: '複数のプロショップ', description: 'アパレル、用品、アクセサリーを施設内でまとめて購入できます。' },
        { title: 'フード & ドリンク', description: 'コーヒーや軽食、夜の食事でセッションを快適に続けられます。' },
        { title: 'タイマッサージ & スパ', description: 'セッションの合間に体を整えるためのマッサージとスパ空間があります。' },
        { title: 'M Car Spa + 駐車', description: '練習中に車のケアや駐車サービスを利用できます。' }
      ]
    },
    visit: {
      label: 'Msport を訪れる',
      title: 'フラッグシップを体験する',
      detail: '188 Moo 3, San Klang, San Kamphaeng · Chiang Mai 50130 · 毎日 8:00 – 22:00',
      primaryCta: 'Google Maps で開く',
      secondaryCta: '電話 +66 87 419 9199'
    }
  }
} as const;

export default async function DrivingRangePage() {
  const language = await getServerLanguage();
  const copy = drivingRangeCopy[language];

  return (
    <main className="bg-[#1B1B1A] text-white">
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" poster="/images/baylayoutvisual.jpg">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/52 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/52 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center gap-4 px-6 text-center lg:px-12">
          <p className="accent-pill reveal reveal-down">{copy.hero.label}</p>
          <h1 className="hero-title reveal reveal-up text-white">
            <span className="block">{copy.hero.title[0]}</span>
            <span className="block whitespace-nowrap">{copy.hero.title[1]}</span>
          </h1>
          <p className="reveal reveal-up reveal-delay-1 max-w-2xl text-sm leading-relaxed text-white/78 sm:text-base">
            {copy.hero.description}
          </p>
        </div>
      </section>

      <section className="section-cream text-[#1F1D19] py-20">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 space-y-12">
          <header className="space-y-4 text-center">
            <p className="text-[0.6rem] tracking-[0.55em] uppercase text-[var(--accent)]">{copy.schedule.label}</p>
            <p className="text-sm text-[#5A564D]">{copy.schedule.detail}</p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {copy.highlights.map(highlight => (
              <article
                key={highlight.title}
                className="rounded-[26px] border border-[#E3E3E0] bg-white p-6 shadow-[0_25px_60px_rgba(15,15,15,0.12)] flex flex-col gap-3"
              >
                <p className="text-xs uppercase tracking-[0.55em] text-[var(--accent)]">{highlight.stat}</p>
                <h3 className="text-xl font-black text-[#1F1D19]">{highlight.title}</h3>
                <p className="text-sm text-[#4A473F] leading-relaxed">{highlight.description}</p>
                {'href' in highlight && highlight.href ? (
                  <Link href={highlight.href} className="text-sm font-semibold text-[var(--accent)]">
                    Learn more →
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B1B1A] py-20">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-4">
            <p className="accent-pill">{copy.layout.label}</p>
            <h2 className="text-[clamp(2.6rem,4vw,3.6rem)] font-black leading-tight">{copy.layout.title}</h2>
            <p className="text-sm text-white/70 leading-relaxed">{copy.layout.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="tel:+66874199199" className="accent-bg px-6 py-3 rounded-xl font-semibold text-sm">
                {copy.layout.primaryCta}
              </Link>
              <Link href="mailto:msportcomplex@hotmail.com" className="border border-white/40 px-6 py-3 rounded-xl font-semibold text-sm">
                {copy.layout.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {rangeGallery.map(media => (
              <div key={media} className="relative w-full h-40 rounded-[24px] overflow-hidden border border-white/10">
                {media.endsWith('.mp4') ? (
                  <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
                    <source src={media} type="video/mp4" />
                  </video>
                ) : (
                  <Image src={media} alt="Msport range" fill className="object-cover" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cream py-20">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 space-y-10">
          <header className="space-y-3">
            <p className="accent-pill">{copy.services.label}</p>
            <h2 className="text-[clamp(2.3rem,4vw,3.4rem)] font-black leading-tight text-[#1F1D19]">{copy.services.title}</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {copy.services.items.map(service => (
              <article key={service.title} className="rounded-[28px] border border-[#E3E3E0] bg-white p-6 shadow-[0_25px_60px_rgba(34,34,34,0.08)]">
                <p className="text-xs uppercase tracking-[0.55em] text-[var(--accent)]">{service.title}</p>
                <p className="mt-3 text-sm text-[#4A473F] leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B1B1A] py-20">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8 text-center space-y-6">
          <p className="accent-pill">{copy.visit.label}</p>
          <h2 className="text-[clamp(2.75rem,4vw,3.5rem)] font-black leading-tight">{copy.visit.title}</h2>
          <p className="text-sm text-white/70">{copy.visit.detail}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://maps.app.goo.gl/XqV9SucuzPszVmSB6" target="_blank" className="accent-bg px-8 py-3 rounded-xl font-semibold text-sm">
              {copy.visit.primaryCta}
            </Link>
            <Link href="tel:+66874199199" className="border border-white/40 px-8 py-3 rounded-xl font-semibold text-sm">
              {copy.visit.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
