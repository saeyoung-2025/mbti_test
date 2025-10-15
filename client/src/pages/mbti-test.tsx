</div>
                </div>
                <Button
                  onClick={startTest}
                  className="bg-primary hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  data-testid="button-start-test"
                >
                                  <Button
                  onClick={startTest}
                  className="bg-primary hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  data-testid="button-start-test"
                >
                  {t('welcome.start')}
                </Button>

                {/* Source and Credibility Section - 시작 버튼 아래로 이동 */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8 text-left border-2 border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('source.title')}</h3>
                  <div className="space-y-2  const shareResults = () => {
    const shareText = `🧠 내 MBTI 결과: ${personalityType} (${personalityTypes[personalityType]?.title})\n\n✨ ${personalityTypes[personalityType]?.description}\n\n📊 완료 시간: ${Math.floor(testCompletionTime / 60)}분 ${testCompletionTime % 60}초\n\n🔗 당신도 테스트해보세요: ${window.location.origin}`;
    
    if (navigator.share) {
      navigator.share({
        title: `내 MBTI 결과: ${personalityType}`,
        text: shareText,
        url: window.location.origin,
      });
      analytics.trackShare('native', personalityType);
    } else {
      navigator.clipboard.writeText(shareText);
      alert("결과가 클립보드에 복사되었습니다! SNS에 붙여넣어 공유하세요.");
      analytics.trackShare('clipboard', personalityType);
    }
  };

  // 궁합 데이터 함수
  const getCompatibility = (type: string) => {
    const compatibilityData: Record<string, any> = {
      INTJ: {
        perfect: [
          { type: 'ENFP', description: '서로 다른 매력이 완벽하게 보완돼요! 외향적 감성과 내향적 논리의 조화' },
          { type: 'ENTP', description: '지적 호기심을 공유하며 서로를 자극해요' }
        ],
        good: [
          { type: 'INFJ', description: '깊은 대화가 가능한 관계, 비슷한 직관력' },
          { type: 'ENTJ', description: '비슷한 사고방식으로 서로를 이해해요' }
        ],
        challenging: [
          { type: 'ISFP', description: '감성과 논리의 차이가 있지만 서로 배울 점이 많아요' },
          { type: 'ESFP', description: '생각하는 방식이 달라서 노력이 필요해요' }
        ],
        difficult: [
          { type: 'ESTP', description: '가치관 차이로 충돌할 수 있어요. 이해와 노력이 필요해요' },
          { type: 'ESFJ', description: '우선순위가 달라 갈등이 생길 수 있어요' }
        ]
      },
      INTP: {
        perfect: [
          { type: 'ENTJ', description: '논리적 사고를 공유하며 서로를 존중해요' },
          { type: 'ENFJ', description: '서로의 약점을 보완하는 완벽한 조합' }
        ],
        good: [
          { type: 'INTJ', description: '지적 대화가 가능한 깊은 관계' },
          { type: 'INFJ', description: '사고의 깊이를 이해하는 관계' }
        ],
        challenging: [
          { type: 'ESFP', description: '접근 방식이 달라 조율이 필요해요' },
          { type: 'ISFJ', description: '표현 방식의 차이를 이해해야 해요' }
        ],
        difficult: [
          { type: 'ESTJ', description: '방식의 차이로 갈등 가능성이 있어요' },
          { type: 'ESFJ', description: '감정 표현 방식이 달라 어려울 수 있어요' }
        ]
      },
      ENTJ: {
        perfect: [
          { type: 'INTP', description: '논리적 사고를 공유하며 최고의 팀워크' },
          { type: 'INFP', description: '서로 다른 강점이 완벽하게 조화돼요' }
        ],
        good: [
          { type: 'INTJ', description: '목표 지향적인 최강 조합' },
          { type: 'ENFP', description: '에너지와 비전을 공유해요' }
        ],
        challenging: [
          { type: 'ISFP', description: '속도 차이를 이해하고 조절이 필요해요' },
          { type: 'INFJ', description: '접근 방식이 달라 타협이 필요해요' }
        ],
        difficult: [
          { type: 'ISFJ', description: '가치관 차이로 갈등 가능' },
          { type: 'ESFP', description: '우선순위가 달라 충돌할 수 있어요' }
        ]
      },
      ENTP: {
        perfect: [
          { type: 'INFJ', description: '깊이와 창의성이 만나는 완벽한 조합' },
          { type: 'INTJ', description: '지적 자극을 주고받는 관계' }
        ],
        good: [
          { type: 'ENFP', description: '아이디어와 에너지를 공유해요' },
          { type: 'ENTJ', description: '비전을 함께 실현해요' }
        ],
        challenging: [
          { type: 'ISFJ', description: '안정과 변화의 균형이 필요해요' },
          { type: 'ISTJ', description: '접근 방식이 달라 이해가 필요해요' }
        ],
        difficult: [
          { type: 'ESFJ', description: '소통 방식이 달라 갈등 가능' },
          { type: 'ISFP', description: '템포가 달라 조율이 어려워요' }
        ]
      },
      INFJ: {
        perfect: [
          { type: 'ENTP', description: '깊이와 창의성의 완벽한 조화' },
          { type: 'ENFP', description: '이상과 열정을 공유하는 관계' }
        ],
        good: [
          { type: 'INTJ', description: '비슷한 직관력으로 서로 이해해요' },
          { type: 'INFP', description: '감성을 공유하는 깊은 관계' }
        ],
        challenging: [
          { type: 'ESTP', description: '접근 방식이 달라 노력이 필요해요' },
          { type: 'ESTJ', description: '가치관을 존중하는 자세가 필요해요' }
        ],
        difficult: [
          { type: 'ISTP', description: '소통 방식이 많이 달라요' },
          { type: 'ESFP', description: '우선순위가 달라 갈등 가능' }
        ]
      },
      INFP: {
        perfect: [
          { type: 'ENTJ', description: '서로의 약점을 보완하는 최고의 조합' },
          { type: 'ENFJ', description: '이상과 감성을 함께 나눠요' }
        ],
        good: [
          { type: 'INFJ', description: '깊은 감성을 이해하는 관계' },
          { type: 'ENFP', description: '열정과 이상을 공유해요' }
        ],
        challenging: [
          { type: 'ESTJ', description: '방식이 달라 이해와 타협이 필요해요' },
          { type: 'ISTJ', description: '접근 방식을 존중해야 해요' }
        ],
        difficult: [
          { type: 'ESTP', description: '가치관이 많이 달라요' },
          { type: 'ESFJ', description: '표현 방식이 달라 갈등 가능' }
        ]
      },
      ENFJ: {
        perfect: [
          { type: 'INFP', description: '이상과 감성의 완벽한 조화' },
          { type: 'ISFP', description: '서로를 이해하고 존중하는 관계' }
        ],
        good: [
          { type: 'ENFP', description: '에너지와 열정을 공유해요' },
          { type: 'INFJ', description: '비전을 함께 실현해요' }
        ],
        challenging: [
          { type: 'ISTP', description: '표현 방식이 달라 조율이 필요해요' },
          { type: 'INTP', description: '접근 방식을 이해해야 해요' }
        ],
        difficult: [
          { type: 'ISTJ', description: '우선순위가 달라 갈등 가능' },
          { type: 'ESTJ', description: '방식이 달라 충돌할 수 있어요' }
        ]
      },
      ENFP: {
        perfect: [
          { type: 'INTJ', description: '서로 다른 매력이 완벽하게 보완돼요' },
          { type: 'INFJ', description: '이상과 열정을 공유하는 관계' }
        ],
        good: [
          { type: 'ENFJ', description: '에너지를 함께 나누는 활기찬 관계' },
          { type: 'ENTP', description: '창의력을 발휘하는 조합' }
        ],
        challenging: [
          { type: 'ISTJ', description: '속도를 맞추는 노력이 필요해요' },
          { type: 'ISFJ', description: '접근 방식이 달라 이해가 필요해요' }
        ],
        difficult: [
          { type: 'ESTJ', description: '방식이 많이 달라요' },
          { type: 'ISTP', description: '템포 차이로 갈등 가능' }
        ]
      },
      ISTJ: {
        perfect: [
          { type: 'ESFP', description: '안정과 활력의 완벽한 균형' },
          { type: 'ESTP', description: '서로를 보완하는 실용적 조합' }
        ],
        good: [
          { type: 'ISFJ', description: '책임감을 공유하는 안정적 관계' },
          { type: 'ESTJ', description: '목표를 함께 달성해요' }
        ],
        challenging: [
          { type: 'ENFP', description: '자유와 규칙의 균형이 필요해요' },
          { type: 'ENTP', description: '접근 방식이 달라 조율이 필요해요' }
        ],
        difficult: [
          { type: 'INFP', description: '가치관이 많이 달라요' },
          { type: 'ENFJ', description: '우선순위 차이로 갈등 가능' }
        ]
      },
      ISFJ: {
        perfect: [
          { type: 'ESFP', description: '돌봄과 즐거움의 완벽한 조화' },
          { type: 'ESTP', description: '안정과 활력을 주고받아요' }
        ],
        good: [
          { type: 'ISTJ', description: '책임감을 나누는 든든한 관계' },
          { type: 'ESFJ', description: '서로를 배려하는 따뜻한 관계' }
        ],
        challenging: [
          { type: 'ENTP', description: '변화와 안정의 균형이 필요해요' },
          { type: 'ENFP', description: '속도를 맞추는 노력이 필요해요' }
        ],
        difficult: [
          { type: 'INTJ', description: '접근 방식이 많이 달라요' },
          { type: 'INTP', description: '소통 방식이 달라 어려워요' }
        ]
      },
      ESTJ: {
        perfect: [
          { type: 'ISFP', description: '실행력과 감성의 조화' },
          { type: 'ISTP', description: '효율성을 추구하는 실용적 조합' }
        ],
        good: [
          { type: 'ISTJ', description: '목표를 함께 달성하는 관계' },
          { type: 'ENTJ', description: '리더십을 발휘하는 강력한 조합' }
        ],
        challenging: [
          { type: 'INFP', description: '방식을 존중하는 노력이 필요해요' },
          { type: 'ENFP', description: '접근 방식이 달라 이해가 필요해요' }
        ],
        difficult: [
          { type: 'INTP', description: '우선순위가 많이 달라요' },
          { type: 'INFJ', description: '가치관 차이로 갈등 가능' }
        ]
      },
      ESFJ: {
        perfect: [
          { type: 'ISFP', description: '돌봄과 창의성의 조화' },
          { type: 'ISTP', description: '서로를 보완하는 균형있는 관계' }
        ],
        good: [
          { type: 'ISFJ', description: '따뜻함을 나누는 안정적 관계' },
          { type: 'ESFP', description: '활기찬 에너지를 공유해요' }
        ],
        challenging: [
          { type: 'INTP', description: '표현 방식이 달라 조율이 필요해요' },
          { type: 'ENTP', description: '접근 방식을 이해해야 해요' }
        ],
        difficult: [
          { type: 'INTJ', description: '우선순위가 많이 달라요' },
          { type: 'INFP', description: '소통 방식이 달라 어려워요' }
        ]
      },
      ISTP: {
        perfect: [
          { type: 'ESFJ', description: '실용성과 돌봄의 완벽한 조화' },
          { type: 'ESTJ', description: '효율성을 추구하는 실용적 조합' }
        ],
        good: [
          { type: 'ESTP', description: '자유와 행동을 공유하는 관계' },
          { type: 'ISFP', description: '현실적 감각을 나눠요' }
        ],
        challenging: [
          { type: 'ENFJ', description: '표현 방식이 달라 노력이 필요해요' },
          { type: 'ENFP', description: '템포를 맞추는 조율이 필요해요' }
        ],
        difficult: [
          { type: 'INFJ', description: '접근 방식이 많이 달라요' },
          { type: 'ENTJ', description: '우선순위 차이로 갈등 가능' }
        ]
      },
      ISFP: {
        perfect: [
          { type: 'ENFJ', description: '이해와 배려가 넘치는 완벽한 조화' },
          { type: 'ESFJ', description: '따뜻함과 창의성을 나눠요' }
        ],
        good: [
          { type: 'ESFP', description: '자유로움을 함께 즐기는 관계' },
          { type: 'ISTP', description: '현실적 감각을 공유해요' }
        ],
        challenging: [
          { type: 'ENTJ', description: '속도를 맞추는 노력이 필요해요' },
          { type: 'INTJ', description: '접근 방식이 달라 이해가 필요해요' }
        ],
        difficult: [
          { type: 'ENTP', description: '템포가 많이 달라요' },
          { type: 'ESTJ', description: '가치관 차이로 갈등 가능' }
        ]
      },
      ESTP: {
        perfect: [
          { type: 'ISFJ', description: '활력과 안정의 완벽한 균형' },
          { type: 'ISTJ', description: '실행력을 발휘하는 실용적 조합' }
        ],
        good: [
          { type: 'ESFP', description: '에너지를 함께 발산하는 관계' },
          { type: 'ISTP', description: '행동력을 공유해요' }
        ],
        challenging: [
          { type: 'INFJ', description: '접근 방식이 달라 노력이 필요해요' },
          { type: 'INFP', description: '가치관을 이해하는 노력이 필요해요' }
        ],
        difficult: [
          { type: 'INTJ', description: '우선순위가 많이 달라요' },
          { type: 'INTP', description: '소통 방식이 달라 어려워요' }
        ]
      },
      ESFP: {
        perfect: [
          { type: 'ISTJ', description: '즐거움과 안정의 완벽한 조화' },
          { type: 'ISFJ', description: '활력과 돌봄을 나눠요' }
        ],
        good: [
          { type: 'ESTP', description: '함께 즐기는 활기찬 관계' },
          { type: 'ESFJ', description: '에너지를 공유하는 따뜻한 관계' }
        ],
        challenging: [
          { type: 'INTJ', description: '속도와 방식을 맞추는 노력이 필요해요' },
          { type: 'INTP', description: '접근 방식이 달라 이해가 필요해요' }
        ],
        difficult: [
          { type: 'INFJ', description: '우선순위가 많이 달라요' },
          { type: 'ENTJ', description: '템포 차이로 갈등 가능' }
        ]
      }
    };

    return compatibilityData[type] || {
      perfect: [],
      good: [],
      challenging: [],
      difficult: []
    };
  };import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { questions } from "@/data/questions";
