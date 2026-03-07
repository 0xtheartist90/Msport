import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, CalendarDays, Crosshair, Flag, Mail, MessageCircleMore, PhoneCall, Sparkles, Wind } from 'lucide-react';

import { SectionHeader } from '@/components/SectionHeader';
import { getServerLanguage } from '@/lib/i18n';

const academyLoopImages = Array.from({ length: 8 }, (_, index) =>
  `/images/Academy/academyloop/academyloop${String(index + 1).padStart(2, '0')}.png`
);

const academyCopy = {
  EN: {
    hero: {
      label: 'Msport Academy',
      title: ['ACADEMY', 'AT MSPORT'],
      description: 'Thailand PGA-certified coaching built for juniors, first-timers, and players chasing long-term progress.'
    },
    whyTrain: {
      label: 'Msport Golf Academy',
      title: 'Why Train Here',
      subtitle: 'A cleaner look at what makes the academy useful.',
      paragraphs: [
        'Academy instructors combine fundamentals, short-game structure, and TrackMan-backed swing review to create training that is technical without feeling overwhelming.',
        'Players can work inside the simulator studio, move onto the range, and then carry that work into real on-course situations with the same coaching team.'
      ],
      highlights: [
        { title: 'Thai PGA Coaches', description: 'Certified instruction, every day.', icon: Award },
        { title: 'TrackMan Feedback', description: 'Data that keeps practice focused.', icon: Crosshair },
        { title: 'Range to Course', description: 'Training that transfers to play.', icon: Flag }
      ]
    },
    loopAlt: 'Msport Golf Academy training montage',
    programs: {
      label: 'Coaching Formats',
      title: 'Programs',
      subtitle: 'Four clear academy options for regular training.',
      bestForLabel: 'Best For',
      cards: [
        { label: 'Hourly Pack', title: '1 Hour', bestFor: 'Trying the academy or working on one focused issue.' },
        { label: 'Hourly Pack', title: '12 Hours', bestFor: 'Players who want a structured progression over multiple sessions.' },
        { label: 'Hourly Pack', title: '20 Hours', bestFor: 'Serious players who want longer-term coaching continuity.' },
        { label: 'Monthly', title: 'Unlimited', bestFor: 'Players chasing frequent supervised reps each week.' }
      ],
      custom: {
        label: 'Custom Program',
        title: 'Need something tailored?',
        description:
          'The academy team can shape custom plans for juniors, competitive players, travelling golfers, and group sessions.',
        cta: 'Contact on LINE'
      }
    },
    onCourse: {
      tag: 'On-Course Service',
      title: 'On-Course Immersion',
      description:
        'Step outside the bay and train through real decisions, course management, and playing situations with academy guidance beside you.',
      scheduleLabel: 'Schedule',
      schedule: 'Available upon request',
      formatLabel: 'Format',
      format: 'Book as add-on',
      notes: [
        'Bring academy learnings onto the course with your coach',
        'Focus on scoring strategy, shot selection, and confidence',
        'Additional fee varies by venue and program length'
      ]
    },
    putting: {
      label: 'Practice Room',
      title: 'Putting Room',
      subtitle: 'A dedicated indoor space for academy students to sharpen touch and short-game feel.',
      cardTitle: 'Focused indoor reps',
      cardDescription:
        'The academy includes a cooled putting room for stroke work, pace control, short-game repetition, and more focused practice away from the range.',
      benefits: ['Short game and mental management support', 'No expiry on course hours']
    },
    coaches: {
      label: 'Coaches',
      title: 'Meet The Team',
      subtitle: 'Three coaches featured in the academy material.',
      cards: [
        {
          name: 'Pro Lip',
          role: 'Tournament Player',
          credential: 'TP 1060',
          image: '/images/Academy/lip.png',
          description: 'Tournament experience and player perspective for students chasing sharper performance.'
        },
        {
          name: 'Pro Micky',
          role: 'Golf Instructor',
          credential: 'GI 1368',
          image: '/images/Academy/micky.png',
          description: 'Structured instruction built around fundamentals, repetition, and measurable progress.'
        },
        {
          name: 'Pro Nathan',
          role: 'Golf Instructor',
          credential: 'GI 1419',
          image: '/images/Academy/nathan.png',
          description: 'Player-focused coaching with attention to tempo, confidence, and on-course transfer.'
        }
      ]
    },
    booking: {
      label: 'Booking',
      title: 'Book Academy Time',
      subtitle: 'Three direct ways to reach the academy team.',
      channels: [
        {
          label: 'Email',
          value: 'msportgolfacademy@gmail.com',
          helper: 'Best for lesson planning and detailed requests.',
          href: 'mailto:msportgolfacademy@gmail.com',
          icon: Mail
        },
        {
          label: 'Phone',
          value: '065 134 7777',
          helper: 'Best for quick questions and same-day enquiries.',
          href: 'tel:+66651347777',
          icon: PhoneCall
        },
        {
          label: 'LINE',
          value: 'Add on LINE',
          helper: 'Best for chat-based booking and follow-up.',
          href: 'https://lin.ee/k2I9b1a',
          icon: MessageCircleMore
        }
      ]
    }
  },
  TH: {
    hero: {
      label: 'Msport Academy',
      title: ['ACADEMY', 'AT MSPORT'],
      description: 'โค้ช Thailand PGA สำหรับเยาวชน มือใหม่ และผู้เล่นที่ต้องการพัฒนาอย่างต่อเนื่อง'
    },
    whyTrain: {
      label: 'Msport Golf Academy',
      title: 'Why Train Here',
      subtitle: 'สรุปสั้น ๆ ว่าอะคาเดมีนี้ช่วยผู้เล่นได้อย่างไร',
      paragraphs: [
        'โค้ชของอะคาเดมีผสานพื้นฐาน Short Game และการรีวิววงสวิงด้วย TrackMan เข้าด้วยกัน ทำให้การเรียนมีโครงสร้างแต่ไม่ซับซ้อนเกินไป',
        'ผู้เล่นสามารถเริ่มจากสตูดิโอซ้อม ต่อไปที่สนามไดร์ฟ และพาต่อยอดไปสู่สถานการณ์จริงในสนาม พร้อมทีมโค้ชชุดเดียวกัน'
      ],
      highlights: [
        { title: 'โค้ช Thailand PGA', description: 'มีผู้ฝึกสอนรับรองพร้อมทุกวัน', icon: Award },
        { title: 'TrackMan Feedback', description: 'ข้อมูลที่ช่วยให้การซ้อมมีทิศทาง', icon: Crosshair },
        { title: 'จากสนามซ้อมสู่สนามจริง', description: 'การฝึกที่ต่อยอดไปสู่การเล่นจริง', icon: Flag }
      ]
    },
    loopAlt: 'บรรยากาศการฝึกซ้อมของ Msport Golf Academy',
    programs: {
      label: 'รูปแบบการสอน',
      title: 'Programs',
      subtitle: '4 ตัวเลือกหลักสำหรับการฝึกอย่างต่อเนื่อง',
      bestForLabel: 'เหมาะสำหรับ',
      cards: [
        { label: 'แพ็กเรียน', title: '1 Hour', bestFor: 'เหมาะสำหรับลองเรียนครั้งแรกหรือแก้หนึ่งเรื่องแบบเฉพาะจุด' },
        { label: 'แพ็กเรียน', title: '12 Hours', bestFor: 'เหมาะกับผู้เล่นที่ต้องการแผนพัฒนาแบบต่อเนื่องหลายครั้ง' },
        { label: 'แพ็กเรียน', title: '20 Hours', bestFor: 'เหมาะกับผู้เล่นที่ต้องการความต่อเนื่องระยะยาวมากขึ้น' },
        { label: 'รายเดือน', title: 'Unlimited', bestFor: 'เหมาะกับผู้เล่นที่ต้องการซ้อมบ่อยภายใต้การดูแลของโค้ช' }
      ],
      custom: {
        label: 'โปรแกรมเฉพาะบุคคล',
        title: 'ต้องการแผนที่ออกแบบเฉพาะไหม',
        description: 'ทีมอะคาเดมีสามารถจัดโปรแกรมสำหรับเยาวชน นักแข่ง นักกอล์ฟที่มาเยือน หรือกลุ่มเรียนได้',
        cta: 'ติดต่อทาง LINE'
      }
    },
    onCourse: {
      tag: 'บริการในสนามจริง',
      title: 'On-Course Immersion',
      description: 'ก้าวออกจากเบย์ซ้อมไปฝึกการตัดสินใจ การวางแผน และสถานการณ์เล่นจริง โดยมีโค้ชอะคาเดมีดูแลข้างสนาม',
      scheduleLabel: 'ตารางเวลา',
      schedule: 'นัดหมายได้ตามคำขอ',
      formatLabel: 'รูปแบบ',
      format: 'จองเป็นบริการเสริม',
      notes: [
        'นำสิ่งที่เรียนในอะคาเดมีไปใช้จริงในสนามกับโค้ชของคุณ',
        'เน้นเกมวางแผน การเลือกช็อต และความมั่นใจในการเล่น',
        'ค่าบริการเพิ่มเติมขึ้นอยู่กับสนามและรูปแบบโปรแกรม'
      ]
    },
    putting: {
      label: 'ห้องซ้อม',
      title: 'Putting Room',
      subtitle: 'พื้นที่ในร่มสำหรับนักเรียนอะคาเดมีที่ต้องการฝึกสัมผัสและเกมสั้นอย่างจริงจัง',
      cardTitle: 'ซ้อมในร่มแบบมีสมาธิ',
      cardDescription:
        'อะคาเดมีมีห้องพัตต์ติดแอร์สำหรับฝึกสโตรก คุมสปีด และทำซ้ำเกมสั้นได้อย่างมีสมาธิมากขึ้น',
      benefits: ['รองรับการฝึก Short Game และ Mental Game', 'ชั่วโมงเรียนไม่มีวันหมดอายุ']
    },
    coaches: {
      label: 'โค้ช',
      title: 'Meet The Team',
      subtitle: 'โค้ช 3 ท่านที่ปรากฏในสื่อของอะคาเดมี',
      cards: [
        {
          name: 'Pro Lip',
          role: 'Tournament Player',
          credential: 'TP 1060',
          image: '/images/Academy/lip.png',
          description: 'มุมมองจากนักแข่งจริงสำหรับผู้เล่นที่ต้องการยกระดับเกมอย่างเฉียบคม'
        },
        {
          name: 'Pro Micky',
          role: 'Golf Instructor',
          credential: 'GI 1368',
          image: '/images/Academy/micky.png',
          description: 'การสอนที่เน้นพื้นฐาน การทำซ้ำ และการวัดผลการพัฒนาได้จริง'
        },
        {
          name: 'Pro Nathan',
          role: 'Golf Instructor',
          credential: 'GI 1419',
          image: '/images/Academy/nathan.png',
          description: 'โค้ชที่โฟกัสจังหวะ ความมั่นใจ และการนำการซ้อมไปใช้ในสนามจริง'
        }
      ]
    },
    booking: {
      label: 'Booking',
      title: 'Book Academy Time',
      subtitle: '3 ช่องทางตรงในการติดต่อทีมอะคาเดมี',
      channels: [
        {
          label: 'Email',
          value: 'msportgolfacademy@gmail.com',
          helper: 'เหมาะสำหรับวางแผนบทเรียนและสอบถามรายละเอียด',
          href: 'mailto:msportgolfacademy@gmail.com',
          icon: Mail
        },
        {
          label: 'Phone',
          value: '065 134 7777',
          helper: 'เหมาะสำหรับคำถามสั้น ๆ และการนัดหมายด่วน',
          href: 'tel:+66651347777',
          icon: PhoneCall
        },
        {
          label: 'LINE',
          value: 'Add on LINE',
          helper: 'เหมาะสำหรับแชต จองเวลา และติดตามต่อได้ง่าย',
          href: 'https://lin.ee/k2I9b1a',
          icon: MessageCircleMore
        }
      ]
    }
  },
  KO: {
    hero: {
      label: 'Msport Academy',
      title: ['ACADEMY', 'AT MSPORT'],
      description: '주니어, 입문자, 장기적인 성장을 원하는 플레이어를 위한 Thailand PGA 인증 코칭.'
    },
    whyTrain: {
      label: 'Msport Golf Academy',
      title: 'Why Train Here',
      subtitle: '아카데미가 실제로 도움이 되는 이유를 간단히 정리했습니다.',
      paragraphs: [
        '아카데미 코치들은 기본기, 쇼트게임 구조, TrackMan 기반 스윙 리뷰를 결합해 기술적이면서도 부담스럽지 않은 훈련을 만듭니다.',
        '시뮬레이터 스튜디오에서 시작해 레인지로 나가고, 실제 온코스 상황까지 같은 코칭 팀과 연결할 수 있습니다.'
      ],
      highlights: [
        { title: 'Thailand PGA 코치', description: '매일 인증된 코칭 제공.', icon: Award },
        { title: 'TrackMan 피드백', description: '연습의 방향을 잡아주는 데이터.', icon: Crosshair },
        { title: '레인지에서 코스로', description: '실전 플레이로 이어지는 훈련.', icon: Flag }
      ]
    },
    loopAlt: 'Msport Golf Academy 트레이닝 몽타주',
    programs: {
      label: '코칭 포맷',
      title: 'Programs',
      subtitle: '정기적인 훈련을 위한 4가지 아카데미 옵션.',
      bestForLabel: '추천 대상',
      cards: [
        { label: '시간제 패키지', title: '1 Hour', bestFor: '아카데미를 처음 경험하거나 한 가지 이슈를 집중적으로 다듬고 싶은 플레이어.' },
        { label: '시간제 패키지', title: '12 Hours', bestFor: '여러 세션에 걸쳐 구조적인 발전을 원하는 플레이어.' },
        { label: '시간제 패키지', title: '20 Hours', bestFor: '더 긴 기간 동안 코칭의 연속성을 원하는 진지한 플레이어.' },
        { label: '월간', title: 'Unlimited', bestFor: '주중에 자주 반복 훈련을 받고 싶은 플레이어.' }
      ],
      custom: {
        label: '맞춤 프로그램',
        title: '맞춤형 구성이 필요하신가요?',
        description: '주니어, 경기 지향형 선수, 여행 중 골퍼, 그룹 세션을 위한 프로그램도 설계할 수 있습니다.',
        cta: 'LINE으로 문의'
      }
    },
    onCourse: {
      tag: '온코스 서비스',
      title: 'On-Course Immersion',
      description: '실제 의사결정과 코스 매니지먼트를 코치와 함께 현장에서 훈련하세요.',
      scheduleLabel: '일정',
      schedule: '요청 시 예약 가능',
      formatLabel: '형식',
      format: '추가 옵션으로 예약',
      notes: [
        '아카데미에서 배운 내용을 코스에서 코치와 함께 적용',
        '스코어 전략, 샷 선택, 자신감에 집중',
        '추가 비용은 코스와 프로그램 길이에 따라 달라짐'
      ]
    },
    putting: {
      label: '연습 룸',
      title: 'Putting Room',
      subtitle: '터치와 쇼트게임 감각을 다듬기 위한 전용 실내 공간.',
      cardTitle: '집중할 수 있는 실내 반복 훈련',
      cardDescription: '냉방이 되는 퍼팅룸에서 스트로크, 거리감, 쇼트게임 반복 훈련을 더 집중해서 진행할 수 있습니다.',
      benefits: ['쇼트게임과 멘탈 매니지먼트 지원', '패키지 시간 만료 없음']
    },
    coaches: {
      label: '코치',
      title: 'Meet The Team',
      subtitle: '아카데미 자료에 소개된 3명의 코치.',
      cards: [
        { name: 'Pro Lip', role: 'Tournament Player', credential: 'TP 1060', image: '/images/Academy/lip.png', description: '경기 경험을 바탕으로 날카로운 퍼포먼스를 원하는 학생을 지도합니다.' },
        { name: 'Pro Micky', role: 'Golf Instructor', credential: 'GI 1368', image: '/images/Academy/micky.png', description: '기본기와 반복, 측정 가능한 발전을 중심으로 구조적인 지도를 제공합니다.' },
        { name: 'Pro Nathan', role: 'Golf Instructor', credential: 'GI 1419', image: '/images/Academy/nathan.png', description: '템포와 자신감, 실전 전이까지 고려한 플레이어 중심 코칭.' }
      ]
    },
    booking: {
      label: '예약',
      title: 'Book Academy Time',
      subtitle: '아카데미 팀과 연결되는 3가지 직접 채널.',
      channels: [
        { label: 'Email', value: 'msportgolfacademy@gmail.com', helper: '레슨 계획과 상세 문의에 적합합니다.', href: 'mailto:msportgolfacademy@gmail.com', icon: Mail },
        { label: 'Phone', value: '065 134 7777', helper: '빠른 질문과 당일 문의에 적합합니다.', href: 'tel:+66651347777', icon: PhoneCall },
        { label: 'LINE', value: 'Add on LINE', helper: '채팅 기반 예약과 후속 소통에 적합합니다.', href: 'https://lin.ee/k2I9b1a', icon: MessageCircleMore }
      ]
    }
  },
  ZH: {
    hero: {
      label: 'Msport Academy',
      title: ['ACADEMY', 'AT MSPORT'],
      description: '为青少年、初学者以及追求长期进步的球手打造的 Thailand PGA 认证教学。'
    },
    whyTrain: {
      label: 'Msport Golf Academy',
      title: 'Why Train Here',
      subtitle: '更清楚地说明学院真正有价值的地方。',
      paragraphs: [
        '学院教练将基础动作、短杆结构与 TrackMan 挥杆反馈结合起来，让训练既专业又不过度复杂。',
        '球手可以先在模拟器工作室训练，再转到练习场，最终把内容带到真实球场场景中。'
      ],
      highlights: [
        { title: 'Thailand PGA 教练', description: '每天提供认证教学。', icon: Award },
        { title: 'TrackMan 反馈', description: '帮助练习更有方向的数据支持。', icon: Crosshair },
        { title: '从练习场到球场', description: '训练能自然转化为实战表现。', icon: Flag }
      ]
    },
    loopAlt: 'Msport Golf Academy 训练影像',
    programs: {
      label: '教学形式',
      title: 'Programs',
      subtitle: '4 种清晰的学院训练选择。',
      bestForLabel: '适合',
      cards: [
        { label: '小时套餐', title: '1 Hour', bestFor: '适合初次体验学院或想集中解决一个问题的球手。' },
        { label: '小时套餐', title: '12 Hours', bestFor: '适合希望通过多个课程循序进步的球手。' },
        { label: '小时套餐', title: '20 Hours', bestFor: '适合希望获得更长期连续指导的认真球手。' },
        { label: '月度', title: 'Unlimited', bestFor: '适合希望每周频繁练习并接受监督的球手。' }
      ],
      custom: {
        label: '定制项目',
        title: '需要更个性化的方案吗？',
        description: '学院团队也可为青少年、竞技型球手、来访球手或小组课程设计定制计划。',
        cta: '通过 LINE 联系'
      }
    },
    onCourse: {
      tag: '下场服务',
      title: 'On-Course Immersion',
      description: '走出打位，在真实决策、球场管理与实战情境中与教练一起训练。',
      scheduleLabel: '时间',
      schedule: '可按需求预约',
      formatLabel: '形式',
      format: '可作为附加项目预订',
      notes: [
        '将学院所学与教练一起带到真实球场',
        '聚焦策略、选杆与临场信心',
        '额外费用根据球场与时长而变化'
      ]
    },
    putting: {
      label: '练习室',
      title: 'Putting Room',
      subtitle: '专为学员提升触感与短杆手感而设的室内空间。',
      cardTitle: '专注的室内重复训练',
      cardDescription: '带空调的推杆房可用于杆头路径、速度控制与短杆重复训练，让练习更专注。',
      benefits: ['支持短杆与心理管理训练', '课程小时数不过期']
    },
    coaches: {
      label: '教练',
      title: 'Meet The Team',
      subtitle: '学院素材中介绍的 3 位教练。',
      cards: [
        { name: 'Pro Lip', role: 'Tournament Player', credential: 'TP 1060', image: '/images/Academy/lip.png', description: '以比赛经验帮助球手打造更锐利的实战表现。' },
        { name: 'Pro Micky', role: 'Golf Instructor', credential: 'GI 1368', image: '/images/Academy/micky.png', description: '围绕基础、重复与可量化进步展开结构化教学。' },
        { name: 'Pro Nathan', role: 'Golf Instructor', credential: 'GI 1419', image: '/images/Academy/nathan.png', description: '注重节奏、自信与训练到实战转化的球手型教学。' }
      ]
    },
    booking: {
      label: '预约',
      title: 'Book Academy Time',
      subtitle: '3 种直接联系学院团队的方式。',
      channels: [
        { label: 'Email', value: 'msportgolfacademy@gmail.com', helper: '适合课程规划与详细咨询。', href: 'mailto:msportgolfacademy@gmail.com', icon: Mail },
        { label: 'Phone', value: '065 134 7777', helper: '适合快速提问与当天咨询。', href: 'tel:+66651347777', icon: PhoneCall },
        { label: 'LINE', value: 'Add on LINE', helper: '适合通过聊天完成预约与跟进。', href: 'https://lin.ee/k2I9b1a', icon: MessageCircleMore }
      ]
    }
  },
  JA: {
    hero: {
      label: 'Msport Academy',
      title: ['ACADEMY', 'AT MSPORT'],
      description: 'ジュニア、初心者、長期的な成長を目指すプレーヤーのための Thailand PGA 認定コーチング。'
    },
    whyTrain: {
      label: 'Msport Golf Academy',
      title: 'Why Train Here',
      subtitle: 'このアカデミーが役立つ理由を、より分かりやすく整理しました。',
      paragraphs: [
        'アカデミーのコーチは、基礎、ショートゲーム、TrackMan によるスイングレビューを組み合わせ、専門的でありながら過度に複雑ではない練習を構築します。',
        'シミュレータースタジオからレンジへ、さらに実際のコース状況へと、同じコーチングチームでつなげることができます。'
      ],
      highlights: [
        { title: 'Thailand PGA コーチ', description: '毎日、認定された指導を提供。', icon: Award },
        { title: 'TrackMan フィードバック', description: '練習の方向性を明確にするデータ。', icon: Crosshair },
        { title: 'レンジからコースへ', description: '実戦につながるトレーニング。', icon: Flag }
      ]
    },
    loopAlt: 'Msport Golf Academy トレーニングモンタージュ',
    programs: {
      label: 'コーチング形式',
      title: 'Programs',
      subtitle: '継続的なトレーニングのための 4 つのアカデミーオプション。',
      bestForLabel: 'おすすめ対象',
      cards: [
        { label: '時間パック', title: '1 Hour', bestFor: 'まず試してみたい人、または一つの課題に集中したい人向け。' },
        { label: '時間パック', title: '12 Hours', bestFor: '複数回のセッションを通して計画的に上達したい人向け。' },
        { label: '時間パック', title: '20 Hours', bestFor: 'より長期的に継続したコーチングを受けたい本格派向け。' },
        { label: '月額', title: 'Unlimited', bestFor: '毎週頻繁に管理された反復練習をしたい人向け。' }
      ],
      custom: {
        label: 'カスタムプログラム',
        title: '個別設計が必要ですか？',
        description: 'ジュニア、競技志向の選手、旅行中のゴルファー、グループ向けにも個別プランを設計できます。',
        cta: 'LINE で問い合わせ'
      }
    },
    onCourse: {
      tag: 'オンコースサービス',
      title: 'On-Course Immersion',
      description: '打席を離れ、実際の判断やコースマネジメントをコーチと一緒に現場で学びます。',
      scheduleLabel: 'スケジュール',
      schedule: 'リクエスト予約可',
      formatLabel: '形式',
      format: '追加オプションとして予約',
      notes: [
        'アカデミーで学んだ内容をコースでコーチと一緒に実践',
        'スコア戦略、ショット選択、自信にフォーカス',
        '追加料金はコースとプログラム時間により変動'
      ]
    },
    putting: {
      label: '練習ルーム',
      title: 'Putting Room',
      subtitle: 'タッチとショートゲーム感覚を磨くための専用インドア空間。',
      cardTitle: '集中できる屋内反復練習',
      cardDescription: '空調の効いたパッティングルームで、ストローク、距離感、ショートゲームの反復練習をより集中して行えます。',
      benefits: ['ショートゲームとメンタルマネジメントのサポート', '受講時間は失効なし']
    },
    coaches: {
      label: 'コーチ',
      title: 'Meet The Team',
      subtitle: 'アカデミー資料で紹介している 3 名のコーチ。',
      cards: [
        { name: 'Pro Lip', role: 'Tournament Player', credential: 'TP 1060', image: '/images/Academy/lip.png', description: '試合経験を生かし、鋭い実戦力を目指すプレーヤーを支えます。' },
        { name: 'Pro Micky', role: 'Golf Instructor', credential: 'GI 1368', image: '/images/Academy/micky.png', description: '基礎、反復、数値化できる進歩を中心にした構造的な指導。' },
        { name: 'Pro Nathan', role: 'Golf Instructor', credential: 'GI 1419', image: '/images/Academy/nathan.png', description: 'テンポ、自信、実戦へのつながりを意識したプレーヤー中心のコーチング。' }
      ]
    },
    booking: {
      label: '予約',
      title: 'Book Academy Time',
      subtitle: 'アカデミーチームへ直接つながる 3 つの連絡方法。',
      channels: [
        { label: 'Email', value: 'msportgolfacademy@gmail.com', helper: 'レッスンプランや詳細相談に適しています。', href: 'mailto:msportgolfacademy@gmail.com', icon: Mail },
        { label: 'Phone', value: '065 134 7777', helper: '簡単な質問や当日の問い合わせに適しています。', href: 'tel:+66651347777', icon: PhoneCall },
        { label: 'LINE', value: 'Add on LINE', helper: 'チャットでの予約やフォローに適しています。', href: 'https://lin.ee/k2I9b1a', icon: MessageCircleMore }
      ]
    }
  }
} as const;

