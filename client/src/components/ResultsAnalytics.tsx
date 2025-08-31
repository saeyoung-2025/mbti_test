import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PersonalityType } from "@/data/personality-types";
import { BarChart3, Users, Heart, Download, Zap } from "lucide-react";

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

interface ResultsAnalyticsProps {
  personalityType: string;
  personalityInfo: PersonalityType;
  scores: PersonalityScores;
}

// 호환성 매트릭스 (간단한 예시)
const compatibilityMatrix: Record<string, { best: string[]; good: string[]; challenging: string[] }> = {
  INTJ: { best: ["ENTP", "ENFP"], good: ["INTJ", "INFJ", "ENTJ"], challenging: ["ESFP", "ESTP"] },
  INTP: { best: ["ENTJ", "ENFJ"], good: ["INTP", "INTJ", "ENTP"], challenging: ["ESFJ", "ESTJ"] },
  ENTJ: { best: ["INTP", "INFP"], good: ["ENTJ", "INTJ", "ENTP"], challenging: ["ISFP", "ISTP"] },
  ENTP: { best: ["INTJ", "INFJ"], good: ["ENTP", "ENFP", "ENTJ"], challenging: ["ISFJ", "ISTJ"] },
  INFJ: { best: ["ENTP", "ENFP"], good: ["INFJ", "INTJ", "ENFJ"], challenging: ["ESTP", "ESFP"] },
  INFP: { best: ["ENTJ", "ENFJ"], good: ["INFP", "ENFP", "INFJ"], challenging: ["ESTJ", "ESFJ"] },
  ENFJ: { best: ["INFP", "ISFP"], good: ["ENFJ", "INFJ", "ENFP"], challenging: ["ISTP", "ESTP"] },
  ENFP: { best: ["INTJ", "INFJ"], good: ["ENFP", "ENFJ", "INFP"], challenging: ["ISTJ", "ESTJ"] },
  ISTJ: { best: ["ESFP", "ESTP"], good: ["ISTJ", "ISFJ", "ESTJ"], challenging: ["ENFP", "ENTP"] },
  ISFJ: { best: ["ESFP", "ESTP"], good: ["ISFJ", "ISTJ", "ESFJ"], challenging: ["ENTP", "ENFP"] },
  ESTJ: { best: ["ISFP", "ISTP"], good: ["ESTJ", "ISTJ", "ESFJ"], challenging: ["INFP", "ENFP"] },
  ESFJ: { best: ["ISFP", "ISTP"], good: ["ESFJ", "ISFJ", "ESTJ"], challenging: ["INTP", "ENTP"] },
  ISTP: { best: ["ESFJ", "ESTJ"], good: ["ISTP", "ESTP", "ISFP"], challenging: ["ENFJ", "ESFJ"] },
  ISFP: { best: ["ESFJ", "ESTJ"], good: ["ISFP", "ISTP", "ESFP"], challenging: ["ENTJ", "ESTJ"] },
  ESTP: { best: ["ISFJ", "ISTJ"], good: ["ESTP", "ESFP", "ISTP"], challenging: ["INFJ", "ENFJ"] },
  ESFP: { best: ["ISFJ", "ISTJ"], good: ["ESFP", "ESTP", "ISFP"], challenging: ["INTJ", "ENFJ"] }
};

