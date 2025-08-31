import { useEffect } from 'react';

interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const trackEvent = (eventData: AnalyticsEvent) => {
    // Google Analytics 이벤트 추적 (GA4)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventData.action || eventData.event, {
        event_category: eventData.category,
        event_label: eventData.label,
        value: eventData.value
      });
    }

    // Console 로그로 개발 중 확인
    console.log('Analytics Event:', eventData);
  };

  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href
      });
    }
  };

  const trackTestCompletion = (personalityType: string, completionTime: number) => {
    trackEvent({
      event: 'test_completed',
      category: 'MBTI_Test',
      action: 'completed',
      label: personalityType,
      value: completionTime
    });
  };

  const trackTestStart = () => {
    trackEvent({
      event: 'test_started',
      category: 'MBTI_Test',
      action: 'started'
    });
  };

  const trackShare = (platform: string, personalityType: string) => {
    trackEvent({
      event: 'result_shared',
      category: 'Social_Share',
      action: 'shared',
      label: `${platform}_${personalityType}`
    });
  };

  const trackLanguageChange = (newLanguage: string) => {
    trackEvent({
      event: 'language_changed',
      category: 'User_Interaction',
      action: 'language_change',
      label: newLanguage
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackTestCompletion,
    trackTestStart,
    trackShare,
    trackLanguageChange
  };
};