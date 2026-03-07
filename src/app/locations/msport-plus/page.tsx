import Link from 'next/link';
import { getServerLanguage } from '@/lib/i18n';

const msportPlusCopy = {
  EN: {
    hero: {
      label: 'The Future of Msport',
      title: ['MSPORT+', 'NEXT FLAGSHIP'],
      description: 'A preview of the expanded Msport experience with deeper retail, tech, and social space.'
    },
    intro: {
      label: 'Preview',
      title: 'Expanded culture, deeper performance.',
      description:
        'Msport+ introduces a multi-level experience blending advanced tech labs, social lounges, curated retail, and chef-led F&B for a full-day destination.'
    },
    features: [
      { title: 'Retail Gallery', detail: 'Limited capsules, fittings, and custom builds.' },
      { title: 'TrackMan Labs', detail: 'Dedicated data studios with concierge support.' },
      { title: 'Social Wing', detail: 'Chef-led lounge, mixology, and private suites.' },
      { title: 'Performance Atelier', detail: 'Thai PGA coaching, recovery, and tech integrations.' }
    ],
    cta: {
      label: 'Stay informed',
      title: 'Launching soon in Chiang Mai.',
      description: 'Join the waitlist to receive Msport+ construction updates, membership details, and opening privileges.',
      button: 'Follow Updates'
    }
  },
  TH: {
    hero: {
      label: 'อนาคตของ Msport',
      title: ['MSPORT+', 'แฟลกชิปถัดไป'],
      description: 'ภาพรวมของประสบการณ์ Msport รุ่นถัดไปที่มีทั้งรีเทล เทคโนโลยี และโซนโซเชียลที่มากขึ้น'
    },
    intro: {
      label: 'พรีวิว',
      title: 'วัฒนธรรมที่ขยายขึ้น ประสิทธิภาพที่ลึกขึ้น',
      description:
        'Msport+ จะเป็นประสบการณ์แบบหลายชั้นที่รวมแล็บเทคโนโลยี เลานจ์ รีเทลคัดสรร และอาหารเครื่องดื่มระดับปลายทางไว้ในที่เดียว'
    },
    features: [
      { title: 'Retail Gallery', detail: 'แคปซูลคอลเลกชัน ฟิตติ้ง และงานคัสตอมที่เลือกมาอย่างตั้งใจ' },
      { title: 'TrackMan Labs', detail: 'สตูดิโอข้อมูลเฉพาะทางพร้อมบริการคอนเซียร์จ' },
      { title: 'Social Wing', detail: 'เลานจ์อาหารและเครื่องดื่ม พร้อมห้องส่วนตัว' },
      { title: 'Performance Atelier', detail: 'โค้ช Thailand PGA รีคัฟเวอรี และเทคโนโลยีประสิทธิภาพ' }
    ],
    cta: {
      label: 'ติดตามข่าวสาร',
      title: 'เปิดตัวเร็ว ๆ นี้ในเชียงใหม่',
      description: 'ลงชื่อรอรับอัปเดตก่อสร้าง รายละเอียดสมาชิก และสิทธิพิเศษช่วงเปิดตัวของ Msport+',
      button: 'ติดตามความคืบหน้า'
    }
  },
  KO: {
    hero: {
      label: 'Msport의 미래',
      title: ['MSPORT+', 'NEXT FLAGSHIP'],
      description: '더 깊어진 리테일, 기술, 소셜 공간을 담은 확장된 Msport 경험의 프리뷰입니다.'
    },
    intro: {
      label: 'Preview',
      title: '확장된 문화, 더 깊은 퍼포먼스.',
      description:
        'Msport+는 첨단 테크 랩, 소셜 라운지, 큐레이션 리테일, 셰프 주도 F&B를 결합한 멀티레벨 경험입니다.'
    },
    features: [
      { title: 'Retail Gallery', detail: '한정 컬렉션, 피팅, 커스텀 빌드를 한곳에.' },
      { title: 'TrackMan Labs', detail: '컨시어지 지원이 포함된 데이터 스튜디오.' },
      { title: 'Social Wing', detail: '셰프 라운지, 믹솔로지, 프라이빗 스위트.' },
      { title: 'Performance Atelier', detail: 'Thai PGA 코칭, 리커버리, 테크 통합.' }
    ],
    cta: {
      label: 'Stay informed',
      title: '치앙마이에서 곧 시작됩니다.',
      description: 'Msport+ 공사 업데이트, 멤버십 정보, 오픈 혜택을 받아보세요.',
      button: '업데이트 보기'
    }
  },
  ZH: {
    hero: {
      label: 'Msport 的未来',
      title: ['MSPORT+', 'NEXT FLAGSHIP'],
      description: '预览一个拥有更大零售、更强科技与更多社交空间的 Msport 新体验。'
    },
    intro: {
      label: '预览',
      title: '更丰富的文化，更深入的表现。',
      description:
        'Msport+ 将以多层空间融合先进技术实验室、社交休息区、精选零售与主厨主导的餐饮体验。'
    },
    features: [
      { title: 'Retail Gallery', detail: '限量系列、配杆与定制服务。' },
      { title: 'TrackMan Labs', detail: '配有礼宾支持的数据工作室。' },
      { title: 'Social Wing', detail: '主厨餐饮、酒吧与私密套房。' },
      { title: 'Performance Atelier', detail: 'Thailand PGA 教学、恢复与科技整合。' }
    ],
    cta: {
      label: '关注更新',
      title: '即将在清迈登场。',
      description: '加入等待名单，接收 Msport+ 工程进度、会员信息与开业权益。',
      button: '查看更新'
    }
  },
  JA: {
    hero: {
      label: 'Msport の未来',
      title: ['MSPORT+', 'NEXT FLAGSHIP'],
      description: 'より深いリテール、テクノロジー、ソーシャル空間を備えた新しい Msport 体験のプレビューです。'
    },
    intro: {
      label: 'Preview',
      title: '広がるカルチャー、深まるパフォーマンス。',
      description:
        'Msport+ は先進テックラボ、ソーシャルラウンジ、厳選リテール、シェフ主導の F&B を融合したマルチレベル体験です。'
    },
    features: [
      { title: 'Retail Gallery', detail: '限定カプセル、フィッティング、カスタムビルド。' },
      { title: 'TrackMan Labs', detail: 'コンシェルジュ付きのデータスタジオ。' },
      { title: 'Social Wing', detail: 'シェフラウンジ、ミクソロジー、プライベートスイート。' },
      { title: 'Performance Atelier', detail: 'Thai PGA コーチング、回復、テクノロジー統合。' }
    ],
    cta: {
      label: '最新情報を受け取る',
      title: 'チェンマイでまもなく始動。',
      description: 'Msport+ の建設状況、メンバーシップ情報、オープン特典を受け取りましょう。',
      button: 'アップデートを見る'
    }
  }
} as const;

