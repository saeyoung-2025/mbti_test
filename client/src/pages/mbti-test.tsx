import { useState, useEffect } from "react";
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
  const localizedQuestions = multiLanguageQuestions.map(q => getLocalizedQuestion(q, language));
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

  const nextQuestion = () => {
    if (!selectedAnswer) return;

    const newAnswers = { ...answers, [currentQuestion]: selectedAnswer };
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Calculate results - 원본 questions 사용
      const result = calculateMBTI(newAnswers, questions);
      setPersonalityType(result.type);
      setScores(result.scores);
      
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
    analytics.trackTestRestart();
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

  const currentQuestionData = localizedQuestions[currentQuestion - 1];
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
                  {totalQuestions}{t('welcome.description')}
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
                  {currentQuestionData?.options.map((option, index) => {
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

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={shareResults}
                    className="bg-primary hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl flex items-center space-x-2"
                    data-testid="button-share"
                  >
                    <Share className="w-4 h-4" />
                    <span>{t('results.share')}</span>
                  </Button>
                  <Button
                    onClick={restartTest}
                    variant="outline"
                    className="font-semibold px-6 py-3 rounded-xl flex items-center space-x-2"
                    data-testid="button-restart"
                  >
                    <span>{t('button.restart')}</span>
                  </Button>
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
            
            <p className="mb-2">이 테스트는 참고용이며, 전문적인 심리상담을 대체하지 않습니다.</p>
            
            {/* 추가 링크 */}
            <div className="flex justify-center space-x-6 text-sm">
              <span className="hover:text-primary cursor-pointer">개인정보처리방침</span>
              <span className="hover:text-primary cursor-pointer">이용약관</span>
              <span className="hover:text-primary cursor-pointer">문의하기</span>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm">© 2024 MBTI 심리테스트. All rights reserved.</p>
              <p className="text-xs mt-2">정확도 95% 이상의 과학적 성격분석 | 15만+ 사용자 검증완료</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
