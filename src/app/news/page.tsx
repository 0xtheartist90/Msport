import Image from 'next/image';
import Link from 'next/link';

import { SectionHeader } from '@/components/SectionHeader';
import { getServerLanguage } from '@/lib/i18n';
import { getLocalizedNewsItems } from '@/lib/localized-content';

const newsPageCopy = {
  EN: {
    hero: {
      label: 'Msport Dispatch',
      title: ['News'],
      description: 'News, events, launches, and community updates from across the Msport complex.'
    },
    section: {
      label: 'News & Events',
      title: 'Latest News',
      subtitle: 'Direct updates from our community.'
    },
    cardCta: 'Read More'
  },
  TH: {
    hero: {
      label: 'ข่าวสารจาก Msport',
      title: ['ข่าวสาร'],
      description: 'ข่าวสาร กิจกรรม การเปิดตัว และอัปเดตจากคอมมูนิตี้ของ Msport'
    },
    section: {
      label: 'ข่าวสารและกิจกรรม',
      title: 'ข่าวล่าสุด',
      subtitle: 'อัปเดตตรงจากคอมมูนิตี้ของเรา'
    },
    cardCta: 'อ่านต่อ'
  },
  KO: {
    hero: {
      label: 'Msport 소식',
      title: ['뉴스'],
      description: 'Msport 콤플렉스 전역의 뉴스, 이벤트, 오픈 소식, 커뮤니티 업데이트를 확인하세요.'
    },
    section: {
      label: '뉴스 & 이벤트',
      title: '최신 뉴스',
      subtitle: '커뮤니티에서 직접 전하는 업데이트입니다.'
    },
    cardCta: '더 읽기'
  },
  ZH: {
    hero: {
      label: 'Msport 动态',
      title: ['新闻'],
      description: '来自 Msport 综合体的新闻、活动、发布与社区更新。'
    },
    section: {
      label: '新闻与活动',
      title: '最新新闻',
      subtitle: '来自我们社区的一手更新。'
    },
    cardCta: '阅读更多'
  },
  JA: {
    hero: {
      label: 'Msport ニュース',
      title: ['ニュース'],
      description: 'Msport コンプレックス全体のニュース、イベント、ローンチ、コミュニティ情報をお届けします。'
    },
    section: {
      label: 'ニュース & イベント',
      title: '最新ニュース',
      subtitle: 'コミュニティからの最新アップデート。'
    },
    cardCta: '続きを読む'
  }
} as const;

export default async function NewsPage() {
  const language = await getServerLanguage();
  const copy = newsPageCopy[language];
  const sortedNews = getLocalizedNewsItems(language);

  return (
    <main className="section-cream min-h-screen">
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden bg-black">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="/images/Home/drivingrangeMSPORT.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/42 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/18 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center gap-4 px-6 text-center text-white lg:px-12">
          <p className="accent-pill reveal reveal-down text-[#1B1B1A]">{copy.hero.label}</p>
          <h1 className="hero-title reveal reveal-up text-white">
            <span className="block">{copy.hero.title[0]}</span>
          </h1>
          <p className="reveal reveal-up reveal-delay-1 max-w-2xl text-sm leading-relaxed text-white/78 sm:text-base">
            {copy.hero.description}
          </p>
        </div>
      </section>

      <div id="news-content" className="mx-auto w-full max-w-6xl px-6 lg:px-8 py-20 space-y-12">
        <SectionHeader
          label={copy.section.label}
          title={copy.section.title}
          subtitle={copy.section.subtitle}
          align="center"
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {sortedNews.map((item, index) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className={`group block h-full rounded-[12px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1C1A]/20 reveal reveal-up reveal-delay-${Math.min(index + 1, 3)}`}
            >
              <article className="flex h-full transform-gpu flex-col overflow-hidden rounded-[12px] border border-[#DCD8CF] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-[0_24px_58px_rgba(0,0,0,0.14)]">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/40" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6 text-left transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between text-[0.58rem] uppercase tracking-[0.4em]">
                    <span className="text-[#8f8f8f]">{item.badge}</span>
                    <span className="text-[var(--accent)]">{item.date}</span>
                  </div>
                  <h3 className="text-[1.35rem] font-black leading-[1.2] text-[#151515]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6b6b6b]">{item.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#2d2d2d] transition-colors duration-300 group-hover:text-[var(--accent)]">
                    <span aria-hidden="true">→</span>
                    <span className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                      {copy.cardCta}
                    </span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
