import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage, Language } from "@/hooks/useLanguage";
import { useAnalytics } from "@/hooks/useAnalytics";

const languages = [
  { value: 'ko' as Language, label: '한국어', flag: '🇰🇷' },
  { value: 'en' as Language, label: 'English', flag: '🇺🇸' },
  { value: 'ja' as Language, label: '日本語', flag: '🇯🇵' },
  { value: 'zh' as Language, label: '中文', flag: '🇨🇳' },
];

export function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();
  const analytics = useAnalytics();

  const handleLanguageChange = (newLanguage: Language) => {
    changeLanguage(newLanguage);
    analytics.trackLanguageChange(newLanguage);
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-500" />
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-32">
          <SelectValue>
            <div className="flex items-center space-x-2">
              <span>{languages.find(l => l.value === language)?.flag}</span>
              <span className="text-sm">{languages.find(l => l.value === language)?.label}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              <div className="flex items-center space-x-2">
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}