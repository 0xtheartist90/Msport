import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import FacilityGallery from '@/components/FacilityGallery';
import { getServerLanguage } from '@/lib/i18n';
import { getLocalizedFacilityBySlug, getLocalizedFacilityDirectory } from '@/lib/localized-content';

interface FacilityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const infoLabelClasses = 'text-xs uppercase tracking-[0.35em] text-[var(--accent)]';

const facilityDetailCopy = {
  EN: {
    back: 'Back to Facilities',
    aboutLabel: 'About',
    aboutTitlePrefix: 'Inside',
    services: 'Services',
    visitLabel: 'Visit Details',
    visitTitle: 'Plan Your Stop',
    location: 'Location',
    hours: 'Hours',
    phone: 'Phone',
    email: 'Email',
    contact: 'Contact',
    facebook: 'Facebook',
    visitPage: 'Visit page',
    otherFacilities: 'Other Facilities'
  },
  TH: {
    back: 'กลับไปหน้าสิ่งอำนวยความสะดวก',
    aboutLabel: 'เกี่ยวกับ',
    aboutTitlePrefix: 'ภายใน',
    services: 'บริการ',
    visitLabel: 'ข้อมูลการมาใช้บริการ',
    visitTitle: 'วางแผนการแวะมา',
    location: 'ตำแหน่ง',
    hours: 'เวลาเปิดบริการ',
    phone: 'โทรศัพท์',
    email: 'อีเมล',
    contact: 'ติดต่อ',
    facebook: 'Facebook',
    visitPage: 'เปิดหน้าเพจ',
    otherFacilities: 'สิ่งอำนวยความสะดวกอื่น ๆ'
  },
  KO: {
    back: '시설로 돌아가기',
    aboutLabel: '소개',
    aboutTitlePrefix: '',
    services: '서비스',
    visitLabel: '방문 정보',
    visitTitle: '방문 계획 세우기',
    location: '위치',
    hours: '운영 시간',
    phone: '전화',
    email: '이메일',
    contact: '문의',
    facebook: 'Facebook',
    visitPage: '페이지 보기',
    otherFacilities: '다른 시설'
  },
  ZH: {
    back: '返回设施页',
    aboutLabel: '关于',
    aboutTitlePrefix: '',
    services: '服务',
    visitLabel: '到访信息',
    visitTitle: '规划你的到访',
    location: '位置',
    hours: '营业时间',
    phone: '电话',
    email: '邮箱',
    contact: '联系',
    facebook: 'Facebook',
    visitPage: '访问页面',
    otherFacilities: '其他设施'
  },
  JA: {
    back: '施設一覧へ戻る',
    aboutLabel: '概要',
    aboutTitlePrefix: '',
    services: 'サービス',
    visitLabel: '来訪情報',
    visitTitle: '訪問を計画する',
    location: '場所',
    hours: '営業時間',
    phone: '電話',
    email: 'メール',
    contact: '連絡先',
    facebook: 'Facebook',
    visitPage: 'ページを見る',
    otherFacilities: 'その他の施設'
  }
} as const;

