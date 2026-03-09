 'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SectionHeader } from '@/components/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedFacilityDirectory } from '@/lib/localized-content';

const sectionSpacing = 'py-16 px-6 lg:px-10';
const cardClasses =
  'group relative transform-gpu overflow-hidden rounded-[28px] border border-[#DED6C9] shadow-[0_24px_62px_rgba(0,0,0,0.18)] min-h-[270px] flex flex-col justify-end p-6 text-white transition-transform duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_30px_78px_rgba(0,0,0,0.24)] sm:p-7';
const golfCardClasses =
  'group relative transform-gpu overflow-hidden rounded-[30px] border border-[#D8D0C3] bg-[#1F1D19] min-h-[280px] md:min-h-[320px] flex flex-col justify-end p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.2)] transition-transform duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_30px_85px_rgba(0,0,0,0.28)] sm:p-7';
const golfSpanClasses = ['lg:col-span-2', 'lg:col-span-1', 'lg:col-span-1', 'lg:col-span-2'];
const wellnessSpanClasses = ['lg:col-span-2', 'lg:col-span-1'];
const diningSpanClasses = ['lg:col-span-2', 'lg:col-span-1', 'lg:col-span-1', 'lg:col-span-1', 'lg:col-span-1'];
const serviceSpanClasses = ['lg:col-span-3'];
const cardGradientOverlay =
  'absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.85),rgba(0,0,0,0.45)_35%,transparent_70%)]';
const detailLinkClasses = 'inline-flex items-center gap-2 text-sm font-semibold text-white/88 transition-colors group-hover:text-[var(--accent)]';
const sectionShellClasses =
  'grid gap-6 rounded-[34px] border border-[#E5DDD1] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,239,231,0.92))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.08)] lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:p-8';
const facilityAnchors = ['#pro-shops', '#cafe', '#vip-room', '#wellness', '#dining', '#services'] as const;

