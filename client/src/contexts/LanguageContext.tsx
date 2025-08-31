import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ko' | 'en' | 'ja' | 'zh';

interface LanguageContextType {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('mbti-language') as Language;
      if (savedLanguage && ['ko', 'en', 'ja', 'zh'].includes(savedLanguage)) {
        return savedLanguage;
      }
    }
    return 'ko';
  });

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('mbti-language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};