export default async function FacilityDetailPage({ params }: FacilityPageProps) {
  const language = await getServerLanguage();
  const copy = facilityDetailCopy[language];
  const { slug } = await params;
  const facility = getLocalizedFacilityBySlug(language, slug);

  if (!facility) {
    notFound();
  }

  const otherFacilities = getLocalizedFacilityDirectory(language)
    .filter(item => item.slug !== facility.slug)
    .sort((a, b) => {
      const aSame = a.category === facility.category;
      const bSame = b.category === facility.category;
      if (aSame === bSame) {
        return a.name.localeCompare(b.name);
      }

      return aSame ? -1 : 1;
    })
    .slice(0, 3);

  return (
    <main className="bg-[#F7F5F0] text-[#1F1D19] min-h-screen">
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Image src={facility.heroImage} alt={facility.name} fill className="object-cover" priority />
      </section>

      <div className="mx-auto max-w-6xl px-6 pt-6">
        <Link
          href="/facilities"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#403c34] transition-colors hover:text-[var(--accent)]"
        >
          ← {copy.back}
        </Link>
      </div>

      {facility.gallery?.length ? (
        <section className="px-6 lg:px-16 pt-10">
          <div className="mx-auto w-full max-w-6xl">
            <FacilityGallery images={facility.gallery} name={facility.name} />
          </div>
        </section>
      ) : null}

      <section className="px-6 lg:px-16 py-16">
        <div className="mx-auto w-full max-w-6xl grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[34px] border border-[#E2D9CC] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,242,235,0.94))] shadow-[0_22px_60px_rgba(0,0,0,0.08)]">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-6 sm:p-7">
                  <p className="text-[0.62rem] uppercase tracking-[0.42em] text-[var(--accent)]">{copy.aboutLabel}</p>
                  <h2 className="mt-3 text-3xl font-black text-[#1F1D19] sm:text-4xl">{copy.aboutTitlePrefix ? `${copy.aboutTitlePrefix} ${facility.name}` : facility.name}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#4C4A44]">{facility.summary}</p>
                </div>
                {facility.services?.length ? (
                  <div className="border-t border-[#E7DFD3] bg-[#FCFAF6] p-6 sm:p-7 lg:border-l lg:border-t-0">
                    <p className={infoLabelClasses}>{copy.services}</p>
                    <ul className="mt-4 flex flex-wrap gap-3">
                      {facility.services.map(service => (
                        <li
                          key={service}
                          className="rounded-full border border-[#E6DED2] bg-white px-4 py-2.5 text-sm font-semibold leading-relaxed text-[#312E29] shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#E1DED6] bg-[#1B1B1A] p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-7">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="space-y-2">
                  <p className="text-[0.62rem] uppercase tracking-[0.42em] text-[var(--accent)]">{copy.visitLabel}</p>
                  <h3 className="text-2xl font-black text-white">{copy.visitTitle}</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4">
                    <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/45">{copy.location}</p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-white/86">{facility.location}</p>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4">
                    <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/45">{copy.hours}</p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-white/86">{facility.hours}</p>
                  </div>
                  {facility.phone ? (
                    <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4">
                      <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/45">{copy.phone}</p>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-white/86">{facility.phone}</p>
                    </div>
                  ) : null}
                  {facility.email ? (
                    <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4">
                      <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/45">{copy.email}</p>
                      <p className="mt-2 break-words text-sm font-semibold leading-relaxed text-white/86">{facility.email}</p>
                    </div>
                  ) : null}
                  {!facility.phone && !facility.email && facility.contact ? (
                    <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 sm:col-span-2">
                      <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/45">{copy.contact}</p>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-white/86">{facility.contact}</p>
                    </div>
                  ) : null}
                  {facility.facebook ? (
                    <div className="rounded-[22px] border border-white/10 bg-black/16 px-4 py-4 sm:col-span-2">
                      <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/45">{copy.facebook}</p>
                      <Link
                        href={facility.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                      >
                        {copy.visitPage} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {otherFacilities.length ? (
              <aside className="space-y-4 lg:sticky lg:top-32 lg:h-fit lg:border-l lg:border-[#d0c8ba] lg:pl-10">
                <div className="space-y-1">
                  <p className="text-[0.6rem] uppercase tracking-[0.6em] text-[#5b554b]">{copy.otherFacilities}</p>
                  <div className="h-px w-8 bg-[#d9d1c1]" aria-hidden="true" />
                </div>
                {otherFacilities.map(other => (
                  <Link
                    key={other.slug}
                    href={`/facilities/${other.slug}`}
                    aria-label={other.name}
                    className="group block overflow-hidden rounded-[26px] border border-[#E3DED3] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,244,238,0.94))] p-4 shadow-[0_16px_38px_rgba(0,0,0,0.06)] ring-1 ring-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(0,0,0,0.1)]"
                  >
                    <div className="relative mb-4 h-32 w-full overflow-hidden rounded-[18px] border border-[#e7e2d8] bg-gradient-to-b from-[#f6f6f3] to-white">
                      <Image src={other.heroImage} alt={other.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-black tracking-tight text-[#1F1D19]">{other.name}</p>
                      <div className="h-px w-14 bg-gradient-to-r from-[var(--accent)] via-[#1F1D19]/30 to-transparent transition-all duration-500 group-hover:w-20" />
                    </div>
                  </Link>
                ))}
              </aside>
            ) : null}
          </div>
        </div>
      </section>

      <div className="pb-16" />
    </main>
  );
}