import { personalityTypes } from "@/data/personality-types";
import { multiLanguageQuestions, getLocalizedQuestion } from "@/data/questions-i18n";
import { getLocalizedPersonalityType } from "@/data/personality-types-i18n";
import { calculateMBTI } from "@/lib/mbti-calculator";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ResultsAnalytics } from "@/components/ResultsAnalytics";
import { AdvancedFeatures } from "@/components/AdvancedFeatures";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { useLanguage } from "@/hooks/useLanguage";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Brain, Clock, BarChart3, Shield, Star, AlertTriangle, Briefcase, ArrowLeft, ArrowRight, Share, Sparkles, Download, Heart } from "lucide-react";
import { saveTestResult } from "@/lib/saveResults";
import { nanoid } from "nanoid";



type Screen = "welcome" | "question" | "results";
type Answer = "A" | "B";
type Answers = Record<number, Answer>;

interface PersonalityScores {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export default function MBTITest() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [personalityType, setPersonalityType] = useState<string>("");
  const [scores, setScores] = useState<PersonalityScores | null>(null);
  const [testStartTime, setTestStartTime] = useState<Date | null>(null);
  const [testCompletionTime, setTestCompletionTime] = useState<number>(0);
  const { t, language } = useLanguage();
  const analytics = useAnalytics();

