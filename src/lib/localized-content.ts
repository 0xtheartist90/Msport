import { facilityDirectory, type Facility } from '@/lib/facilities';
import { newsItems } from '@/lib/site-content';
import { type Product } from '@/lib/products';
import { type LanguageCode } from '@/lib/translations';

type ContentLanguage = 'EN' | 'TH' | 'KO' | 'ZH' | 'JA';
type NewsItem = (typeof newsItems)[number];

const resolveContentLanguage = (language: LanguageCode): ContentLanguage => {
  if (language === 'TH' || language === 'KO' || language === 'ZH' || language === 'JA') {
    return language;
  }

  return 'EN';
};

const facilityOverrides: Record<Exclude<ContentLanguage, 'EN'>, Record<string, Partial<Facility>>> = {
  TH: {
    'm-golf-kid-club': {
      description: 'โซนเสื้อผ้าและอุปกรณ์สำหรับเด็กโดยเฉพาะ พร้อมคำแนะนำด้านฟิตติ้งสำหรับนักกอล์ฟรุ่นเยาว์',
      summary: 'คลับเฮาส์รีเทลสำหรับเยาวชนที่รวมเสื้อผ้า ไม้กอล์ฟ และคำแนะนำในการเลือกอุปกรณ์ให้เหมาะกับเด็กแต่ละช่วงวัย',
      services: ['เสื้อผ้าและรองเท้าสำหรับเด็ก', 'ฟิตติ้งและทดลองไม้สำหรับเยาวชน', 'โซนเมอร์ชและเลานจ์สำหรับครอบครัว'],
      location: 'ชั้นล่าง ฝั่งตะวันตกของคอนคอร์สสนามไดร์ฟ',
      hours: 'ทุกวัน · 10:00 – 20:00'
    },
    'northgolf-cnx': {
      description: 'ทีมโค้ชและฟิตติ้งที่ดูแลบทเรียน การวิเคราะห์วงสวิง และการเลือกอุปกรณ์สำหรับนักกอล์ฟเชียงใหม่',
      summary: 'ทีมที่ใช้ TrackMan ช่วยเรื่องบทเรียน ฟิตติ้ง และการแนะนำอุปกรณ์อย่างครบวงจรสำหรับผู้เล่นทุกระดับ',
      services: ['บทเรียนตัวต่อตัว', 'คัสตอมฟิตติ้ง', 'สั่งและดูแลอุปกรณ์กอล์ฟ'],
      location: 'ชั้นลอยด้านบน · อาคาร B',
      hours: 'จันทร์ – เสาร์ · 09:00 – 21:00',
      contact: 'northgolf.cnx@msport.com'
    },
    'gn-golf-the-loft': {
      description: 'สตูดิโอเฉพาะทางด้าน loft/lie สำหรับประกอบเหล็ก ปรับเวดจ์ และเซ็ตอัพพัตเตอร์',
      summary: 'พื้นที่ที่เน้นงานประกอบเหล็ก ปรับเวดจ์ และตั้งค่า putter ด้วยอุปกรณ์ loft/lie ที่ได้มาตรฐาน',
      services: ['ปรับ loft & lie', 'แต่งเวดจ์', 'บาลานซ์พัตเตอร์'],
      location: 'แถวรีเทล คอนคอร์สกลาง',
      hours: 'ทุกวัน · 11:00 – 22:00'
    },
    'the-golf-garage': {
      description: 'พาร์ตเนอร์ด้านงานซ่อมและเซอร์วิสไม้กอล์ฟ ทั้งรีกริป เปลี่ยนก้าน และวิเคราะห์ด้วย TrackMan',
      summary: 'เวิร์กเบนช์ซ่อมไม้ในพื้นที่ ดูแลงานรีกริป งานก้าน และการวิเคราะห์อุปกรณ์แบบรวดเร็ว',
      services: ['รีกริปภายในวัน', 'ถอดและใส่ก้าน', 'วิเคราะห์ด้วย TrackMan'],
      location: 'โซนบริการหลัง Bay 12',
      hours: 'ทุกวัน · 10:00 – 23:00'
    },
    'coffee-on-green': {
      description: 'คาเฟ่ประจำสนามที่เสิร์ฟกาแฟ เครื่องดื่ม และของทานเล่นให้ผู้เล่นและผู้มาเยือนได้ทั้งวัน',
      summary: 'เอสเปรสโซ่ คอลด์บริว และของว่างที่วางอยู่ในพื้นที่สนามไดร์ฟโดยตรง สะดวกทั้งก่อนและหลังซ้อม',
      services: ['กาแฟและเครื่องดื่มชงสด', 'อาหารพร้อมทาน', 'บริการเสิร์ฟถึงโซนผู้เล่น'],
      location: 'ภายในโถงสนามหลัก ใกล้ Bay 24',
      hours: 'ทุกวัน · 07:00 – 23:00'
    },
    'myo-recovery': {
      description: 'ห้องทรีตเมนต์สำหรับนักกีฬา เน้นฟื้นฟูร่างกาย คลายกล้ามเนื้อ และยืดเหยียดแบบมีแนวทาง',
      summary: 'ห้องดูแลร่างกายสำหรับหลังซ้อมและหลังออกรอบ พร้อมนักบำบัดที่เข้าใจการฟื้นตัวของนักกีฬา',
      services: ['นวดดีพทิชชู', 'เพอร์คัสชันเธอราปี', 'โปรแกรมยืดเหยียด'],
      location: 'โซน Wellness · ชั้น 2',
      hours: 'ทุกวัน · 10:00 – 22:00',
      contact: '+66 61 123 4567'
    },
    'sakuna-thai-massage': {
      description: 'ร้านนวดไทยที่เหมาะสำหรับการฟื้นตัวหลังซ้อมและการผ่อนคลายตลอดวัน',
      summary: 'สตูดิโอนวดไทยพร้อมห้องส่วนตัวและทรีตเมนต์สมุนไพร สำหรับคลายร่างกายหลังการเล่น',
      services: ['นวดแผนไทย', 'ประคบสมุนไพร', 'นวดเท้า'],
      location: 'ชั้นสวน · ทางเข้าฝั่งตะวันออก',
      hours: 'ทุกวัน · 11:00 – 00:00'
    },
    'tung-lok-seafood': {
      description: 'ร้านอาหารจีนซีฟู้ดภายในคอมเพล็กซ์จอดรถ เหมาะสำหรับครอบครัวและมื้อสังสรรค์',
      summary: 'ห้องอาหารจีนซีฟู้ดบรรยากาศทางการ เหมาะสำหรับดินเนอร์กลุ่มใหญ่และมื้อครอบครัว',
      services: ['เมนูซีฟู้ดสด', 'ห้องรับรองส่วนตัว', 'บริการจัดเลี้ยง'],
      location: 'อาคารจอดรถ · ชั้น 2',
      hours: 'ทุกวัน · 11:00 – 22:00'
    },
    'kinzen-kitchen': {
      description: 'อาหารไทย-จีนสไตล์คอมฟอร์ต เหมาะสำหรับมื้อหลังซ้อมและมื้อดึก',
      summary: 'ร้านอาหารบรรยากาศสบาย เสิร์ฟเมนูผัด ซุป และจานแบ่งทานสำหรับหลายคน',
      services: ['นั่งทานในร้าน', 'สั่งกลับบ้าน', 'เปิดดึก'],
      location: 'ชั้นล่างของอาคารจอดรถ',
      hours: 'ทุกวัน · 10:00 – 00:00'
    },
    'ah-mei-mala-bbq': {
      description: 'ร้านหม่าล่าปิ้งย่างพร้อมจานแชร์ เหมาะกับมื้อสบาย ๆ หลังซ้อม',
      summary: 'บรรยากาศแนวไนต์มาร์เก็ต เสิร์ฟหม่าล่าเสียบไม้และที่นั่งแบบชิล ๆ',
      services: ['หม่าล่าเสียบไม้', 'เบียร์สด', 'ที่นั่งกลางแจ้ง'],
      location: 'ลานกลางอาคารจอดรถ',
      hours: 'ทุกวัน · 16:00 – 01:00'
    },
    'kaotom-klang-wiang': {
      description: 'ข้าวต้มรอบดึกและอาหารไทยพื้นบ้าน สำหรับคนที่อยากปิดวันด้วยมื้อสบาย ๆ',
      summary: 'ร้านโปรดของคนท้องถิ่นสำหรับข้าวต้ม ซุป และกับข้าวไทยแบบแชร์กันทาน',
      services: ['ข้าวต้ม', 'กับข้าวสไตล์ครอบครัว', 'เปิดดึก'],
      location: 'ถนนทางเข้า ตรงข้ามจุดรับรถ',
      hours: 'ทุกวัน · 19:00 – 02:00'
    },
    'a-bao-mala-seafood-noodles': {
      description: 'ร้านก๋วยเตี๋ยวหม่าล่าซีฟู้ดสำหรับคนที่ชอบรสจัดและมื้อเร็ว',
      summary: 'บาร์ก๋วยเตี๋ยวซีฟู้ดหม่าล่าพร้อมที่นั่งเคาน์เตอร์และบริการสั่งกลับ',
      services: ['ก๋วยเตี๋ยวซีฟู้ด', 'สั่งกลับบ้าน', 'เลือกระดับความเผ็ดได้'],
      location: 'อาคารจอดรถ · ทางเข้าฝั่งใต้',
      hours: 'ทุกวัน · 11:00 – 23:00'
    },
    'm-car-spa': {
      description: 'โซนล้างรถและดูแลรถ พร้อมพื้นที่จอดรถในอาคารระหว่างที่คุณซ้อมหรือรับประทานอาหาร',
      summary: 'จองดีเทลลิ่งหรือใช้บริการจอดรถในร่ม ระหว่างซ้อม ทานข้าว หรือทำรีคัฟเวอรีในคอมเพล็กซ์',
      services: ['ดีเทลภายนอกและภายใน', 'ล้างด่วน', 'บริการจอดรถ'],
      location: 'อาคารจอดรถ · ชั้นล่าง',
      hours: 'ทุกวัน · 08:00 – 23:00'
    },
    'vip-room': {
      description: 'ห้องส่วนตัวติดแอร์สำหรับซ้อม เรียน หรือใช้งานแบบกลุ่มเล็ก พร้อมบริการช่วยเหลือจากสนาม',
      summary: 'ห้อง VIP แบบปิดแยก มีเครื่องปรับอากาศ พื้นที่พร้อมสำหรับบทเรียนหรือกิจกรรมกลุ่มขนาดเล็ก',
      services: ['รองรับ 2 จุดตี', 'มีที่นั่งและพื้นที่เก็บของ', 'เรียกเจ้าหน้าที่สนามได้'],
      location: 'ชั้นลอยด้านบน ใกล้ Bay 30',
      hours: 'ทุกวัน · 08:00 – 23:00',
      contact: 'ติดต่อแคชเชียร์ลูกกอล์ฟ · 092 904 6222'
    }
  },
  KO: {
    'm-golf-kid-club': {
      description: '주니어 골퍼를 위한 전용 의류 및 장비 라운지로, 연령대에 맞는 피팅 조언을 제공합니다.',
      summary: '주니어 의류, 클럽, 피팅 가이드를 한곳에 모은 유소년 전용 리테일 클럽하우스입니다.',
      services: ['주니어 의류 및 신발', '주니어 클럽 피팅 및 시타', '가족용 라운지 및 머천다이즈 존'],
      location: '드라이빙 레인지 콩코스 서쪽 1층',
      hours: '매일 · 10:00 – 20:00'
    },
    'northgolf-cnx': {
      description: '치앙마이 골퍼를 위한 레슨, 스윙 분석, 장비 컨설팅을 제공하는 코칭 및 피팅 팀입니다.',
      summary: 'TrackMan 기반 레슨, 피팅, 장비 지원을 제공하는 퍼포먼스 팀입니다.',
      services: ['1:1 레슨', '커스텀 피팅', '장비 주문 및 지원'],
      location: '상층 메자닌 · B동',
      hours: '월 – 토 · 09:00 – 21:00',
      contact: 'northgolf.cnx@msport.com'
    },
    'gn-golf-the-loft': {
      description: '아이언 빌드, 웨지 조정, 퍼터 세팅을 위한 전문 loft/lie 스튜디오입니다.',
      summary: '정밀 loft/lie 장비로 아이언, 웨지, 퍼터를 세팅하는 전용 작업 공간입니다.',
      services: ['로프트 & 라이 조정', '웨지 튜닝', '퍼터 밸런싱'],
      location: '리테일 로우 중앙 콩코스',
      hours: '매일 · 11:00 – 22:00'
    },
    'the-golf-garage': {
      description: '리그립, 샤프트 교체, TrackMan 진단을 제공하는 클럽 서비스 파트너입니다.',
      summary: '빠른 턴어라운드로 리그립, 샤프트 작업, 장비 진단을 지원하는 현장 워크벤치입니다.',
      services: ['당일 리그립', '샤프트 탈착 및 장착', 'TrackMan 진단'],
      location: 'Bay 12 뒤 서비스 구역',
      hours: '매일 · 10:00 – 23:00'
    },
    'coffee-on-green': {
      description: '레인지 안에서 하루 종일 이용할 수 있는 시그니처 카페입니다.',
      summary: '에스프레소, 콜드브루, 간단한 스낵을 레인지 안에서 바로 즐길 수 있습니다.',
      services: ['커피 및 브루 메뉴', '간단한 푸드', '플레이어 구역 서브 서비스'],
      location: '메인 베이 홀 내부, Bay 24 인근',
      hours: '매일 · 07:00 – 23:00'
    },
    'myo-recovery': {
      description: '선수 중심의 바디워크, 퍼커션 테라피, 가이드 스트레칭 프로그램을 제공합니다.',
      summary: '훈련 후 회복을 위한 스포츠 테라피 트리트먼트 룸입니다.',
      services: ['딥티슈 마사지', '퍼커션 테라피', '가이드 스트레칭'],
      location: '웰니스 코리도어 · 2층',
      hours: '매일 · 10:00 – 22:00',
      contact: '+66 61 123 4567'
    },
    'sakuna-thai-massage': {
      description: '연습 후 회복과 휴식을 위한 전통 타이 마사지 스튜디오입니다.',
      summary: '프라이빗 룸과 허벌 트리트먼트를 갖춘 타이 마사지 스튜디오입니다.',
      services: ['전통 타이 마사지', '허벌 컴프레스', '풋 마사지'],
      location: '가든 레벨 · 동쪽 입구',
      hours: '매일 · 11:00 – 00:00'
    },
    'tung-lok-seafood': {
      description: '주차 콤플렉스 안에 위치한 중식 씨푸드 레스토랑입니다.',
      summary: '가족 모임과 그룹 디너에 적합한 정식 중식 씨푸드 다이닝 공간입니다.',
      services: ['라이브 씨푸드 메뉴', '프라이빗 다이닝룸', '연회 서비스'],
      location: '주차 콤플렉스 · 2층',
      hours: '매일 · 11:00 – 22:00'
    },
    'kinzen-kitchen': {
      description: '연습 후 식사와 늦은 저녁에 잘 맞는 태국-중식 컴포트 다이닝입니다.',
      summary: '웍 요리, 수프, 쉐어 플레이트를 제공하는 캐주얼 다이닝 공간입니다.',
      services: ['매장 식사', '테이크아웃', '야간 운영'],
      location: '주차 콤플렉스 1층',
      hours: '매일 · 10:00 – 00:00'
    },
    'ah-mei-mala-bbq': {
      description: '마라 꼬치와 캐주얼한 쉐어 플레이트를 즐길 수 있는 공간입니다.',
      summary: '야시장 스타일의 마라 꼬치와 편안한 좌석 구성을 갖춘 다이닝입니다.',
      services: ['마라 꼬치', '생맥주', '야외 좌석'],
      location: '주차 콤플렉스 코트야드',
      hours: '매일 · 16:00 – 01:00'
    },
    'kaotom-klang-wiang': {
      description: '늦은 밤 즐기기 좋은 죽과 태국식 가정 메뉴를 제공합니다.',
      summary: '죽, 국물 요리, 로컬 사이드 메뉴로 사랑받는 현지 식당입니다.',
      services: ['죽 메뉴', '쉐어 스타일 사이드', '심야 운영'],
      location: '입구 도로, 발렛 맞은편',
      hours: '매일 · 19:00 – 02:00'
    },
    'a-bao-mala-seafood-noodles': {
      description: '매콤한 해산물 국수와 빠른 식사를 위한 누들 바입니다.',
      summary: '카운터 좌석과 테이크아웃이 가능한 마라 해산물 누들 바입니다.',
      services: ['해산물 누들', '테이크아웃', '매운맛 조절'],
      location: '주차 콤플렉스 · 남쪽 입구',
      hours: '매일 · 11:00 – 23:00'
    },
    'm-car-spa': {
      description: '연습하거나 식사하는 동안 차량 디테일링과 주차 서비스를 이용할 수 있습니다.',
      summary: '훈련, 식사, 회복 중 차량 디테일링이나 실내 주차를 예약할 수 있습니다.',
      services: ['내·외장 디테일링', '익스프레스 세차', '주차 컨시어지'],
      location: '주차 콤플렉스 · 그라운드 콩코스',
      hours: '매일 · 08:00 – 23:00'
    },
    'vip-room': {
      description: '레슨과 소규모 그룹 세션을 위한 프라이빗 에어컨 연습실입니다.',
      summary: '독립 냉방과 소규모 레슨/이벤트에 적합한 전용 VIP 룸입니다.',
      services: ['2개 드라이빙 매트 공간', '전용 좌석 및 수납', '레인지 컨시어지 호출'],
      location: '상층 메자닌, Bay 30 인근',
      hours: '매일 · 08:00 – 23:00',
      contact: '골프볼 캐셔 문의 · 092 904 6222'
    }
  },
  ZH: {
    'm-golf-kid-club': {
      description: '专为青少年高尔夫球手打造的服饰与器材专区，并提供适龄配杆建议。',
      summary: '集合青少年服饰、球杆与选配建议的少儿零售空间。',
      services: ['儿童服饰与鞋类', '青少年球杆试打与配杆', '家庭休息与周边展示区'],
      location: '练习场连廊西侧一层',
      hours: '每日 · 10:00 – 20:00'
    },
    'northgolf-cnx': {
      description: '为清迈球手提供课程、挥杆分析与装备建议的教学与配杆团队。',
      summary: '以 TrackMan 为基础，提供课程、配杆与装备支持的专业团队。',
      services: ['一对一课程', '定制配杆', '装备订购与支持'],
      location: '上层夹层 · B 栋',
      hours: '周一 – 周六 · 09:00 – 21:00',
      contact: 'northgolf.cnx@msport.com'
    },
    'gn-golf-the-loft': {
      description: '专注于铁杆组装、挖起杆调校与推杆设定的 loft/lie 工作室。',
      summary: '使用校准 loft/lie 设备完成铁杆、挖起杆与推杆设定的专业空间。',
      services: ['Loft & lie 调整', '挖起杆调校', '推杆平衡'],
      location: '零售区中央连廊',
      hours: '每日 · 11:00 – 22:00'
    },
    'the-golf-garage': {
      description: '提供换握把、换杆身与 TrackMan 诊断的球杆服务伙伴。',
      summary: '现场工位可快速完成换握把、杆身作业与装备诊断。',
      services: ['当天更换握把', '杆身拆装', 'TrackMan 诊断'],
      location: 'Bay 12 后方服务区',
      hours: '每日 · 10:00 – 23:00'
    },
    'coffee-on-green': {
      description: '位于练习场内的招牌咖啡馆，全天服务球手与访客。',
      summary: '在练习场内即可享受意式咖啡、冷萃与轻食。',
      services: ['咖啡与手冲饮品', '即食轻食', '球手区送餐服务'],
      location: '主练习区大厅内，靠近 Bay 24',
      hours: '每日 · 07:00 – 23:00'
    },
    'myo-recovery': {
      description: '以运动员恢复为核心的身体护理、震动放松与拉伸服务。',
      summary: '面向训练后恢复的专业理疗空间。',
      services: ['深层组织按摩', '震动放松疗程', '引导式拉伸'],
      location: 'Wellness 走廊 · 2 层',
      hours: '每日 · 10:00 – 22:00',
      contact: '+66 61 123 4567'
    },
    'sakuna-thai-massage': {
      description: '适合练习后恢复与放松的传统泰式按摩空间。',
      summary: '配有独立房间与草本护理的泰式按摩工作室。',
      services: ['传统泰式按摩', '草本热敷', '足部按摩'],
      location: '花园层 · 东入口',
      hours: '每日 · 11:00 – 00:00'
    },
    'tung-lok-seafood': {
      description: '位于停车综合体内的中式海鲜餐厅。',
      summary: '适合家庭聚餐与团体晚宴的正式中式海鲜餐厅。',
      services: ['鲜活海鲜菜单', '包厢', '宴会服务'],
      location: '停车综合体 · 2 层',
      hours: '每日 · 11:00 – 22:00'
    },
    'kinzen-kitchen': {
      description: '适合练习后用餐与夜宵的泰中式舒适餐饮。',
      summary: '提供炒菜、汤品与合餐菜式的轻松餐厅。',
      services: ['堂食', '外带', '营业至深夜'],
      location: '停车综合体一层',
      hours: '每日 · 10:00 – 00:00'
    },
    'ah-mei-mala-bbq': {
      description: '提供麻辣烤串与轻松共享菜式的餐饮空间。',
      summary: '夜市风格麻辣烤串与休闲座位区。',
      services: ['麻辣烤串', '生啤', '户外座位'],
      location: '停车综合体庭院',
      hours: '每日 · 16:00 – 01:00'
    },
    'kaotom-klang-wiang': {
      description: '适合深夜用餐的粥品与泰式家常菜餐厅。',
      summary: '以粥、汤品与本地配菜闻名的本地餐厅。',
      services: ['粥品', '合餐配菜', '深夜营业'],
      location: '入口道路，对面为代客泊车区',
      hours: '每日 · 19:00 – 02:00'
    },
    'a-bao-mala-seafood-noodles': {
      description: '提供麻辣海鲜面与快捷用餐体验的面馆。',
      summary: '带吧台座位与外带服务的麻辣海鲜面馆。',
      services: ['海鲜面', '外带', '可调辣度'],
      location: '停车综合体 · 南入口',
      hours: '每日 · 11:00 – 23:00'
    },
    'm-car-spa': {
      description: '在您练习或用餐时，可同步享受车辆美容与停车服务。',
      summary: '训练、用餐或恢复期间，可预约车辆美容或使用室内停车服务。',
      services: ['内外部精洗美容', '快速洗车', '停车礼宾'],
      location: '停车综合体 · 一层连廊',
      hours: '每日 · 08:00 – 23:00'
    },
    'vip-room': {
      description: '适用于课程与小型团体的私密空调练习室。',
      summary: '带独立空调与小型课程/活动空间的 VIP 房间。',
      services: ['2 个打位空间', '专属座位与储物', '可呼叫练习场礼宾'],
      location: '上层夹层，靠近 Bay 30',
      hours: '每日 · 08:00 – 23:00',
      contact: '请联系高尔夫球收银台 · 092 904 6222'
    }
  },
  JA: {
    'm-golf-kid-club': {
      description: 'ジュニア向けのアパレルと用品をそろえた専用ショップで、年齢に合わせたフィッティング相談も可能です。',
      summary: 'ジュニア用ウェア、クラブ、フィッティング案内を一体化したキッズ向けリテールスペースです。',
      services: ['キッズ用アパレルとシューズ', 'ジュニアクラブのフィッティングと試打', 'ファミリーラウンジとグッズ展示'],
      location: 'ドライビングレンジ・コンコース西側 1 階',
      hours: '毎日 · 10:00 – 20:00'
    },
    'northgolf-cnx': {
      description: 'チェンマイのゴルファー向けに、レッスン、スイング分析、ギア提案を行うコーチング＆フィッティングチームです。',
      summary: 'TrackMan を活用したレッスン、フィッティング、ギアサポートを提供します。',
      services: ['マンツーマンレッスン', 'カスタムフィッティング', 'ギア注文とサポート'],
      location: '上階メザニン · B 棟',
      hours: '月 – 土 · 09:00 – 21:00',
      contact: 'northgolf.cnx@msport.com'
    },
    'gn-golf-the-loft': {
      description: 'アイアン組み上げ、ウェッジ調整、パターセットアップに特化した loft/lie スタジオです。',
      summary: '校正済み loft/lie ツールでクラブ調整を行う専門スペースです。',
      services: ['ロフト＆ライ調整', 'ウェッジチューニング', 'パターバランス調整'],
      location: 'リテールエリア中央コンコース',
      hours: '毎日 · 11:00 – 22:00'
    },
    'the-golf-garage': {
      description: 'グリップ交換、シャフト作業、TrackMan 診断に対応するクラブサービスパートナーです。',
      summary: 'スピーディーにリグリップ、シャフト作業、機材診断を行う現地ワークベンチです。',
      services: ['当日グリップ交換', 'シャフト抜き差し', 'TrackMan 診断'],
      location: 'Bay 12 裏手サービスエリア',
      hours: '毎日 · 10:00 – 23:00'
    },
    'coffee-on-green': {
      description: 'レンジ内で一日中利用できるシグネチャーカフェです。',
      summary: 'エスプレッソ、コールドブリュー、軽食をレンジ内でそのまま楽しめます。',
      services: ['コーヒー＆ブリューメニュー', '軽食', 'プレーヤーエリアへのサービス'],
      location: 'メインベイホール内、Bay 24 付近',
      hours: '毎日 · 07:00 – 23:00'
    },
    'myo-recovery': {
      description: 'アスリート向けのボディケア、パーカッションセラピー、ストレッチを提供します。',
      summary: 'トレーニング後の回復をサポートするスポーツセラピー空間です。',
      services: ['ディープティッシュマッサージ', 'パーカッションセラピー', 'ガイド付きストレッチ'],
      location: 'ウェルネスコリドー · 2 階',
      hours: '毎日 · 10:00 – 22:00',
      contact: '+66 61 123 4567'
    },
    'sakuna-thai-massage': {
      description: '練習後の回復とリラックスに適したタイマッサージスタジオです。',
      summary: '個室とハーバルトリートメントを備えたタイマッサージ空間です。',
      services: ['タイ伝統マッサージ', 'ハーバルコンプレス', 'フットマッサージ'],
      location: 'ガーデンレベル · 東側入口',
      hours: '毎日 · 11:00 – 00:00'
    },
    'tung-lok-seafood': {
      description: '駐車コンプレックス内にある中華シーフードレストランです。',
      summary: '家族の食事やグループディナーに適した本格中華シーフードダイニングです。',
      services: ['活シーフードメニュー', '個室', '宴会サービス'],
      location: '駐車コンプレックス · 2 階',
      hours: '毎日 · 11:00 – 22:00'
    },
    'kinzen-kitchen': {
      description: '練習後の食事や深夜の食事に合うタイ中華コンフォートダイニングです。',
      summary: '炒め物、スープ、シェアプレートを提供するカジュアルダイニングです。',
      services: ['店内利用', 'テイクアウト', '深夜営業'],
      location: '駐車コンプレックス 1 階',
      hours: '毎日 · 10:00 – 00:00'
    },
    'ah-mei-mala-bbq': {
      description: '麻辣串焼きとカジュアルなシェア料理を楽しめるダイニングです。',
      summary: 'ナイトマーケット風の麻辣串とリラックスした席配置が特徴です。',
      services: ['麻辣串', '生ビール', '屋外席'],
      location: '駐車コンプレックス中庭',
      hours: '毎日 · 16:00 – 01:00'
    },
    'kaotom-klang-wiang': {
      description: '夜遅くまで楽しめるお粥とタイローカル料理の店です。',
      summary: 'お粥、スープ、ローカルなおかずで親しまれる地元の食堂です。',
      services: ['お粥メニュー', 'シェア向けおかず', '深夜営業'],
      location: '入口道路沿い、バレットの向かい側',
      hours: '毎日 · 19:00 – 02:00'
    },
    'a-bao-mala-seafood-noodles': {
      description: '麻辣シーフード麺を気軽に楽しめるヌードルバーです。',
      summary: 'カウンター席とテイクアウトに対応した麻辣シーフードヌードルバーです。',
      services: ['シーフードヌードル', 'テイクアウト', '辛さ調整'],
      location: '駐車コンプレックス · 南入口',
      hours: '毎日 · 11:00 – 23:00'
    },
    'm-car-spa': {
      description: '練習や食事の間に車のディテーリングと駐車サービスを利用できます。',
      summary: '練習、食事、リカバリー中にディテーリングや屋内駐車を予約できます。',
      services: ['内外装ディテーリング', 'クイック洗車', '駐車コンシェルジュ'],
      location: '駐車コンプレックス · グラウンドコンコース',
      hours: '毎日 · 08:00 – 23:00'
    },
    'vip-room': {
      description: 'レッスンや少人数グループに適したプライベート空調ルームです。',
      summary: '独立空調と少人数レッスン/イベントに使える VIP ルームです。',
      services: ['2 打席分のスペース', '専用席と収納', 'レンジコンシェルジュ対応'],
      location: '上階メザニン、Bay 30 付近',
      hours: '毎日 · 08:00 – 23:00',
      contact: 'ゴルフボールキャッシャーまで · 092 904 6222'
    }
  }
};

