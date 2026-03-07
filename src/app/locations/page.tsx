import Image from 'next/image';
import Link from 'next/link';

import { getServerLanguage } from '@/lib/i18n';

const locationsCopy = {
  EN: {
    hero: {
      label: 'Msport Locations',
      title: ['OUR', 'LOCATIONS'],
      description: 'Explore the current flagship and the next chapter of the Msport footprint in Chiang Mai.'
    },
    cards: [
      {
        name: 'Msport Driving Range',
        summary: '388 yards. 68 bays. TrackMan suites.',
        description: 'Flagship range culture with lounges, bays, sims, and concierge support.',
        href: '/driving-range',
        cta: 'Explore Location',
        status: 'Current Flagship',
        image: '/images/drivingrangeMSPORT.mp4',
        mediaType: 'video' as const
      },
      {
        name: 'Msport+',
        summary: 'Next-generation flagship.',
        description: 'Expanded retail, modern design, elevated social experience.',
        href: '/locations/msport-plus',
        cta: 'Discover Vision',
        status: 'Coming Soon',
        image: '/images/Srixonnewballs.png',
        mediaType: 'image' as const
      }
    ]
  },
  TH: {
    hero: {
      label: 'สาขา Msport',
      title: ['OUR', 'LOCATIONS'],
      description: 'สำรวจทั้งแฟลกชิปปัจจุบันและก้าวต่อไปของ Msport ในเชียงใหม่'
    },
    cards: [
      {
        name: 'Msport Driving Range',
        summary: '388 หลา · 68 ช่องตี · ห้อง TrackMan',
        description: 'สนามแฟลกชิปที่รวมเลานจ์ ช่องตี ซิมูเลเตอร์ และบริการคอนเซียร์จไว้ครบ',
        href: '/driving-range',
        cta: 'ดูสาขา',
        status: 'แฟลกชิปปัจจุบัน',
        image: '/images/drivingrangeMSPORT.mp4',
        mediaType: 'video' as const
      },
      {
        name: 'Msport+',
        summary: 'แฟลกชิปเจเนอเรชันถัดไป',
        description: 'รีเทลที่ขยายขึ้น ดีไซน์ใหม่ และประสบการณ์ทางสังคมที่ยกระดับ',
        href: '/locations/msport-plus',
        cta: 'ดูวิสัยทัศน์',
        status: 'เร็ว ๆ นี้',
        image: '/images/Srixonnewballs.png',
        mediaType: 'image' as const
      }
    ]
  },
  KO: {
    hero: {
      label: 'Msport 로케이션',
      title: ['OUR', 'LOCATIONS'],
      description: '현재 플래그십과 치앙마이에서 이어질 Msport의 다음 챕터를 확인하세요.'
    },
    cards: [
      {
        name: 'Msport Driving Range',
        summary: '388야드 · 68타석 · TrackMan 스위트',
        description: '라운지, 타석, 시뮬레이터, 컨시어지를 갖춘 플래그십 레인지 문화.',
        href: '/driving-range',
        cta: '지점 보기',
        status: '현재 플래그십',
        image: '/images/drivingrangeMSPORT.mp4',
        mediaType: 'video' as const
      },
      {
        name: 'Msport+',
        summary: '차세대 플래그십',
        description: '확장된 리테일, 현대적인 디자인, 더 높은 소셜 경험.',
        href: '/locations/msport-plus',
        cta: '비전 보기',
        status: '곧 공개',
        image: '/images/Srixonnewballs.png',
        mediaType: 'image' as const
      }
    ]
  },
  ZH: {
    hero: {
      label: 'Msport 地点',
      title: ['OUR', 'LOCATIONS'],
      description: '探索当前旗舰场，以及 Msport 在清迈的下一步布局。'
    },
    cards: [
      {
        name: 'Msport Driving Range',
        summary: '388 码 · 68 打位 · TrackMan 套房',
        description: '集休息区、打位、模拟器与礼宾服务于一体的旗舰练习场。',
        href: '/driving-range',
        cta: '查看地点',
        status: '当前旗舰',
        image: '/images/drivingrangeMSPORT.mp4',
        mediaType: 'video' as const
      },
      {
        name: 'Msport+',
        summary: '下一代旗舰场',
        description: '更大的零售空间、更现代的设计与更高级的社交体验。',
        href: '/locations/msport-plus',
        cta: '查看愿景',
        status: '即将推出',
        image: '/images/Srixonnewballs.png',
        mediaType: 'image' as const
      }
    ]
  },
  JA: {
    hero: {
      label: 'Msport ロケーション',
      title: ['OUR', 'LOCATIONS'],
      description: '現在のフラッグシップと、チェンマイで始まる Msport の次の展開をご覧ください。'
    },
    cards: [
      {
        name: 'Msport Driving Range',
        summary: '388ヤード · 68打席 · TrackMan スイート',
        description: 'ラウンジ、打席、シミュレーター、コンシェルジュを備えた旗艦レンジです。',
        href: '/driving-range',
        cta: 'ロケーションを見る',
        status: '現在のフラッグシップ',
        image: '/images/drivingrangeMSPORT.mp4',
        mediaType: 'video' as const
      },
      {
        name: 'Msport+',
        summary: '次世代フラッグシップ',
        description: '拡張されたリテール、現代的なデザイン、より高いソーシャル体験。',
        href: '/locations/msport-plus',
        cta: 'ビジョンを見る',
        status: '近日公開',
        image: '/images/Srixonnewballs.png',
        mediaType: 'image' as const
      }
    ]
  }
} as const;

export default async function LocationsPage() {
  const language = await getServerLanguage();
  const copy = locationsCopy[language];

  return (
    <main className="bg-[#1B1B1A] text-[#F5F1E6] min-h-screen">
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" poster="/images/baylayoutvisual.jpg">
          <source src="/images/drivingrangeMSPORT.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/44 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center gap-4 px-6 text-center text-white lg:px-12">
          <p className="accent-pill reveal reveal-down tracking-[0.45em] uppercase text-white/80">{copy.hero.label}</p>
          <h1 className="hero-title reveal reveal-up text-white">
            <span className="block">{copy.hero.title[0]}</span>
            <span className="block whitespace-nowrap">{copy.hero.title[1]}</span>
          </h1>
          <p className="reveal reveal-up reveal-delay-1 max-w-2xl text-sm leading-relaxed text-white/78 sm:text-base">
            {copy.hero.description}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl grid gap-8 md:grid-cols-2">
          {copy.cards.map(card => (
            <article
              key={card.name}
              className="relative rounded-[32px] border border-white/10 bg-white/[0.02] overflow-hidden flex flex-col"
            >
              <div className="relative h-64">
                {card.mediaType === 'video' ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={card.image}
                    className="w-full h-full object-cover"
                  >
                    <source src={card.image} type="video/mp4" />
                  </video>
                ) : (
                  <Image src={card.image} alt={card.name} fill className="object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs tracking-[0.35em] uppercase text-white/80">
                  {card.status}
                </div>
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">{card.summary}</p>
                <h2 className="text-3xl font-black text-white">{card.name}</h2>
                <p className="text-base text-white/75 flex-1">{card.description}</p>
                <Link
                  href={card.href}
                  className={`inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:border-white ${
                    card.status === 'Coming Soon' ? 'text-white/60 cursor-not-allowed' : 'text-white'
                  }`}
                  aria-disabled={card.status === 'Coming Soon'}
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