const celebPersonalities: Record<string, string[]> = {
  INTJ: ["일론 머스크", "크리스토퍼 놀란", "니콜라 테슬라"],
  INTP: ["알베르트 아인슈타인", "빌 게이츠", "찰스 다윈"],
  ENTJ: ["스티브 잡스", "마거릿 대처", "나폴레옹"],
  ENTP: ["로버트 다우니 주니어", "월트 디즈니", "마크 트웨인"],
  INFJ: ["넬슨 만델라", "마틴 루터 킹", "마더 테레사"],
  INFP: ["윌리엄 셰익스피어", "조니 뎁", "프린세스 다이애나"],
  ENFJ: ["오프라 윈프리", "버락 오바마", "존 F. 케네디"],
  ENFP: ["로빈 윌리엄스", "윌 스미스", "엘렌 드제너러스"],
  ISTJ: ["조지 워싱턴", "워렌 버핏", "안젤라 메르켈"],
  ISFJ: ["마더 테레사", "로사 파크스", "케이트 미들턴"],
  ESTJ: ["프랭클린 루즈벨트", "고든 램지", "보리스 존슨"],
  ESFJ: ["휴 잭맨", "제니퍼 로페즈", "테일러 스위프트"],
  ISTP: ["클린트 이스트우드", "브루스 리", "스티브 잡스"],
  ISFP: ["마이클 잭슨", "프린스", "오드리 햅번"],
  ESTP: ["도널드 트럼프", "어니스트 헤밍웨이", "브루스 윌리스"],
  ESFP: ["마릴린 먼로", "엘비스 프레슬리", "빌 클린턴"]
};

export function ResultsAnalytics({ personalityType, personalityInfo, scores }: ResultsAnalyticsProps) {
  const [showCompatibility, setShowCompatibility] = useState(false);
  
  const compatibility = compatibilityMatrix[personalityType] || { best: [], good: [], challenging: [] };
  const celebrities = celebPersonalities[personalityType] || [];

  const downloadResults = () => {
    const results = {
      personalityType,
      title: personalityInfo.title,
      subtitle: personalityInfo.subtitle,
      description: personalityInfo.description,
      scores,
      strengths: personalityInfo.strengths,
      weaknesses: personalityInfo.weaknesses,
      careers: personalityInfo.careers,
      testDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `mbti-result-${personalityType}-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* 분석 통계 */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-600">전체 인구 중</p>
                <p className="text-xl font-bold text-primary">
                  {personalityType === 'INTJ' ? '2%' : 
                   personalityType === 'ENFP' ? '8%' : 
                   personalityType === 'ISFJ' ? '13%' : '6%'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-sm text-gray-600">에너지 레벨</p>
                <p className="text-xl font-bold text-secondary">
                  {scores.E > scores.I ? '외향적' : '내향적'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm text-gray-600">결정 방식</p>
                <p className="text-xl font-bold text-accent">
                  {scores.T > scores.F ? '논리형' : '감정형'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 유명인 비교 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>같은 성격 유형의 유명인</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {celebrities.map((celebrity, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {celebrity}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 호환성 분석 */}
      <Card>
        <CardHeader>
          <CardTitle>성격 호환성 분석</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-600 mb-2">최고 궁합</h4>
              <div className="flex flex-wrap gap-2">
                {compatibility.best.map((type, index) => (
                  <Badge key={index} className="bg-green-100 text-green-800">
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">좋은 궁합</h4>
              <div className="flex flex-wrap gap-2">
                {compatibility.good.map((type, index) => (
                  <Badge key={index} className="bg-blue-100 text-blue-800">
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-orange-600 mb-2">도전적 관계</h4>
              <div className="flex flex-wrap gap-2">
                {compatibility.challenging.map((type, index) => (
                  <Badge key={index} className="bg-orange-100 text-orange-800">
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 추가 기능들 */}
      <div className="flex flex-wrap gap-4">
        <Button onClick={downloadResults} variant="outline" className="flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>결과 다운로드</span>
        </Button>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">상세 분석 보기</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{personalityType} 상세 분석</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">성격 특성 점수</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>외향성: {Math.round(scores.E)}%</div>
                  <div>내향성: {Math.round(scores.I)}%</div>
                  <div>감각: {Math.round(scores.S)}%</div>
                  <div>직관: {Math.round(scores.N)}%</div>
                  <div>사고: {Math.round(scores.T)}%</div>
                  <div>감정: {Math.round(scores.F)}%</div>
                  <div>판단: {Math.round(scores.J)}%</div>
                  <div>인식: {Math.round(scores.P)}%</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">개발 제안</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>약점을 보완하기 위한 구체적인 방법들을 연습해보세요</li>
                  <li>다른 성격 유형과의 소통 방식을 이해해보세요</li>
                  <li>자신의 강점을 더욱 발전시킬 수 있는 활동을 찾아보세요</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}