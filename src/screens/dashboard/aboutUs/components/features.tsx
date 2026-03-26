import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles/aboutUs.style';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const Features: React.FC = () => {
  const { t } = useI18n();

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Icon name="star-outline" size={22} color="#2563EB" />
        <Text style={styles.sectionTitle}>{t('Features')}</Text>
      </View>

      <Text style={styles.text}>{t('• Manage teams and players')}</Text>
      <Text style={styles.text}>
        {t('• Track goals, assists, and statistics')}
      </Text>
      <Text style={styles.text}>{t('• Organize and join tournaments')}</Text>
      <Text style={styles.text}>
        {t('• Real-time updates and performance tracking')}
      </Text>
    </View>
  );
};

export default Features;
