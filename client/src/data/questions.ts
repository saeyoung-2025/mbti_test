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
    text: "새로운 프로젝트를 시작할 때 당신의 접근 방식은?",
    dimension: "SN",
    options: [
      { text: "구체적인 계획과 세부사항부터 정리한다", value: "S" },
      { text: "큰 그림과 가능성을 먼저 생각한다", value: "N" }
    ]
  },
  {
    id: 3,
    text: "중요한 결정을 내릴 때 무엇을 더 중요하게 생각하나요?",
    dimension: "TF",
    options: [
      { text: "논리적이고 객관적인 분석", value: "T" },
      { text: "사람들의 감정과 가치관", value: "F" }
    ]
  },
  {
    id: 4,
    text: "일상생활에서 당신은?",
    dimension: "JP",
    options: [
      { text: "계획을 세우고 그에 따라 행동한다", value: "J" },
      { text: "상황에 맞춰 유연하게 대처한다", value: "P" }
    ]
  },
  {
    id: 5,
    text: "휴식을 취할 때 당신은?",
    dimension: "EI",
    options: [
      { text: "친구들과 함께 활동적인 시간을 보낸다", value: "E" },
      { text: "혼자서 조용히 책을 읽거나 취미 활동을 한다", value: "I" }
    ]
  },
  {
    id: 6,
    text: "새로운 정보를 받아들일 때?",
    dimension: "SN",
    options: [
      { text: "현실적이고 실용적인 정보에 집중한다", value: "S" },
      { text: "숨어있는 의미나 패턴을 찾으려 한다", value: "N" }
    ]
  },
  {
    id: 7,
    text: "팀에서 갈등이 발생했을 때?",
    dimension: "TF",
    options: [
      { text: "문제의 원인을 분석하고 해결책을 제시한다", value: "T" },
      { text: "모든 사람의 의견을 듣고 조화를 이루려 한다", value: "F" }
    ]
  },
  {
    id: 8,
    text: "여행 계획을 세울 때?",
    dimension: "JP",
    options: [
      { text: "미리 일정과 숙소를 모두 예약한다", value: "J" },
      { text: "대략적인 계획만 세우고 현지에서 결정한다", value: "P" }
    ]
  },
  {
    id: 9,
    text: "새로운 사람들을 만날 때?",
    dimension: "EI",
    options: [
      { text: "먼저 다가가서 대화를 시작한다", value: "E" },
      { text: "상대방이 먼저 다가오기를 기다린다", value: "I" }
    ]
  },
  {
    id: 10,
    text: "문제를 해결할 때?",
    dimension: "SN",
    options: [
      { text: "과거의 경험과 검증된 방법을 사용한다", value: "S" },
      { text: "새로운 아이디어나 창의적 방법을 시도한다", value: "N" }
    ]
  },
  {
    id: 11,
    text: "비판을 받았을 때 당신의 반응은?",
    dimension: "TF",
    options: [
      { text: "비판의 내용이 타당한지 객관적으로 판단한다", value: "T" },
      { text: "상대방의 의도와 감정을 먼저 고려한다", value: "F" }
    ]
  },
  {
    id: 12,
    text: "업무 환경에서 선호하는 방식은?",
    dimension: "JP",
    options: [
      { text: "정해진 규칙과 절차에 따라 일한다", value: "J" },
      { text: "자유롭고 융통성 있게 일한다", value: "P" }
    ]
  },
  {
    id: 13,
    text: "스트레스를 받을 때?",
    dimension: "EI",
    options: [
      { text: "다른 사람들과 이야기하며 스트레스를 푼다", value: "E" },
      { text: "혼자만의 시간을 갖고 내적으로 정리한다", value: "I" }
    ]
  },
  {
    id: 14,
    text: "학습할 때 선호하는 방식은?",
    dimension: "SN",
    options: [
      { text: "단계별로 차근차근 배운다", value: "S" },
      { text: "전체적인 개념을 먼저 이해한다", value: "N" }
    ]
  },
  {
    id: 15,
    text: "다른 사람의 실수를 봤을 때?",
    dimension: "TF",
    options: [
      { text: "실수를 지적하고 개선방안을 제안한다", value: "T" },
      { text: "상대방의 기분을 고려해 조심스럽게 접근한다", value: "F" }
    ]
  },
  {
    id: 16,
    text: "마감이 있는 일을 할 때?",
    dimension: "JP",
    options: [
      { text: "미리 시작해서 여유 있게 완성한다", value: "J" },
      { text: "마감 직전의 압박감을 활용해 집중한다", value: "P" }
    ]
  },
  {
    id: 17,
    text: "취미 활동을 선택할 때?",
    dimension: "EI",
    options: [
      { text: "여러 사람과 함께하는 단체 활동을 선호한다", value: "E" },
      { text: "혼자서 할 수 있는 개인 활동을 선호한다", value: "I" }
    ]
  },
  {
    id: 18,
    text: "영화나 책을 고를 때?",
    dimension: "SN",
    options: [
      { text: "현실적이고 구체적인 내용을 선호한다", value: "S" },
      { text: "상상력이 풍부하고 추상적인 내용을 선호한다", value: "N" }
    ]
  },
  {
    id: 19,
    text: "친구가 고민 상담을 요청할 때?",
    dimension: "TF",
    options: [
      { text: "해결책과 조언을 제공한다", value: "T" },
      { text: "공감하고 감정적 지지를 제공한다", value: "F" }
    ]
  },
  {
    id: 20,
    text: "새로운 환경에 적응할 때?",
    dimension: "JP",
    options: [
      { text: "체계적으로 계획을 세워 적응한다", value: "J" },
      { text: "상황에 따라 즉흥적으로 적응한다", value: "P" }
    ]
  }
];