"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VideoPlayer from '@/components/VideoPlayer';
import { SectionHeader } from '@/components/SectionHeader';
import { USPSection } from '@/components/USPSection';
import { useLanguage } from '@/context/LanguageContext';
import { rangeHighlights, ballRates, newsItems } from '@/lib/site-content';
import { getLocalizedNewsItems } from '@/lib/localized-content';

const [rangeLengthFeature, bayLayoutFeature, tourBallFeature, coachingFeature] = rangeHighlights;

type RangeCardKey = 'theRange' | 'facilities' | 'simulators' | 'coaching';

const rangeOverviewCards = [
  {
    key: 'the-range',
    translationKey: 'theRange' as RangeCardKey,
    href: '/locations#msport-driving-range',
    mediaType: 'video' as const,
    mediaSrc: '/images/female driver.mp4'
  },
  {
    key: 'bays',
    translationKey: 'facilities' as RangeCardKey,
    href: bayLayoutFeature.href ?? '/facilities',
    mediaType: 'image' as const,
    mediaSrc: '/images/baylayoutvisual.jpg'
  },
  {
    key: 'simulators',
    translationKey: 'simulators' as RangeCardKey,
    href: tourBallFeature.href ?? '/simulators',
    mediaType: 'image' as const,
    mediaSrc: '/images/simroom.png'
  },
  {
    key: 'coaching',
    translationKey: 'coaching' as RangeCardKey,
    href: '/academy',
    mediaType: 'image' as const,
    mediaSrc: '/images/thaipgacoaching.jpg'
  }
];

const aboutLoopImages = Array.from({ length: 10 }, (_, index) =>
  `/images/AboutUsLoop/AboutUsLoop${String(index + 1).padStart(2, '0')}.png`
);

const DELAY_CLASSES = {
  rangeCard: ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'],
  membershipCard: ['reveal-delay-1', 'reveal-delay-2'],
  featureCard: ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'],
  newsCard: ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3']
} as const;

const {
  rangeCard: rangeCardDelayClasses,
  membershipCard: membershipCardDelayClasses,
  featureCard: featureCardDelayClasses,
  newsCard: newsCardDelayClasses
} = DELAY_CLASSES;

const LOCALE_MAP = {
  EN: 'en-US',
  TH: 'th-TH',
  KO: 'ko-KR',
  ZH: 'zh-CN',
  JA: 'ja-JP'
} as const;

const homepageCopy = {
  EN: {
    aboutLoopAlt: 'Msport community and facility montage',
    latestNewsTitle: 'Latest News',
    oldBalls: 'Old Balls',
    newBalls: 'New Balls',
    standardRate: 'Standard rate',
    noMembershipRequired: 'No membership required',
    valueTrayNote: 'Value trays for everyday practice',
    premiumTrayNote: 'Premium stock for cleaner feedback',
    bestValue: 'Best Value',
    trays: 'trays',
    freeTrays: 'free trays',
    total: 'Total',
    trayRateSuffix: '/ tray'
  },
  TH: {
    aboutLoopAlt: 'ภาพบรรยากาศผู้เล่นและพื้นที่ของ Msport',
    latestNewsTitle: 'ข่าวล่าสุด',
    oldBalls: 'ลูกเก่า',
    newBalls: 'ลูกใหม่',
    standardRate: 'ราคาปกติ',
    noMembershipRequired: 'ไม่ต้องเป็นสมาชิก',
    valueTrayNote: 'ตัวเลือกลูกซ้อมคุ้มค่าสำหรับการฝึกทุกวัน',
    premiumTrayNote: 'ลูกใหม่พรีเมียมเพื่อฟีดแบ็กที่ชัดขึ้น',
    bestValue: 'คุ้มค่าที่สุด',
    trays: 'ถาด',
    freeTrays: 'ถาดฟรี',
    total: 'รวม',
    trayRateSuffix: '/ ถาด'
  },
  KO: {
    aboutLoopAlt: 'Msport 커뮤니티와 시설 몽타주',
    latestNewsTitle: '최신 뉴스',
    oldBalls: '오래된 볼',
    newBalls: '새 볼',
    standardRate: '일반 요금',
    noMembershipRequired: '멤버십 없이 이용 가능',
    valueTrayNote: '일상 연습에 적합한 실속형 트레이',
    premiumTrayNote: '더 선명한 피드백을 위한 프리미엄 볼',
    bestValue: '최고 가치',
    trays: '트레이',
    freeTrays: '무료 트레이',
    total: '총액',
    trayRateSuffix: '/ 트레이'
  },
  ZH: {
    aboutLoopAlt: 'Msport 社区与设施影像',
    latestNewsTitle: '最新新闻',
    oldBalls: '旧球',
    newBalls: '新球',
    standardRate: '标准价格',
    noMembershipRequired: '无需会员',
    valueTrayNote: '适合日常练习的高性价比球筐',
    premiumTrayNote: '新球升级，反馈更清晰',
    bestValue: '最优价值',
    trays: '托',
    freeTrays: '免费托数',
    total: '总计',
    trayRateSuffix: '/ 托'
  },
  JA: {
    aboutLoopAlt: 'Msport のコミュニティと施設のモンタージュ',
    latestNewsTitle: '最新ニュース',
    oldBalls: '旧ボール',
    newBalls: '新ボール',
    standardRate: '通常料金',
    noMembershipRequired: '会員登録不要',
    valueTrayNote: '日常練習向けのバリュートレー',
    premiumTrayNote: 'より明確なフィードバックの新球',
    bestValue: '最もお得',
    trays: 'トレー',
    freeTrays: '無料トレー',
    total: '合計',
    trayRateSuffix: '/ トレー'
  }
} as const;

