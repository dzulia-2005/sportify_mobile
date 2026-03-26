import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { logout } from '../../../feature/auth/slices/authActions';
import { useAppDispatch } from '../../store/hooks/hook';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../../screens/auth/login/types/login.type';
import { useAuth } from '../../../shared/hooks/useAuth';
import {
  languageLabels,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
} from '../../../shared/lib/i18n';
import { useI18n } from '../../../shared/lib/i18n/I18nProvider';

const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();
  const { accessToken } = useAuth();
  const { language, setLanguage, t } = useI18n();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  const handleLanguageChange = async (nextLanguage: SupportedLanguage) => {
    await setLanguage(nextLanguage);
  };

  return (
    <View style={styles.Container}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        <View style={styles.languageSection}>
          <Text style={styles.languageTitle}>{t('Language')}</Text>

          <View style={styles.languageActions}>
            {SUPPORTED_LANGUAGES.map(item => {
              const isActive = item === language;

              return (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.languageButton,
                    isActive && styles.languageButtonActive,
                  ]}
                  onPress={() => handleLanguageChange(item)}
                >
                  <Text
                    style={[
                      styles.languageButtonText,
                      isActive && styles.languageButtonTextActive,
                    ]}
                  >
                    {languageLabels[item]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </DrawerContentScrollView>

      {accessToken && (
        <TouchableOpacity style={styles.bottomSection}>
          <DrawerItem
            label={t('LogOut')}
            labelStyle={styles.logoutLabel}
            onPress={handleLogout}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f8fafc', // 🔥 მთავარი background (ღია)
  },

  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },

  logoutLabel: {
    color: '#fff',
    backgroundColor: '#ef4444', // softer red
    fontWeight: 'bold',
    fontSize: 15,
    borderRadius: 8,
    textAlign: 'center',
    paddingVertical: 8,
    marginHorizontal: 16,
  },

  languageSection: {
    marginHorizontal: 16,
    marginTop: 16,
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },

  languageTitle: {
    color: '#0f172a', // 🔥 dark text
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 12,
  },

  languageActions: {
    flexDirection: 'row',
    gap: 10,
  },

  languageButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
  },

  languageButtonActive: {
    borderColor: '#22c55e',
    backgroundColor: '#dcfce7', // light green bg
  },

  languageButtonText: {
    color: '#334155',
    fontWeight: '600',
  },

  languageButtonTextActive: {
    color: '#166534',
  },
});

export default CustomDrawerContent;
