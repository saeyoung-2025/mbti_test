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
import { BarChart3, Users, Heart, Zap } from "lucide-react";

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

      {/* 상세 분석 버튼 - 노란색, 큰 사이즈 */}
      <div className="flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-6 text-lg rounded-xl shadow-lg"
            >
              📊 상세 분석 보기
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{personalityType} 상세 분석</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">성격 특성 점수</h4>
                <div className="grid grid-cols-2 gap-4 text-base">
                  <div className="bg-blue-50 p-3 rounded">
                    <span className="font-medium">외향성 (E):</span> {Math.round(scores.E)}%
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <span className="font-medium">내향성 (I):</span> {Math.round(scores.I)}%
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <span className="font-medium">감각 (S):</span> {Math.round(scores.S)}%
                  </div>
                  <div className="bg-yellow-50 p-3 rounded">
                    <span className="font-medium">직관 (N):</span> {Math.round(scores.N)}%
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <span className="font-medium">사고 (T):</span> {Math.round(scores.T)}%
                  </div>
                  <div className="bg-pink-50 p-3 rounded">
                    <span className="font-medium">감정 (F):</span> {Math.round(scores.F)}%
                  </div>
                  <div className="bg-indigo-50 p-3 rounded">
                    <span className="font-medium">판단 (J):</span> {Math.round(scores.J)}%
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <span className="font-medium">인식 (P):</span> {Math.round(scores.P)}%
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">💡 성장을 위한 조언</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>약점을 보완하기 위한 구체적인 방법들을 연습해보세요</li>
                  <li>다른 성격 유형과의 소통 방식을 이해해보세요</li>
                  <li>자신의 강점을 더욱 발전시킬 수 있는 활동을 찾아보세요</li>
                  <li>정기적으로 자기 성찰의 시간을 가지세요</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">📈 발전 방향</h4>
                <div className="space-y-2 text-gray-700">
                  <p>• <strong>단기 목표:</strong> 자신의 약점 1가지를 선택해 30일 챌린지 시작하기</p>
                  <p>• <strong>중기 목표:</strong> 다양한 성격 유형의 사람들과 교류하며 소통 능력 향상하기</p>
                  <p>• <strong>장기 목표:</strong> 자신의 강점을 활용한 커리어 발전 계획 수립하기</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}