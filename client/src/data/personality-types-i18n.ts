import { Language } from "@/hooks/useLanguage";

export interface MultiLanguagePersonalityType {
  title: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
  };
  subtitle: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
  };
  description: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
  };
  strengths: {
    ko: string[];
    en: string[];
    ja: string[];
    zh: string[];
  };
  weaknesses: {
    ko: string[];
    en: string[];
    ja: string[];
    zh: string[];
  };
  careers: Array<{
    name: {
      ko: string;
      en: string;
      ja: string;
      zh: string;
    };
    icon: string;
  }>;
}

export const multiLanguagePersonalityTypes: Record<string, MultiLanguagePersonalityType> = {
  INTJ: {
    title: {
      ko: "전략가",
      en: "The Architect",
      ja: "建築家",
      zh: "建筑师"
    },
    subtitle: {
      ko: "The Architect",
      en: "The Architect",
      ja: "The Architect",
      zh: "The Architect"
    },
    description: {
      ko: "상상력이 풍부하고 전략적 사고를 하는 완벽주의자입니다. 모든 일에 계획이 있습니다.",
      en: "Imaginative and strategic thinkers, with a plan for everything.",
      ja: "想像力豊かで戦略的思考を持つ完璧主義者です。すべてに計画があります。",
      zh: "富有想象力的战略思想家，对一切都有计划。"
    },
    strengths: {
      ko: [
        "뛰어난 전략적 사고",
        "독립적이고 자율적",
        "높은 목표 의식",
        "창의적 문제 해결 능력"
      ],
      en: [
        "Excellent strategic thinking",
        "Independent and autonomous",
        "High goal orientation",
        "Creative problem-solving ability"
      ],
      ja: [
        "優れた戦略的思考",
        "独立的で自律的",
        "高い目標意識",
        "創造的問題解決能力"
      ],
      zh: [
        "出色的战略思维",
        "独立自主",
        "高度目标导向",
        "创造性解决问题的能力"
      ]
    },
    weaknesses: {
      ko: [
        "지나친 완벽주의",
        "타인의 감정 이해 부족",
        "비판에 대한 민감성",
        "사회적 상호작용의 어려움"
      ],
      en: [
        "Excessive perfectionism",
        "Lack of understanding others' emotions",
        "Sensitivity to criticism",
        "Difficulty with social interactions"
      ],
      ja: [
        "過度な完璧主義",
        "他人の感情理解不足",
        "批判に対する敏感性",
        "社会的相互作用の困難"
      ],
      zh: [
        "过度完美主义",
        "缺乏理解他人情感",
        "对批评敏感",
        "社交互动困难"
      ]
    },
    careers: [
      { 
        name: {
          ko: "과학자/연구원",
          en: "Scientist/Researcher",
          ja: "科学者/研究者",
          zh: "科学家/研究员"
        }, 
        icon: "🔬" 
      },
      { 
        name: {
          ko: "엔지니어",
          en: "Engineer",
          ja: "エンジニア",
          zh: "工程师"
        }, 
        icon: "⚙️" 
      },
      { 
        name: {
          ko: "경영 컨설턴트",
          en: "Management Consultant",
          ja: "経営コンサルタント",
          zh: "管理顾问"
        }, 
        icon: "📊" 
      },
      { 
        name: {
          ko: "건축가",
          en: "Architect",
          ja: "建築家",
          zh: "建筑师"
        }, 
        icon: "🏗️" 
      },
      { 
        name: {
          ko: "투자 분석가",
          en: "Investment Analyst",
          ja: "投資アナリスト",
          zh: "投资分析师"
        }, 
        icon: "💹" 
      },
      { 
        name: {
          ko: "시스템 분석가",
          en: "Systems Analyst",
          ja: "システムアナリスト",
          zh: "系统分析师"
        }, 
        icon: "💻" 
      }
    ]
  },
  INTP: {
    title: {
      ko: "논리학자",
      en: "The Thinker",
      ja: "論理学者",
      zh: "逻辑学家"
    },
    subtitle: {
      ko: "The Thinker",
      en: "The Thinker",
      ja: "The Thinker",
      zh: "The Thinker"
    },
    description: {
      ko: "혁신적인 발명가로, 지식에 대한 갈증을 멈출 줄 모릅니다.",
      en: "Innovative inventors with an unquenchable thirst for knowledge.",
      ja: "革新的な発明家で、知識への渇望を止めることを知りません。",
      zh: "创新的发明家，对知识有着永不停息的渴望。"
    },
    strengths: {
      ko: [
        "뛰어난 논리적 사고",
        "높은 창의성",
        "독립적 사고",
        "복잡한 문제 해결 능력"
      ],
      en: [
        "Excellent logical thinking",
        "High creativity",
        "Independent thinking",
        "Complex problem-solving ability"
      ],
      ja: [
        "優れた論理的思考",
        "高い創造性",
        "独立的思考",
        "複雑な問題解決能力"
      ],
      zh: [
        "出色的逻辑思维",
        "高度创造性",
        "独立思考",
        "复杂问题解决能力"
      ]
    },
    weaknesses: {
      ko: [
        "실행력 부족",
        "감정 표현의 어려움",
        "일상적 업무에 대한 무관심",
        "타인과의 소통 부족"
      ],
      en: [
        "Lack of execution",
        "Difficulty expressing emotions",
        "Indifference to routine tasks",
        "Poor communication with others"
      ],
      ja: [
        "実行力不足",
        "感情表現の困難",
        "日常業務への無関心",
        "他人とのコミュニケーション不足"
      ],
      zh: [
        "执行力不足",
        "情感表达困难",
        "对日常工作漠不关心",
        "与他人沟通不足"
      ]
    },
    careers: [
      { 
        name: {
          ko: "프로그래머",
          en: "Programmer",
          ja: "プログラマー",
          zh: "程序员"
        }, 
        icon: "💻" 
      },
      { 
        name: {
          ko: "수학자",
          en: "Mathematician",
          ja: "数学者",
          zh: "数学家"
        }, 
        icon: "📐" 
      },
      { 
        name: {
          ko: "철학자",
          en: "Philosopher",
          ja: "哲学者",
          zh: "哲学家"
        }, 
        icon: "💭" 
      },
      { 
        name: {
          ko: "물리학자",
          en: "Physicist",
          ja: "物理学者",
          zh: "物理学家"
        }, 
        icon: "🔬" 
      },
      { 
        name: {
          ko: "게임 개발자",
          en: "Game Developer",
          ja: "ゲーム開発者",
          zh: "游戏开发者"
        }, 
        icon: "🎮" 
      },
      { 
        name: {
          ko: "학자/교수",
          en: "Scholar/Professor",
          ja: "学者/教授",
          zh: "学者/教授"
        }, 
        icon: "🎓" 
      }
    ]
  },
  ENTJ: {
    title: {
      ko: "지휘관",
      en: "The Commander",
      ja: "指揮官",
      zh: "指挥官"
    },
    subtitle: {
      ko: "The Commander",
      en: "The Commander",
      ja: "The Commander",
      zh: "The Commander"
    },
    description: {
      ko: "타고난 지도자로, 카리스마와 자신감으로 공통 목표를 향해 사람들을 이끕니다.",
      en: "Bold, imaginative and strong-willed leaders, always finding a way – or making one.",
      ja: "生まれながらのリーダーで、カリスマと自信で共通の目標に向けて人々を導きます。",
      zh: "天生的领导者，以魅力和自信引导人们朝着共同目标前进。"
    },
    strengths: {
      ko: [
        "강력한 리더십",
        "뛰어난 조직 능력",
        "목표 지향적",
        "효율성 추구"
      ],
      en: [
        "Strong leadership",
        "Excellent organizational skills",
        "Goal-oriented",
        "Efficiency-focused"
      ],
      ja: [
        "強力なリーダーシップ",
        "優れた組織能力",
        "目標指向",
        "効率性追求"
      ],
      zh: [
        "强大的领导力",
        "出色的组织能力",
        "目标导向",
        "追求效率"
      ]
    },
    weaknesses: {
      ko: [
        "지나친 권위주의",
        "감정적 배려 부족",
        "인내심 부족",
        "완벽주의적 성향"
      ],
      en: [
        "Excessive authoritarianism",
        "Lack of emotional consideration",
        "Impatience",
        "Perfectionist tendencies"
      ],
      ja: [
        "過度な権威主義",
        "感情的配慮不足",
        "忍耐力不足",
        "完璧主義的傾向"
      ],
      zh: [
        "过度权威主义",
        "缺乏情感关怀",
        "缺乏耐心",
        "完美主义倾向"
      ]
    },
    careers: [
      { 
        name: {
          ko: "CEO/경영진",
          en: "CEO/Executive",
          ja: "CEO/経営陣",
          zh: "CEO/高管"
        }, 
        icon: "👔" 
      },
      { 
        name: {
          ko: "프로젝트 매니저",
          en: "Project Manager",
          ja: "プロジェクトマネージャー",
          zh: "项目经理"
        }, 
        icon: "📋" 
      },
      { 
        name: {
          ko: "변호사",
          en: "Lawyer",
          ja: "弁護士",
          zh: "律师"
        }, 
        icon: "⚖️" 
      },
      { 
        name: {
          ko: "투자 은행가",
          en: "Investment Banker",
          ja: "投資銀行家",
          zh: "投资银行家"
        }, 
        icon: "🏦" 
      },
      { 
        name: {
          ko: "기업가",
          en: "Entrepreneur",
          ja: "起業家",
          zh: "企业家"
        }, 
        icon: "🚀" 
      },
      { 
        name: {
          ko: "정치인",
          en: "Politician",
          ja: "政治家",
          zh: "政治家"
        }, 
        icon: "🏛️" 
      }
    ]
  },
  ENTP: {
    title: {
      ko: "토론가",
      en: "The Debater",
      ja: "討論者",
      zh: "辩论家"
    },
    subtitle: {
      ko: "The Debater",
      en: "The Debater",
      ja: "The Debater",
      zh: "The Debater"
    },
    description: {
      ko: "똑똑하고 호기심이 많은 사상가로, 지적 도전을 거부할 수 없습니다.",
      en: "Smart and curious thinkers who cannot resist an intellectual challenge.",
      ja: "賢くて好奇心旺盛な思想家で、知的挑戦を拒むことができません。",
      zh: "聪明好奇的思想家，无法抗拒智力挑战。"
    },
    strengths: {
      ko: [
        "뛰어난 창의성",
        "빠른 학습 능력",
        "유연한 사고",
        "강한 호기심"
      ],
      en: [
        "Excellent creativity",
        "Quick learning ability",
        "Flexible thinking",
        "Strong curiosity"
      ],
      ja: [
        "優れた創造性",
        "速い学習能力",
        "柔軟な思考",
        "強い好奇心"
      ],
      zh: [
        "出色的创造力",
        "快速学习能力",
        "灵活思维",
        "强烈好奇心"
      ]
    },
    weaknesses: {
      ko: [
        "집중력 부족",
        "루틴 업무 기피",
        "감정 처리의 어려움",
        "완료에 대한 어려움"
      ],
      en: [
        "Lack of focus",
        "Avoidance of routine tasks",
        "Difficulty processing emotions",
        "Trouble with completion"
      ],
      ja: [
        "集中力不足",
        "ルーチン業務回避",
        "感情処理の困難",
        "完了への困難"
      ],
      zh: [
        "注意力不足",
        "回避例行工作",
        "情感处理困难",
        "完成任务困难"
      ]
    },
    careers: [
      { 
        name: {
          ko: "마케팅 전문가",
          en: "Marketing Specialist",
          ja: "マーケティング専門家",
          zh: "营销专家"
        }, 
        icon: "📢" 
      },
      { 
        name: {
          ko: "기자",
          en: "Journalist",
          ja: "記者",
          zh: "记者"
        }, 
        icon: "📰" 
      },
      { 
        name: {
          ko: "발명가",
          en: "Inventor",
          ja: "発明家",
          zh: "发明家"
        }, 
        icon: "💡" 
      },
      { 
        name: {
          ko: "광고 크리에이티브",
          en: "Advertising Creative",
          ja: "広告クリエイティブ",
          zh: "广告创意"
        }, 
        icon: "🎨" 
      },
      { 
        name: {
          ko: "컨설턴트",
          en: "Consultant",
          ja: "コンサルタント",
          zh: "顾问"
        }, 
        icon: "💼" 
      },
      { 
        name: {
          ko: "연설가",
          en: "Public Speaker",
          ja: "講演者",
          zh: "演讲家"
        }, 
        icon: "🎤" 
      }
    ]
  },
  INFJ: {
    title: {
      ko: "옹호자",
      en: "The Advocate",
      ja: "提唱者",
      zh: "提倡者"
    },
    subtitle: {
      ko: "The Advocate",
      en: "The Advocate",
      ja: "The Advocate",
      zh: "The Advocate"
    },
    description: {
      ko: "선의의 옹호자로, 조용하지만 확고한 의지를 가지고 있습니다.",
      en: "Quiet and mystical, yet very inspiring and tireless idealists.",
      ja: "静かで神秘的でありながら、非常にインスピレーション豊かで疲れ知らずの理想主義者です。",
      zh: "安静神秘，但非常有远见卓识和不知疲倦的理想主义者。"
    },
    strengths: {
      ko: ["직관적 통찰력", "이타적 성향", "결정적 순간의 추진력", "창의적 해결책"],
      en: ["Intuitive insights", "Altruistic nature", "Decisive when needed", "Creative solutions"],
      ja: ["直感的洞察力", "利他的性向", "決定的瞬間の推進力", "創造的解決策"],
      zh: ["直觉洞察力", "利他主义", "关键时刻的推动力", "创造性解决方案"]
    },
    weaknesses: {
      ko: ["과도한 민감성", "완벽주의", "소진되기 쉬움", "비판에 대한 민감성"],
      en: ["Overly sensitive", "Perfectionist", "Prone to burnout", "Sensitive to criticism"],
      ja: ["過度な敏感性", "完璧主義", "燃え尽きやすい", "批判に対する敏感性"],
      zh: ["过度敏感", "完美主义", "容易倦怠", "对批评敏感"]
    },
    careers: [
      { name: { ko: "상담사", en: "Counselor", ja: "カウンセラー", zh: "咨询师" }, icon: "🧠" },
      { name: { ko: "작가", en: "Writer", ja: "作家", zh: "作家" }, icon: "✍️" },
      { name: { ko: "사회복지사", en: "Social Worker", ja: "社会福祉士", zh: "社会工作者" }, icon: "🤝" },
      { name: { ko: "교사", en: "Teacher", ja: "教師", zh: "教师" }, icon: "📚" },
      { name: { ko: "의사", en: "Doctor", ja: "医師", zh: "医生" }, icon: "⚕️" },
      { name: { ko: "예술가", en: "Artist", ja: "芸術家", zh: "艺术家" }, icon: "🎨" }
    ]
  },
  INFP: {
    title: {
      ko: "중재자",
      en: "The Mediator",
      ja: "仲介者",
      zh: "调停者"
    },
    subtitle: {
      ko: "The Mediator",
      en: "The Mediator", 
      ja: "The Mediator",
      zh: "The Mediator"
    },
    description: {
      ko: "시적이고 친절하며 이타적인 사람들로, 언제나 선을 행하고자 합니다.",
      en: "Poetic, kind and altruistic people, always eager to help a good cause.",
      ja: "詩的で親切で利他的な人々で、常に良い目的を助けることを熱望しています。",
      zh: "富有诗意、善良和利他主义的人，总是热衷于帮助正义的事业。"
    },
    strengths: {
      ko: ["강한 가치관", "창의적 사고", "열정적 헌신", "개인적 성장 추구"],
      en: ["Strong values", "Creative thinking", "Passionate dedication", "Personal growth focus"],
      ja: ["強い価値観", "創造的思考", "情熱的献身", "個人的成長追求"],
      zh: ["坚强的价值观", "创造性思维", "热情奉献", "注重个人成长"]
    },
    weaknesses: {
      ko: ["지나친 이상주의", "실용성 부족", "자기비판적", "스트레스에 취약"],
      en: ["Overly idealistic", "Lack of practicality", "Self-critical", "Vulnerable to stress"],
      ja: ["過度な理想主義", "実用性不足", "自己批判的", "ストレスに脆弱"],
      zh: ["过度理想主义", "缺乏实用性", "自我批评", "容易受压力影响"]
    },
    careers: [
      { name: { ko: "심리학자", en: "Psychologist", ja: "心理学者", zh: "心理学家" }, icon: "🧠" },
      { name: { ko: "그래픽 디자이너", en: "Graphic Designer", ja: "グラフィックデザイナー", zh: "平面设计师" }, icon: "🎨" },
      { name: { ko: "음악가", en: "Musician", ja: "音楽家", zh: "音乐家" }, icon: "🎵" },
      { name: { ko: "번역가", en: "Translator", ja: "翻訳者", zh: "翻译家" }, icon: "🌐" },
      { name: { ko: "사진작가", en: "Photographer", ja: "写真家", zh: "摄影师" }, icon: "📸" },
      { name: { ko: "비영리 활동가", en: "Non-profit Worker", ja: "非営利活動家", zh: "非营利工作者" }, icon: "❤️" }
    ]
  },
  ENFJ: {
    title: {
      ko: "주인공",
      en: "The Protagonist",
      ja: "主人公",
      zh: "主人公"
    },
    subtitle: {
      ko: "The Protagonist",
      en: "The Protagonist",
      ja: "The Protagonist", 
      zh: "The Protagonist"
    },
    description: {
      ko: "카리스마 있고 영감을 주는 지도자로, 듣는 이들을 매혹시킵니다.",
      en: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
      ja: "カリスマ的でインスピレーションを与えるリーダーで、聞く人を魅了することができます。",
      zh: "具有魅力和鼓舞人心的领导者，能够吸引听众。"
    },
    strengths: {
      ko: ["탁월한 의사소통", "타인에 대한 관심", "자연스러운 리더십", "영감을 주는 능력"],
      en: ["Excellent communication", "Concern for others", "Natural leadership", "Inspiring ability"],
      ja: ["優れたコミュニケーション", "他人への関心", "自然なリーダーシップ", "インスピレーションを与える能力"],
      zh: ["出色的沟通能力", "关心他人", "天生的领导力", "鼓舞人心的能力"]
    },
    weaknesses: {
      ko: ["타인의 문제에 과몰입", "비판에 민감", "결정 어려움", "자기관리 소홀"],
      en: ["Over-involvement in others' problems", "Sensitive to criticism", "Decision difficulties", "Self-care neglect"],
      ja: ["他人の問題への過度な没入", "批判に敏感", "決定困難", "自己管理疎か"],
      zh: ["过度参与他人问题", "对批评敏感", "决策困难", "忽视自我照顾"]
    },
    careers: [
      { name: { ko: "교육자", en: "Educator", ja: "教育者", zh: "教育工作者" }, icon: "🎓" },
      { name: { ko: "인사 관리자", en: "HR Manager", ja: "人事マネージャー", zh: "人力资源经理" }, icon: "👥" },
      { name: { ko: "목사/성직자", en: "Minister/Clergy", ja: "牧師/聖職者", zh: "牧师/神职人员" }, icon: "⛪" },
      { name: { ko: "코치", en: "Coach", ja: "コーチ", zh: "教练" }, icon: "🏆" },
      { name: { ko: "이벤트 기획자", en: "Event Planner", ja: "イベントプランナー", zh: "活动策划师" }, icon: "🎉" },
      { name: { ko: "정치인", en: "Politician", ja: "政治家", zh: "政治家" }, icon: "🏛️" }
    ]
  },
  ENFP: {
    title: {
      ko: "활동가",
      en: "The Campaigner",
      ja: "活動家",
      zh: "活动家"
    },
    subtitle: {
      ko: "The Campaigner",
      en: "The Campaigner",
      ja: "The Campaigner",
      zh: "The Campaigner"
    },
    description: {
      ko: "열정적이고 창의적인 사교가로, 항상 새로운 가능성을 찾습니다.",
      en: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",
      ja: "熱狂的で創造的で社交的な自由な精神で、常に笑顔になる理由を見つけることができます。",
      zh: "热情、有创造力、善于交际的自由精神，总能找到微笑的理由。"
    },
    strengths: {
      ko: ["뛰어난 소통 능력", "창의적 사고", "열정적 에너지", "사람 중심적"],
      en: ["Excellent communication", "Creative thinking", "Enthusiastic energy", "People-focused"],
      ja: ["優れたコミュニケーション能力", "創造的思考", "熱狂的エネルギー", "人中心的"],
      zh: ["出色的沟通能力", "创造性思维", "热情的能量", "以人为本"]
    },
    weaknesses: {
      ko: ["집중력 부족", "스트레스에 민감", "세부사항 놓침", "루틴 업무 기피"],
      en: ["Lack of focus", "Stress sensitivity", "Missing details", "Routine task avoidance"],
      ja: ["集中力不足", "ストレスに敏感", "詳細見落とし", "ルーチン業務回避"],
      zh: ["缺乏专注力", "对压力敏感", "忽略细节", "回避例行工作"]
    },
    careers: [
      { name: { ko: "홍보/PR 전문가", en: "PR Specialist", ja: "PR専門家", zh: "公关专家" }, icon: "📢" },
      { name: { ko: "배우", en: "Actor", ja: "俳優", zh: "演员" }, icon: "🎭" },
      { name: { ko: "영업 담당자", en: "Sales Representative", ja: "営業担当者", zh: "销售代表" }, icon: "💼" },
      { name: { ko: "상담사", en: "Counselor", ja: "カウンセラー", zh: "咨询师" }, icon: "🧠" },
      { name: { ko: "기자", en: "Journalist", ja: "記者", zh: "记者" }, icon: "📰" },
      { name: { ko: "이벤트 코디네이터", en: "Event Coordinator", ja: "イベントコーディネーター", zh: "活动协调员" }, icon: "🎪" }
    ]
  }
};

export const getLocalizedPersonalityType = (type: string, language: Language) => {
  const multilangType = multiLanguagePersonalityTypes[type];
  if (!multilangType) return null;
  
  return {
    title: multilangType.title[language],
    subtitle: multilangType.subtitle[language],
    description: multilangType.description[language],
    strengths: multilangType.strengths[language],
    weaknesses: multilangType.weaknesses[language],
    careers: multilangType.careers.map(career => ({
      name: career.name[language],
      icon: career.icon
    }))
  };
};