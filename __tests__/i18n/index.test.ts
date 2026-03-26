import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getLanguage,
  getPreferredLanguage,
  hydrateLanguage,
  setLanguage,
  translate,
} from '../../src/shared/lib/i18n';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

const mockedAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

describe('i18n helpers', () => {
  afterEach(async () => {
    jest.clearAllMocks();
    await setLanguage('en');
  });

  it('returns preferred language from supported locale', () => {
    const spy = jest.spyOn(Intl, 'DateTimeFormat').mockImplementation(
      () =>
        ({
          resolvedOptions: () => ({ locale: 'ka-GE' }),
        } as Intl.DateTimeFormat),
    );

    expect(getPreferredLanguage()).toBe('ka');

    spy.mockRestore();
  });

  it('falls back to english for unsupported locale', () => {
    const spy = jest.spyOn(Intl, 'DateTimeFormat').mockImplementation(
      () =>
        ({
          resolvedOptions: () => ({ locale: 'fr-FR' }),
        } as Intl.DateTimeFormat),
    );

    expect(getPreferredLanguage()).toBe('en');

    spy.mockRestore();
  });

  it('hydrates saved language from async storage', async () => {
    mockedAsyncStorage.getItem.mockResolvedValue('ru');

    const language = await hydrateLanguage();

    expect(language).toBe('ru');
    expect(getLanguage()).toBe('ru');
  });

  it('uses preferred language when storage is empty', async () => {
    mockedAsyncStorage.getItem.mockResolvedValue(null);
    const spy = jest.spyOn(Intl, 'DateTimeFormat').mockImplementation(
      () =>
        ({
          resolvedOptions: () => ({ locale: 'ka-GE' }),
        } as Intl.DateTimeFormat),
    );

    const language = await hydrateLanguage();

    expect(language).toBe('ka');
    expect(getLanguage()).toBe('ka');

    spy.mockRestore();
  });

  it('persists selected language and translates known keys', async () => {
    await setLanguage('ka');

    expect(mockedAsyncStorage.setItem).toHaveBeenCalledWith(
      'app_language',
      'ka',
    );
    expect(translate('Home')).toBe('მთავარი');
  });

  it('returns original value when translation does not exist', async () => {
    await setLanguage('ru');

    expect(translate('Completely Custom Text')).toBe('Completely Custom Text');
  });
});