const newsOverrides: Record<Exclude<ContentLanguage, 'EN'>, Record<string, Partial<NewsItem>>> = {
  TH: {
    'srixon-range-balls-now-in-play': {
      badge: 'สิ่งอำนวยความสะดวก',
      title: 'ลูกซ้อม Srixon ใหม่ พร้อมใช้งานแล้ว',
      description: 'ลูกซ้อม Srixon ผลิตจากญี่ปุ่นถูกนำมาใช้เต็มระบบแล้ว ให้ฟีลที่ดีกว่าและข้อมูลที่แม่นขึ้นในทุกถาด',
      date: '7 กุมภาพันธ์ 2026',
      body: [
        'เรายินดีประกาศการอัปเกรดประสบการณ์ที่สนามไดร์ฟ ด้วยการนำลูกซ้อม Srixon ใหม่ ผลิตจากญี่ปุ่น เข้ามาใช้งานเต็มระบบ',
        'Srixon เป็นลูกซ้อมที่ขึ้นชื่อเรื่องความทนทาน ระยะและทิศทางที่สม่ำเสมอ รวมถึงฟีลสัมผัสที่เชื่อถือได้ ไม่ว่าคุณจะกำลังซ้อมคุมระยะ ปรับไฟลต์บอล หรือแค่ต้องการช่วงเวลาซ้อมที่จริงจังขึ้น ความแตกต่างจะสัมผัสได้ทันที',
        'การอัปเกรดครั้งนี้สะท้อนมาตรฐานที่ Msport ต้องการรักษาไว้ทั่วทั้งสนาม ลูกซ้อมใหม่ช่วยให้เห็นผลของวงสวิงชัดขึ้น ให้ความรู้สึกที่ดีขึ้น และทำให้การซ้อมมีความเป็นมืออาชีพมากกว่าเดิม',
        'ขณะนี้ลูกซ้อมชุดใหม่ถูกกระจายใช้งานครบทุกโซนของสนามแล้ว',
        'แวะมาลองด้วยตัวเองได้ทุกวัน'
      ]
    },
    'youth-golf-committee-update': {
      badge: 'พัฒนาเยาวชน',
      title: 'อัปเดตคณะกรรมการกอล์ฟเยาวชนเชียงใหม่',
      description: 'คณะกรรมการกอล์ฟจังหวัดเชียงใหม่ทบทวนผลการแข่งขันระดับประเทศ และวางแผนพัฒนานักกอล์ฟเยาวชนต่อเนื่อง',
      date: '27 กุมภาพันธ์ 2026',
      body: [
        'คณะกรรมการกอล์ฟเยาวชนจังหวัดเชียงใหม่ได้ประชุมเพื่อทบทวนการแข่งขันกอล์ฟเยาวชนระดับประเทศที่ผ่านมา และกำหนดแนวทางพัฒนาระยะถัดไป',
        'หัวข้อหลักคือการยกระดับมาตรฐานการเตรียมตัว และการสนับสนุนนักกีฬาเยาวชนสำหรับการแข่งขันครั้งต่อไป รวมถึงแนวคิดในการจัดแข่งขันระดมทุน เพื่อช่วยค่าใช้จ่ายด้านการแข่งขัน และสร้างระบบฝึกซ้อมที่ต่อเนื่องสำหรับนักกอล์ฟเยาวชนในจังหวัด',
        'คณะกรรมการขอขอบคุณ M Sport Driving Range ที่สนับสนุนห้อง Golf Simulator สำหรับการประชุมครั้งนี้ และจะมีการแจ้งความคืบหน้าเพิ่มเติมเมื่อแผนงานพัฒนาดำเนินต่อไป'
      ]
    },
    'new-year-2026-appreciation': {
      badge: 'ประกาศ',
      title: 'คำขอบคุณต้อนรับปีใหม่ 2026',
      description: 'M Energy 2020 ขอบคุณพาร์ตเนอร์ทุกท่านที่เติบโตไปด้วยกัน และร่วมสร้างความแข็งแรงให้โครงการในเชียงใหม่',
      date: '24 กุมภาพันธ์ 2026',
      body: [
        'เมื่อก้าวเข้าสู่ปี 2026 ทาง M Energy 2020 (Caltex แยกหลุยส์ และโครงการในเครือ) ขอขอบคุณพาร์ตเนอร์ทุกท่านที่ให้ความไว้วางใจและเติบโตไปด้วยกัน',
        'ความแข็งแรงของโครงการเกิดจากธุรกิจทุกแห่งภายในพื้นที่ ที่ช่วยกันสร้างสภาพแวดล้อมเชิงพาณิชย์ที่มีคุณภาพและน่าเชื่อถือในเชียงใหม่ ความเป็นมืออาชีพ การบริการ และความร่วมมือของทุกท่านคือส่วนสำคัญของการพัฒนาโครงการอย่างต่อเนื่อง',
        'เราขอขอบคุณสำหรับความเชื่อมั่นและความร่วมมือระยะยาวจากผู้เช่าทุกราย ในปีใหม่นี้เราขออวยพรให้ทุกธุรกิจเติบโตอย่างมั่นคง ได้รับการสนับสนุนจากลูกค้าอย่างต่อเนื่อง มีโอกาสใหม่ ๆ และมีสุขภาพแข็งแรงตลอดปี 2026',
        'พาร์ตเนอร์ในโครงการ:',
        '• 66Carwash & Detailing',
        '• KEX Express',
        '• JJ Baby Shop',
        '• Victoria Clinic',
        '• Ningfu Warehouse',
        '• Roastniyom Coffee',
        '• Tyreplus Phongchotnakan',
        '• Pet Mart (Louis Intersection Branch)',
        '• M Garden Fusion Restaurant',
        '• KP Plus (2020) Co., Ltd.',
        '• Extra Home Construction Chiang Mai'
      ]
    }
  },
  KO: {
    'srixon-range-balls-now-in-play': {
      badge: '시설',
      title: '새 Srixon 레인지볼 투입 완료',
      description: '일본산 Srixon 레인지볼이 전 타석에 적용되어 더 정확한 피드백과 향상된 타구감을 제공합니다.',
      date: '2026년 2월 7일',
      body: [
        '드라이빙 레인지 경험을 업그레이드하기 위해 일본산 신형 Srixon 레인지볼을 전면 도입했습니다.',
        'Srixon 레인지볼은 뛰어난 내구성, 일관된 볼 플라이트, 신뢰할 수 있는 타구감으로 잘 알려져 있습니다. 거리 조절, 볼 플라이트 교정, 보다 정교한 연습을 원하는 모든 플레이어에게 분명한 차이를 제공합니다.',
        '이번 도입은 시설 전반의 기준을 높이려는 Msport의 방향을 보여줍니다. 새 볼은 더 선명한 피드백과 향상된 타구감을 제공해 보다 프로페셔널한 연습 환경을 만듭니다.',
        '현재 새 볼은 전 타석에 모두 배치되었습니다.',
        '직접 와서 경험해 보세요.'
      ]
    },
    'youth-golf-committee-update': {
      badge: '유소년 개발',
      title: '치앙마이 유소년 골프 위원회 업데이트',
      description: '치앙마이 주 골프 위원회가 전국 유소년 대회를 리뷰하고 다음 개발 계획을 공유했습니다.',
      date: '2026년 2월 27일',
      body: [
        '치앙마이 주 유소년 골프 위원회는 최근 전국 유소년 골프 선수권을 검토하고 다음 단계의 개발 방향을 논의했습니다.',
        '회의에서는 준비 수준 향상과 향후 대회 지원이 핵심 주제로 다뤄졌습니다. 대회 비용 지원을 위한 기금 마련 이벤트와, 지역 유소년 선수를 위한 지속적 훈련 프로그램 구성도 포함되었습니다.',
        '위원회는 회의 장소로 Golf Simulator 시설을 제공한 M Sport Driving Range에 감사를 전했습니다. 향후 계획이 진행되면 추가 소식이 발표될 예정입니다.'
      ]
    },
    'new-year-2026-appreciation': {
      badge: '공지',
      title: '2026 새해 감사 메시지',
      description: 'M Energy 2020이 함께 성장해 온 파트너들에게 감사를 전하며 2026년의 지속적인 성장을 기원합니다.',
      date: '2026년 2월 24일',
      body: [
        '2026년을 맞아 M Energy 2020(Caltex Louis Intersection 및 관련 프로젝트)은 함께 성장해 온 모든 파트너에게 깊은 감사를 전합니다.',
        '프로젝트의 힘은 그 안에 함께하는 모든 비즈니스에서 나옵니다. 각 파트너의 전문성, 서비스, 협업은 치앙마이에서 신뢰받는 복합 상업 환경을 만드는 데 중요한 역할을 해왔습니다.',
        '모든 입점 파트너의 신뢰와 장기적인 협력에 감사드리며, 2026년에도 지속적인 성장과 새로운 기회, 건강이 함께하길 바랍니다.',
        '프로젝트 파트너:',
        '• 66Carwash & Detailing',
        '• KEX Express',
        '• JJ Baby Shop',
        '• Victoria Clinic',
        '• Ningfu Warehouse',
        '• Roastniyom Coffee',
        '• Tyreplus Phongchotnakan',
        '• Pet Mart (Louis Intersection Branch)',
        '• M Garden Fusion Restaurant',
        '• KP Plus (2020) Co., Ltd.',
        '• Extra Home Construction Chiang Mai'
      ]
    }
  },
  ZH: {
    'srixon-range-balls-now-in-play': {
      badge: '设施',
      title: '全新 Srixon 练习球现已投入使用',
      description: '来自日本的新款 Srixon 练习球已全面投入使用，为每一托球带来更清晰的反馈与更好的手感。',
      date: '2026年2月7日',
      body: [
        '我们很高兴宣布，练习场体验迎来升级，全新日本制造的 Srixon 练习球已全面投入使用。',
        'Srixon 练习球以耐用性、稳定飞行表现与可靠结构著称。无论您是在练习距离控制、调整弹道，还是只是想获得更高质量的练习体验，都能明显感受到差别。',
        '这次升级体现了 Msport 持续提升场地标准的方向。新球带来更清晰的反馈、更好的手感，以及更专业的练习环境。',
        '目前新球已经在整个练习场全面投入使用。',
        '欢迎到场亲自体验。'
      ]
    },
    'youth-golf-committee-update': {
      badge: '青少年发展',
      title: '清迈青少年高尔夫委员会更新',
      description: '清迈省高尔夫委员会回顾全国青少年锦标赛，并规划后续青少年球手发展方向。',
      date: '2026年2月27日',
      body: [
        '清迈省青少年高尔夫委员会召开会议，回顾近期全国青少年高尔夫锦标赛，并讨论下一阶段的发展计划。',
        '会议重点围绕提高备赛标准以及支持年轻球员参加未来赛事，同时也讨论了通过筹款赛事来支持参赛成本，并建立持续性的青少年训练体系。',
        '委员会感谢 M Sport Driving Range 提供 Golf Simulator 设施作为会议场地。后续进展将另行公布。'
      ]
    },
    'new-year-2026-appreciation': {
      badge: '公告',
      title: '2026 新年感谢',
      description: 'M Energy 2020 向所有合作伙伴表达感谢，并祝愿大家在 2026 年继续稳步成长。',
      date: '2026年2月24日',
      body: [
        '值此 2026 年伊始，M Energy 2020（Caltex Louis Intersection 及相关项目）向所有一直以来共同成长的合作伙伴致以诚挚感谢。',
        '项目的活力来自其中每一家企业。各位合作伙伴的专业度、服务质量与协作精神，是项目在清迈持续发展的重要组成部分。',
        '我们感谢所有租户与合作伙伴的信任与长期支持，并祝愿大家在 2026 年继续稳健成长、获得更多客户支持与新机会，并拥有健康的一年。',
        '项目合作伙伴：',
        '• 66Carwash & Detailing',
        '• KEX Express',
        '• JJ Baby Shop',
        '• Victoria Clinic',
        '• Ningfu Warehouse',
        '• Roastniyom Coffee',
        '• Tyreplus Phongchotnakan',
        '• Pet Mart (Louis Intersection Branch)',
        '• M Garden Fusion Restaurant',
        '• KP Plus (2020) Co., Ltd.',
        '• Extra Home Construction Chiang Mai'
      ]
    }
  },
  JA: {
    'srixon-range-balls-now-in-play': {
      badge: '施設',
      title: '新しい Srixon レンジボールを導入しました',
      description: '日本製の新しい Srixon レンジボールが全打席に導入され、より明確なフィードバックと心地よい打感を提供します。',
      date: '2026年2月7日',
      body: [
        'ドライビングレンジ体験をアップグレードするため、日本製の新しい Srixon レンジボールを全面導入しました。',
        'Srixon レンジボールは、耐久性、一貫した弾道、信頼できる打感で知られています。距離感の調整、球筋の確認、より質の高い練習を望むプレーヤーに、はっきりとした違いをもたらします。',
        '今回の導入は、Msport が施設全体の基準を高め続けていることを示すものです。新しいボールにより、より明確なフィードバックと優れた打感、そしてよりプロフェッショナルな練習環境が実現します。',
        '現在、新しいボールはレンジ全体で利用可能です。',
        'ぜひ実際に体験してください。'
      ]
    },
    'youth-golf-committee-update': {
      badge: '育成',
      title: 'チェンマイ青少年ゴルフ委員会アップデート',
      description: 'チェンマイ県ゴルフ委員会が全国ジュニア選手権を振り返り、今後の育成方針を共有しました。',
      date: '2026年2月27日',
      body: [
        'チェンマイ県青少年ゴルフ委員会は、最近行われた全国ジュニアゴルフ選手権を振り返り、次の育成段階について協議しました。',
        '会議では、準備基準の向上と今後の大会に向けた若手選手支援が中心議題となりました。大会費用を支援するための fundraising トーナメントや、県内ジュニア選手向けの継続的なトレーニング体制の整備も計画されています。',
        '委員会は会議のために Golf Simulator 施設を提供した M Sport Driving Range に感謝を伝えました。今後も進捗があればお知らせします。'
      ]
    },
    'new-year-2026-appreciation': {
      badge: 'お知らせ',
      title: '2026年 新年の感謝',
      description: 'M Energy 2020 は、共に成長してきたすべてのパートナーに感謝し、2026年のさらなる発展を願っています。',
      date: '2026年2月24日',
      body: [
        '2026年の始まりにあたり、M Energy 2020（Caltex Louis Intersection および関連プロジェクト）は、共に成長してきたすべてのパートナーに心より感謝を申し上げます。',
        'プロジェクトの強さは、その中にある各ビジネスによって支えられています。各パートナーのプロフェッショナリズム、サービス、協力体制は、チェンマイで信頼される複合商業環境を築く重要な要素です。',
        'すべてのテナントとパートナーの信頼と長期的な協力に感謝するとともに、2026年も安定した成長、新しい機会、そして健康が続くことを願っています。',
        'プロジェクトパートナー：',
        '• 66Carwash & Detailing',
        '• KEX Express',
        '• JJ Baby Shop',
        '• Victoria Clinic',
        '• Ningfu Warehouse',
        '• Roastniyom Coffee',
        '• Tyreplus Phongchotnakan',
        '• Pet Mart (Louis Intersection Branch)',
        '• M Garden Fusion Restaurant',
        '• KP Plus (2020) Co., Ltd.',
        '• Extra Home Construction Chiang Mai'
      ]
    }
  }
};

