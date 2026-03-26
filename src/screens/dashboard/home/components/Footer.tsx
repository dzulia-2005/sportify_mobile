import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/FooterStyles';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const Footer = () => {
  const { t } = useI18n();

  return (
    <View style={styles.footer}>
      <View style={styles.divider} />
      <Text style={styles.text}>
        © {new Date().getFullYear()} SportZone. {t('All rights reserved.')}
      </Text>
    </View>
  );
};

export default Footer;
