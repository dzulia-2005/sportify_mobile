import React from 'react';
import { Text } from 'react-native';
import renderer, { act } from 'react-test-renderer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nProvider, useI18n } from '../../src/shared/lib/i18n/I18nProvider';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

const mockedAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

const Consumer = () => {
  const { language, setLanguage, t, isReady } = useI18n();

  return (
    <>
      <Text testID="language">{language}</Text>
      <Text testID="ready">{String(isReady)}</Text>
      <Text testID="translation">{t('Home')}</Text>
      <Text testID="change" onPress={() => setLanguage('ru')}>
        change
      </Text>
    </>
  );
};

describe('I18nProvider', () => {
  beforeEach(() => {
    mockedAsyncStorage.getItem.mockResolvedValue('ka');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('hydrates language and exposes translated values through context', async () => {
    let tree: renderer.ReactTestRenderer;

    await act(async () => {
      tree = renderer.create(
        <I18nProvider>
          <Consumer />
        </I18nProvider>,
      );
    });

    const root = tree!.root;

    expect(root.findByProps({ testID: 'ready' }).props.children).toBe('true');
    expect(root.findByProps({ testID: 'language' }).props.children).toBe('ka');
    expect(root.findByProps({ testID: 'translation' }).props.children).toBe(
      'მთავარი',
    );
  });

  it('updates context when language changes', async () => {
    let tree: renderer.ReactTestRenderer;

    await act(async () => {
      tree = renderer.create(
        <I18nProvider>
          <Consumer />
        </I18nProvider>,
      );
    });

    await act(async () => {
      tree!.root.findByProps({ testID: 'change' }).props.onPress();
    });

    const root = tree!.root;

    expect(root.findByProps({ testID: 'language' }).props.children).toBe('ru');
    expect(root.findByProps({ testID: 'translation' }).props.children).toBe(
      'Главная',
    );
    expect(mockedAsyncStorage.setItem).toHaveBeenCalledWith(
      'app_language',
      'ru',
    );
  });
});
