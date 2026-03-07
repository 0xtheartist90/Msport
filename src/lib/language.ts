import { translations, type LanguageCode } from '@/lib/translations';

export const LANGUAGE_COOKIE = 'msport-language';
export const DEFAULT_LANGUAGE: LanguageCode = 'EN';

export const isLanguageCode = (value: string | null | undefined): value is LanguageCode => {
  return Boolean(value && value in translations);
};

export const resolveLanguage = (value: string | null | undefined): LanguageCode => {
  if (isLanguageCode(value)) {
    return value;
  }

  return DEFAULT_LANGUAGE;
};
