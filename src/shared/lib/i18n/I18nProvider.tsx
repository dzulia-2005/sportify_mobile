import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  getPreferredLanguage,
  hydrateLanguage,
  setLanguage as persistLanguage,
  translate,
  type SupportedLanguage,
} from './index';

type I18nContextValue = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => Promise<void>;
  t: (value: string | undefined | null) => string;
  isReady: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider = ({ children }: React.PropsWithChildren) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(
    getPreferredLanguage(),
  );
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      const initialLanguage = await hydrateLanguage();
      setLanguageState(initialLanguage);
      setIsReady(true);
    };

    init();
  }, []);

  const handleSetLanguage = async (nextLanguage: SupportedLanguage) => {
    await persistLanguage(nextLanguage);
    setLanguageState(nextLanguage);
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage: handleSetLanguage,
      t: translate,
      isReady,
    }),
    [isReady, language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider');
  }

  return context;
};
