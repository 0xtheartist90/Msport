export type LanguageCode = 'EN' | 'TH' | 'KO' | 'ZH' | 'JA';

export type RangeMetricTranslation = {
  value: string;
  label: string;
  detail: string;
  href: string;
};

export type TranslationContent = {
  nav: {
    links: {
      home: string;
      about: string;
      contact: string;
      facilities: string;
      simulators: string;
      academy: string;
      locations: string;
      news: string;
    };
    actions: {
      bookBay: string;
      bookSession: string;
    };
    languageLabel: string;
    languageNames: Record<LanguageCode, string>;
  };
  hero: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    primaryCta: string;
    secondaryCta: string;
  };
  usp: {
    campusLabel: string;
    metrics: RangeMetricTranslation[];
  };
  range: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    cards: {
      theRange: { title: string; subtitle: string; cta: string };
      facilities: { title: string; subtitle: string; cta: string };
      simulators: { title: string; subtitle: string; cta: string };
      coaching: { title: string; subtitle: string; cta: string };
    };
  };
  membership: {
    section: { label: string; title: string; subtitle: string };
    rangeSelection: { label: string; title: string; description: string[] };
    ratesLabel: string;
    cardLabel: string;
    cards: {
      pro: { title: string; subtitle: string; membershipTag: string };
      gold: { title: string; subtitle: string; membershipTag: string };
    };
  };
  heritage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  expansion: {
    label: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    footageLabel: string;
    footageTitle: string;
    footageMeta: string;
  };
  news: {
    section: { label: string; title: string; subtitle: string };
    cta: string;
    cardCta: string;
  };
};

