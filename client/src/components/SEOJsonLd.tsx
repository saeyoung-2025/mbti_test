interface SEOJsonLdProps {
  personalityType?: string;
  personalityTitle?: string;
  testResult?: boolean;
}

export function SEOJsonLd({ personalityType, personalityTitle, testResult = false }: SEOJsonLdProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "무료 MBTI 성격유형 테스트",
    "description": "정확한 MBTI 성격유형 테스트로 당신의 16가지 성격 중 하나를 발견하세요",
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "applicationCategory": "PersonalityTest",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    },
    "author": {
      "@type": "Organization",
      "name": "MBTI 테스트"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "15420",
      "bestRating": "5"
    }
  };

  if (testResult && personalityType && personalityTitle) {
    const resultSchema = {
      ...baseSchema,
      "@type": "WebPage",
      "name": `${personalityType} ${personalityTitle} - MBTI 테스트 결과`,
      "description": `당신의 MBTI 성격유형은 ${personalityType} (${personalityTitle})입니다. 상세한 성격 분석과 특성을 확인하세요.`,
      "mainEntity": {
        "@type": "Person",
        "name": `${personalityType} 성격유형`,
        "description": personalityTitle,
        "knowsAbout": [`MBTI ${personalityType}`, "성격 분석", "심리테스트"]
      }
    };
    
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resultSchema) }}
      />
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}