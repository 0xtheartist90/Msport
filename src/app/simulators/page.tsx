import Image from 'next/image';
import Link from 'next/link';
import { getServerLanguage } from '@/lib/i18n';

import { MobilePagedGridCarousel } from '@/components/MobilePagedGridCarousel';
import { SectionHeader } from '@/components/SectionHeader';

import {
    ArrowRight,
    ClipboardList,
    Clock4,
    Crosshair,
    Gamepad2,
    Globe2,
    LineChart,
    Mail,
    PhoneCall,
    Ruler,
    Target,
    Trophy
} from 'lucide-react';

const simLoopImages = Array.from({ length: 9 }, (_, index) =>
    `/images/SIM/Simloop/Simloop${String(index + 1).padStart(2, '0')}.png`
);

const simulatorsCopy = {
    EN: {
        hero: {
            label: 'TrackMan Suites',
            title: 'SIM ROOMS',
            description: 'Private TrackMan rooms built for data sessions, casual rounds, and focused year-round practice.'
        },
        performance: {
            label: 'Premium Suite',
            title: 'Performance Bay',
            subtitle: 'Built for players who want real data and full TrackMan access.',
            description:
                'Full TrackMan Performance Center access, Test Center analysis, attack angle metrics, and complete club delivery tracking, all within the Performance Bay suite.',
            cta: 'Reserve Performance Bay'
        },
        pricing: {
            label: 'Packages',
            title: 'Pricing',
            subtitle: 'Hour-based access and value packs for every bay.',
            packageLabel: 'Package',
            priceLabel: 'Price',
            prepaidHours: 'Prepaid simulator hours',
            packages: [
                {
                    title: 'Room 1 & 2',
                    hourly: '500 THB / hour',
                    capacity: '1–4 people',
                    instantAccess: 'Instant access',
                    tiers: [
                        { label: '10 Hours', price: '4,800 THB' },
                        { label: '30 Hours', price: '14,100 THB' },
                        { label: '50 Hours', price: '22,500 THB' }
                    ]
                },
                {
                    title: 'Room 3 – Performance Bay',
                    hourly: '700 THB / hour',
                    capacity: '1–6 people',
                    instantAccess: 'Instant access',
                    premium: 'Premium',
                    tiers: [
                        { label: '10 Hours', price: '6,800 THB' },
                        { label: '30 Hours', price: '20,100 THB' },
                        { label: '50 Hours', price: '32,500 THB' }
                    ]
                }
            ],
            coachingFeeLabel: 'Coaching Fee',
            perHour: 'per hour',
            policyLabel: 'Coaching Policy',
            policyTitle: 'Bring Your Instructor',
            policyDescription: 'External coaches are welcome, and simulator points still accumulate during coached sessions.'
        },
        loopAlt: 'TrackMan simulator experience montage',
        highlights: [
            { title: 'Advanced Analytics', copy: 'Complete ball-flight and club-delivery data.' },
            { title: 'Measurable Progress', copy: 'Track dispersion, carry, and consistency over time.' },
            { title: 'Purposeful Training', copy: 'Built-in tools for structured improvement.' },
            { title: 'Global Courses', copy: '300+ playable courses in one system.' }
        ],
        features: {
            label: 'Inside Every Session',
            title: 'Features',
            subtitle: 'Eight focused tools built into every simulator session.',
            cards: [
                { title: 'Range', description: 'Instant ball-flight feedback inside every suite.', icon: Target },
                { title: 'Performance Center', description: 'Full TrackMan diagnostics with saved sessions.', icon: LineChart },
                { title: '300+ Courses', description: 'Global championship venues rendered in 4K.', icon: Globe2 },
                { title: 'Map My Bag', description: 'Dial in gapping across every club in your set.', icon: Ruler },
                { title: 'Test Center', description: 'Structured shot lists to benchmark dispersion.', icon: ClipboardList },
                { title: 'Target Practice', description: 'Adjustable targets for wedge matrix training.', icon: Crosshair },
                { title: '9 Game Modes', description: 'Compete with combines, long drive, and accuracy.', icon: Gamepad2 },
                { title: 'Competitions', description: 'Create leaderboards with on-screen scoring.', icon: Trophy }
            ]
        },
        booking: {
            label: 'Booking',
            title: 'Lock In Your TrackMan Time',
            subtitle: 'Private suites, elite data, daily access with on-site support.',
            contacts: [
                {
                    label: 'Hours',
                    value: 'Open daily 10:00 AM – 10:00 PM',
                    helper: 'After 8:00 PM requires advance booking one day prior.',
                    icon: Clock4
                },
                {
                    label: 'Phone',
                    value: '065 134 7777',
                    helper: 'Best for quick confirmations and same-day slot checks.',
                    icon: PhoneCall,
                    href: 'tel:+66651347777'
                },
                {
                    label: 'Email',
                    value: 'msport.golfsimulator@gmail.com',
                    helper: 'Best for advance reservations and private groups.',
                    icon: Mail,
                    href: 'mailto:msport.golfsimulator@gmail.com'
                }
            ],
            flow: {
                label: 'Recommended flow',
                title: 'Reserve online. Confirm fast if needed.',
                description: 'Clean for planned bookings. Fast for last-minute slots.',
                primaryCta: 'Reserve now',
                secondaryCta: 'Call 065 134 7777'
            }
        }
    },
    TH: {
        hero: {
            label: 'ห้อง TrackMan',
            title: 'ห้องซิมูเลเตอร์',
            description: 'ห้อง TrackMan ส่วนตัวสำหรับซ้อมแบบดูข้อมูล เล่นรอบสนุก ๆ และฝึกอย่างจริงจังได้ตลอดปี'
        },
        performance: {
            label: 'ห้องพรีเมียม',
            title: 'เพอร์ฟอร์แมนซ์ เบย์',
            subtitle: 'สร้างมาสำหรับผู้เล่นที่ต้องการข้อมูลลึกและการเข้าถึง TrackMan แบบเต็มระบบ',
            description:
                'ใช้งาน TrackMan ศูนย์วิเคราะห์, ศูนย์ทดสอบ, ข้อมูลมุมปะทะ และข้อมูลการส่งหัวไม้ได้ครบภายในเพอร์ฟอร์แมนซ์ เบย์',
            cta: 'จองเพอร์ฟอร์แมนซ์ เบย์'
        },
        pricing: {
            label: 'แพ็กเกจ',
            title: 'ราคา',
            subtitle: 'เข้าใช้งานแบบรายชั่วโมงและแบบแพ็กคุ้มค่าสำหรับทุกห้อง',
            packageLabel: 'แพ็กเกจ',
            priceLabel: 'ราคา',
            prepaidHours: 'ชั่วโมงซิมูเลเตอร์แบบเติมล่วงหน้า',
            packages: [
                {
                    title: 'ห้อง 1 และ 2',
                    hourly: '500 บาท / ชั่วโมง',
                    capacity: '1–4 คน',
                    instantAccess: 'เข้าใช้งานได้ทันที',
                    tiers: [
                        { label: '10 ชั่วโมง', price: '4,800 บาท' },
                        { label: '30 ชั่วโมง', price: '14,100 บาท' },
                        { label: '50 ชั่วโมง', price: '22,500 บาท' }
                    ]
                },
                {
                    title: 'ห้อง 3 – เพอร์ฟอร์แมนซ์ เบย์',
                    hourly: '700 บาท / ชั่วโมง',
                    capacity: '1–6 คน',
                    instantAccess: 'เข้าใช้งานได้ทันที',
                    premium: 'พรีเมียม',
                    tiers: [
                        { label: '10 ชั่วโมง', price: '6,800 บาท' },
                        { label: '30 ชั่วโมง', price: '20,100 บาท' },
                        { label: '50 ชั่วโมง', price: '32,500 บาท' }
                    ]
                }
            ],
            coachingFeeLabel: 'ค่าผู้สอน',
            perHour: 'ต่อชั่วโมง',
            policyLabel: 'นโยบายโค้ช',
            policyTitle: 'พาโค้ชของคุณมาได้',
            policyDescription: 'สามารถพาโค้ชภายนอกมาใช้งานได้ และแต้มสะสมของห้องซิมูเลเตอร์ยังคงได้รับตามปกติ'
        },
        loopAlt: 'บรรยากาศการใช้งานห้องซิมูเลเตอร์ TrackMan',
        highlights: [
            { title: 'ข้อมูลขั้นสูง', copy: 'ดูข้อมูลลูกและหัวไม้ได้ละเอียดครบถ้วน' },
            { title: 'เห็นพัฒนาการชัดเจน', copy: 'ติดตาม dispersion, carry และความสม่ำเสมอได้ต่อเนื่อง' },
            { title: 'ซ้อมอย่างมีเป้าหมาย', copy: 'มีเครื่องมือในระบบสำหรับซ้อมแบบมีโครงสร้าง' },
            { title: 'สนามจากทั่วโลก', copy: 'เล่นสนามระดับโลกกว่า 300 สนามในระบบเดียว' }
        ],
        features: {
            label: 'ภายในทุกเซสชัน',
            title: 'ฟีเจอร์',
            subtitle: '8 เครื่องมือหลักที่ได้ในทุกเซสชัน',
            cards: [
                { title: 'สนามฝึกซ้อม', description: 'เห็นไฟลต์บอลทันทีในทุกห้อง', icon: Target },
                { title: 'ศูนย์วิเคราะห์', description: 'วิเคราะห์ TrackMan แบบเต็มระบบพร้อมบันทึกเซสชัน', icon: LineChart },
                { title: '300+ สนาม', description: 'สนามระดับโลกกว่า 300 สนามในภาพ 4K', icon: Globe2 },
                { title: 'จัดระยะทั้งถุง', description: 'จัดระยะของทุกไม้ในถุงให้แม่นยำขึ้น', icon: Ruler },
                { title: 'ศูนย์ทดสอบ', description: 'ลิสต์ช็อตแบบมีโครงสร้างสำหรับเทียบ dispersion', icon: ClipboardList },
                { title: 'ฝึกเป้าหมาย', description: 'ตั้งเป้าซ้อมได้ละเอียดสำหรับเวดจ์และการคุมระยะ', icon: Crosshair },
                { title: '9 โหมดเกม', description: 'เล่นเกม แข่ง Long Drive และ Accuracy ได้ในระบบเดียว', icon: Gamepad2 },
                { title: 'การแข่งขัน', description: 'สร้างลีดเดอร์บอร์ดพร้อมคะแนนบนหน้าจอได้', icon: Trophy }
            ]
        },
        booking: {
            label: 'การจอง',
            title: 'จองเวลาของคุณใน TrackMan',
            subtitle: 'ห้องส่วนตัว ข้อมูลระดับลึก และการเข้าใช้งานทุกวันพร้อมทีมดูแลในพื้นที่',
            contacts: [
                {
                    label: 'เวลาเปิดบริการ',
                    value: 'เปิดทุกวัน 10:00 น. – 22:00 น.',
                    helper: 'หลัง 20:00 น. ต้องจองล่วงหน้าอย่างน้อย 1 วัน',
                    icon: Clock4
                },
                {
                    label: 'โทรศัพท์',
                    value: '065 134 7777',
                    helper: 'เหมาะสำหรับคอนเฟิร์มเร็วและเช็กคิววันเดียวกัน',
                    icon: PhoneCall,
                    href: 'tel:+66651347777'
                },
                {
                    label: 'อีเมล',
                    value: 'msport.golfsimulator@gmail.com',
                    helper: 'เหมาะสำหรับการจองล่วงหน้าและกลุ่มส่วนตัว',
                    icon: Mail,
                    href: 'mailto:msport.golfsimulator@gmail.com'
                }
            ],
            flow: {
                label: 'ขั้นตอนแนะนำ',
                title: 'จองออนไลน์ก่อน ถ้าต้องการเร็วค่อยคอนเฟิร์มเพิ่ม',
                description: 'เหมาะทั้งการจองล่วงหน้าและการหาช่องว่างแบบเร่งด่วน',
                primaryCta: 'จองตอนนี้',
                secondaryCta: 'โทร 065 134 7777'
            }
        }
    }
    ,
    KO: {
        hero: {
            label: 'TrackMan 스위트',
            title: '시뮬레이터 룸',
            description: '데이터 세션, 캐주얼 라운드, 연중 집중 연습을 위한 프라이빗 TrackMan 룸.'
        },
        performance: {
            label: '프리미엄 스위트',
            title: '퍼포먼스 베이',
            subtitle: '실제 데이터와 완전한 TrackMan 접근을 원하는 플레이어를 위한 공간.',
            description:
                'TrackMan 퍼포먼스 센터, 테스트 센터, 어택 앵글, 클럽 딜리버리 데이터까지 하나의 퍼포먼스 베이 안에서 모두 확인할 수 있습니다.',
            cta: '퍼포먼스 베이 예약'
        },
        pricing: {
            label: '패키지',
            title: '가격',
            subtitle: '각 룸에 맞춘 시간 단위 이용권과 가치형 패키지.',
            packageLabel: '패키지',
            priceLabel: '가격',
            prepaidHours: '선결제 시뮬레이터 이용 시간',
            packages: [
                { title: '룸 1 & 2', hourly: '500 THB / 시간', capacity: '1–4명', instantAccess: '즉시 이용 가능', tiers: [{ label: '10시간', price: '4,800 THB' }, { label: '30시간', price: '14,100 THB' }, { label: '50시간', price: '22,500 THB' }] },
                { title: '룸 3 – 퍼포먼스 베이', hourly: '700 THB / 시간', capacity: '1–6명', instantAccess: '즉시 이용 가능', premium: '프리미엄', tiers: [{ label: '10시간', price: '6,800 THB' }, { label: '30시간', price: '20,100 THB' }, { label: '50시간', price: '32,500 THB' }] }
            ],
            coachingFeeLabel: '코칭 비용',
            perHour: '시간당',
            policyLabel: '코칭 정책',
            policyTitle: '외부 코치 동반 가능',
            policyDescription: '외부 코치와 함께 사용해도 되며, 시뮬레이터 포인트도 정상 적립됩니다.'
        },
        loopAlt: 'TrackMan 시뮬레이터 경험 몽타주',
        highlights: [
            { title: '고급 분석', copy: '볼 플라이트와 클럽 딜리버리 데이터를 완전하게 확인.' },
            { title: '측정 가능한 발전', copy: '분산, 캐리, 일관성을 시간에 따라 추적.' },
            { title: '목적 있는 훈련', copy: '구조화된 향상을 위한 내장 도구.' },
            { title: '글로벌 코스', copy: '하나의 시스템에서 300개 이상의 코스 플레이.' }
        ],
        features: {
            label: '모든 세션 안에서',
            title: '기능',
            subtitle: '모든 시뮬레이터 세션에 포함되는 8가지 핵심 툴.',
            cards: [
                { title: '레인지', description: '모든 스위트에서 즉시 볼 플라이트 피드백.', icon: Target },
                { title: '퍼포먼스 센터', description: '세션 저장이 가능한 풀 TrackMan 진단.', icon: LineChart },
                { title: '300개 이상 코스', description: '4K로 구현된 세계적인 코스들.', icon: Globe2 },
                { title: '클럽 거리 맵', description: '가방 안 모든 클럽의 거리 간격을 정리.', icon: Ruler },
                { title: '테스트 센터', description: '분산 비교를 위한 구조화된 샷 리스트.', icon: ClipboardList },
                { title: '타깃 연습', description: '웨지 거리 훈련을 위한 가변 타깃.', icon: Crosshair },
                { title: '9가지 게임 모드', description: '콤바인, 롱드라이브, 정확도 게임까지.', icon: Gamepad2 },
                { title: '대회 모드', description: '화면 내 리더보드 경기 생성.', icon: Trophy }
            ]
        },
        booking: {
            label: '예약',
            title: 'TrackMan 시간을 확보하세요',
            subtitle: '프라이빗 스위트, 깊이 있는 데이터, 현장 지원까지.',
            contacts: [
                { label: '운영 시간', value: '매일 10:00 – 22:00 운영', helper: '20:00 이후는 하루 전 사전 예약 필요.', icon: Clock4 },
                { label: '전화', value: '065 134 7777', helper: '빠른 확인과 당일 슬롯 문의에 적합.', icon: PhoneCall, href: 'tel:+66651347777' },
                { label: '이메일', value: 'msport.golfsimulator@gmail.com', helper: '사전 예약과 프라이빗 그룹 문의에 적합.', icon: Mail, href: 'mailto:msport.golfsimulator@gmail.com' }
            ],
            flow: {
                label: '추천 흐름',
                title: '먼저 온라인 예약, 필요하면 빠르게 확인.',
                description: '계획된 예약에도, 급한 슬롯 확인에도 적합합니다.',
                primaryCta: '지금 예약',
                secondaryCta: '전화 065 134 7777'
            }
        }
    },
    ZH: {
        hero: {
            label: 'TrackMan 套房',
            title: '模拟器房间',
            description: '适用于数据训练、休闲回合与全年专注练习的私密 TrackMan 房间。'
        },
        performance: {
            label: '高级套房',
            title: '性能包厢',
            subtitle: '为希望获得真实数据与完整 TrackMan 体验的球手打造。',
            description:
                '在性能包厢内即可使用 TrackMan 表现中心、测试中心、进攻角度与完整杆头传递数据。',
            cta: '预订性能包厢'
        },
        pricing: {
            label: '套餐',
            title: '价格',
            subtitle: '适用于每个房间的按小时使用与价值套餐。',
            packageLabel: '套餐',
            priceLabel: '价格',
            prepaidHours: '预付模拟器小时数',
            packages: [
                { title: '房间 1 与 2', hourly: '500 THB / 小时', capacity: '1–4人', instantAccess: '立即使用', tiers: [{ label: '10 小时', price: '4,800 THB' }, { label: '30 小时', price: '14,100 THB' }, { label: '50 小时', price: '22,500 THB' }] },
                { title: '房间 3 – 性能包厢', hourly: '700 THB / 小时', capacity: '1–6人', instantAccess: '立即使用', premium: '高级', tiers: [{ label: '10 小时', price: '6,800 THB' }, { label: '30 小时', price: '20,100 THB' }, { label: '50 小时', price: '32,500 THB' }] }
            ],
            coachingFeeLabel: '教学费用',
            perHour: '每小时',
            policyLabel: '教学政策',
            policyTitle: '可自带教练',
            policyDescription: '欢迎外部教练陪同使用，模拟器积分仍可正常累计。'
        },
        loopAlt: 'TrackMan 模拟器体验影像',
        highlights: [
            { title: '高级分析', copy: '完整查看球路与杆头传递数据。' },
            { title: '可量化进步', copy: '持续追踪 dispersion、carry 与稳定性。' },
            { title: '有目标的训练', copy: '系统内置工具支持结构化练习。' },
            { title: '全球球场', copy: '一个系统即可畅玩 300 多座球场。' }
        ],
        features: {
            label: '每次训练中',
            title: '功能',
            subtitle: '每次模拟器训练都包含的 8 个核心工具。',
            cards: [
                { title: '练习场', description: '每个房间内即时获得球路反馈。', icon: Target },
                { title: '表现中心', description: '可保存训练记录的完整 TrackMan 诊断。', icon: LineChart },
                { title: '300+ 球场', description: '4K 呈现的全球经典球场。', icon: Globe2 },
                { title: '球包距离图', description: '梳理整套球杆的距离间隔。', icon: Ruler },
                { title: '测试中心', description: '通过结构化击球列表测试 dispersion。', icon: ClipboardList },
                { title: '目标练习', description: '可调目标的短杆距离训练。', icon: Crosshair },
                { title: '9 种游戏模式', description: '包含 combine、长打与精准度等模式。', icon: Gamepad2 },
                { title: '竞赛模式', description: '创建带排行榜的屏幕比赛。', icon: Trophy }
            ]
        },
        booking: {
            label: '预订',
            title: '锁定你的 TrackMan 时间',
            subtitle: '私密套房、专业数据与现场支持，一次到位。',
            contacts: [
                { label: '营业时间', value: '每日 10:00 – 22:00 开放', helper: '20:00 后需至少提前一天预约。', icon: Clock4 },
                { label: '电话', value: '065 134 7777', helper: '适合快速确认与当天时段查询。', icon: PhoneCall, href: 'tel:+66651347777' },
                { label: '邮箱', value: 'msport.golfsimulator@gmail.com', helper: '适合提前预约与私密团体。', icon: Mail, href: 'mailto:msport.golfsimulator@gmail.com' }
            ],
            flow: {
                label: '推荐流程',
                title: '先在线预订，如有需要再快速确认。',
                description: '适合计划性预订，也适合临时确认空档。',
                primaryCta: '立即预订',
                secondaryCta: '拨打 065 134 7777'
            }
        }
    },
    JA: {
        hero: {
            label: 'TrackMan スイート',
            title: 'シミュレータールーム',
            description: 'データセッション、カジュアルラウンド、年間を通した集中練習のためのプライベート TrackMan ルーム。'
        },
        performance: {
            label: 'プレミアムスイート',
            title: 'パフォーマンスベイ',
            subtitle: '本格的なデータとフル TrackMan 機能を求めるプレーヤー向け。',
            description:
                'TrackMan パフォーマンスセンター、テストセンター、アタックアングル、クラブデリバリーのデータまで、すべてパフォーマンスベイで確認できます。',
            cta: 'パフォーマンスベイを予約'
        },
        pricing: {
            label: 'パッケージ',
            title: '料金',
            subtitle: '各ベイに合わせた時間利用とお得なプリペイドパック。',
            packageLabel: 'パッケージ',
            priceLabel: '価格',
            prepaidHours: '前払いシミュレーター時間',
            packages: [
                { title: 'ルーム 1 & 2', hourly: '500 THB / 時間', capacity: '1–4名', instantAccess: 'すぐ利用可能', tiers: [{ label: '10時間', price: '4,800 THB' }, { label: '30時間', price: '14,100 THB' }, { label: '50時間', price: '22,500 THB' }] },
                { title: 'ルーム 3 – パフォーマンスベイ', hourly: '700 THB / 時間', capacity: '1–6名', instantAccess: 'すぐ利用可能', premium: 'プレミアム', tiers: [{ label: '10時間', price: '6,800 THB' }, { label: '30時間', price: '20,100 THB' }, { label: '50時間', price: '32,500 THB' }] }
            ],
            coachingFeeLabel: 'コーチ料金',
            perHour: '1時間あたり',
            policyLabel: 'コーチポリシー',
            policyTitle: '外部コーチ同伴可',
            policyDescription: '外部コーチと一緒に利用でき、シミュレーターポイントも通常どおり加算されます。'
        },
        loopAlt: 'TrackMan シミュレーター体験モンタージュ',
        highlights: [
            { title: '高度な分析', copy: 'ボールフライトとクラブデリバリーを完全把握。' },
            { title: '測定できる進歩', copy: '分散、キャリー、一貫性を継続的に追跡。' },
            { title: '目的ある練習', copy: '構造化された上達を支える内蔵ツール。' },
            { title: '世界のコース', copy: '300以上のコースを一つのシステムでプレー。' }
        ],
        features: {
            label: 'すべてのセッション内で',
            title: '機能',
            subtitle: 'すべてのセッションに含まれる 8 つの主要機能。',
            cards: [
                { title: 'レンジ', description: '各スイートで即時にボールフライトを確認。', icon: Target },
                { title: 'パフォーマンスセンター', description: 'セッション保存付きのフル TrackMan 診断。', icon: LineChart },
                { title: '300以上のコース', description: '4K で再現された世界の名門コース。', icon: Globe2 },
                { title: 'バッグ距離マップ', description: 'バッグ内すべてのクラブの距離差を整理。', icon: Ruler },
                { title: 'テストセンター', description: '分散を比較する構造化ショットリスト。', icon: ClipboardList },
                { title: 'ターゲット練習', description: '距離感を整える可変ターゲット練習。', icon: Crosshair },
                { title: '9つのゲームモード', description: 'コンバイン、ロングドライブ、精度ゲームまで。', icon: Gamepad2 },
                { title: '競技モード', description: 'スクリーン上でリーダーボード付き競技を作成。', icon: Trophy }
            ]
        },
        booking: {
            label: '予約',
            title: 'TrackMan の時間を確保する',
            subtitle: 'プライベートスイート、深いデータ、現地サポートまで一体で。',
            contacts: [
                { label: '営業時間', value: '毎日 10:00 – 22:00', helper: '20:00 以降は前日までの事前予約が必要です。', icon: Clock4 },
                { label: '電話', value: '065 134 7777', helper: '素早い確認や当日枠の相談に適しています。', icon: PhoneCall, href: 'tel:+66651347777' },
                { label: 'メール', value: 'msport.golfsimulator@gmail.com', helper: '事前予約やプライベートグループに最適。', icon: Mail, href: 'mailto:msport.golfsimulator@gmail.com' }
            ],
            flow: {
                label: 'おすすめの流れ',
                title: 'まずはオンライン予約、必要ならすぐ確認。',
                description: '計画的な予約にも、直前の空き確認にも向いています。',
                primaryCta: '今すぐ予約',
                secondaryCta: '電話 065 134 7777'
            }
        }
    }
} as const;

