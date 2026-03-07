import Image from 'next/image';
import Link from 'next/link';
import { Clock3, PhoneCall, Mail } from 'lucide-react';

import { SectionHeader } from '@/components/SectionHeader';
import { getServerLanguage } from '@/lib/i18n';

const simLoopImages = Array.from({ length: 9 }, (_, index) =>
  `/images/SIM/Simloop/Simloop${String(index + 1).padStart(2, '0')}.png`
);

const academyLoopImages = Array.from({ length: 8 }, (_, index) =>
  `/images/Academy/academyloop/academyloop${String(index + 1).padStart(2, '0')}.png`
);

const contactCopy = {
  EN: {
    hero: {
      label: 'Visit Msport',
      title: ['CONTACT', 'US'],
      description: 'Practical information for the range, simulator suites, and academy in one place.'
    },
    range: {
      label: 'Driving Range',
      title: 'Msport Complex',
      subtitle: 'Flagship range information, contact details, and arrival essentials.',
      hoursLabel: 'Hours',
      hours: 'Daily · 08:00 – 22:00',
      phoneLabel: 'Phone',
      phoneValue: '+66 87 419 9199',
      emailLabel: 'Email',
      emailValue: 'msportcomplex@hotmail.com',
      mapTitle: 'Msport Driving Range map'
    },
    simulators: {
      label: 'Simulators',
      title: 'TrackMan Booking',
      subtitle: 'For private-room reservations, group bookings, and same-day availability.',
      loopAlt: 'TrackMan simulator experience montage',
      contacts: [
        { label: 'Hours', value: 'Daily · 10:00 – 22:00', helper: 'After 20:00, book at least one day in advance.' },
        { label: 'Phone', value: '065 134 7777', helper: 'Best for quick confirmations and same-day slot checks.', href: 'tel:+66651347777' },
        { label: 'Email', value: 'msport.golfsimulator@gmail.com', helper: 'Best for advance bookings and private groups.', href: 'mailto:msport.golfsimulator@gmail.com' }
      ]
    },
    academy: {
      label: 'Academy',
      title: 'Golf Academy Contact',
      subtitle: 'Reach the academy team directly for lesson planning, scheduling, and coaching enquiries.',
      loopAlt: 'Msport Golf Academy training montage',
      contacts: [
        { label: 'Hours', value: 'Daily · 10:00 – 20:00', helper: 'Open daily for academy lessons and student sessions.' },
        { label: 'Phone', value: '065 134 7777', helper: 'Best for quick questions and lesson scheduling.', href: 'tel:+66651347777' },
        { label: 'Email', value: 'msportgolfacademy@gmail.com', helper: 'Best for detailed requests and coaching plans.', href: 'mailto:msportgolfacademy@gmail.com' }
      ]
    }
  },
  TH: {
    hero: {
      label: 'ข้อมูลการติดต่อ',
      title: ['ติดต่อ', 'เรา'],
      description: 'รวมข้อมูลสำคัญของสนามไดร์ฟ ห้องซิมูเลเตอร์ และอะคาเดมีไว้ในหน้าเดียว.'
    },
    range: {
      label: 'สนามไดร์ฟ',
      title: 'Msport Complex',
      subtitle: 'ข้อมูลสนามหลัก ช่องทางติดต่อ และรายละเอียดการเดินทางในหน้าเดียว.',
      hoursLabel: 'เวลาเปิดบริการ',
      hours: 'ทุกวัน · 08:00 – 22:00',
      phoneLabel: 'โทรศัพท์',
      phoneValue: '+66 87 419 9199',
      emailLabel: 'อีเมล',
      emailValue: 'msportcomplex@hotmail.com',
      mapTitle: 'แผนที่ Msport Driving Range'
    },
    simulators: {
      label: 'ซิมูเลเตอร์',
      title: 'ติดต่อห้อง TrackMan',
      subtitle: 'สำหรับการจองห้องส่วนตัว กลุ่มลูกค้า และการเช็กคิวแบบวันเดียวกัน.',
      loopAlt: 'บรรยากาศการใช้งานห้องซิมูเลเตอร์ TrackMan',
      contacts: [
        { label: 'เวลาเปิดบริการ', value: 'ทุกวัน · 10:00 – 22:00', helper: 'หลัง 20:00 ต้องจองล่วงหน้าอย่างน้อย 1 วัน.' },
        { label: 'โทรศัพท์', value: '065 134 7777', helper: 'เหมาะสำหรับคอนเฟิร์มเร็วและเช็กคิววันเดียวกัน.', href: 'tel:+66651347777' },
        { label: 'อีเมล', value: 'msport.golfsimulator@gmail.com', helper: 'เหมาะสำหรับการจองล่วงหน้าและกลุ่มส่วนตัว.', href: 'mailto:msport.golfsimulator@gmail.com' }
      ]
    },
    academy: {
      label: 'อะคาเดมี',
      title: 'ติดต่ออะคาเดมี',
      subtitle: 'ติดต่อทีมอะคาเดมีโดยตรงสำหรับการวางแผนคอร์ส ตารางเรียน และคำถามเกี่ยวกับการสอน.',
      loopAlt: 'บรรยากาศการฝึกซ้อมของ Msport Golf Academy',
      contacts: [
        { label: 'เวลาเปิดบริการ', value: 'ทุกวัน · 10:00 – 20:00', helper: 'เปิดทุกวันสำหรับคอร์สเรียนและเวลาฝึกของนักเรียน.' },
        { label: 'โทรศัพท์', value: '065 134 7777', helper: 'เหมาะสำหรับคำถามด่วนและการนัดหมายเรียน.', href: 'tel:+66651347777' },
        { label: 'อีเมล', value: 'msportgolfacademy@gmail.com', helper: 'เหมาะสำหรับคำขอแบบละเอียดและแผนการฝึก.', href: 'mailto:msportgolfacademy@gmail.com' }
      ]
    }
  },
  KO: {
    hero: {
      label: '방문 정보',
      title: ['문의', '하기'],
      description: '레인지, 시뮬레이터, 아카데미 정보를 한 페이지에서 확인하세요.'
    },
    range: {
      label: '드라이빙 레인지',
      title: 'Msport Complex',
      subtitle: '플래그십 레인지 정보와 연락처, 방문 기본 정보를 정리했습니다.',
      hoursLabel: '운영 시간',
      hours: '매일 · 08:00 – 22:00',
      phoneLabel: '전화',
      phoneValue: '+66 87 419 9199',
      emailLabel: '이메일',
      emailValue: 'msportcomplex@hotmail.com',
      mapTitle: 'Msport Driving Range 지도'
    },
    simulators: {
      label: '시뮬레이터',
      title: 'TrackMan 문의',
      subtitle: '프라이빗 룸 예약, 그룹 문의, 당일 가능 여부를 위한 연락처입니다.',
      loopAlt: 'TrackMan 시뮬레이터 경험 몽타주',
      contacts: [
        { label: '운영 시간', value: '매일 · 10:00 – 22:00', helper: '20:00 이후는 최소 하루 전 예약이 필요합니다.' },
        { label: '전화', value: '065 134 7777', helper: '빠른 확인과 당일 슬롯 문의에 적합합니다.', href: 'tel:+66651347777' },
        { label: '이메일', value: 'msport.golfsimulator@gmail.com', helper: '사전 예약과 그룹 문의에 가장 적합합니다.', href: 'mailto:msport.golfsimulator@gmail.com' }
      ]
    },
    academy: {
      label: '아카데미',
      title: '아카데미 문의',
      subtitle: '레슨 계획, 일정 조율, 코칭 문의를 위해 아카데미 팀에 직접 연락하세요.',
      loopAlt: 'Msport Golf Academy 트레이닝 몽타주',
      contacts: [
        { label: '운영 시간', value: '매일 · 10:00 – 20:00', helper: '아카데미 레슨과 학생 세션을 위해 매일 운영합니다.' },
        { label: '전화', value: '065 134 7777', helper: '빠른 질문과 레슨 일정 조율에 적합합니다.', href: 'tel:+66651347777' },
        { label: '이메일', value: 'msportgolfacademy@gmail.com', helper: '상세 문의와 코칭 플랜 상담용입니다.', href: 'mailto:msportgolfacademy@gmail.com' }
      ]
    }
  },
  ZH: {
    hero: {
      label: '联系与到访',
      title: ['联系', '我们'],
      description: '在一个页面内查看练习场、模拟器与学院的实用联系信息。'
    },
    range: {
      label: '练习场',
      title: 'Msport Complex',
      subtitle: '旗舰练习场的联系方式、开放时间与到访要点都在这里。',
      hoursLabel: '营业时间',
      hours: '每日 · 08:00 – 22:00',
      phoneLabel: '电话',
      phoneValue: '+66 87 419 9199',
      emailLabel: '邮箱',
      emailValue: 'msportcomplex@hotmail.com',
      mapTitle: 'Msport Driving Range 地图'
    },
    simulators: {
      label: '模拟器',
      title: 'TrackMan 联系方式',
      subtitle: '用于私密房预订、团体预订和当天空位确认。',
      loopAlt: 'TrackMan 模拟器体验影像',
      contacts: [
        { label: '营业时间', value: '每日 · 10:00 – 22:00', helper: '20:00 之后需至少提前一天预约。' },
        { label: '电话', value: '065 134 7777', helper: '适合快速确认与当天时段查询。', href: 'tel:+66651347777' },
        { label: '邮箱', value: 'msport.golfsimulator@gmail.com', helper: '适合提前预订与团体安排。', href: 'mailto:msport.golfsimulator@gmail.com' }
      ]
    },
    academy: {
      label: '学院',
      title: '学院联系方式',
      subtitle: '关于课程规划、时间安排与教学咨询，请直接联系学院团队。',
      loopAlt: 'Msport Golf Academy 训练影像',
      contacts: [
        { label: '营业时间', value: '每日 · 10:00 – 20:00', helper: '学院课程与学员训练每天开放。' },
        { label: '电话', value: '065 134 7777', helper: '适合快速问题与课程预约。', href: 'tel:+66651347777' },
        { label: '邮箱', value: 'msportgolfacademy@gmail.com', helper: '适合详细咨询与教学计划。', href: 'mailto:msportgolfacademy@gmail.com' }
      ]
    }
  },
  JA: {
    hero: {
      label: 'アクセス情報',
      title: ['お問い合わせ', 'はこちら'],
      description: 'レンジ、シミュレーター、アカデミーの実用的な連絡先をまとめました。'
    },
    range: {
      label: 'ドライビングレンジ',
      title: 'Msport Complex',
      subtitle: '旗艦レンジの営業時間、連絡先、来場情報をここに集約しています。',
      hoursLabel: '営業時間',
      hours: '毎日 · 08:00 – 22:00',
      phoneLabel: '電話',
      phoneValue: '+66 87 419 9199',
      emailLabel: 'メール',
      emailValue: 'msportcomplex@hotmail.com',
      mapTitle: 'Msport Driving Range マップ'
    },
    simulators: {
      label: 'シミュレーター',
      title: 'TrackMan 予約連絡先',
      subtitle: 'プライベートルーム予約、グループ予約、当日空き確認にご利用ください。',
      loopAlt: 'TrackMan シミュレーター体験モンタージュ',
      contacts: [
        { label: '営業時間', value: '毎日 · 10:00 – 22:00', helper: '20:00 以降は少なくとも1日前の予約が必要です。' },
        { label: '電話', value: '065 134 7777', helper: '素早い確認や当日枠の相談に適しています。', href: 'tel:+66651347777' },
        { label: 'メール', value: 'msport.golfsimulator@gmail.com', helper: '事前予約と団体利用に最適です。', href: 'mailto:msport.golfsimulator@gmail.com' }
      ]
    },
    academy: {
      label: 'アカデミー',
      title: 'アカデミー連絡先',
      subtitle: 'レッスンプラン、スケジュール調整、コーチング相談はアカデミーチームへ直接ご連絡ください。',
      loopAlt: 'Msport Golf Academy トレーニングモンタージュ',
      contacts: [
        { label: '営業時間', value: '毎日 · 10:00 – 20:00', helper: 'アカデミーレッスンと受講生セッションのため毎日営業しています。' },
        { label: '電話', value: '065 134 7777', helper: '簡単な質問やレッスン予約向けです。', href: 'tel:+66651347777' },
        { label: 'メール', value: 'msportgolfacademy@gmail.com', helper: '詳細相談やコーチングプラン向けです。', href: 'mailto:msportgolfacademy@gmail.com' }
      ]
    }
  }
} as const;