export const translations: Record<LanguageCode, TranslationContent> = {
  EN: {
    nav: {
      links: {
        home: 'Home',
        about: 'About Us',
        contact: 'Contact',
        facilities: 'Facilities',
        simulators: 'Simulators',
        academy: 'Academy',
        locations: 'Msport+',
        news: 'News'
      },
      actions: {
        bookBay: 'Book a Bay',
        bookSession: 'Book Your Session'
      },
      languageLabel: 'Language',
      languageNames: {
        EN: 'English',
        TH: 'ไทย',
        KO: '한국어',
        ZH: '中文',
        JA: '日本語'
      }
    },
    hero: {
      label: 'The Msport Experience',
      titleLine1: 'MSPORT',
      titleLine2: 'Collective',
      primaryCta: 'Explore Msport+',
      secondaryCta: 'View Membership'
    },
    usp: {
      campusLabel: '',
      metrics: [
        { value: '8', label: 'Years', detail: 'Built in 2018', href: '/about' },
        { value: '68', label: 'Bays', detail: 'No waiting. Just swing.', href: '/contact' },
        { value: '10+', label: 'Shops', detail: 'Food · Pro Shop · Services', href: '/facilities' },
        { value: '3', label: 'Suites', detail: 'TrackMan Indoor Simulators', href: '/simulators' },
        { value: '7', label: 'Trainers', detail: 'Certified PGA Coaching', href: '/academy' }
      ]
    },
    range: {
      sectionLabel: 'The Msport Experience',
      title: 'Beyond Practice',
      subtitle: 'Open daily. Walk-ins welcome.',
      cards: {
        theRange: {
          title: 'The Range',
          subtitle: '388-yard playing field. See your full ball flight. No reservations. No waiting.',
          cta: 'Discover More'
        },
        facilities: {
          title: 'Eat. Shop. Relax.',
          subtitle: 'Everything you need — on site.',
          cta: 'Explore Facilities'
        },
        simulators: {
          title: 'TrackMan Suites',
          subtitle: 'Private data-driven rooms.',
          cta: 'Book'
        },
        coaching: {
          title: 'PGA Coaching',
          subtitle: 'Professional instruction daily.',
          cta: 'Learn More'
        }
      }
    },
    membership: {
      section: {
        label: 'Range Access',
        title: 'MEMBERSHIP',
        subtitle: 'Flexible trays or value-packed memberships.'
      },
      rangeSelection: {
        label: 'Range selection',
        title: 'Practice, Your Way',
        description: ['40 balls per tray. Fresh stock or value trays.', 'You choose how you train.']
      },
      ratesLabel: 'Standard rates',
      cardLabel: 'Membership card',
      cards: {
        pro: {
          title: 'Pro Golf',
          subtitle: 'Our red-tier card for players logging serious weekly hours on the range.',
          membershipTag: 'Old balls membership'
        },
        gold: {
          title: 'Gold Golf',
          subtitle: 'Gold-tier members stack perks, lounge access, and concierge bag service.',
          membershipTag: 'New balls membership'
        }
      }
    },
    heritage: {
      eyebrow: 'Where It Started',
      title: 'Since 2018',
      subtitle: 'Our Heritage',
      description:
        'From our grand opening in January 2018 to becoming Northern Thailand’s largest driving range, Msport continues to raise the standard for golf performance and lifestyle.',
      cta: 'Explore our story'
    },
    expansion: {
      label: 'Expansion',
      title: 'NOW EXPANDING',
      subtitle: 'The next chapter of Msport',
      description:
        'Msport+ is our next flagship campus. Expect a multi-level experience with chef-led dining, expanded TrackMan labs, and concierge-level service—minutes from the current range. Opening 2026.',
      cta: 'Explore Msport+',
      footageLabel: 'Expansion footage',
      footageTitle: 'Msport+ build preview',
      footageMeta: 'Captured on-site · February 2026'
    },
    news: {
      section: {
        label: 'News & Events',
        title: 'Latest News',
        subtitle: 'Direct updates from our community.'
      },
      cta: 'View All',
      cardCta: 'Read article'
    }
  },
  TH: {
    nav: {
      links: {
        home: 'หน้าแรก',
        about: 'เกี่ยวกับเรา',
        contact: 'ติดต่อ',
        facilities: 'สิ่งอำนวยความสะดวก',
        simulators: 'ซิมูเลเตอร์',
        academy: 'อะคาเดมี',
        locations: 'Msport+',
        news: 'ข่าวสาร'
      },
      actions: {
        bookBay: 'จองเลน',
        bookSession: 'จองรอบซ้อม'
      },
      languageLabel: 'ภาษา',
      languageNames: {
        EN: 'English',
        TH: 'ไทย',
        KO: '한국어',
        ZH: '中文',
        JA: '日本語'
      }
    },
    hero: {
      label: 'ประสบการณ์ Msport',
      titleLine1: 'MSPORT',
      titleLine2: 'คอลเลคทีฟ',
      primaryCta: 'สำรวจ Msport+',
      secondaryCta: 'ดูสมาชิก'
    },
    usp: {
      campusLabel: '',
      metrics: [
        { value: '8', label: 'ปี', detail: 'เปิดให้บริการปี 2018', href: '/about' },
        { value: '68', label: 'ช่องตี', detail: 'ไม่ต้องรอ แค่ออกรอบ', href: '/contact' },
        { value: '10+', label: 'ร้านค้า', detail: 'อาหาร · โปรช็อป · บริการ', href: '/facilities' },
        { value: '3', label: 'ห้อง', detail: 'ห้อง TrackMan ในร่ม', href: '/simulators' },
        { value: '7', label: 'โค้ช', detail: 'โค้ช PGA รับรอง', href: '/academy' }
      ]
    },
    range: {
      sectionLabel: 'ประสบการณ์ Msport',
      title: 'เหนือกว่าการซ้อม',
      subtitle: 'เปิดทุกวัน ต้อนรับลูกค้าวอล์กอิน',
      cards: {
        theRange: {
          title: 'The Range',
          subtitle: 'สนามยาว 388 หลา เห็นวิถีลูกเต็ม ๆ ไม่ต้องจอง ไม่ต้องรอ',
          cta: 'ดูรายละเอียด'
        },
        facilities: {
          title: 'กิน · ช้อป · ผ่อนคลาย',
          subtitle: 'ครบทุกอย่างในพื้นที่เดียว',
          cta: 'ชมสิ่งอำนวยความสะดวก'
        },
        simulators: {
          title: 'TrackMan Suites',
          subtitle: 'ห้องส่วนตัวพร้อมข้อมูลครบ',
          cta: 'จองเลย'
        },
        coaching: {
          title: 'PGA Coaching',
          subtitle: 'โค้ชมาตรฐานทุกวัน',
          cta: 'เรียนรู้เพิ่มเติม'
        }
      }
    },
    membership: {
      section: {
        label: 'สิทธิ์การใช้งานไดร์ฟเรนจ์',
        title: 'สมาชิก',
        subtitle: 'เลือกถาดเดี่ยวหรือแพ็กคุ้มค่า ออกแบบเพื่อการซ้อมจริงจัง'
      },
      rangeSelection: {
        label: 'รูปแบบการซ้อม',
        title: 'ฝึกแบบที่เป็นคุณ',
        description: ['1 ถาด 40 ลูก เลือกระหว่างลูกเก่าหรือลูกใหม่', 'จัดกำหนดการซ้อมในสไตล์ของคุณ']
      },
      ratesLabel: 'เรทมาตรฐาน',
      cardLabel: 'บัตรสมาชิก',
      cards: {
        pro: {
          title: 'Pro Golf',
          subtitle: 'บัตรระดับแดงสำหรับนักกอล์ฟที่ซ้อมจริงจังหลายครั้งต่อสัปดาห์',
          membershipTag: 'สมาชิกแบบลูกเก่า'
        },
        gold: {
          title: 'Gold Golf',
          subtitle: 'บัตรโกลด์พร้อมสิทธิ์เลานจ์และบริการดูแลถุงกอล์ฟ',
          membershipTag: 'สมาชิกแบบลูกใหม่'
        }
      }
    },
    heritage: {
      eyebrow: 'จุดเริ่มต้น',
      title: 'ตั้งแต่ปี 2018',
      subtitle: 'มรดกของเรา',
      description:
        'ตั้งแต่เปิดตัวในเดือนมกราคม 2018 จนกลายเป็นสนามไดร์ฟที่ใหญ่ที่สุดในภาคเหนือ Msport ยังคงยกระดับมาตรฐานด้านกอล์ฟและไลฟ์สไตล์อย่างต่อเนื่อง',
      cta: 'อ่านเรื่องราวของเรา'
    },
    expansion: {
      label: 'การขยาย',
      title: 'กำลังขยาย',
      subtitle: 'บทต่อไปของ Msport',
      description:
        'Msport+ คือแคมปัสเรือธงแห่งใหม่ หลายชั้นพร้อมห้องอาหารโดยเชฟ TrackMan labs ที่ขยายขึ้น และบริการคอนเซียร์จ อยู่ห่างจากเรนจ์ปัจจุบันเพียงไม่กี่นาที เปิดปี 2026',
      cta: 'สำรวจ Msport+',
      footageLabel: 'ภาพการก่อสร้าง',
      footageTitle: 'พรีวิว Msport+',
      footageMeta: 'ถ่ายทำ ณ สถานที่ · กุมภาพันธ์ 2026'
    },
    news: {
      section: {
        label: 'ข่าว & กิจกรรม',
        title: 'ข่าว + อีเวนต์',
        subtitle: 'อัปเดตงานสร้าง ลีก และข่าวอะคาเดมีจาก Msport โดยตรง'
      },
      cta: 'ดูทั้งหมด',
      cardCta: 'อ่านบทความ'
    }
  },
  KO: {
    nav: {
      links: {
        home: '홈',
        about: '소개',
        contact: '문의',
        facilities: '시설',
        simulators: '시뮬레이터',
        academy: '아카데미',
        locations: 'Msport+',
        news: '뉴스'
      },
      actions: {
        bookBay: '타석 예약',
        bookSession: '세션 예약'
      },
      languageLabel: '언어',
      languageNames: {
        EN: 'English',
        TH: 'ไทย',
        KO: '한국어',
        ZH: '中文',
        JA: '日本語'
      }
    },
    hero: {
      label: 'Msport 경험',
      titleLine1: 'MSPORT',
      titleLine2: '콜렉티브',
      primaryCta: 'Msport+ 살펴보기',
      secondaryCta: '멤버십 보기'
    },
    usp: {
      campusLabel: '',
      metrics: [
        { value: '8', label: '년', detail: '2018년 설립', href: '/about' },
        { value: '68', label: '타석', detail: '대기 없이 바로 스윙', href: '/contact' },
        { value: '10+', label: '매장', detail: '푸드 · 프로샵 · 서비스', href: '/facilities' },
        { value: '3', label: '스위트', detail: 'TrackMan 실내 스튜디오', href: '/simulators' },
        { value: '7', label: '코치', detail: 'PGA 공인 코칭', href: '/academy' }
      ]
    },
    range: {
      sectionLabel: 'Msport 경험',
      title: '연습 그 이상',
      subtitle: '매일 운영 · 워크인 환영',
      cards: {
        theRange: {
          title: 'The Range',
          subtitle: '388야드 필드. 풀 플라이트를 확인하세요. 예약 없이, 대기 없이.',
          cta: '자세히 보기'
        },
        facilities: {
          title: '먹고 · 쇼핑하고 · 휴식',
          subtitle: '필요한 모든 것을 한곳에서',
          cta: '시설 살펴보기'
        },
        simulators: {
          title: 'TrackMan Suites',
          subtitle: '데이터 기반 프라이빗 룸',
          cta: '예약하기'
        },
        coaching: {
          title: 'PGA 코칭',
          subtitle: '프로 코치 상시 대기',
          cta: '자세히 알아보기'
        }
      }
    },
    membership: {
      section: {
        label: '이용권',
        title: '멤버십',
        subtitle: '단일 트레이 또는 가치형 패드로 진지한 연습을 설계하세요.'
      },
      rangeSelection: {
        label: '연습 선택',
        title: '당신의 방식으로',
        description: ['트레이당 40구, 신품 또는 일반 볼 선택', '연습 루틴을 원하는 대로 구성']
      },
      ratesLabel: '기본 요금',
      cardLabel: '멤버십 카드',
      cards: {
        pro: {
          title: 'Pro Golf',
          subtitle: '주당 여러 번 연습하는 플레이어를 위한 레드 티어 카드',
          membershipTag: '일반 볼 멤버십'
        },
        gold: {
          title: 'Gold Golf',
          subtitle: '라운지 및 컨시어지 서비스를 포함한 골드 티어',
          membershipTag: '신품 볼 멤버십'
        }
      }
    },
    heritage: {
      eyebrow: '시작 이야기',
      title: '2018년부터',
      subtitle: '우리의 헤리티지',
      description: '2018년 1월 오픈 이후 북부 태국 최대의 드라이빙 레인지로 성장하며 Msport는 골프와 라이프스타일의 기준을 높이고 있습니다.',
      cta: '브랜드 스토리 보기'
    },
    expansion: {
      label: '확장',
      title: '확장 중',
      subtitle: 'Msport의 다음 장',
      description:
        'Msport+는 새로운 플래그십 캠퍼스로, 셰프가 이끄는 다이닝, 확장된 TrackMan 랩, 컨시어지 서비스를 제공하며 현 레인지에서 몇 분 거리입니다. 2026년 오픈.',
      cta: 'Msport+ 보기',
      footageLabel: '확장 영상',
      footageTitle: 'Msport+ 빌드 프리뷰',
      footageMeta: '현장 촬영 · 2026년 2월'
    },
    news: {
      section: {
        label: '뉴스 & 이벤트',
        title: 'NEWS + EVENTS',
        subtitle: 'Msport의 최신 공사, 리그, 아카데미 소식을 바로 확인하세요.'
      },
      cta: '전체 보기',
      cardCta: '기사 읽기'
    }
  },
  ZH: {
    nav: {
      links: {
        home: '首页',
        about: '关于我们',
        contact: '联系',
        facilities: '设施',
        simulators: '模拟器',
        academy: '学院',
        locations: 'Msport+',
        news: '新闻'
      },
      actions: {
        bookBay: '预订球位',
        bookSession: '预订练习'
      },
      languageLabel: '语言',
      languageNames: {
        EN: 'English',
        TH: 'ไทย',
        KO: '한국어',
        ZH: '中文',
        JA: '日本語'
      }
    },
    hero: {
      label: 'Msport 体验',
      titleLine1: 'MSPORT',
      titleLine2: '集体',
      primaryCta: '探索 Msport+',
      secondaryCta: '查看会员'
    },
    usp: {
      campusLabel: '山甘烹园区',
      metrics: [
        { value: '8', label: '年', detail: '2018 年启用', href: '/about' },
        { value: '68', label: '打位', detail: '无需等待，上场开球', href: '/contact' },
        { value: '10+', label: '商铺', detail: '餐饮 · 专卖店 · 服务', href: '/facilities' },
        { value: '3', label: '套房', detail: 'TrackMan 室内模拟', href: '/simulators' },
        { value: '7', label: '教练', detail: 'PGA 认证教学', href: '/academy' }
      ]
    },
    range: {
      sectionLabel: 'Msport 体验',
      title: '超越练习',
      subtitle: '每日开放 · 欢迎随到随练',
      cards: {
        theRange: {
          title: 'The Range',
          subtitle: '388 码球道，完整球飞一览。无需预约，无需等待。',
          cta: '了解更多'
        },
        facilities: {
          title: '吃 · 逛 · 放松',
          subtitle: '所需一切尽在园区内',
          cta: '探索设施'
        },
        simulators: {
          title: 'TrackMan 套房',
          subtitle: '私享数据驱动空间',
          cta: '立即预订'
        },
        coaching: {
          title: 'PGA 教学',
          subtitle: '每日专业指导',
          cta: '了解教学'
        }
      }
    },
    membership: {
      section: {
        label: '练习场通行',
        title: '会员',
        subtitle: '单次托盘或高性价比套餐，满足高强度训练。'
      },
      rangeSelection: {
        label: '训练模式',
        title: '随心选择',
        description: ['每托盘 40 球，可选新球或常规球', '按照个人节奏规划练习']
      },
      ratesLabel: '标准价格',
      cardLabel: '会员卡',
      cards: {
        pro: {
          title: 'Pro Golf',
          subtitle: '为高频练习者打造的红卡',
          membershipTag: '常规球会员'
        },
        gold: {
          title: 'Gold Golf',
          subtitle: '尊享休息室与贴心行李服务',
          membershipTag: '新球会员'
        }
      }
    },
    heritage: {
      eyebrow: '起点',
      title: '自 2018 年起',
      subtitle: '我们的传承',
      description: '自 2018 年 1 月开业以来，Msport 已成长为泰北最大的练习场，不断提升高尔夫与生活方式体验。',
      cta: '了解品牌故事'
    },
    expansion: {
      label: '扩张计划',
      title: '正在扩张',
      subtitle: 'Msport 下一章',
      description: 'Msport+ 将成为全新旗舰园区，提供主厨餐饮、扩容 TrackMan 实验室以及礼宾式服务，距离现有练习场仅数分钟。2026 年开业。',
      cta: '探索 Msport+',
      footageLabel: '施工影像',
      footageTitle: 'Msport+ 建设预览',
      footageMeta: '现场拍摄 · 2026 年 2 月'
    },
    news: {
      section: {
        label: '新闻与活动',
        title: 'NEWS + EVENTS',
        subtitle: '第一时间掌握 Msport 的建设、联赛与学院资讯。'
      },
      cta: '查看全部',
      cardCta: '阅读文章'
    }
  },
  JA: {
    nav: {
      links: {
        home: 'ホーム',
        about: '会社概要',
        contact: 'お問い合わせ',
        facilities: '施設',
        simulators: 'シミュレーター',
        academy: 'アカデミー',
        locations: 'Msport+',
        news: 'ニュース'
      },
      actions: {
        bookBay: '打席を予約',
        bookSession: 'セッション予約'
      },
      languageLabel: '言語',
      languageNames: {
        EN: 'English',
        TH: 'ไทย',
        KO: '한국어',
        ZH: '中文',
        JA: '日本語'
      }
    },
    hero: {
      label: 'Msport エクスペリエンス',
      titleLine1: 'MSPORT',
      titleLine2: 'コレクティブ',
      primaryCta: 'Msport+を見る',
      secondaryCta: 'メンバーシップを見る'
    },
    usp: {
      campusLabel: 'サンカムペーングキャンパス',
      metrics: [
        { value: '8', label: '年', detail: '2018年開業', href: '/about' },
        { value: '68', label: '打席', detail: '待ち時間なしでスイング', href: '/contact' },
        { value: '10+', label: 'ショップ', detail: 'フード · プロショップ · サービス', href: '/facilities' },
        { value: '3', label: 'スイート', detail: 'TrackMan 室内スタジオ', href: '/simulators' },
        { value: '7', label: 'コーチ', detail: 'PGA 認定コーチング', href: '/academy' }
      ]
    },
    range: {
      sectionLabel: 'Msport エクスペリエンス',
      title: '練習を超えて',
      subtitle: '年中無休 · ウォークイン歓迎',
      cards: {
        theRange: {
          title: 'The Range',
          subtitle: '388ヤードのフィールドでボールフライトをフルで確認。予約不要・待ち時間なし。',
          cta: '詳しく見る'
        },
        facilities: {
          title: '食べる · 買う · くつろぐ',
          subtitle: '必要なものはすべて場内に',
          cta: '施設を探る'
        },
        simulators: {
          title: 'TrackMan Suites',
          subtitle: 'データ重視の完全個室',
          cta: '予約する'
        },
        coaching: {
          title: 'PGA コーチング',
          subtitle: '毎日受けられるプロ指導',
          cta: '詳細を見る'
        }
      }
    },
    membership: {
      section: {
        label: 'レンジアクセス',
        title: 'メンバーシップ',
        subtitle: '単発トレーまたはバリューパックで本気の練習を。'
      },
      rangeSelection: {
        label: '練習スタイル',
        title: '自分流で',
        description: ['1トレー40球、新球か通常球を選択', '自分のペースでトレーニングを組み立てる']
      },
      ratesLabel: '標準料金',
      cardLabel: 'メンバーカード',
      cards: {
        pro: {
          title: 'Pro Golf',
          subtitle: '週に複数回打ち込むプレーヤー向けレッドティア',
          membershipTag: '通常球メンバーシップ'
        },
        gold: {
          title: 'Gold Golf',
          subtitle: 'ラウンジアクセスとコンシェルジュサービス付き',
          membershipTag: '新球メンバーシップ'
        }
      }
    },
    heritage: {
      eyebrow: '原点',
      title: '2018年より',
      subtitle: '私たちのヘリテージ',
      description: '2018年1月のオープン以来、Msportは北タイ最大のレンジへと成長し、ゴルフとライフスタイルの基準を引き上げ続けています。',
      cta: 'ストーリーを見る'
    },
    expansion: {
      label: '拡張計画',
      title: '拡張中',
      subtitle: 'Msport の次章',
      description: 'Msport+ は新たなフラッグシップキャンパス。シェフ監修ダイニング、拡張 TrackMan ラボ、コンシェルジュサービスを備え、現レンジから数分の距離。2026年オープン。',
      cta: 'Msport+を見る',
      footageLabel: '建設映像',
      footageTitle: 'Msport+ プレビュー',
      footageMeta: '現地収録 · 2026年2月'
    },
    news: {
      section: {
        label: 'ニュース & イベント',
        title: 'NEWS + EVENTS',
        subtitle: 'Msport の最新ビルド、リーグ、アカデミー情報をお届け。'
      },
      cta: 'すべて見る',
      cardCta: '記事を読む'
    }
  }
};

export const languageCodes = Object.keys(translations) as LanguageCode[];
