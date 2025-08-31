import { useState, useEffect } from 'react';

export type Language = 'ko' | 'en' | 'ja' | 'zh';

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
    ko: '가지 질문을 통해 당신의 MBTI 성격유형을 알아보세요.\n솔직하고 직관적으로 답변해주시면 더 정확한 결과를 얻을 수 있습니다.',
    en: 'Discover your MBTI personality type through questions.\nAnswer honestly and intuitively for more accurate results.',
    ja: 'つの質問を通してあなたのMBTI性格タイプを調べてみてください。\n正直かつ直感的に答えてください。',
    zh: '通过道题了解您的MBTI性格类型。\n请诚实而直觉地回答以获得更准确的结果。'
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
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('ko');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('mbti-language') as Language;
    if (savedLanguage && ['ko', 'en', 'ja', 'zh'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('mbti-language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return {
    language,
    changeLanguage,
    t
  };
};