const facilitiesCopy = {
  EN: {
    hero: {
      label: 'ALL IN ONE',
      title: 'Our Facilities',
      description: 'A single campus built for practice, recovery, food, retail, and longer stays between sessions.'
    },
    rail: {
      '#pro-shops': 'Pro Shops',
      '#cafe': 'Cafe',
      '#vip-room': 'Rent',
      '#wellness': 'Wellness',
      '#dining': 'Dining',
      '#services': 'Services'
    },
    tags: {
      proShop: 'Pro Shop',
      recovery: 'Recovery',
      dining: 'Dining',
      service: 'Service',
      viewDetails: 'View details'
    },
    proShops: {
      label: 'PRO SHOPS',
      title: 'Golf Essentials',
      subtitle: 'Premium equipment, apparel, and accessories selected for serious players.',
      description:
        'Retail, fitting, junior gear, and specialist support live side by side here, so players can solve the practical side of improvement without leaving the complex.',
      stat: 'Four specialist stores on site'
    },
    cafe: {
      label: 'Range Café',
      title: 'Coffee On Green',
      subtitle: 'Refuel between sessions without leaving the range.',
      description: 'Specialty coffee, light meals, and a relaxed atmosphere designed for players, families, and spectators.',
      chips: ['Coffee', 'Light Meals', 'All-Day Stop']
    },
    vip: {
      label: 'Private Room for Rent',
      title: 'VIP Room',
      subtitle: 'Air-conditioned privacy for lessons and groups.',
      description:
        'Private, air-conditioned suite ideal for lessons, small groups, or uninterrupted practice sessions steps away from the range.',
      chips: ['Private', 'Air-Conditioned', '10,000 THB / Month']
    },
    wellness: {
      label: 'Wellness',
      title: 'Wellness & Recovery',
      subtitle: 'Sports massage and recovery on site.',
      description:
        'Recover properly, reduce injury risk, and keep your body performing at its best with dedicated sports massage and recovery services.'
    },
    dining: {
      label: 'Dining',
      title: 'Dining Within the Complex',
      subtitle: 'Thai and Chinese cuisine steps from the range.',
      description:
        'Enjoy authentic Thai and Chinese cuisine just steps from the range, whether it is a family meal, a team dinner, or a late post-practice stop.'
    },
    services: {
      label: 'Parking & Detailing',
      title: 'M Car Spa',
      subtitle: 'Detail your vehicle while you play.',
      description:
        'Make the most of your visit by parking securely and getting your vehicle detailed while you train, dine, or recover.'
    }
  },
  TH: {
    hero: {
      label: 'ALL IN ONE',
      title: 'สิ่งอำนวยความสะดวก',
      description: 'คอมเพล็กซ์เดียวที่รวมการซ้อม รีคัฟเวอรี อาหาร รีเทล และพื้นที่พักระหว่างวันไว้ครบ'
    },
    rail: {
      '#pro-shops': 'โปรช็อป',
      '#cafe': 'คาเฟ่',
      '#vip-room': 'เช่า',
      '#wellness': 'เวลเนส',
      '#dining': 'อาหาร',
      '#services': 'บริการ'
    },
    tags: {
      proShop: 'Pro Shop',
      recovery: 'รีคัฟเวอรี',
      dining: 'อาหาร',
      service: 'บริการ',
      viewDetails: 'ดูรายละเอียด'
    },
    proShops: {
      label: 'โปรช็อป',
      title: 'อุปกรณ์กอล์ฟ',
      subtitle: 'อุปกรณ์ เสื้อผ้า และแอคเซสซอรีที่คัดมาสำหรับผู้เล่นจริงจัง',
      description:
        'รีเทล ฟิตติ้ง อุปกรณ์เยาวชน และผู้เชี่ยวชาญด้านกอล์ฟถูกรวมไว้ในโซนเดียว เพื่อให้ผู้เล่นจัดการทุกเรื่องได้โดยไม่ต้องออกจากคอมเพล็กซ์',
      stat: 'มีร้านเฉพาะทาง 4 ร้านในพื้นที่'
    },
    cafe: {
      label: 'คาเฟ่ประจำสนาม',
      title: 'Coffee On Green',
      subtitle: 'เติมพลังระหว่างเซสชันโดยไม่ต้องออกจากสนาม',
      description: 'กาแฟคุณภาพ อาหารเบา ๆ และบรรยากาศสบาย ๆ สำหรับผู้เล่น ครอบครัว และผู้ติดตาม',
      chips: ['กาแฟ', 'อาหารเบา ๆ', 'แวะได้ทั้งวัน']
    },
    vip: {
      label: 'ห้องส่วนตัวให้เช่า',
      title: 'VIP Room',
      subtitle: 'ห้องติดแอร์สำหรับบทเรียนและกลุ่มเล็ก',
      description: 'พื้นที่ส่วนตัวพร้อมเครื่องปรับอากาศ เหมาะสำหรับสอน ซ้อมเงียบ ๆ หรือใช้งานแบบกลุ่มเล็กใกล้สนามไดร์ฟ',
      chips: ['ส่วนตัว', 'ติดแอร์', '10,000 บาท / เดือน']
    },
    wellness: {
      label: 'เวลเนส',
      title: 'ฟื้นตัวและดูแลร่างกาย',
      subtitle: 'นวดกีฬาและบริการรีคัฟเวอรีในพื้นที่',
      description: 'ฟื้นตัวอย่างถูกวิธี ลดความเสี่ยงการบาดเจ็บ และดูแลร่างกายให้พร้อมสำหรับการเล่นในทุกวัน'
    },
    dining: {
      label: 'อาหาร',
      title: 'ร้านอาหารในคอมเพล็กซ์',
      subtitle: 'อาหารไทยและจีนอยู่ห่างจากสนามเพียงไม่กี่ก้าว',
      description: 'ไม่ว่าจะเป็นมื้อกับครอบครัว มื้อทีม หรือมื้อดึกหลังซ้อม คุณก็มีตัวเลือกครบในพื้นที่เดียว'
    },
    services: {
      label: 'จอดรถและดูแลรถ',
      title: 'M Car Spa',
      subtitle: 'ดูแลรถของคุณระหว่างที่ซ้อม',
      description: 'ใช้เวลาที่สนามให้คุ้มที่สุดด้วยการจอดรถอย่างสะดวกและให้รถของคุณได้รับการดูแลไปพร้อมกัน'
    }
  },
  KO: {
    hero: {
      label: 'ALL IN ONE',
      title: 'Our Facilities',
      description: '연습, 회복, 식사, 리테일, 휴식까지 하나의 캠퍼스 안에서 모두 해결할 수 있습니다.'
    },
    rail: {
      '#pro-shops': '프로숍',
      '#cafe': '카페',
      '#vip-room': '렌트',
      '#wellness': '웰니스',
      '#dining': '다이닝',
      '#services': '서비스'
    },
    tags: {
      proShop: '프로숍',
      recovery: '리커버리',
      dining: '다이닝',
      service: '서비스',
      viewDetails: '상세 보기'
    },
    proShops: {
      label: 'PRO SHOPS',
      title: '골프 에센셜',
      subtitle: '진지한 골퍼를 위한 장비, 의류, 액세서리를 선별했습니다.',
      description:
        '리테일, 피팅, 주니어 기어, 전문 지원이 한곳에 모여 있어 실전적인 향상에 필요한 요소를 복합공간 안에서 해결할 수 있습니다.',
      stat: '현장 4개 전문 스토어'
    },
    cafe: {
      label: '레인지 카페',
      title: 'Coffee On Green',
      subtitle: '레인지를 벗어나지 않고도 세션 사이에 리프레시.',
      description: '커피, 가벼운 식사, 편안한 분위기가 플레이어와 가족, 동반인 모두를 위해 준비되어 있습니다.',
      chips: ['커피', '라이트 밀', '올데이 스톱']
    },
    vip: {
      label: '프라이빗 룸 렌트',
      title: 'VIP Room',
      subtitle: '레슨과 그룹 세션을 위한 에어컨 프라이버시 공간.',
      description: '레인지 가까이에 위치한 프라이빗 에어컨 룸으로, 소규모 그룹이나 방해 없는 연습에 적합합니다.',
      chips: ['프라이빗', '에어컨', '월 10,000 THB']
    },
    wellness: {
      label: '웰니스',
      title: '회복과 웰니스',
      subtitle: '현장 스포츠 마사지와 회복 서비스.',
      description: '적절한 회복과 부상 리스크 관리로 몸 상태를 최상으로 유지할 수 있습니다.'
    },
    dining: {
      label: '다이닝',
      title: '콤플렉스 내 다이닝',
      subtitle: '레인지에서 몇 걸음 거리의 태국식·중식 다이닝.',
      description: '가족 식사, 팀 디너, 늦은 식사까지 모두 시설 안에서 해결할 수 있습니다.'
    },
    services: {
      label: '주차 & 디테일링',
      title: 'M Car Spa',
      subtitle: '플레이하는 동안 차량도 함께 관리하세요.',
      description: '연습, 식사, 회복 중 차량을 안전하게 주차하고 디테일링까지 맡길 수 있습니다.'
    }
  },
  ZH: {
    hero: {
      label: 'ALL IN ONE',
      title: 'Our Facilities',
      description: '在一个园区里完成练习、恢复、用餐、零售与休息。'
    },
    rail: {
      '#pro-shops': '专业商店',
      '#cafe': '咖啡',
      '#vip-room': '租赁',
      '#wellness': '康复',
      '#dining': '餐饮',
      '#services': '服务'
    },
    tags: {
      proShop: '专业商店',
      recovery: '恢复',
      dining: '餐饮',
      service: '服务',
      viewDetails: '查看详情'
    },
    proShops: {
      label: 'PRO SHOPS',
      title: '高尔夫装备',
      subtitle: '为认真打球的人精选的器材、服饰与配件。',
      description:
        '零售、配杆、青少年装备与专业支持都在同一区域，让你在综合体内就能解决提升所需的实际问题。',
      stat: '现场 4 家专业门店'
    },
    cafe: {
      label: '练习场咖啡',
      title: 'Coffee On Green',
      subtitle: '训练间隙无需离开练习场就能补充状态。',
      description: '精品咖啡、轻食与轻松氛围，适合球手、家人和观众。',
      chips: ['咖啡', '轻食', '全天停留']
    },
    vip: {
      label: '私密房间租赁',
      title: 'VIP Room',
      subtitle: '适合课程与小团体的空调私密空间。',
      description: '独立空调的私密空间，适合小团体课程或不受打扰的练习。',
      chips: ['私密', '空调', '10,000 THB / 月']
    },
    wellness: {
      label: '康复',
      title: '康复与放松',
      subtitle: '现场体育按摩与恢复服务。',
      description: '通过专业恢复服务降低受伤风险，并让身体持续保持良好状态。'
    },
    dining: {
      label: '餐饮',
      title: '综合体内用餐',
      subtitle: '距离练习场仅数步的泰式与中式餐饮。',
      description: '无论是家庭聚餐、团队晚餐还是练习后的晚间用餐，这里都能满足。'
    },
    services: {
      label: '停车与洗车美容',
      title: 'M Car Spa',
      subtitle: '练球时也能同时照顾好你的车辆。',
      description: '训练、用餐或恢复期间，可安全停车并同时安排车辆美容。'
    }
  },
  JA: {
    hero: {
      label: 'ALL IN ONE',
      title: 'Our Facilities',
      description: '練習、回復、食事、リテール、滞在を一つのキャンパスで完結できます。'
    },
    rail: {
      '#pro-shops': 'プロショップ',
      '#cafe': 'カフェ',
      '#vip-room': 'レンタル',
      '#wellness': 'ウェルネス',
      '#dining': 'ダイニング',
      '#services': 'サービス'
    },
    tags: {
      proShop: 'プロショップ',
      recovery: 'リカバリー',
      dining: 'ダイニング',
      service: 'サービス',
      viewDetails: '詳細を見る'
    },
    proShops: {
      label: 'PRO SHOPS',
      title: 'ゴルフエッセンシャル',
      subtitle: '本格的なゴルファーのために選ばれたギア、アパレル、アクセサリー。',
      description:
        'リテール、フィッティング、ジュニア向けギア、専門サポートが並び、上達に必要な実務面を施設内で完結できます。',
      stat: '現地に 4 つの専門ストア'
    },
    cafe: {
      label: 'レンジカフェ',
      title: 'Coffee On Green',
      subtitle: 'レンジを離れずにセッションの合間にリフレッシュ。',
      description: 'スペシャルティコーヒー、軽食、そしてプレーヤーや家族に合う落ち着いた雰囲気を用意しています。',
      chips: ['コーヒー', '軽食', '終日利用']
    },
    vip: {
      label: 'プライベートルームレンタル',
      title: 'VIP Room',
      subtitle: 'レッスンや少人数グループ向けの空調付きプライベート空間。',
      description: 'レンジに近い場所にある、レッスンや集中練習に適したプライベート空間です。',
      chips: ['プライベート', '空調完備', '月 10,000 THB']
    },
    wellness: {
      label: 'ウェルネス',
      title: 'ウェルネス & リカバリー',
      subtitle: 'スポーツマッサージと回復サービスを施設内で。',
      description: '適切な回復でケガのリスクを抑え、身体の状態を高く保てます。'
    },
    dining: {
      label: 'ダイニング',
      title: 'コンプレックス内ダイニング',
      subtitle: 'レンジからすぐのタイ料理・中華料理。',
      description: '家族の食事、チームディナー、練習後の夜食まで、すべて施設内で楽しめます。'
    },
    services: {
      label: '駐車 & ディテーリング',
      title: 'M Car Spa',
      subtitle: 'プレー中に車も整える。',
      description: '練習、食事、回復の間に、駐車と車のディテーリングを同時に済ませられます。'
    }
  }
} as const;