type MembershipCardConfig = {
  key: 'pro' | 'gold';
  translationKey: 'pro' | 'gold';
  image: string;
  video: string;
  packages: {
    package: string;
    rate: string;
  }[];
};

const membershipCardConfigs: MembershipCardConfig[] = [
  {
    key: 'pro',
    translationKey: 'pro',
    image: '/images/redcard.png',
    video: '/images/redcard.mp4',
    packages: ballRates.memberships.old
  },
  {
    key: 'gold',
    translationKey: 'gold',
    image: '/images/goldcard.png',
    video: '/images/goldcard.mp4',
    packages: ballRates.memberships.fresh
  }
];

function parseCurrencyValue(value: string) {
  return Number(value.replace(/[^\d]/g, ''));
}

export default function HomePage() {
  const { t, language } = useLanguage();
  const copy = homepageCopy[language];
  const locale = LOCALE_MAP[language];
  const localizedNewsItems = useMemo(() => getLocalizedNewsItems(language), [language]);
  const [selectedMembershipPackages, setSelectedMembershipPackages] = useState<Record<string, number>>({
    pro: 1,
    gold: 1
  });
  const localizedRangeCards = useMemo(
    () =>
      rangeOverviewCards.map(card => ({
        ...card,
        copy: t.range.cards[card.translationKey]
      })),
    [t]
  );
  const localizedMembershipCards = useMemo(
    () =>
      membershipCardConfigs.map(card => ({
        ...card,
        copy: t.membership.cards[card.translationKey]
      })),
    [t]
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <section
        id="home"
        className="section-anchor relative h-[78vh] min-h-[624px] flex items-center justify-center section-cream w-full overflow-hidden"
      >
        <VideoPlayer
          src="/images/drivingrangeMSPORT.mp4"
          poster="/images/drivingrangeMSPORT.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          observe={false}
        />
        <div className="overlay-veil" />

        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6 max-w-4xl">
          <p className="accent-pill reveal reveal-down">{t.hero.label}</p>
          <Image
            src="/images/Msport%20logo.png"
            alt="Msport Driving Range logo"
            width={420}
            height={180}
            className="h-28 w-auto reveal reveal-down"
            priority
          />
          <h1 className="hero-title text-white reveal reveal-up reveal-delay-1">
            <span className="block">{t.hero.titleLine1}</span>
            <span className="block whitespace-nowrap">{t.hero.titleLine2}</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-up reveal-delay-2">
            <Link
              href="/locations"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d90b0b]"
            >
              {t.hero.primaryCta}
            </Link>
            <Link
              href="#membership"
              className="inline-flex items-center justify-center rounded-full border border-white/28 bg-white/6 px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/12"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>

        </div>
      </section>

      <USPSection metrics={t.usp.metrics} campusLabel={t.usp.campusLabel} />

      <section id="range" className="section-anchor section-matcha py-24 w-full">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            label={t.range.sectionLabel}
            title={t.range.title}
            subtitle={t.range.subtitle}
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {localizedRangeCards.map((card, index) => {
              const spanClasses = ['lg:col-span-2', 'lg:col-span-1', 'lg:col-span-1', 'lg:col-span-2'];
              const spanClass = spanClasses[index] ?? 'lg:col-span-1';
              const delayClass = rangeCardDelayClasses[index % rangeCardDelayClasses.length];

              return (
                <Link
                  key={card.key}
                  href={card.href}
                  className={`group block h-full rounded-[26px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 reveal reveal-up ${delayClass} ${spanClass}`}
                >
                  <article className="relative min-h-[280px] h-full overflow-hidden rounded-[26px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] flex flex-col justify-between p-8 text-white transition-all duration-500 ease-out transform-gpu group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-[0_42px_110px_rgba(0,0,0,0.52)]">
                    <div className="absolute inset-0">
                      {card.mediaType === 'video' ? (
                        <VideoPlayer src={card.mediaSrc} poster={card.mediaSrc} className="w-full h-full object-cover" />
                      ) : (
                        <Image
                          src={card.mediaSrc}
                          alt={card.copy.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                      )}
                      <div className="overlay-deep" />
                    </div>

                    <div className="relative z-10 space-y-3 transition-transform duration-500 group-hover:-translate-y-1">
                      <p className="text-3xl md:text-4xl font-black tracking-tight">{card.copy.title}</p>
                      {card.copy.subtitle && (
                        <p className="max-w-[30rem] text-sm text-white/75 transition-colors duration-300 group-hover:text-white/88">
                          {card.copy.subtitle}
                        </p>
                      )}
                      <div className="h-px w-14 bg-gradient-to-r from-[var(--accent)] via-white/70 to-transparent transition-all duration-500 group-hover:w-20" />
                    </div>

                    <span className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                      {card.copy.cta}
                      <span aria-hidden="true">→</span>
                    </span>

                    <div
                      className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/0 transition-colors duration-500 group-hover:border-white/15"
                      aria-hidden="true"
                    />
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FAF2E5] w-full border-t border-white/10">
        <div className="relative">
          <div className="flex w-max flex-nowrap animate-marquee-seamless-top" style={{ gap: 0 }}>
            {[0, 1].map(setIndex =>
              aboutLoopImages.map(image => (
                <Image
                  key={`${image}-${setIndex}`}
                  src={image}
                  alt={copy.aboutLoopAlt}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="block h-56 w-auto flex-shrink-0 object-cover sm:h-64"
                />
              ))
            )}
          </div>
        </div>
      </section>

      <section id="membership" className="relative section-anchor section-smoke py-24 w-full overflow-hidden">
        <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8 space-y-12">
          <SectionHeader
            label={t.membership.section.label}
            title={<span className="text-white">{t.membership.section.title}</span>}
            subtitle={t.membership.section.subtitle}
          />

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)] reveal reveal-up reveal-delay-1">
            <VideoPlayer src="/images/ballsmsport.mp4" poster="/images/ballsmsport.mp4" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
            <div className="relative z-10 p-8 text-white">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="space-y-4 max-w-2xl">
                  <p className="section-label">{t.membership.rangeSelection.label}</p>
                  <h3 className="text-3xl lg:text-4xl font-black leading-tight">{t.membership.rangeSelection.title}</h3>
                  <div className="text-sm lg:text-base text-white/80 space-y-1">
                    {t.membership.rangeSelection.description.map(line => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
                <div className="rounded-[28px] bg-white/5 backdrop-blur-xl p-6 border border-white/10 space-y-5 w-full max-w-sm lg:ml-auto">
                  <p className="label-light text-center lg:text-right">
                    {t.membership.ratesLabel}
                  </p>
                  <div className="space-y-3">
                    {ballRates.standard.map((rate, index) => {
                      const price = parseCurrencyValue(rate.price);
                      const trayLabel = index === 0 ? copy.oldBalls : copy.newBalls;
                      const note = index === 0 ? copy.valueTrayNote : copy.premiumTrayNote;

                      return (
                        <div key={rate.type} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white/75 sm:text-sm">
                              {trayLabel}
                            </p>
                            <p className="text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-white/55 sm:text-[0.58rem]">
                              {copy.standardRate}
                            </p>
                          </div>
                          <p className="text-[1.65rem] font-black tracking-tight sm:text-3xl">
                            {`฿${price.toLocaleString(locale)} ${copy.trayRateSuffix}`}
                          </p>
                          <p className="max-w-[26ch] text-[0.68rem] leading-snug text-white/60 sm:text-[0.72rem]">
                            {note} • {copy.noMembershipRequired}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {localizedMembershipCards.map((card, index) => {
              const delayClass = membershipCardDelayClasses[index % membershipCardDelayClasses.length];

              return (
                <div key={card.translationKey} className={`space-y-4 reveal reveal-up ${delayClass}`}>
                  <article className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_24px_60px_rgba(0,0,0,0.34)]">
                    <div className="relative text-white">
                      <div className="relative h-full min-h-[260px]">
                        <VideoPlayer
                          src={card.video}
                          poster={card.image}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <Image
                          src={card.image}
                          alt={card.copy.title}
                          fill
                          className="absolute inset-0 w-full h-full object-cover opacity-0"
                          aria-hidden="true"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/18 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
                          <div className="flex items-start justify-between gap-4">
                            <p className="label-accent">{t.membership.cardLabel}</p>
                            <span className="rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-white/78 backdrop-blur-md sm:px-3 sm:text-[0.58rem]">
                              {card.translationKey === 'gold' ? copy.newBalls : copy.oldBalls}
                            </span>
                          </div>
                          <div className="max-w-sm flex flex-col items-start gap-2">
                            <h3 className="text-[clamp(1.7rem,2.6vw,2.15rem)] font-black tracking-tight">{card.copy.title}</h3>
                            <div className="h-px w-12 bg-gradient-to-r from-[var(--accent)] via-white/70 to-transparent" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative border-t border-white/10">
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.18),rgba(255,255,255,0.05))] backdrop-blur-md" />
                      <div className="relative space-y-4 p-5">
                        <div className="flex items-start justify-between gap-3">
                          <p className="max-w-[16rem] text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-[0.62rem] sm:tracking-[0.24em]">
                            {card.copy.membershipTag}
                          </p>
                          <p className="shrink-0 text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-white/52 sm:text-[0.62rem] sm:tracking-[0.28em]">
                            {copy.bestValue}
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {card.packages.map((pkg, idx) => {
                            const packageAmount = parseCurrencyValue(pkg.package);
                            const trayRate = parseCurrencyValue(pkg.rate);
                            const trayCount = packageAmount && trayRate ? Math.round(packageAmount / trayRate) : null;
                            const standardRate = card.translationKey === 'gold' ? 50 : 40;
                            const standardTrayCount = packageAmount && standardRate ? Math.floor(packageAmount / standardRate) : null;
                            const freeTrays = trayCount !== null && standardTrayCount !== null ? Math.max(trayCount - standardTrayCount, 0) : null;
                            const isSelected = selectedMembershipPackages[card.translationKey] === idx;
                            
return (
                              <button
                                type="button"
                                key={`${card.translationKey}-${pkg.package}`}
                                onClick={() =>
                                  setSelectedMembershipPackages(current => ({
                                    ...current,
                                    [card.translationKey]: idx
                                  }))
                                }
                                className={`rounded-[22px] border px-4 py-4 text-left backdrop-blur transition-all duration-300 ${
                                  isSelected
                                    ? 'border-[var(--accent)] bg-[linear-gradient(180deg,rgba(185,28,28,0.18),rgba(255,255,255,0.08))] shadow-[0_18px_38px_rgba(0,0,0,0.22)]'
                                    : 'border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))]'
                                }`}
                              >
                                <div className="space-y-4">
                                  <div className="space-y-1 text-center">
                                    {trayCount ? (
                                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/78 sm:text-[0.66rem]">
                                        {trayCount} {copy.trays}
                                      </p>
                                    ) : null}
                                    <p className="whitespace-nowrap text-[1.2rem] font-black tracking-tight text-white sm:text-[1.55rem] lg:text-[1.65rem]">
                                      {`฿${trayRate.toLocaleString(locale)} ${copy.trayRateSuffix}`}
                                    </p>
                                  </div>
                                  <div className="rounded-[16px] border border-white/10 bg-black/12 px-3 py-3 text-center">
                                    {isSelected && freeTrays ? (
                                      <p className="text-[0.52rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)] sm:text-[0.6rem]">
                                        {freeTrays} {copy.freeTrays}
                                      </p>
                                    ) : null}
                                    <p className="mt-2 text-[0.48rem] font-semibold uppercase tracking-[0.14em] text-white/45 sm:text-[0.55rem] sm:tracking-[0.18em]">
                                      {copy.total}
                                    </p>
                                    <p
                                      className={`mt-1 text-[0.9rem] font-black tracking-tight sm:text-[1rem] ${
                                        isSelected ? 'text-[var(--accent)]' : 'text-white/72'
                                      }`}
                                    >
                                      {`฿${packageAmount.toLocaleString(locale)}`}
                                    </p>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="heritage" className="section-anchor w-full bg-[#F7F7F5] text-[#1C1C1A]">
        <div className="grid w-full items-stretch gap-5 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-0 lg:py-0">
          <div className="relative order-1 h-[260px] overflow-hidden reveal reveal-left reveal-delay-1 lg:h-[360px]">
            <VideoPlayer
              src="/images/Msportheritagehome.mp4"
              poster="/images/Msportheritagehome.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <Image
              src="/images/Msportheritagehome.png"
              alt="Msport heritage"
              width={900}
              height={600}
              className="h-full w-full object-cover opacity-0"
              aria-hidden="true"
              loading="lazy"
            />
            <div className="overlay-fade" />
          </div>

          <div className="order-2 flex items-center px-6 pb-2 lg:px-10 lg:py-6 xl:px-14">
            <div className="mx-auto w-full max-w-xl space-y-3.5">
              <p className="section-label reveal reveal-down reveal-delay-1">{t.heritage.eyebrow}</p>
              <h2 className="text-[clamp(2.7rem,5vw,4.4rem)] font-black uppercase leading-[0.92] tracking-tight text-[#1C1C1A] reveal reveal-up reveal-delay-2">
                {t.heritage.title}
              </h2>
              <p className="label-accent reveal reveal-up reveal-delay-3">{t.heritage.subtitle}</p>
              <p className="max-w-[32rem] text-[0.98rem] leading-relaxed text-[#3A3A36]/80 reveal reveal-up reveal-delay-4 md:text-[1.08rem]">
                {t.heritage.description}
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1C1C1A] transition-all duration-300 hover:translate-x-1 hover:text-[var(--accent)] reveal reveal-up reveal-delay-5 md:text-base"
              >
                <span className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                  {t.heritage.cta}
                </span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-anchor section-matcha py-24 w-full border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 space-y-8">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="space-y-6 text-[#1C1C1A]">
              <div className="space-y-4">
                <p className="section-label reveal reveal-down reveal-delay-1">{t.expansion.label}</p>
                <h2 className="text-[clamp(2.8rem,5.2vw,4.5rem)] font-black uppercase leading-[0.92] tracking-tight text-[#1C1C1A] reveal reveal-up reveal-delay-2">
                  {t.expansion.title}
                </h2>
                <p className="label-muted reveal reveal-up reveal-delay-3">{t.expansion.subtitle}</p>
              </div>
              <p className="text-base leading-relaxed text-[#3A3A36] reveal reveal-up reveal-delay-4">{t.expansion.description}</p>
              <Link
                href="/locations"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1C1C1A] transition-all duration-300 hover:translate-x-1 hover:text-[var(--accent)] reveal reveal-up reveal-delay-5 md:text-base"
              >
                <span className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                  {t.expansion.cta}
                </span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            <div className="space-y-6">
              <div className="relative h-[280px] overflow-hidden rounded-[28px] border border-white/20 shadow-[0_35px_90px_rgba(0,0,0,0.35)] reveal reveal-up reveal-delay-3">
                <VideoPlayer
                  src="/images/the%20expansion.mp4"
                  poster="/images/the%20expansion.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="overlay-soft" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="section-anchor section-cream py-24 w-full border-t border-[#706C61]/10">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 space-y-10">
          <SectionHeader label={t.news.section.label} title={copy.latestNewsTitle} subtitle={t.news.section.subtitle} />

          <div className="grid gap-10 md:grid-cols-3">
            {localizedNewsItems.slice(0, 3).map((item, index) => {
              const delayClass = newsCardDelayClasses[index % newsCardDelayClasses.length];

              return (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className={`group block h-full rounded-[12px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1C1A]/20 reveal reveal-up ${delayClass}`}
                >
                  <article className="h-full overflow-hidden rounded-[12px] border border-[#DCD8CF] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)] flex flex-col transition-all duration-500 ease-out transform-gpu group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-[0_24px_58px_rgba(0,0,0,0.14)]">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/40" aria-hidden="true" />
                    </div>
                    <div className="p-6 flex flex-col gap-4 text-left flex-1 transition-transform duration-500 group-hover:-translate-y-1">
                      <div className="flex items-center justify-between text-[0.58rem] uppercase tracking-[0.4em]">
                        <span className="text-[#8f8f8f]">{item.badge}</span>
                        <span className="text-[var(--accent)]">{item.date}</span>
                      </div>
                      <h3 className="text-[1.35rem] leading-[1.2] font-black text-[#151515]">{item.title}</h3>
                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#2d2d2d] transition-colors duration-300 group-hover:text-[var(--accent)]">
                        <span aria-hidden="true">→</span>
                        <span className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                          {t.news.cardCta}
                        </span>
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Link
              href="/news"
              className="group inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#1C1C1A] transition-all duration-300 hover:translate-x-1 hover:text-[var(--accent)] reveal reveal-up reveal-delay-4"
            >
              <span className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                {t.news.cta}
              </span>
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