  // 현재 언어에 맞는 질문과 성격 유형 데이터 가져오기
  const localizedQuestions = useMemo(() => 
    multiLanguageQuestions.map(q => getLocalizedQuestion(q, language)), 
    [language]
  );
  const totalQuestions = localizedQuestions.length;

  // 페이지 제목 동적 변경 (SEO)
  useEffect(() => {
    const titles = {
      welcome: "무료 MBTI 성격유형 테스트 - 정확한 16가지 성격 분석",
      question: `MBTI 테스트 진행중 (${currentQuestion}/${totalQuestions}) - 성격유형 검사`,
      results: `${personalityType} ${personalityTypes[personalityType]?.title} - MBTI 테스트 결과`
    };
    document.title = titles[currentScreen];
  }, [currentScreen, currentQuestion, personalityType]);

  const progress = (currentQuestion / totalQuestions) * 100;

  const startTest = () => {
    setCurrentScreen("question");
    setCurrentQuestion(1);
    setAnswers({});
    setSelectedAnswer(null);
    setTestStartTime(new Date());
    analytics.trackTestStart();
  };

  const saveResults = async (type: string, personalityScores: PersonalityScores) => {
    try {
      const result = {
        sessionId: nanoid(),
        personalityType: type,
        scores: personalityScores,
        answers: answers,
        completedAt: new Date().toISOString()
      };
      
      await saveTestResult(result);
      console.log('Results saved successfully!');
    } catch (error) {
      console.error('Failed to save results:', error);
    }
  };

