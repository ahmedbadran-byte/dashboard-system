'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { dictionary, type Language } from '@/lib/i18n/dictionary';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof (typeof dictionary)['en']) => string;
  direction: 'ltr' | 'rtl';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const stored = window.localStorage.getItem('kleen-language') as Language | null;
    if (stored === 'en' || stored === 'ar') setLanguage(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('kleen-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: keyof (typeof dictionary)['en']) => dictionary[language][key],
      direction: language === 'ar' ? 'rtl' : 'ltr'
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