export default function FacilitiesPage() {
  const [activeAnchor, setActiveAnchor] = useState('#pro-shops');
  const { language } = useLanguage();
  const copy = facilitiesCopy[language];
  const localizedFacilities = getLocalizedFacilityDirectory(language);
  const golfFacilities = localizedFacilities.filter(facility => facility.category === 'golf');
  const wellnessFacilities = localizedFacilities.filter(facility => facility.category === 'wellness');
  const diningFacilities = localizedFacilities.filter(facility => facility.category === 'dining');
  const serviceFacilities = localizedFacilities.filter(facility => facility.category === 'services');
  const rangeCafe =
    localizedFacilities.find(facility => facility.category === 'cafe') ?? {
      name: 'Coffee On Green',
      description: 'Signature café located within the range, serving players and visitors throughout the day.',
      heroImage: '/images/Home/baylayoutvisual.jpg',
      slug: 'coffee-on-green',
      category: 'cafe',
      summary: '',
      services: [],
      location: '',
      hours: ''
    };
  const rangeCafeHeroImage =
    rangeCafe.slug === 'coffee-on-green'
      ? '/images/Facilities/Coffee on Green/Coffeeongreen01.png'
      : rangeCafe.heroImage;

  useEffect(() => {
    const sectionIds = [...facilityAnchors];
    const sections = sectionIds
      .map(id => document.querySelector<HTMLElement>(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveAnchor(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.2, 0.4, 0.6]
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

return (
    <main className="bg-[#F7F5F0] text-[#25231F] min-h-screen">
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="/images/Facilities/Facilitieshero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 lg:px-12 text-white space-y-6">
          <p className="accent-pill reveal reveal-down">{copy.hero.label}</p>
          <h1 className="hero-title text-white reveal reveal-up">{copy.hero.title}</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-white/78 reveal reveal-up reveal-delay-1 sm:text-base">
            {copy.hero.description}
          </p>
        </div>
      </section>

      <section className="sticky top-[88px] z-20 bg-transparent px-6 py-3 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex w-full items-center gap-2 overflow-x-auto rounded-full border border-white/55 bg-[rgba(247,245,240,0.58)] px-3 py-2 shadow-[0_14px_34px_rgba(0,0,0,0.14)] backdrop-blur-xl lg:justify-between [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max flex-1 items-center gap-2 lg:min-w-0 lg:justify-between">
              {facilityAnchors.map(anchor => {
                const isActive = activeAnchor === anchor;

                return (
                  <Link
                    key={anchor}
                    href={anchor}
                    className={`inline-flex shrink-0 items-center rounded-full border px-4 py-2.5 text-[0.64rem] font-semibold uppercase tracking-[0.28em] transition-all duration-300 ${
                      isActive
                        ? 'border-[var(--accent)]/35 bg-[var(--accent)] text-white shadow-[0_10px_22px_rgba(185,28,28,0.28)]'
                        : 'border-transparent bg-transparent text-[#4B463D] hover:border-black/8 hover:bg-white/45 hover:text-[#1F1D19]'
                    }`}
                  >
                    {copy.rail[anchor]}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="pro-shops" className="scroll-mt-32 px-6 pb-16 pt-8 lg:px-10 lg:pb-20 lg:pt-12">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className={`${sectionShellClasses} pt-7 lg:pt-9`}>
            <SectionHeader
              label={copy.proShops.label}
              title={<span className="text-[#1F1D19]">{copy.proShops.title}</span>}
              subtitle={copy.proShops.subtitle}
              align="left"
            />
            <div className="space-y-4 lg:max-w-md lg:justify-self-end">
              <p className="text-sm leading-relaxed text-[#4C4A44] reveal reveal-up reveal-delay-3 sm:text-base">
                {copy.proShops.description}
              </p>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#DDD3C5] bg-white/80 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#6B665C] reveal reveal-up reveal-delay-4">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                {copy.proShops.stat}
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {golfFacilities.map((business, index) => {
              const spanClass = golfSpanClasses[index] ?? 'lg:col-span-1';
              const isGolfGarage = business.slug === 'the-golf-garage';
              const isGolfKidClub = business.slug === 'm-golf-kid-club';

return (
                <div
                  key={business.slug}
                  className={`${spanClass} reveal reveal-up reveal-delay-${Math.min(index + 1, 4)}`}
                >
                  <Link
                    href={`/facilities/${business.slug}`}
                    className={golfCardClasses}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={business.heroImage}
                        alt={business.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        style={isGolfGarage ? { objectPosition: 'center top' } : undefined}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 border border-white/0 transition-colors duration-500 group-hover:border-white/18" aria-hidden="true">
                      <div
                        className={`absolute left-5 top-5 rounded-full px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.32em] backdrop-blur-md sm:left-6 sm:top-6 ${
                          isGolfKidClub
                            ? 'border border-[#D8CEC0] bg-white/88 text-[#2F2B25]'
                            : 'border border-white/18 bg-black/25 text-white/78'
                        }`}
                      >
                        {isGolfKidClub ? 'Apparel' : copy.tags.proShop}
                      </div>
                    </div>
                    <div className="relative z-10 mt-auto flex flex-col items-start gap-3">
                      <div
                        className={`h-px w-16 transition-all duration-500 group-hover:w-24 ${
                          isGolfKidClub
                            ? 'bg-gradient-to-r from-[var(--accent)] via-[#1F1D19]/55 to-transparent'
                            : 'bg-gradient-to-r from-[var(--accent)] via-white/60 to-transparent'
                        }`}
                      />
                      <span
                        className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:text-[var(--accent)] ${
                          isGolfKidClub ? 'text-[#2F2B25]' : 'text-white/88'
                        }`}
                      >
                        {copy.tags.viewDetails} <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="cafe" className={`scroll-mt-32 ${sectionSpacing} bg-white`}>
        <div className="mx-auto grid w-full max-w-6xl gap-6 rounded-[34px] border border-[#E6DED2] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,245,239,0.96))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.07)] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:p-7">
          <div className="relative h-72 w-full overflow-hidden rounded-[28px] border border-[#E3E3E0] reveal reveal-left reveal-delay-1">
            <Image
              src={rangeCafeHeroImage}
              alt={rangeCafe.name}
              fill
              className="object-cover"
              style={{ objectPosition: 'center bottom' }}
            />
          </div>
          <div className="space-y-5 text-[#1F1D19]">
            <SectionHeader
              label={copy.cafe.label}
              title={<span className="text-[#1F1D19]">{copy.cafe.title}</span>}
              subtitle={copy.cafe.subtitle}
              align="left"
            />
            <p className="text-base leading-relaxed text-[#4C4A44] reveal reveal-up reveal-delay-3">
              {copy.cafe.description}
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {copy.cafe.chips.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[18px] border border-[#E3DDD2] bg-[#F7F5F0] px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#6E685D] reveal reveal-up reveal-delay-${Math.min(index + 2, 4)}`}
                >
                  {item}
                </div>
              ))}
            </div>
            <Link href={`/facilities/${rangeCafe.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] reveal reveal-up reveal-delay-4">
              {copy.tags.viewDetails} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="vip-room" className={`scroll-mt-32 ${sectionSpacing} bg-[#1B1B1A]`}>
        <div className="mx-auto grid w-full max-w-6xl gap-6 rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_26px_70px_rgba(0,0,0,0.24)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:p-7">
          <div className="space-y-4 text-white">
            <SectionHeader
              label={copy.vip.label}
              title={<span className="text-white">{copy.vip.title}</span>}
              subtitle={copy.vip.subtitle}
              align="left"
              subtitleClassName="subtitle-accent text-white/85"
            />
            <p className="text-base leading-relaxed text-white/85 reveal reveal-up reveal-delay-3">
              {copy.vip.description}
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {copy.vip.chips.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/78 reveal reveal-up reveal-delay-${Math.min(index + 2, 4)}`}
                >
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/facilities/vip-room"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] reveal reveal-up reveal-delay-4"
            >
              {copy.tags.viewDetails} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-[28px] border border-white/16 reveal reveal-right reveal-delay-2">
            <Image src="/images/Facilities/Room for rent/roomforrent03.png" alt="VIP room for rent" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/20 to-transparent" />
          </div>
        </div>
      </section>

      <section
        id="wellness"
        className={`scroll-mt-32 ${sectionSpacing} bg-[#F3EBDD]`}
      >
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <div className={sectionShellClasses}>
            <SectionHeader
              label={copy.wellness.label}
              title={<span className="text-[#1F1D19]">{copy.wellness.title}</span>}
              subtitle={copy.wellness.subtitle}
              align="left"
            />
            <p className="text-sm leading-relaxed text-[#4C4A44] reveal reveal-up reveal-delay-3 sm:text-base lg:max-w-md lg:justify-self-end">
              {copy.wellness.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wellnessFacilities.map((item, index) => {
              const spanClass = wellnessSpanClasses[index] ?? 'lg:col-span-1';
              
return (
                <div
                  key={item.slug}
                  className={`${spanClass} reveal reveal-up reveal-delay-${Math.min(index + 1, 4)}`}
                >
                  <Link
                    href={`/facilities/${item.slug}`}
                    className={cardClasses}
                  >
                    <div className="absolute inset-0">
                      <Image src={item.heroImage} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="relative z-10 mt-auto flex flex-col items-start gap-3">
                      <div className="space-y-1">
                        {item.slug === 'myo-recovery' || item.slug === 'sakuna-thai-massage' ? null : (
                          <p className="text-[0.6rem] uppercase tracking-[0.34em] text-[#3C372F]/75">{copy.tags.recovery}</p>
                        )}
                        {item.slug === 'myo-recovery' || item.slug === 'sakuna-thai-massage' ? null : (
                          <p className="text-2xl font-black tracking-tight text-[#1F1D19]">{item.name}</p>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F2B25] transition-colors group-hover:text-[var(--accent)]">
                        {copy.tags.viewDetails} <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="dining" className={`scroll-mt-32 ${sectionSpacing} bg-white`}>
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <div className={sectionShellClasses}>
            <SectionHeader
              label={copy.dining.label}
              title={<span className="text-[#1F1D19]">{copy.dining.title}</span>}
              subtitle={copy.dining.subtitle}
              align="left"
            />
            <p className="text-sm leading-relaxed text-[#4C4A44] reveal reveal-up reveal-delay-3 sm:text-base lg:max-w-md lg:justify-self-end">
              {copy.dining.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {diningFacilities.map((restaurant, index) => {
              const spanClass = diningSpanClasses[index] ?? 'lg:col-span-1';
              const isTungLok = restaurant.slug === 'tung-lok-seafood';
              
return (
                <div
                  key={restaurant.slug}
                  className={`${spanClass} reveal reveal-up reveal-delay-${Math.min(index + 1, 4)}`}
                >
                  <Link
                    href={`/facilities/${restaurant.slug}`}
                    className={cardClasses}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={restaurant.heroImage}
                        alt={restaurant.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        style={isTungLok ? { objectPosition: 'center top' } : undefined}
                      />
                      <div className={cardGradientOverlay} />
                    </div>
                    <div className="relative z-10 mt-auto flex flex-col items-start gap-3">
                      <div className="space-y-1">
                        <p className="text-[0.6rem] uppercase tracking-[0.34em] text-white/68">{copy.tags.dining}</p>
                        <p className="text-2xl font-black tracking-tight">{restaurant.name}</p>
                      </div>
                      <span className={detailLinkClasses}>
                        {copy.tags.viewDetails} <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {serviceFacilities.length ? (
        <section id="services" className={`scroll-mt-32 ${sectionSpacing}`}>
          <div className="mx-auto w-full max-w-6xl space-y-6">
            <div className={sectionShellClasses}>
              <SectionHeader
                label={copy.services.label}
                title={<span className="text-[#1F1D19]">{copy.services.title}</span>}
                subtitle={copy.services.subtitle}
                align="left"
              />
              <p className="text-sm leading-relaxed text-[#4C4A44] reveal reveal-up reveal-delay-3 sm:text-base lg:max-w-md lg:justify-self-end">
                {copy.services.description}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {serviceFacilities.map((service, index) => {
                const spanClass = serviceSpanClasses[index] ?? 'lg:col-span-1';
                const isCarSpa = service.slug === 'm-car-spa';
                
return (
                  <div
                    key={service.slug}
                    className={`${spanClass} reveal reveal-up reveal-delay-${Math.min(index + 1, 4)}`}
                  >
                    <Link
                      href={`/facilities/${service.slug}`}
                      className={cardClasses}
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={service.heroImage}
                          alt={service.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          style={isCarSpa ? { objectPosition: 'center 35%' } : undefined}
                        />
                        <div className={cardGradientOverlay} />
                      </div>
                      <div className="relative z-10 mt-auto flex flex-col items-start gap-3">
                        <div className="space-y-1">
                          <p className="text-[0.6rem] uppercase tracking-[0.34em] text-white/68">{copy.tags.service}</p>
                          <p className="text-2xl font-black tracking-tight">{service.name}</p>
                        </div>
                        <span className={detailLinkClasses}>
                          {copy.tags.viewDetails} <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
