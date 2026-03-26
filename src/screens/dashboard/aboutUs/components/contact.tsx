import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/aboutUs.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const Contact: React.FC = () => {
  const { t } = useI18n();

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Icon name="email-outline" size={22} color="#2563EB" />
        <Text style={styles.sectionTitle}>{t('Contact')}</Text>
      </View>

      <View style={styles.contactRow}>
        <Icon name="email" size={18} color="#94a3b8" />
        <Text style={styles.contactText}>dzuliashvilinika016@gmail.com</Text>
      </View>

      <View style={styles.contactRow}>
        <Icon name="phone" size={18} color="#94a3b8" />
        <Text style={styles.contactText}>+995 593 92 53 62</Text>
      </View>

      <View style={styles.contactRow}>
        <Icon name="map-marker" size={18} color="#94a3b8" />
        <Text style={styles.contactText}>{t('Tbilisi, Georgia')}</Text>
      </View>
    </View>
  );
};

export default Contact;
