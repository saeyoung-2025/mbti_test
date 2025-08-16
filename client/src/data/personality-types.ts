export interface PersonalityType {
  title: string;
  subtitle: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: Array<{
    name: string;
    icon: string;
  }>;
}

export const personalityTypes: Record<string, PersonalityType> = {
  INTJ: {
    title: "전략가",
    subtitle: "The Architect",
    description: "상상력이 풍부하고 전략적 사고를 하는 완벽주의자입니다. 모든 일에 계획이 있습니다.",
    strengths: [
      "뛰어난 전략적 사고",
      "독립적이고 자율적",
      "높은 목표 의식",
      "창의적 문제 해결 능력"
    ],
    weaknesses: [
      "지나친 완벽주의",
      "타인의 감정 이해 부족",
      "비판에 대한 민감성",
      "사회적 상호작용의 어려움"
    ],
    careers: [
      { name: "과학자/연구원", icon: "🔬" },
      { name: "엔지니어", icon: "⚙️" },
      { name: "경영 컨설턴트", icon: "📊" },
      { name: "건축가", icon: "🏗️" },
      { name: "투자 분석가", icon: "💹" },
      { name: "시스템 분석가", icon: "💻" }
    ]
  },
  INTP: {
    title: "논리학자",
    subtitle: "The Thinker",
    description: "혁신적인 발명가로, 지식에 대한 갈증을 멈출 줄 모릅니다.",
    strengths: [
      "뛰어난 논리적 사고",
      "높은 창의성",
      "독립적 사고",
      "복잡한 문제 해결 능력"
    ],
    weaknesses: [
      "실행력 부족",
      "감정 표현의 어려움",
      "일상적 업무에 대한 무관심",
      "타인과의 소통 부족"
    ],
    careers: [
      { name: "프로그래머", icon: "💻" },
      { name: "수학자", icon: "📐" },
      { name: "철학자", icon: "💭" },
      { name: "물리학자", icon: "🔬" },
      { name: "게임 개발자", icon: "🎮" },
      { name: "학자/교수", icon: "🎓" }
    ]
  },
  ENTJ: {
    title: "지휘관",
    subtitle: "The Commander",
    description: "타고난 지도자로, 카리스마와 자신감으로 공통 목표를 향해 사람들을 이끕니다.",
    strengths: [
      "강력한 리더십",
      "뛰어난 조직 능력",
      "목표 지향적",
      "효율성 추구"
    ],
    weaknesses: [
      "지나친 권위주의",
      "타인의 감정 무시",
      "참을성 부족",
      "완고함"
    ],
    careers: [
      { name: "CEO/경영진", icon: "👔" },
      { name: "변호사", icon: "⚖️" },
      { name: "정치인", icon: "🏛️" },
      { name: "프로젝트 매니저", icon: "📋" },
      { name: "투자 은행가", icon: "🏦" },
      { name: "군사 지휘관", icon: "🎖️" }
    ]
  },
  ENTP: {
    title: "토론자",
    subtitle: "The Debater",
    description: "영리하고 호기심이 많은 사색가로, 지적 도전을 피하지 않습니다.",
    strengths: [
      "뛰어난 창의성",
      "빠른 사고 능력",
      "적응력",
      "열정적인 토론 실력"
    ],
    weaknesses: [
      "집중력 부족",
      "일관성 결여",
      "세부사항 무시",
      "타인의 감정에 대한 둔감함"
    ],
    careers: [
      { name: "발명가", icon: "💡" },
      { name: "마케팅 전문가", icon: "📈" },
      { name: "언론인", icon: "📰" },
      { name: "창업가", icon: "🚀" },
      { name: "컨설턴트", icon: "💼" },
      { name: "광고 기획자", icon: "🎨" }
    ]
  },
  INFJ: {
    title: "옹호자",
    subtitle: "The Advocate",
    description: "선의를 가진 사람들을 돕는 이상주의자이지만, 뜻한 바를 이루는 데 필요한 의지력도 있습니다.",
    strengths: [
      "높은 통찰력",
      "강한 도덕적 신념",
      "타인에 대한 깊은 이해",
      "창의적 사고"
    ],
    weaknesses: [
      "지나친 완벽주의",
      "비현실적 기대",
      "갈등 회피",
      "번아웃에 취약함"
    ],
    careers: [
      { name: "심리상담사", icon: "🧠" },
      { name: "작가", icon: "✍️" },
      { name: "교사", icon: "👩‍🏫" },
      { name: "사회복지사", icon: "🤝" },
      { name: "종교인", icon: "⛪" },
      { name: "예술가", icon: "🎨" }
    ]
  },
  INFP: {
    title: "중재자",
    subtitle: "The Mediator",
    description: "항상 선을 행할 준비가 되어 있는 이타주의자입니다.",
    strengths: [
      "강한 가치관",
      "높은 창의성",
      "타인에 대한 공감 능력",
      "개방적 사고"
    ],
    weaknesses: [
      "지나친 이상주의",
      "비판에 대한 예민함",
      "실용성 부족",
      "자기 의심"
    ],
    careers: [
      { name: "작가/시인", icon: "📝" },
      { name: "그래픽 디자이너", icon: "🎨" },
      { name: "상담사", icon: "💬" },
      { name: "번역가", icon: "🌐" },
      { name: "음악가", icon: "🎵" },
      { name: "NGO 활동가", icon: "🌍" }
    ]
  },
  ENFJ: {
    title: "선도자",
    subtitle: "The Protagonist",
    description: "카리스마 넘치는 지도자로, 듣는 이들을 매혹하고 영감을 줍니다.",
    strengths: [
      "뛰어난 소통 능력",
      "강한 공감 능력",
      "타인 동기 부여 능력",
      "조화로운 관계 구축"
    ],
    weaknesses: [
      "지나친 타인 의존",
      "자기 소홀",
      "갈등에 대한 과민 반응",
      "결정 장애"
    ],
    careers: [
      { name: "교사/교육자", icon: "👨‍🏫" },
      { name: "인사 담당자", icon: "👥" },
      { name: "코치", icon: "🏃‍♂️" },
      { name: "정치인", icon: "🗳️" },
      { name: "종교 지도자", icon: "📿" },
      { name: "상담사", icon: "💭" }
    ]
  },
  ENFP: {
    title: "활동가",
    subtitle: "The Campaigner",
    description: "열정적이고 창의적인 성격으로, 긍정적인 가능성을 보는 사람입니다.",
    strengths: [
      "높은 창의성과 상상력",
      "뛰어난 소통능력",
      "다른 사람들에게 영감을 주는 능력",
      "유연하고 적응력이 뛰어남"
    ],
    weaknesses: [
      "세부사항에 대한 주의력 부족",
      "일상적인 업무에 대한 지루함",
      "과도한 감정 이입",
      "집중력 유지의 어려움"
    ],
    careers: [
      { name: "예술가/디자이너", icon: "🎨" },
      { name: "상담사/코치", icon: "👥" },
      { name: "마케터/홍보전문가", icon: "📢" },
      { name: "교육자/강사", icon: "👨‍🏫" },
      { name: "작가/기자", icon: "✍️" },
      { name: "영업/고객관리", icon: "🤝" }
    ]
  },
  ISTJ: {
    title: "현실주의자",
    subtitle: "The Logistician",
    description: "실용적이고 사실에 근거한 성격으로, 신뢰할 수 있는 성실함을 가지고 있습니다.",
    strengths: [
      "높은 책임감",
      "체계적이고 조직적",
      "신뢰성과 성실함",
      "세심한 주의력"
    ],
    weaknesses: [
      "변화에 대한 저항",
      "융통성 부족",
      "새로운 아이디어에 대한 회의",
      "감정 표현의 어려움"
    ],
    careers: [
      { name: "회계사", icon: "📊" },
      { name: "관리자", icon: "📋" },
      { name: "의사", icon: "👨‍⚕️" },
      { name: "변호사", icon: "⚖️" },
      { name: "은행원", icon: "🏦" },
      { name: "공무원", icon: "🏛️" }
    ]
  },
  ISFJ: {
    title: "보호자",
    subtitle: "The Protector",
    description: "따뜻하고 헌신적인 성격으로, 언제나 사랑하는 사람들을 지킬 준비가 되어 있습니다.",
    strengths: [
      "타인에 대한 깊은 배려",
      "높은 책임감",
      "세심한 관찰력",
      "조화로운 관계 추구"
    ],
    weaknesses: [
      "자기주장 부족",
      "변화에 대한 스트레스",
      "과도한 자기희생",
      "비판에 대한 민감성"
    ],
    careers: [
      { name: "간호사", icon: "👩‍⚕️" },
      { name: "초등학교 교사", icon: "👨‍🏫" },
      { name: "사서", icon: "📚" },
      { name: "상담사", icon: "💬" },
      { name: "사회복지사", icon: "🤝" },
      { name: "비서", icon: "📝" }
    ]
  },
  ESTJ: {
    title: "경영자",
    subtitle: "The Executive",
    description: "뛰어난 관리자로, 사람이나 일을 관리하는 데 타고난 재능이 있습니다.",
    strengths: [
      "강력한 리더십",
      "뛰어난 조직 능력",
      "높은 책임감",
      "현실적 판단력"
    ],
    weaknesses: [
      "고집이 세고 융통성 부족",
      "타인의 감정에 대한 둔감함",
      "지나친 권위주의",
      "변화에 대한 저항"
    ],
    careers: [
      { name: "관리자/임원", icon: "👔" },
      { name: "판사", icon: "⚖️" },
      { name: "경찰관", icon: "👮‍♂️" },
      { name: "군인", icon: "🎖️" },
      { name: "은행 지점장", icon: "🏦" },
      { name: "프로젝트 관리자", icon: "📋" }
    ]
  },
  ESFJ: {
    title: "집정관",
    subtitle: "The Consul",
    description: "배려심이 많고 사교적이며 인기가 많은 성격으로, 언제나 도움을 주려 합니다.",
    strengths: [
      "뛰어난 대인관계 능력",
      "강한 책임감",
      "타인에 대한 배려",
      "협력적 태도"
    ],
    weaknesses: [
      "비판에 대한 과민 반응",
      "갈등 상황에서의 스트레스",
      "자기주장의 어려움",
      "변화에 대한 불안"
    ],
    careers: [
      { name: "간호사", icon: "👩‍⚕️" },
      { name: "교사", icon: "👨‍🏫" },
      { name: "인사 담당자", icon: "👥" },
      { name: "이벤트 기획자", icon: "🎉" },
      { name: "호텔리어", icon: "🏨" },
      { name: "영업 사원", icon: "💼" }
    ]
  },
  ISTP: {
    title: "만능 재주꾼",
    subtitle: "The Virtuoso",
    description: "대담하고 실용적인 사고를 가진 실험정신이 풍부한 사람입니다.",
    strengths: [
      "뛰어난 문제 해결 능력",
      "실용적 사고",
      "위기 상황에서의 침착함",
      "독립적 성향"
    ],
    weaknesses: [
      "감정 표현의 어려움",
      "장기적 계획 부족",
      "타인과의 소통 부족",
      "일상적 업무에 대한 무관심"
    ],
    careers: [
      { name: "기계공/수리공", icon: "🔧" },
      { name: "파일럿", icon: "✈️" },
      { name: "프로그래머", icon: "💻" },
      { name: "경찰관", icon: "👮‍♂️" },
      { name: "소방관", icon: "🚒" },
      { name: "의료 기술자", icon: "🏥" }
    ]
  },
  ISFP: {
    title: "모험가",
    subtitle: "The Adventurer",
    description: "유연하고 매력적인 예술가로, 언제나 새로운 가능성을 탐구합니다.",
    strengths: [
      "높은 예술적 감각",
      "타인에 대한 깊은 공감",
      "유연하고 개방적",
      "평화를 추구하는 성향"
    ],
    weaknesses: [
      "자기주장의 어려움",
      "스트레스에 대한 취약성",
      "실용성 부족",
      "경쟁 상황에 대한 부담감"
    ],
    careers: [
      { name: "예술가/화가", icon: "🎨" },
      { name: "음악가", icon: "🎵" },
      { name: "사진작가", icon: "📷" },
      { name: "상담사", icon: "💬" },
      { name: "마사지 치료사", icon: "💆‍♀️" },
      { name: "환경 보호 활동가", icon: "🌱" }
    ]
  },
  ESTP: {
    title: "사업가",
    subtitle: "The Entrepreneur",
    description: "에너지 넘치고 인식이 뛰어난 성격으로 진정한 삶의 만능 재주꾼입니다.",
    strengths: [
      "뛰어난 현실 감각",
      "적응력과 유연성",
      "사교적이고 친근함",
      "위기 상황에서의 대처 능력"
    ],
    weaknesses: [
      "장기적 계획 부족",
      "주의력 결핍",
      "규칙에 대한 저항",
      "감정적 깊이 부족"
    ],
    careers: [
      { name: "영업 사원", icon: "💼" },
      { name: "부동산 중개인", icon: "🏠" },
      { name: "스포츠 선수", icon: "⚽" },
      { name: "요리사", icon: "👨‍🍳" },
      { name: "연예인", icon: "🎭" },
      { name: "응급실 의사", icon: "🚑" }
    ]
  },
  ESFP: {
    title: "연예인",
    subtitle: "The Entertainer",
    description: "자유로운 영혼의 연예인으로, 주변 사람들을 즐겁게 하고 영감을 줍니다.",
    strengths: [
      "뛰어난 사교성",
      "긍정적이고 낙천적",
      "높은 공감 능력",
      "예술적 감각"
    ],
    weaknesses: [
      "장기적 계획 부족",
      "비판에 대한 민감성",
      "집중력 부족",
      "갈등 회피 경향"
    ],
    careers: [
      { name: "배우/연예인", icon: "🎭" },
      { name: "이벤트 기획자", icon: "🎉" },
      { name: "패션 디자이너", icon: "👗" },
      { name: "여행 가이드", icon: "🗺️" },
      { name: "미용사", icon: "💇‍♀️" },
      { name: "소매업 판매원", icon: "🛍️" }
    ]
  }
};