export default async function AcademyPage() {
  const language = await getServerLanguage();
  const copy = academyCopy[language];
  const academyBenefits = copy.putting.benefits;
  const academyCoaches = copy.coaches.cards;
  const academyPackCards = copy.programs.cards;
  const bookingChannels = copy.booking.channels;
  const coachingHighlights = copy.whyTrain.highlights;
  const onCourseProgram = copy.onCourse;

  return (
    <main className="min-h-screen bg-[#1B1B1A] text-white">
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden bg-[#1B1B1A]">
        <Image
          src="/images/thaipgacoaching.jpg"
          alt="Msport Golf Academy coaching session"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/46 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
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

      <section className="bg-[#F7F5F0] py-20 text-[#1B1B1A]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="space-y-5">
            <SectionHeader
              label={copy.whyTrain.label}
              title={<span className="text-[#1B1B1A]">{copy.whyTrain.title}</span>}
              subtitle={copy.whyTrain.subtitle}
              align="left"
              animated={false}
              subtitleClassName="subtitle-accent text-[#4A473F]"
            />
            <div className="space-y-4 text-[#4A473F]">
              {copy.whyTrain.paragraphs.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {coachingHighlights.map(highlight => {
              const Icon = highlight.icon;

              return (
                <article
                  key={highlight.title}
                  className="group relative overflow-hidden rounded-[28px] border border-[#E3DED3] bg-white px-5 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-[#E6DED2] bg-[#F7F5F0]">
                      <Icon className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-black text-[#1B1B1A]">{highlight.title}</h3>
                      <div className="h-px w-12 bg-gradient-to-r from-[var(--accent)]/80 to-transparent transition-all duration-500 group-hover:w-16" />
                      <p className="text-sm leading-relaxed text-[#4A473F]">{highlight.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F7F5F0]">
        <div className="relative">
          <div className="flex w-max flex-nowrap animate-marquee-seamless-top" style={{ gap: 0 }}>
            {[0, 1, 2].map(setIndex =>
              academyLoopImages.map(image => (
                <Image
                  key={`${image}-${setIndex}`}
                  src={image}
                  alt={copy.loopAlt}
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

      <section className="bg-[#1B1B1A] py-20 text-white">
        <div className="mx-auto max-w-6xl space-y-8 px-6 lg:px-10">
          <SectionHeader
            label={copy.programs.label}
            title={<span className="text-white">{copy.programs.title}</span>}
            subtitle={copy.programs.subtitle}
            align="left"
            animated={false}
            subtitleClassName="subtitle-accent text-white/70"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {academyPackCards.map(program => {
              const featured = program.title === 'Unlimited';

              return (
                <article
                  key={program.title}
                  className={`relative overflow-hidden rounded-[26px] border px-5 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.12)] ${
                    featured
                      ? 'border-[var(--accent)]/22 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]'
                      : 'border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]'
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 ${
                      featured
                        ? 'bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.16),transparent_42%)]'
                        : 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%)]'
                    }`}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-[0.58rem] uppercase tracking-[0.42em] text-[var(--accent)]">{program.label}</p>
                      </div>
                      <h3 className="text-[clamp(1.35rem,2.4vw,1.8rem)] font-black text-white">{program.title}</h3>
                    </div>

                    <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4">
                      <p className="text-[0.55rem] uppercase tracking-[0.35em] text-white/45">{copy.programs.bestForLabel}</p>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-white/85">{program.bestFor}</p>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>

          {onCourseProgram ? (
            <article className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] shadow-[0_24px_65px_rgba(0,0,0,0.22)]">
              <div className="grid lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
                <div className="relative min-h-[280px] overflow-hidden border-b border-white/10 lg:min-h-[420px] lg:border-b-0 lg:border-r">
                  <Image
                    src="/images/Academy/oncourseemersion.png"
                    alt="Msport Golf Academy on-course immersion session"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-black/30 px-3 py-1.5 backdrop-blur-md">
                      <CalendarDays className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                      <span className="text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-white/80">
                        {onCourseProgram.tag}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 p-5 sm:p-6 lg:p-8">
                  <div className="space-y-3">
                    <h3 className="text-[clamp(1.7rem,3vw,2.3rem)] font-black text-white">{onCourseProgram.title}</h3>
                    <p className="max-w-xl text-sm leading-relaxed text-white/68 sm:text-base">{onCourseProgram.description}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4">
                      <p className="text-[0.55rem] uppercase tracking-[0.35em] text-white/45">{onCourseProgram.scheduleLabel}</p>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-white/84">{onCourseProgram.schedule}</p>
                    </div>
                    <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4">
                      <p className="text-[0.55rem] uppercase tracking-[0.35em] text-white/45">{onCourseProgram.formatLabel}</p>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-white/84">{onCourseProgram.format}</p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {onCourseProgram.notes.map(note => (
                      <div
                        key={note}
                        className="rounded-[20px] border border-white/10 bg-black/18 px-4 py-3 text-sm leading-relaxed text-white/76"
                      >
                        {note}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ) : null}

          <div className="grid gap-4 rounded-[30px] border border-white/10 bg-white/5 p-5 shadow-[0_22px_60px_rgba(0,0,0,0.18)] sm:p-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-black/20">
              <Sparkles className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
            </div>
            <div className="space-y-1.5 text-left">
              <p className="text-[0.6rem] uppercase tracking-[0.42em] text-[var(--accent)]">{copy.programs.custom.label}</p>
              <p className="text-xl font-black text-white">{copy.programs.custom.title}</p>
              <p className="text-sm leading-relaxed text-white/68 sm:text-base">
                {copy.programs.custom.description}
              </p>
            </div>
            <Link
              href="https://lin.ee/k2I9b1a"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {copy.programs.custom.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] py-20 text-[#1B1B1A]">
        <div className="mx-auto max-w-6xl space-y-8 px-6 lg:px-10">
          <SectionHeader
            label={copy.putting.label}
            title={<span className="text-[#1B1B1A]">{copy.putting.title}</span>}
            subtitle={copy.putting.subtitle}
            align="left"
            animated={false}
          />

          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="space-y-5">
              <div className="rounded-[28px] border border-[#E3DED3] bg-white p-6 shadow-[0_20px_55px_rgba(0,0,0,0.08)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E6DED2] bg-[#F7F5F0]">
                  <Wind className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black text-[#1B1B1A]">{copy.putting.cardTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A473F] sm:text-base">
                  {copy.putting.cardDescription}
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {academyBenefits.map(item => (
                  <li
                    key={item}
                    className="rounded-[22px] border border-[#E6DED2] bg-white px-4 py-4 text-sm font-semibold text-[#2B2823] shadow-[0_14px_34px_rgba(0,0,0,0.06)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#E3DED3] bg-white shadow-[0_24px_65px_rgba(0,0,0,0.1)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/Academy/puttingroom.jpg"
                  alt="Msport Golf Academy indoor putting room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-white">
        <div className="mx-auto max-w-6xl space-y-8 px-6 lg:px-10">
          <SectionHeader
            label={copy.coaches.label}
            title={<span className="text-white">{copy.coaches.title}</span>}
            subtitle={copy.coaches.subtitle}
            align="left"
            animated={false}
            subtitleClassName="subtitle-accent text-white/70"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {academyCoaches.map((coach, index) => (
              <article
                key={coach.name}
                className={`rounded-[30px] border px-5 py-6 shadow-[0_24px_65px_rgba(0,0,0,0.22)] transition-transform duration-500 hover:-translate-y-1 ${
                  index === 1
                    ? 'border-[var(--accent)]/22 bg-[linear-gradient(180deg,rgba(239,68,68,0.12),rgba(255,255,255,0.04))]'
                    : 'border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]'
                }`}
              >
                <div className="mb-5 overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                  <div className="relative aspect-[4/4.4] w-full">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-[0.58rem] uppercase tracking-[0.4em] text-[var(--accent)]">{coach.credential}</p>
                <h3 className="mt-3 text-3xl font-black text-white">{coach.name}</h3>
                <p className="mt-2 text-lg font-semibold text-white/80">{coach.role}</p>
                <div className="mt-4 h-px w-14 bg-gradient-to-r from-[var(--accent)]/80 to-transparent" />
                <p className="mt-4 text-sm leading-relaxed text-white/65">{coach.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] py-20 text-[#1B1B1A]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[34px] border border-[#E3DED3] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,245,240,0.92))] px-5 py-8 shadow-[0_30px_90px_rgba(0,0,0,0.12)] sm:px-7 sm:py-10 lg:px-10 lg:py-12">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(214,201,184,0.3),transparent_62%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-16 top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_65%)] blur-2xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-12 bottom-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(214,201,184,0.2),transparent_60%)] blur-2xl"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-8">
              <div className="mx-auto max-w-3xl text-center">
                <SectionHeader
                  label={copy.booking.label}
                  title={<span className="text-[#1B1B1A]">{copy.booking.title}</span>}
                  subtitle={copy.booking.subtitle}
                  align="center"
                  animated={false}
                  subtitleClassName="subtitle-accent text-[var(--accent)]"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
                {bookingChannels.map(channel => {
                  const Icon = channel.icon;

                  return (
                    <article
                      key={channel.label}
                      className="group relative overflow-hidden rounded-[28px] border border-[#E3DED3] bg-white px-5 py-5 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d7c8ba] sm:px-6 sm:py-6"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_55%)]" />
                      </div>
                      <div className="relative z-10 flex h-full flex-col gap-4">
                        <div className="flex justify-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E6DED2] bg-[#F7F5F0] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                            <Icon className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <p className="text-[0.62rem] uppercase tracking-[0.45em] text-[#7A7468]">{channel.label}</p>
                          <Link
                            href={channel.href}
                            target={channel.href.startsWith('http') ? '_blank' : undefined}
                            rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                            className="block break-words text-lg leading-tight font-black text-[#1B1B1A] transition-colors hover:text-[var(--accent)] sm:text-[1.35rem]"
                          >
                            {channel.value}
                          </Link>
                          <p className="mx-auto max-w-xs text-sm leading-relaxed text-[#4A473F]">{channel.helper}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
