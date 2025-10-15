export interface Question {
  id: number;
  text: string;
  dimension: "EI" | "SN" | "TF" | "JP";
  options: [
    { text: string; value: "E" | "S" | "T" | "J" },
    { text: string; value: "I" | "N" | "F" | "P" }
  ];
}

export const questions: Question[] = [
  // EI (외향/내향) - 15문항
  {
    id: 1,
    text: "파티에서 당신은 주로 어떻게 행동하나요?",
    dimension: "EI",
    options: [
      { text: "여러 사람들과 활발하게 대화하며 에너지를 얻는다", value: "E" },
      { text: "소수의 친한 사람들과 깊은 대화를 나누는 것을 선호한다", value: "I" }
    ]
  },
  {
    id: 2,
    text: "휴식을 취할 때 당신은?",
    dimension: "EI",
    options: [
      { text: "친구들과 함께 활동적인 시간을 보낸다", value: "E" },
      { text: "혼자서 조용히 책을 읽거나 취미 활동을 한다", value: "I" }
    ]
  },
  {
    id: 3,
    text: "새로운 사람들을 만날 때?",
    dimension: "EI",
    options: [
      { text: "먼저 다가가서 대화를 시작한다", value: "E" },
      { text: "상대방이 먼저 다가오기를 기다린다", value: "I" }
    ]
  },
  {
    id: 4,
    text: "스트레스를 받을 때?",
    dimension: "EI",
    options: [
      { text: "다른 사람들과 이야기하며 스트레스를 푼다", value: "E" },
      { text: "혼자만의 시간을 갖고 내적으로 정리한다", value: "I" }
    ]
  },
  {
    id: 5,
    text: "취미 활동을 선택할 때?",
    dimension: "EI",
    options: [
      { text: "여러 사람과 함께하는 단체 활동을 선호한다", value: "E" },
      { text: "혼자서 할 수 있는 개인 활동을 선호한다", value: "I" }
    ]
  },
  {
    id: 6,
    text: "주말을 보내는 이상적인 방법은?",
    dimension: "EI",
    options: [
      { text: "친구들과 만나 활발하게 시간을 보낸다", value: "E" },
      { text: "집에서 편안하게 나만의 시간을 갖는다", value: "I" }
    ]
  },
  {
    id: 7,
    text: "전화와 문자 중 선호하는 것은?",
    dimension: "EI",
    options: [
      { text: "전화로 직접 대화하는 것이 편하다", value: "E" },
      { text: "문자로 생각을 정리해서 보내는 것이 편하다", value: "I" }
    ]
  },
  {
    id: 8,
    text: "회의나 모임에서?",
    dimension: "EI",
    options: [
      { text: "적극적으로 의견을 개진하고 토론한다", value: "E" },
      { text: "생각을 정리한 후 필요할 때 발언한다", value: "I" }
    ]
  },
  {
    id: 9,
    text: "낯선 환경에 처했을 때?",
    dimension: "EI",
    options: [
      { text: "새로운 사람들에게 먼저 말을 건다", value: "E" },
      { text: "상황을 관찰하며 천천히 적응한다", value: "I" }
    ]
  },
  {
    id: 10,
    text: "긴 하루가 끝나면?",
    dimension: "EI",
    options: [
      { text: "사람들과 어울리며 하루를 마무리하고 싶다", value: "E" },
      { text: "조용히 혼자만의 시간으로 재충전하고 싶다", value: "I" }
    ]
  },
  {
    id: 11,
    text: "생각을 정리할 때?",
    dimension: "EI",
    options: [
      { text: "다른 사람과 이야기하면서 생각을 발전시킨다", value: "E" },
      { text: "혼자 깊이 생각하며 정리한다", value: "I" }
    ]
  },
  {
    id: 12,
    text: "카페에서 친구를 기다릴 때?",
    dimension: "EI",
    options: [
      { text: "주변 사람들을 관찰하거나 대화를 시도한다", value: "E" },
      { text: "책을 읽거나 휴대폰을 보며 조용히 기다린다", value: "I" }
    ]
  },
  {
    id: 13,
    text: "새로운 아이디어를 떠올렸을 때?",
    dimension: "EI",
    options: [
      { text: "즉시 다른 사람들과 공유하고 의견을 듣는다", value: "E" },
      { text: "혼자 충분히 다듬은 후에 공유한다", value: "I" }
    ]
  },
  {
    id: 14,
    text: "점심시간에?",
    dimension: "EI",
    options: [
      { text: "동료들과 함께 식사하며 이야기 나누기를 좋아한다", value: "E" },
      { text: "혼자 또는 소수와 조용히 식사하는 것을 선호한다", value: "I" }
    ]
  },
  {
    id: 15,
    text: "에너지가 충전되는 순간은?",
    dimension: "EI",
    options: [
      { text: "사람들과 활발하게 소통할 때", value: "E" },
      { text: "조용한 공간에서 나만의 시간을 가질 때", value: "I" }
    ]
  },

  // SN (감각/직관) - 15문항
  {
    id: 16,
    text: "새로운 프로젝트를 시작할 때 당신의 접근 방식은?",
    dimension: "SN",
    options: [
      { text: "구체적인 계획과 세부사항부터 정리한다", value: "S" },
      { text: "큰 그림과 가능성을 먼저 생각한다", value: "N" }
    ]
  },
  {
    id: 17,
    text: "새로운 정보를 받아들일 때?",
    dimension: "SN",
    options: [
      { text: "현실적이고 실용적인 정보에 집중한다", value: "S" },
      { text: "숨어있는 의미나 패턴을 찾으려 한다", value: "N" }
    ]
  },
  {
    id: 18,
    text: "문제를 해결할 때?",
    dimension: "SN",
    options: [
      { text: "과거의 경험과 검증된 방법을 사용한다", value: "S" },
      { text: "새로운 아이디어나 창의적 방법을 시도한다", value: "N" }
    ]
  },
  {
    id: 19,
    text: "학습할 때 선호하는 방식은?",
    dimension: "SN",
    options: [
      { text: "단계별로 차근차근 배운다", value: "S" },
      { text: "전체적인 개념을 먼저 이해한다", value: "N" }
    ]
  },
  {
    id: 20,
    text: "영화나 책을 고를 때?",
    dimension: "SN",
    options: [
      { text: "현실적이고 구체적인 내용을 선호한다", value: "S" },
      { text: "상상력이 풍부하고 추상적인 내용을 선호한다", value: "N" }
    ]
  },
  {
    id: 21,
    text: "일을 설명할 때?",
    dimension: "SN",
    options: [
      { text: "구체적인 사실과 데이터를 중심으로 설명한다", value: "S" },
      { text: "전체적인 맥락과 의미를 중심으로 설명한다", value: "N" }
    ]
  },
  {
    id: 22,
    text: "미래를 생각할 때?",
    dimension: "SN",
    options: [
      { text: "현실적이고 달성 가능한 목표를 세운다", value: "S" },
      { text: "이상적이고 혁신적인 비전을 그린다", value: "N" }
    ]
  },
  {
    id: 23,
    text: "새로운 기기나 제품을 사용할 때?",
    dimension: "SN",
    options: [
      { text: "설명서를 읽고 단계별로 따라한다", value: "S" },
      { text: "직관적으로 조작하며 기능을 파악한다", value: "N" }
    ]
  },
  {
    id: 24,
    text: "대화할 때 집중하는 부분은?",
    dimension: "SN",
    options: [
      { text: "구체적인 사실과 세부 내용", value: "S" },
      { text: "숨은 의미와 전체적인 흐름", value: "N" }
    ]
  },
  {
    id: 25,
    text: "요리를 할 때?",
    dimension: "SN",
    options: [
      { text: "레시피를 정확히 따라한다", value: "S" },
      { text: "레시피를 참고하되 창의적으로 변형한다", value: "N" }
    ]
  },
  {
    id: 26,
    text: "업무 지시를 받을 때?",
    dimension: "SN",
    options: [
      { text: "구체적인 단계와 방법을 알고 싶어한다", value: "S" },
      { text: "목표와 방향성을 이해하면 충분하다", value: "N" }
    ]
  },
  {
    id: 27,
    text: "질문을 받았을 때?",
    dimension: "SN",
    options: [
      { text: "질문에 직접적으로 답한다", value: "S" },
      { text: "배경 설명이나 관련 이야기를 함께 한다", value: "N" }
    ]
  },
  {
    id: 28,
    text: "기억에 남는 것은?",
    dimension: "SN",
    options: [
      { text: "구체적인 사실과 세부 사항들", value: "S" },
      { text: "전체적인 인상과 느낌", value: "N" }
    ]
  },
  {
    id: 29,
    text: "변화에 대해?",
    dimension: "SN",
    options: [
      { text: "검증되고 안정적인 방법을 선호한다", value: "S" },
      { text: "새롭고 혁신적인 방법에 흥미를 느낀다", value: "N" }
    ]
  },
  {
    id: 30,
    text: "관찰할 때 주목하는 것은?",
    dimension: "SN",
    options: [
      { text: "실제로 보이는 구체적인 사실들", value: "S" },
      { text: "가능성과 잠재적인 의미들", value: "N" }
    ]
  },

  // TF (사고/감정) - 15문항
  {
    id: 31,
    text: "중요한 결정을 내릴 때 무엇을 더 중요하게 생각하나요?",
    dimension: "TF",
    options: [
      { text: "논리적이고 객관적인 분석", value: "T" },
      { text: "사람들의 감정과 가치관", value: "F" }
    ]
  },
  {
    id: 32,
    text: "팀에서 갈등이 발생했을 때?",
    dimension: "TF",
    options: [
      { text: "문제의 원인을 분석하고 해결책을 제시한다", value: "T" },
      { text: "모든 사람의 의견을 듣고 조화를 이루려 한다", value: "F" }
    ]
  },
  {
    id: 33,
    text: "비판을 받았을 때 당신의 반응은?",
    dimension: "TF",
    options: [
      { text: "비판의 내용이 타당한지 객관적으로 판단한다", value: "T" },
      { text: "상대방의 의도와 감정을 먼저 고려한다", value: "F" }
    ]
  },
  {
    id: 34,
    text: "다른 사람의 실수를 봤을 때?",
    dimension: "TF",
    options: [
      { text: "실수를 지적하고 개선방안을 제안한다", value: "T" },
      { text: "상대방의 기분을 고려해 조심스럽게 접근한다", value: "F" }
    ]
  },
  {
    id: 35,
    text: "친구가 고민 상담을 요청할 때?",
    dimension: "TF",
    options: [
      { text: "해결책과 조언을 제공한다", value: "T" },
      { text: "공감하고 감정적 지지를 제공한다", value: "F" }
    ]
  },
  {
    id: 36,
    text: "업무를 평가할 때?",
    dimension: "TF",
    options: [
      { text: "객관적인 기준과 성과를 중시한다", value: "T" },
      { text: "노력과 과정, 팀워크를 중시한다", value: "F" }
    ]
  },
  {
    id: 37,
    text: "의견이 다를 때?",
    dimension: "TF",
    options: [
      { text: "논리적으로 설득하려 한다", value: "T" },
      { text: "상대방의 입장을 이해하려 노력한다", value: "F" }
    ]
  },
  {
    id: 38,
    text: "영화나 드라마를 볼 때?",
    dimension: "TF",
    options: [
      { text: "줄거리의 논리성과 완성도에 주목한다", value: "T" },
      { text: "등장인물의 감정과 관계에 몰입한다", value: "F" }
    ]
  },
  {
    id: 39,
    text: "칭찬을 할 때?",
    dimension: "TF",
    options: [
      { text: "구체적인 성과나 능력을 언급한다", value: "T" },
      { text: "상대방의 노력과 마음을 인정한다", value: "F" }
    ]
  },
  {
    id: 40,
    text: "선물을 고를 때?",
    dimension: "TF",
    options: [
      { text: "실용적이고 유용한 것을 선택한다", value: "T" },
      { text: "상대방이 좋아할 만한 감성적인 것을 선택한다", value: "F" }
    ]
  },
  {
    id: 41,
    text: "토론할 때?",
    dimension: "TF",
    options: [
      { text: "사실과 논리로 입장을 밝힌다", value: "T" },
      { text: "상대방의 감정을 배려하며 의견을 나눈다", value: "F" }
    ]
  },
  {
    id: 42,
    text: "누군가 슬퍼할 때?",
    dimension: "TF",
    options: [
      { text: "해결 방법을 생각하고 조언한다", value: "T" },
      { text: "곁에서 위로하고 공감한다", value: "F" }
    ]
  },
  {
    id: 43,
    text: "피드백을 줄 때?",
    dimension: "TF",
    options: [
      { text: "개선이 필요한 부분을 명확히 지적한다", value: "T" },
      { text: "긍정적인 부분을 먼저 언급하고 부드럽게 전달한다", value: "F" }
    ]
  },
  {
    id: 44,
    text: "규칙에 대해?",
    dimension: "TF",
    options: [
      { text: "공정성과 일관성을 위해 지켜야 한다", value: "T" },
      { text: "상황과 사람에 따라 유연하게 적용할 수 있다", value: "F" }
    ]
  },
  {
    id: 45,
    text: "가치를 판단할 때?",
    dimension: "TF",
    options: [
      { text: "효율성과 합리성을 기준으로 한다", value: "T" },
      { text: "조화와 사람들의 행복을 기준으로 한다", value: "F" }
    ]
  },

  // JP (판단/인식) - 15문항
  {
    id: 46,
    text: "일상생활에서 당신은?",
    dimension: "JP",
    options: [
      { text: "계획을 세우고 그에 따라 행동한다", value: "J" },
      { text: "상황에 맞춰 유연하게 대처한다", value: "P" }
    ]
  },
  {
    id: 47,
    text: "여행 계획을 세울 때?",
    dimension: "JP",
    options: [
      { text: "미리 일정과 숙소를 모두 예약한다", value: "J" },
      { text: "대략적인 계획만 세우고 현지에서 결정한다", value: "P" }
    ]
  },
  {
    id: 48,
    text: "업무 환경에서 선호하는 방식은?",
    dimension: "JP",
    options: [
      { text: "정해진 규칙과 절차에 따라 일한다", value: "J" },
      { text: "자유롭고 융통성 있게 일한다", value: "P" }
    ]
  },
  {
    id: 49,
    text: "마감이 있는 일을 할 때?",
    dimension: "JP",
    options: [
      { text: "미리 시작해서 여유 있게 완성한다", value: "J" },
      { text: "마감 직전의 압박감을 활용해 집중한다", value: "P" }
    ]
  },
  {
    id: 50,
    text: "새로운 환경에 적응할 때?",
    dimension: "JP",
    options: [
      { text: "체계적으로 계획을 세워 적응한다", value: "J" },
      { text: "상황에 따라 즉흥적으로 적응한다", value: "P" }
    ]
  },
  {
    id: 51,
    text: "방이나 책상 정리는?",
    dimension: "JP",
    options: [
      { text: "항상 정리정돈된 상태를 유지한다", value: "J" },
      { text: "사용하기 편한 대로 두는 편이다", value: "P" }
    ]
  },
  {
    id: 52,
    text: "하루 일과는?",
    dimension: "JP",
    options: [
      { text: "미리 계획하고 스케줄대로 움직인다", value: "J" },
      { text: "그때그때 상황에 따라 결정한다", value: "P" }
    ]
  },
  {
    id: 53,
    text: "쇼핑할 때?",
    dimension: "JP",
    options: [
      { text: "필요한 목록을 작성하고 계획적으로 구매한다", value: "J" },
      { text: "둘러보다가 마음에 드는 것을 산다", value: "P" }
    ]
  },
  {
    id: 54,
    text: "약속 시간에?",
    dimension: "JP",
    options: [
      { text: "여유있게 미리 도착하는 편이다", value: "J" },
      { text: "딱 맞춰 또는 조금 늦게 도착하는 편이다", value: "P" }
    ]
  },
  {
    id: 55,
    text: "일을 처리할 때?",
    dimension: "JP",
    options: [
      { text: "하나씩 완료하고 다음으로 넘어간다", value: "J" },
      { text: "여러 일을 동시에 진행한다", value: "P" }
    ]
  },
  {
    id: 56,
    text: "변경 사항이 생겼을 때?",
    dimension: "JP",
    options: [
      { text: "계획이 틀어지면 불편하고 스트레스를 받는다", value: "J" },
      { text: "변화에 유연하게 대응하고 즐긴다", value: "P" }
    ]
  },
  {
    id: 57,
    text: "프로젝트를 시작할 때?",
    dimension: "JP",
    options: [
      { text: "전체 계획을 먼저 세우고 시작한다", value: "J" },
      { text: "일단 시작하면서 방향을 잡아간다", value: "P" }
    ]
  },
  {
    id: 58,
    text: "결정을 내릴 때?",
    dimension: "JP",
    options: [
      { text: "빨리 결정하고 실행에 옮긴다", value: "J" },
      { text: "가능성을 열어두고 천천히 결정한다", value: "P" }
    ]
  },
  {
    id: 59,
    text: "할 일 목록에 대해?",
    dimension: "JP",
    options: [
      { text: "체크리스트를 만들고 하나씩 완료하는 것이 만족스럽다", value: "J" },
      { text: "목록보다는 하고 싶은 일을 우선적으로 한다", value: "P" }
    ]
  },
  {
    id: 60,
    text: "주말 계획은?",
    dimension: "JP",
    options: [
      { text: "미리 무엇을 할지 정해두고 그대로 실행한다", value: "J" },
      { text: "그때 기분과 상황에 따라 자유롭게 정한다", value: "P" }
    ]
  }
];