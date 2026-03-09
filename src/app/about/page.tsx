"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Target, Layers3, Building2, ShieldCheck } from 'lucide-react';

import { SectionHeader } from '@/components/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

const aboutLoopImages = Array.from({ length: 10 }, (_, index) =>
  `/images/AboutUsLoop/AboutUsLoop${String(index + 1).padStart(2, '0')}.png`
);

const aboutCopy = {
  EN: {
    hero: {
      label: 'ABOUT MSPORT',
      title: ['ABOUT', 'US'],
      description: 'The standards, discipline, and environment that shaped Msport from day one.'
    },
    origin: {
      label: 'Origin & Foundation',
      title: 'Built for Golfers',
      subtitle: 'No distractions. Only performance.',
      paragraphs: [
        'We did not build Msport to be another range. We built it because golf deserves better environments.',
        'Better spacing. Better sightlines. Better flow.',
        'From the first day in 2018 the idea was simple: if it helps you improve, it stays. If it distracts you, it is gone.',
        'That discipline built the place you see today.'
      ]
    },
    loopAlt: 'Msport community and facility montage',
    standard: {
      label: 'The Msport Standard',
      title: 'What to Expect',
      subtitle: 'Always-on service, every visit.',
      pillars: [
        {
          title: 'Always Ready',
          paragraphs: ['Rain or sun, you walk in and play.', 'A bay is waiting.']
        },
        {
          title: 'Fully Equipped',
          paragraphs: ['Pro shops, simulators, coaching,', 'plus food and drinks, all in one place.']
        },
        {
          title: 'Open to All',
          paragraphs: ['New to the game or preparing to compete,', 'you belong here.']
        },
        {
          title: 'Built to Last',
          paragraphs: ['Designed to run smoothly,', 'no matter the hour.']
        }
      ]
    },
    roadAhead: {
      label: 'The Road Ahead',
      title: 'Built to Grow Carefully',
      subtitle: 'Expansion follows discipline.',
      description:
        'Expansion follows the same discipline that built the first range. No dilution. No shortcuts. If a new footprint carries the standard forward, it moves ahead. If not, it waits.'
    }
  },
  TH: {
    hero: {
      label: 'เกี่ยวกับ MSPORT',
      title: ['เกี่ยวกับ', 'เรา'],
      description: 'มาตรฐาน วินัย และบรรยากาศที่หล่อหลอม Msport มาตั้งแต่วันแรก'
    },
    origin: {
      label: 'จุดเริ่มต้น',
      title: 'สร้างขึ้นเพื่อคนรักกอล์ฟ',
      subtitle: 'ไม่มีสิ่งรบกวน มีแต่เรื่องการพัฒนา',
      paragraphs: [
        'Msport ไม่ได้ถูกสร้างขึ้นเพื่อเป็นแค่สนามไดร์ฟอีกแห่ง แต่ถูกสร้างขึ้นเพราะกอล์ฟควรมีสภาพแวดล้อมที่ดีกว่านี้',
        'พื้นที่ที่ดีขึ้น มุมมองที่ดีขึ้น และการไหลลื่นที่ดีกว่า',
        'ตั้งแต่วันแรกในปี 2018 แนวคิดของเราชัดเจนมาก ถ้าสิ่งไหนช่วยให้ผู้เล่นพัฒนาได้ มันจะอยู่ ถ้าสิ่งไหนรบกวน มันจะถูกตัดออก',
        'วินัยแบบนั้นคือสิ่งที่สร้าง Msport ในแบบที่คุณเห็นวันนี้'
      ]
    },
    loopAlt: 'บรรยากาศผู้เล่นและพื้นที่ของ Msport',
    standard: {
      label: 'มาตรฐานของ Msport',
      title: 'สิ่งที่คุณจะสัมผัส',
      subtitle: 'บริการพร้อมเสมอ ทุกครั้งที่เข้ามา',
      pillars: [
        {
          title: 'พร้อมเสมอ',
          paragraphs: ['ฝนตกหรือแดดออก คุณก็เดินเข้ามาเล่นได้เลย', 'มีพื้นที่รอคุณอยู่']
        },
        {
          title: 'ครบในที่เดียว',
          paragraphs: ['โปรช็อป ซิมูเลเตอร์ โค้ช', 'อาหารและเครื่องดื่ม อยู่ในคอมเพล็กซ์เดียวกัน']
        },
        {
          title: 'เปิดรับทุกคน',
          paragraphs: ['ไม่ว่าคุณจะเพิ่งเริ่มหรือกำลังเตรียมแข่ง', 'ที่นี่ก็พร้อมต้อนรับ']
        },
        {
          title: 'ออกแบบให้ใช้งานได้จริง',
          paragraphs: ['ทุกอย่างถูกออกแบบให้ไหลลื่น', 'ไม่ว่าเข้ามาเวลาไหน']
        }
      ]
    },
    roadAhead: {
      label: 'ก้าวต่อไป',
      title: 'เติบโตอย่างมีวินัย',
      subtitle: 'การขยายตัวต้องรักษามาตรฐาน',
      description:
        'ทุกการขยายตัวของ Msport จะใช้วินัยเดียวกับที่สร้างสนามแรกขึ้นมา ไม่มีการลดมาตรฐาน ไม่มีทางลัด ถ้าพื้นที่ใหม่สามารถส่งต่อมาตรฐานนี้ได้ เราจึงเดินต่อ ถ้ายังไม่ได้ เราจะรอ'
    }
  },
  KO: {
    hero: {
      label: 'ABOUT MSPORT',
      title: ['회사', '소개'],
      description: '첫날부터 Msport를 만든 기준과 규율, 그리고 환경을 소개합니다.'
    },
    origin: {
      label: '기원과 기반',
      title: '골퍼를 위해 설계된 공간',
      subtitle: '방해 없이, 오직 퍼포먼스만.',
      paragraphs: [
        'Msport는 단순한 또 하나의 레인지를 만들기 위해 시작되지 않았습니다. 골프에는 더 나은 환경이 필요하다고 믿었기 때문입니다.',
        '더 나은 간격, 더 나은 시야, 더 나은 흐름.',
        '2018년 첫날부터 원칙은 분명했습니다. 실력 향상에 도움이 되면 남기고, 방해가 되면 없앤다.',
        '그 규율이 지금의 Msport를 만들었습니다.'
      ]
    },
    loopAlt: 'Msport 커뮤니티와 시설 몽타주',
    standard: {
      label: 'Msport 기준',
      title: '기대할 수 있는 것',
      subtitle: '항상 준비된 서비스, 매번의 방문마다.',
      pillars: [
        { title: '항상 준비', paragraphs: ['비가 오든 해가 뜨든 바로 들어와 플레이할 수 있습니다.', '항상 자리가 기다리고 있습니다.'] },
        { title: '모든 것이 한곳에', paragraphs: ['프로숍, 시뮬레이터, 코칭,', '음식과 음료까지 모두 한 캠퍼스 안에 있습니다.'] },
        { title: '누구에게나 열려 있음', paragraphs: ['이제 막 시작했든 대회를 준비하든,', '이곳은 모두를 환영합니다.'] },
        { title: '오래도록 유지되는 공간', paragraphs: ['어느 시간에 와도 부드럽게 운영되도록', '처음부터 설계되었습니다.'] }
      ]
    },
    roadAhead: {
      label: '앞으로의 방향',
      title: '신중하게 성장합니다',
      subtitle: '확장도 같은 규율로.',
      description:
        '확장도 첫 레인지를 만든 것과 같은 규율 위에서만 진행됩니다. 기준을 낮추지 않고, 지름길도 없습니다. 같은 수준을 유지할 수 있을 때만 앞으로 나아갑니다.'
    }
  },
  ZH: {
    hero: {
      label: '关于 MSPORT',
      title: ['关于', '我们'],
      description: '从第一天起塑造 Msport 的标准、纪律与环境。'
    },
    origin: {
      label: '起点与基础',
      title: '为球手而建',
      subtitle: '没有干扰，只有表现。',
      paragraphs: [
        'Msport 不是为了再做一个普通练习场而存在，而是因为我们相信高尔夫值得拥有更好的环境。',
        '更好的空间，更好的视线，更好的动线。',
        '从 2018 年开业第一天起，原则就很清楚：有助于进步的留下，会造成干扰的移除。',
        '这样的纪律塑造了你今天看到的 Msport。'
      ]
    },
    loopAlt: 'Msport 社区与设施影像',
    standard: {
      label: 'Msport 标准',
      title: '你可以期待什么',
      subtitle: '始终在线的服务，每一次到访都是如此。',
      pillars: [
        { title: '随时就绪', paragraphs: ['晴天雨天都可以直接进来打球。', '总有打位在等你。'] },
        { title: '完整配套', paragraphs: ['专业商店、模拟器、教学，', '加上餐饮，全都在同一处。'] },
        { title: '对所有人开放', paragraphs: ['无论是刚接触高尔夫，还是在准备比赛，', '这里都欢迎你。'] },
        { title: '为长期运营而建', paragraphs: ['整个空间都为顺畅运作而设计，', '无论你几点来。'] }
      ]
    },
    roadAhead: {
      label: '未来方向',
      title: '谨慎地成长',
      subtitle: '扩张也遵循同样的纪律。',
      description:
        '未来扩张也会遵循打造第一家练习场时的同样纪律。不稀释标准，不走捷径。只有当新的空间能延续同样水准时，我们才会继续向前。'
    }
  },
  JA: {
    hero: {
      label: 'ABOUT MSPORT',
      title: ['私たち', 'について'],
      description: 'Msport を形づくった基準、規律、そして環境を紹介します。'
    },
    origin: {
      label: '原点と基盤',
      title: 'ゴルファーのために設計',
      subtitle: '余計なものはなく、あるのはパフォーマンスだけ。',
      paragraphs: [
        'Msport は、ただの練習場をもう一つ作るために始まったのではありません。ゴルフにはもっと良い環境が必要だと考えたからです。',
        'より良い間隔、より良い視界、より良い導線。',
        '2018年の最初の日から、考え方はシンプルでした。上達に役立つものは残し、邪魔になるものはなくす。',
        'その規律が、今の Msport を形づくりました。'
      ]
    },
    loopAlt: 'Msport のコミュニティと施設のモンタージュ',
    standard: {
      label: 'Msport スタンダード',
      title: 'ここで得られるもの',
      subtitle: 'いつ来ても変わらない、整ったサービス。',
      pillars: [
        { title: 'いつでも準備完了', paragraphs: ['雨でも晴れでも、そのまま入ってプレーできます。', '常に打席が待っています。'] },
        { title: 'すべてが揃う', paragraphs: ['プロショップ、シミュレーター、コーチング、', 'そしてフード＆ドリンクまで一か所に。'] },
        { title: '誰でも歓迎', paragraphs: ['これから始める人も、試合を目指す人も、', 'ここには居場所があります。'] },
        { title: '長く機能する設計', paragraphs: ['どの時間帯でもスムーズに機能するよう', '最初から設計されています。'] }
      ]
    },
    roadAhead: {
      label: 'これから先へ',
      title: '丁寧に成長する',
      subtitle: '拡張にも同じ規律を。',
      description:
        '拡張も、最初のレンジを作ったときと同じ規律に従います。基準は薄めず、近道もしません。同じ水準を保てるときだけ次へ進みます。'
    }
  }
} as const;

