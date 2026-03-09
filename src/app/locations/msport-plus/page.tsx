import Link from 'next/link';
import Image from 'next/image';
import { Building2, Cpu, Sparkles, Store } from 'lucide-react';
import { getServerLanguage } from '@/lib/i18n';
import { SectionHeader } from '@/components/SectionHeader';

const msportPlusCopy = {
  EN: {
    hero: {
      label: 'The Future of Msport',
      title: ['MSPORT+', 'COMING SOON'],
      description: 'A preview of the expanded Msport experience with deeper retail, tech, and social space.'
    },
    intro: {
      label: 'Current Phase',
      title: 'The Build',
      subtitle: 'A larger footprint, built with the same discipline.',
      description:
        'Msport+ is being shaped as a more expansive destination with stronger architecture, longer dwell time, and a cleaner mix of performance, retail, and hospitality.'
    },
    future: {
      label: 'Next Phase',
      title: 'The Future',
      subtitle: 'Designed for the next chapter of the campus.',
      description:
        'The next phase extends the Msport standard into a broader social and technical environment, with more room for premium services, sharper programming, and longer visits.'
    },
    retail: {
      label: 'Retail Opportunity',
      title: 'Retail Space',
      subtitle: 'Built for golf, lifestyle, and high-frequency daily traffic.',
      description: [
        'Msport+ is being positioned as a mixed-use destination for golf retail, cafes, coaching, services, and community-facing businesses.',
        'The project sits in a strong everyday catchment near schools, family traffic, and active lifestyle demand, giving the right tenants the chance to become part of a destination that is designed to stay busy beyond golf alone. A limited number of units are still available for lease.'
      ],
      contact: 'Call 065 134 1111'
    },
    features: [
      { title: 'Golf Retail', detail: 'Shops for golf, sport, and apparel brands.' },
      { title: 'Food & Service', detail: 'Cafes, restaurants, and service concepts.' },
      { title: 'Academy & Fitness', detail: 'Coaching, studios, tutoring, and wellness.' },
      { title: 'Strong Catchment', detail: 'Students, families, athletes, and professionals.' }
    ],
    lease: {
      label: 'Retail Opportunity',
      title: 'A limited number of units are still available for lease.'
    },
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
      title: ['MSPORT+', 'เร็ว ๆ นี้'],
      description: 'ภาพรวมของประสบการณ์ Msport รุ่นถัดไปที่มีทั้งรีเทล เทคโนโลยี และโซนโซเชียลที่มากขึ้น'
    },
    intro: {
      label: 'เฟสปัจจุบัน',
      title: 'การก่อสร้าง',
      subtitle: 'พื้นที่ที่ใหญ่ขึ้น พร้อมวินัยแบบเดิมของ Msport',
      description:
        'Msport+ กำลังถูกพัฒนาให้เป็นปลายทางที่กว้างขึ้น ทั้งในด้านสถาปัตยกรรม เวลาที่ผู้คนใช้ภายในพื้นที่ และการผสานระหว่างเพอร์ฟอร์แมนซ์ รีเทล และฮอสพิทาลิตี้'
    },
    future: {
      label: 'เฟสถัดไป',
      title: 'อนาคต',
      subtitle: 'ออกแบบเพื่อบทถัดไปของแคมปัส',
      description:
        'เฟสถัดไปจะขยายมาตรฐานของ Msport ไปสู่สภาพแวดล้อมที่ครบขึ้นทั้งด้านสังคมและเทคโนโลยี พร้อมพื้นที่สำหรับบริการพรีเมียม โปรแกรมที่ชัดขึ้น และการใช้เวลาในคอมเพล็กซ์ที่ยาวนานขึ้น'
    },
    retail: {
      label: 'โอกาสเช่าพื้นที่',
      title: 'พื้นที่เช่า',
      subtitle: 'ออกแบบมาเพื่อกอล์ฟ ไลฟ์สไตล์ และทราฟฟิกประจำวัน',
      description: [
        'Msport+ กำลังถูกวางให้เป็นปลายทางแบบมิกซ์ยูสสำหรับร้านกอล์ฟ คาเฟ่ อะคาเดมี และธุรกิจบริการที่เข้ากับคอมมูนิตี้',
        'ทำเลนี้ยังอยู่ใกล้โรงเรียน ทราฟฟิกครอบครัว และกลุ่มลูกค้าที่ใช้ชีวิตเชิงแอคทีฟ จึงเปิดโอกาสให้ผู้เช่าที่เหมาะสมได้อยู่ในพื้นที่ที่ไม่ได้พึ่งกอล์ฟเพียงอย่างเดียวในการสร้างทราฟฟิก โดยยังมีบางยูนิตที่เปิดให้เช่าอยู่ในขณะนี้'
      ],
      contact: 'โทร 065 134 1111'
    },
    features: [
      { title: 'กอล์ฟรีเทล', detail: 'ร้านกอล์ฟ สปอร์ต และแบรนด์เครื่องแต่งกาย' },
      { title: 'อาหารและบริการ', detail: 'คาเฟ่ ร้านอาหาร และธุรกิจบริการ' },
      { title: 'อะคาเดมีและฟิตเนส', detail: 'โค้ช สตูดิโอ ฟิตเนส และคลาสเรียน' },
      { title: 'ทำเลศักยภาพสูง', detail: 'นักเรียน ครอบครัว นักกีฬา และคนทำงาน' }
    ],
    lease: {
      label: 'โอกาสเช่าพื้นที่',
      title: 'ยังมีบางยูนิตที่เปิดให้เช่าอยู่ในขณะนี้'
    },
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
      title: ['MSPORT+', 'COMING SOON'],
      description: '더 깊어진 리테일, 기술, 소셜 공간을 담은 확장된 Msport 경험의 프리뷰입니다.'
    },
    intro: {
      label: '현재 단계',
      title: '건설',
      subtitle: '더 큰 공간, 같은 규율.',
      description:
        'Msport+는 더 넓은 건축 스케일과 더 긴 체류 경험, 그리고 퍼포먼스·리테일·호스피탈리티의 더 정교한 구성을 갖춘 목적지로 준비되고 있습니다.'
    },
    future: {
      label: '다음 단계',
      title: '미래',
      subtitle: '캠퍼스의 다음 장을 위해 설계됩니다.',
      description:
        '다음 단계는 Msport의 기준을 더 넓은 소셜·테크 환경으로 확장하며, 프리미엄 서비스와 정교한 프로그램, 더 긴 방문 경험을 담아냅니다.'
    },
    retail: {
      label: 'Retail Opportunity',
      title: '임대 공간',
      subtitle: '골프와 라이프스타일, 일상 유동을 함께 담는 구성입니다.',
      description: [
        'Msport+는 골프 리테일, 카페, 코칭, 서비스, 커뮤니티형 비즈니스를 위한 복합 목적지로 계획되고 있습니다.',
        '학교와 가족 수요, 액티브 라이프스타일 고객층이 만나는 입지이기 때문에, 적합한 테넌트는 골프만이 아닌 일상 유동까지 함께 가져갈 수 있습니다. 현재 일부 유닛은 아직 임대 가능합니다.'
      ],
      contact: '문의 065 134 1111'
    },
    features: [
      { title: '골프 리테일', detail: '골프, 스포츠, 어패럴 브랜드를 위한 공간.' },
      { title: '푸드 & 서비스', detail: '카페, 레스토랑, 서비스 업종.' },
      { title: '아카데미 & 피트니스', detail: '코칭, 스튜디오, 피트니스, 교육.' },
      { title: '강한 생활권', detail: '학생, 가족, 운동선수, 직장인 수요.' }
    ],
    lease: {
      label: 'Retail Opportunity',
      title: '일부 리테일 유닛은 아직 임대 가능합니다.'
    },
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
      title: ['MSPORT+', '即将推出'],
      description: '预览一个拥有更大零售、更强科技与更多社交空间的 Msport 新体验。'
    },
    intro: {
      label: '当前阶段',
      title: '建设',
      subtitle: '更大的体量，延续同样的纪律。',
      description:
        'Msport+ 正在被打造为一个更完整的目的地，在建筑尺度、停留时间，以及表现、零售与餐饮的组合上都更进一步。'
    },
    future: {
      label: '下一阶段',
      title: '未来',
      subtitle: '为园区的下一阶段而设计。',
      description:
        '下一阶段将把 Msport 的标准延伸到更完整的社交与技术环境中，为高端服务、更清晰的项目规划和更长的停留体验预留空间。'
    },
    retail: {
      label: '租赁机会',
      title: '租赁铺位',
      subtitle: '面向高尔夫、生活方式与高频日常客流而打造。',
      description: [
        'Msport+ 正在被规划为一个适合高尔夫零售、咖啡餐饮、教学与服务业态的复合型目的地。',
        '项目周边拥有学校、家庭客流与活跃生活方式人群，这意味着合适的品牌不仅能接触高尔夫客群，也能获得稳定的日常到访流量。目前仍有少量铺位可供租赁。'
      ],
      contact: '致电 065 134 1111'
    },
    features: [
      { title: '高尔夫零售', detail: '高尔夫、运动与服饰品牌空间。' },
      { title: '餐饮与服务', detail: '咖啡、餐饮与服务业态。' },
      { title: '学院与健身', detail: '教学、工作室、健身与培训。' },
      { title: '优质客群', detail: '学生、家庭、运动人群与职场客群。' }
    ],
    lease: {
      label: '租赁机会',
      title: '目前仍有少量商铺单元可供租赁。'
    },
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
      title: ['MSPORT+', 'COMING SOON'],
      description: 'より深いリテール、テクノロジー、ソーシャル空間を備えた新しい Msport 体験のプレビューです。'
    },
    intro: {
      label: '現在のフェーズ',
      title: '建設',
      subtitle: 'より大きく、それでも同じ規律で。',
      description:
        'Msport+ は、より大きな建築スケール、より長い滞在体験、そしてパフォーマンス・リテール・ホスピタリティをより洗練して組み合わせた新しい拠点として準備されています。'
    },
    future: {
      label: '次のフェーズ',
      title: '未来',
      subtitle: 'キャンパスの次章のために設計。',
      description:
        '次のフェーズでは Msport の基準を、より広いソーシャル・テクノロジー環境へと拡張し、プレミアムサービスと明確なプログラム、より長い滞在時間を実現します。'
    },
    retail: {
      label: 'Retail Opportunity',
      title: '賃貸区画',
      subtitle: 'ゴルフ、ライフスタイル、日常利用を支える立地です。',
      description: [
        'Msport+ はゴルフリテール、カフェ、コーチング、各種サービスに向けた複合型デスティネーションとして計画されています。',
        '学校やファミリー層、アクティブな生活者が集まる立地のため、適したテナントはゴルフ来場者だけでなく日常的な集客も見込めます。現在も一部区画は賃貸可能です。'
      ],
      contact: '電話 065 134 1111'
    },
    features: [
      { title: 'ゴルフ小売', detail: 'ゴルフ、スポーツ、アパレル向け区画。' },
      { title: '飲食・サービス', detail: 'カフェ、飲食、サービス業態。' },
      { title: 'アカデミー・フィットネス', detail: 'コーチング、スタジオ、フィットネス、教育。' },
      { title: '強い商圏', detail: '学生、家族、アスリート、ビジネス層。' }
    ],
    lease: {
      label: 'Retail Opportunity',
      title: '現在、いくつかのショップ区画はまだ賃貸可能です。'
    },
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
  const isThai = language === 'TH';
  const copy = msportPlusCopy[language];
  const featureIcons = [Store, Cpu, Sparkles, Building2] as const;

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#1C1C1A]">
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" poster="/images/Srixonnewballs.png">
          <source src="/images/Msport.webm" type="video/webm" />
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

      <section className="section-cream border-t border-[#DED8CC] px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="space-y-5">
            <SectionHeader
              label={copy.intro.label}
              title={<span className="text-[#1C1C1A]">{copy.intro.title}</span>}
              subtitle={copy.intro.subtitle}
              align="left"
              subtitleClassName="subtitle-accent text-[#4A473F]"
            />
            <p className="max-w-2xl text-base leading-relaxed text-[#4A473F] reveal reveal-up reveal-delay-3 lg:text-lg">
              {copy.intro.description}
            </p>
          </div>
          <div className="overflow-hidden rounded-[30px] border border-[#DDD6C8] bg-white shadow-[0_22px_60px_rgba(0,0,0,0.08)] reveal reveal-right reveal-delay-2">
            <div className="relative min-h-[240px]">
              <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
                <source src="/images/Msport+/msportbuild.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-smoke border-t border-white/8 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:gap-10">
          <div className="reveal reveal-left reveal-delay-2">
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[240px] overflow-hidden rounded-[30px]">
              <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
                <source src="/images/Msport+/msportrobot.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
            </div>
          </div>
          <div className="space-y-5">
            <SectionHeader
              label={copy.future.label}
              title={<span className="text-white">{copy.future.title}</span>}
              subtitle={copy.future.subtitle}
              align="left"
              subtitleClassName="subtitle-accent text-white/70"
            />
            <p className="max-w-2xl text-base leading-relaxed text-white/72 reveal reveal-up reveal-delay-3 lg:text-lg">
              {copy.future.description}
            </p>
          </div>
        </div>
      </section>

      <section className="section-cream border-t border-[#DED8CC] px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:gap-10">
            <div className="space-y-5">
              <div className="space-y-2">
                <p className={`section-label reveal reveal-down ${isThai ? 'tracking-[0.12em] leading-[1.3]' : ''}`}>{copy.retail.label}</p>
                <h2 className={`section-title reveal reveal-up text-[#1C1C1A] ${isThai ? 'text-[clamp(2.35rem,4.8vw,3.85rem)] leading-[1.14] tracking-[-0.01em]' : ''}`}>{copy.retail.title}</h2>
                <p className="subtitle-accent reveal reveal-up reveal-delay-2 text-[#4A473F]">{copy.retail.subtitle}</p>
              </div>
              <div className="max-w-2xl space-y-4 text-base leading-relaxed text-[#4A473F] reveal reveal-up reveal-delay-3 lg:text-lg">
                {copy.retail.description.map(paragraph => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="reveal reveal-up reveal-delay-4">
                <Link
                  href="tel:0651341111"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d90b0b]"
                >
                  {copy.retail.contact}
                </Link>
              </div>
            </div>
            <div className="space-y-4 reveal reveal-right reveal-delay-2">
              <div className="overflow-hidden rounded-[32px] border border-[#DDD6C8] bg-white shadow-[0_22px_60px_rgba(0,0,0,0.08)]">
                <div className="relative min-h-[360px]">
                  <Image
                    src="/images/Msport+/shopforrent.png"
                    alt={copy.lease.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
                {copy.features.map((feature, index) => {
                  const Icon = featureIcons[index] ?? Store;

                  return (
                    <article
                      key={feature.title}
                      className={`rounded-[22px] border border-[#DED6C9] bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.05)] reveal reveal-up reveal-delay-${Math.min(index + 1, 4)} flex flex-col items-center justify-center space-y-3 text-center`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DED2] bg-[#F7F5F0]">
                        <Icon className="h-4.5 w-4.5 text-[var(--accent)]" aria-hidden="true" />
                      </div>
                      <p className={`text-[0.68rem] font-semibold text-[#1C1C1A] ${isThai ? 'leading-snug tracking-[0.08em]' : 'uppercase tracking-[0.22em]'}`}>{feature.title}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 px-6 py-16 lg:px-12 lg:py-20">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" poster="/images/Srixonnewballs.png">
          <source src="/images/Msport.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/56 to-black/62" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-4xl space-y-6 text-center text-white">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-white/72">{copy.cta.label}</p>
          <h3 className="text-[clamp(2rem,4vw,3rem)] font-black text-white">{copy.cta.title}</h3>
          <p className="text-white/78">{copy.cta.description}</p>
          <Link
            href="/news"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d90b0b]"
          >
            {copy.cta.button}
          </Link>
        </div>
      </section>
    </main>
  );
}
