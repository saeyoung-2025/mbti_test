import { Language } from "@/hooks/useLanguage";

export interface MultiLanguageQuestion {
  id: number;
  text: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
  };
  dimension: "EI" | "SN" | "TF" | "JP";
  options: [
    { text: { ko: string; en: string; ja: string; zh: string; }; value: "E" | "S" | "T" | "J" },
    { text: { ko: string; en: string; ja: string; zh: string; }; value: "I" | "N" | "F" | "P" }
  ];
}

export const multiLanguageQuestions: MultiLanguageQuestion[] = [
  {
    id: 1,
    text: {
      ko: "파티에서 당신은 주로 어떻게 행동하나요?",
      en: "How do you usually behave at parties?",
      ja: "パーティーでは主にどのように行動しますか？",
      zh: "在聚会上你通常如何表现？"
    },
    dimension: "EI",
    options: [
      { 
        text: {
          ko: "여러 사람들과 활발하게 대화하며 에너지를 얻는다",
          en: "I get energized by actively talking with many people",
          ja: "多くの人と活発に会話してエネルギーを得る",
          zh: "与很多人积极交谈并获得能量"
        }, 
        value: "E" 
      },
      { 
        text: {
          ko: "소수의 친한 사람들과 깊은 대화를 나누는 것을 선호한다",
          en: "I prefer having deep conversations with a few close friends",
          ja: "少数の親しい人と深い会話を交わすことを好む",
          zh: "更喜欢与少数亲密朋友深入交谈"
        }, 
        value: "I" 
      }
    ]
  },
  {
    id: 2,
    text: {
      ko: "새로운 프로젝트를 시작할 때 당신의 접근 방식은?",
      en: "What's your approach when starting a new project?",
      ja: "新しいプロジェクトを始める時のあなたのアプローチは？",
      zh: "开始新项目时你的方法是？"
    },
    dimension: "SN",
    options: [
      { 
        text: {
          ko: "구체적인 계획과 세부사항부터 정리한다",
          en: "I organize specific plans and details first",
          ja: "具体的な計画と詳細から整理する",
          zh: "首先整理具体计划和细节"
        }, 
        value: "S" 
      },
      { 
        text: {
          ko: "큰 그림과 가능성을 먼저 생각한다",
          en: "I think about the big picture and possibilities first",
          ja: "大きな絵と可能性を最初に考える",
          zh: "首先考虑大局和可能性"
        }, 
        value: "N" 
      }
    ]
  },
  {
    id: 3,
    text: {
      ko: "중요한 결정을 내릴 때 무엇을 더 중요하게 생각하나요?",
      en: "What do you consider more important when making important decisions?",
      ja: "重要な決定を下す時、何をより重要に考えますか？",
      zh: "做重要决定时你认为什么更重要？"
    },
    dimension: "TF",
    options: [
      { 
        text: {
          ko: "논리적이고 객관적인 분석",
          en: "Logical and objective analysis",
          ja: "論理的で客観的な分析",
          zh: "逻辑和客观分析"
        }, 
        value: "T" 
      },
      { 
        text: {
          ko: "사람들의 감정과 가치관",
          en: "People's emotions and values",
          ja: "人々の感情と価値観",
          zh: "人们的情感和价值观"
        }, 
        value: "F" 
      }
    ]
  },
  {
    id: 4,
    text: {
      ko: "일상생활에서 당신은?",
      en: "In your daily life, you:",
      ja: "日常生活であなたは？",
      zh: "在日常生活中你："
    },
    dimension: "JP",
    options: [
      { 
        text: {
          ko: "계획을 세우고 그에 따라 행동한다",
          en: "Make plans and act according to them",
          ja: "計画を立ててそれに従って行動する",
          zh: "制定计划并按计划行动"
        }, 
        value: "J" 
      },
      { 
        text: {
          ko: "상황에 맞춰 유연하게 대처한다",
          en: "Adapt flexibly to situations",
          ja: "状況に合わせて柔軟に対処する",
          zh: "根据情况灵活应对"
        }, 
        value: "P" 
      }
    ]
  },
  {
    id: 5,
    text: {
      ko: "휴식을 취할 때 당신은?",
      en: "When you take a break, you:",
      ja: "休憩を取る時、あなたは？",
      zh: "休息时你："
    },
    dimension: "EI",
    options: [
      { 
        text: {
          ko: "친구들과 함께 활동적인 시간을 보낸다",
          en: "Spend active time with friends",
          ja: "友達と一緒に活動的な時間を過ごす",
          zh: "与朋友一起度过活跃的时光"
        }, 
        value: "E" 
      },
      { 
        text: {
          ko: "혼자서 조용히 책을 읽거나 취미 활동을 한다",
          en: "Read quietly alone or engage in hobbies",
          ja: "一人で静かに本を読んだり趣味活動をする",
          zh: "独自安静地读书或进行爱好活动"
        }, 
        value: "I" 
      }
    ]
  },
  {
    id: 6,
    text: {
      ko: "정보를 처리할 때 당신은?",
      en: "When processing information, you:",
      ja: "情報を処理する時、あなたは？",
      zh: "处理信息时你："
    },
    dimension: "SN",
    options: [
      { 
        text: {
          ko: "현실적이고 실용적인 사실에 집중한다",
          en: "Focus on realistic and practical facts",
          ja: "現実的で実用的な事実に集中する",
          zh: "专注于现实和实用的事实"
        }, 
        value: "S" 
      },
      { 
        text: {
          ko: "패턴과 미래의 가능성을 탐색한다",
          en: "Explore patterns and future possibilities",
          ja: "パターンと将来の可能性を探求する",
          zh: "探索模式和未来可能性"
        }, 
        value: "N" 
      }
    ]
  },
  {
    id: 7,
    text: {
      ko: "갈등 상황에서 당신은?",
      en: "In conflict situations, you:",
      ja: "対立状況で、あなたは？",
      zh: "在冲突情况下你："
    },
    dimension: "TF",
    options: [
      { 
        text: {
          ko: "공정하고 논리적인 해결책을 찾는다",
          en: "Seek fair and logical solutions",
          ja: "公平で論理的な解決策を見つける",
          zh: "寻找公平和逻辑的解决方案"
        }, 
        value: "T" 
      },
      { 
        text: {
          ko: "모든 사람의 감정을 고려하며 조화를 추구한다",
          en: "Consider everyone's feelings and seek harmony",
          ja: "すべての人の感情を考慮し調和を求める",
          zh: "考虑每个人的感受并寻求和谐"
        }, 
        value: "F" 
      }
    ]
  },
  {
    id: 8,
    text: {
      ko: "마감일이 다가올 때 당신은?",
      en: "When deadlines approach, you:",
      ja: "締切が近づいた時、あなたは？",
      zh: "当截止日期临近时你："
    },
    dimension: "JP",
    options: [
      { 
        text: {
          ko: "미리 계획하고 준비해서 여유롭게 완료한다",
          en: "Plan ahead and complete with time to spare",
          ja: "事前に計画し準備して余裕を持って完了する",
          zh: "提前计划准备并从容完成"
        }, 
        value: "J" 
      },
      { 
        text: {
          ko: "압박감을 느끼며 마지막 순간에 집중해서 한다",
          en: "Feel pressure and focus intensely at the last moment",
          ja: "プレッシャーを感じながら最後の瞬間に集中して行う",
          zh: "感受压力并在最后时刻集中精力"
        }, 
        value: "P" 
      }
    ]
  },
  {
    id: 9,
    text: {
      ko: "새로운 사람들과의 모임에서 당신은?",
      en: "At gatherings with new people, you:",
      ja: "新しい人たちとの集まりで、あなたは？",
      zh: "在与新朋友的聚会中你："
    },
    dimension: "EI",
    options: [
      { 
        text: {
          ko: "적극적으로 다가가서 새로운 인맥을 만든다",
          en: "Actively approach others and make new connections",
          ja: "積極的に近づいて新しい人脈を作る",
          zh: "主动接近他人建立新联系"
        }, 
        value: "E" 
      },
      { 
        text: {
          ko: "상대방이 먼저 다가올 때까지 기다린다",
          en: "Wait for others to approach you first",
          ja: "相手が最初に近づいてくるまで待つ",
          zh: "等待对方先主动接近"
        }, 
        value: "I" 
      }
    ]
  },
  {
    id: 10,
    text: {
      ko: "학습할 때 당신은?",
      en: "When learning, you:",
      ja: "学習する時、あなたは？",
      zh: "学习时你："
    },
    dimension: "SN",
    options: [
      { 
        text: {
          ko: "단계별로 체계적으로 접근한다",
          en: "Approach systematically step by step",
          ja: "段階的に体系的にアプローチする",
          zh: "系统地逐步学习"
        }, 
        value: "S" 
      },
      { 
        text: {
          ko: "전체적인 개념을 먼저 이해하고 세부사항으로 들어간다",
          en: "Understand overall concepts first, then go into details",
          ja: "全体的な概念を最初に理解してから詳細に入る",
          zh: "先理解整体概念再深入细节"
        }, 
        value: "N" 
      }
    ]
  },
  {
    id: 11,
    text: {
      ko: "팀 프로젝트에서 당신의 역할은?",
      en: "What's your role in team projects?",
      ja: "チームプロジェクトでのあなたの役割は？",
      zh: "在团队项目中你的角色是？"
    },
    dimension: "TF",
    options: [
      { 
        text: {
          ko: "효율성과 성과에 집중하며 목표 달성을 이끈다",
          en: "Focus on efficiency and results, leading goal achievement",
          ja: "効率性と成果に集中し目標達成を導く",
          zh: "专注于效率和成果，引领目标达成"
        }, 
        value: "T" 
      },
      { 
        text: {
          ko: "팀의 화합과 구성원들의 만족을 중시한다",
          en: "Value team harmony and member satisfaction",
          ja: "チームの調和とメンバーの満足を重視する",
          zh: "重视团队和谐和成员满意度"
        }, 
        value: "F" 
      }
    ]
  },
  {
    id: 12,
    text: {
      ko: "여행을 계획할 때 당신은?",
      en: "When planning a trip, you:",
      ja: "旅行を計画する時、あなたは？",
      zh: "计划旅行时你："
    },
    dimension: "JP",
    options: [
      { 
        text: {
          ko: "상세한 일정표를 만들고 예약을 미리 한다",
          en: "Create detailed itineraries and make reservations in advance",
          ja: "詳細なスケジュールを作り予約を事前に行う",
          zh: "制定详细行程并提前预订"
        }, 
        value: "J" 
      },
      { 
        text: {
          ko: "대략적인 계획만 세우고 현지에서 유연하게 결정한다",
          en: "Make rough plans and decide flexibly on location",
          ja: "大まかな計画だけ立てて現地で柔軟に決定する",
          zh: "制定大致计划并在当地灵活决定"
        }, 
        value: "P" 
      }
    ]
  },
  {
    id: 13,
    text: {
      ko: "스트레스를 받을 때 당신은?",
      en: "When you're stressed, you:",
      ja: "ストレスを受けた時、あなたは？",
      zh: "感到压力时你："
    },
    dimension: "EI",
    options: [
      { 
        text: {
          ko: "친구들과 이야기하며 스트레스를 해소한다",
          en: "Talk with friends to relieve stress",
          ja: "友達と話してストレスを解消する",
          zh: "与朋友交谈来缓解压力"
        }, 
        value: "E" 
      },
      { 
        text: {
          ko: "혼자만의 시간을 가지며 내면을 정리한다",
          en: "Have alone time to organize your thoughts",
          ja: "一人の時間を持って内面を整理する",
          zh: "独处时间整理内心"
        }, 
        value: "I" 
      }
    ]
  },
  {
    id: 14,
    text: {
      ko: "문제를 해결할 때 당신은?",
      en: "When solving problems, you:",
      ja: "問題を解決する時、あなたは？",
      zh: "解决问题时你："
    },
    dimension: "SN",
    options: [
      { 
        text: {
          ko: "검증된 방법과 과거 경험을 활용한다",
          en: "Use proven methods and past experiences",
          ja: "実証された方法と過去の経験を活用する",
          zh: "运用已验证的方法和过去经验"
        }, 
        value: "S" 
      },
      { 
        text: {
          ko: "창의적이고 혁신적인 접근을 시도한다",
          en: "Try creative and innovative approaches",
          ja: "創造的で革新的なアプローチを試みる",
          zh: "尝试创新和创造性方法"
        }, 
        value: "N" 
      }
    ]
  },
  {
    id: 15,
    text: {
      ko: "비판을 받을 때 당신은?",
      en: "When receiving criticism, you:",
      ja: "批判を受けた時、あなたは？",
      zh: "接受批评时你："
    },
    dimension: "TF",
    options: [
      { 
        text: {
          ko: "객관적으로 분석하고 개선점을 찾는다",
          en: "Analyze objectively and find areas for improvement",
          ja: "客観的に分析し改善点を見つける",
          zh: "客观分析并找到改进点"
        }, 
        value: "T" 
      },
      { 
        text: {
          ko: "감정적으로 상처받고 관계에 대해 걱정한다",
          en: "Feel emotionally hurt and worry about relationships",
          ja: "感情的に傷つき関係について心配する",
          zh: "情感上受伤并担心人际关系"
        }, 
        value: "F" 
      }
    ]
  },
  {
    id: 16,
    text: {
      ko: "하루 일과를 마친 후 당신은?",
      en: "After finishing your daily tasks, you:",
      ja: "一日の業務を終えた後、あなたは？",
      zh: "完成一天的工作后你："
    },
    dimension: "JP",
    options: [
      { 
        text: {
          ko: "다음날을 위한 준비와 계획을 세운다",
          en: "Prepare and plan for the next day",
          ja: "翌日のための準備と計画を立てる",
          zh: "为第二天做准备和计划"
        }, 
        value: "J" 
      },
      { 
        text: {
          ko: "그 순간의 기분에 따라 자유롭게 행동한다",
          en: "Act freely according to your mood at the moment",
          ja: "その瞬間の気分に従って自由に行動する",
          zh: "根据当时的心情自由行动"
        }, 
        value: "P" 
      }
    ]
  },
  {
    id: 17,
    text: {
      ko: "새로운 아이디어가 떠올랐을 때 당신은?",
      en: "When you have a new idea, you:",
      ja: "新しいアイデアが浮かんだ時、あなたは？",
      zh: "想到新想法时你："
    },
    dimension: "EI",
    options: [
      { 
        text: {
          ko: "즉시 다른 사람들과 공유하고 토론한다",
          en: "Immediately share and discuss with others",
          ja: "すぐに他の人と共有し議論する",
          zh: "立即与他人分享和讨论"
        }, 
        value: "E" 
      },
      { 
        text: {
          ko: "혼자서 충분히 생각하고 정리한 후 공유한다",
          en: "Think it through alone and organize before sharing",
          ja: "一人で十分考えて整理してから共有する",
          zh: "独自充分思考整理后再分享"
        }, 
        value: "I" 
      }
    ]
  },
  {
    id: 18,
    text: {
      ko: "의사결정을 할 때 당신이 신뢰하는 것은?",
      en: "What do you trust when making decisions?",
      ja: "意思決定をする時、あなたが信頼するのは？",
      zh: "做决策时你信赖什么？"
    },
    dimension: "SN",
    options: [
      { 
        text: {
          ko: "구체적인 데이터와 사실",
          en: "Concrete data and facts",
          ja: "具体的なデータと事実",
          zh: "具体数据和事实"
        }, 
        value: "S" 
      },
      { 
        text: {
          ko: "직감과 통찰",
          en: "Intuition and insights",
          ja: "直感と洞察",
          zh: "直觉和洞察力"
        }, 
        value: "N" 
      }
    ]
  },
  {
    id: 19,
    text: {
      ko: "타인과의 관계에서 가장 중요하게 생각하는 것은?",
      en: "What's most important in relationships with others?",
      ja: "他人との関係で最も重要に思うことは？",
      zh: "与他人关系中最重要的是什么？"
    },
    dimension: "TF",
    options: [
      { 
        text: {
          ko: "상호 존중과 정직함",
          en: "Mutual respect and honesty",
          ja: "相互尊重と正直さ",
          zh: "相互尊重和诚实"
        }, 
        value: "T" 
      },
      { 
        text: {
          ko: "따뜻함과 이해심",
          en: "Warmth and understanding",
          ja: "温かさと理解",
          zh: "温暖和理解"
        }, 
        value: "F" 
      }
    ]
  },
  {
    id: 20,
    text: {
      ko: "변화에 직면했을 때 당신은?",
      en: "When facing change, you:",
      ja: "変化に直面した時、あなたは？",
      zh: "面对变化时你："
    },
    dimension: "JP",
    options: [
      { 
        text: {
          ko: "신중하게 계획을 세우고 단계적으로 적응한다",
          en: "Plan carefully and adapt step by step",
          ja: "慎重に計画を立てて段階的に適応する",
          zh: "谨慎计划并逐步适应"
        }, 
        value: "J" 
      },
      { 
        text: {
          ko: "변화를 받아들이고 유연하게 대응한다",
          en: "Embrace change and respond flexibly",
          ja: "変化を受け入れて柔軟に対応する",
          zh: "接受变化并灵活应对"
        }, 
        value: "P" 
      }
    ]
  }
];

export const getLocalizedQuestion = (question: MultiLanguageQuestion, language: Language) => {
  return {
    id: question.id,
    text: question.text[language],
    dimension: question.dimension,
    options: question.options.map(option => ({
      text: option.text[language],
      value: option.value
    }))
  };
};