export default function AboutPage() {
  const definesRef = useRef<HTMLElement>(null);
  const [definesPosition, setDefinesPosition] = useState({ x: 50, y: 20 });
  const [definesActive, setDefinesActive] = useState(false);
  const { language } = useLanguage();
  const copy = aboutCopy[language];

  const handleDefinesMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = definesRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setDefinesPosition({ x, y });
    if (!definesActive) {
      setDefinesActive(true);
    }
  };

  const handleDefinesLeave = () => {
    setDefinesPosition({ x: 50, y: 20 });
    setDefinesActive(false);
  };

  return (
    <main className="min-h-screen">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-black md:h-[55vh] md:min-h-[420px]">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover object-[center_35%]">
          <source src="/images/Abouthero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/48 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center gap-3 px-6 text-center text-white md:gap-4 lg:px-12">
          <p className="accent-pill reveal reveal-down">{copy.hero.label}</p>
          <h1 className="hero-title reveal reveal-up text-white">
            <span className="block">{copy.hero.title[0]}</span>
            <span className="block whitespace-nowrap">{copy.hero.title[1]}</span>
          </h1>
          <p className="reveal reveal-up reveal-delay-1 max-w-2xl text-[0.92rem] leading-relaxed text-white/78 sm:text-base">
            {copy.hero.description}
          </p>
        </div>
      </section>

      <section className="section-cream py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-6 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10">
          <div className="space-y-6 text-[#3A3A36]">
            <SectionHeader
              label={copy.origin.label}
              title={<span className="text-[#1C1C1A]">{copy.origin.title}</span>}
              subtitle={copy.origin.subtitle}
              align="left"
            />
            <div className="space-y-3 text-base leading-relaxed md:space-y-4 md:text-lg">
              {copy.origin.paragraphs.map(paragraph => (
                <p key={paragraph} className="reveal reveal-up reveal-delay-3">{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-[#E3E3E0] shadow-none reveal reveal-left reveal-delay-1 md:rounded-[32px] md:shadow-[0_25px_65px_rgba(34,34,34,0.16)]">
            <div className="relative w-full aspect-[4/3]">
              <Image src="/images/Msportheritagehome.png" alt="Msport range foundation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FAF2E5]">
        <div className="relative">
          <div className="flex w-max flex-nowrap animate-marquee-seamless-top" style={{ gap: 0 }}>
            {[0, 1].map(setIndex =>
              aboutLoopImages.map(image => (
                <Image
                  key={`${image}-${setIndex}`}
                  src={image}
                  alt={copy.loopAlt}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="block h-48 w-auto flex-shrink-0 object-cover sm:h-64"
                />
              ))
            )}
          </div>
        </div>
      </section>

      <section
        ref={definesRef}
        className="relative w-full bg-[#1C1C1A] text-white border-t border-white/5 overflow-hidden"
        onMouseMove={handleDefinesMove}
        onMouseLeave={handleDefinesLeave}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute h-[220px] w-[300px] rounded-full bg-[radial-gradient(circle,_rgba(185,28,28,0.5)_0%,_rgba(28,28,26,0)_60%)] blur-[70px]"
            style={{
              left: `${definesPosition.x}%`,
              top: `${definesPosition.y}%`,
              transform: 'translate(-50%, -50%)',
              opacity: definesActive ? 1 : 0,
              transition: 'opacity 300ms ease'
            }}
          />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 space-y-8 lg:px-10 md:py-20 md:space-y-12">
          <SectionHeader
            label={copy.standard.label}
            title={<span className="text-white">{copy.standard.title}</span>}
            subtitle={copy.standard.subtitle}
            align="center"
            subtitleClassName="subtitle-accent text-white/80"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {[{
              title: copy.standard.pillars[0].title,
              icon: Target,
              paragraphs: copy.standard.pillars[0].paragraphs
            }, {
              title: copy.standard.pillars[1].title,
              icon: Layers3,
              paragraphs: copy.standard.pillars[1].paragraphs
            }, {
              title: copy.standard.pillars[2].title,
              icon: Building2,
              paragraphs: copy.standard.pillars[2].paragraphs
            }, {
              title: copy.standard.pillars[3].title,
              icon: ShieldCheck,
              paragraphs: copy.standard.pillars[3].paragraphs
            }].map((pillar, index) => {
              const Icon = pillar.icon;
              const delayClass = `reveal-delay-${Math.min(index + 1, 4)}`;
              
              return (
                <div key={pillar.title} className={`group block h-full reveal reveal-up ${delayClass}`}>
                  <article className="relative h-full min-h-[200px] overflow-hidden rounded-[24px] border border-white/12 bg-gradient-to-b from-white/12 via-white/6 to-transparent px-5 py-6 shadow-none backdrop-blur-md transition-all duration-500 ease-out transform-gpu group-hover:-translate-y-3 group-hover:rotate-1 md:min-h-[220px] md:rounded-[26px] md:px-6 md:py-8 md:shadow-[0_30px_85px_rgba(0,0,0,0.45)] md:group-hover:shadow-[0_40px_110px_rgba(0,0,0,0.55)]">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18)_0%,_transparent_60%)]" />
                    </div>
                    <div className="absolute inset-x-[-40%] top-[-120%] h-[260%] rotate-6 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" aria-hidden="true" />

                    <div className="flex h-full flex-col gap-3 md:gap-4">
                      <div className="flex items-center justify-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 md:h-10 md:w-10">
                          <Icon className="h-4.5 w-4.5 text-[var(--accent)] md:h-5 md:w-5" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="space-y-2 transition-transform duration-500 group-hover:-translate-y-1 md:space-y-3">
                        <h3 className="min-h-[3.25rem] text-center text-[1.1rem] font-black leading-[1.15] text-white md:min-h-[3.5rem] md:text-xl">{pillar.title}</h3>
                        <div className="mx-auto h-[1px] w-16 bg-gradient-to-r from-[#b91c1c] via-[#ef4444] to-transparent opacity-80 transition-all duration-500 group-hover:w-20" />
                      </div>
                      <div className="mt-auto min-h-[4.6rem] space-y-1 text-center text-[0.82rem] leading-tight text-white/80 md:min-h-[5rem] md:text-sm">
                        {pillar.paragraphs.map(text => (
                          <p key={text}>{text}</p>
                        ))}
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-transparent transition-colors duration-500 group-hover:border-white/30" aria-hidden="true" />
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-cream py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl space-y-5 px-6 lg:px-10 md:space-y-6">
          <SectionHeader
            label={copy.roadAhead.label}
            title={<span className="text-[#1C1C1A]">{copy.roadAhead.title}</span>}
            subtitle={copy.roadAhead.subtitle}
            align="left"
          />
          <p className="text-base leading-relaxed text-[#3A3A36]/85 reveal reveal-up reveal-delay-3 md:text-lg">
            {copy.roadAhead.description}
          </p>
        </div>
      </section>
    </main>
  );
}
