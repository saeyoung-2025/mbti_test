import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { PersonalityType } from "@/data/personality-types";
import { 
  TrendingUp, 
  Users2, 
  Brain, 
  Target, 
  Lightbulb, 
  BookOpen, 
  Calendar,
  Trophy,
  Heart,
  Briefcase
} from "lucide-react";

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

interface AdvancedFeaturesProps {
  personalityType: string;
  personalityInfo: PersonalityType;
  scores: PersonalityScores;
}

// 성장 제안 데이터
const growthSuggestions: Record<string, string[]> = {
  INTJ: [
    "팀워크 스킬 개발하기",
    "감정 표현 연습하기", 
    "단기 목표 설정하기",
    "네트워킹 활동 참여하기"
  ],
  INFP: [
    "결정력 강화하기",
    "시간 관리 개선하기",
    "논리적 사고 훈련하기",
    "갈등 해결 능력 기르기"
  ],
  ENFP: [
    "집중력 향상시키기",
    "체계적 계획 세우기",
    "디테일 관리 능력 기르기",
    "마감일 준수 연습하기"
  ],
  ISTJ: [
    "창의성 개발하기",
    "변화 적응력 기르기",
    "유연한 사고 연습하기",
    "새로운 경험 시도하기"
  ],
  // 다른 타입들도 추가 가능
};

// 학습 리소스
const learningResources = [
  {
    title: "MBTI 심화 이해",
    description: "각 성격 유형별 상세 특성과 발전 방향",
    icon: <Brain className="w-5 h-5" />,
    topics: ["인지 기능", "성격 발달", "타입 동역학"]
  },
  {
    title: "대인관계 개선",
    description: "다른 성격 유형과의 효과적인 소통법",
    icon: <Users2 className="w-5 h-5" />,
    topics: ["갈등 해결", "팀워크", "리더십"]
  },
  {
    title: "진로 개발",
    description: "성격 유형에 맞는 직업과 진로 경로",
    icon: <Briefcase className="w-5 h-5" />,
    topics: ["직업 탐색", "스킬 개발", "커리어 로드맵"]
  }
];

export function AdvancedFeatures({ personalityType, personalityInfo, scores }: AdvancedFeaturesProps) {
  const [activeTab, setActiveTab] = useState("growth");

  const suggestions = growthSuggestions[personalityType] || [
    "자기 성찰 시간 갖기",
    "새로운 도전 해보기",
    "다양한 관점 수용하기",
    "지속적인 학습하기"
  ];

  // 성격 균형도 계산
  const dimensions = [
    { name: "외향성 vs 내향성", e: scores.E, i: scores.I },
    { name: "감각 vs 직관", s: scores.S, n: scores.N },
    { name: "사고 vs 감정", t: scores.T, f: scores.F },
    { name: "판단 vs 인식", j: scores.J, p: scores.P }
  ];

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="growth">성장 계획</TabsTrigger>
          <TabsTrigger value="balance">성격 균형</TabsTrigger>
          <TabsTrigger value="learning">학습 자료</TabsTrigger>
          <TabsTrigger value="goals">목표 설정</TabsTrigger>
        </TabsList>

        <TabsContent value="growth" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>개인 성장 제안</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs font-semibold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{suggestion}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {personalityType} 유형의 특성을 고려한 개선 방향입니다.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="balance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>성격 차원 균형도</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {dimensions.map((dimension, index) => {
                  const total = Object.values(dimension).slice(1).reduce((a, b) => a + b, 0);
                  const values = Object.values(dimension).slice(1);
                  const percentage = (values[0] / total) * 100;
                  
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{dimension.name}</span>
                        <span className="text-sm text-gray-600">
                          {Math.round(percentage)}% : {Math.round(100 - percentage)}%
                        </span>
                      </div>
                      <Progress value={percentage} className="h-3" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{Object.keys(dimension)[1].toUpperCase()}</span>
                        <span>{Object.keys(dimension)[2].toUpperCase()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {learningResources.map((resource, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    {resource.icon}
                    <span>{resource.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="space-y-2">
                    {resource.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="mr-2">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    자세히 보기
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>맞춤형 목표 설정</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>단기 목표 (1-3개월)</span>
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">매일 15분 자기 성찰 시간 갖기</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">새로운 사람과 대화 나누기</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">약점 보완을 위한 활동 시작하기</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>장기 목표 (6-12개월)</span>
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">성격 유형의 잠재력 개발하기</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">대인관계 만족도 향상시키기</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">진로/직업에서 성격 강점 활용하기</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}