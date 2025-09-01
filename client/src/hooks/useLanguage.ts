import { useLanguageContext } from '@/contexts/LanguageContext';

export type { Language } from '@/contexts/LanguageContext';

interface Translations {
  [key: string]: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
  };
}

export const translations: Translations = {
  // Header
  'header.title': {
    ko: 'MBTI 심리테스트',
    en: 'MBTI Personality Test',
    ja: 'MBTI性格診断テスト',
    zh: 'MBTI性格测试'
  },
  'header.subtitle': {
    ko: '당신의 성격유형을 발견해보세요',
    en: 'Discover Your Personality Type',
    ja: 'あなたの性格タイプを発見してください',
    zh: '发现您的性格类型'
  },
  
  // Welcome Screen
  'welcome.title': {
    ko: '성격유형 검사에 오신 것을 환영합니다',
    en: 'Welcome to the Personality Type Test',
    ja: '性格タイプテストへようこそ',
    zh: '欢迎参加性格类型测试'
  },
  'welcome.description': {
    ko: '20가지 질문을 통해 당신의 MBTI 성격유형을 알아보세요. 솔직하고 직관적으로 답변해주시면 더 정확한 결과를 얻을 수 있습니다.',
    en: '20 questions to discover your MBTI personality type. Answer honestly and intuitively for more accurate results.',
    ja: '20つの質問を通してあなたのMBTI性格タイプを調べてみてください。正直かつ直感的に答えてください。',
    zh: '20道题了解您的MBTI性格类型。请诚实而直觉地回答以获得更准确的结果。'
  },
  'welcome.start': {
    ko: '테스트 시작하기',
    en: 'Start Test',
    ja: 'テスト開始',
    zh: '开始测试'
  },
  
  // Progress
  'progress.title': {
    ko: '진행률',
    en: 'Progress',
    ja: '進行状況',
    zh: '进度'
  },
  'question.label': {
    ko: '질문',
    en: 'Question',
    ja: '質問',
    zh: '问题'
  },
  
  // Navigation
  'nav.previous': {
    ko: '이전',
    en: 'Previous',
    ja: '前へ',
    zh: '上一个'
  },
  'nav.next': {
    ko: '다음',
    en: 'Next',
    ja: '次へ',
    zh: '下一个'
  },
  
  // Results
  'results.share': {
    ko: '결과 공유하기',
    en: 'Share Results',
    ja: '結果をシェア',
    zh: '分享结果'
  },
  'results.restart': {
    ko: '다시 테스트하기',
    en: 'Restart Test',
    ja: 'テスト再開',
    zh: '重新测试'
  },
  'results.strengths': {
    ko: '주요 강점',
    en: 'Key Strengths',
    ja: '主な強み',
    zh: '主要优势'
  },
  'results.weaknesses': {
    ko: '개선점',
    en: 'Areas for Growth',
    ja: '改善点',
    zh: '改进点'
  },
  'results.careers': {
    ko: '추천 직업',
    en: 'Recommended Careers',
    ja: '推奨職業',
    zh: '推荐职业'
  },
  
  // Language
  'language.korean': {
    ko: '한국어',
    en: '한국어',
    ja: '韓国語',
    zh: '韩语'
  },
  'language.english': {
    ko: 'English',
    en: 'English',
    ja: 'English',
    zh: 'English'
  },
  'language.japanese': {
    ko: '日本語',
    en: '日本語',
    ja: '日本語',
    zh: '日语'
  },
  'language.chinese': {
    ko: '中文',
    en: '中文',
    ja: '中国語',
    zh: '中文'
  },

  // Additional info texts
  'info.duration': {
    ko: '소요시간: 약 5-7분',
    en: 'Duration: About 5-7 minutes',
    ja: '所要時間：約5-7分',
    zh: '所需时间：约5-7分钟'
  },
  'info.questions': {
    ko: '총 {count}개 질문',
    en: 'Total {count} questions',
    ja: '合計{count}つの質問',
    zh: '总共{count}道题'
  },
  'info.accuracy': {
    ko: '정확한 성격분석',
    en: 'Accurate personality analysis',
    ja: '正確な性格分析',
    zh: '准确的性格分析'
  },
  'info.privacy': {
    ko: '개인정보 보호',
    en: 'Privacy protected',
    ja: 'プライバシー保護',
    zh: '隐私保护'
  },

  // Home/Reset buttons
  'button.home': {
    ko: '처음으로',
    en: 'Go Home',
    ja: 'ホームへ',
    zh: '返回首页'
  },
  'button.restart': {
    ko: '다시하기',
    en: 'Restart Test',
    ja: 'テスト再開',
    zh: '重新开始'
  },

  // Source and Credits
  'source.title': {
    ko: '참고자료 및 출처',
    en: 'References & Sources',
    ja: '参考資料・出典',
    zh: '参考资料与来源'
  },
  'source.mbti': {
    ko: 'MBTI 이론: 마이어스-브릭스 타입 지표 (Myers-Briggs Type Indicator)',
    en: 'MBTI Theory: Myers-Briggs Type Indicator',
    ja: 'MBTI理論：マイヤーズ＝ブリッグス・タイプ指標',
    zh: 'MBTI理论：迈尔斯-布里格斯类型指标'
  },
  'source.jung': {
    ko: '칼 융의 심리유형론 (Carl Jung\'s Psychological Types)',
    en: 'Carl Jung\'s Psychological Types Theory',
    ja: 'カール・ユングの心理学的類型論',
    zh: '卡尔·荣格的心理类型理论'
  },
  'source.foundation': {
    ko: 'Myers & Briggs Foundation 공식 자료 참조',
    en: 'Based on Myers & Briggs Foundation materials',
    ja: 'マイヤーズ&ブリッグス財団公式資料参照',
    zh: '参考迈尔斯与布里格斯基金会官方资料'
  },
  'source.disclaimer': {
    ko: '본 테스트는 교육 및 자기이해 목적으로 제작되었으며, 전문적인 심리상담을 대체하지 않습니다.',
    en: 'This test is for educational and self-understanding purposes and does not replace professional psychological counseling.',
    ja: 'このテストは教育および自己理解の目的で作成されており、専門的な心理カウンセリングの代わりになるものではありません。',
    zh: '本测试仅用于教育和自我了解目的，不能替代专业心理咨询。'
  }
};

export const useLanguage = () => {
  const { language, changeLanguage } = useLanguageContext();

  const t = (key: string): string => {
    const result = translations[key]?.[language] || key;
    return result;
  };

  return {
    language,
    changeLanguage,
    t
  };
};