const productCategoryLabels: Record<ContentLanguage, Record<Product['category'], string>> = {
  EN: {
    shirts: 'Shirts',
    gloves: 'Gloves',
    accessories: 'Accessories',
    clubs: 'Clubs',
    bags: 'Bags',
    pants: 'Pants',
    tees: 'Tees',
    headwear: 'Headwear',
    secondhand: 'Secondhand',
    equipment: 'Equipment'
  },
  TH: {
    shirts: 'เสื้อ',
    gloves: 'ถุงมือ',
    accessories: 'อุปกรณ์เสริม',
    clubs: 'ไม้กอล์ฟ',
    bags: 'กระเป๋า',
    pants: 'กางเกง',
    tees: 'เสื้อยืด',
    headwear: 'หมวก',
    secondhand: 'สินค้ามือสอง',
    equipment: 'อุปกรณ์'
  },
  KO: {
    shirts: '셔츠',
    gloves: '장갑',
    accessories: '액세서리',
    clubs: '클럽',
    bags: '가방',
    pants: '팬츠',
    tees: '티셔츠',
    headwear: '헤드웨어',
    secondhand: '중고',
    equipment: '장비'
  },
  ZH: {
    shirts: '上衣',
    gloves: '手套',
    accessories: '配件',
    clubs: '球杆',
    bags: '球包',
    pants: '长裤',
    tees: 'T恤',
    headwear: '帽类',
    secondhand: '二手',
    equipment: '器材'
  },
  JA: {
    shirts: 'シャツ',
    gloves: 'グローブ',
    accessories: 'アクセサリー',
    clubs: 'クラブ',
    bags: 'バッグ',
    pants: 'パンツ',
    tees: 'Tシャツ',
    headwear: 'ヘッドウェア',
    secondhand: '中古',
    equipment: '用具'
  }
};

export function getLocalizedFacilityDirectory(language: LanguageCode) {
  const contentLanguage = resolveContentLanguage(language);

  if (contentLanguage === 'EN') {
    return facilityDirectory;
  }

  return facilityDirectory.map(facility => ({
    ...facility,
    ...facilityOverrides[contentLanguage][facility.slug]
  }));
}

export function getLocalizedFacilityBySlug(language: LanguageCode, slug: string) {
  return getLocalizedFacilityDirectory(language).find(facility => facility.slug === slug);
}

export function getLocalizedNewsItems(language: LanguageCode) {
  const contentLanguage = resolveContentLanguage(language);

  return [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(article => ({
      ...article,
      ...(contentLanguage === 'EN' ? undefined : newsOverrides[contentLanguage][article.slug])
    }));
}

export function getLocalizedProductCategoryLabel(language: LanguageCode, category: Product['category']) {
  const contentLanguage = resolveContentLanguage(language);

  return productCategoryLabels[contentLanguage][category];
}