export default async function MsportPlusPage() {
  const language = await getServerLanguage();
  const copy = msportPlusCopy[language];

  return (
    <main className="bg-[#040404] text-[#F5F1E6] min-h-screen">
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" poster="/images/Srixonnewballs.png">
          <source src="/images/drivingrangeMSPORT.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/46 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/56 via-transparent to-transparent" />
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
        <div className="mx-auto w-full max-w-5xl space-y-8 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">{copy.intro.label}</p>
          <h2 className="text-[clamp(2.4rem,5vw,3.8rem)] font-black text-white">{copy.intro.title}</h2>
          <p className="text-lg text-white/75 max-w-3xl mx-auto">
            {copy.intro.description}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl grid gap-6 md:grid-cols-2">
          {copy.features.map(feature => (
            <article key={feature.title} className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8 space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">{feature.title}</p>
              <p className="text-lg text-white/80">{feature.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t border-white/10">
        <div className="mx-auto w-full max-w-4xl text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">{copy.cta.label}</p>
          <h3 className="text-[clamp(2rem,4vw,3rem)] font-black text-white">{copy.cta.title}</h3>
          <p className="text-white/70">{copy.cta.description}</p>
          <Link
            href="/news"
            className="inline-flex items-center justify-center accent-bg px-10 py-4 rounded-xl font-semibold text-base"
          >
            {copy.cta.button}
          </Link>
        </div>
      </section>
    </main>
  );
}