export default async function ContactPage() {
  const language = await getServerLanguage();
  const copy = contactCopy[language];

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#1B1B1A]">
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('/images/baylayoutvisual.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/46 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/56 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center gap-4 px-6 text-center text-white lg:px-12">
          <p className="accent-pill reveal reveal-down text-[#1B1B1A]">{copy.hero.label}</p>
          <h1 className="hero-title reveal reveal-up text-white">
            <span className="block">{copy.hero.title[0]}</span>
            <span className="block whitespace-nowrap">{copy.hero.title[1]}</span>
          </h1>
          <p className="reveal reveal-up reveal-delay-1 max-w-2xl text-sm leading-relaxed text-white/78 sm:text-base">
            {copy.hero.description}
          </p>
        </div>
      </section>

      <section id="range" className="section-cream scroll-mt-28 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[34px] bg-[#1B1B1A] p-7 text-white shadow-[0_28px_70px_rgba(0,0,0,0.18)] sm:p-8">
              <SectionHeader
                label={copy.range.label}
                title={<span className="text-white">{copy.range.title}</span>}
                subtitle={copy.range.subtitle}
                align="left"
                subtitleClassName="subtitle-accent text-white/72"
              />
              <div className="mt-8 space-y-5">
                <div className="rounded-[26px] border border-white/10 bg-white/6 p-5 reveal reveal-up reveal-delay-2">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 h-5 w-5 text-[var(--accent)]" />
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.35em] text-white/45">{copy.range.hoursLabel}</p>
                      <p className="mt-2 text-lg font-black text-white">{copy.range.hours}</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-3">
                  <Link
                    href="tel:+66874199199"
                    className="group rounded-[24px] border border-white/12 bg-white/7 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/10 reveal reveal-up reveal-delay-3"
                  >
                    <div className="flex items-start gap-3">
                      <PhoneCall className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                      <div>
                        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.35em] text-white/45">{copy.range.phoneLabel}</p>
                        <p className="mt-2 text-sm font-semibold text-white transition-colors group-hover:text-white">{copy.range.phoneValue}</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="mailto:msportcomplex@hotmail.com"
                    className="group rounded-[24px] border border-white/12 bg-white/7 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/10 reveal reveal-up reveal-delay-4"
                  >
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                      <div>
                        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.35em] text-white/45">{copy.range.emailLabel}</p>
                        <p className="mt-2 break-words text-sm font-semibold text-white transition-colors group-hover:text-white">{copy.range.emailValue}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] reveal reveal-up reveal-delay-2 lg:h-full">
              <iframe
                title={copy.range.mapTitle}
                src="https://www.google.com/maps?q=M%20Sport%20Driving%20Range%2C%20188%20Moo%203%2C%20San%20Klang%2C%20San%20Kamphaeng%2C%20Chiang%20Mai%2050130&z=15&output=embed"
                className="h-[420px] w-full border-0 lg:h-full lg:min-h-[100%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#1B1B1A]">
        <div className="relative">
          <div className="flex w-max flex-nowrap animate-marquee-seamless-top" style={{ gap: 0 }}>
            {[0, 1].map(setIndex =>
              simLoopImages.map(image => (
                <Image
                  key={`${image}-${setIndex}`}
                  src={image}
                  alt={copy.simulators.loopAlt}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="block h-48 w-auto flex-shrink-0 object-cover sm:h-56"
                />
              ))
            )}
          </div>
        </div>
      </section>

      <section id="simulators" className="bg-[#1B1B1A] scroll-mt-28 py-16 sm:py-20 text-white">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {copy.simulators.contacts.map((item, index) => (
                <article
                  key={item.label}
                  className={`rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-5 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] reveal reveal-up reveal-delay-${Math.min(index + 1, 3)}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/6">
                      {index === 0 ? <Clock3 className="h-6 w-6 text-[var(--accent)]" /> : index === 1 ? <PhoneCall className="h-6 w-6 text-[var(--accent)]" /> : <Mail className="h-6 w-6 text-[var(--accent)]" />}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.35em] text-white/45">{item.label}</p>
                      {'href' in item && item.href ? (
                        <Link href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="mt-3 block break-words text-lg font-black text-white transition-colors hover:text-[var(--accent)] sm:text-xl">
                          {item.value}
                        </Link>
                      ) : (
                        <p className="mt-3 text-lg font-black text-white sm:text-xl">{item.value}</p>
                      )}
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">{item.helper}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="rounded-[34px] border border-white/10 bg-white/5 p-7 shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:p-8">
              <SectionHeader
                label={copy.simulators.label}
                title={<span className="text-white">{copy.simulators.title}</span>}
                subtitle={copy.simulators.subtitle}
                align="left"
                subtitleClassName="subtitle-accent text-white/78"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F7F5F0]">
        <div className="relative">
          <div className="flex w-max flex-nowrap animate-marquee-seamless-top" style={{ gap: 0 }}>
            {[0, 1].map(setIndex =>
              academyLoopImages.map(image => (
                <Image
                  key={`${image}-${setIndex}`}
                  src={image}
                  alt={copy.academy.loopAlt}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="block h-48 w-auto flex-shrink-0 object-cover sm:h-56"
                />
              ))
            )}
          </div>
        </div>
      </section>

      <section id="academy" className="section-cream scroll-mt-28 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[34px] bg-[#F0EBE2] p-7 shadow-[0_20px_54px_rgba(0,0,0,0.05)] sm:p-8">
              <SectionHeader
                label={copy.academy.label}
                title={<span className="text-[#1B1B1A]">{copy.academy.title}</span>}
                subtitle={copy.academy.subtitle}
                align="left"
              />
            </div>
            <div className="space-y-4">
              {copy.academy.contacts.map((item, index) => (
                <article
                  key={item.label}
                  className={`rounded-[30px] border border-[#E3DED3] bg-white px-5 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] reveal reveal-up reveal-delay-${Math.min(index + 1, 3)}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#E6DED2] bg-[#F7F5F0]">
                      {index === 0 ? <Clock3 className="h-6 w-6 text-[var(--accent)]" /> : index === 1 ? <PhoneCall className="h-6 w-6 text-[var(--accent)]" /> : <Mail className="h-6 w-6 text-[var(--accent)]" />}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.35em] text-[#7A7468]">{item.label}</p>
                      {'href' in item && item.href ? (
                        <Link
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="mt-3 block break-words text-lg font-black text-[#1B1B1A] transition-colors hover:text-[var(--accent)] sm:text-xl"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="mt-3 text-lg font-black text-[#1B1B1A] sm:text-xl">{item.value}</p>
                      )}
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#4A473F]">{item.helper}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
