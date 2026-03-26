import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/aboutUs.style';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <Text style={styles.footer}>
      © {new Date().getFullYear()} Sportify. {t('All rights reserved.')}
    </Text>
  );
};

export default Footer;