export default async function SimulatorsPage() {
    const language = await getServerLanguage();
    const isThai = language === 'TH';
    const copy = simulatorsCopy[language];
    const packages = copy.pricing.packages;
    const performanceFeatures = copy.features.cards;
    const bookingContacts = copy.booking.contacts;

    return (
        <main className='section-smoke min-h-screen'>
            <section className='relative h-[55vh] min-h-[420px] overflow-hidden bg-black'>
                <video autoPlay loop muted playsInline className='absolute inset-0 h-full w-full object-cover'>
                    <source src='/images/SIM/Simhero.mp4' type='video/mp4' />
                </video>
                <div className='absolute inset-0 bg-gradient-to-r from-black/82 via-black/42 to-transparent' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent' />
                <div className='relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center gap-4 px-6 text-center text-white lg:px-12'>
                    <p className={`accent-pill reveal reveal-down ${isThai ? 'px-4 py-2 tracking-[0.1em] leading-[1.3]' : ''}`}>{copy.hero.label}</p>
                    <h1 className={`reveal reveal-up text-white ${isThai ? 'font-black leading-[1.12] tracking-[-0.01em] text-[clamp(2.6rem,7vw,4.85rem)]' : 'hero-title'}`}>
                        <span className='block'>{copy.hero.title}</span>
                    </h1>
                    <p className='reveal reveal-up reveal-delay-1 max-w-2xl text-sm leading-relaxed text-white/78 sm:text-base'>
                        {copy.hero.description}
                    </p>
                </div>
            </section>

            <section className='py-20 text-white'>
                <div className='mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10'>
                    <div className='space-y-5'>
                        <SectionHeader
                            label={copy.performance.label}
                            title={<span className='text-white'>{copy.performance.title}</span>}
                            subtitle={copy.performance.subtitle}
                            align='left'
                            subtitleClassName='subtitle-accent text-white/80'
                        />
                        <p className='text-white/80 reveal reveal-up reveal-delay-3'>{copy.performance.description}</p>
                        <Link
                            href='/checkout'
                            className='accent-bg inline-flex rounded-xl px-6 py-3 text-sm font-semibold reveal reveal-up reveal-delay-4'>
                            {copy.performance.cta}
                        </Link>
                    </div>
                    <div className='relative overflow-hidden rounded-[32px] border-2 border-[var(--accent)] shadow-[0_35px_90px_rgba(0,0,0,0.5)] reveal reveal-right reveal-delay-2'>
                        <Image
                            src='/images/SIM/room3.png'
                            alt={copy.performance.title}
                            width={1200}
                            height={1400}
                            className='h-full w-full object-cover'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/35 to-transparent' />
                    </div>
                </div>
            </section>

            <section className='bg-[#F7F5F0] py-20'>
                <div className='mx-auto max-w-6xl space-y-8 px-6 text-[#1B1B1A] lg:px-10'>
                    <SectionHeader
                        label={copy.pricing.label}
                        title={<span className='text-[#1B1B1A]'>{copy.pricing.title}</span>}
                        subtitle={copy.pricing.subtitle}
                        align='center'
                    />
                    <MobilePagedGridCarousel
                        className='sm:hidden'
                        itemsPerPage={1}
                        pageClassName='grid grid-cols-1'
                    >
                        {packages.map((pkg, index) => {
                            const isPerformance = index === 1;

                            return (
                                <div
                                    key={pkg.title}
                                    className={`reveal reveal-up reveal-delay-${Math.min(index + 1, 2)}`}
                                >
                                    <article
                                        className={`group relative transform-gpu overflow-hidden rounded-[30px] px-5 py-5 transition-transform duration-700 ease-out hover:-translate-y-2 ${
                                            isPerformance
                                                ? 'border border-[var(--accent)]/25 bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(247,245,240,0.92))]'
                                                : 'border border-[#E4DDD0] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,245,240,0.88))]'
                                        }`}
                                    >
                                        <div
                                            className={`pointer-events-none absolute inset-0 opacity-90 ${
                                                isPerformance
                                                    ? 'bg-[radial-gradient(circle_at_top_right,rgba(214,201,184,0.28),transparent_42%)]'
                                                    : 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_38%)]'
                                            }`}
                                            aria-hidden='true'
                                        />
                                        <div className='relative z-10 space-y-5'>
                                            <div className='flex items-start justify-between gap-4'>
                                                <div className='space-y-2'>
                                                    <p className='text-[0.58rem] tracking-[0.45em] text-[var(--accent)] uppercase'>
                                                        {pkg.title}
                                                    </p>
                                                    <h4 className='text-[clamp(2.2rem,4vw,3rem)] font-black text-[#161513]'>
                                                        {pkg.hourly}
                                                    </h4>
                                                </div>
                                                {isPerformance ? (
                                                    <span className='rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/8 px-3 py-1 text-[0.58rem] font-semibold tracking-[0.28em] text-[var(--accent)] uppercase'>
                                                        {'premium' in pkg ? pkg.premium : null}
                                                    </span>
                                                ) : null}
                                            </div>

                                            <div className='flex flex-wrap gap-2'>
                                                {pkg.capacity ? (
                                                    <p className='inline-flex items-center rounded-full border border-[#DCD4C6] bg-white/70 px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.28em] text-[#2F2B24] uppercase'>
                                                        {pkg.capacity}
                                                    </p>
                                                ) : null}
                                                <p className='inline-flex items-center rounded-full border border-[#E5DED2] bg-[#F7F5F0] px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.28em] text-[#6A6458] uppercase'>
                                                    {pkg.instantAccess}
                                                </p>
                                            </div>

                                            <div className='overflow-hidden rounded-[24px] border border-[#E8E1D6] bg-white/80'>
                                                <div className='grid grid-cols-[1fr_auto] gap-3 border-b border-[#ECE4D7] px-4 py-3 text-[0.58rem] tracking-[0.35em] text-[#7A7468] uppercase'>
                                                    <span>{copy.pricing.packageLabel}</span>
                                                    <span>{copy.pricing.priceLabel}</span>
                                                </div>
                                                {pkg.tiers.map((tier, idx) => (
                                                    <div
                                                        key={tier.label}
                                                        className={`grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-4 text-[#1F1D19] ${
                                                            idx !== 0 ? 'border-t border-[#EBE4D8]' : ''
                                                        }`}
                                                    >
                                                        <div className='space-y-1'>
                                                            <p className='text-sm font-semibold tracking-[0.16em] text-[#2B2823] uppercase'>
                                                                {tier.label}
                                                            </p>
                                                            <p className='text-xs text-[#7A7468]'>{copy.pricing.prepaidHours}</p>
                                                        </div>
                                                        <span className='text-xl font-black'>{tier.price}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            );
                        })}
                    </MobilePagedGridCarousel>
                    <div className='hidden gap-5 sm:grid lg:grid-cols-2'>
                        {packages.map((pkg, index) => {
                            const isPerformance = index === 1;

                            return (
                                <div
                                    key={pkg.title}
                                    className={`reveal reveal-up reveal-delay-${Math.min(index + 1, 2)}`}
                                >
                                    <article
                                        className={`group relative transform-gpu overflow-hidden rounded-[30px] px-6 py-6 shadow-[0_24px_65px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)] ${
                                            isPerformance
                                                ? 'border border-[var(--accent)]/25 bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(247,245,240,0.92))]'
                                                : 'border border-[#E4DDD0] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,245,240,0.88))]'
                                        }`}
                                    >
                                        <div
                                            className={`pointer-events-none absolute inset-0 opacity-90 ${
                                                isPerformance
                                                    ? 'bg-[radial-gradient(circle_at_top_right,rgba(214,201,184,0.28),transparent_42%)]'
                                                    : 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_38%)]'
                                            }`}
                                            aria-hidden='true'
                                        />
                                        <div className='relative z-10 space-y-5'>
                                            <div className='flex items-start justify-between gap-4'>
                                                <div className='space-y-2'>
                                                    <p className='text-[0.58rem] tracking-[0.45em] text-[var(--accent)] uppercase'>
                                                        {pkg.title}
                                                    </p>
                                                    <h4 className='text-[clamp(2.2rem,4vw,3rem)] font-black text-[#161513]'>
                                                        {pkg.hourly}
                                                    </h4>
                                                </div>
                                                {isPerformance ? (
                                                    <span className='rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/8 px-3 py-1 text-[0.58rem] font-semibold tracking-[0.28em] text-[var(--accent)] uppercase'>
                                                        {'premium' in pkg ? pkg.premium : null}
                                                    </span>
                                                ) : null}
                                            </div>

                                            <div className='flex flex-wrap gap-2'>
                                                {pkg.capacity ? (
                                                    <p className='inline-flex items-center rounded-full border border-[#DCD4C6] bg-white/70 px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.28em] text-[#2F2B24] uppercase'>
                                                        {pkg.capacity}
                                                    </p>
                                                ) : null}
                                                <p className='inline-flex items-center rounded-full border border-[#E5DED2] bg-[#F7F5F0] px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.28em] text-[#6A6458] uppercase'>
                                                    {pkg.instantAccess}
                                                </p>
                                            </div>

                                            <div className='overflow-hidden rounded-[24px] border border-[#E8E1D6] bg-white/80'>
                                                <div className='grid grid-cols-[1fr_auto] gap-3 border-b border-[#ECE4D7] px-4 py-3 text-[0.58rem] tracking-[0.35em] text-[#7A7468] uppercase sm:px-5'>
                                                    <span>{copy.pricing.packageLabel}</span>
                                                    <span>{copy.pricing.priceLabel}</span>
                                                </div>
                                                {pkg.tiers.map((tier, idx) => (
                                                    <div
                                                        key={tier.label}
                                                        className={`grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-4 text-[#1F1D19] sm:px-5 ${
                                                            idx !== 0 ? 'border-t border-[#EBE4D8]' : ''
                                                        }`}
                                                    >
                                                        <div className='space-y-1'>
                                                            <p className='text-sm font-semibold tracking-[0.16em] text-[#2B2823] uppercase'>
                                                                {tier.label}
                                                            </p>
                                                            <p className='text-xs text-[#7A7468]'>{copy.pricing.prepaidHours}</p>
                                                        </div>
                                                        <span className='text-xl font-black sm:text-2xl'>{tier.price}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            );
                        })}
                    </div>
                    <div className='grid gap-5 rounded-[28px] border border-[#E3DED3] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,245,240,0.9))] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.1)] reveal reveal-up reveal-delay-3 sm:p-6 lg:grid-cols-[auto_1fr] lg:items-center'>
                        <div className='rounded-[22px] border border-[#E5DED2] bg-[#F7F5F0] px-5 py-4 text-left'>
                            <p className='text-[0.58rem] tracking-[0.35em] text-[#7A7468] uppercase'>{copy.pricing.coachingFeeLabel}</p>
                            <p className='mt-2 text-3xl font-black text-[#161513]'>+200 THB</p>
                            <p className='mt-1 text-sm text-[#5A564D]'>{copy.pricing.perHour}</p>
                        </div>
                        <div className='space-y-1.5 text-left'>
                            <p className='text-[0.62rem] font-semibold tracking-[0.35em] text-[var(--accent)] uppercase'>{copy.pricing.policyLabel}</p>
                            <p className='text-xl font-black text-[#1B1B1A]'>{copy.pricing.policyTitle}</p>
                            <p className='text-sm leading-relaxed text-[#4A473F] sm:text-base'>
                                {copy.pricing.policyDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='overflow-hidden bg-[#FAF2E5]'>
                <div className='relative'>
                    <div className='flex w-max min-w-max flex-nowrap animate-marquee-seamless-top [backface-visibility:hidden]' style={{ gap: 0, transform: 'translate3d(0,0,0)' }}>
                        {[0, 1].map(setIndex =>
                            simLoopImages.map(image => (
                                <Image
                                    key={`${image}-${setIndex}`}
                                    src={image}
                                    alt={copy.loopAlt}
                                    width={640}
                                    height={360}
                                    loading='lazy'
                                    className='block h-56 w-auto flex-shrink-0 object-cover sm:h-64'
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>

            <section className='py-20 text-white'>
                <div className='mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 md:gap-8 lg:px-10 xl:grid-cols-4'>
                    {[
                        ...copy.highlights
                    ].map((card, index) => (
                        <div
                            key={card.title}
                            className={`h-full reveal reveal-up reveal-delay-${Math.min(index + 1, 4)}`}>
                            <article className='group relative flex h-full min-h-[200px] transform-gpu flex-col overflow-hidden rounded-[30px] border border-white/12 bg-gradient-to-b from-white/12 via-white/6 to-transparent px-8 py-8 shadow-[0_35px_90px_rgba(0,0,0,0.45)] transition-transform duration-700 ease-out hover:-translate-y-3 hover:rotate-1 hover:shadow-[0_45px_120px_rgba(0,0,0,0.55)]'>
                                <div
                                    className='absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                                    aria-hidden='true'>
                                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18)_0%,_transparent_55%)]' />
                                </div>
                                <div
                                    className='absolute inset-x-[-40%] top-[-120%] h-[260%] rotate-6 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100'
                                    aria-hidden='true'
                                />
                                <div className='flex h-full flex-col'>
                                    <div className='flex min-h-[7rem] items-start'>
                                        <h4 className='text-[clamp(1.6rem,2.6vw,2rem)] leading-tight font-black tracking-tight text-white transition-transform duration-500 group-hover:-translate-y-1'>
                                            {card.title}
                                        </h4>
                                    </div>
                                    <div className='mt-auto space-y-3 text-sm text-white/80'>
                                        <div className='h-[1px] w-16 bg-gradient-to-r from-[#b91c1c] via-[#ef4444] to-transparent transition-all duration-500 group-hover:w-20' />
                                        <div className='flex min-h-[5.5rem] items-start'>
                                            <p className='text-base text-white/85 transition-colors duration-300 group-hover:text-white'>
                                                {card.copy}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='pointer-events-none absolute inset-0 rounded-[30px] border border-white/0 transition-colors duration-500 group-hover:border-white/15' />
                            </article>
                        </div>
                    ))}
                </div>
            </section>

            <section className='bg-[#F7F5F0] py-20'>
                <div className='mx-auto max-w-6xl space-y-8 px-6 text-center text-[#1B1B1A] lg:px-10'>
                    <SectionHeader
                        label={copy.features.label}
                        title={<span className='text-[#1B1B1A]'>{copy.features.title}</span>}
                        subtitle={copy.features.subtitle}
                        align='center'
                    />
                    <MobilePagedGridCarousel
                        className='sm:hidden'
                        itemsPerPage={2}
                        pageClassName='grid grid-cols-2 gap-3'
                    >
                        {performanceFeatures.map((feature, index) => (
                            <div
                                key={feature.title}
                                className={`reveal reveal-up reveal-delay-${Math.min(index + 1, 4)}`}>
                                <article className='group relative flex h-full min-h-[12.75rem] transform-gpu flex-col overflow-hidden rounded-[24px] border border-[#E4DDD0] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,245,240,0.86))] px-3 py-4 text-center text-[#1B1B1A] transition-transform duration-700 ease-out hover:-translate-y-1.5'>
                                    <div
                                        className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.68),transparent_42%)]'
                                        aria-hidden='true'
                                    />
                                    <div className='relative z-10 flex h-full flex-col'>
                                        <div className='mb-3 flex justify-center'>
                                            {(() => {
                                                const Icon = feature.icon;

                                                return <Icon className='h-6 w-6 text-[var(--accent)]' aria-hidden='true' />;
                                            })()}
                                        </div>
                                        <div className='flex h-full flex-col items-center'>
                                            <div className='flex min-h-[2.9rem] items-center'>
                                                <h3 className='text-[0.82rem] font-black leading-tight tracking-tight text-[#161513]'>
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <div className='mt-2 h-[1px] w-10 bg-gradient-to-r from-[#C9BBA7] to-transparent transition-all duration-500 group-hover:w-16' />
                                            <div className='mt-2 flex min-h-[4.4rem] items-start'>
                                                <p className='text-[0.68rem] leading-relaxed text-[#4A473F]'>
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </MobilePagedGridCarousel>
                    <div className='hidden grid-cols-2 gap-4 sm:grid xl:grid-cols-4 lg:gap-5'>
                        {performanceFeatures.map((feature, index) => (
                            <div
                                key={feature.title}
                                className={`reveal reveal-up reveal-delay-${Math.min(index + 1, 4)}`}>
                                <article className='group relative flex h-full transform-gpu flex-col overflow-hidden rounded-[24px] border border-[#E4DDD0] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,245,240,0.86))] px-5 py-6 text-center text-[#1B1B1A] shadow-[0_14px_34px_rgba(0,0,0,0.07)] transition-transform duration-700 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(0,0,0,0.1)]'>
                                    <div
                                        className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.68),transparent_42%)]'
                                        aria-hidden='true'
                                    />
                                    <div className='relative z-10 flex h-full flex-col'>
                                        <div className='mb-5 flex justify-center'>
                                            {(() => {
                                                const Icon = feature.icon;

                                                return <Icon className='h-8 w-8 text-[var(--accent)]' aria-hidden='true' />;
                                            })()}
                                        </div>
                                        <div className='flex h-full flex-col items-center'>
                                            <div className='flex min-h-[3.5rem] items-center'>
                                                <h3 className='text-[1.18rem] font-black leading-tight tracking-tight text-[#161513]'>
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <div className='mt-3 h-[1px] w-14 bg-gradient-to-r from-[#C9BBA7] to-transparent transition-all duration-500 group-hover:w-20' />
                                            <div className='mt-3 flex min-h-[4.75rem] items-start'>
                                                <p className='text-sm leading-relaxed text-[#4A473F]'>
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='py-20 text-white'>
                <div className='mx-auto max-w-6xl px-6 lg:px-10'>
                    <div className='relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.42)] sm:px-7 sm:py-10 lg:px-10 lg:py-12'>
                        <div
                            className='pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.22),transparent_62%)]'
                            aria-hidden='true'
                        />
                        <div
                            className='pointer-events-none absolute -left-16 top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_65%)] blur-2xl'
                            aria-hidden='true'
                        />
                        <div
                            className='pointer-events-none absolute -right-12 bottom-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.18),transparent_60%)] blur-2xl'
                            aria-hidden='true'
                        />
                        <div className='relative z-10 space-y-8 lg:space-y-10'>
                            <div className='mx-auto max-w-3xl text-center'>
                                <SectionHeader
                                    label={copy.booking.label}
                                    title={<span className='text-white'>{copy.booking.title}</span>}
                                    subtitle={copy.booking.subtitle}
                                    align='center'
                                    subtitleClassName='subtitle-accent text-[var(--accent)]'
                                />
                            </div>

                            <div className='relative'>
                                <div className='grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5'>
                                    {bookingContacts.map((contact, index) => (
                                        <div
                                            key={contact.label}
                                            className={`reveal reveal-up reveal-delay-${Math.min(index + 1, 3)} ${
                                                index === 0 ? 'col-span-2 md:col-span-1 xl:col-span-1' : ''
                                            }`}>
                                            <article
                                                className={`group relative transform-gpu overflow-hidden rounded-[28px] border px-5 py-5 text-left shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-transform duration-700 ease-out sm:px-6 sm:py-6 ${
                                                    index === 0
                                                        ? 'border-[var(--accent)]/30 bg-[linear-gradient(180deg,rgba(239,68,68,0.12),rgba(255,255,255,0.04))] hover:-translate-y-1'
                                                        : 'border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] hover:-translate-y-1 hover:border-white/20'
                                                }`}
                                            >
                                                <div
                                                    className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                                                    aria-hidden='true'>
                                                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_55%)]' />
                                                </div>
                                                <div className='relative z-10 flex h-full flex-col gap-5'>
                                                    {(() => {
                                                        const Icon = contact.icon;

                                                        return (
                                                            <div className='flex justify-center'>
                                                                <div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-black/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'>
                                                                    <Icon className='h-5 w-5 text-[var(--accent)]' aria-hidden='true' />
                                                                </div>
                                                            </div>
                                                        );
                                                    })()}

                                                    <div className='text-center'>
                                                        <p className='text-[0.62rem] tracking-[0.45em] text-white/45 uppercase'>
                                                            {contact.label}
                                                        </p>
                                                        <div className='mt-3 flex min-h-[3.25rem] items-center justify-center'>
                                                            {'href' in contact && contact.href ? (
                                                                <Link
                                                                    href={contact.href}
                                                                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                                                                    rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                                                                    className='block break-words text-lg leading-tight font-black text-white transition-colors hover:text-[var(--accent)] sm:text-[1.35rem]'
                                                                    style={{ overflowWrap: 'anywhere' }}>
                                                                    {contact.value}
                                                                </Link>
                                                            ) : (
                                                                <p className='text-lg leading-tight font-black text-white sm:text-[1.35rem]'>
                                                                    {contact.value}
                                                                </p>
                                                            )}
                                                        </div>
                                                        <div className='mt-3 flex min-h-[4.5rem] items-start justify-center'>
                                                            <p className='mx-auto max-w-xs text-sm leading-relaxed text-white/65'>
                                                                {contact.helper}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
