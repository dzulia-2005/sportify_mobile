import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SUPPORTED_LANGUAGES,
  SupportedLanguage,
  translations,
} from './translations';

const LANGUAGE_STORAGE_KEY = 'app_language';

let currentLanguage: SupportedLanguage = 'en';

const normalizeLanguage = (
  value: string | null | undefined,
): SupportedLanguage => {
  if (!value) {
    return 'en';
  }

  const lowerValue = value.toLowerCase();
  const matched = SUPPORTED_LANGUAGES.find(
    language =>
      lowerValue === language || lowerValue.startsWith(`${language}-`),
  );

  return matched ?? 'en';
};

export const getPreferredLanguage = (): SupportedLanguage => {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  return normalizeLanguage(locale);
};

export const getLanguage = () => currentLanguage;

export const setLanguage = async (language: SupportedLanguage) => {
  currentLanguage = language;
  await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);
};

export const hydrateLanguage = async (): Promise<SupportedLanguage> => {
  const storedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
  currentLanguage = storedLanguage
    ? normalizeLanguage(storedLanguage)
    : getPreferredLanguage();
  return currentLanguage;
};

export const translate = (value: string | undefined | null): string => {
  if (!value) {
    return '';
  }

  if (currentLanguage === 'en') {
    return value;
  }

  return translations[currentLanguage][value] ?? value;
};

export { SUPPORTED_LANGUAGES, type SupportedLanguage } from './translations';
export { languageLabels } from './translations';
export { LANGUAGE_STORAGE_KEY };