  const nextQuestion = async () => {
    if (!selectedAnswer) return;

    const newAnswers = { ...answers, [currentQuestion]: selectedAnswer };
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      const result = calculateMBTI(newAnswers, questions);
      setPersonalityType(result.type);
      setScores(result.scores);

      console.log('📝 About to save results...');
      await saveResults(result.type, result.scores);
      console.log('✅ After saveResults call');
      
      // Calculate completion time
      if (testStartTime) {
        const completionTime = Math.round((new Date().getTime() - testStartTime.getTime()) / 1000);
        setTestCompletionTime(completionTime);
      }
      
      setCurrentScreen("results");
      
      // Track completion
      analytics.trackTestCompletion(result.type, testCompletionTime);
      
      // Save to local storage for future reference
      const testResult = {
        type: result.type,
        scores: result.scores,
        answers: newAnswers,
        completedAt: new Date().toISOString(),
        completionTime: testCompletionTime
      };
      localStorage.setItem('mbti-last-result', JSON.stringify(testResult));
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  const restartTest = () => {
    setCurrentScreen("welcome");
    setCurrentQuestion(1);
    setAnswers({});
    setSelectedAnswer(null);
    setPersonalityType("");
    setScores(null);
    setTestStartTime(null);
    setTestCompletionTime(0);
    analytics.trackTestStart();
  };

  const goHome = () => {
    setCurrentScreen("welcome");
    setCurrentQuestion(1);
    setAnswers({});
    setSelectedAnswer(null);
    setPersonalityType("");
    setScores(null);
    setTestStartTime(null);
    setTestCompletionTime(0);
  };

  const shareResults = () => {
    const shareText = `🧠 내 MBTI 결과: ${personalityType} (${personalityTypes[personalityType]?.title})\n\n✨ ${personalityTypes[personalityType]?.description}\n\n📊 완료 시간: ${Math.floor(testCompletionTime / 60)}분 ${testCompletionTime % 60}초\n\n🔗 당신도 테스트해보세요: ${window.location.origin}`;
    
    if (navigator.share) {
      navigator.share({
        title: `내 MBTI 결과: ${personalityType}`,
        text: shareText,
        url: window.location.origin,
      });
      analytics.trackShare('native', personalityType);
    } else {
      navigator.clipboard.writeText(shareText);
      alert("결과가 클립보드에 복사되었습니다! SNS에 붙여넣어 공유하세요.");
      analytics.trackShare('clipboard', personalityType);
    }
  };

  const currentQuestionData = useMemo(() => 
    localizedQuestions[currentQuestion - 1], 
    [localizedQuestions, currentQuestion, language]
  );
  const personalityInfo = personalityType ? getLocalizedPersonalityType(personalityType, language) || personalityTypes[personalityType] : null;

  return (
    <div className="min-h-screen bg-background">
      {/* SEO JSON-LD */}
      <SEOJsonLd 
        personalityType={personalityType}
        personalityTitle={personalityInfo?.title}
        testResult={currentScreen === "results"}
      />
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="text-center flex-1">
              <h1 className="text-3xl font-bold text-dark">{t('header.title')}</h1>
              <p className="text-gray-600 mt-2">{t('header.subtitle')}</p>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Welcome Screen */}
        {currentScreen === "welcome" && (
          <div className="text-center space-y-8">
            <Card className="p-8 md:p-12">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                  {t('welcome.title')}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {t('welcome.description')}
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-gray-700">{t('info.duration')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700">{t('info.questions').replace('{count}', totalQuestions.toString())}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-gray-700">{t('info.accuracy')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-700">{t('info.privacy')}</span>
                  </div>
                </div>

                <Button
                  onClick={startTest}
                  className="bg-primary hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  data-testid="button-start-test"
                >
                  {t('welcome.start')}
                </Button>

                {/* Source and Credibility Section - 시작 버튼 아래로 이동 */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8 text-left border-2 border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('source.title')}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• {t('source.mbti')}</p>
                    <p>• {t('source.jung')}</p>
                    <p>• {t('source.foundation')}</p>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800">{t('source.disclaimer')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Question Screen */}
        {currentScreen === "question" && (
          <div className="space-y-6">
            {/* Progress Bar */}
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">{t('progress.title')}</span>
                  <span className="text-sm font-medium text-primary">
                    {currentQuestion} / {totalQuestions}
                  </span>
                </div>
                <Progress value={progress} className="w-full h-3" />
              </CardContent>
            </Card>

            {/* Question Card */}
            <Card className="p-8 md:p-12">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <Badge variant="secondary" className="mb-4">
                    {t('question.label')} {currentQuestion}
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-bold text-dark leading-relaxed">
                    {currentQuestionData?.text}
                  </h3>
                </div>

                {/* Answer Options */}
                <div className="space-y-4">
                  {currentQuestionData?.options.map((option: any, index: number) => {
                    const value = index === 0 ? "A" : "B";
                    const isSelected = selectedAnswer === value;
                    
                    return (
                      <label
                        key={value}
                        className="block cursor-pointer group"
                        data-testid={`option-${value.toLowerCase()}`}
                      >
                        <input
                          type="radio"
                          name="answer"
                          value={value}
                          checked={isSelected}
                          onChange={() => setSelectedAnswer(value)}
                          className="sr-only"
                        />
                        <div
                          className={`border-2 rounded-xl p-6 transition-all duration-300 ${
                            isSelected
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 hover:border-primary/50 hover:bg-primary/5"
                          }`}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center ${
                                isSelected ? "border-primary" : "border-gray-300"
                              }`}
                            >
                              {isSelected && (
                                <div className="w-3 h-3 bg-primary rounded-full" />
                              )}
                            </div>
                            <span className="text-gray-700 text-lg">{option.text}</span>
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8">
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={goHome}
                      variant="outline"
                      size="sm"
                      data-testid="button-home"
                    >
                      {t('button.home')}
                    </Button>
                    <Button
                      onClick={previousQuestion}
                      disabled={currentQuestion === 1}
                      variant="ghost"
                      className="flex items-center space-x-2"
                      data-testid="button-previous"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{t('nav.previous')}</span>
                    </Button>
                  </div>
                  <Button
                    onClick={nextQuestion}
                    disabled={!selectedAnswer}
                    className="bg-primary hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl flex items-center space-x-2"
                    data-testid="button-next"
                  >
                    <span>{currentQuestion === totalQuestions ? t('nav.finish') : t('nav.next')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Results Screen */}
        {currentScreen === "results" && personalityInfo && scores && (
          <div className="space-y-8">
            {/* Result Header */}
            <Card className="p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
              <CardContent className="pt-6 relative">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-white" data-testid="text-personality-type">
                    {personalityType}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-dark mb-2" data-testid="text-personality-title">
                  {personalityInfo.title}
                </h2>
                <p className="text-xl text-gray-600 mb-4">{personalityInfo.subtitle}</p>
                <p className="text-gray-700 leading-relaxed mb-6" data-testid="text-personality-description">
                  {personalityInfo.description}
                </p>
                
                {/* Completion Stats */}
                <div className="flex justify-center items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>완료 시간: {Math.floor(testCompletionTime / 60)}분 {testCompletionTime % 60}초</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Sparkles className="w-4 h-4" />
                    <span>정확도: 95%+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personality Dimensions */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  key: "EI", 
                  dominant: scores.E > scores.I ? "E" : "I",
                  dominantLabel: scores.E > scores.I ? "외향성 (E)" : "내향성 (I)",
                  dominantScore: scores.E > scores.I ? scores.E : scores.I,
                  recessive: scores.E > scores.I ? "I" : "E",
                  recessiveLabel: scores.E > scores.I ? "내향성 (I)" : "외향성 (E)",
                  recessiveScore: scores.E > scores.I ? scores.I : scores.E,
                  color: "from-primary to-secondary"
                },
                {
                  key: "SN",
                  dominant: scores.S > scores.N ? "S" : "N", 
                  dominantLabel: scores.S > scores.N ? "감각 (S)" : "직관 (N)",
                  dominantScore: scores.S > scores.N ? scores.S : scores.N,
                  recessive: scores.S > scores.N ? "N" : "S",
                  recessiveLabel: scores.S > scores.N ? "직관 (N)" : "감각 (S)",
                  recessiveScore: scores.S > scores.N ? scores.N : scores.S,
                  color: "from-secondary to-primary"
                },
                {
                  key: "TF",
                  dominant: scores.T > scores.F ? "T" : "F",
                  dominantLabel: scores.T > scores.F ? "사고 (T)" : "감정 (F)", 
                  dominantScore: scores.T > scores.F ? scores.T : scores.F,
                  recessive: scores.T > scores.F ? "F" : "T",
                  recessiveLabel: scores.T > scores.F ? "감정 (F)" : "사고 (T)",
                  recessiveScore: scores.T > scores.F ? scores.F : scores.T,
                  color: "from-accent to-orange-400"
                },
                {
                  key: "JP",
                  dominant: scores.J > scores.P ? "J" : "P",
                  dominantLabel: scores.J > scores.P ? "판단 (J)" : "인식 (P)",
                  dominantScore: scores.J > scores.P ? scores.J : scores.P,
                  recessive: scores.J > scores.P ? "P" : "J", 
                  recessiveLabel: scores.J > scores.P ? "인식 (P)" : "판단 (J)",
                  recessiveScore: scores.J > scores.P ? scores.P : scores.J,
                  color: "from-purple-600 to-purple-400"
                }
              ].map((dimension) => (
                <Card key={dimension.key} className="p-6">
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-dark">{dimension.dominantLabel}</h3>
                      <span className="text-2xl font-bold text-primary">
                        {Math.round(dimension.dominantScore)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div
                        className={`bg-gradient-to-r ${dimension.color} h-3 rounded-full transition-all duration-1000`}
                        style={{ width: `${dimension.dominantScore}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      vs {dimension.recessiveLabel} {Math.round(dimension.recessiveScore)}%
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons - 주요 강점 바로 위 */}
            <Card className="p-6">
              <CardContent className="pt-0">
                {/* Top Row - 3 Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <Button
                    onClick={() => alert('📋 결과 분석\n\n성격 유형, 점수, 강점, 약점, 추천 직업이 포함된 상세 분석입니다.')}
                    variant="outline"
                    className="font-semibold px-5 py-2.5 rounded-xl"
                  >
                    📋 결과 분석
                  </Button>
                  <Button
                    onClick={() => alert('📊 상세 분석\n\n각 성격 차원별 점수와 의미를 자세히 설명합니다.')}
                    variant="outline"
                    className="font-semibold px-5 py-2.5 rounded-xl"
                  >
                    📊 상세 분석 보기
                  </Button>
                  <Button
                    onClick={shareResults}
                    className="bg-primary hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl flex items-center space-x-2"
                    data-testid="button-share"
                  >
                    <Share className="w-4 h-4" />
                    <span>공유하기</span>
                  </Button>
                </div>

                {/* Bottom Row - Restart Button */}
                <div className="flex justify-center">
                  <Button
                    onClick={restartTest}
                    className="bg-secondary hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg"
                    data-testid="button-restart"
                  >
                    🔄 다시 테스트하기
                  </Button>
                </div>
              </CardContent>
            </Card>
              {[
                { 
                  key: "EI", 
                  dominant: scores.E > scores.I ? "E" : "I",
                  dominantLabel: scores.E > scores.I ? "외향성 (E)" : "내향성 (I)",
                  dominantScore: scores.E > scores.I ? scores.E : scores.I,
                  recessive: scores.E > scores.I ? "I" : "E",
                  recessiveLabel: scores.E > scores.I ? "내향성 (I)" : "외향성 (E)",
                  recessiveScore: scores.E > scores.I ? scores.I : scores.E,
                  color: "from-primary to-secondary"
                },
                {
                  key: "SN",
                  dominant: scores.S > scores.N ? "S" : "N", 
                  dominantLabel: scores.S > scores.N ? "감각 (S)" : "직관 (N)",
                  dominantScore: scores.S > scores.N ? scores.S : scores.N,
                  recessive: scores.S > scores.N ? "N" : "S",
                  recessiveLabel: scores.S > scores.N ? "직관 (N)" : "감각 (S)",
                  recessiveScore: scores.S > scores.N ? scores.N : scores.S,
                  color: "from-secondary to-primary"
                },
                {
                  key: "TF",
                  dominant: scores.T > scores.F ? "T" : "F",
                  dominantLabel: scores.T > scores.F ? "사고 (T)" : "감정 (F)", 
                  dominantScore: scores.T > scores.F ? scores.T : scores.F,
                  recessive: scores.T > scores.F ? "F" : "T",
                  recessiveLabel: scores.T > scores.F ? "감정 (F)" : "사고 (T)",
                  recessiveScore: scores.T > scores.F ? scores.F : scores.T,
                  color: "from-accent to-orange-400"
                },
                {
                  key: "JP",
                  dominant: scores.J > scores.P ? "J" : "P",
                  dominantLabel: scores.J > scores.P ? "판단 (J)" : "인식 (P)",
                  dominantScore: scores.J > scores.P ? scores.J : scores.P,
                  recessive: scores.J > scores.P ? "P" : "J", 
                  recessiveLabel: scores.J > scores.P ? "인식 (P)" : "판단 (J)",
                  recessiveScore: scores.J > scores.P ? scores.P : scores.J,
                  color: "from-purple-600 to-purple-400"
                }
              ].map((dimension) => (
                <Card key={dimension.key} className="p-6">
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-dark">{dimension.dominantLabel}</h3>
                      <span className="text-2xl font-bold text-primary">
                        {Math.round(dimension.dominantScore)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div
                        className={`bg-gradient-to-r ${dimension.color} h-3 rounded-full transition-all duration-1000`}
                        style={{ width: `${dimension.dominantScore}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      vs {dimension.recessiveLabel} {Math.round(dimension.recessiveScore)}%
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Analysis */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                      <Star className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-dark">주요 강점</h3>
                  </div>
                  <ul className="space-y-3" data-testid="list-strengths">
                    {personalityInfo.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                      <AlertTriangle className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-dark">개선 포인트</h3>
                  </div>
                  <ul className="space-y-3" data-testid="list-weaknesses">
                    {personalityInfo.weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Career Suggestions */}
            <Card className="p-8">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">추천 직업</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4" data-testid="grid-careers">
                  {personalityInfo.careers.map((career, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">{career.icon}</div>
                      <p className="font-medium text-dark">{career.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="p-6">
              <CardContent className="pt-0">
                {/* Top Row - 3 Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <Button
                    onClick={() => setShowResultModal(true)}
                    variant="outline"
                    className="font-semibold px-5 py-2.5 rounded-xl"
                  >
                    📋 결과 분석
                  </Button>
                  <Button
                    onClick={() => setShowDetailModal(true)}
                    variant="outline"
                    className="font-semibold px-5 py-2.5 rounded-xl"
                  >
                    📊 상세 분석 보기
                  </Button>
                  <Button
                    onClick={shareResults}
                    className="bg-primary hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl flex items-center space-x-2"
                    data-testid="button-share"
                  >
                    <Share className="w-4 h-4" />
                    <span>공유하기</span>
                  </Button>
                </div>

                {/* Bottom Row - Restart Button */}
                <div className="flex justify-center">
                  <Button
                    onClick={restartTest}
                    className="bg-secondary hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg"
                    data-testid="button-restart"
                  >
                    🔄 다시 테스트하기
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 결과 분석 모달 */}
            {showResultModal && personalityInfo && scores && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowResultModal(false)}>
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setShowResultModal(false)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                  >
                    ✕
                  </button>
                  
                  <h2 className="text-2xl font-bold text-center mb-6">{personalityType} 결과 분석</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">성격 유형</h3>
                      <p className="text-gray-700"><strong>{personalityInfo.title}</strong> ({personalityInfo.subtitle})</p>
                      <p className="text-gray-600 mt-2">{personalityInfo.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">성격 특성 점수</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm">외향성: <strong>{scores.E}%</strong></p>
                          <p className="text-sm">내향성: <strong>{scores.I}%</strong></p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm">감각: <strong>{scores.S}%</strong></p>
                          <p className="text-sm">직관: <strong>{scores.N}%</strong></p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <p className="text-sm">사고: <strong>{scores.T}%</strong></p>
                          <p className="text-sm">감정: <strong>{scores.F}%</strong></p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm">판단: <strong>{scores.J}%</strong></p>
                          <p className="text-sm">인식: <strong>{scores.P}%</strong></p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">주요 강점</h3>
                      <ul className="space-y-1">
                        {personalityInfo.strengths.map((strength, idx) => (
                          <li key={idx} className="text-gray-700">• {strength}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">개선 포인트</h3>
                      <ul className="space-y-1">
                        {personalityInfo.weaknesses.map((weakness, idx) => (
                          <li key={idx} className="text-gray-700">• {weakness}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">추천 직업</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {personalityInfo.careers.map((career, idx) => (
                          <div key={idx} className="bg-gray-50 p-2 rounded text-center">
                            <span className="text-xl">{career.icon}</span>
                            <p className="text-sm">{career.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 상세 분석 모달 */}
            {showDetailModal && personalityInfo && scores && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowDetailModal(false)}>
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setShowDetailModal(false)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                  >
                    ✕
                  </button>
                  
                  <h2 className="text-2xl font-bold text-center mb-6">{personalityType} 상세 분석</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">성격 특성 점수</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">외향성 (E): {scores.E}%</span>
                            <span className="text-sm font-medium">내향성 (I): {scores.I}%</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">
                            {scores.E > scores.I 
                              ? '다른 사람들과의 상호작용을 통해 에너지를 얻습니다' 
                              : '혼자만의 시간을 통해 에너지를 충전합니다'}
                          </p>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: `${scores.E > scores.I ? scores.E : scores.I}%`}}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">감각 (S): {scores.S}%</span>
                            <span className="text-sm font-medium">직관 (N): {scores.N}%</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">
                            {scores.S > scores.N 
                              ? '현실적이고 구체적인 정보에 집중합니다' 
                              : '추상적이고 미래 지향적인 가능성을 봅니다'}
                          </p>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: `${scores.S > scores.N ? scores.S : scores.N}%`}}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">사고 (T): {scores.T}%</span>
                            <span className="text-sm font-medium">감정 (F): {scores.F}%</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">
                            {scores.T > scores.F 
                              ? '논리와 객관성을 바탕으로 결정합니다' 
                              : '감정과 가치를 중시하여 결정합니다'}
                          </p>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{width: `${scores.T > scores.F ? scores.T : scores.F}%`}}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">판단 (J): {scores.J}%</span>
                            <span className="text-sm font-medium">인식 (P): {scores.P}%</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">
                            {scores.J > scores.P 
                              ? '계획적이고 체계적인 삶을 선호합니다' 
                              : '유연하고 즉흥적인 접근을 선호합니다'}
                          </p>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: `${scores.J > scores.P ? scores.J : scores.P}%`}}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">개발 제안</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• 약점을 보완하기 위해 다른 유형의 사람들과 협력하세요</li>
                        <li>• 자신의 강점을 활용할 수 있는 환경을 만드세요</li>
                        <li>• 균형 잡힌 발전을 위해 약한 특성도 의식적으로 연습하세요</li>
                        <li>• 스트레스 상황에서 자신의 패턴을 인식하고 관리하세요</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}-testid="grid-careers">
                  {personalityInfo.careers.map((career, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">{career.icon}</div>
                      <p className="font-medium text-dark">{career.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

              </div>
            )}

            {/* Compatibility Section */}
            <Card className="p-8">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">MBTI 궁합</h3>
                </div>
                
                <div className="space-y-6">
                  {/* 환상의 궁합 */}
                  <div className="bg-green-50 rounded-lg p-5">
                    <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                      💚 환상의 궁합
                    </h4>
                    <div className="space-y-3">
                      {getCompatibility(personalityType).perfect.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-3">
                          <p className="font-bold text-green-700 mb-1">{personalityType} ↔ {item.type}</p>
                          <p className="text-sm text-gray-700">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 좋은 궁합 */}
                  <div className="bg-yellow-50 rounded-lg p-5">
                    <h4 className="text-lg font-bold text-yellow-800 mb-3 flex items-center">
                      💛 좋은 궁합
                    </h4>
                    <div className="space-y-3">
                      {getCompatibility(personalityType).good.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-3">
                          <p className="font-bold text-yellow-700 mb-1">{personalityType} ↔ {item.type}</p>
                          <p className="text-sm text-gray-700">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 보완이 필요한 궁합 */}
                  <div className="bg-orange-50 rounded-lg p-5">
                    <h4 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                      🧡 보완이 필요한 궁합
                    </h4>
                    <div className="space-y-3">
                      {getCompatibility(personalityType).challenging.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-3">
                          <p className="font-bold text-orange-700 mb-1">{personalityType} ↔ {item.type}</p>
                          <p className="text-sm text-gray-700">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 도전적 궁합 */}
                  <div className="bg-red-50 rounded-lg p-5">
                    <h4 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                      ❤️ 도전적 궁합
                    </h4>
                    <div className="space-y-3">
                      {getCompatibility(personalityType).difficult.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-3">
                          <p className="font-bold text-red-700 mb-1">{personalityType} ↔ {item.type}</p>
                          <p className="text-sm text-gray-700">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💡 <strong>참고:</strong> 궁합은 참고용일 뿐, 실제 관계는 노력과 이해가 더 중요해요!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Analytics */}
            <ResultsAnalytics 
              personalityType={personalityType}
              personalityInfo={personalityInfo}
              scores={scores}
            />

            {/* Advanced Features */}
            <AdvancedFeatures 
              personalityType={personalityType}
              personalityInfo={personalityInfo}
              scores={scores}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600 space-y-4">
            {/* SEO 키워드 */}
            <div className="text-xs text-gray-500 mb-4">
              <p>MBTI 테스트 | 성격유형검사 | 심리테스트 | 16personalities | 무료 성격분석 | 직업적성검사</p>
            </div>
            
            {/* 추가 링크 */}
            <div className="flex justify-center space-x-6 text-sm">
              <span className="hover:text-primary cursor-pointer">개인정보처리방침</span>
              <span className="hover:text-primary cursor-pointer">이용약관</span>
              <span className="hover:text-primary cursor-pointer">문의하기</span>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm">© 2024 MBTI 심리테스트. All rights reserved.</p>
              <p className="text-xs mt-2">정확도 95% 이상의 과학적 성격분석 | 15만+ 사용자 검증완료</p>
              <p className="text-sm mt-3">📧 문의: Mina's Lab (saeyoung2016@gmail.com)</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}