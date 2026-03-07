"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { translations, type LanguageCode, type TranslationContent } from '@/lib/translations';
import { LANGUAGE_COOKIE } from '@/lib/language';

const STORAGE_KEY = LANGUAGE_COOKIE;

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: TranslationContent;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLanguage = 'EN'
}: {
  children: ReactNode;
  initialLanguage?: LanguageCode;
}) {
  const router = useRouter();
  const [language, setLanguageState] = useState<LanguageCode>(initialLanguage);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (stored && stored in translations && stored !== language) {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language.toLowerCase();
    document.cookie = `${LANGUAGE_COOKIE}=${language}; path=/; max-age=31536000; SameSite=Lax`;
  }, [language]);

  const setLanguage = (code: LanguageCode) => {
    if (code === language) {
      return;
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, code);
      document.documentElement.lang = code.toLowerCase();
      document.cookie = `${LANGUAGE_COOKIE}=${code}; path=/; max-age=31536000; SameSite=Lax`;
    }

    setLanguageState(code);
    router.refresh();
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: translations[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
