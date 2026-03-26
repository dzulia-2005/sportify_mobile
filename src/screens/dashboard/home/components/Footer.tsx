import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from '../styles/FooterStyles';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const Footer = () => {
  const { t } = useI18n();

  return (
    <View style={styles.footer}>
      <View style={styles.divider} />

      <View style={styles.socials}>
        <Icon name="github" size={22} color="#3B82F6" />
        <Icon name="instagram" size={22} color="#3B82F6" />
        <Icon name="mail" size={22} color="#3B82F6" />
      </View>

      <Text style={styles.text}>
        © {new Date().getFullYear()} SportZone. {t('All rights reserved.')}
      </Text>
    </View>
  );
};

export default Footer;
