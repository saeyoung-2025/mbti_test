export interface LocalizedQuestion {
  id: number;
  text: {
    ko: string;
    en: string;
    ja: string;
  };
  dimension: "EI" | "SN" | "TF" | "JP";
  options: [
    {
      text: {
        ko: string;
        en: string;
        ja: string;
      };
      value: "E" | "S" | "T" | "J";
    },
    {
      text: {
        ko: string;
        en: string;
        ja: string;
      };
      value: "I" | "N" | "F" | "P";
    }
  ];
}

export const localizedQuestions: LocalizedQuestion[] = [
  // EI 차원 (1-15)
  {
    id: 1,
    dimension: "EI",
    text: {
      ko: "주말에 친구들과 약속이 갑자기 취소되었을 때",
      en: "When plans with friends are suddenly cancelled on the weekend",
      ja: "週末の友達との約束が急にキャンセルされた時"
    },
    options: [
      {
        text: {
          ko: "다른 친구들에게 연락해서 새로운 약속을 잡는다",
          en: "Contact other friends to make new plans",
          ja: "他の友達に連絡して新しい約束を入れる"
        },
        value: "E"
      },
      {
        text: {
          ko: "집에서 혼자만의 시간을 즐긴다",
          en: "Enjoy alone time at home",
          ja: "家で一人の時間を楽しむ"
        },
        value: "I"
      }
    ]
  },
  {
    id: 2,
    dimension: "EI",
    text: {
      ko: "새로운 동호회나 모임에 처음 참석할 때",
      en: "When attending a new club or gathering for the first time",
      ja: "新しいサークルや集まりに初めて参加する時"
    },
    options: [
      {
        text: {
          ko: "적극적으로 다가가서 먼저 인사하고 대화를 시작한다",
          en: "Proactively approach others and initiate conversation",
          ja: "積極的に近づいて先に挨拶し会話を始める"
        },
        value: "E"
      },
      {
        text: {
          ko: "조용히 분위기를 파악하며 누군가 먼저 말을 걸어주길 기다린다",
          en: "Quietly observe the atmosphere and wait for someone to approach",
          ja: "静かに雰囲気を把握し誰かが先に話しかけてくれるのを待つ"
        },
        value: "I"
      }
    ]
  },
  {
    id: 3,
    dimension: "EI",
    text: {
      ko: "힘든 일이 있을 때 나는",
      en: "When going through a difficult time, I",
      ja: "辛いことがある時、私は"
    },
    options: [
      {
        text: {
          ko: "친구들을 만나서 이야기를 나누며 해소한다",
          en: "Meet friends and talk it through",
          ja: "友達に会って話をして解消する"
        },
        value: "E"
      },
      {
        text: {
          ko: "혼자 시간을 가지며 생각을 정리한다",
          en: "Take time alone to organize my thoughts",
          ja: "一人で時間を持って考えを整理する"
        },
        value: "I"
      }
    ]
  },
  {
    id: 4,
    dimension: "EI",
    text: {
      ko: "회식이나 워크샵 같은 단체 활동 후에",
      en: "After group activities like company dinners or workshops",
      ja: "会食やワークショップのような団体活動の後"
    },
    options: [
      {
        text: {
          ko: "에너지가 충전되어 더 활동적이 된다",
          en: "Feel energized and become more active",
          ja: "エネルギーが充電されてより活動的になる"
        },
        value: "E"
      },
      {
        text: {
          ko: "피곤해서 혼자만의 휴식이 필요하다",
          en: "Feel tired and need some alone time to rest",
          ja: "疲れて一人での休息が必要だ"
        },
        value: "I"
      }
    ]
  },
  {
    id: 5,
    dimension: "EI",
    text: {
      ko: "카페에서 공부하거나 일할 때",
      en: "When studying or working at a cafe",
      ja: "カフェで勉強したり仕事をする時"
    },
    options: [
      {
        text: {
          ko: "사람들의 왁자지껄한 소리가 오히려 집중에 도움이 된다",
          en: "The bustling noise actually helps me focus",
          ja: "人々の賑やかな音がかえって集中に役立つ"
        },
        value: "E"
      },
      {
        text: {
          ko: "조용한 곳을 찾거나 이어폰으로 소음을 차단한다",
          en: "Find a quiet spot or use earphones to block out noise",
          ja: "静かな場所を探すかイヤホンで騒音を遮断する"
        },
        value: "I"
      }
    ]
  },
  {
    id: 6,
    dimension: "EI",
    text: {
      ko: "처음 보는 사람들과 엘리베이터에 탔을 때",
      en: "When in an elevator with strangers",
      ja: "初対面の人とエレベーターに乗った時"
    },
    options: [
      {
        text: {
          ko: "가벼운 대화나 눈인사를 시도한다",
          en: "Attempt light conversation or eye contact greeting",
          ja: "軽い会話や目礼を試みる"
        },
        value: "E"
      },
      {
        text: {
          ko: "휴대폰을 보거나 층수 표시를 응시한다",
          en: "Look at phone or stare at floor numbers",
          ja: "携帯を見るか階数表示を見つめる"
        },
        value: "I"
      }
    ]
  },
  {
    id: 7,
    dimension: "EI",
    text: {
      ko: "파티나 모임에서 나는 주로",
      en: "At parties or gatherings, I usually",
      ja: "パーティーや集まりで私は主に"
    },
    options: [
      {
        text: {
          ko: "여러 그룹을 돌아다니며 많은 사람과 이야기한다",
          en: "Move around groups and talk to many people",
          ja: "いろいろなグループを回って多くの人と話す"
        },
        value: "E"
      },
      {
        text: {
          ko: "친한 사람 몇 명과 깊은 대화를 나눈다",
          en: "Have deep conversations with a few close people",
          ja: "親しい数人と深い会話をする"
        },
        value: "I"
      }
    ]
  },
  {
    id: 8,
    dimension: "EI",
    text: {
      ko: "새로운 아이디어가 떠올랐을 때",
      en: "When a new idea comes to mind",
      ja: "新しいアイデアが浮かんだ時"
    },
    options: [
      {
        text: {
          ko: "바로 누군가에게 말하면서 생각을 발전시킨다",
          en: "Immediately share with someone to develop the idea",
          ja: "すぐ誰かに話して考えを発展させる"
        },
        value: "E"
      },
      {
        text: {
          ko: "혼자 곰곰이 생각하며 정리한 후 공유한다",
          en: "Think it through alone before sharing",
          ja: "一人でじっくり考えて整理してから共有する"
        },
        value: "I"
      }
    ]
  },
  {
    id: 9,
    dimension: "EI",
    text: {
      ko: "긴 회의나 수업이 끝나고 휴식 시간에",
      en: "During break after a long meeting or class",
      ja: "長い会議や授業が終わって休憩時間に"
    },
    options: [
      {
        text: {
          ko: "동료들과 이야기를 나누며 시간을 보낸다",
          en: "Chat with colleagues to pass the time",
          ja: "同僚と話をしながら時間を過ごす"
        },
        value: "E"
      },
      {
        text: {
          ko: "혼자 산책하거나 조용히 휴식을 취한다",
          en: "Take a walk alone or rest quietly",
          ja: "一人で散歩したり静かに休む"
        },
        value: "I"
      }
    ]
  },
  {
    id: 10,
    dimension: "EI",
    text: {
      ko: "여행을 계획할 때",
      en: "When planning a trip",
      ja: "旅行を計画する時"
    },
    options: [
      {
        text: {
          ko: "친구들과 함께 가는 단체 여행이 더 즐겁다",
          en: "Group trips with friends are more enjoyable",
          ja: "友達と一緒に行く団体旅行がより楽しい"
        },
        value: "E"
      },
      {
        text: {
          ko: "혼자만의 여행이나 소수와 가는 것을 선호한다",
          en: "Prefer solo travel or trips with a small group",
          ja: "一人旅や少人数で行くのを好む"
        },
        value: "I"
      }
    ]
  },
  {
    id: 11,
    dimension: "EI",
    text: {
      ko: "직장이나 학교에서 점심시간에",
      en: "During lunch break at work or school",
      ja: "職場や学校で昼休みに"
    },
    options: [
      {
        text: {
          ko: "동료나 친구들과 함께 식사하며 담소를 나눈다",
          en: "Eat with colleagues or friends and chat",
          ja: "同僚や友達と一緒に食事して歓談する"
        },
        value: "E"
      },
      {
        text: {
          ko: "혼자 조용히 식사하며 휴식을 취한다",
          en: "Eat alone quietly and take a rest",
          ja: "一人で静かに食事して休む"
        },
        value: "I"
      }
    ]
  },
  {
    id: 12,
    dimension: "EI",
    text: {
      ko: "생일 파티를 계획한다면",
      en: "When planning a birthday party",
      ja: "誕生日パーティーを計画するなら"
    },
    options: [
      {
        text: {
          ko: "많은 사람을 초대해서 성대하게 치른다",
          en: "Invite many people for a big celebration",
          ja: "多くの人を招待して盛大に行う"
        },
        value: "E"
      },
      {
        text: {
          ko: "가까운 사람들만 초대해서 조용히 즐긴다",
          en: "Invite only close people for a quiet gathering",
          ja: "親しい人だけを招待して静かに楽しむ"
        },
        value: "I"
      }
    ]
  },
  {
    id: 13,
    dimension: "EI",
    text: {
      ko: "전화 통화와 문자 메시지 중",
      en: "Between phone calls and text messages",
      ja: "電話とメッセージの間で"
    },
    options: [
      {
        text: {
          ko: "직접 통화하는 것이 더 편하다",
          en: "Prefer direct phone calls",
          ja: "直接通話する方が楽だ"
        },
        value: "E"
      },
      {
        text: {
          ko: "문자로 소통하는 것이 더 편하다",
          en: "Prefer communicating via text",
          ja: "メッセージでコミュニケーションする方が楽だ"
        },
        value: "I"
      }
    ]
  },
  {
    id: 14,
    dimension: "EI",
    text: {
      ko: "새로운 취미를 시작한다면",
      en: "When starting a new hobby",
      ja: "新しい趣味を始めるなら"
    },
    options: [
      {
        text: {
          ko: "동호회나 그룹 활동에 참여한다",
          en: "Join a club or group activity",
          ja: "サークルやグループ活動に参加する"
        },
        value: "E"
      },
      {
        text: {
          ko: "혼자서 조용히 배우고 즐긴다",
          en: "Learn and enjoy it alone quietly",
          ja: "一人で静かに学んで楽しむ"
        },
        value: "I"
      }
    ]
  },
  {
    id: 15,
    dimension: "EI",
    text: {
      ko: "주말 저녁 시간에 에너지가 남아있다면",
      en: "If you have energy left on weekend evenings",
      ja: "週末の夕方に余力があるなら"
    },
    options: [
      {
        text: {
          ko: "친구들을 만나거나 외출한다",
          en: "Meet friends or go out",
          ja: "友達に会うか外出する"
        },
        value: "E"
      },
      {
        text: {
          ko: "집에서 편하게 쉰다",
          en: "Rest comfortably at home",
          ja: "家で楽に休む"
        },
        value: "I"
      }
    ]
  },

  // SN 차원 (16-30)
  {
    id: 16,
    dimension: "SN",
    text: {
      ko: "새로운 요리법을 배울 때",
      en: "When learning a new recipe",
      ja: "新しいレシピを学ぶ時"
    },
    options: [
      {
        text: {
          ko: "정확한 계량과 순서를 꼼꼼히 따른다",
          en: "Follow precise measurements and order carefully",
          ja: "正確な計量と順序を細かく従う"
        },
        value: "S"
      },
      {
        text: {
          ko: "대략적인 재료와 방법을 참고해 내 스타일로 응용한다",
          en: "Reference general ingredients and methods, then adapt to my style",
          ja: "大まかな材料と方法を参考に自分のスタイルで応用する"
        },
        value: "N"
      }
    ]
  },
  {
    id: 17,
    dimension: "SN",
    text: {
      ko: "책이나 영화를 볼 때 나는",
      en: "When reading books or watching movies, I",
      ja: "本や映画を見る時、私は"
    },
    options: [
      {
        text: {
          ko: "구체적인 장면과 묘사에 집중한다",
          en: "Focus on specific scenes and descriptions",
          ja: "具体的な場面と描写に集中する"
        },
        value: "S"
      },
      {
        text: {
          ko: "전체적인 주제와 상징적 의미를 찾는다",
          en: "Look for overall themes and symbolic meanings",
          ja: "全体的なテーマと象徴的な意味を探す"
        },
        value: "N"
      }
    ]
  },
  {
    id: 18,
    dimension: "SN",
    text: {
      ko: "과거를 회상할 때",
      en: "When reminiscing about the past",
      ja: "過去を回想する時"
    },
    options: [
      {
        text: {
          ko: "구체적인 사건과 대화 내용을 선명하게 기억한다",
          en: "Clearly remember specific events and conversations",
          ja: "具体的な出来事と会話内容を鮮明に覚えている"
        },
        value: "S"
      },
      {
        text: {
          ko: "전체적인 분위기와 느낌을 기억한다",
          en: "Remember the overall atmosphere and feelings",
          ja: "全体的な雰囲気と感じを覚えている"
        },
        value: "N"
      }
    ]
  },
  {
    id: 19,
    dimension: "SN",
    text: {
      ko: "업무나 과제를 설명받을 때",
      en: "When receiving work or assignment instructions",
      ja: "業務や課題の説明を受ける時"
    },
    options: [
      {
        text: {
          ko: "단계별 구체적인 방법을 알려주면 좋다",
          en: "Prefer step-by-step specific methods",
          ja: "段階別の具体的な方法を教えてもらうのが良い"
        },
        value: "S"
      },
      {
        text: {
          ko: "전체적인 목표와 방향성만 알려주면 된다",
          en: "Just need to know the overall goal and direction",
          ja: "全体的な目標と方向性だけ教えてもらえばいい"
        },
        value: "N"
      }
    ]
  },
  {
    id: 20,
    dimension: "SN",
    text: {
      ko: "대화할 때 나는 주로",
      en: "During conversations, I mainly",
      ja: "会話する時、私は主に"
    },
    options: [
      {
        text: {
          ko: "실제 경험과 구체적인 사실에 대해 이야기한다",
          en: "Talk about actual experiences and concrete facts",
          ja: "実際の経験と具体的な事実について話す"
        },
        value: "S"
      },
      {
        text: {
          ko: "추상적인 개념과 가능성에 대해 이야기한다",
          en: "Talk about abstract concepts and possibilities",
          ja: "抽象的な概念と可能性について話す"
        },
        value: "N"
      }
    ]
  },
  {
    id: 21,
    dimension: "SN",
    text: {
      ko: "물건을 살 때",
      en: "When shopping",
      ja: "買い物をする時"
    },
    options: [
      {
        text: {
          ko: "실용성과 현재 필요한 것을 우선 고려한다",
          en: "Prioritize practicality and current needs",
          ja: "実用性と現在必要なものを優先的に考慮する"
        },
        value: "S"
      },
      {
        text: {
          ko: "미래에 쓸 수 있을지, 다양한 가능성을 생각한다",
          en: "Think about future uses and various possibilities",
          ja: "将来使えるか、様々な可能性を考える"
        },
        value: "N"
      }
    ]
  },
  {
    id: 22,
    dimension: "SN",
    text: {
      ko: "새로운 프로젝트를 시작할 때",
      en: "When starting a new project",
      ja: "新しいプロジェクトを始める時"
    },
    options: [
      {
        text: {
          ko: "검증된 방법을 선호하고 단계별로 진행한다",
          en: "Prefer proven methods and proceed step by step",
          ja: "検証された方法を好み段階的に進める"
        },
        value: "S"
      },
      {
        text: {
          ko: "새로운 방법을 시도하고 혁신적으로 접근한다",
          en: "Try new methods and approach innovatively",
          ja: "新しい方法を試して革新的にアプローチする"
        },
        value: "N"
      }
    ]
  },
  {
    id: 23,
    dimension: "SN",
    text: {
      ko: "문제를 해결할 때",
      en: "When solving problems",
      ja: "問題を解決する時"
    },
    options: [
      {
        text: {
          ko: "눈앞의 현실적인 해결책을 찾는다",
          en: "Look for realistic solutions at hand",
          ja: "目の前の現実的な解決策を探す"
        },
        value: "S"
      },
      {
        text: {
          ko: "근본적인 원인과 장기적인 해결책을 고민한다",
          en: "Consider root causes and long-term solutions",
          ja: "根本的な原因と長期的な解決策を悩む"
        },
        value: "N"
      }
    ]
  },
  {
    id: 24,
    dimension: "SN",
    text: {
      ko: "뉴스나 기사를 읽을 때",
      en: "When reading news or articles",
      ja: "ニュースや記事を読む時"
    },
    options: [
      {
        text: {
          ko: "구체적인 사실과 데이터에 주목한다",
          en: "Focus on concrete facts and data",
          ja: "具体的な事実とデータに注目する"
        },
        value: "S"
      },
      {
        text: {
          ko: "전체적인 맥락과 미래의 영향을 생각한다",
          en: "Think about overall context and future impacts",
          ja: "全体的な文脈と未来の影響を考える"
        },
        value: "N"
      }
    ]
  },
  {
    id: 25,
    dimension: "SN",
    text: {
      ko: "여행 계획을 세울 때",
      en: "When planning a trip",
      ja: "旅行計画を立てる時"
    },
    options: [
      {
        text: {
          ko: "구체적인 일정과 가볼 장소를 상세히 정한다",
          en: "Set detailed itinerary and specific places to visit",
          ja: "具体的な日程と行く場所を詳しく決める"
        },
        value: "S"
      },
      {
        text: {
          ko: "대략적인 방향만 정하고 그때그때 결정한다",
          en: "Set general direction and decide on the spot",
          ja: "大まかな方向だけ決めてその都度決める"
        },
        value: "N"
      }
    ]
  },
  {
    id: 26,
    dimension: "SN",
    text: {
      ko: "설명서나 매뉴얼을 볼 때",
      en: "When reading manuals or instructions",
      ja: "説明書やマニュアルを見る時"
    },
    options: [
      {
        text: {
          ko: "처음부터 끝까지 순서대로 꼼꼼히 읽는다",
          en: "Read thoroughly from start to finish in order",
          ja: "最初から最後まで順番に丁寧に読む"
        },
        value: "S"
      },
      {
        text: {
          ko: "필요한 부분만 찾아보거나 대충 훑어본다",
          en: "Look up only needed parts or skim through",
          ja: "必要な部分だけ探すか大体見る"
        },
        value: "N"
      }
    ]
  },
  {
    id: 27,
    dimension: "SN",
    text: {
      ko: "미래에 대해 생각할 때",
      en: "When thinking about the future",
      ja: "未来について考える時"
    },
    options: [
      {
        text: {
          ko: "현실적이고 달성 가능한 목표를 세운다",
          en: "Set realistic and achievable goals",
          ja: "現実的で達成可能な目標を立てる"
        },
        value: "S"
      },
      {
        text: {
          ko: "이상적이고 원대한 꿈을 꾼다",
          en: "Dream of idealistic and grand visions",
          ja: "理想的で壮大な夢を見る"
        },
        value: "N"
      }
    ]
  },
  {
    id: 28,
    dimension: "SN",
    text: {
      ko: "새로운 기기나 앱을 사용할 때",
      en: "When using a new device or app",
      ja: "新しい機器やアプリを使う時"
    },
    options: [
      {
        text: {
          ko: "튜토리얼을 차근차근 따라가며 익힌다",
          en: "Learn by following tutorials step by step",
          ja: "チュートリアルを着実に従って覚える"
        },
        value: "S"
      },
      {
        text: {
          ko: "직접 만져보며 감각적으로 익힌다",
          en: "Learn intuitively by trying it out directly",
          ja: "直接触って感覚的に覚える"
        },
        value: "N"
      }
    ]
  },
  {
    id: 29,
    dimension: "SN",
    text: {
      ko: "회의에서 아이디어를 낼 때",
      en: "When proposing ideas in meetings",
      ja: "会議でアイデアを出す時"
    },
    options: [
      {
        text: {
          ko: "실현 가능하고 구체적인 제안을 한다",
          en: "Make feasible and concrete proposals",
          ja: "実現可能で具体的な提案をする"
        },
        value: "S"
      },
      {
        text: {
          ko: "창의적이고 참신한 아이디어를 제시한다",
          en: "Present creative and novel ideas",
          ja: "創意的で斬新なアイデアを提示する"
        },
        value: "N"
      }
    ]
  },
  {
    id: 30,
    dimension: "SN",
    text: {
      ko: "일상생활에서 나는",
      en: "In daily life, I",
      ja: "日常生活で私は"
    },
    options: [
      {
        text: {
          ko: "정해진 루틴을 따르는 것이 편하다",
          en: "Feel comfortable following set routines",
          ja: "決まったルーティンに従うのが楽だ"
        },
        value: "S"
      },
      {
        text: {
          ko: "변화와 새로움을 추구한다",
          en: "Seek change and novelty",
          ja: "変化と新しさを追求する"
        },
        value: "N"
      }
    ]
  },

  // TF 차원 (31-45)
  {
    id: 31,
    dimension: "TF",
    text: {
      ko: "친구가 힘든 상황을 털어놓을 때",
      en: "When a friend shares their difficulties",
      ja: "友達が辛い状況を打ち明ける時"
    },
    options: [
      {
        text: {
          ko: "해결책과 조언을 제시한다",
          en: "Offer solutions and advice",
          ja: "解決策とアドバイスを提示する"
        },
        value: "T"
      },
      {
        text: {
          ko: "공감하며 감정을 함께 나눈다",
          en: "Empathize and share their feelings",
          ja: "共感して感情を一緒に分かち合う"
        },
        value: "F"
      }
    ]
  },
  {
    id: 32,
    dimension: "TF",
    text: {
      ko: "팀 프로젝트에서 의견 충돌이 생겼을 때",
      en: "When conflicts arise in team projects",
      ja: "チームプロジェクトで意見の衝突が生じた時"
    },
    options: [
      {
        text: {
          ko: "객관적인 기준으로 최선의 방법을 찾는다",
          en: "Find the best method using objective criteria",
          ja: "客観的な基準で最善の方法を探す"
        },
        value: "T"
      },
      {
        text: {
          ko: "모두의 의견을 존중하며 조화를 추구한다",
          en: "Respect everyone's opinion and seek harmony",
          ja: "皆の意見を尊重して調和を追求する"
        },
        value: "F"
      }
    ]
  },
  {
    id: 33,
    dimension: "TF",
    text: {
      ko: "중요한 결정을 내릴 때 나는",
      en: "When making important decisions, I",
      ja: "重要な決定を下す時、私は"
    },
    options: [
      {
        text: {
          ko: "논리적 분석과 효율성을 우선한다",
          en: "Prioritize logical analysis and efficiency",
          ja: "論理的分析と効率性を優先する"
        },
        value: "T"
      },
      {
        text: {
          ko: "관계와 감정적 영향을 중요하게 생각한다",
          en: "Consider relationships and emotional impacts important",
          ja: "関係と感情的影響を重要に考える"
        },
        value: "F"
      }
    ]
  },
  {
    id: 34,
    dimension: "TF",
    text: {
      ko: "누군가의 행동이 이해되지 않을 때",
      en: "When someone's behavior is incomprehensible",
      ja: "誰かの行動が理解できない時"
    },
    options: [
      {
        text: {
          ko: "왜 그렇게 했는지 이유를 분석한다",
          en: "Analyze why they acted that way",
          ja: "なぜそうしたのか理由を分析する"
        },
        value: "T"
      },
      {
        text: {
          ko: "그 사람의 감정과 상황을 헤아린다",
          en: "Consider their feelings and circumstances",
          ja: "その人の感情と状況を察する"
        },
        value: "F"
      }
    ]
  },
  {
    id: 35,
    dimension: "TF",
    text: {
      ko: "칭찬을 할 때 나는",
      en: "When giving compliments, I",
      ja: "褒める時、私は"
    },
    options: [
      {
        text: {
          ko: "구체적인 성과와 결과를 언급한다",
          en: "Mention specific achievements and results",
          ja: "具体的な成果と結果に言及する"
        },
        value: "T"
      },
      {
        text: {
          ko: "노력과 마음가짐을 인정한다",
          en: "Acknowledge effort and attitude",
          ja: "努力と心構えを認める"
        },
        value: "F"
      }
    ]
  },
  {
    id: 36,
    dimension: "TF",
    text: {
      ko: "영화나 드라마를 볼 때",
      en: "When watching movies or dramas",
      ja: "映画やドラマを見る時"
    },
    options: [
      {
        text: {
          ko: "줄거리의 논리성과 개연성을 따진다",
          en: "Judge the logic and plausibility of the plot",
          ja: "ストーリーの論理性と蓋然性を問う"
        },
        value: "T"
      },
      {
        text: {
          ko: "캐릭터의 감정에 몰입하고 공감한다",
          en: "Immerse in and empathize with characters' emotions",
          ja: "キャラクターの感情に没入して共感する"
        },
        value: "F"
      }
    ]
  },
  {
    id: 37,
    dimension: "TF",
    text: {
      ko: "피드백을 줄 때",
      en: "When giving feedback",
      ja: "フィードバックをする時"
    },
    options: [
      {
        text: {
          ko: "객관적이고 직접적으로 문제점을 지적한다",
          en: "Point out problems objectively and directly",
          ja: "客観的で直接的に問題点を指摘する"
        },
        value: "T"
      },
      {
        text: {
          ko: "상대방의 기분을 고려해 부드럽게 전달한다",
          en: "Deliver gently considering others' feelings",
          ja: "相手の気持ちを考慮して柔らかく伝える"
        },
        value: "F"
      }
    ]
  },
  {
    id: 38,
    dimension: "TF",
    text: {
      ko: "논쟁이나 토론을 할 때",
      en: "During arguments or debates",
      ja: "議論やディベートをする時"
    },
    options: [
      {
        text: {
          ko: "사실과 논리로 설득한다",
          en: "Persuade with facts and logic",
          ja: "事実と論理で説得する"
        },
        value: "T"
      },
      {
        text: {
          ko: "분위기와 관계를 먼저 생각한다",
          en: "Consider atmosphere and relationships first",
          ja: "雰囲気と関係をまず考える"
        },
        value: "F"
      }
    ]
  },
  {
    id: 39,
    dimension: "TF",
    text: {
      ko: "책이나 기사를 평가할 때",
      en: "When evaluating books or articles",
      ja: "本や記事を評価する時"
    },
    options: [
      {
        text: {
          ko: "논리적 타당성과 근거를 중점적으로 본다",
          en: "Focus on logical validity and evidence",
          ja: "論理的妥当性と根拠を重点的に見る"
        },
        value: "T"
      },
      {
        text: {
          ko: "감동과 공감되는 메시지를 중요하게 본다",
          en: "Value touching and relatable messages",
          ja: "感動と共感できるメッセージを重要に見る"
        },
        value: "F"
      }
    ]
  },
  {
    id: 40,
    dimension: "TF",
    text: {
      ko: "리더로서 팀을 이끌 때",
      en: "When leading a team as a leader",
      ja: "リーダーとしてチームを率いる時"
    },
    options: [
      {
        text: {
          ko: "성과와 목표 달성을 최우선으로 한다",
          en: "Prioritize performance and goal achievement",
          ja: "成果と目標達成を最優先にする"
        },
        value: "T"
      },
      {
        text: {
          ko: "팀원들의 화합과 만족도를 중요시한다",
          en: "Value team harmony and member satisfaction",
          ja: "チームメンバーの和合と満足度を重視する"
        },
        value: "F"
      }
    ]
  },
  {
    id: 41,
    dimension: "TF",
    text: {
      ko: "선물을 고를 때",
      en: "When choosing a gift",
      ja: "プレゼントを選ぶ時"
    },
    options: [
      {
        text: {
          ko: "실용적이고 유용한 것을 선택한다",
          en: "Choose practical and useful items",
          ja: "実用的で有用なものを選ぶ"
        },
        value: "T"
      },
      {
        text: {
          ko: "상대방이 감동받을 만한 것을 고른다",
          en: "Choose something that will touch them emotionally",
          ja: "相手が感動するようなものを選ぶ"
        },
        value: "F"
      }
    ]
  },
  {
    id: 42,
    dimension: "TF",
    text: {
      ko: "규칙을 대할 때",
      en: "When dealing with rules",
      ja: "ルールに対する時"
    },
    options: [
      {
        text: {
          ko: "원칙은 예외 없이 지켜져야 한다",
          en: "Principles must be followed without exception",
          ja: "原則は例外なく守られるべきだ"
        },
        value: "T"
      },
      {
        text: {
          ko: "상황과 사람에 따라 융통성이 필요하다",
          en: "Flexibility is needed depending on situations and people",
          ja: "状況と人によって柔軟性が必要だ"
        },
        value: "F"
      }
    ]
  },
  {
    id: 43,
    dimension: "TF",
    text: {
      ko: "업무 평가를 할 때",
      en: "When evaluating work performance",
      ja: "業務評価をする時"
    },
    options: [
      {
        text: {
          ko: "명확한 기준과 수치로 평가한다",
          en: "Evaluate with clear standards and numbers",
          ja: "明確な基準と数値で評価する"
        },
        value: "T"
      },
      {
        text: {
          ko: "과정과 노력도 함께 고려한다",
          en: "Also consider the process and effort",
          ja: "過程と努力も一緒に考慮する"
        },
        value: "F"
      }
    ]
  },
  {
    id: 44,
    dimension: "TF",
    text: {
      ko: "사과를 받을 때",
      en: "When receiving an apology",
      ja: "謝罪を受ける時"
    },
    options: [
      {
        text: {
          ko: "재발 방지 대책이 있는지 확인한다",
          en: "Check if there are preventive measures",
          ja: "再発防止対策があるか確認する"
        },
        value: "T"
      },
      {
        text: {
          ko: "진심이 담겼는지 감정을 본다",
          en: "See if the emotion is sincere",
          ja: "真心が込められているか感情を見る"
        },
        value: "F"
      }
    ]
  },
  {
    id: 45,
    dimension: "TF",
    text: {
      ko: "뉴스에서 사회 문제를 접할 때",
      en: "When encountering social issues in the news",
      ja: "ニュースで社会問題に接する時"
    },
    options: [
      {
        text: {
          ko: "시스템과 제도적 해결책을 생각한다",
          en: "Think about systemic and institutional solutions",
          ja: "システムと制度的解決策を考える"
        },
        value: "T"
      },
      {
        text: {
          ko: "피해자들의 아픔에 공감한다",
          en: "Empathize with the victims' pain",
          ja: "被害者たちの痛みに共感する"
        },
        value: "F"
      }
    ]
  },

  // JP 차원 (46-60)
  {
    id: 46,
    dimension: "JP",
    text: {
      ko: "주말 계획을 세울 때",
      en: "When planning the weekend",
      ja: "週末の計画を立てる時"
    },
    options: [
      {
        text: {
          ko: "미리 상세한 일정을 정해둔다",
          en: "Set detailed schedule in advance",
          ja: "事前に詳しい日程を決めておく"
        },
        value: "J"
      },
      {
        text: {
          ko: "그때그때 상황에 따라 결정한다",
          en: "Decide based on the situation at the time",
          ja: "その都度状況に応じて決める"
        },
        value: "P"
      }
    ]
  },
  {
    id: 47,
    dimension: "JP",
    text: {
      ko: "과제나 업무 마감일이 있을 때",
      en: "When there's a deadline for assignments or work",
      ja: "課題や業務の締切がある時"
    },
    options: [
      {
        text: {
          ko: "미리 일찍 완료해서 여유를 둔다",
          en: "Complete early to have time to spare",
          ja: "早めに完了して余裕を持つ"
        },
        value: "J"
      },
      {
        text: {
          ko: "마감 직전의 긴장감이 집중력을 높인다",
          en: "The tension right before deadline enhances focus",
          ja: "締切直前の緊張感が集中力を高める"
        },
        value: "P"
      }
    ]
  },
  {
    id: 48,
    dimension: "JP",
    text: {
      ko: "여행을 갈 때 나는",
      en: "When going on a trip, I",
      ja: "旅行に行く時、私は"
    },
    options: [
      {
        text: {
          ko: "세세한 일정표를 만들어 따라간다",
          en: "Create a detailed itinerary and follow it",
          ja: "細かい日程表を作って従う"
        },
        value: "J"
      },
      {
        text: {
          ko: "자유롭게 돌아다니며 즉흥적으로 결정한다",
          en: "Roam freely and decide spontaneously",
          ja: "自由に回って即興的に決める"
        },
        value: "P"
      }
    ]
  },
  {
    id: 49,
    dimension: "JP",
    text: {
      ko: "방 정리와 관련해서",
      en: "Regarding room organization",
      ja: "部屋の整理について"
    },
    options: [
      {
        text: {
          ko: "정해진 위치에 물건을 항상 정리해둔다",
          en: "Always keep things in designated places",
          ja: "決まった位置に物をいつも整理しておく"
        },
        value: "J"
      },
      {
        text: {
          ko: "편한 곳에 두고 필요할 때 정리한다",
          en: "Place things conveniently and organize when needed",
          ja: "楽なところに置いて必要な時に整理する"
        },
        value: "P"
      }
    ]
  },
  {
    id: 50,
    dimension: "JP",
    text: {
      ko: "하루 일과를 시작할 때",
      en: "When starting the day",
      ja: "一日の日課を始める時"
    },
    options: [
      {
        text: {
          ko: "오늘 할 일을 리스트로 작성한다",
          en: "Make a to-do list for the day",
          ja: "今日やることをリストで作成する"
        },
        value: "J"
      },
      {
        text: {
          ko: "떠오르는 대로 처리한다",
          en: "Handle things as they come to mind",
          ja: "思いついたまま処理する"
        },
        value: "P"
      }
    ]
  },
  {
    id: 51,
    dimension: "JP",
    text: {
      ko: "쇼핑을 할 때",
      en: "When shopping",
      ja: "買い物をする時"
    },
    options: [
      {
        text: {
          ko: "필요한 것을 미리 적어가고 계획적으로 산다",
          en: "Write a list beforehand and shop systematically",
          ja: "必要なものを事前にメモして計画的に買う"
        },
        value: "J"
      },
      {
        text: {
          ko: "둘러보다가 마음에 드는 것을 즉석에서 산다",
          en: "Browse around and buy what appeals on the spot",
          ja: "見回ってから気に入ったものをその場で買う"
        },
        value: "P"
      }
    ]
  },
  {
    id: 52,
    dimension: "JP",
    text: {
      ko: "프로젝트를 진행할 때",
      en: "When working on a project",
      ja: "プロジェクトを進める時"
    },
    options: [
      {
        text: {
          ko: "명확한 계획과 일정표를 먼저 만든다",
          en: "First create a clear plan and timeline",
          ja: "明確な計画と日程表をまず作る"
        },
        value: "J"
      },
      {
        text: {
          ko: "시작하면서 방향을 잡아간다",
          en: "Figure out the direction as you start",
          ja: "始めながら方向を決めていく"
        },
        value: "P"
      }
    ]
  },
  {
    id: 53,
    dimension: "JP",
    text: {
      ko: "약속 시간에 대해",
      en: "Regarding appointment times",
      ja: "約束時間について"
    },
    options: [
      {
        text: {
          ko: "항상 정확하게 또는 일찍 도착한다",
          en: "Always arrive punctually or early",
          ja: "いつも正確にまたは早く到着する"
        },
        value: "J"
      },
      {
        text: {
          ko: "5-10분 정도는 여유있게 생각한다",
          en: "Consider 5-10 minutes flexibility acceptable",
          ja: "5-10分程度は余裕を持って考える"
        },
        value: "P"
      }
    ]
  },
  {
    id: 54,
    dimension: "JP",
    text: {
      ko: "결정을 내릴 때",
      en: "When making decisions",
      ja: "決定を下す時"
    },
    options: [
      {
        text: {
          ko: "신속하게 결정하고 실행한다",
          en: "Decide quickly and execute",
          ja: "迅速に決定して実行する"
        },
        value: "J"
      },
      {
        text: {
          ko: "여러 가능성을 열어두고 천천히 결정한다",
          en: "Keep options open and decide slowly",
          ja: "いくつかの可能性を残してゆっくり決める"
        },
        value: "P"
      }
    ]
  },
  {
    id: 55,
    dimension: "JP",
    text: {
      ko: "일을 처리하는 방식은",
      en: "My way of handling work is",
      ja: "仕事を処理する方式は"
    },
    options: [
      {
        text: {
          ko: "한 가지씩 순서대로 끝내고 다음으로 넘어간다",
          en: "Finish one thing at a time in order before moving on",
          ja: "一つずつ順番に終えて次に進む"
        },
        value: "J"
      },
      {
        text: {
          ko: "여러 일을 동시에 진행한다",
          en: "Work on multiple things simultaneously",
          ja: "いくつかの仕事を同時に進める"
        },
        value: "P"
      }
    ]
  },
  {
    id: 56,
    dimension: "JP",
    text: {
      ko: "변화나 변경사항이 생겼을 때",
      en: "When changes or modifications occur",
      ja: "変化や変更事項が生じた時"
    },
    options: [
      {
        text: {
          ko: "불편하고 스트레스를 받는다",
          en: "Feel uncomfortable and stressed",
          ja: "不便でストレスを受ける"
        },
        value: "J"
      },
      {
        text: {
          ko: "자연스럽게 받아들이고 적응한다",
          en: "Accept naturally and adapt",
          ja: "自然に受け入れて適応する"
        },
        value: "P"
      }
    ]
  },
  {
    id: 57,
    dimension: "JP",
    text: {
      ko: "캘린더나 플래너를 사용할 때",
      en: "When using a calendar or planner",
      ja: "カレンダーやプランナーを使う時"
    },
    options: [
      {
        text: {
          ko: "매일 체크하고 꼼꼼히 기록한다",
          en: "Check daily and record meticulously",
          ja: "毎日チェックして細かく記録する"
        },
        value: "J"
      },
      {
        text: {
          ko: "가끔 보거나 머릿속으로만 기억한다",
          en: "Check occasionally or just remember mentally",
          ja: "たまに見るか頭の中だけで覚えている"
        },
        value: "P"
      }
    ]
  },
  {
    id: 58,
    dimension: "JP",
    text: {
      ko: "휴가나 연휴를 보낼 때",
      en: "When spending vacation or holidays",
      ja: "休暇や連休を過ごす時"
    },
    options: [
      {
        text: {
          ko: "미리 계획을 세워 알차게 보낸다",
          en: "Plan ahead and spend productively",
          ja: "事前に計画を立てて充実して過ごす"
        },
        value: "J"
      },
      {
        text: {
          ko: "그냥 흘러가는 대로 편하게 보낸다",
          en: "Just go with the flow and relax",
          ja: "ただ流れに任せて楽に過ごす"
        },
        value: "P"
      }
    ]
  },
  {
    id: 59,
    dimension: "JP",
    text: {
      ko: "책상이나 작업 공간은",
      en: "My desk or workspace is",
      ja: "机や作業スペースは"
    },
    options: [
      {
        text: {
          ko: "항상 깔끔하게 정돈되어 있다",
          en: "Always neatly organized",
          ja: "いつもきれいに整頓されている"
        },
        value: "J"
      },
      {
        text: {
          ko: "창의적인 혼돈 상태이다",
          en: "In a state of creative chaos",
          ja: "創造的な混沌状態だ"
        },
        value: "P"
      }
    ]
  },
  {
    id: 60,
    dimension: "JP",
    text: {
      ko: "목표를 세울 때",
      en: "When setting goals",
      ja: "目標を立てる時"
    },
    options: [
      {
        text: {
          ko: "구체적인 목표와 달성 기한을 정한다",
          en: "Set specific goals and deadlines",
          ja: "具体的な目標と達成期限を決める"
        },
        value: "J"
      },
      {
        text: {
          ko: "대략적인 방향만 정하고 유연하게 간다",
          en: "Set general direction and stay flexible",
          ja: "大まかな方向だけ決めて柔軟に進む"
        },
        value: "P"
      }
    ]
  }
];