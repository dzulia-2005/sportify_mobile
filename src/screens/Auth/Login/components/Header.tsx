import React from 'react';
import { StatusBar, Text } from 'react-native';
import { styles } from '../styles/LoginStyles';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const Header: React.FC = () => {
  const { t } = useI18n();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Sportify</Text>
      <Text style={styles.subtitle}>{t('Login your account')}</Text>
    </>
  );
};

export default Header;
